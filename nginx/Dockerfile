# Используйте официальный образ Nginx
FROM nginx:latest

# Копируем наш конфиг
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]