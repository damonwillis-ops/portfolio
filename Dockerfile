FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html
COPY headshot.jpg /usr/share/nginx/html/headshot.jpg
EXPOSE 80
