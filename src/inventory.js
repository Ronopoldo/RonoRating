const { debug } = require("console");

async function invCommand(fs, msg, ctx, sharp, canvas, client, pg, iniciatorID, isExist, getData, debug, bot) 
{
  console.log('111')
                    if (await isExist(iniciatorID) == true) 
      {
const args = msg.message.text.slice(`/био`).split(/ +/);
        let pingedUser = iniciatorID
        if (isNaN(Number(pg)) == true)
        {
          pg = 1
        }
        console.log('112')
let  debugOut = ''
 debugOut = debugOut + '\n' + 'АЙДИ: ' + pingedUser
   if (await isExist(pingedUser) == true)
   { 
     // msg.reply('Вариант 5')
     }else{
      // msg.reply('Вариант 6' + pingedUser)
     pingedUser = iniciatorID

   }
        console.log('113')
      //  msg.reply(pingedUser + '|' + pg)
    //client.users.fetch(pingedUser).then(async User => 
  //{

    let User = await bot.telegram.getChat(pingedUser)
                if (iniciatorID != '899380887282675743') {
        msg.reply('Загружаем...').catch(err => { }); //, components: [row] 
      } else {
        msg.edit('Загружаем...').catch(err => { });
      }
console.log(1)
    let obj = await getData(pingedUser)
console.log(2)
    ctx.font = '50px "Main"'
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.fillStyle = 'white';
    

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.textAlign = 'center'


    debugOut = debugOut + '\n' + '________________' 
    + pingedUser
    debugOut = debugOut + '\n' + pg
    let UserHave = obj.themes.concat(obj.stickers)

    

    debugOut = debugOut + '\n' + 'ARRAY: ' + UserHave
let totalArray = ['empty','empty','empty','empty']
let totalName = ['.','.','.','.']
let totalType = []


    try {totalArray[0] = (UserHave[4*pg-4])}catch{}
    try {totalArray[1] = (UserHave[4*pg-3])}catch{}
    try {totalArray[2] = (UserHave[4*pg-2])}catch{}
    try {totalArray[3] = (UserHave[4*pg-1])}catch{}



    try {
      if (fs.existsSync('./Background/' + totalArray[0]))
      {
        debugOut = debugOut + '\n' + './Background/' + totalArray[0] + '/displayName'
      totalName[0] = fs.readFileSync('./Background/' + totalArray[0] + '/displayName', "utf8")
      totalType[0] = fs.readFileSync('./Background/' + totalArray[0] + '/type', "utf8")
    }
    }catch(err){debugOut = debugOut + '\n' + err}
    try {
      if (fs.existsSync('./Background/' + totalArray[1]))
      {
        debugOut = debugOut + '\n' + './Background/' + totalArray[1] + '/displayName'
      totalName[1] = fs.readFileSync('./Background/' + totalArray[1] + '/displayName', "utf8")
      totalType[1] = fs.readFileSync('./Background/' + totalArray[1] + '/type', "utf8")
    }}catch(err){}
    try {
      if (fs.existsSync('./Background/' + totalArray[2]))
      {
        debugOut = debugOut + '\n' + './Background/' + totalArray[2] + '/displayName'
      totalName[2] = fs.readFileSync('./Background/' + totalArray[2] + '/displayName', "utf8")
      totalType[2] = fs.readFileSync('./Background/' + totalArray[2] + '/type', "utf8")
    }}catch(err){}
    try {
      if (fs.existsSync('./Background/' + totalArray[3]))
      {
        debugOut = debugOut + '\n' + './Background/' + totalArray[3] + '/displayName'
      totalName[3] = fs.readFileSync('./Background/' + totalArray[3] + '/displayName', "utf8")
      totalType[3] = fs.readFileSync('./Background/' + totalArray[3] + '/type', "utf8")
    }}catch(err){}



      debugOut = debugOut + '\n' + 'eeeeee:' + totalName

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


if (obj.stickers == undefined || obj.stickers == null)
{
  obj.stickers = []
}

let stickersList = ['./Images/Blank.png', './Images/Blank.png', './Images/Blank.png', './Images/Blank.png']
        
        if (totalType[0] == 'sticker') { stickersList[0] = './Images/sticker.png' }
        if (totalType[1] == 'sticker') { stickersList[1] = './Images/sticker.png' }
        if (totalType[2] == 'sticker') { stickersList[2] = './Images/sticker.png' }
        if (totalType[3] == 'sticker') { stickersList[3] = './Images/sticker.png' }

console.log(totalType)

// let previous = new MessageButton()
// let next = new MessageButton()

// debugOut = debugOut + '\n' + "INV " + iniciatorID + ' ' + (Number(pg)-1).toString() + ' ' + pingedUser
// if (Number(pg) <= 2) { activateBegin = true }
// if (Number(pg) == 1  ) { previous
//           .setCustomId("INV " + iniciatorID + ' ' + (Number(pg)-1).toString() + ' ' + pingedUser + ' PREV1')
//           .setDisabled(true)
//           .setLabel('Назад')
//           .setStyle('PRIMARY'); }else
//           {

//             previous
//           .setCustomId("INV " + iniciatorID + ' ' + (Number(pg)-1).toString() + ' ' + pingedUser + ' PREV2')
//           .setDisabled(false)
//           .setLabel('Назад')
//           .setStyle('PRIMARY');

//           }
// if (Number(pg) >= (Math.floor(UserHave.length/4)+1) - 2) { activateEnd = true }
// if (Number(pg) > (Math.floor(UserHave.length/4)+1) - 1) 
// {
// next
//           .setCustomId("INV " + iniciatorID + ' ' + (Number(pg)+1).toString() + ' ' + pingedUser + ' NEXT')
//           .setDisabled(true)
//           .setLabel('Вперёд')
//           .setStyle('PRIMARY');
// }else{
//   next
//           .setCustomId("INV " + iniciatorID + ' ' + (Number(pg)+1).toString() + ' ' + pingedUser + ' NEXT')
//           .setDisabled(false)
//           .setLabel('Вперёд')
//           .setStyle('PRIMARY');
// }







// let begin = new MessageButton()
//           .setCustomId("INV " + iniciatorID + ' 1 ' + pingedUser + ' BEGIN')
//           .setDisabled(activateBegin)
//           .setLabel('В начало')
//           .setStyle('DANGER');
// let end = new MessageButton()
//           .setCustomId("INV " + iniciatorID + ' ' + (Math.floor(UserHave.length/4)+1) + ' ' + pingedUser + ' END')
//           .setDisabled(activateEnd)
//           .setLabel('В конец (' + (Math.floor(UserHave.length/4)+1) + ')')
//           .setStyle('DANGER');








// const row = new MessageActionRow()
//           .addComponents(begin, previous, next, end);

canvas.toBuffer((err, out) => { debugOut = debugOut + '\n' + 'The PNG file was created.' 


debugOut = debugOut + '\n' + '0]./Background/' + totalArray[0] + '/icon.png'
debugOut = debugOut + '\n' + '1]./Background/' + totalArray[1] + '/icon.png'
debugOut = debugOut + '\n' + '2]./Background/' + totalArray[2] + '/icon.png'
debugOut = debugOut + '\n' + '3]./Background/' + totalArray[3] + '/icon.png'
sharp.cache(false);
            sharp('./Images/inventory.png')
            .resize(1024, 1024)
            .composite([
              { input: './Background/' + totalArray[0] + '/icon.png', top: 130, left: 85},
               {input: './Background/' + totalArray[1] + '/icon.png', top: 130, left: 539},
               { input: './Background/' + totalArray[2] + '/icon.png', top: 584, left: 85},
               {input: './Background/' + totalArray[3] + '/icon.png', top: 584, left: 539},
               {input: stickersList[0], top: 70, left: 330},
               { input: stickersList[1], top: 70, left: 780 },
               { input: stickersList[2], top: 525, left: 330 },
               { input: stickersList[3], top: 525, left: 780 },
              { input: out, top: 0, left: 0}
              ])
            .toBuffer()
            .then(function(outputBuffer) {
              debugOut = debugOut + '\n' + err
              debugOut = debugOut + '\n' + 'ENDED'
                          if (iniciatorID != '899380887282675743') {

                            if (msg.applicationId
== null || msg.applicationId == undefined)
                            {
              debugOut = debugOut + '\n' + '123'
              msg.replyWithPhoto({source: outputBuffer}).catch(err => { debugOut = debugOut + '\n' + err}) 
                            }else{
                              
              msg.reply({ files: [outputBuffer], components: [row] }).catch(err => { debugOut = debugOut + '\n' + "АШЫПКА: " + err });
                            }
            } else {
              debugOut = debugOut + '\n' + '456'

              debugOut = debugOut + '\n' + 'EEEEEEEEEEEEEEEEEEEEEEE________________'
              msg.removeAttachments()
              msg.edit({ files: [outputBuffer], components: [row] }).catch(err => { debugOut = debugOut + '\n' + "АШЫПКА: " + err });

              debugOut = debugOut + '\n' + '789'
            }

            debug(msg, debugOut, obj)
              })
              .catch(err => { msg.reply('Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err).catch(err => {debugOut = debugOut + '\n' + err}) });
        });
    //})
  }
}

module.exports = { invCommand }