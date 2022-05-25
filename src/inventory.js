async function invCommand(fs, msg, ctx, sharp, canvas, client, pg, iniciatorID, pingedUser,  MessageActionRow, MessageButton, isExist, getData) 
{
                    if (await isExist(iniciatorID) == true) 
      {



console.log('АЙДИ: ' + pingedUser)
   if (await isExist(pingedUser) == true)
   { 
     // msg.reply('Вариант 5')
     }else{
      // msg.reply('Вариант 6' + pingedUser)
     pingedUser = iniciatorID

   }
      //  msg.reply(pingedUser + '|' + pg)
    client.users.fetch(pingedUser).then(async User => 
  {
                if (iniciatorID != '899380887282675743') {
        msg.reply('Загружаем...').catch(err => { }); //, components: [row] 
      } else {
        msg.edit('Загружаем...').catch(err => { });
      }

    let obj = await getData(pingedUser)

    ctx.font = '50px "Main"'
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.fillStyle = 'white';
    

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.textAlign = 'center'


    console.log('________________' 
    + pingedUser)
    console.log(pg)
    let UserHave = obj.themes

    

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

let activateNext = false
let activatePrev = false;
let activateBegin = false;
let activateEnd = false;


let previous = new MessageButton()
let next = new MessageButton()

console.log("INV " + iniciatorID + ' ' + (Number(pg)-1).toString() + ' ' + pingedUser)
if (Number(pg) <= 2) { activateBegin = true }
if (Number(pg) == 1  ) { previous
          .setCustomId("INV " + iniciatorID + ' ' + (Number(pg)-1).toString() + ' ' + pingedUser + ' PREV1')
          .setDisabled(true)
          .setLabel('Назад')
          .setStyle('PRIMARY'); }else
          {

            previous
          .setCustomId("INV " + iniciatorID + ' ' + (Number(pg)-1).toString() + ' ' + pingedUser + ' PREV2')
          .setDisabled(false)
          .setLabel('Назад')
          .setStyle('PRIMARY');

          }
if (Number(pg) >= (Math.floor(UserHave.length/4)+1) - 2) { activateEnd = true }
if (Number(pg) > (Math.floor(UserHave.length/4)+1) - 1) 
{
next
          .setCustomId("INV " + iniciatorID + ' ' + (Number(pg)+1).toString() + ' ' + pingedUser + ' NEXT')
          .setDisabled(true)
          .setLabel('Вперёд')
          .setStyle('PRIMARY');
}else{
  next
          .setCustomId("INV " + iniciatorID + ' ' + (Number(pg)+1).toString() + ' ' + pingedUser + ' NEXT')
          .setDisabled(false)
          .setLabel('Вперёд')
          .setStyle('PRIMARY');
}







let begin = new MessageButton()
          .setCustomId("INV " + iniciatorID + ' 1 ' + pingedUser + ' BEGIN')
          .setDisabled(activateBegin)
          .setLabel('В начало')
          .setStyle('DANGER');
let end = new MessageButton()
          .setCustomId("INV " + iniciatorID + ' ' + (Math.floor(UserHave.length/4)+1) + ' ' + pingedUser + ' END')
          .setDisabled(activateEnd)
          .setLabel('В конец (' + (Math.floor(UserHave.length/4)+1) + ')')
          .setStyle('DANGER');








const row = new MessageActionRow()
          .addComponents(begin, previous, next, end);

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
              console.log('ENDED')
                          if (iniciatorID != '899380887282675743') {

                            if (msg.applicationId
== null || msg.applicationId == undefined)
                            {
              console.log('123')
              msg.reply({ files: [outputBuffer], components: [row] }).catch(err => { console.log(err)}) 
                            }else{
                              
              msg.channel.send({ files: [outputBuffer], components: [row] }).catch(err => { console.log("АШЫПКА: " + err) });
                            }
            } else {
              console.log('456')

              console.log('EEEEEEEEEEEEEEEEEEEEEEE________________')
              msg.removeAttachments()
              msg.edit({ files: [outputBuffer], components: [row] }).catch(err => { console.log("АШЫПКА: " + err) });

              console.log('789')
            }
              })
              .catch(err => { msg.channel.send('Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err).catch(err => {console.log(err)}) });
        });
    })
  }
}

module.exports = { invCommand }