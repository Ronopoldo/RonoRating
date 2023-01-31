const { createCanvas, loadImage, registerFont } = require('canvas');
const fs = require("fs");
console.log('ae')
const axios = require("axios");
const sharp = require("sharp");

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
  

try {
  
  // Change the directory
  process.chdir('./RonoRating');
  console.log("directory has successfully been changed");
} catch (err) {
      
  // Printing error if occurs
  console.error("error while changing directory");
}



const commands = [];


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
  console.log(123)
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
  console.log(dbmsg)
  dbmsg.edit(updData)
}
console.log('oe')


async function isExist(id)
  {
    let userlist = await JSON.parse(fs.readFileSync('./data/dbsetup'))
    console.log('ISEXIST: ' + id in userlist)
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


registerFont('./fonts/main.ttf', { family: "Main" })
registerFont('./fonts/Rounded.otf', { family: "ArialRound" })

const canvas = createCanvas(1024, 1024)
const gctx = canvas.getContext('2d')
let activeLvl = true
let NeededXP = 5
let CycleNum = -1


console.log('1')

// const test = require("./src/test");
const shopCommand = require("./src/shop");
const invCommand = require("./src/inventory");
// const startCommand = require("./src/start");
const calculateUserData = require("./src/calculateUserData");
const cardCommand = require("./src/card");
const claimCommand = require("./src/claim");
const buyCommand = require("./src/buy")
const setCommand = require("./src/set")
// const respeccCommand = require("./src/respecc")
// const oplotCommand = require("./src/oplot")
// const giftCommand = require("./src/gift")
// const voiceActivity = require("./src/voiceActivity")
// const DMprocessing = require("./src/DMprocessing")
// const balCommand = require("./src/bal")
// const badgesCommand = require("./src/badges")
const setbadgeCommand = require("./src/setbadge")
const setbadge2Command = require("./src/setbadge2")
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

const bot = new Telegraf(process.env['TELEGRAM_TOKEN'])
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))



bot.on('sticker', (ctx) => ctx.reply('������'))


// // АКТИВ
// bot.hears(/./, async (ctx) => 
// {
//     if (ctx.chat.id == '-1001537684385')
//     {
//         console.log(ctx.message.text)
//         // await calculateUserData.calculateUserData(fs, ctx, client, checkCount, sharp, canvas, talkedRecently, getData, isExist, putData, debug)
//     }
// })

bot.command('shop', async (ctx) => 
{
    if (ctx.chat.id == '-1001537684385')
    {
        await shopCommand.shopCommand(fs, ctx, gctx, sharp, canvas, ctx.message.text.slice(`/био`).split(/ +/)[1], ctx.from.id, getData, putData, isExist, debug, bot)
    }
})


bot.command('set', async (ctx) => 
{
    if (ctx.chat.id == '-1001537684385')
    {
        console.log('started')
      console.log(ctx.from.id)
      setCommand.setCommand(fs, ctx, gctx, sharp, canvas, ctx.from.id, isExist, getData, putData, debug)
    }
})

bot.command('badge', async (ctx) => 
{
    if (ctx.chat.id == '-1001537684385')
    {
        console.log('started')
      console.log(ctx.from.id)
setbadgeCommand.setbadgeCommand(fs, ctx, gctx, sharp, canvas, ctx.message.text.slice(`/био`).split(/ +/), isExist, getData, putData, ctx.from.id)
    }
})


bot.command('badge2', async (ctx) => 
{
    if (ctx.chat.id == '-1001537684385')
    {
        console.log('started')
      console.log(ctx.from.id)
setbadge2Command.setbadge2Command(fs, ctx, gctx, sharp, canvas, ctx.message.text.slice(`/био`).split(/ +/), isExist, getData, putData, ctx.from.id)
    }
})


bot.command('claim', async (ctx) => 
{
    if (ctx.chat.id == '-1001537684385')
    {
        console.log('started')
      console.log(ctx.from.id)
claimCommand.claimCommand(fs, ctx, gctx, sharp, canvas, client, getData, putData, isExist, ctx.from.id)
    }
})


bot.command('buy', async (ctx) => 
{
    if (ctx.chat.id == '-1001537684385')
    {
        console.log('started')
      console.log(ctx.from.id)
      buyCommand.buyCommand(fs, ctx, gctx, sharp, canvas, ctx.from.id, getData, putData, isExist)
    }
})


bot.command('inventory', async (ctx) => 
{
    if (ctx.chat.id == '-1001537684385')
    {
        console.log('started')
      console.log(ctx.from.id)
      
      invCommand.invCommand(fs, ctx, gctx, sharp, canvas, client, ctx.message.text.slice(`/био`).split(/ +/)[1], ctx.from.id,isExist, getData, debug, bot) 
    }
})



bot.command('card', async (ctx) => 
{ 
  console.log(ctx.chat.id)
    // ctx.reply(ctx.message.text)
    // await console.log(await bot.telegram.getChat('@Ronopoldo'))
    if (ctx.chat.id == '-1001537684385')
    {
        console.log('started')
      cardCommand.cardCommand(bot, fs, ctx, ctx.message.text, sharp, canvas, client, ctx.from.id, ctx, isExist, getData, debug, gctx)
    }
})




