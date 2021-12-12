function cardCommand(fs, msg, ctx, sharp, canvas, client) {
  {
    if (fs.existsSync('./data/UserData/' + msg.member.id))
   {

    let preview = false
    if (msg.content.toLowerCase().startsWith('/preview')) { preview = true}
    if (msg.content.toLowerCase().startsWith('/card')) { preview = false}


        const args = msg.content.slice(`/био`).split(/ +/);
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




    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.fillStyle = 'black';


    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.textAlign = 'left'

let fontsize = 70
let nameLength = User.tag.length
var request = require('request').defaults({ encoding: null });
 request.get(User.avatarURL({ format: "png"}, {size: 128}), function (err, res, body) {


  console.log('Адоптируем...')
  fontsize = 70 - (nameLength/3)*4
console.log('Адоптация:' + fontsize)

//Юзер
let Money = fs.readFileSync('./data/UserData/' + msg.author.id + '/integers/money', "utf8");
let Level = fs.readFileSync('./data/UserData/' + msg.author.id + '/integers/lvl', "utf8");
let Themes = fs.readFileSync('./data/UserData/' + msg.author.id + '/collections/userThemes', "utf8");




let ThemeAmount = Themes.split('\n')
ctx.font = fontsize + 'px "Main"'
ctx.fillText(User.tag, 50, 50)
console.log('Тег: ' + User.tag)
ctx.fillText(Money, 400, 130)
console.log('ДЕНЬГИ ВНЕСЕНЫ ' + Money)
console.log('Мани: ' + Money)
ctx.fillText(Level, 250, 130)
console.log('Мани: ' + Level)
console.log('VVV AMOUNT VVV')
console.log(ThemeAmount)
ctx.fillText(ThemeAmount.length , 100, 130)
console.log('Мани: ' + Level)

// let out = fs.createWriteStream(pingedUser + 'temp.png')
canvas.toBuffer((err, out) => { console.log('The PNG file was created.') 




let theme = fs.readFileSync('./data/UserData/' + msg.author.id + '/config/theme', "utf8");

if (preview == true) {
  let fullarray = fs.readdirSync('Background')
  console.log('FULLARRAY: ' + fullarray)
  if (fullarray.includes(args[1].toLowerCase()))
  {
    theme = args[1].toLowerCase()
  }else{msg.reply('К сожалению, тема не была найдена! Загрузка обычной карточки...')}
}
          console.log('456')

sharp.cache(false);
let image = sharp('./Background/' + theme + '/image.png');

sharp.cache(false);
          
          image
            .resize(1024, 1024)
            .composite([
              { input: './Images/Borders/5.png', top: 50, left: 50},
              { input: body, top: 76, left: 76},
              { input: "./Images/circler.png", top: 76, left: 76},
              { input: out, top: 74, left: 170}])
            .toBuffer()
            .then(function(outputBuffer) {
              console.log("error: ", err)
              msg.channel.send({files: [outputBuffer]});
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              // fs.unlinkSync(pingedUser + "temp.png")
              });




})})




        },error => {msg.reply('Хей! Что то пошло не так! Убедись, что ты указал верный ID или упомянул существующего пользователя!\nКод ошибки: ' + error)})
  }
  }
}

module.exports = { cardCommand }