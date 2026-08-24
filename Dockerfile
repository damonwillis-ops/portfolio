FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
RUN mkdir -p /etc/nginx/templates && \
    echo 'server { listen ${EFFECTIVE_PORT}; location / { root /usr/share/nginx/html; index index.html; try_files $uri /index.html; } }' > /etc/nginx/templates/default.conf.template
EXPOSE 80
CMD ["sh", "-c", "export EFFECTIVE_PORT=${PORT:-80}; envsubst '${EFFECTIVE_PORT}' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
