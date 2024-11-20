# Dockerfile para nginx
FROM nginx:latest

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

CMD /wait-for-it.sh api_usuarios 3100 && /wait-for-it.sh api_juegos 3200 && /wait-for-it.sh api_productos 3300 && /wait-for-it.sh api_compras 3400 && nginx -g 'daemon off;'
