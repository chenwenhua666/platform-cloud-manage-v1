FROM nginx:1.14.2
MAINTAINER plm 764471698@qq.com

COPY nginx.conf /etc/nginx/nginx.conf
COPY dist/ /etc/nginx/html
