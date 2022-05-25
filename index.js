const express = require('express')
const app = express();
const port = 3000;
const fs = require("fs");
const axios = require("axios");
const sharp = require("sharp");
const talkedRecently = new Set();
app.get('/', function(request, response) { response.send(`Монитор активен. Локальный адрес: http://localhost:${port}`); });
app.listen(port, () => console.log());
const Discord = require('discord.js');
const { Client, Intents, MessageActionRow, MessageButton, GuildMemberRoleManager } = require('discord.js');
let client; {
  client = new Discord.Client({
    partials: ['MESSAGE', 'REACTION', 'CHANNEL'],
    intents: [
      "GUILDS",
      "GUILD_MEMBERS",
      "GUILD_VOICE_STATES",
      "GUILD_PRESENCES",
      "GUILD_MESSAGES",
      "DIRECT_MESSAGES",
    ],
     allowedMentions: ['repliedUser'],
  })
}








const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const token = process.env.DISCORD_TOKEN;

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Place your client and guild ids here
const clientId = '899380887282675743';
const guildId = '544902879534907392';

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationCommands(clientId),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();




async function getData(userid)
{
  const managment = client.guilds.cache.get("968122042765422682");
const db = managment.channels.cache.get("968123915920617472");

  
  let userlist = JSON.parse(fs.readFileSync('./data/dbsetup'))
  let msgid = userlist[userid]
  let dbmsg = await db.messages.fetch(msgid)
  let objectdb = JSON.parse(dbmsg.content)
console.log(msgid)
  let i = 1
  let promiseData = objectdb.config

  // console.log(objectdb["config"])
  return objectdb
}


async function putData(userid, obj)
{
  const managment = client.guilds.cache.get("968122042765422682");
const db = managment.channels.cache.get("968123915920617472");
const log = managment.channels.cache.get("978739540736999444");
  
  let userlist = JSON.parse(fs.readFileSync('./data/dbsetup'))
  let msgid = userlist[userid]
  let dbmsg = await db.messages.fetch(msgid)
log.send('Обновлены данные ' + userid + ':\n`' + dbmsg.content + '` (старая дата)')
  let updData = JSON.stringify(obj);

  dbmsg.edit(updData)
}

async function isExist(id)
  {
    let userlist = await JSON.parse(fs.readFileSync('./data/dbsetup'))
    return userlist.hasOwnProperty(id)
  }









var gulp = require('gulp');
var ignoreErrors = require('gulp-ignore-errors');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
  gulp.src('demo.js')
    .concat()
    .pipe(ignoreErrors())
    .pipe(uglify())
    .pipe(gulp.dest('output'));
});



const { MessageEmbed } = require('discord.js');
let active = true
let shopPage = 1
const { createCanvas, loadImage, registerFont } = require('canvas');


registerFont('./fonts/main.ttf', { family: "Main" })
registerFont('./fonts/Rounded.otf', { family: "ArialRound" })

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
const cardCommand = require("./src/card");
const claimCommand = require("./src/claim");
const buyCommand = require("./src/buy")
const setCommand = require("./src/set")
const respeccCommand = require("./src/respecc")
const oplotCommand = require("./src/oplot")
const giftCommand = require("./src/gift")
const voiceActivity = require("./src/voiceActivity")
const DMprocessing = require("./src/DMprocessing")
const balCommand = require("./src/bal")
const badgesCommand = require("./src/badges")
const setbadgeCommand = require("./src/setbadge")
const setbadge2Command = require("./src/setbadge2")
const transferCommand = require("./src/transfer")
const exportCommand = require("./src/export")
const jsCommand = require("./src/javascript")
const getCommand = require("./src/get")
const artService = require("./src/artService")
const spamtonCommand = require("./src/spamtonCommand")
const countService = require("./src/countService")




const checkCount = require("./scripts/checkCount")
// client.on('clickButton', async (button) => {
//    console.log('OKOKOK');
// })


