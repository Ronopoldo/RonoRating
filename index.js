const fs = require("fs");
const axios = require("axios");

const talkedRecently = new Set();
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

// getData, putData, isExist, debug
const process = require('process');
  

if (require('../isServer') == 'false')
{}else
{
try {
  
  // Change the directory
  process.chdir('./RonoRating');
  console.log("directory has successfully been changed");
} catch (err) {
      
  // Printing error if occurs
  console.error("error while changing directory");
}
}




const { token } = require('../config.json');

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Place your client and guild ids here
const clientId = '899380887282675743';
const guildId = '544902879534907392';


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

async function debug(msg, message, obj)
{
  try{

    console.log('yEEEEEEEEEEEEEEEEEE')
  if (obj.debugMode == true)
  {
    msg.channel.send('-=__**Начало дебага=-**__\n```' + message + '```\n\n -=__**Окончание дебага=-**__').catch(err=>{console.log(err)})
  }
}catch(err){console.log(err)}
}



async function putData(userid, obj)
{
  console.log(obj)
  const managment = client.guilds.cache.get("968122042765422682");
const db = managment.channels.cache.get("968123915920617472");
const log = managment.channels.cache.get("978739540736999444");
  
  let userlist = JSON.parse(fs.readFileSync('./data/dbsetup'))
  let msgid = userlist[userid]
  let dbmsg = await db.messages.fetch(msgid)
  
  console.log('1232123132123')
  console.log(obj)
  try{
  if (obj.debugMode == true)
  {
    try
{   let debugger1 = await client.users.fetch(userid)
   debugger1.send('Обновлены данные ' + userid + ':\n`' + dbmsg.content + '` (старая дата)').catch(err => {
    console.log('Не удалось отправить изменение базы данныхв ДМ. Возможно, у Вас выключен приём сообщений в ЛС.\n\nКод ошибки: ' + err)
   })
  
  }catch(err){
     console.log('Не удалось отправить изменение базы данныхв ДМ. Возможно, у Вас выключен приём сообщений в ЛС.\n\nКод ошибки: ' + err)
   }
  }
}catch(err){}
log.send('Обновлены данные ' + userid + ':\n`' + dbmsg.content + '` (старая дата)')
  let updData = JSON.stringify(obj);
console.log(msgid)
  console.log(updData)
  dbmsg.edit(updData)
}

async function isExist(id)
  {
    let userlist = await JSON.parse(fs.readFileSync('./data/dbsetup'))
    return id in userlist
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
const sharp = require("sharp");

registerFont('./fonts/main.ttf', { family: "Main" })
registerFont('./fonts/Rounded.otf', { family: "ArialRound" })

const canvas = createCanvas(1024, 1024)
const ctx = canvas.getContext('2d')
let activeLvl = true
let NeededXP = 5
let CycleNum = -1

// const test = require("./src/test");
const shopCommand = require("./src/shop");
// const invCommand = require("./src/inventory");
// const startCommand = require("./src/start");
const calculateUserData = require("./src/calculateUserData");
// const cardCommand = require("./src/card");
// const claimCommand = require("./src/claim");
// const buyCommand = require("./src/buy")
// const setCommand = require("./src/set")
// const respeccCommand = require("./src/respecc")
// const oplotCommand = require("./src/oplot")
// const giftCommand = require("./src/gift")
// const voiceActivity = require("./src/voiceActivity")
// const DMprocessing = require("./src/DMprocessing")
// const balCommand = require("./src/bal")
// const badgesCommand = require("./src/badges")
// const setbadgeCommand = require("./src/setbadge")
// const setbadge2Command = require("./src/setbadge2")
// const transferCommand = require("./src/transfer")
// const exportCommand = require("./src/export")
// const jsCommand = require("./src/javascript")
// const getCommand = require("./src/get")
// const artService = require("./src/artService")
// const spamtonCommand = require("./src/spamtonCommand")
// const countService = require("./src/countService")
// const debugMode = require("./src/debugMode")
// const stickershopCommand = require("./src/stickershopCommand")
// const stickerCommand = require("./src/sticker")
// const checkCount = require("./scripts/checkCount")
  

const { Telegraf } = require('telegraf')

const bot = new Telegraf('')
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))



bot.on('sticker', (ctx) => ctx.reply('👍'))


АКТИВ
bot.hears(/./, async (ctx) => 
{
    if (ctx.chat.id == '-800289565')
    {
        await calculateUserData.calculateUserData(fs, ctx, client, checkCount, sharp, canvas, talkedRecently, getData, isExist, putData, debug)
    }
})

// bot.command('shop', async (ctx) => 
// {
//     if (ctx.chat.id == '-800289565')
//     {
//         await ctx.reply(ctx.message)
//     }
// })



bot.launch()
console.log('DONE')























client.login(require('../config.json').token);