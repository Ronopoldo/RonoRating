const express = require('express');
const app = express();
const port = 3000;
const fs = require("fs");
const jimp = require('jimp');
const Canvacord = require("canvacord");
const sharp = require("sharp");
app.get('/', function(request, response){ response.send(`Монитор активен. Локальный адрес: http://localhost:${port}`); });
app.listen(port, () => console.log());
const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_PRESENCES] });


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


// Canvacord.Canvas.fuse('./Images/Background/1.png', User.avatarURL({ format: "png"})) //VVVV
// sharp('./Images/Background/1.png')
//   .composite([{ input: User.avatarURL({ format: "png"}), gravity: 'southeast' }])
//  .toFile(User.id + '.png')


//   ).then(buffer => { //User.avatarURL({ format: "png"})
//     msg.channel.send({
//     files: [buffer]
// });
//   })
  // .catch(console.error);


// rank.build()

//     });



// jimp.read('./Images/Background/1.png')
//   .then(image => {
//       image.mirror();
//       console.log(image)
//       image.write('test.png');
//     // Do stuff with the image.
//   })
//   .catch(err => {
//     // Handle an exception.
//   });
        
//User.avatarURL({ format: "png"})


// Jimp.read('./Images/Background/1.png', function (err, img) {
//   var userava = Jimp.read('.test/1.png');
//     img.blit(userava, 100,100)
//    .write('same_ratio1.jpg'); // save
 
// });


async function main() {
  const image = await jimp.read('./Images/Background/1.png');
  const mask = await jimp.read(User.avatarURL({ format: "png"}, {size: 300}));
  mask.circle()
  image.resize(1024, 1024)
  image.blit(mask,100,100);
  image.write('./userCards/' + pingedUser + '.png')
  await msg.channel.send({files: ['./userCards/' + pingedUser + '.png']});
}

main();
      },error => {msg.reply('Хей! Что то пошло не так! Убедись, что ты указал верный ID или упомянул существующего пользователя!\nКод ошибки: ' + error)})
  }

});


client.login(process.env.DISCORD_TOKEN);