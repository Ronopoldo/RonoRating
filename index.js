//Полное создание всех файлов, сбор информации о балансе, уровне и тп при сообщении и вывод этого всего через /card 
const express = require('express');
const app = express();
const port = 3000;
const fs = require("fs");
const axios = require("axios");
const Canvacord = require("canvacord");
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
const { createCanvas, loadImage ,  registerFont} = require('canvas')

registerFont('./fonts/main.ttf', {family: "Main"})
const canvas = createCanvas(1024, 1024)
const ctx = canvas.getContext('2d')
let activeLvl = true
           let NeededXP = 5
           let CycleNum = -1
client.on('messageCreate', msg => {


  if (msg.content.toLowerCase().startsWith('/shop'))
  {
    const args = msg.content.slice(`/био`).split(/ +/);
    if ((isNaN(Number(args[1])) == true) || (Number(args[1] == undefined)) || (args[1] == undefined || (args[1] == NaN))) { shopPage = 1} else {shopPage = Number(args[1])}
    console.log(shopPage)

if (shopPage > 1) { shopPage = 1}

    let shopNames = []
    fs.readdir('Background', (err, files) => {
  files.forEach(file => {
    console.log(file);
    let show = fs.readFileSync('./Background/' + file + '/forSale', "utf8");


    if (show == 'true') { 
      let price = Number(fs.readFileSync('./Background/' + file + '/price', "utf8"))
      let displayName = fs.readFileSync('./Background/' + file + '/displayName', "utf8")
      shopNames[shopNames.length] = [file, price, displayName]
      }
  });

shopNames.sort(function(a, b) {
  return a[1] - b[1];
})



  console.log(shopNames)


    let totalArray = ['empty','empty','empty','empty']
    let totalPrice = []
    let totalName = []

    try {totalArray[0] = (shopNames[4*shopPage-4][0])}catch{}
    try {totalArray[1] = (shopNames[4*shopPage-3][0])}catch{}
    try {totalArray[2] = (shopNames[4*shopPage-2][0])}catch{}
    try {totalArray[3] = (shopNames[4*shopPage-1][0])}catch{}


    try {totalPrice[0] = (shopNames[4*shopPage-4][1])}catch{}
    try {totalPrice[1] = (shopNames[4*shopPage-3][1])}catch{}
    try {totalPrice[2] = (shopNames[4*shopPage-2][1])}catch{}
    try {totalPrice[3] = (shopNames[4*shopPage-1][1])}catch{}


    try {totalName[0] = (shopNames[4*shopPage-4][2])}catch{}
    try {totalName[1] = (shopNames[4*shopPage-3][2])}catch{}
    try {totalName[2] = (shopNames[4*shopPage-2][2])}catch{}
    try {totalName[3] = (shopNames[4*shopPage-1][2])}catch{}


    ctx.font = '50px "Main"'
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.fillStyle = 'white';


    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.textAlign = 'center'
  
ctx.fillText(totalArray[0], 290, 520)
ctx.fillText(totalPrice[0] + ' монет', 290, 185)
ctx.fillText(totalName[0], 290, 220)

if (totalName[1] != undefined)
{
  ctx.fillText(totalArray[1], 734, 520)
  ctx.fillText(totalPrice[1] + ' монет', 734, 185)
  ctx.fillText(totalName[1], 734, 220)
}

if (totalName[2] != undefined)
{
  ctx.fillText(totalArray[2], 290, 975)
  ctx.fillText(totalPrice[2] + ' монет', 290, 640)
  ctx.fillText(totalName[2], 290, 675)
}

if (totalName[3] != undefined)
{
  ctx.fillText(totalPrice[3], 734, 975)
  ctx.fillText(totalPrice[3] + ' монет', 734, 640)
  ctx.fillText(totalName[3], 734, 675)
}





ctx.strokeText(totalArray[0], 290, 520)
ctx.strokeText(totalPrice[0] + ' монет', 290, 185)
ctx.strokeText(totalName[0], 290, 220)

if (totalName[1] != undefined)
{
  ctx.strokeText(totalArray[1], 734, 520)
  ctx.strokeText(totalPrice[1] + ' монет', 734, 185)
  ctx.strokeText(totalName[1], 734, 220)
}

if (totalName[2] != undefined)
{
  ctx.strokeText(totalArray[2], 290, 975)
  ctx.strokeText(totalPrice[2] + ' монет', 290, 640)
  ctx.strokeText(totalName[2], 290, 675)
}

if (totalName[3] != undefined)
{
  ctx.strokeText(totalPrice[3], 734, 975)
  ctx.strokeText(totalPrice[3] + ' монет', 734, 640)
  ctx.strokeText(totalName[3], 734, 675)
}




let out = fs.createWriteStream('shoptemp.png')
let stream = canvas.createPNGStream()
stream.pipe(out)
out.on('finish', () =>  { console.log('The PNG file was created.')


let boughThemes = ['./Images/Blank.png','./Images/Blank.png','./Images/Blank.png','./Images/Blank.png']
   let UserHave = fs.readdirSync('./data/UserData/' + msg.author.id + '/themes')
console.log(UserHave)
  if (UserHave.includes(totalArray[0])) { boughThemes[0] = './Images/bought.png'}
 if (UserHave.includes(totalArray[1])) { boughThemes[1] = './Images/bought.png'}
  if (UserHave.includes(totalArray[2])) { boughThemes[2] = './Images/bought.png'}
   if (UserHave.includes(totalArray[3])) { boughThemes[3] = './Images/bought.png'}
console.log('Тотал: ' + totalArray)
       
    console.log('ПЕРВЫЙ ЭЛ: ' + shopNames[4*shopPage-4])

console.log('VVV Купля VVV')
console.log(boughThemes)
              sharp('./Images/shop.png')
            .resize(1024, 1024)
            .composite([
              { input: './Background/' + totalArray[0] + '/icon.png', top: 130, left: 85},
               {input: './Background/' + totalArray[1] + '/icon.png', top: 130, left: 539},
               { input: './Background/' + totalArray[2] + '/icon.png', top: 584, left: 85},
               {input: './Background/' + totalArray[3] + '/icon.png', top: 584, left: 539},

               {input: boughThemes[0], top: 145, left: 70},
               {input: boughThemes[1], top: 145, left: 524},
               {input: boughThemes[2], top: 600, left: 70},
               {input: boughThemes[3], top: 600, left: 524},
               
              { input: 'shoptemp.png', top: 0, left: 0}])
            .toFile('shop' + shopPage + '.png', function(err) {
              console.log(err)
              msg.channel.send({files: ['shop' + shopPage + '.png']});
              });
            })

        
     })
  }

if (msg.content.toLowerCase() == '/start')
  {


    let filepath = "./data/UserData/" + msg.author.id;
    console.log(filepath)
    try{
    if (!fs.existsSync(filepath)) 
      {
        let CurrentDate = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"})).toJSON(); 
        fs.mkdirSync(filepath, err => {console.log(err)})
        fs.mkdirSync(filepath + '/integers', err => {console.log(err)})
        fs.mkdirSync(filepath + '/collections', err => {console.log(err)})
        fs.mkdirSync(filepath + '/config', err => {console.log(err)})
        fs.mkdirSync(filepath + '/badges', err => {console.log(err)})
        fs.mkdirSync(filepath + '/themes', err => {console.log(err)})
              fs.writeFileSync(filepath + '/integers/talkingPoints', '0', 'utf8', (err) => {
              if (err) throw err;
              console.log('Данные были добавлены в конец файла!');
            });
            fs.writeFileSync(filepath + '/integers/money', '0', 'utf8', (err) => {
              if (err) throw err;
              console.log('Данные были добавлены в конец файла!');
            });
                        fs.writeFileSync(filepath + '/integers/exp', '0', 'utf8', (err) => {
              if (err) throw err;
              console.log('Данные были добавлены в конец файла!');
            });
                        fs.writeFileSync(filepath + '/config/language', 'RU', 'utf8', (err) => {
              if (err) throw err;
              console.log('Данные были добавлены в конец файла!');
            });
            fs.writeFileSync(filepath + '/config/theme', '0', 'utf8', (err) => {
              if (err) throw err;
              console.log('Данные были добавлены в конец файла!');
            });
                        fs.writeFileSync(filepath + '/collections/userThemes', 'default', 'utf8', (err) => {
              if (err) throw err;
              console.log('Данные были добавлены в конец файла!');
            });
            fs.writeFileSync(filepath + '/integers/lvl', '0', 'utf8', (err) => {
              if (err) throw err;
              console.log('Данные были добавлены в конец файла!');
            });
      fs.writeFileSync(filepath + '/badges/active', '0\n0', 'utf8', (err) => {
              if (err) throw err;
              console.log('Данные были добавлены в конец файла!');
            });
      fs.writeFileSync(filepath + '/config/badge', 'NULL', 'utf8', (err) => {
              if (err) throw err;
              console.log('Данные были добавлены в конец файла!');
            });
      fs.writeFileSync(filepath + '/integers/socialCredit', '1000', 'utf8', (err) => {
              if (err) throw err;
              console.log('Данные были добавлены в конец файла!');
            });
      fs.writeFileSync(filepath + '/integers/SummarXP', '0', 'utf8', (err) => {
              if (err) throw err;
              console.log('Данные были добавлены в конец файла!');
            });
      fs.writeFileSync(filepath + '/themes/default', CurrentDate, 'utf8', (err) => {
              if (err) throw err;
              console.log('Данные были добавлены в конец файла!');
            });
      
      msg.reply('Успешно!')
      }else
      {
        msg.reply('Хей! Ты уже зарегестрирован. Эта команда не для тебя!')
      }
    }catch(err){}
  }


if (msg.content.toLowerCase().startsWith('/card'))
  {
    
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
      msg.reply('Слишком много аргументов! После команды Вам следует написать лишь один аргумент - упомянание пользователя, его id или вообще не использовать аргументы.\nНе смотря на это, мы всё равно попробуем распознать упомянание')
    }


   if (pingedUser.includes('<@'))
   {
     pingedUser = pingedUser.replace("<@",'')
     pingedUser = pingedUser.replace("!",'')
     pingedUser = pingedUser.replace(">",'')
   }else {pingedUser = 'Не найдено пользователей! Используйте упомянание или его id, чтобы указать пользователя'}

   if (fs.existsSync('./data/UserData/' + pingedUser))
   {
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
console.log('Мани: ' + Money)
ctx.fillText(Level, 250, 130)
console.log('Мани: ' + Level)
console.log('VVV AMOUNT VVV')
console.log(ThemeAmount)
ctx.fillText(ThemeAmount.length , 100, 130)
console.log('Мани: ' + Level)

let out = fs.createWriteStream(pingedUser + 'temp.png')
let stream = canvas.createPNGStream()
stream.pipe(out)
out.on('finish', () =>  { console.log('The PNG file was created.') 




let theme = fs.readFileSync('./data/UserData/' + msg.author.id + '/config/theme', "utf8");


          console.log('456')
          sharp('./Background/' + theme + '/image.png')
            .resize(1024, 1024)
            .composite([
              { input: './Images/Borders/5.png', top: 50, left: 50},
              { input: body, top: 76, left: 76},
              { input: "./Images/circler.png", top: 76, left: 76},
              { input: pingedUser + 'temp.png', top: 74, left: 170}])
            // .composite([{ input: 'temp.png', top: 40, left: 10}])
            .toFile('./temp/' + pingedUser + '.png', function(err) {
              console.log("error: ", err)
              msg.channel.send({files: ['./temp/' + pingedUser + '.png']});
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              fs.unlinkSync(pingedUser + "temp.png")
              });
})})




        },error => {msg.reply('Хей! Что то пошло не так! Убедись, что ты указал верный ID или упомянул существующего пользователя!\nКод ошибки: ' + error)})} else {msg.reply('Не существует')}
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





  if (msg.content == '/respecc')
  {
const respecc = new MessageEmbed()
    .setColor('#000000')
    .setTitle('Гигантская активная админская деятельность')
    .setAuthor('BoriGHJIK#0758', 'https://media.discordapp.net/attachments/698853696817070164/911547857159467059/prize-clipart-transparent-background-4-removebg-preview.png', 'https://www.youtube.com/channel/UCHWr_jTKOb-wKCNsxPNRF1g')
    .setDescription("**__<@479295731564281867>__ - админ из группы первого набора. Вёл активную деятельность с конца 2019 года до середины 2020 года. Являлся долгое время главным админом и возглавлял работу стафа. Был заместителем Рони и в целом сделал наиогромнейший вклад в развитие серввера.**")
    .setThumbnail('https://media.discordapp.net/attachments/698853696817070164/915204855084245002/unnamed_20.jpg?width=670&height=670')
    .setFooter('Ronoserver Services - звено Статистики', 'https://images-ext-2.discordapp.net/external/SLnaCFfbKRV2BQGkU1zVy9VhwyqdeNXw5Fu-bNMJjCk/https/media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png')


msg.channel.send({ embeds: [respecc] });
  }