client.on('error', (e) => {
    console.log('error', e);
});
// client.on('debug', (e) => {
//     console.log('debug', e);
// });



client.on('interactionCreate', i => {
  if (i.isButton()) {
    // let pageIndex = i.customId.split(/ +/)[1];
    i.deferUpdate();
    let buttonType = i.customId.split(/ +/)[0]
    let iniciator = i.customId.split(/ +/)[1]
    let pageIndex = i.customId.split(/ +/)[2]
    let target = i.customId.split(/ +/)[3]

    // if (i.user.id == i.customId.split(/ +/)[0]);
    console.log('TYPE: ' + buttonType)
    if (iniciator == i.user.id) {
      if (buttonType == 'SHOP') {
        shopCommand.shopCommand(fs, i.message, ctx, sharp, canvas, MessageActionRow, MessageButton, pageIndex, iniciator, true);
      }

      if (buttonType == "INV") {
        invCommand.invCommand(fs, i.message, ctx, sharp, canvas, client, Number(pageIndex), iniciator, target, MessageActionRow, MessageButton, isExist, getData);
      }
    }
    if (i.customId === 'next111') {

      // await i.deferUpdate();
      //	await wait(4000);
      //	await i.editReply({ content: 'A button was clicked!', components: [] });
    }
    // console.log(i);

  }
  if (!i.isCommand()) return;
  const { commandName } = i;

  if (i.isCommand()) {
    if (commandName == 'card') {
      let target = i.user.id
      if (i.options.getUser('пользователь') != null) { target = i.options.getUser('пользователь') }
      let FakeMsgText = '/card ' + target
      console.log(FakeMsgText)
      cardCommand.cardCommand(fs, FakeMsgText, ctx, sharp, canvas, client, i.user.id, i, isExist, getData)
    }
    if (commandName == 'start') {
      startCommand.startCommand(fs, i, i.user);
    }

    if (commandName == 'export') {
      exportCommand.exportCmd(i, fs, i.user, isExist, getData)
    }
    if (commandName == 'shop') {
      let shopPage = 1
      if (i.options.getNumber('страница') != null) { shopPage = i.options.getNumber('страница').toString() }
      shopCommand.shopCommand(fs, i, ctx, sharp, canvas, MessageActionRow, MessageButton, shopPage, i.user, false)
    }

        if (commandName == 'inventory') {
          console.log('BEGAN')
      let pg = 1
      if (i.options.getNumber('страница') != null) { pg = i.options.getNumber('страница').toString() }
pingedUser = i.user
          if (i.options.getUser('пользователь') != null) { pingedUser = i.options.getUser('пользователь').id.toString() }

          console.log('ENDED')
          
            invCommand.invCommand(fs, i, ctx, sharp, canvas, client, Number(pg), i.user.id, pingedUser, MessageActionRow, MessageButton, isExist, getData);
    }

    if (commandName == 'set') {

      console.log('set')
      let theme = i.options.getString('тема');

      setCommand.setCommand(fs, i, ctx, sharp, canvas, ['/set', theme], i.user.id, isExist, getData, putData)
    }

    if (commandName == 'respecc') {
      respeccCommand.respeccCommand(i, MessageEmbed)
    }

    if (commandName == 'badges')
    {
      let target = i.user
      if (i.options.getUser('пользователь') != null) { target = i.options.getUser('пользователь') }

      
      let args = ['/badges', target.id]
      console.log(args)
      badgesCommand.badgesCommand(i, fs, args, client, i.user.id, isExist, getData)
    }

    
    if (commandName == 'js') {
      let command = '/javascript ' + i.options.getString('команда_для_выполнения');
      let args = command.slice(`/био`).split(/ +/);
      console.log(command)
      jsCommand.jsCmd(i, fs, client, args, MessageEmbed, command, i.user)

    }

    if (commandName == 'balance') {
      let target = i.user
      if (i.options.getUser('пользователь') != null) { target = i.options.getUser('пользователь') }
      console.log(target)
      balCommand.balCommand(i, fs, ['/args', target.id], client, MessageEmbed, i.user)
    }


        if (commandName == 'setbadge') {
      let target = i.user
      let badge = i.options.getString('значок') 
      let args = ['/setbadge', badge]
  
      if (i.options.getNumber('место') == 2)
      {
      setbadge2Command.setbadge2Command(fs, i, ctx, sharp, canvas, args, isExist, getData, putData, i.user.id)
      }else{
        setbadgeCommand.setbadgeCommand(fs, i, ctx, sharp, canvas, args, isExist, getData, putData, i.user.id)
      }
      }


    
// if (commandName == 'count') {
// let currentCount = fs.readFileSync('./data/count', "utf8")
// i.reply('Текущее число: `' + currentCount + '`\n\nСледующее число: `' + (Number(currentCount)+1).toString() + '`')
// }


  }
});


