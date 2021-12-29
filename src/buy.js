function buyCommand(fs, msg, ctx, sharp, canvas) {
    if (fs.existsSync('./data/UserData/' + msg.author.id))
{
  try{
    if (fs.existsSync('./data/UserData/' + msg.author.id))
   {

    let CurrentDate = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"})).toJSON(); 
    let filepath = "./data/UserData/" + msg.author.id;
     let UserThemes = fs.readdirSync('./data/UserData/' + msg.author.id + '/themes')
let ShopThemes = fs.readdirSync('./Background')

    const args = msg.content.slice(`/био`).split(/ +/);
    if (UserThemes.includes(args[1].toLowerCase()))
    {
      msg.reply('У тебя уже есть эта тема!').catch(err => {});
    }else
    {
      if (ShopThemes.includes(args[1].toLowerCase()))
      {
        let status = fs.readFileSync('./Background/' + args[1].toLowerCase() + '/forSale', "utf8");
        if (status == 'true')
        {
          let price = Number(fs.readFileSync('./Background/' + args[1].toLowerCase() + '/price', "utf8"));
          console.log('PRICE: ' + price)
          let userBalance = Number(fs.readFileSync('./data/UserData/' + msg.author.id + '/integers/money', "utf8"));
          console.log('BALANCE: ' + userBalance)
          if (userBalance < price)
          {
            msg.reply('Прости, но похоже, что у тебя недостаточно средств на покупку этой темы!').catch(err => {});
          }else
          {
            let CurrentDate = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"})).toJSON();
            
            let owned = Number(fs.readFileSync('./Background/' + args[1].toLowerCase() + '/owned', "utf8"));
            fs.writeFileSync('./Background/' + args[1].toLowerCase() + '/owned',(owned + 1).toString(), 'utf8', (err) => { console.log(err) })

            // msg.reply(owned.toString())

            fs.writeFileSync('./data/UserData/' + msg.author.id + '/themes/' + args[1].toLowerCase(),CurrentDate, 'utf8', (err) => { console.log(err) })
            userBalance = userBalance - price
            fs.writeFileSync('./data/UserData/' + msg.author.id + '/integers/money',userBalance.toString(), 'utf8', (err) => { console.log(err) })
            msg.reply('Покупка темы прошла успешно!!\nПоставь её командой `/set ' + args[1].toLowerCase() + '` :3').catch(err => {});
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
  
  }catch(err){ msg.reply('Хей! Скорее всего у тебя неправильный ввод! Ввод доолжен быть в формате `/buy <ID ТЕМЫ>`\nОшибка: ' + err).catch(err => {}); }
}
}

module.exports = { buyCommand }