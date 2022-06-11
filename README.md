# RonoRating
### **Самый крупный проект Ronopoldo, написанный полностью на `JavaScript`**
![RonoRating with title](https://user-images.githubusercontent.com/69480820/171960997-e7e1ecd7-61dd-44a0-83d9-7f3cea9310cf.png)

## Об проекте
RonoRating - специализированная Discord-игра, которая симулирует небольшую экономику.

У каждого пользователя есть своя собственная карточка. Пример: ![image](https://user-images.githubusercontent.com/69480820/171961391-ebdd4e5b-d0cc-424b-90d7-8493c791344c.png)
Пользователь может различными способами развивать свою карточку: устанавливать и покупать различные темы, стикеры и значки. Однако, зачастую для получения этих благ понадобятся деньги. Их можно получить при помощи заполнения `шкал актива` и улучшения уровня в разных категориях.
## История проекта
Написание проекта началось в 2021 году и активно продолжается и по сей пор. Однако, истоки лежат с 2020 года, когда я только начал изучать `Node.JS`
В конце 2021 года (16 декабря) этот проект стал победителем школьной конференции в нескольких категориях в отрасли `5-9 класс`.

Также, более полугода проект находился с плохой базой данных (реализованной при помощи модуля `fs` и на бесплатном сервере), однако, в мае 2022 года он был перенесён на новую базу данных и новый платный хостинг - **это и стало одним из основных шагов к успеху проекта**.
## Об обновлениях
Обновления выходят не особо часто, однако, проект я не забрасываю. Если у Вас есть идеи по новым функциям, то Вы всегад можете написать мне в Discord! Мой айди: `544902183007813652`

## Команды
Актуальный список команд на `4 июня 2022 года`:


`/start` - зарегистрироваться в Рейтинге. (команды ниже не работают, если у Вас не прописан /start)

`/card [пользователь]` - показать свою или карточку пользователя

`/claim <код>` - позволяет получить какую-либо тему через специальный код

`/inv [пользователь] [страница]` - покажет инвентарь на заданной странице у заданного пользователя (по умолчанию первую страницу Вашего инвентаря)

`/set <ID темы>` - поставить тему с заданным ID (если у Вас имеется)

`/shop [страница]` - загрузит магазин тем! (по умолчанию первая страница)

`/buy <ID темы>` - позволяет купить тему с заданным ID, если у Вас достаточно виртуальной валюты

`/preview <ID темы>` - посмотреть, как будет смотреться определённая тема на Вашей карточке (иметь её для этого не надо; это предпросмотр)

`/bal [пользователь]` - показывает деньги, которые есть у пользователя с точностью до единиц

`/badges [пользователь]` - посмотреть все значки, которые есть у пользователя

`/setbadge1 [ID значка]` - поставит первый значок (справа от карточки с ником)

`/setbadge2 [ID значка]` - поставит второй значок (возле аватарки)

`/export` - сгенерировать архив, содержащий Ваши данные в базе данных

`/count` - показывает последнее число для канала #🧮счёт

`/check` - проверить данные на целостность перевода после обновления базы данных

`/debug` - включить режим откладки

## События и активность
Получить деньги можно за повышение актива в следующих категориях:
<ins>Текстовый актив</ins> - даётся за сообщения в практически всех чатах. *За одну минуту общения можно получить 1 единицу опыта.*

<ins>Голосовой актив</ins> - даётся за нахождение в голосовых каналах. *Обычно даётся 1 опыт за минуту, проведённую в голосовом канале.* Однако, такие факторы, как:
> Включён микрофон или нет
> Включён звук или нет
> Запущена трансляция или нет

*могут влиять на этот показатель*

<ins>Повседневный актив</ins> - даётся за каждый день посещённый на сервере. В отличии от пунктов выше, не даёт денег. Деньги выдаются только за повышения уровня. *За каждый день актив на сервере даётся по 1 единице опыта*

<ins>Счёт</ins> - даётся за участие в жизни канала #🧮счёт. Деньги, как в `повседневном активе`, выдаются за лвл ап. *Одно верно написанное число даёт 1 опыт.*

## Инструкция по использованию
1. Зарегистрируйтесь при помощи `/start`
2. Попробуйте загрузить свою карточку при помощи `/card`
3. Теперь Вы можете начинать набирать деньги. Подобнее в разделе [`События и активность`](https://github.com/Ronopoldo/RonoRating#события-и-активность)
4. Напиишите `/shop` - это должно будет вывести магазин с карточками, которые Вы можете купить за внутреннюю валюту.
5. Пропишите `/inventory` - это выведет Ваш инвентарь и Ваши карточки.
6. Почитайте подробнее в разделе [`Команды`](https://github.com/Ronopoldo/RonoRating#команды) про остальные команды.
7. Соревнуйтесь с другими пользователями за лучшую карточку :)

## Немного про систему базы данных

**Если кому-то интересно, то здесь можно подоробнее узнать про системы баз данных.**

На данный момент, RonoRating находился на двух различных видах баз данных.
`Первый тип (файловый)` - был с октября 2021 по апрель 2022
`Второй тип (парсерный)` - был с мая 2022 по текущее время

### Первый тип - файловый
Первый тип базы данных заключался в том, что карточка каждого пользователя и вся информация о нём представляла из себя папку с кучей файлов и подпапок, в которых хранились и записывались данные.
Пример:
![image](https://user-images.githubusercontent.com/69480820/171963575-ec6f7fc2-6b3e-4eca-a0a6-d87905c9059f.png)

[Ссылка на коммит](https://github.com/Ronopoldo/RonoRating/tree/9be236d009fb30ae31b201bc8f9dda67958832ec/data/UserData/544902183007813652)

Система была очень плохой. Сервер постоянно перегружался и из-за этого данные часто откатывались назад. Также, ответ был значительно дольше, чем у `второго типа`.

### Второй тип - парсерный

Особенность второго типа в том, что все сообщения хранятся в Discord сообщениях в специальном канале. Программа лишь один раз считывает `./data/dbsetup.json`, в котором хранятся айди пользователей - **ключи** и айди их сообщений в канале с данными - **значениями ключей**.

Далее команда просто получает нужное ей сообщение в JSON формате, которое она форматирует в объект и дальше редактирует его. В конце концов, она просто изменяет сообщение.
Пример данных:
```json
{
	"user": "544902183007813652",
	"money": 256324,
	"exp": "331.8478223737671",
	"lvl": "60",
	"credit": "1000",
	"active": {
		"text": {
			"lvl": 33,
			"exp": 69
		},
		"daily": {
			"lvl": 10,
			"exp": "2022-06-03T21:00:00.000Z 39"
		},
		"voice": {
			"lvl": "19",
			"exp": "12228.599999999758"
		},
		"count": {
			"lvl": "9",
			"exp": "131"
		}
	},
	"config": {
		"badge1": "mdk",
		"badge2": "staff",
		"theme": "2020"
	},
	"themes": [
		"1",
		"2020",
		"2022",
		"2022pixel",
		"22222222222",
		"MoskvaLublinoRabotaem",
		"beta",
		"chilldebil",
		"default",
		"glitch",
		"gradient",
		"graffiti.wall",
		"happy2022",
		"hentai",
		"oplot",
		"pixel_galaxy",
		"ronostar",
		"space",
		"volcano",
		"winterbabft"
	],
	"badges": [
		"contributor",
		"generalgavs",
		"mdk",
		"nothing",
		"staff"
	],
	"debugMode": false
}
```

Discord поддерживает большое количество потоков, поэтому откатов данных не наблюдается. Парсинг происходит быстро и на сервер практически нету нагрузки.

# Установка проекта

Без переписки кода запустить проект не получитися - он настроен на каналы Роносервера. Однако, если Вы перепишите значения переменных, то сможете запустить его. Если вдруг есть те, кто действительно этим займётся, то вот небольшая инструкция:

1. Скачайте репозиторий
2. На одну директорию выше директории с проектом (та, в которой лежит папка `RonoRating`) создайте 2 файла:
- config.json
- isServer
3. Заполните файлы выше в соответствии с образцом:
### config.json
Здесь хранится токен. Вставьте его вместо `ТОКЕН_БОТА` и поместите в этот файл:
```json
{
    "token": "ТОКЕН_БОТА"
}
```
### isServer
Этот файл отвечает за внедрение проекта на сервер.
Если корневым каталогом исполнения `Node.JS` является папка с `index.js` (RonoRating), то вставьте в файл одно слово:
```
false
```
Если папкой исполнения ялвяется директория выше (в которой лежит папка `RonoRating`), то поставьте значение
```
true
```
4. Запустите `index.js` при помощи `Node.JS`
# В завершение
Спасибо огромное всем, кто участвует в жизни RonoRating'а и поддерживает его. Именно благодаря Вам этот проект может развиваться. Не стесняйтесь сообщать о багах, кидать пулл реквесты и оставлять комментарии.

Очень надеюсь, что проект действительно чего-то добётся. Но даже если нет, то у меня будет ценный опыт работы в `JavaScript`. Поэтому,  это всё не просто так.

Спасибо всем огромное, кто это читает. Люблю Вас ^^

Искренне

Ronopoldo


# Ссылки и контакты
[Помощь в оплате серверов и донат](https://www.donationalerts.com/r/ronopoldo)

[YouTube канал](https://youtube.com/c/Ronopoldo)

[Discord сервер](https://discord.gg/WuRKn9fFBZ)

[Twitter](https://twitter.com/ronopoldo)

[Мой Telegram-канал](https://t.me/Ronopoldo)

[Roblox аккаунт](https://www.roblox.com/users/291575091/profile)

Мой Discord ID: `544902183007813652`

Мой ник в Telegram: `@RonopoldoYT`

Моя электронная почта: `RonopoldoFeedback@yandex.ru`

##### © Ronopoldo 2020-2022
###### 4 июня 2022 года. 2:04:20 (МСК)