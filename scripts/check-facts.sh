#!/usr/bin/env bash
# check-facts.sh -- scan both branches for stale or incorrect facts.
# Exits non-zero on any hit. No dependencies beyond git and grep.

set -euo pipefail

REPO_ROOT="$(git -C "$(dirname "$0")/.." rev-parse --show-toplevel)"
cd "$REPO_ROOT"

errors=0

check_branch() {
  local branch="$1"
  local file content
  file="index.html"

  if ! git rev-parse --verify "$branch" >/dev/null 2>&1; then
    echo "SKIP: branch '$branch' not found"
    return
  fi

  content="$(git show "$branch:$file" 2>/dev/null)" || {
    echo "SKIP: $branch:$file not found"
    return
  }

  local patterns=(
    '>17+<'
    '>14+<'
    '14+ year'
    '17+ year'
    'Q4 2026'
    '[Gg]roundtruth'
    'ghost\.io'
    '[Mm]ulti-million'
  )

  for pat in "${patterns[@]}"; do
    hits="$(echo "$content" | grep -n "$pat" || true)"
    if [ -n "$hits" ]; then
      echo "FAIL [$branch:$file] pattern '$pat':"
      echo "$hits" | sed 's/^/  /'
      errors=$((errors + 1))
    fi
  done

  # Present-tense Walmart claims (should be past tense)
  local present_patterns=(
    'I lead'
    'I manage'
    'I direct'
    'I oversee'
  )

  for pat in "${present_patterns[@]}"; do
    hits="$(echo "$content" | grep -n "$pat" || true)"
    if [ -n "$hits" ]; then
      echo "FAIL [$branch:$file] present-tense claim '$pat':"
      echo "$hits" | sed 's/^/  /'
      errors=$((errors + 1))
    fi
  done
}

check_branch main
check_branch pm-version

if [ "$errors" -gt 0 ]; then
  echo ""
  echo "FAILED: $errors pattern(s) matched."
  exit 1
else
  echo "OK: no stale facts found on either branch."
  exit 0
fi
