async function setbadge2Command(fs, msg, ctx, sharp, canvas, args, isExist, getData, putData, iniciator) {


    if (await isExist(iniciator) == true)
{
 
  try{
    let obj = await getData(iniciator)
    let ThemeMassive = obj.badges
    if (fs.existsSync('./Badges/' + args[1] + '.png'))
    {
      if (ThemeMassive.includes(args[1]))
      {
        obj.config.badge2 = args[1]
        putData(iniciator, obj)
        msg.reply('**__Значок успешно установлен!!__**').catch(err => {});
        msg.reply({source: "./Badges/" + args[1] + ".png"}).catch(err => {});
//
      }else{
        msg.reply('У тебя нету этого значка!').catch(err => {});}
    }else{msg.reply('Не найдено значка!').catch(err => {});}
  }catch(err){msg.reply(err + ' . ')}
  }
}

module.exports = { setbadge2Command }