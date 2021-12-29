function setbadge2Command(fs, msg, ctx, sharp, canvas, args) {
    if (fs.existsSync('./data/UserData/' + msg.author.id))
{
  try{
    let ThemeMassive = fs.readdirSync('./data/UserData/' + msg.author.id + '/cardBadges')
    if (fs.existsSync('./Badges2/' + args[1] + '.png'))
    {
      if (ThemeMassive.includes(args[1]))
      {
        fs.writeFileSync('./data/UserData/' + msg.author.id + '/config/badge2', args[1], 'utf8')
        msg.reply('**__Значок успешно установлен!!__**').catch(err => {});
        msg.channel.send({files: ["./Badges/" + args[1] + ".png"]}).catch(err => {});
//
      }else{
        msg.reply('У тебя нету этого значка!').catch(err => {});}
    }else{msg.reply('Не найдено значка!').catch(err => {});}
  }catch(err){}
  }
}

module.exports = { setbadge2Command }