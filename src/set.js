function setCommand(fs, msg, ctx, sharp, canvas, args) {
    if (fs.existsSync('./data/UserData/' + msg.author.id))
{
  try{
    let ThemeMassive = fs.readdirSync('./data/UserData/' + msg.author.id + '/themes')
    if (fs.existsSync('./Background/' + args[1]))
    {
      if (ThemeMassive.includes(args[1]))
      {
        fs.writeFileSync('./data/UserData/' + msg.author.id + '/config/theme', args[1], 'utf8')
        let desc = fs.readFileSync('./Background/' + args[1] + '/description', "utf8");
        let getdate = fs.readFileSync('./data/UserData/' + msg.author.id + '/themes/' + args[1] , "utf8");

        msg.reply('**__Тема успешно установлена!!__**\nОписание: `' + desc + '`\n\n\nПолучена: \n`' + getdate + '`').catch(err => {});
        msg.channel.send({files: ["./Background/" + args[1] + "/image.png"]}).catch(err => {});
//
      }else{
        msg.reply('У тебя нету этой темы!').catch(err => {});}
    }else{msg.reply('Не найдено темы!').catch(err => {});}
  }catch(err){}
  }
}

module.exports = { setCommand }