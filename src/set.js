async function setCommand(fs, msg, ctx, sharp, canvas, inciator, isExist, getData, putData, debug) {
    if (isExist(inciator))
{
  try{
    const args = msg.message.text.slice(`/био`).split(/ +/);
    let obj = await getData(inciator)
    await console.log(obj)
    let ThemeMassive = obj.themes
    if (fs.existsSync('./Background/' + args[1]))
    {
      if (ThemeMassive.includes(args[1]))
      {
        obj.config.theme = args[1]
        let desc = fs.readFileSync('./Background/' + args[1] + '/description', "utf8");
        
        msg.reply('**__Тема успешно установлена!!__**\nОписание: `' + desc + '`').catch(err => {debug(msg, err, obj)});
        msg.replyWithPhoto({source: "./Background/" + args[1] + "/image.png"})
//["./Background/" + args[1] + "/image.png"]
        putData(inciator, obj)
      }else{
        msg.reply('У тебя нету этой темы!').catch(err => {});}
    }else{msg.reply('Не найдено темы!').catch(err => {});}
  }catch(err){console.log(err)}
  }
}

module.exports = { setCommand }