async function cardCommand(fs, msg, ctx, sharp, canvas, client, iniciator, interaction, isExist, getData, debug) {
  let debugOut = ''
// 'use strict';
  {
    const Color = require('color');
    if (isExist('iniciator'))
   {
interaction.reply('Загружаем...')
     

let pingedUser = iniciator


        const args = msg.slice(`/био`).split(/ +/);

            let preview = false
    if (msg.toLowerCase().startsWith('/preview')) { preview = true}

    
    if (msg.toLowerCase().startsWith('/card')) { preview = false}
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
      debugOut = debugOut + '\n' +pingedUser
    }
    if (args.length == 1)
    {
      debugOut = debugOut + '\n' +'прошло'
      pingedUser = '<@' + iniciator +">"
    }

    if (args.length > 2)
    {    
      interaction.channel.send('Слишком много аргументов! После команды Вам следует написать лишь один аргумент - упомянание пользователя, его id или вообще не использовать аргументы.\nНе смотря на это, мы всё равно попробуем распознать упоминание')
    }


   if (pingedUser.includes('<@'))
   {
     pingedUser = pingedUser.replace("<@",'')
     pingedUser = pingedUser.replace("!",'')
     pingedUser = pingedUser.replace(">",'')
   }else {}

   if (isExist(pingedUser))
   { }else{pingedUser = iniciator}

     debugOut = debugOut + '\n' +'ПОПАааа'

     let obj = await getData(pingedUser)
debugOut = debugOut + '\n' +obj
    client.users.fetch(pingedUser).then(User => 
  {

   


//АЧВИКИ
ctx.font = '30px "ArialRound"'

    ctx.strokeStyle = 'white';
    ctx.lineWidth = 1;
    ctx.fillStyle = 'black';


    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.textAlign = 'right'

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

        // interaction.channel.send(currentXP.toString() + '/' + NeededXP.toString())
        ctx.fillText(NeededXP, 458, 400)
        ctx.strokeText(NeededXP, 458, 400)

ctx.textAlign = 'left'
        ctx.fillText(currentXP, 175, 400)
        ctx.strokeText(currentXP, 175, 400)

ctx.textAlign = 'center'
        ctx.fillText(lastLvl + ' уровень', 323, 400)



        ctx.font = '47px "ArialRound"'

    ctx.strokeStyle = 'white';
ctx.textAlign = 'left'
        ctx.fillText('Активность', 185, 330)
        ctx.strokeText('Активность', 185, 330)

        let activeImg = './Images/Blank.png'
        if (-1<lastLvl<9999)
        {
          activeImg = './tasks/activity/basic.png'
        }




        let actwidth = Math.floor(270 * (currentXP / NeededXP) + 1)
    debugOut = debugOut + '\n' +'111'
             if (actwidth >= 270) {actwidth = 269}
      sharp('./tasks/fullBar.png')
 
        .extract({ left: 0, top: 0, width: actwidth, height: 30 })
      .toBuffer()
            .then(function(outputBufferAct) {

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
let activeDays = [0,2,4,7,10,14,18,21,25,31,45,60,90]

ctx.font = '30px "ArialRound"'
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 1;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'right'

let fontsize = 70


        ctx.fillText(activeDays[lastActiveLvl + 1], 962, 400)
        ctx.strokeText(activeDays[lastActiveLvl + 1], 962, 400)

ctx.textAlign = 'left'
        ctx.fillText(InputMassive[1], 689, 400)
        ctx.strokeText(InputMassive[1], 689, 400)

ctx.textAlign = 'center'
        ctx.fillText(lastActiveLvl + ' уровень', 827, 400)


        ctx.font = '33px "ArialRound"'

    ctx.strokeStyle = 'white';
ctx.textAlign = 'left'
        ctx.fillText('Повседневность', 689, 320)
        ctx.strokeText('Повседневность', 689, 320)
debugOut = debugOut + '\n' +'222'
sharp('./tasks/lastActiveBar.png')
        .extract({ left: 0, top: 0, width: Math.floor(InputMassive[1] / activeDays[lastActiveLvl + 1] * 269 + 1 ), height: 30 })
      .toBuffer()
            .then(function(outputBufferAct1) {



///////////////ГС АКТИВ
let currentLvl = obj.active.voice.lvl
        let userActivity = obj.active.voice.exp

        
let lvlArray = [0.5,1,1.5,2,3,4,5,10,15,20,25,30,45,50,75,90,120,150,180,220,280,320,390,460,500,600,750,800,900,1000]

      let rewards = [50,100,300,400,800,1200,3000, 7000, 7000, 8500, 9000, 9000,9000,10000,11000,15000,16000,17000,18000,19000,20000,25000,25000,25000,25000,25000,25000,40000,40000,250000]


      ctx.font = '30px "ArialRound"'
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 1;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'right'

let fontsize = 70
if (currentLvl > 29) { currentLvl = 29 }

        ctx.fillText(lvlArray[currentLvl], 458, 587)
        ctx.strokeText(lvlArray[currentLvl], 458, 587)

ctx.textAlign = 'left'
        ctx.fillText((userActivity/60).toFixed(1), 175, 587)
        ctx.strokeText((userActivity/60).toFixed(1), 175, 587)

ctx.textAlign = 'center'
        ctx.fillText(currentLvl + ' уровень', 323, 587)


        ctx.font = '33px "ArialRound"'



debugOut = debugOut + '\n' +'SECRET NUM: ' + Math.floor(269*((userActivity/60).toFixed(1))/lvlArray[currentLvl]+1)

    ctx.strokeStyle = 'white';
ctx.textAlign = 'left'
        ctx.fillText('Голосовой актив', 185, 507)
        ctx.strokeText('Голосовой актив', 185, 507)
        
        let vwidth = Math.floor(269*((userActivity/60).toFixed(1))/lvlArray[currentLvl]+1)

if ((vwidth >= 270) || (vwidth<1)) {vwidth = 269}
debugOut = debugOut + '\n' +'333'

sharp('./tasks/voiceBar.png')


      .extract({ left: 0, top: 0, width: vwidth, height: 30 })
      .toBuffer()
            .then(function(outputBufferAct2) {


//////////////////////СЧЁТ

let countLvl = obj.active.count.lvl
let count = Math.floor(obj.active.text.exp)
let lvlUP = [1, 5, 10, 15, 20, 40, 60, 80, 100, 200, 300, 500, 750]
      ctx.font = '30px "ArialRound"'
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 1;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'right'


if (countLvl > 13) { countLvl = 13 }

        ctx.fillText(lvlUP[countLvl], 962, 587)
        ctx.strokeText(lvlUP[countLvl], 962, 587)

ctx.textAlign = 'left'
        ctx.fillText(count, 689, 587)
        ctx.strokeText(count,689, 587)

ctx.textAlign = 'center'
        ctx.fillText(countLvl + ' уровень', 827, 587)


        ctx.font = '33px "ArialRound"'

        let countwidth = Math.floor(269*((count-lvlUP[countLvl-1]).toFixed(1))/lvlUP[countLvl]+1)

if ((countwidth >= 270) || (countwidth<1)) {countwidth = 269}
              if (isNaN(countwidth)) {countwidth = 1}

              

    ctx.strokeStyle = 'white';
ctx.textAlign = 'left'
              ctx.font = '50px "ArialRound"'
        ctx.fillText('Счёт', 689,515)
        ctx.strokeText('Счёт', 689, 515)

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
      ctx.font = '20px "ArialRound"'
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 1;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'left'

let fontsize = 45


let grandPath = './Images/Blank.png'
let barSize = 1

  let currentGlobalLvl = obj.lvl
  let currentGlobalExp = obj.exp
  grandPath = './Images/grandbar.png'
  barSize = 
  ctx.fillText(Math.floor((Number(currentGlobalExp)).toString()), 132,255)

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









    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.fillStyle = 'black';

ctx.font = '50px "Main"'
    ctx.textAlign = 'left'

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



ctx.font = fontsize + 'px "Main"'
ctx.fillText(User.tag, 245, 110)
debugOut = debugOut + '\n' +'Тег: ' + User.tag

ctx.font = '40px "ArialRound"'
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 1;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'left'




let outputMoney = Money.toString()
Money = Math.floor(Money)


if (Money.toString().length > 3) {
outputMoney = (Math.floor(Money/10/10)/10).toString() + 'k'
}

if (Money.toString().length > 6) {
outputMoney = (Math.floor(Money/1000/10)/100).toString() + 'M'
}









ctx.fillText(outputMoney, 275, 168)
debugOut = debugOut + '\n' +'ДЕНЬГИ ВНЕСЕНЫ ' + outputMoney
debugOut = debugOut + '\n' +'Мани: ' + outputMoney
ctx.fillText(Level, 275, 218)
debugOut = debugOut + '\n' +'Мани: ' + Level
debugOut = debugOut + '\n' +'VVV AMOUNT VVV'
ctx.font = '85px "ArialRound"'
ctx.textAlign = 'right'
debugOut = debugOut + '\n' +Themes.toString()
ctx.fillText(Themes.length , 580, 208)
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
  }else{interaction.channel.send('К сожалению, тема не была найдена! Загрузка обычной карточки...')}
  }
}




if (args[1] == 'hentai' ) { 
  interaction.channel.send ('Сори, но иди ты!')
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
  sticker1 = obj.config.sticker2
}

if (obj.config.sticker3 != undefined)
{
  sticker1 = obj.config.sticker3
}

if (obj.config.sticker4 != undefined)
{
  sticker1 = obj.config.sticker4
}

if (obj.config.sticker5 != undefined)
{
  sticker1 = obj.config.sticker5
}

console.log(sticker1)
sharp("./Background/" + sticker1.name + "/image.png")
.rotate(Number(sticker1.rotation), {background: "#ff00ff00"})
.resize(sticker1.size[0], sticker1.size[1])

.toBuffer().then(function(stick1)
{


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
            {input: stick1, left: sticker1.position[0], top: sticker1.position[1]}
            
            ])
            .toBuffer()
            .then(function(outputBuffer) {
              debugOut = debugOut + '\n' +"error: ", err
              if (interaction.user != undefined)
              {
              interaction.editReply({files: [outputBuffer]}).catch(err => {});
              ctx.clearRect(0, 0, canvas.width, canvas.height)
              try{
                debug(interaction, debugOut, obj)
              }catch(err){}
              }else
              {
                interaction.channel.send({files: [outputBuffer]}).catch(err => {});;
                try{
                  debug(interaction, debugOut, obj)
                }catch(err){}
              ctx.clearRect(0, 0, canvas.width, canvas.height)
              }
              // fs.unlinkSync(pingedUser + "temp.png")

outputBuffer = '0'
outputBufferAct = null
outputBufferAct1 = null
  outputBufferAct2 = null
              outputBufferAct3 = null
              grandBuffer = null
              out = null
debugOut = debugOut + '\n' +outputBuffer.toString()

// var variables = ""
// for (var name in this)
// {
//     variables += name + "\n";
// eval('debugOut = debugOut + '\n' +' + name + ')')
// }
// debugOut = debugOut + '\n' +variables)


              })
              .catch(err => { interaction.channel.send('Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err) });
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
              debugOut = debugOut + '\n' +"error: ", err
                            if (interaction.user != undefined)
              {
              interaction.editReply({files: [outputBuffer]}).catch(err => {});
              ctx.clearRect(0, 0, canvas.width, canvas.height)
              try{
                debug(interaction, debugOut, obj)
              }catch(err){}
              }else
              {
                interaction.channel.send({files: [outputBuffer]}).catch(err => {});;
                try{
                  debug(interaction, debugOut, obj)
                }catch(err){}
              ctx.clearRect(0, 0, canvas.width, canvas.height)
              }
              ctx.clearRect(0, 0, canvas.width, canvas.height)
              // fs.unlinkSync(pingedUser + "temp.png")
              })
              .catch(err => { interaction.channel.send('Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err) });
          }

          })
              .catch(err => { interaction.channel.send('Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err) });
  

            })
            .catch(err => { interaction.channel.send('Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err) });
         
          
          })
              .catch(err => { interaction.channel.send('Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err) });
              
        });      




        })
       
            })
 .catch(err => { interaction.channel.send('Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err) });

            })
            .catch(err => { interaction.channel.send('Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err) });
 })
            .catch(err => { interaction.channel.send('Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err) });
 })
 .catch(err => { interaction.channel.send('Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err) });

  })
  .catch(err => { interaction.channel.send('Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err) });


  

        },error => {interaction.channel.send('Хей! Что то пошло не так! Убедись, что ты указал верный ID или упомянул существующего пользователя!\nКод ошибки: ' + error)})
  }

   
  }
  



  }

module.exports = { cardCommand }