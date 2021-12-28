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
// Обработчик входящих сообщений
client.on('messageCreate', msg => {
  calculateUserData.calculateUserData(fs, msg, client, ctx, sharp, canvas, talkedRecently);

  
 

// Входящее сообщение
let incMessage = msg.content.toLowerCase(); 
// Аргументы
let args = msg.content.split(/ +/);
// Команда приложению
let command = args[0].toLowerCase();


// try
// {
switch(command) {
   case "/start": 
    startCommand.startCommand(fs, msg);
    break;
  case "/test": 
    test.test(msg, fs, args);
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
  case "/set":
  setCommand.setCommand(fs, msg, ctx, sharp, canvas, args)
  break;
  case "/respecc":
  respeccCommand.respeccCommand(msg, MessageEmbed)
  break;
  case "/gift":
  giftCommand.giftCommand(msg, fs, client, args)
  break;

  case "/oplot":
  oplotCommand.oplotCommand(msg, fs, client, args)
  break;

}
// }catch(err){
//   msg.reply('КРИТИЧЕСКАЯ ОШИБКА В РАБОТЕ БОТА! СООБЩИТЕ ДАННЫЙ КОД <@544902183007813652>\n`'+ err + '`')
// }
}
)


client.on("ready", function()
{
  voiceActivity.voiceActivity(fs, client);
})


// client.on('message', message => {
//   console.log('321321123321')
//     if (message.channel.type == 'dm'){ console.log('WOW')}
// });


client.on('messageCreate', msg => {
  try{
  DMprocessing.DMprocessing(msg, client, msg.channel)
  }catch(err){}
});


client.login(process.env.DISCORD_TOKEN);
//тут был Сенко

//П

