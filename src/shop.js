function shopCommand(fs, msg, ctx, sharp, canvas) {
                     if (fs.existsSync('./data/UserData/' + msg.author.id + '/integers/exp')) 
      {
    const args = msg.content.slice(`/био`).split(/ +/);
    if ((isNaN(Number(args[1])) == true) || (Number(args[1] == undefined)) || (args[1] == undefined || (args[1] == NaN))) { shopPage = 1} else {shopPage = Number(args[1])}
    console.log(shopPage)

if (shopPage > 1) { shopPage = 1}

    let shopNames = []
    fs.readdir('Background', (err, files) => {
  files.forEach(file => {
    console.log(file);
    let show = fs.readFileSync('./Background/' + file + '/forSale', "utf8");


    if (show == 'true') { 
      let price = Number(fs.readFileSync('./Background/' + file + '/price', "utf8"))
      let displayName = fs.readFileSync('./Background/' + file + '/displayName', "utf8")
      shopNames[shopNames.length] = [file, price, displayName]
      }
  });

shopNames.sort(function(a, b) {
  return a[1] - b[1];
})



  console.log(shopNames)
msg.channel.send('Загружаем...')

    let totalArray = ['empty','empty','empty','empty']
    let totalPrice = []
    let totalName = []

    try {totalArray[0] = (shopNames[4*shopPage-4][0])}catch{}
    try {totalArray[1] = (shopNames[4*shopPage-3][0])}catch{}
    try {totalArray[2] = (shopNames[4*shopPage-2][0])}catch{}
    try {totalArray[3] = (shopNames[4*shopPage-1][0])}catch{}


    try {totalPrice[0] = (shopNames[4*shopPage-4][1])}catch{}
    try {totalPrice[1] = (shopNames[4*shopPage-3][1])}catch{}
    try {totalPrice[2] = (shopNames[4*shopPage-2][1])}catch{}
    try {totalPrice[3] = (shopNames[4*shopPage-1][1])}catch{}


    try {totalName[0] = (shopNames[4*shopPage-4][2])}catch{}
    try {totalName[1] = (shopNames[4*shopPage-3][2])}catch{}
    try {totalName[2] = (shopNames[4*shopPage-2][2])}catch{}
    try {totalName[3] = (shopNames[4*shopPage-1][2])}catch{}


    ctx.font = '50px "Main"'
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.fillStyle = 'white';


    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.textAlign = 'center'


if (totalName[0] != undefined)
{
ctx.fillText(totalArray[0], 290, 520)
ctx.fillText(totalPrice[0] + ' монет', 290, 185)
ctx.fillText(totalName[0], 290, 220)
}

if (totalName[1] != undefined)
{
  ctx.fillText(totalArray[1], 734, 520)
  ctx.fillText(totalPrice[1] + ' монет', 734, 185)
  ctx.fillText(totalName[1], 734, 220)
}

if (totalName[2] != undefined)
{
  ctx.fillText(totalArray[2], 290, 975)
  ctx.fillText(totalPrice[2] + ' монет', 290, 640)
  ctx.fillText(totalName[2], 290, 675)
}

if (totalName[3] != undefined)
{
  ctx.fillText(totalPrice[3], 734, 975)
  ctx.fillText(totalPrice[3] + ' монет', 734, 640)
  ctx.fillText(totalName[3], 734, 675)
}




if (totalName[0] != undefined)
{
ctx.strokeText(totalArray[0], 290, 520)
ctx.strokeText(totalPrice[0] + ' монет', 290, 185)
ctx.strokeText(totalName[0], 290, 220)
}

if (totalName[1] != undefined)
{
  ctx.strokeText(totalArray[1], 734, 520)
  ctx.strokeText(totalPrice[1] + ' монет', 734, 185)
  ctx.strokeText(totalName[1], 734, 220)
}

if (totalName[2] != undefined)
{
  ctx.strokeText(totalArray[2], 290, 975)
  ctx.strokeText(totalPrice[2] + ' монет', 290, 640)
  ctx.strokeText(totalName[2], 290, 675)
}

if (totalName[3] != undefined)
{
  ctx.strokeText(totalPrice[3], 734, 975)
  ctx.strokeText(totalPrice[3] + ' монет', 734, 640)
  ctx.strokeText(totalName[3], 734, 675)
}




canvas.toBuffer((err, out) => { console.log('The PNG file was created.') 


let boughThemes = ['./Images/Blank.png','./Images/Blank.png','./Images/Blank.png','./Images/Blank.png']
   let UserHave = fs.readdirSync('./data/UserData/' + msg.author.id + '/themes')
console.log(UserHave)
  if (UserHave.includes(totalArray[0])) { boughThemes[0] = './Images/bought.png'}
 if (UserHave.includes(totalArray[1])) { boughThemes[1] = './Images/bought.png'}
  if (UserHave.includes(totalArray[2])) { boughThemes[2] = './Images/bought.png'}
   if (UserHave.includes(totalArray[3])) { boughThemes[3] = './Images/bought.png'}
console.log('Тотал: ' + totalArray)
       
    console.log('ПЕРВЫЙ ЭЛ: ' + shopNames[4*shopPage-4])

console.log('VVV Купля VVV')
console.log(boughThemes)
sharp.cache(false);
              sharp('./Images/shop.png')
            .resize(1024, 1024)
            .composite([
              { input: './Background/' + totalArray[0] + '/icon.png', top: 130, left: 85},
               {input: './Background/' + totalArray[1] + '/icon.png', top: 130, left: 539},
               { input: './Background/' + totalArray[2] + '/icon.png', top: 584, left: 85},
               {input: './Background/' + totalArray[3] + '/icon.png', top: 584, left: 539},

               {input: boughThemes[0], top: 145, left: 70},
               {input: boughThemes[1], top: 145, left: 524},
               {input: boughThemes[2], top: 600, left: 70},
               {input: boughThemes[3], top: 600, left: 524},
               
              { input: out, top: 0, left: 0}])
            .toBuffer()
            .then(function(outputBuffer) {
              console.log(err)
              msg.channel.send({files: [outputBuffer]});
              })
              .catch(err => { msg.reply('Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err) });
            })

        
     })
  }
}

module.exports = { shopCommand }