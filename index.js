const express = require('express')
const app = express();
const port = 3000;
const fs = require("fs");
const axios = require("axios");
const sharp = require("sharp");
const talkedRecently = new Set();
app.get('/', function(request, response){ response.send(`Монитор активен. Локальный адрес: http://localhost:${port}`); });
app.listen(port, () => console.log());
const Discord = require('discord.js');
const { Client, Intents, MessageActionRow, MessageButton } = require('discord.js');
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
    })
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
const { createCanvas, loadImage ,  registerFont} = require('canvas');


registerFont('./fonts/main.ttf', {family: "Main"})
registerFont('./fonts/Rounded.otf', {family: "ArialRound"})

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


// client.on('clickButton', async (button) => {
//    console.log('OKOKOK');
// })

client.on('interactionCreate', i => {
	if (!i.isButton()) return;
  // let pageIndex = i.customId.split(/ +/)[1];
i.deferUpdate();
let buttonType = i.customId.split(/ +/)[0]
let iniciator = i.customId.split(/ +/)[1]
let pageIndex = i.customId.split(/ +/)[2]
let target = i.customId.split(/ +/)[3]

// if (i.user.id == i.customId.split(/ +/)[0]);
console.log('TYPE: ' + buttonType)
if (iniciator == i.user.id)
{
  if (buttonType == 'SHOP')
  {
    shopCommand.shopCommand(fs, i.message, ctx, sharp, canvas, MessageActionRow, MessageButton, pageIndex, iniciator);
  }

  if (buttonType == "INV")
  {
     invCommand.invCommand(fs, i.message, ctx, sharp, canvas, client, Number(pageIndex), iniciator, target,  MessageActionRow, MessageButton);
  }
}
  if (i.customId === 'next111') {
   
   // await i.deferUpdate();
	//	await wait(4000);
	//	await i.editReply({ content: 'A button was clicked!', components: [] });
	}
	// console.log(i);
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
switch(command) {
   case "/start": 
    startCommand.startCommand(fs, msg);
    break;
  case "/test": 
    test.test(msg, client, args, MessageActionRow, MessageButton);
    break;
  case "/shop": 

      if ((isNaN(Number(args[1])) == true) || (Number(args[1] == undefined)) || (args[1] == undefined || (args[1] == NaN))) { shopPage = 1 } else { shopPage = Number(args[1]) }
    console.log(shopPage)

    if (shopPage > 100) { shopPage = 1 }

    shopCommand.shopCommand(fs, msg, ctx, sharp, canvas, MessageActionRow, MessageButton, shopPage, msg.author.id);
    break;
  case "/inv":
  case "/inventory": 

let pingedUser = msg.author.id;
      if (args[1] == undefined) { pingedUser = msg.author.id}
      pingedUser = pingedUser.replace("<@",'')
      pingedUser = pingedUser.replace("!",'')
      pingedUser = pingedUser.replace(">",'')

    let pg = 1
    console.log('Unresolved Num: ' + pingedUser)
    if (Number(pingedUser) != NaN){ 
   }else {pingedUser = msg.author.id}

   
  if (args[2] != undefined) {
    if (args[2] > 5)
    {
      console.log('Script 1')
      pg = args[1]
      pingedUser = args[2]
    }else
    {
      console.log('Script 2')
      pg = args[2]
      pingedUser = args[1]
    }
   } else
   {

     

         if (args[1] > 5)
    {
      console.log('Script 3')
      pingedUser = args[1]
    }else
    {
      console.log('Script 4')
      pg = args[1]
    }

  }

if (args[1] == undefined) {
pingedUser = msg.author.id
pg = 1
}
        pingedUser = pingedUser.replace("<@",'')
      pingedUser = pingedUser.replace("!",'')
      pingedUser = pingedUser.replace(">",'')
  

  console.log(pingedUser)
    invCommand.invCommand(fs, msg, ctx, sharp, canvas, client, Number(pg), msg.author.id, pingedUser,  MessageActionRow, MessageButton);
    break;


  default:
    break;
  case "/card":
  case "/preview":
  cardCommand.cardCommand(fs, msg, ctx, sharp, canvas, client)
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
  setCommand.setCommand(fs, msg, ctx, sharp, canvas, args)
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
  balCommand.balCommand(msg, fs, args, client, MessageEmbed)
  break;

  case "/badges":
  badgesCommand.badgesCommand(msg, fs, args, client)
  break;
  
  case "/transfer":
  transferCommand.transfer(msg, fs)
  break;

  case "/export":
  exportCommand.exportCmd(msg, fs)
  break;
}
  
// }catch(err){
//   msg.reply('КРИТИЧЕСКАЯ ОШИБКА В РАБОТЕ БОТА! СООБЩИТЕ ДАННЫЙ КОД <@544902183007813652>\n`'+ err + '`')
// }
}
)

client.on("ready", function()
{
  voiceActivity.voiceActivity(fs, client, '647198455936319528');
  voiceActivity.voiceActivity(fs, client, '648243049909977110');
  voiceActivity.voiceActivity(fs, client, '544902879534907396');
  voiceActivity.voiceActivity(fs, client, '647052644380180480');
  
})


// client.on('message', message => {
//   console.log('321321123321')
//     if (message.channel.type == 'dm'){ console.log('WOW')}
// });

try{
client.on('messageCreate', msg => {
  try{
  DMprocessing.DMprocessing(msg, client, msg.channel)
  }catch(err){}
});
}catch(err){}

client.login(process.env.DISCORD_TOKEN);
//тут был Сенко

//П











(function(console){

console.save = function(data, filename){

    if(!data) {
        console.error('Console.save: No data')
        return;
    }

    if(!filename) filename = 'console.json'

    if(typeof data === "object"){
        data = JSON.stringify(data, undefined, 4)
    }

    var blob = new Blob([data], {type: 'text/json'}),
        e    = document.createEvent('MouseEvents'),
        a    = document.createElement('a')

    a.download = filename
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
 }
})(console)