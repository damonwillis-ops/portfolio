FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html
COPY headshot.jpg /usr/share/nginx/html/headshot.jpg
COPY og-image.png /usr/share/nginx/html/og-image.png
RUN echo 'server { listen ${PORT}; location / { root /usr/share/nginx/html; index index.html; } }' > /etc/nginx/templates/default.conf.template
EXPOSE 80
CMD ["sh", "-c", "envsubst '${PORT}' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
