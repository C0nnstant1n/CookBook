# F4.6. Практическая работа
## Фуллстек-приложение с рецептами блюд

### Серверная часть(Python, Django, RestFramework, Swagger, OpenApi Schema):
__Установка:__
- pip install -r requirements.txt

__Запуск:__ 
- cd CookBook
- python manage.py runserver
- <http://127.0.0.1:8000/> (В качестве клиента лучше не использовать, так как джанго не знает о путях 
созданных в React Router и при обновлении или попытке вручную ввести адрес
в адресной строке выдаст ошибку о несуществующей странице. Поместил сюда так как сначала не мог разобраться с CORSE policy)
- rest api доступен по адресу <http://127.0.0.1:8000/api/>
- swagger - <http://127.0.0.1:8000/swagger-ui>, отсюда же можно получить OpenApi Schema

### Клиентская часть(React, React Router )
__Установка:__
- cd CookBook_client
- npm install

__Запуск__
- npm start
- - <http://127.0.0.1:4000/>

npm run dev создаст выходные файлы(index.html, main.css и main.ts) в папке сервера CookBook/static