async function shopCommand(fs, msg, ctx, sharp, canvas, shopPage, iniciatorID, getData, putData, isExist, debug) {
  console.log(await isExist(iniciatorID))
  if (await isExist(iniciatorID) == true) {
  let isButton = false

if (isNaN(Number(shopPage)) == true)
        {
          shopPage = 1
        }
    
    let obj = await getData(iniciatorID)
    console.log('Галачька')
    let shopNames = []
    fs.readdir('Background', (err, files) => {
      files.forEach(file => {
        console.log(file);
        let show = fs.readFileSync('./Background/' + file + '/forSale', "utf8");


        if (show == 'true') {
          let price = fs.readFileSync('./Background/' + file + '/price', "utf8")
          let displayName = fs.readFileSync('./Background/' + file + '/displayName', "utf8")
          let type = fs.readFileSync('./Background/' + file + '/type', "utf8")
          shopNames[shopNames.length] = [file, price, displayName, type]
        }
      });

      shopNames.sort(function(a, b) {
        return a[1] - b[1];
      })



      console.log(shopNames)
      if (isButton == false) {
        msg.reply('Загружаем...').catch(err => { }); //, components: [row] 
      } else {
        msg.reply('Загружаем...').catch(err => { });
      }

      let totalArray = ['empty', 'empty', 'empty', 'empty']
      let totalPrice = []
      let totalName = []
      let totalType = []

      console.log('СТРАОНЦИАААА ' + shopPage)


      try { totalArray[0] = (shopNames[4 * shopPage - 4][0]) } catch{ }
      try { totalArray[1] = (shopNames[4 * shopPage - 3][0]) } catch{ }
      try { totalArray[2] = (shopNames[4 * shopPage - 2][0]) } catch{ }
      try { totalArray[3] = (shopNames[4 * shopPage - 1][0]) } catch{ }


      try { totalPrice[0] = (shopNames[4 * shopPage - 4][1]) } catch{ }
      try { totalPrice[1] = (shopNames[4 * shopPage - 3][1]) } catch{ }
      try { totalPrice[2] = (shopNames[4 * shopPage - 2][1]) } catch{ }
      try { totalPrice[3] = (shopNames[4 * shopPage - 1][1]) } catch{ }


      try { totalName[0] = (shopNames[4 * shopPage - 4][2]) } catch{ }
      try { totalName[1] = (shopNames[4 * shopPage - 3][2]) } catch{ }
      try { totalName[2] = (shopNames[4 * shopPage - 2][2]) } catch{ }
      try { totalName[3] = (shopNames[4 * shopPage - 1][2]) } catch{ }

      try { totalType[0] = (shopNames[4 * shopPage - 4][3]) } catch{ }
      try { totalType[1] = (shopNames[4 * shopPage - 3][3]) } catch{ }
      try { totalType[2] = (shopNames[4 * shopPage - 2][3]) } catch{ }
      try { totalType[3] = (shopNames[4 * shopPage - 1][3]) } catch{ }


      ctx.font = '50px "Main"'
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;
      ctx.fillStyle = 'white';


      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.textAlign = 'center'


      if (totalName[0] != undefined) {
        ctx.fillText(totalArray[0], 290, 520)
        ctx.fillText(totalPrice[0] + ' монет', 290, 185)
        ctx.fillText(totalName[0], 290, 220)
      }

      if (totalName[1] != undefined) {
        ctx.fillText(totalArray[1], 734, 520)
        ctx.fillText(totalPrice[1] + ' монет', 734, 185)
        ctx.fillText(totalName[1], 734, 220)
      }

      if (totalName[2] != undefined) {
        ctx.fillText(totalArray[2], 290, 975)
        ctx.fillText(totalPrice[2] + ' монет', 290, 640)
        ctx.fillText(totalName[2], 290, 675)
      }

      if (totalName[3] != undefined) {
        ctx.fillText(totalArray[3], 734, 975)
        ctx.fillText(totalPrice[3] + ' монет', 734, 640)
        ctx.fillText(totalName[3], 734, 675)
      }




      if (totalName[0] != undefined) {
        ctx.strokeText(totalArray[0], 290, 520)
        ctx.strokeText(totalPrice[0] + ' монет', 290, 185)
        ctx.strokeText(totalName[0], 290, 220)
      }

      if (totalName[1] != undefined) {
        ctx.strokeText(totalArray[1], 734, 520)
        ctx.strokeText(totalPrice[1] + ' монет', 734, 185)
        ctx.strokeText(totalName[1], 734, 220)
      }

      if (totalName[2] != undefined) {
        ctx.strokeText(totalArray[2], 290, 975)
        ctx.strokeText(totalPrice[2] + ' монет', 290, 640)
        ctx.strokeText(totalName[2], 290, 675)
      }

      if (totalName[3] != undefined) {
        ctx.strokeText(totalArray[3], 734, 975)
        ctx.strokeText(totalPrice[3] + ' монет', 734, 640)
        ctx.strokeText(totalName[3], 734, 675)
      }




      canvas.toBuffer((err, out) => {
        console.log('The PNG file was created.')


        let boughThemes = ['./Images/Blank.png', './Images/Blank.png', './Images/Blank.png', './Images/Blank.png']
        if (obj.stickers == undefined || obj.stickers == null)
        {
          obj.stickers = []
        }
        let UserHave = obj.themes.concat(obj.stickers)
        console.log(UserHave)
        if (UserHave.includes(totalArray[0])) { boughThemes[0] = './Images/bought.png' }
        if (UserHave.includes(totalArray[1])) { boughThemes[1] = './Images/bought.png' }
        if (UserHave.includes(totalArray[2])) { boughThemes[2] = './Images/bought.png' }
        if (UserHave.includes(totalArray[3])) { boughThemes[3] = './Images/bought.png' }


        let stickersList = ['./Images/Blank.png', './Images/Blank.png', './Images/Blank.png', './Images/Blank.png']
        
        if (totalType[0] == 'sticker') { stickersList[0] = './Images/sticker.png' }
        if (totalType[1] == 'sticker') { stickersList[1] = './Images/sticker.png' }
        if (totalType[2] == 'sticker') { stickersList[2] = './Images/sticker.png' }
        if (totalType[3] == 'sticker') { stickersList[3] = './Images/sticker.png' }


        console.log('Тотал: ' + totalArray)
        console.log(shopPage)
        console.log('ПЕРВЫЙ ЭЛ: ' + shopNames[4 * shopPage - 4])

        console.log('VVV Купля VVV');
        console.log(boughThemes);
        let isDisabled = false
        let isDisabledEnd = false
        if (shopPage == 1) { isDisabled = true }
        if (shopPage == Math.floor(shopNames.length / 4)) { isDisabledEnd = true }
        let beginName = '1'
        let activateBegin = false


//                 let btn3 = new MessageButton()
//           .setCustomId("SHOP " + iniciatorID + ' ' + beginName.toString())
//           .setDisabled(activateBegin)
//           .setLabel('В начало')
//           .setStyle('PRIMARY');

//         console.log((Number(shopPage)))
//         if (shopPage == 1 || shopPage == 2) {
//           btn3 = new MessageButton()
//           .setCustomId('FAILEDBEGIN')
//           .setDisabled(true)
//           .setLabel('В начало')
//           .setStyle('SECONDARY');
//         }
//         console.log('a')

//         let endName = (Math.floor(shopNames.length / 4)).toString()
//         let activateEnd = false


// let btn4 = new MessageButton()
//           .setCustomId("SHOP " + iniciatorID + ' ' + endName)
//           .setDisabled(activateEnd)
//           .setLabel('В конец (' + Math.floor(shopNames.length / 4) + ')')
//           .setStyle('PRIMARY');

//         if ((shopPage == Math.floor(shopNames.length / 4)) || (shopPage == (Math.floor(shopNames.length / 4) - 1))) {
//  btn4 = new MessageButton()
//           .setCustomId('FAILEDEND')
//           .setDisabled(true)
//           .setLabel('В конец (' + Math.floor(shopNames.length / 4) + ')')
//           .setStyle('SECONDARY');

//         }

//         const btn1 = new MessageButton()
//           .setCustomId("SHOP " + iniciatorID + ' ' + (Number(shopPage) + 1).toString())
//           .setLabel('Вперёд')
//           .setDisabled(isDisabledEnd)
//           .setStyle('SUCCESS');


//         const btn2 = new MessageButton()
//           .setCustomId("SHOP " + iniciatorID + ' ' + (Number(shopPage) - 1).toString())
//           .setDisabled(isDisabled)
//           .setLabel('Назад')
//           .setStyle('SUCCESS');






        


        // msg.reply(shopPage + '.' + btn1.customId + ' | ' + btn2.customId + ' | ' + btn3.customId + ' | ' + btn4.customId)

        
        // const row = new MessageActionRow()
        //   .addComponents(btn3, btn2, btn1, btn4);



        
        // msg.reply({ content: 'Pong!', components: [row] });

        sharp.cache(false);
        sharp('./Images/shop.png')
          .resize(1024, 1024)
          .composite([
            { input: './Background/' + totalArray[0] + '/icon.png', top: 130, left: 85 },
            { input: './Background/' + totalArray[1] + '/icon.png', top: 130, left: 539 },
            { input: './Background/' + totalArray[2] + '/icon.png', top: 584, left: 85 },
            { input: './Background/' + totalArray[3] + '/icon.png', top: 584, left: 539 },

            { input: boughThemes[0], top: 145, left: 70 },
            { input: boughThemes[1], top: 145, left: 524 },
            { input: boughThemes[2], top: 600, left: 70 },
            { input: boughThemes[3], top: 600, left: 524 },

            {input: stickersList[0], top: 70, left: 330},
            { input: stickersList[1], top: 70, left: 780 },
            { input: stickersList[2], top: 525, left: 330 },
            { input: stickersList[3], top: 525, left: 780 },
            
            { input: out, top: 0, left: 0 }
          


          ])
          .toBuffer()
          .then(function(outputBuffer) {
            console.log(err)

            console.log(msg)
            if (isButton == false) {
              console.log('NOTBUTTON')
              if (msg.user != undefined)
              {
              msg.replyWithPhoto({source: outputBuffer}).catch(err => { console.log(err) });

              }else{
              console.log('123')
              msg.replyWithPhoto({source: outputBuffer}).catch(err => { }); //, components: [row] 
              }
            } else {
              console.log('456')

              //               let findImage = msg.attachments.find(attachment => attachment.name.endsWith('png') || attachment.name.endsWith('jpg') || attachment.name.endsWith('gif'))
              // if (findImage != null) {
              //   msg.reply('1')
              // }
                      console.log('EEEEEEEEEEEEEEEEEEEEEEE________________')
              //         msg.edit('Загружаем')
              // msg.removeAttachments()
              // msg.edit('Загружено!')

              // content: 'Страница: ' + shopPage,

              msg.replyWithPhoto({source: outputBuffer}).catch(err => { console.log("АШЫПКА: " + err) });

              console.log('789')
            }
          })
          .catch(err => { msg.reply('Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err) });
      })
      

    })
  }

  
}

module.exports = { shopCommand }