async function cardCommand(bot, fs, ctx , msg, sharp, canvas, client, iniciator, interaction, isExist, getData, debug,gctx) {
  let debugOut = ''
// 'use strict';
  {
    const Color = require('color');
    if (isExist(iniciator))
   {
ctx.reply('Загружаем...')

let pingedUser = iniciator


        const args = msg.slice(`/био`).split(/ +/);

            let preview = false
    if (msg.toLowerCase().startsWith('/preview')) { preview = true}

    
    if (msg.toLowerCase().startsWith('/card')) { preview = false}






    if (args.length >= 2)
    {
      pingedUser = args[1]
      pingedUser = pingedUser.replace("@",'')
      //ПРЕОБРАЗОВАТЬ В АЙДИ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }

    if (args.length > 2)
    {    
      ctx.reply('Слишком много аргументов! После команды Вам следует написать лишь один аргумент - упомянание пользователя, его id или вообще не использовать аргументы.\nНе смотря на это, мы всё равно попробуем распознать упоминание')
    }



   if (isExist(pingedUser))
   { }else{pingedUser = iniciator}

     debugOut = debugOut + '\n' +'ПОПАааа'

     let obj = await getData(pingedUser)
debugOut = debugOut + '\n' + obj

  //   client.users.fetch(pingedUser).then(User => 
  // {

   let User = await bot.telegram.getChat(pingedUser)

console.log('p1')
//АЧВИКИ
gctx.font = '30px "ArialRound"'

    gctx.strokeStyle = 'white';
    gctx.lineWidth = 1;
    gctx.fillStyle = 'black';


    gctx.clearRect(0, 0, canvas.width, canvas.height);
    gctx.textAlign = 'right'

let fontsize = 70

//Актив макс уровень
             let lastLvl = '0'
             try{lastLvl  = obj.active.text.lvl}catch(err){}

          const currentXP = Math.floor(obj.active.text.exp)
          const levelNeed = obj.active.text.lvl
           NeededXP = 8
           CycleNum = 0
           active = true
           while (active == true)
           {
             if (NeededXP < 460) { NeededXP = NeededXP * 1.12 }else{NeededXP = 500; active == false } //break;
             CycleNum = CycleNum + 1
             if (CycleNum > levelNeed) { active = false }
           }


  NeededXP = Math.floor(NeededXP)

        // interaction.reply(currentXP.toString() + '/' + NeededXP.toString())
        gctx.fillText(NeededXP, 458, 400)
        gctx.strokeText(NeededXP, 458, 400)

gctx.textAlign = 'left'
        gctx.fillText(currentXP, 175, 400)
        gctx.strokeText(currentXP, 175, 400)

gctx.textAlign = 'center'
        gctx.fillText(lastLvl + ' уровень', 323, 400)



        gctx.font = '47px "ArialRound"'

    gctx.strokeStyle = 'white';
gctx.textAlign = 'left'
        gctx.fillText('Активность', 185, 330)
        gctx.strokeText('Активность', 185, 330)

        let activeImg = './Images/Blank.png'
        if (-1<lastLvl<9999)
        {
          activeImg = './tasks/activity/basic.png'
        }

await console.log('p2')


        let actwidth = Math.floor(270 * (currentXP / NeededXP) + 1)
    debugOut = debugOut + '\n' +'111'
             if (actwidth >= 270) {actwidth = 269}
             await console.log('p2.0.1')


     sharp('./tasks/fullBar.png')
        .extract({ left: 0, top: 0, width: actwidth, height: 30 })

        // await console.log('2.0.2')
        
      .toBuffer()
      
            .then(function(outputBufferAct) {
              console.log('p2.1')
//Актив дни подряд
let lastActiveLvl  = 0
let lastActive = '0 0 0'
let InputMassive = ['0', '0', '0']
try{
lastActiveLvl = Number(obj.active.daily.lvl);
lastActive = obj.active.daily.exp
InputMassive = lastActive.split(' ');
}catch(err){
  lastActiveLvl = 0
  InputMassive = ['2022-05-20T00:00:00.000Z','0']
}
console.log('p2.2')
let activeDays = [0,2,4,7,10,14,18,21,25,31,45,60,90]

gctx.font = '30px "ArialRound"'
    gctx.strokeStyle = 'white';
    gctx.lineWidth = 1;
    gctx.fillStyle = 'black';
    gctx.textAlign = 'right'

let fontsize = 70
console.log('p3')

        gctx.fillText(activeDays[lastActiveLvl], 962, 400)
        gctx.strokeText(activeDays[lastActiveLvl], 962, 400)

gctx.textAlign = 'left'
        gctx.fillText(InputMassive[1], 689, 400)
        gctx.strokeText(InputMassive[1], 689, 400)

gctx.textAlign = 'center'
        gctx.fillText(lastActiveLvl + ' уровень', 827, 400)


        gctx.font = '33px "ArialRound"'

    gctx.strokeStyle = 'white';
gctx.textAlign = 'left'
        gctx.fillText('Повседневность', 689, 320)
        gctx.strokeText('Повседневность', 689, 320)
debugOut = debugOut + '\n' +'222'
sharp('./tasks/lastActiveBar.png')
        .extract({ left: 0, top: 0, width: Math.floor(InputMassive[1] / activeDays[lastActiveLvl] * 269 + 1 ), height: 30 })
      .toBuffer()
            .then(function(outputBufferAct1) {



///////////////ГС АКТИВ
let currentLvl = obj.active.voice.lvl
        let userActivity = obj.active.voice.exp

        console.log('p4')
let lvlArray = [0.5,1,1.5,2,3,4,5,10,15,20,25,30,45,50,75,90,120,150,180,220,280,320,390,460,500,600,750,800,900,1000]

      let rewards = [50,100,300,400,800,1200,3000, 7000, 7000, 8500, 9000, 9000,9000,10000,11000,15000,16000,17000,18000,19000,20000,25000,25000,25000,25000,25000,25000,40000,40000,250000]


      gctx.font = '30px "ArialRound"'
    gctx.strokeStyle = 'white';
    gctx.lineWidth = 1;
    gctx.fillStyle = 'black';
    gctx.textAlign = 'right'

let fontsize = 70
if (currentLvl > 29) { currentLvl = 29 }

        gctx.fillText(lvlArray[currentLvl], 458, 587)
        gctx.strokeText(lvlArray[currentLvl], 458, 587)

gctx.textAlign = 'left'
        gctx.fillText((userActivity/60).toFixed(1), 175, 587)
        gctx.strokeText((userActivity/60).toFixed(1), 175, 587)

gctx.textAlign = 'center'
        gctx.fillText(currentLvl + ' уровень', 323, 587)


        gctx.font = '33px "ArialRound"'



debugOut = debugOut + '\n' +'SECRET NUM: ' + Math.floor(269*((userActivity/60).toFixed(1))/lvlArray[currentLvl]+1)

    gctx.strokeStyle = 'white';
gctx.textAlign = 'left'
        gctx.fillText('Голосовой актив', 185, 507)
        gctx.strokeText('Голосовой актив', 185, 507)
        
        let vwidth = Math.floor(269*((userActivity/60).toFixed(1))/lvlArray[currentLvl]+1)

if ((vwidth >= 270) || (vwidth<1)) {vwidth = 269}
debugOut = debugOut + '\n' +'333'

sharp('./tasks/voiceBar.png')


      .extract({ left: 0, top: 0, width: vwidth, height: 30 })
      .toBuffer()
            .then(function(outputBufferAct2) {


             
              console.log('p5')
//////////////////////СЧЁТ

let countLvl = obj.active.count.lvl
let count = Math.floor(obj.active.count.exp)
let lvlUP = [1, 5, 10, 15, 20, 40, 60, 80, 100, 200, 300, 500, 750]
      gctx.font = '30px "ArialRound"'
    gctx.strokeStyle = 'white';
    gctx.lineWidth = 1;
    gctx.fillStyle = 'black';
    gctx.textAlign = 'right'


if (countLvl > 13) { countLvl = 13 }

        gctx.fillText(lvlUP[countLvl], 962, 587)
        gctx.strokeText(lvlUP[countLvl], 962, 587)

gctx.textAlign = 'left'
        gctx.fillText(count, 689, 587)
        gctx.strokeText(count,689, 587)

gctx.textAlign = 'center'
        gctx.fillText(countLvl + ' уровень', 827, 587)


        gctx.font = '33px "ArialRound"'

        let countwidth = Math.floor(269 * ((Number(count) - Number(lvlUP[countLvl - 1])) / Number(lvlUP[countLvl - 1])) + 1)
console.log('REWIJAKSLFA:FS ' + countwidth)
if ((countwidth >= 270) || (countwidth<1)) {countwidth = 2}
              if (isNaN(countwidth)) {countwidth = 1}

              

    gctx.strokeStyle = 'white';
gctx.textAlign = 'left'
              gctx.font = '50px "ArialRound"'
        gctx.fillText('Счёт', 689,515)
        gctx.strokeText('Счёт', 689, 515)

debugOut = debugOut + '\n' +'444'
sharp('./tasks/countBar.png')
.extract({ left: 0, top: 0, width: countwidth, height: 30 })
      .toBuffer()
            .then(function(outputBufferAct3) {






// sharp('./tasks/voiceBar.png')


//       .extract({ left: 0, top: 0, width: vwidth, height: 30 })
//       .toBuffer()
//             .then(function(outputBufferAct2) {






///////////////АКТИВ ГЛОБАЛ
      gctx.font = '20px "ArialRound"'
    gctx.strokeStyle = 'white';
    gctx.lineWidth = 1;
    gctx.fillStyle = 'black';
    gctx.textAlign = 'left'

let fontsize = 45


let grandPath = './Images/Blank.png'
let barSize = 1

  let currentGlobalLvl = obj.lvl
  let currentGlobalExp = obj.exp
  grandPath = './Images/grandbar.png'
  barSize = 
  gctx.fillText(Math.floor((Number(currentGlobalExp)).toString()), 132,255)

  let neededExp = 12
  let active1 = true
  let counterGlobal = 0
  let globalMoney = 25
  while (active1 == true)
  {
    neededExp = neededExp * 1.2
    counterGlobal = Number(counterGlobal) + 1
    if (counterGlobal >= Number(currentGlobalLvl)+1)
    {
      active1 = false
    }
// console.log(counterGlobal)
  }

  if (neededExp > 450) { neededExp = 450 }
  
  debugOut = debugOut + '\n' +'NEEDED / CURRENT ' + neededExp + '/' + currentGlobalExp
barSize = currentGlobalExp / neededExp

debugOut = debugOut + '\n' +'bar1' + barSize



barSize = Math.floor(520 * barSize)
debugOut = debugOut + '\n' +'ЙО!' + barSize
if ((barSize >519) || (barSize < 1)) { barSize = 519 }
debugOut = debugOut + '\n' +'bar1' + barSize
sharp(grandPath)

      .extract({ left: 0, top: 0, width: barSize, height: 7 })
      .toBuffer()
            .then(function(grandBuffer) {









    gctx.strokeStyle = 'black';
    gctx.lineWidth = 2;
    gctx.fillStyle = 'black';

gctx.font = '50px "Main"'
    gctx.textAlign = 'left'

fontsize = 70
let nameLength = User.tag.length
var request = require('request').defaults({ encoding: null });
 request.get(User.displayAvatarURL({ format: "png"}, {size: 300}), function (err, res, body) {


 



let Badge = obj.config.badge1;
let badgePath = './Badges/' + Badge + '.png'

let Badge2 = obj.config.badge2
let badge2Path = './Badges2/' + Badge2 + '.png'

  debugOut = debugOut + '\n' +'Адоптируем...'
  fontsize = 70 - (nameLength/3)*4
debugOut = debugOut + '\n' +'Адоптация:' + fontsize

//Юзер
let Money = obj.money

let Level = '0'


  Level = obj.lvl
let Themes = obj.themes



gctx.font = fontsize + 'px "Main"'
gctx.fillText(User.tag, 245, 110)
debugOut = debugOut + '\n' +'Тег: ' + User.tag

gctx.font = '40px "ArialRound"'
    gctx.strokeStyle = 'white';
    gctx.lineWidth = 1;
    gctx.fillStyle = 'black';
    gctx.textAlign = 'left'




let outputMoney = Money.toString()
Money = Math.floor(Money)


if (Money.toString().length > 3) {
outputMoney = (Math.floor(Money/10/10)/10).toString() + 'k'
}

if (Money.toString().length > 6) {
outputMoney = (Math.floor(Money/1000/10)/100).toString() + 'M'
}









gctx.fillText(outputMoney, 275, 168)
debugOut = debugOut + '\n' +'ДЕНЬГИ ВНЕСЕНЫ ' + outputMoney
debugOut = debugOut + '\n' +'Мани: ' + outputMoney
gctx.fillText(Level, 275, 218)
debugOut = debugOut + '\n' +'Мани: ' + Level
debugOut = debugOut + '\n' +'VVV AMOUNT VVV'
gctx.font = '85px "ArialRound"'
gctx.textAlign = 'right'
debugOut = debugOut + '\n' +Themes.toString()
gctx.fillText(Themes.length , 580, 208)
debugOut = debugOut + '\n' +'Мани: ' + Level

// let out = fs.createWriteStream(pingedUser + 'temp.png')
canvas.toBuffer((err, out) => { debugOut = debugOut + '\n' +'The PNG file was created.'




let theme = obj.config.theme




if (preview == true) {
  let fullarray = fs.readdirSync('Background')
  debugOut = debugOut + '\n' +'FULLARRAY: ' + fullarray.toString()
  if (args[1] != undefined) {
  if (fullarray.includes(args[1].toLowerCase()))
  {
    theme = args[1].toLowerCase()
  }else{interaction.reply('К сожалению, тема не была найдена! Загрузка обычной карточки...')}
  }
}




if (args[1] == 'hentai' ) { 
  interaction.reply ('Сори, но иди ты!')
  theme = 'default'
  }


          debugOut = debugOut + '\n' +'456'

sharp.cache(false);
let image = sharp('./Background/' + theme + '/image.png');

if (fs.existsSync('./Background/' + theme + '/GIF'))
{
  image = sharp('./Background/' + theme + '/GIF/image.gif');
}
//СТИКЕРЫ
let sticker1 = {
  "name": "undefined",
  "position": [0,0],
  "rotation": 0,
  "size": [200,200]
}
let sticker2 = {
  "name": "undefined",
  "position": [0,0],
  "rotation": 0,
  "size": [200,200]
}
let sticker3 = {
  "name": "undefined",
  "position": [0,0],
  "rotation": 0,
  "size": [200,200]
}
let sticker4 = {
  "name": "undefined",
  "position": [0,0],
  "rotation": 0,
  "size": [200,200]
}
let sticker5 = {
  "name": "undefined",
  "position": [0,0],
  "rotation": 0,
  "size": [200,200]
}

if (obj.config.sticker1 != undefined)
{
  sticker1 = obj.config.sticker1
}

if (obj.config.sticker2 != undefined)
{
  sticker2 = obj.config.sticker2
}

if (obj.config.sticker3 != undefined)
{
  sticker3 = obj.config.sticker3
}

if (obj.config.sticker4 != undefined)
{
  sticker4 = obj.config.sticker4
}

if (obj.config.sticker5 != undefined)
{
  sticker5 = obj.config.sticker5
}


if (Number(sticker1.size[1]) == 0 && Number(sticker1.size[1]) != undefined && Number(sticker1.size[1]) != NaN)
{
  sticker1.size[1] = sticker1.size[0]
}
if (Number(sticker2.size[1]) == 0 && Number(sticker2.size[1]) != undefined && Number(sticker2.size[1]) != NaN)
{
  sticker2.size[1] = sticker2.size[0]
}
if (Number(sticker3.size[1]) == 0 && Number(sticker3.size[1]) != undefined && Number(sticker3.size[1]) != NaN)
{
  sticker3.size[1] = sticker3.size[0]
}
if (Number(sticker4.size[1]) == 0 && Number(sticker4.size[1]) != undefined && Number(sticker4.size[1]) != NaN)
{
  sticker4.size[1] = sticker4.size[0]
}


if (Number(sticker5.size[1]) > 0 && Number(sticker5.size[1]) != undefined && Number(sticker5.size[1]) != NaN)
{
  sticker5.size[1] = sticker5.size[0]
}


console.log(sticker1)
sharp("./Background/" + sticker1.name + "/image.png")
.rotate(Number(sticker1.rotation), {background: "#ff00ff00"})
.resize(sticker1.size[0], sticker1.size[1])

.toBuffer().then(function(stick1)
{

console.log(sticker2.size)



  sharp("./Background/" + sticker2.name + "/image.png")
.rotate(Number(sticker2.rotation), {background: "#ff00ff00"})
.resize(sticker2.size[0], sticker2.size[1])

.toBuffer().then(function(stick2)
{





  sharp("./Background/" + sticker3.name + "/image.png")
.rotate(Number(sticker3.rotation), {background: "#ff00ff00"})
.resize(sticker3.size[0], sticker3.size[1])

.toBuffer().then(function(stick3)
{




  sharp("./Background/" + sticker4.name + "/image.png")
.rotate(Number(sticker4.rotation), {background: "#ff00ff00"})
.resize(sticker4.size[0], sticker4.size[1])

.toBuffer().then(function(stick4)
{



  console.log('321321312321213231')

  sharp("./Background/" + sticker5.name + "/image.png")
.rotate(Number(sticker5.rotation), {background: "#ff00ff00"})

.toBuffer().then(function(stick5)
{

console.log('sdasa')
sharp(body)
.resize(171, 171)
.composite([

{ input: "./Images/testcircler3.png", top: 0, left: 0, blend: 'darken'},

])


.toBuffer()
            .then(function(body2) {


sharp(body2)
.composite([{ input: "./Images/testcircler3.png", top: 0, left: 0, blend: 'xor'},])
.toBuffer()
            .then(function(body3) {

//              
sharp.cache(false);
          

          if (theme !== 'glitch')
          {
          image
            .resize(1024, 1024)
            .composite([
              { input: './Images/NEWBG.png', top: 50, left: 50},
              { input: './tasks/activeBG.png', top: 275, left: 50},
              { input: './tasks/lastActiveBG.png', top: 275, left: 554},
              { input: './tasks/voice/default.png', top: 462, left: 50},
              { input: './tasks/count.png', top: 462, left: 554},
              { input: body3, top: 55, left: 55},

              { input: './tasks/bar.png', top: 345, left: 185},
              { input: './tasks/bar.png', top: 345, left: 689},
              { input: './tasks/bar.png', top: 532, left: 185},
              { input: './tasks/bar.png', top: 532, left: 689},
              { input: activeImg, top: 286, left: 61}, //11outputBufferAct2
              { input: './tasks/lastActive/basic.png', top: 286, left: 565},
              { input: './tasks/voice/icon.png', top: 473, left: 60},
{ input: './tasks/count/icon.png', top: 473, left: 565},
              { input: badgePath, top: 60, left: 800},
              { input: badge2Path, top: 166, left: 166},
              

              {input: outputBufferAct,  top: 345, left: 185},
              {input: outputBufferAct1,  top: 345, left: 689},
              {input: outputBufferAct2,  top: 532, left: 185},
{input: outputBufferAct3,  top: 532, left: 689},
              {input: './Images/emptybar.png',  top: 230, left: 132},
              {input: grandBuffer,  top: 230, left: 132},
              
              { input: out, top: 0, left: 0},
            {input: stick1, left: sticker1.position[0], top: sticker1.position[1]},
            {input: stick2, left: sticker2.position[0], top: sticker2.position[1]},
            {input: stick3, left: sticker3.position[0], top: sticker3.position[1]},
            {input: stick4, left: sticker4.position[0], top: sticker4.position[1]},
            {input: stick5, left: sticker5.position[0], top: sticker5.position[1]}
            ])
            .toBuffer()
            .then(function(outputBuffer) {
              // ctx.replyWithPhoto({photo: outputBuffer})
              ctx.reply('DONE')

              })
              .catch(err => { interaction.reply('Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err) });
          }else{
            image
            .composite([
              { input: './Images/Borders/5.png', top: 50, left: 50,blend: 'colour-dodge'},
              { input: './tasks/activeBG.png', top: 666, left: 1960,blend: 'exclusion'},
              { input: body, top: 106, left: 99},
              { input: './tasks/bar.png', top: 345, left: 185,blend: 'colour-dodge'},
              { input: activeImg, top: 286, left: 61}, //11
              { input: "./Images/circler.png", top: 76, left: 76},
              {input: outputBufferAct,  top: 345, left: 185, blend: 'saturate'},
              // {input: grandBuffer, top: 10, left: 10},
              { input: out, top: 0, left: 0, blend: 'dest-over'}])
            .toBuffer()
            .then(function(outputBuffer) {
              ctx.replyWithPhoto({photo: outputBuffer})
              })
              .catch(err => { interaction.reply('Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err) });
          }

          })
              .catch(err => { interaction.reply('Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err) });
  

            })
            .catch(err => { interaction.reply('Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err) });
         
          
          })
              .catch(err => { interaction.reply('1Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err) });
            })
            .catch(err => { interaction.reply('2Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err) });
          })
          .catch(err => { interaction.reply('3Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err) });
        })
        .catch(err => { interaction.reply('4Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err) });
      })
      .catch(err => { 
        console.log(err)
        interaction.reply('5Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err) });

        });      




        })
       
            })
 .catch(err => { interaction.reply('Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err) });

            })
            .catch(err => { interaction.reply('Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err) });
 })
            .catch(err => { interaction.reply('Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err) });
 })
 .catch(err => { interaction.reply('Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err) });

  })
  .catch(err => { interaction.reply('Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err) });


  

        // },error => {interaction.reply('Хей! Что то пошло не так! Убедись, что ты указал верный ID или упомянул существующего пользователя!\nКод ошибки: ' + error)})
  }

   
  }
  



  }

module.exports = { cardCommand }