if (fs.existsSync('./data/UserData/' + msg.author.id))
{
  try{
  const args = msg.content.slice(`/био`).split(/ +/);
  if (msg.content.toLowerCase().startsWith('/set'))
  {
        fs.readdir('./data/UserData/' + msg.author.id + '/themes', (err, files) => {
  files.forEach(file => {
    let ThemeMassive = []
    ThemeMassive[ThemeMassive.length] = file
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
      }
    }else{msg.reply('Не найдено темы!')}
  })})
  }
  }catch(err){}
}





    if (talkedRecently.has(msg.author.id)) {
    } else {


                if (fs.existsSync('./data/UserData/' + msg.author.id + '/integers/exp')) 
      {
          // Removes the user from the set after a minute
          try{
          console.log(msg.author.tag + ' + 1 поинт актива')
          
          let Money = fs.readFileSync('./data/UserData/' + msg.author.id + '/integers/money', "utf8");
          let Points = fs.readFileSync('./data/UserData/' + msg.author.id + '/integers/exp', "utf8");
          let ActiveBadge = fs.readFileSync('./data/UserData/' + msg.author.id + '/badges/active', "utf8");
          
          console.log(ActiveBadge)
          let ActiveMassive = ActiveBadge.split('\n', 5)
          console.log(ActiveMassive)
          Money = Number(Money) + Math.floor(Math.random() * 4) + 1;
          let PointsString = '0.' + (Math.floor(Math.random() * 1) + 9).toString();
          Points = Number(Points) + Number(PointsString)

          console.log('Поинты: ' + Points + '|' + Money)
           fs.writeFileSync('./data/UserData/' + msg.author.id + '/integers/exp', Points.toString(), 'utf8')
           fs.writeFileSync('./data/UserData/' + msg.author.id + '/integers/money', Money.toString(), 'utf8')
           fs.writeFileSync('./data/UserData/' + msg.author.id + '/badges/active', ActiveMassive[0] + '\n' + (Number(ActiveMassive[1]) + 1).toString(), 'utf8')
           console.log('Внесено: ' + Money.toString())
           console.log('Мани: ' + Money)
           }catch(err){console.log(err)}
          let levelNeed = fs.readFileSync('./data/UserData/' + msg.author.id + '/integers/lvl', "utf8");
           
           
           NeededXP = 8
           CycleNum = 0
           active = true

           while (active == true)
           {
             if (NeededXP < 460) { NeededXP = NeededXP * 1.12 }else{NeededXP = 500; active == false } //break;
             CycleNum = CycleNum + 1
             if (CycleNum > levelNeed) { active = false }
            //  console.log(NeededXP + '|' + CycleNum + '|' + levelNeed)
           }
          
            let Points = fs.readFileSync('./data/UserData/' + msg.author.id + '/integers/exp', "utf8");

           if (Number(Points) > NeededXP)
           {
             let totalXP = fs.readFileSync('./data/UserData/' + msg.author.id + '/integers/SummarXP', "utf8")
             totalXP = Number(totalXP) + Number(Points)
             fs.writeFileSync('./data/UserData/' + msg.author.id + '/integers/SummarXP', totalXP.toString(), 'utf8')

              let lvl = fs.readFileSync('./data/UserData/' + msg.author.id + '/integers/lvl', "utf8")
              lvl = Number(lvl) + 1
              fs.writeFileSync('./data/UserData/' + msg.author.id + '/integers/lvl', lvl.toString(), 'utf8')

              Points = 0
              fs.writeFileSync('./data/UserData/' + msg.author.id + '/integers/exp', Number(Points).toString(), 'utf8')
              msg.reply('Новый уровень! Уровень ' + lvl + 'Тотал опыт ' + totalXP)
           }
          //  msg.reply(NeededXP.toString())
      }
      //ЗАВЕРШИТЬ!!!!!1 upd: красава, завершил




                    talkedRecently.add(msg.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(msg.author.id);
        }, 60000);
  
    }
    })





client.login(process.env.DISCORD_TOKEN);
//тут был Сенко