// Обработчик входящих сообщений
client.on('messageCreate', msg => {
  


  // Входящее сообщение
  let incMessage = msg.content.toLowerCase();
  // Аргументы
  let args = msg.content.split(/ +/);
  // Команда приложению
  let command = args[0].toLowerCase();


  // let commandsArray = ['/start', '/test','/shop','/inv','/inventory','/card','/preview','/claim','/setbadge1','/setbadge','/setbadge2','/set','/respecc','/gift','/jojo','/balance','/bal','/badges', '/buy']

  // try
  // {
  switch (command) {
    case "/check":
      {
        let userlist = JSON.parse(fs.readFileSync('./data/dbsetup'))

        if (userlist.hasOwnProperty(msg.author.id) == false)
        {
         msg.reply("Йоу! Не могу найти твои данные :(\nУверен ли ты, что регистрировался ранее в RonoRating'е?\n\nЕсли ты уверен, что твои данные существовали и затерялись, то напиши в службу поддержки (<#805513502307254302>)") 
        }else{
          msg.reply('Хей! Поздравляю! С твоими данными всё в порядке: они мигрировали на новую базу данных без ошибок.')
        }
      }
    // case "/start":
    //   startCommand.startCommand(fs, msg, msg.author);
    //   break;
    // case "/test":
    //   test.test(getData, msg)
    //   break;
    // case "/shop":

    //   if ((isNaN(Number(args[1])) == true) || (Number(args[1] == undefined)) || (args[1] == undefined || (args[1] == NaN))) { shopPage = 1 } else { shopPage = Number(args[1]) }
    //   console.log(shopPage)

    //   if (shopPage > 100) { shopPage = 1 }

    //   shopCommand.shopCommand(fs, msg, ctx, sharp, canvas, MessageActionRow, MessageButton, shopPage, msg.author.id, false);
    //   break;
    case "/inv":
    case "/inventory":

      let pingedUser = msg.author.id;
      if (args[1] == undefined) { pingedUser = msg.author.id }
      pingedUser = pingedUser.replace("<@", '')
      pingedUser = pingedUser.replace("!", '')
      pingedUser = pingedUser.replace(">", '')

      let pg = 1
      console.log('Unresolved Num: ' + pingedUser)
      if (Number(pingedUser) != NaN) {
      } else { pingedUser = msg.author.id }


      if (args[2] != undefined) {
        if (args[2] > 5) {
          console.log('Script 1')
          pg = args[1]
          pingedUser = args[2]
        } else {
          console.log('Script 2')
          pg = args[2]
          pingedUser = args[1]
        }
      } else {



        if (args[1] > 5) {
          console.log('Script 3')
          pingedUser = args[1]
        } else {
          console.log('Script 4')
          pg = args[1]
        }

      }

      if (args[1] == undefined) {
        pingedUser = msg.author.id
        pg = 1
      }
      pingedUser = pingedUser.replace("<@", '')
      pingedUser = pingedUser.replace("!", '')
      pingedUser = pingedUser.replace(">", '')


      console.log(pingedUser)
      invCommand.invCommand(fs, msg, ctx, sharp, canvas, client, Number(pg), msg.author.id, pingedUser, MessageActionRow, MessageButton, isExist, getData);
      break;


    // default:
    //   break;
    case "/card":
    // case "/preview":
      cardCommand.cardCommand(fs, msg.content, ctx, sharp, canvas, client, msg.author.id, msg, isExist, getData)
      break;

    case "/edit":
      {
        if (msg.author.id == 544902183007813652)
        {
          let objectData = JSON.parse(msg.content.replace('/edit ' + args[1] + ' ',''))

          console.log(objectData)
          console.log(args[1])
        putData(args[1], objectData)
          msg.reply('Успешно!')
        }else{
          msg.reply('Прав у тя нет. Подтверждение того, что ты лох по жизни :Р')
             }
        
        
        break;
      }
    // case "/claim":
    //   claimCommand.claimCommand(fs, msg, ctx, sharp, canvas, client)
    //   break;
    // case "/buy":
    //   buyCommand.buyCommand(fs, msg, ctx, sharp, canvas)
    //   break;
    case "/setbadge":
    case "/setbadge1":
      setbadgeCommand.setbadgeCommand(fs, msg, ctx, sharp, canvas, args, isExist, getData, putData, msg.author.id)
      break;
    case "/setbadge2":
      setbadge2Command.setbadge2Command(fs, msg, ctx, sharp, canvas, args, isExist, getData, putData, msg.author.id)
      break;
    case "/set":
      setCommand.setCommand(fs, msg, ctx, sharp, canvas, args, msg.author.id, isExist, getData, putData)
      break;
    case "/respecc":
      respeccCommand.respeccCommand(msg, MessageEmbed)
      break;
    //  case "/gift":
    //giftCommand.giftCommand(msg, fs, client, args)
    // break;

    // case "/jojo":
    //   oplotCommand.oplotCommand(msg, fs, client, args)
    //   break;

    // case "/balance":
    // case "/bal":
    //   balCommand.balCommand(msg, fs, args, client, MessageEmbed, msg.author.id)
    //   break;

    case "/badges":
      badgesCommand.badgesCommand(msg, fs, args, client, msg.author.id, isExist, getData)
      break;

    // case "/transfer":
    //   transferCommand.transfer(fs, msg.author.id)
    //   break;

    case "/export":
      exportCommand.exportCmd(msg, fs, msg.author, isExist, getData)
      break;

    case "/javascript":
    case "/js":
    case "/java":
    case "/command":
    case "/do":
    case "/script":
    case "/scenario":
    case "/ronorating":
    case "/rr":
      jsCommand.jsCmd(msg, fs, client, args, MessageEmbed, msg.content, msg.author.id)
      break;

    // case "/get":
    //   getCommand.getCmd(msg, fs, client, GuildMemberRoleManager, MessageEmbed)
    //   break;
    // case "/spamton_theme":
    //   spamtonCommand.spamtonCommand(msg, fs, client, args)
    //   break;
    default:
  {
        calculateUserData.calculateUserData(fs, msg, client, ctx, sharp, canvas, talkedRecently, getData, isExist, putData);
}  
}

  // }catch(err){
  //   msg.reply('КРИТИЧЕСКАЯ ОШИБКА В РАБОТЕ БОТА! СООБЩИТЕ ДАННЫЙ КОД <@544902183007813652>\n`'+ err + '`')
  // }

  if (msg.channel.id == '671026327016701953') {
    artService.msgProcessing(msg, client)
  }

if (msg.content.toLowerCase().includes('нет ты') && msg.author.id != '899380887282675743')
{
msg.reply('Нет ты')
}

if (msg.channel.id == '687054666495688788') {
countService.msgProcessing(msg, client, fs, checkCount.checker(msg, client))
}

  if ((msg.channel.id == '940359291175596122') || (msg.channel.id == '940460074378330163'))
  {
    if (msg.author.id == '609701912643764244')
    {
      msg.reply('Если Кола говорит что то против создания Онли Фанс, то не верьте ему. Он стесняется =)')
    }
  }

  if (msg.content == '/oyasumi')
  {
    msg.reply("Close your eyes and you'll leave this dream")
  }

}
)

