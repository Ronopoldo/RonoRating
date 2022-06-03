async function setCommand(fs, msg, ctx, sharp, canvas, args, inciator, isExist, getData, putData, debug) {
    if (isExist(inciator))
{
  try{
    let obj = await getData(inciator)
    let ThemeMassive = obj.themes
    if (fs.existsSync('./Background/' + args[1]))
    {
      if (ThemeMassive.includes(args[1]))
      {
        obj.config.theme = args[1]
        let desc = fs.readFileSync('./Background/' + args[1] + '/description', "utf8");
        
        msg.reply('**__Тема успешно установлена!!__**\nОписание: `' + desc + '`').catch(err => {debug(msg, err, obj)});
        msg.channel.send({files: ["./Background/" + args[1] + "/image.png"]}).catch(err => {});
//
        putData(inciator, obj)
      }else{
        msg.reply('У тебя нету этой темы!').catch(err => {});}
    }else{msg.reply('Не найдено темы!').catch(err => {});}
  }catch(err){debug(msg, err, obj)}
  }
}

module.exports = { setCommand }