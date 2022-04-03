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

// client.on('clickButton', async (button) => {
//    console.log('OKOKOK');
// })

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
        invCommand.invCommand(fs, i.message, ctx, sharp, canvas, client, Number(pageIndex), iniciator, target, MessageActionRow, MessageButton);
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
      cardCommand.cardCommand(fs, FakeMsgText, ctx, sharp, canvas, client, i.user.id, i)
    }
    if (commandName == 'start') {
      startCommand.startCommand(fs, i, i.user);
    }

    if (commandName == 'export') {
      exportCommand.exportCmd(i, fs, i.user)
    }
    if (commandName == 'shop') {
      let shopPage = 1
      if (i.options.getNumber('страница') != null) { shopPage = i.options.getNumber('страница').toString() }
      shopCommand.shopCommand(fs, i, ctx, sharp, canvas, MessageActionRow, MessageButton, shopPage, i.user, false)
    }

    if (commandName == 'set') {
      let theme = i.options.getString('тема');

      setCommand.setCommand(fs, i, ctx, sharp, canvas, ['/set', theme], i.user.id)
    }

    if (commandName == 'respecc') {
      respeccCommand.respeccCommand(i, MessageEmbed)
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
if (commandName == 'count') {
let currentCount = fs.readFileSync('./data/count', "utf8")
i.reply('Текущее число: `' + currentCount + '`\n\nСледующее число: `' + (Number(currentCount)+1).toString() + '`')
}


  }
});


// Обработчик входящих сообщений
client.on('messageCreate', msg => {
  calculateUserData.calculateUserData(fs, msg, client, ctx, sharp, canvas, talkedRecently);

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
    case "/start":
      startCommand.startCommand(fs, msg, msg.author);
      break;
    case "/test":
      test.test(msg, client, args, MessageActionRow, MessageButton,fs);
      break;
    case "/shop":

      if ((isNaN(Number(args[1])) == true) || (Number(args[1] == undefined)) || (args[1] == undefined || (args[1] == NaN))) { shopPage = 1 } else { shopPage = Number(args[1]) }
      console.log(shopPage)

      if (shopPage > 100) { shopPage = 1 }

      shopCommand.shopCommand(fs, msg, ctx, sharp, canvas, MessageActionRow, MessageButton, shopPage, msg.author.id, false);
      break;
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
      invCommand.invCommand(fs, msg, ctx, sharp, canvas, client, Number(pg), msg.author.id, pingedUser, MessageActionRow, MessageButton);
      break;


    default:
      break;
    case "/card":
    case "/preview":
      cardCommand.cardCommand(fs, msg.content, ctx, sharp, canvas, client, msg.author.id, msg)
      break;
    case "/claim":
      claimCommand.claimCommand(fs, msg, ctx, sharp, canvas, client)
      break;
    case "/buy":
      buyCommand.buyCommand(fs, msg, ctx, sharp, canvas)
      break;
    case "/setbadge":
    case "/setbadge1":
      setbadgeCommand.setbadgeCommand(fs, msg, ctx, sharp, canvas, args)
      break;
    case "/setbadge2":
      setbadge2Command.setbadge2Command(fs, msg, ctx, sharp, canvas, args)
      break;
    case "/set":
      setCommand.setCommand(fs, msg, ctx, sharp, canvas, args, msg.author.id)
      break;
    case "/respecc":
      respeccCommand.respeccCommand(msg, MessageEmbed)
      break;
    //  case "/gift":
    //giftCommand.giftCommand(msg, fs, client, args)
    // break;

    case "/jojo":
      oplotCommand.oplotCommand(msg, fs, client, args)
      break;

    case "/balance":
    case "/bal":
      balCommand.balCommand(msg, fs, args, client, MessageEmbed, msg.author.id)
      break;

    case "/badges":
      badgesCommand.badgesCommand(msg, fs, args, client)
      break;

    case "/transfer":
      transferCommand.transfer(msg, fs)
      break;

    case "/export":
      exportCommand.exportCmd(msg, fs, msg.author)
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

    case "/get":
      getCommand.getCmd(msg, fs, client, GuildMemberRoleManager, MessageEmbed)
      break;
    case "/spamton_theme":
      spamtonCommand.spamtonCommand(msg, fs, client, args)
      break;
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
countService.msgProcessing(msg, client, fs)
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

client.on("ready", function() {
  voiceActivity.voiceActivity(fs, client, '647198455936319528');
  voiceActivity.voiceActivity(fs, client, '648243049909977110');
  voiceActivity.voiceActivity(fs, client, '544902879534907396');
  voiceActivity.voiceActivity(fs, client, '647052644380180480');


setInterval(function() {
function zeros(i) {
      if (i < 10) {
        return "0" + i;
      } else {
        return i;
      }
    }


const guild = client.guilds.cache.get("544902879534907392");
let CurrentDate = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"}))
let currentCount = fs.readFileSync('./data/count', "utf8")
const countChannel = guild.channels.cache.get("687054666495688788")
countChannel.setTopic('Следующее число: ' + (Number(currentCount) + 1).toString() + ' | ДАННЫЕ НА ' + CurrentDate.getHours() + ':' + zeros(CurrentDate.getMinutes()) + ':' + zeros(CurrentDate.getSeconds()))
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
      newMessage.delete()
    }

  }


    if (newMessage.channel.id == '687054666495688788') {

let currentCount = Number(fs.readFileSync('./data/count', "utf8"))
    
console.log('LOTTA')
      console.log(currentCount)
if ((oldMessage.content.startsWith(((currentCount).toString() + ' '))) || (oldMessage.content == (currentCount).toString()))
      {
        console.log('GOTTA')
if ((newMessage.content.startsWith((currentCount.toString() + ' '))) || (newMessage.content == currentCount.toString()))
    {}else{
newMessage.delete()
newMessage.channel.send('<@' + oldMessage.author.id + '>: ' + currentCount)
console.log('YOTTA')
}
}

  }


  }catch(err) { console.log(err) }
});

client.on("messageDelete", (msg) => {

if (msg.channel.id == '687054666495688788') {

let currentCount = Number(fs.readFileSync('./data/count', "utf8"))
    
console.log('LOTTA')
      console.log(currentCount)

if ((msg.content.startsWith(((currentCount).toString() + ' '))) || (msg.content == (currentCount).toString()))
{
  msg.channel.send('<@' + msg.author.id + '>: ' + currentCount)
}
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