client.on("ready", async() => {
  // voiceActivity.voiceActivity(fs, client, '647198455936319528');
  // voiceActivity.voiceActivity(fs, client, '648243049909977110');
  // voiceActivity.voiceActivity(fs, client, '544902879534907396');
  // voiceActivity.voiceActivity(fs, client, '647052644380180480');

// console.log("Ы")
// function transit(userID)
//   {
//     console.log('ВЫПОЛНЯЮ')
//     let userPath = './data/UserData/' + userID
//       const managment = client.guilds.cache.get("968122042765422682");

// const db = managment.channels.cache.get("968123915920617472");
//     try{
//     let obj =
//     {
//       user: userID,
//       money: fs.readFileSync(userPath + '/integers/money').toString(),
//       exp: fs.readFileSync(userPath + '/integers/grandXp').toString(),
//       lvl: fs.readFileSync(userPath + '/tasks/global').toString(),
//       credit: fs.readFileSync(userPath + '/integers/socialCredit').toString(),
//       active:
//       {
//         text:
//         {
//           lvl: fs.readFileSync(userPath + '/integers/lvl').toString(),
//           exp: fs.readFileSync(userPath + '/integers/exp').toString()
//         },
//         daily:
//         {
//           lvl: fs.readFileSync(userPath + '/tasks/lastActve').toString(),
//           exp: fs.readFileSync(userPath + '/badges/lastActve').toString()
//         },
//         voice:
//         {
//           lvl: fs.readFileSync(userPath + '/tasks/voice').toString(),
//           exp: fs.readFileSync(userPath + '/integers/voice').toString()
//         },
//         count:
//         {
//           lvl: fs.readFileSync(userPath + '/tasks/countlvl').toString(),
//           exp: fs.readFileSync(userPath + '/integers/count').toString()
//         },
//       },
//         config:
//         {
//           badge1: fs.readFileSync(userPath + '/config/badge').toString(),
//           badge2: fs.readFileSync( userPath + '/config/badge2').toString(),
//           theme: fs.readFileSync(userPath + '/config/theme').toString()
//         },
//         themes: fs.readdirSync(userPath + '/themes'),
//         badges: fs.readdirSync(userPath + '/cardBadges')
//     }

    
//     let loggingCh = managment.channels.cache.get("971425301236162560");
//     console.log('ИНИЦИАЛИЗАЦИЯ ЗАВЕРШЕНА')
//   db.send(JSON.stringify(obj)).then(msg9 => {
//     loggingCh.send('"user_' + userID + '":"' + msg9.id + '",')
//   })




    
//     }catch(err){console.log('Ошибка в обработке данных ' + userID)}
//   }


//       const managment = client.guilds.cache.get("968122042765422682");

// const db = managment.channels.cache.get("968123915920617472");


//   const needmsg = await db.messages.fetch('971414518540406825')

// let arrayus = fs.readdirSync('./data/UserData')
// let i=0

//   setInterval(function() {
// transit(arrayus[i])
//     i++
//   },3000);

  
//   console.log('^^^^^^^^^^^^^')

// let arrayus = fs.readdirSync('./data/UserData')
//   arrayus.forEach(element => {
//     transferCommand.transfer(fs,element)
//   })

//   console.log('ТРАНСФЕР ЗАВЕРШЁН')


  
setInterval(function() {
function zeros(i) {
      if (i < 10) {
        return "0" + i;
      } else {
        return i;
      }
    }


const guild = client.guilds.cache.get("544902879534907392");
  const managment = client.guilds.cache.get("968122042765422682");

console.log(managment)
const db = managment.channels.cache.get("968123915920617472");
let CurrentDate = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"}))
// let currentCount = fs.readFileSync('./data/count', "utf8")
const countChannel = guild.channels.cache.get("687054666495688788")

  
  countChannel.messages.fetch({ limit: 1 }).then(messages => {
  let lastMessage = messages.first();


  
countChannel.setTopic('Следующее число: ' + (Number(lastMessage.content.split(" ")[0]) + 1).toString() + ' | ДАННЫЕ НА ' + CurrentDate.getHours() + ':' + zeros(CurrentDate.getMinutes()) + ':' + zeros(CurrentDate.getSeconds()))

})
.catch(console.error);
  
console.log('Обновлено описание счёта')
},300000);

})




