# FullStack приложение

## Стэк: React.JS (Vite) + Java + MySQL

#### Основные команды для работы с MySQL через docker:

1. **Загрузка образа MySQL**

   - Сначала нужно загрузить официальный образ MySQL из Docker Hub:\
     `docker pull mysql:latest`

2. **Запуск контейнера MySQL**
   - Теперь запустим контейнер с MySQL, указав необходимые параметры:\
     `docker run --name mysql-container -e`\
     `MYSQL_ROOT_PASSWORD=your_password -d -p`\
     `3306:3306 mysql:latest`\
     **Где:**  
      --name mysql-container: задает имя контейнера \
      -e MYSQL_ROOT_PASSWORD=your_password: устанавливает пароль для пользователя root \
      -d: запускает контейнер в фоновом режиме \
      -p 3306:3306: проброс порта 3306 из контейнера на хост-машину
3. **Проверка работы контейнера**
   - Убедимся, что контейнер успешно запущен:\
     `docker ps`\
     Вы должны увидеть контейнер с именем mysql-container в списке запущенных контейнеров.
4. **Подключение к MySQL**

- Установите [MySQL Workbench](https://dev.mysql.com/downloads/workbench/), [Postman](https://www.postman.com/downloads/)

### Подключение к MySQL через командную строку

Теперь вы можете подключиться к MySQL через командную строку внутри контейнера:\
`docker exec -it mysql-container mysql -uroot -p` \
Введите пароль, который вы указали при запуске контейнера. \
**Примечание:** Для использования MySQL в продакшене рекомендуется настроить volumes для
сохранения данных и дополнительные параметры безопасности.

## Дополнительные команды
**Остановка контейнера:** \
`docker stop mysql-container` \

**Запуск остановленного контейнера:** \
`docker start mysql-container` \

**Удаление контейнера:** \
`docker rm mysql-container` \

**Шаблон для [application.properties](./backend/src/main/resources/application_template.properties)**
