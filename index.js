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
const giftCommand = require("./src/gift")
// Обработчик входящих сообщений
client.on('messageCreate', msg => {

// Входящее сообщение
let incMessage = msg.content.toLowerCase(); 
// Аргументы
let args = msg.content.split(/ +/);
// Команда приложению
let command = args[0];


try
{
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
}
  calculateUserData.calculateUserData(fs, msg, client, ctx, sharp, canvas, talkedRecently);    
}catch(err){
  msg.reply('КРИТИЧЕСКАЯ ОШИБКА В РАБОТЕ БОТА! СООБЩИТЕ ДАННЫЙ КОД <@544902183007813652>\n`'+ err + '`')
}}
)

client.login(process.env.DISCORD_TOKEN);
//тут был Сенко



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