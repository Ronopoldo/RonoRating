async function buyCommand(fs, msg, ctx, sharp, canvas, iniciator, getData, putData, isExist) {

  try{
    console.log('BEGAN')
    if (await isExist(iniciator))
   {
    let obj = await getData(iniciator)
    let CurrentDate = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"})).toJSON(); 
     let UserThemes = obj.themes
let ShopThemes = fs.readdirSync('./Background')

    const args = msg.content.slice(`/био`).split(/ +/);
    if (UserThemes.includes(args[1]))
    {
      msg.reply('У тебя уже есть эта тема!').catch(err => {});
    }else
    {
      if (ShopThemes.includes(args[1]))
      {
        let status = fs.readFileSync('./Background/' + args[1] + '/forSale', "utf8");
        if (status == 'true')
        {
          let price = Number(fs.readFileSync('./Background/' + args[1] + '/price', "utf8"));
          console.log('PRICE: ' + price)
          let userBalance = Number(obj.money);
          console.log('BALANCE: ' + userBalance)
          if (userBalance < price)
          {
            msg.reply('Прости, но похоже, что у тебя недостаточно средств на покупку этой темы!').catch(err => {});
          }else
          {
            let owned = Number(fs.readFileSync('./Background/' + args[1] + '/owned', "utf8"));
            fs.writeFileSync('./Background/' + args[1] + '/owned',(owned + 1).toString(), 'utf8', (err) => { console.log(err) })

            // msg.reply(owned.toString())
            let codeWord = 'темы'
            if (fs.readFileSync('./Background/' + args[1] + '/type') == 'theme')
            {
            obj.themes[obj.themes.length] = args[1]
            codeWord = 'темы'
            obj.money = obj.money - price
            }


            if (obj.stickers == undefined || obj.stickers == null)
            {
              obj.stickers = []
            }


            if (fs.readFileSync('./Background/' + args[1] + '/type') == 'sticker')
            {
            obj.stickers[obj.stickers.length] = args[1]
            codeWord = 'значка'
            obj.money = obj.money - price
            }
            
            
            msg.reply('Покупка ' + codeWord + ' прошла успешно!!\nПоставь её командой `/set ' + args[1] + '` :3').catch(err => {});
            putData(iniciator, obj)
          }
        }else{
          msg.reply('Эта тема не продаётся!').catch(err => {});
        }

      }else
      {
        msg.reply('Темы не существует! Проверь написание').catch(err => {});
      }
    }
  }
  
  }catch(err){ msg.channel.send('Хей! Скорее всего у тебя неправильный ввод! Ввод доолжен быть в формате `/buy <ID ТЕМЫ>`\nОшибка: ' + err).catch(err => {console.log(err)}); }

}

module.exports = { buyCommand }