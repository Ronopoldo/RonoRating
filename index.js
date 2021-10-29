const express = require('express');
const app = express();
const port = 3000;
const fs = require("fs");
const axios = require("axios");
const Canvacord = require("canvacord");
const sharp = require("sharp");
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

client.on('messageCreate', msg => {

if (msg.content.toLowerCase() == '/start')
  {


    let filepath = "./data/UserData/" + msg.author.id;
    console.log(filepath)
    if (!fs.existsSync(filepath)) 
      {
        fs.mkdir(filepath, err => {console.log(err)})
      }else
      {
        msg.reply('Хей! Ты уже зарегестрирован. Эта команда не для тебя!')
      }
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






var request = require('request').defaults({ encoding: null });
 request.get(User.avatarURL({ format: "png"}, {size: 128}), function (err, res, body) {


ctx.font = '80px "Main"'
ctx.fillText(User.tag, 50, 50)
const out = fs.createWriteStream('temp.png')
const stream = canvas.createPNGStream()
stream.pipe(out)
out.on('finish', () =>  { console.log('The PNG file was created.') 

          console.log('123')





          console.log('456')
            sharp('./Images/Background/2.png')
            .resize(1024, 1024)
            .jpeg()
            .composite([{ input: '124.png', top: 40, left: 10}])
            // .composite([{ input: 'temp.png', top: 40, left: 10}])
            .toFile(User.id + '.png', function(err) {
              console.log("error: ", err)
              msg.channel.send({files: [pingedUser + '.png']});
              });


            

              });
})




        },error => {msg.reply('Хей! Что то пошло не так! Убедись, что ты указал верный ID или упомянул существующего пользователя!\nКод ошибки: ' + error)})
  }

});


client.login(process.env.DISCORD_TOKEN);