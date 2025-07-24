#!/bin/bash

# Подключаемся к MongoDB
mongosh --username root --password rootpassword --authenticationDatabase admin <<EOF

// Переключаемся на базу данных admin для создания пользователя
use admin

// Создаем пользователя student с правами на базу movie
db.createUser({
  user: "student",
  pwd: "password",
  roles: [
    { role: "readWrite", db: "movie" },
    { role: "dbAdmin", db: "movie" }  // Добавляем права администратора
  ]
})

// Переключаемся на базу данных movie
use movie

// Создаем коллекцию films
db.createCollection("films")

// Загружаем данные из файла
const data = JSON.parse(require("fs").readFileSync("/docker-entrypoint-initdb.d/mongodb_initial_stub.json"))
db.films.insertMany(data)
EOF
