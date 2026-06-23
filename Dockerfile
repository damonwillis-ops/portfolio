FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html
COPY headshot.jpg /usr/share/nginx/html/headshot.jpg
COPY og-image.png /usr/share/nginx/html/og-image.png
EXPOSE 80