// client.on('message', message => {
//   console.log('321321123321')
//     if (message.channel.type == 'dm'){ console.log('WOW')}
// });

client.on('messageUpdate', (oldMessage, newMessage) => {
  try{
  if (newMessage.author.id === client.user.id) return;
console.log(newMessage.channel.id)
  if (!oldMessage.author) return;
  if (newMessage.channel.id == '671026327016701953') {

    if (newMessage.attachments.size > 0) { } else {
        // newMessage.reply('123')
      // newMessage.delete()
    }

  }


    if (newMessage.channel.id == '687054666495688788') {

      newMessage.channel.messages.fetch({ limit: 2 })
    .then(messageMappings => {
      let messages = Array.from(messageMappings.values());
      let previousMessage = messages[1].content;




      let splittedMsg = previousMessage.split(" ");
      console.log('-===================')
      let count = splittedMsg[0]
      console.log(splittedMsg)
  let newSplit = newMessage.content.split(" ")
  console.log('1)' + splittedMsg[0])
  console.log('2)' + newSplit[0])

  if (newSplit[0] == (Number(splittedMsg[0])+1).toString())
  {
    
  }else
  {
    newMessage.delete()
    newMessage.channel.send( (Number(splittedMsg[0])+1).toString() + ' - <@' + newMessage.author.id + '>')
  }


      
    })

    .catch(error => console.log("error", "Error fetching messages in channel\n" + error))

  }


  }catch(err) { console.log(err) }
});