bot.command('move', async (ctx) => 
{ 
  if (ctx.chat.type == 'private')
    {
    let tempOBJ = JSON.parse(fs.readFileSync('./moving/temp.json'))
    let tempReverse = JSON.parse(fs.readFileSync('./moving/tempReverse.json'))
  
    function guidGenerator() {
      var S4 = function() {
         return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
      };
      return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
  }
  
    let newID = guidGenerator()
    if (tempOBJ[ctx.from.id] == undefined)
    {
      tempOBJ[ctx.from.id] = newID
      fs.writeFileSync('./moving/temp.json', JSON.stringify(tempOBJ))
      tempReverse[newID] = ctx.from.id
      fs.writeFileSync('./moving/tempReverse.json', JSON.stringify(tempReverse))
      ctx.replyWithHTML('Успешно присвоен ID-токен:\n<code>' + newID + '</code>\n\nОтлично! Теперь скопируйте его и отправьте через Discord в личные сообщения бота (без доп. символов)\n\nRonoRating#6899\n\n<u>ВНИМАНИЕ! НИ В КОЕМ СЛУЧАЕ НЕ ДАВАЙТЕ ВАШ ТОКЕН ДРУГОМУ ПОЛЬЗОВАТЕЛЮ! В ТАКОМ СЛУЧАЕ ОН СМОЖЕТ ЗАБРАТЬ ВАШИ ДАННЫЕ</u>')
    }else
    {
      ctx.replyWithHTML('Ваш ID-токен:\n<code>\n' + tempOBJ[ctx.from.id] + '</code>\nСкопируйте его и отправьте через Discord в личные сообщения бота (без доп. символов)\n\nRonoRating#6899\n\n<u>ВНИМАНИЕ! НИ В КОЕМ СЛУЧАЕ НЕ ДАВАЙТЕ ВАШ ТОКЕН ДРУГОМУ ПОЛЬЗОВАТЕЛЮ! В ТАКОМ СЛУЧАЕ ОН СМОЖЕТ ЗАБРАТЬ ВАШИ ДАННЫЕ</u>')
    }
  }else
  {
    ctx.reply('Данная команда доступна только в личных сообщениях!\nНЕ ДЕЛИТЕСЬ ВАШИМ ID-токеном С ДРУГИМИ!!')
  }
})

client.on('messageCreate', async msg => {
  if (msg.author.id != "899380887282675743"){
  let tempReverse = JSON.parse(fs.readFileSync('./moving/tempReverse.json'))
let confirmedJSON = JSON.parse(fs.readFileSync('./moving/confirmed.json'))
let userData = JSON.parse(fs.readFileSync('./data/dbsetup'))


if (userData[msg.author.id] != undefined)
    {
  if (tempReverse[msg.content] == undefined)
  {
    msg.reply('Пользователь не найден. Проверьте правильность ID')
  }else
  {
    if (confirmedJSON[msg.author.id] == undefined)
    {

      let tempVar = userData[msg.author.id]
        
      confirmedJSON[msg.author.id] = tempReverse[msg.content]
      fs.writeFileSync('./moving/confirmed.json', JSON.stringify(confirmedJSON))
    let obj = await getData(msg.author.id)
      obj.telegramID = tempReverse[msg.content]
      putData(msg.author.id, obj)
  
      userData[tempReverse[msg.content]] = tempVar
fs.writeFileSync('./data/dbsetup', JSON.stringify(userData))

      
        tempReverse[msg.content] = undefined
fs.writeFileSync('./moving/tempReverse.json', JSON.stringify(tempReverse))
      
      msg.reply('Поздравляю! Вы успешно подтверждены!\n\nТеперь Вы можете использовать RonoRating и в Discord и в Telegram.\n\nДобро пожаловать назад!')
    }else{
      msg.reply('Вы уже подтверждены.')
    }
    
  }
  }else
{
  msg.reply('Похоже, Вы не были зарегистрированы в RonoRating раньше. Пока что команда доступна только для тех, кто был зарегистрирован раньше.')
}
}
})





bot.command('edit', async (ctx) => 
{
        if (ctx.from.id == '925304597')
        {
          let args  = ctx.message.text.slice(`/био`).split(/ +/);
          let objectData = JSON.parse(ctx.message.text.replace('/edit ' + args[1] + ' ',''))

          console.log(objectData)
          console.log(args[1])
        putData(args[1], objectData)
          ctx.reply('Успешно!')
        }else{
          ctx.reply('Прав у тя нет. Подтверждение того, что ты лох по жизни :Р')
             }
        
      });


bot.on('message', async (ctx) =>
          {
            calculateUserData.calculateUserData(fs, ctx, talkedRecently, getData, isExist, putData, debug);
          })






client.login(process.env['DISCORD_TOKEN']);


console.log('2')

client.on("ready", async() =>
{ 
    bot.launch()
    console.log('DONE')
    console.log('DISCORD LOADED')
    
})

