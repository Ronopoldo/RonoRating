function invCommand(fs, msg, ctx, sharp, canvas, client) 
{
                    if (fs.existsSync('./data/UserData/' + msg.author.id + '/integers/exp')) 
      {

    const args = msg.content.slice(`/био`).split(/ +/);
      pingedUser = args[1] 
      if (args[1] == undefined) { pingedUser = msg.member.id}
      pingedUser = pingedUser.replace("<@",'')
      pingedUser = pingedUser.replace("!",'')
      pingedUser = pingedUser.replace(">",'')

    let pg = 1
    console.log('Unresolved Num: ' + pingedUser)
    if (Number(pingedUser) != NaN){ 
   }else {pingedUser = msg.member.id}
  if (args[2] != undefined) { pg = args[2] } else
  {
    if ((args[1] != undefined) && (args[1].length > 5)) 
    {
      // msg.reply('Вариант 1')
      pg = 1
      pingedUser = args[1]
    }else
    {
            // msg.reply('Вариант 2')
     pg = 1
     pingedUser =  msg.member.id
    }


        if ((args[1] != undefined) && (args[1].length < 5)) 
    {
            // msg.reply('Вариант 3')
      pg = args[1]
      pingedUser = msg.member.id
    }else
    {
            // msg.reply('Вариант 4')
     pg = 1
    }
  }
        pingedUser = pingedUser.replace("<@",'')
      pingedUser = pingedUser.replace("!",'')
      pingedUser = pingedUser.replace(">",'')

console.log('АЙДИ: ' + pingedUser)
   if (fs.existsSync('./data/UserData/' + pingedUser))
   { 
     // msg.reply('Вариант 5')
     }else{
      // msg.reply('Вариант 6' + pingedUser)
     pingedUser = msg.member.id

   }
      //  msg.reply(pingedUser + '|' + pg)
    client.users.fetch(pingedUser).then(User => 
  {




    ctx.font = '50px "Main"'
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.fillStyle = 'white';


    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.textAlign = 'center'


    console.log(pingedUser)
    console.log(args[5])
    let UserHave = fs.readdirSync('./data/UserData/' + msg.author.id + '/themes')

  console.log('ARRAY: ' + UserHave)
let totalArray = ['empty','empty','empty','empty']
let totalName = ['.','.','.','.']


    try {totalArray[0] = (UserHave[4*pg-4])}catch{}
    try {totalArray[1] = (UserHave[4*pg-3])}catch{}
    try {totalArray[2] = (UserHave[4*pg-2])}catch{}
    try {totalArray[3] = (UserHave[4*pg-1])}catch{}


    try {
      if (fs.existsSync('./Background/' + totalArray[0]))
      {
        console.log('./Background/' + totalArray[0] + '/displayName')
      totalName[0] = fs.readFileSync('./Background/' + totalArray[0] + '/displayName', "utf8")}}catch(err){console.log(err)}
    try {
      if (fs.existsSync('./Background/' + totalArray[1]))
      {
        console.log('./Background/' + totalArray[1] + '/displayName')
      totalName[1] = fs.readFileSync('./Background/' + totalArray[1] + '/displayName', "utf8")}}catch(err){}
    try {
      if (fs.existsSync('./Background/' + totalArray[2]))
      {
        console.log('./Background/' + totalArray[2] + '/displayName')
      totalName[2] = fs.readFileSync('./Background/' + totalArray[2] + '/displayName', "utf8")}}catch(err){}
    try {
      if (fs.existsSync('./Background/' + totalArray[3]))
      {
        console.log('./Background/' + totalArray[3] + '/displayName')
      totalName[3] = fs.readFileSync('./Background/' + totalArray[3] + '/displayName', "utf8")}}catch(err){}



      console.log('eeeeee:' + totalName)

try{
if (totalArray[0].toString() != 'undefined')
{
ctx.fillText(totalArray[0], 290, 520)
ctx.fillText(totalName[0], 290, 170)
}
}catch{}

try{
if (totalArray[1].toString() != 'undefined')
{
  ctx.fillText(totalArray[1], 734, 520)
  ctx.fillText(totalName[1], 734, 170)
}
}catch{}


try{
if (totalArray[2].toString() != 'undefined')
{
  ctx.fillText(totalArray[2], 290, 975)
  ctx.fillText(totalName[2], 290, 625)
}
}catch{}


try{
if (totalArray[3].toString() != 'undefined')
{
  ctx.fillText(totalArray[3], 734, 975)
  ctx.fillText(totalName[3], 734, 625)
}
}catch{}




try{
if (totalArray[0].toString() != 'undefined')
{
ctx.strokeText(totalArray[0], 290, 520)
ctx.strokeText(totalName[0], 290, 170)
}
}catch{}


try{
if (totalArray[1].toString() != 'undefined')
{
  ctx.strokeText(totalArray[1], 734, 520)
  ctx.strokeText(totalName[1], 734, 170)
}
}catch{}


try{
if (totalArray[2].toString() != 'undefined')
{
  ctx.strokeText(totalArray[2], 290, 975)
  ctx.strokeText(totalName[2], 290, 625)
}
}catch{}


try{
if (totalArray[3].toString() != 'undefined')
{
  ctx.strokeText(totalArray[3], 734, 975)
  ctx.strokeText(totalName[3], 734, 625)
}
}catch{}


canvas.toBuffer((err, out) => { console.log('The PNG file was created.') 


console.log('0]./Background/' + totalArray[0] + '/icon.png')
console.log('1]./Background/' + totalArray[1] + '/icon.png')
console.log('2]./Background/' + totalArray[2] + '/icon.png')
console.log('3]./Background/' + totalArray[3] + '/icon.png')
sharp.cache(false);
            sharp('./Images/inventory.png')
            .resize(1024, 1024)
            .composite([
              { input: './Background/' + totalArray[0] + '/icon.png', top: 130, left: 85},
               {input: './Background/' + totalArray[1] + '/icon.png', top: 130, left: 539},
               { input: './Background/' + totalArray[2] + '/icon.png', top: 584, left: 85},
               {input: './Background/' + totalArray[3] + '/icon.png', top: 584, left: 539},
               
              { input: out, top: 0, left: 0}
              ])
            .toBuffer()
            .then(function(outputBuffer) {
              console.log(err)
              
              msg.channel.send({files: [outputBuffer]})
              })
              .catch(err => { msg.reply('Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err) });
        });
    })
  }
}

module.exports = { invCommand }