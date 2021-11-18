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
  let active = true

const { createCanvas, loadImage ,  registerFont} = require('canvas')

registerFont('./fonts/main.ttf', {family: "Main"})
const canvas = createCanvas(1024, 1024)
const ctx = canvas.getContext('2d')
let activeLvl = true
           let NeededXP = 5
           let CycleNum = -1
client.on('messageCreate', msg => {

if (msg.content.toLowerCase() == '/start')
  {


    let filepath = "./data/UserData/" + msg.author.id;
    console.log(filepath)
    try{
    if (!fs.existsSync(filepath)) 
      {
        fs.mkdirSync(filepath, err => {console.log(err)})
        fs.mkdirSync(filepath + '/integers', err => {console.log(err)})
        fs.mkdirSync(filepath + '/collections', err => {console.log(err)})
        fs.mkdirSync(filepath + '/config', err => {console.log(err)})
        fs.mkdirSync(filepath + '/badges', err => {console.log(err)})
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
    client.users.fetch(pingedUser).then(User => 
  {





let fontsize = 70
let nameLength = User.tag.length
var request = require('request').defaults({ encoding: null });
 request.get(User.avatarURL({ format: "png"}, {size: 128}), function (err, res, body) {


  console.log('Адоптируем...')
  fontsize = 70 - (nameLength/3)*4
console.log('Адоптация:' + fontsize)

//Юзер
ctx.font = fontsize + 'px "Main"'
ctx.fillText(User.tag, 50, 50)
console.log('Тег: ' + User.tag)
let out = fs.createWriteStream(pingedUser + 'temp.png')
let stream = canvas.createPNGStream()
stream.pipe(out)
out.on('finish', () =>  { console.log('The PNG file was created.') 

//Деньги
let Money = fs.readFileSync('./data/UserData/' + msg.author.id + '/integers/money', "utf8");
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillText(Money, 50, 50)
console.log('Мани: ' + Money)
let out = fs.createWriteStream(pingedUser + 'tempMoney.png')
let stream = canvas.createPNGStream()
stream.pipe(out)
out.on('finish', () =>  { console.log('The PNG file was created.') 

//Уровень
let Level = fs.readFileSync('./data/UserData/' + msg.author.id + '/integers/lvl', "utf8");
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillText(Level, 50, 50)
console.log('Мани: ' + Level)
let out = fs.createWriteStream(pingedUser + 'tempLvl.png')
let stream = canvas.createPNGStream()
stream.pipe(out)
out.on('finish', () =>  { console.log('The PNG file was created.') 


//Кол-во тем
let Themes = fs.readFileSync('./data/UserData/' + msg.author.id + '/collections/userThemes', "utf8");
let ThemeAmount = Themes.split('\n')
ctx.clearRect(0, 0, canvas.width, canvas.height);
console.log('VVV AMOUNT VVV')
console.log(ThemeAmount)
ctx.fillText(ThemeAmount.length , 50, 50)
console.log('Мани: ' + Level)
let out = fs.createWriteStream(pingedUser + 'tempTheme.png')
let stream = canvas.createPNGStream()
stream.pipe(out)
out.on('finish', () =>  { console.log('The PNG file was created.') 


          console.log('123')





          console.log('456')
          sharp('./Images/Background/2.png')
            .resize(1024, 1024)
            .composite([
              { input: './Images/Borders/5.png', top: 50, left: 50},
              { input: body, top: 76, left: 76},
              { input: "./Images/circler.png", top: 76, left: 76},
              { input: pingedUser + 'tempMoney.png', top: 160, left: 340},
              { input: pingedUser + 'tempLvl.png', top: 160, left: 200},
              { input: pingedUser + 'tempTheme.png', top: 160, left: 500},
              { input: pingedUser + 'temp.png', top: 74, left: 170}])
            // .composite([{ input: 'temp.png', top: 40, left: 10}])
            .toFile(pingedUser + '.png', function(err) {
              console.log("error: ", err)
              msg.channel.send({files: [pingedUser + '.png']});
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              fs.unlinkSync(pingedUser + "temp.png")
              fs.unlinkSync(pingedUser + "tempMoney.png")
              });

});
});

              });
})})




        },error => {msg.reply('Хей! Что то пошло не так! Убедись, что ты указал верный ID или упомянул существующего пользователя!\nКод ошибки: ' + error)})
  }

});




client.on('messageCreate', msg =>{
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
             console.log(NeededXP + '|' + CycleNum + '|' + levelNeed)
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
           msg.reply(NeededXP.toString())
      }
      //ЗАВЕРШИТЬ!!!!!1 upd: красава, завершил




                    talkedRecently.add(msg.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(msg.author.id);
        }, 1000);
  
    }
    })
client.login(process.env.DISCORD_TOKEN);
//тут был Сенко