client.on("messageDelete", (msg) => {

if (msg.channel.id == '687054666495688788') {

  msg.channel.messages.fetch({ limit: 1 }).then(messages => {
  let lastMessage = messages.first();
    if ((Number(lastMessage.content.split(" ")[0]) + 1).toString() == msg.content.split(" ")[0])
    {
      msg.channel.send( msg.content.split(" ")[0] + ' - <@' + msg.author.id + '>')
    }



})
.catch(console.error);

}

});

// client.on('voiceStateUpdate', (oldMember, newMember) => {
//   let newUserChannel = newMember.voiceChannel
//   let oldUserChannel = oldMember.voiceChannel
//   let guild = client.guilds.cache.get("544902879534907392");
//   let vrole = guild.roles.cache.get('953629666365820948');
//   if(oldUserChannel === undefined && newUserChannel !== undefined) {

//         newMember.roles.add(vrole)
    
//   } else if(newUserChannel === undefined){

//     newMember.roles.remove(vrole)

//   }
// })




try {
  client.on('messageCreate', msg => {
    try {
      DMprocessing.DMprocessing(msg, client, msg.channel)
    } catch (err) { }
  });
} catch (err) { }

client.login(process.env.DISCORD_TOKEN);
//тут был Сенко

//П











(function(console) {

  console.save = function(data, filename) {

    if (!data) {
      console.error('Console.save: No data')
      return;
    }

    if (!filename) filename = 'console.json'

    if (typeof data === "object") {
      data = JSON.stringify(data, undefined, 4)
    }

    var blob = new Blob([data], { type: 'text/json' }),
      e = document.createEvent('MouseEvents'),
      a = document.createElement('a')

    a.download = filename
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
  }
})(console)