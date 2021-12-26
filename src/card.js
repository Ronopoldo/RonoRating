function cardCommand(fs, msg, ctx, sharp, canvas, client) {
  {
    if (fs.existsSync('./data/UserData/' + msg.member.id))
   {




        const args = msg.content.slice(`/био`).split(/ +/);

            let preview = false
    if (msg.content.toLowerCase().startsWith('/preview')) { preview = true}

    
    if (msg.content.toLowerCase().startsWith('/card')) { preview = false}
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
      msg.reply('Слишком много аргументов! После команды Вам следует написать лишь один аргумент - упомянание пользователя, его id или вообще не использовать аргументы.\nНе смотря на это, мы всё равно попробуем распознать упоминание')
    }


   if (pingedUser.includes('<@'))
   {
     pingedUser = pingedUser.replace("<@",'')
     pingedUser = pingedUser.replace("!",'')
     pingedUser = pingedUser.replace(">",'')
   }else {}

   if (fs.existsSync('./data/UserData/' + pingedUser))
   { }else{pingedUser = msg.member.id}
    client.users.fetch(pingedUser).then(User => 
  {

    msg.channel.send('Загружаем...')


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
             try{lastLvl  = fs.readFileSync('./data/UserData/' + pingedUser + '/tasks/activity', "utf8")}catch(err){}

          const currentXP = Math.floor(fs.readFileSync('./data/UserData/' + pingedUser + '/integers/exp', "utf8"))
          const levelNeed = fs.readFileSync('./data/UserData/' + pingedUser + '/integers/lvl', "utf8");
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

        // msg.reply(currentXP.toString() + '/' + NeededXP.toString())
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
      sharp('./tasks/fullBar.png')
        .extract({ left: 0, top: 0, width: actwidth, height: 30 })
      .toBuffer()
            .then(function(outputBufferAct) {

//Актив дни подряд
let lastActiveLvl  = 0
let lastActive = '0 0 0'
let InputMassive = ['0', '0', '0']
try{
lastActiveLvl = Number(fs.readFileSync('./data/UserData/' + pingedUser + '/tasks/lastActve', "utf8"));
lastActive = fs.readFileSync('./data/UserData/' + pingedUser + '/badges/lastActve', "utf8");
InputMassive = lastActive.split(' ', 3);
}catch(err){
  lastActiveLvl = 0
  InputMassive = ['0','0','0']
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
        ctx.fillText(InputMassive[2], 689, 400)
        ctx.strokeText(InputMassive[2], 689, 400)

ctx.textAlign = 'center'
        ctx.fillText(lastActiveLvl + ' уровень', 827, 400)


        ctx.font = '33px "ArialRound"'

    ctx.strokeStyle = 'white';
ctx.textAlign = 'left'
        ctx.fillText('Повседневность', 689, 320)
        ctx.strokeText('Повседневность', 689, 320)

sharp('./tasks/lastActiveBar.png')
        .extract({ left: 0, top: 0, width: Math.floor(InputMassive[2] / activeDays[lastActiveLvl + 1] * 269 + 1 ), height: 30 })
      .toBuffer()
            .then(function(outputBufferAct1) {















    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.fillStyle = 'black';

ctx.font = '50px "Main"'
    ctx.textAlign = 'left'

fontsize = 70
let nameLength = User.tag.length
var request = require('request').defaults({ encoding: null });
 request.get(User.displayAvatarURL({ format: "png"}, {size: 128}), function (err, res, body) {

image = sharp(body)
  .resize(128,128)
  .toBuffer()
.then(function(body1) {
              console.log("error: ", err)
 

  console.log('Адоптируем...')
  fontsize = 70 - (nameLength/3)*4
console.log('Адоптация:' + fontsize)

//Юзер
let Money = fs.readFileSync('./data/UserData/' + pingedUser + '/integers/money', "utf8");
let Level = fs.readFileSync('./data/UserData/' + pingedUser + '/integers/lvl', "utf8");
let Themes = fs.readdirSync('./data/UserData/' + pingedUser + '/themes', "utf8");



ctx.font = fontsize + 'px "Main"'
ctx.fillText(User.tag, 220, 124)
console.log('Тег: ' + User.tag)
ctx.fillText(Money, 270, 208)
console.log('ДЕНЬГИ ВНЕСЕНЫ ' + Money)
console.log('Мани: ' + Money)
ctx.fillText(Level, 430, 208)
console.log('Мани: ' + Level)
console.log('VVV AMOUNT VVV')
console.log(Themes)
ctx.fillText(Themes.length , 580, 208)
console.log('Мани: ' + Level)

// let out = fs.createWriteStream(pingedUser + 'temp.png')
canvas.toBuffer((err, out) => { console.log('The PNG file was created.') 




let theme = fs.readFileSync('./data/UserData/' + pingedUser + '/config/theme', "utf8");




if (preview == true) {
  let fullarray = fs.readdirSync('Background')
  console.log('FULLARRAY: ' + fullarray)
  if (args[1] != undefined) {
  if (fullarray.includes(args[1].toLowerCase()))
  {
    theme = args[1].toLowerCase()
  }else{msg.reply('К сожалению, тема не была найдена! Загрузка обычной карточки...')}
  }
}




if (args[1] == 'hentai' ) { 
  msg.reply ('Сори, но иди ты!')
  theme = 'default'
  }


          console.log('456')

sharp.cache(false);
let image = sharp('./Background/' + theme + '/image.png');

if (fs.existsSync('./Background/' + theme + '/GIF'))
{
  image = sharp('./Background/' + theme + '/GIF/image.gif');
}


//              
sharp.cache(false);
          

          if (theme !== 'glitch')
          {
          image
            .resize(1024, 1024)
            .composite([
              { input: './Images/Borders/5.png', top: 50, left: 50},
              { input: './tasks/activeBG.png', top: 275, left: 50},
              { input: './tasks/lastActiveBG.png', top: 275, left: 554},
              { input: body1, top: 76, left: 76},
              { input: './tasks/bar.png', top: 345, left: 185},
              { input: activeImg, top: 286, left: 61}, //11
              { input: './tasks/lastActive/basic.png', top: 286, left: 565},
              { input: "./Images/circler.png", top: 76, left: 76},
              {input: outputBufferAct,  top: 345, left: 185},
              {input: outputBufferAct1,  top: 345, left: 689},
              { input: out, top: 0, left: 0}])
            .toBuffer()
            .then(function(outputBuffer) {
              console.log("error: ", err)
              msg.channel.send({files: [outputBuffer]});
              ctx.clearRect(0, 0, canvas.width, canvas.height)
              // fs.unlinkSync(pingedUser + "temp.png")
              })
              .catch(err => { msg.reply('Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err) });
          }else{
            image
            .composite([
              { input: './Images/Borders/5.png', top: 50, left: 50},
              { input: './tasks/activeBG.png', top: 666, left: 50},
              { input: body1, top: 76, left: 76},
              { input: './tasks/bar.png', top: 345, left: 185},
              { input: activeImg, top: 286, left: 61}, //11
              { input: "./Images/circler.png", top: 76, left: 76},
              {input: outputBufferAct,  top: 345, left: 185},
              { input: out, top: 0, left: 0}])
            .toBuffer()
            .then(function(outputBuffer) {
              console.log("error: ", err)
              msg.channel.send({files: [outputBuffer]});
              ctx.clearRect(0, 0, canvas.width, canvas.height)
              // fs.unlinkSync(pingedUser + "temp.png")
              })
              .catch(err => { msg.reply('Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err) });
          }
        });      



})
   .catch(err => { msg.reply('Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err) });
        });
 
 
 })

  })




        },error => {msg.reply('Хей! Что то пошло не так! Убедись, что ты указал верный ID или упомянул существующего пользователя!\nКод ошибки: ' + error)})
  }

   
  }
  }

module.exports = { cardCommand }