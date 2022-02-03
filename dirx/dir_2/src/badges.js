function badgesCommand(msg, fs, args, client) {
if (fs.existsSync('./data/UserData/' + msg.author.id))
   {

     let pingedUser = msg.author.id
 pingedUser = args[1]

if (pingedUser !== undefined)
   {
pingedUser = pingedUser.replace("<@",'')
pingedUser = pingedUser.replace("!",'')
pingedUser = pingedUser.replace(">",'')
   }


if (fs.existsSync('./data/UserData/' + pingedUser))
   { }else{pingedUser = msg.author.id}
client.users.fetch(pingedUser).then(User => 
  {
    let badges = fs.readdirSync('./data/UserData/' + pingedUser + '/cardBadges')
    if (badges.length == 1) { badges = 'Не обнаружено' }

msg.reply('__**Значки ' + User.tag + '**__\n' + badges)



  });



   }
}
module.exports = { badgesCommand }