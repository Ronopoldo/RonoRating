//Стартовая настройка проекта 
const express = require('express');
const app = express();
const port = 3000;
const fs = require("fs");
const axios = require("axios");
const sharp = require("sharp");
const talkedRecently = new Set();
app.get('/', function(request, response){ response.send(`Монитор активен. Локальный адрес: http://localhost:${port}`); });
app.listen(port, () => console.log());
const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_PRESENCES] });
const { MessageEmbed } = require('discord.js');
  let active = true
let shopPage = 1
const { createCanvas, loadImage ,  registerFont} = require('canvas');


registerFont('./fonts/main.ttf', {family: "Main"})
const canvas = createCanvas(1024, 1024)
const ctx = canvas.getContext('2d')
let activeLvl = true
           let NeededXP = 5
           let CycleNum = -1

const test = require("./src/test");
const shopCommand = require("./src/shop");
const invCommand = require("./src/inventory");
const startCommand = require("./src/start");
const calculateUserData = require("./src/calculateUserData");

// Обработчик входящих сообщений
client.on('messageCreate', msg => {

// Входящее сообщение
let incMessage = msg.content.toLowerCase(); 
// Аргументы
let args = msg.content.split(/ +/);
// Команда приложению
let command = args[0];

switch(command) {
   case "/start": 
    startCommand.startCommand(fs, msg);
    break;
  case "/test": 
    test.test(msg);
    break;
  case "/shop": 
    shopCommand.shopCommand(fs, msg, ctx, sharp, canvas);
    break;
  case "/inv":
  case "/inventory": 
    invCommand.invCommand(fs, msg, ctx, sharp, canvas, client);
    break;
  default:
    break;
}

if ((msg.content.toLowerCase().startsWith('/card')) || (msg.content.toLowerCase().startsWith('/preview')))
  {
    if (fs.existsSync('./data/UserData/' + msg.member.id))
   {

    let preview = false
    if (msg.content.toLowerCase().startsWith('/preview')) { preview = true}
    if (msg.content.toLowerCase().startsWith('/card')) { preview = false}


        const args = msg.content.slice(`/био`).split(/ +/);
    if (args.length >= 2)
    {
      pingedUser = args[1]
      pingedUser = pingedUser.replace("<@",'')
      pingedUser = pingedUser.replace("!",'')
      pingedUser = pingedUser.replace(">",'')
    }
    if (args.length >= 2)
    {
      pingedUser = args[1]
    }
    if ((args.length >= 2) && (!args[1].includes('<@')))
    {
      pingedUser = '<@' + args[1] + '>'
      console.log(pingedUser)
    }
    if (args.length == 1)
    {
      console.log('прошло')
      pingedUser = '<@' + msg.author.id +">"
    }

    if (args.length > 2)
    {    
      msg.reply('Слишком много аргументов! После команды Вам следует написать лишь один аргумент - упомянание пользователя, его id или вообще не использовать аргументы.\nНе смотря на это, мы всё равно попробуем распознать упоминание')
    }


   if (pingedUser.includes('<@'))
   {
     pingedUser = pingedUser.replace("<@",'')
     pingedUser = pingedUser.replace("!",'')
     pingedUser = pingedUser.replace(">",'')
   }else {}

   if (fs.existsSync('./data/UserData/' + pingedUser))
   { }else{pingedUser = msg.member.id}
    client.users.fetch(pingedUser).then(User => 
  {




    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.fillStyle = 'black';


    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.textAlign = 'left'

let fontsize = 70
let nameLength = User.tag.length
var request = require('request').defaults({ encoding: null });
 request.get(User.avatarURL({ format: "png"}, {size: 128}), function (err, res, body) {


  console.log('Адоптируем...')
  fontsize = 70 - (nameLength/3)*4
console.log('Адоптация:' + fontsize)

//Юзер
let Money = fs.readFileSync('./data/UserData/' + msg.author.id + '/integers/money', "utf8");
let Level = fs.readFileSync('./data/UserData/' + msg.author.id + '/integers/lvl', "utf8");
let Themes = fs.readFileSync('./data/UserData/' + msg.author.id + '/collections/userThemes', "utf8");




let ThemeAmount = Themes.split('\n')
ctx.font = fontsize + 'px "Main"'
ctx.fillText(User.tag, 50, 50)
console.log('Тег: ' + User.tag)
ctx.fillText(Money, 400, 130)
console.log('ДЕНЬГИ ВНЕСЕНЫ ' + Money)
console.log('Мани: ' + Money)
ctx.fillText(Level, 250, 130)
console.log('Мани: ' + Level)
console.log('VVV AMOUNT VVV')
console.log(ThemeAmount)
ctx.fillText(ThemeAmount.length , 100, 130)
console.log('Мани: ' + Level)

// let out = fs.createWriteStream(pingedUser + 'temp.png')
canvas.toBuffer((err, out) => { console.log('The PNG file was created.') 




let theme = fs.readFileSync('./data/UserData/' + msg.author.id + '/config/theme', "utf8");

if (preview == true) {
  let fullarray = fs.readdirSync('Background')
  console.log('FULLARRAY: ' + fullarray)
  if (fullarray.includes(args[1].toLowerCase()))
  {
    theme = args[1].toLowerCase()
  }else{msg.reply('К сожалению, тема не была найдена! Загрузка обычной карточки...')}
}
          console.log('456')

sharp.cache(false);
let image = sharp('./Background/' + theme + '/image.png');

sharp.cache(false);
          
          image
            .resize(1024, 1024)
            .composite([
              { input: './Images/Borders/5.png', top: 50, left: 50},
              { input: body, top: 76, left: 76},
              { input: "./Images/circler.png", top: 76, left: 76},
              { input: out, top: 74, left: 170}])
            .toBuffer()
            .then(function(outputBuffer) {
              console.log("error: ", err)
              msg.channel.send({files: [outputBuffer]});
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              // fs.unlinkSync(pingedUser + "temp.png")
              });




})})




        },error => {msg.reply('Хей! Что то пошло не так! Убедись, что ты указал верный ID или упомянул существующего пользователя!\nКод ошибки: ' + error)})
  }
  }

if (fs.existsSync('./data/UserData/' + msg.author.id))
{
  try{
  if (msg.content.toLowerCase().startsWith('/claim'))
  {


    let CurrentDate = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"})).toJSON(); 
    let filepath = "./data/UserData/" + msg.author.id;
     fs.readdir('./data/UserData/' + msg.author.id + '/themes', (err, files) => {
       
  files.forEach(file => {
        let UserThemes = []
    UserThemes[UserThemes.length] = file
    const args = msg.content.slice(`/био`).split(/ +/);
    if (args[1] == 'бета')
    {
      if (UserThemes.includes('beta'))
      {
        msg.reply('У тебя уже есть эта тема!')
      }else
      {
        fs.writeFileSync(filepath + '/themes/beta',CurrentDate, 'utf8', (err) => { console.log(err) })
        msg.reply('Тема успешно получена!')
        console.log('Бета')

      }
    }
  })})
  }
  }catch(err){ msg.reply('Ошибка: ' + err) }
}







if (fs.existsSync('./data/UserData/' + msg.author.id))
{
  try{
  if (msg.content.toLowerCase().startsWith('/buy'))
  {
    if (fs.existsSync('./data/UserData/' + msg.member.id))
   {

    let CurrentDate = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"})).toJSON(); 
    let filepath = "./data/UserData/" + msg.author.id;
     let UserThemes = fs.readdirSync('./data/UserData/' + msg.author.id + '/themes')
let ShopThemes = fs.readdirSync('./Background')

    const args = msg.content.slice(`/био`).split(/ +/);
    if (UserThemes.includes(args[1].toLowerCase()))
    {
      msg.reply('У тебя уже есть эта тема!')
    }else
    {
      if (ShopThemes.includes(args[1].toLowerCase()))
      {
        let status = fs.readFileSync('./Background/' + args[1].toLowerCase() + '/forSale', "utf8");
        if (status == 'true')
        {
          let price = Number(fs.readFileSync('./Background/' + args[1].toLowerCase() + '/price', "utf8"));
          console.log('PRICE: ' + price)
          let userBalance = Number(fs.readFileSync('./data/UserData/' + msg.member.id + '/integers/money', "utf8"));
          console.log('BALANCE: ' + userBalance)
          if (userBalance < price)
          {
            msg.reply('Прости, но похоже, что у тебя недостаточно средств на покупку этой темы!')
          }else
          {
            let CurrentDate = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"})).toJSON();
            fs.writeFileSync('./data/UserData/' + msg.member.id + '/themes/' + args[1].toLowerCase(),CurrentDate, 'utf8', (err) => { console.log(err) })
            userBalance = userBalance - price
            fs.writeFileSync('./data/UserData/' + msg.member.id + '/integers/money',userBalance.toString(), 'utf8', (err) => { console.log(err) })
            msg.reply('Покупка темы прошла успешно!!\nПоставь её командой `/set ' + args[1].toLowerCase() + '` :3')
          }
        }else{
          msg.reply('Эта тема не продаётся!')
        }

      }else
      {
        msg.reply('Темы не существует! Проверь написание')
      }
    }
  }
  }
  }catch(err){ msg.reply('Хей! Скорее всего у тебя неправильный ввод! Ввод доолжен быть в формате `/buy <ID ТЕМЫ>`\nОшибка: ' + err) }
}




  if (msg.content == '/respecc')
  {
const respecc = new MessageEmbed()
    .setColor('#ADD8E6')
    .setTitle('Хороший админ и активный член сервера')
    .setAuthor('NeksiCola#8756', 'https://media.discordapp.net/attachments/698853696817070164/911547857159467059/prize-clipart-transparent-background-4-removebg-preview.png', 'https://www.youtube.com/channel/UCtLSPDoaGHKI2VvZFN-BdXQ')
    .setDescription('**__<@609701912643764244>__ - самый адекватный и добрый член сервера (по мнению большинства). Находится на нём с июня 2020 года, но наибольшую активность начал проявлять летом 2021 года. Является одним из самых снисходительных админов и практически не имеет врагов.**')
    .setThumbnail('https://media.discordapp.net/attachments/698853696817070164/917743627797663744/41acc11dce25bc3cfbe0707148870782f7477a01r1-644-835v2_hq_2.jpg')
    .setFooter('Ronoserver Services - звено Статистики', 'https://images-ext-2.discordapp.net/external/SLnaCFfbKRV2BQGkU1zVy9VhwyqdeNXw5Fu-bNMJjCk/https/media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png')


msg.channel.send({ embeds: [respecc] });
  }








if (fs.existsSync('./data/UserData/' + msg.author.id))
{
  try{
  const args = msg.content.slice(`/био`).split(/ +/);
  if (msg.content.toLowerCase().startsWith('/set'))
  {

    let ThemeMassive = fs.readdirSync('./data/UserData/' + msg.author.id + '/themes')
    if (fs.existsSync('./Background/' + args[1]))
    {
      if (ThemeMassive.includes(args[1]))
      {
        fs.writeFileSync('./data/UserData/' + msg.author.id + '/config/theme', args[1], 'utf8')
        let desc = fs.readFileSync('./Background/' + args[1] + '/description', "utf8");
        let getdate = fs.readFileSync('./data/UserData/' + msg.author.id + '/themes/' + args[1] , "utf8");

        msg.reply('**__Тема успешно установлена!!__**\nОписание: ' + desc + '\nПолучена: ' + getdate)
        msg.channel.send({files: ["./Background/" + args[1] + "/image.png"]})
//
      }else{
        msg.reply('У тебя нету этой темы!')}
    }else{msg.reply('Не найдено темы!')}
}
  }catch(err){}
}


  calculateUserData.calculateUserData(fs, msg, client, ctx, sharp, canvas, talkedRecently);    
})

client.login(process.env.DISCORD_TOKEN);
//тут был Сенко