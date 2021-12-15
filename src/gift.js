function giftCommand(msg, fs, client, args) {
  {
    if (fs.existsSync('./data/UserData/' + msg.member.id))
   {
     if (args.length != 2) { msg.reply('Неправильный ввод команды! Используйте данный ввод:\n`/gift <ID|Упомянание пользователя>`')
     }else{

       let giftedArray = fs.readFileSync('./data/giftedArray', "utf8");
       let choppedArray = giftedArray.split(' | ')
        console.log(choppedArray)

        if (giftedArray.includes(msg.member.id))
        {
          msg.reply('Дарить подарок можно только один раз!')
        }else
        {
          

      let pingedUser = args[1]



   if (pingedUser.includes('<@'))
   {
     pingedUser = pingedUser.replace("<@",'')
     pingedUser = pingedUser.replace("!",'')
     pingedUser = pingedUser.replace(">",'')
   }else {}

const Guild = client.guilds.cache.get("544902879534907392"); // Getting the guild.
const Members = Guild.members.cache.map(member => member.id); // Getting the members and mapping them by ID.

console.log(pingedUser)
   if ((Members.includes(pingedUser)) && (msg.author.id != pingedUser) )
   {

    let role = msg.guild.roles.cache.find(r => r.id === "920032380398485505");
     Guild.members.cache.find(user => user.id === pingedUser).roles.add(role);
     msg.reply('<@' + pingedUser + '>')
     msg.channel.send('https://media.discordapp.net/attachments/698853696817070164/920043674275037244/SPACITEOnDerzitMenya.gif')
        let CurrentDate = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"})).toJSON(); 
      fs.writeFileSync('./data/UserData/' + msg.member.id + '/themes/2022', CurrentDate)
     msg.channel.send('Подарок успешно подарен! <@' + pingedUser + '> получает лимитированную роль, а ты лимитированную тему "2022"! Проверь её при помощи `/inv`')
    fs.appendFileSync('./data/giftedArray', msg.member.id + ' | ')
 }else{
 if (msg.author.id == pingedUser) { msg.reply('Чё? Самый умный тут?')}else{msg.reply('Пользователь не обнаружен!')}
 }


  }
  }
  }
  }
}

module.exports = { giftCommand }