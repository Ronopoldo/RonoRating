async function badgesCommand(msg, fs, args, client, iniciator, isExist, getData) {
if (await isExist(iniciator) == true)
   {
    
     let pingedUser = iniciator
 pingedUser = args[1]

if (pingedUser !== undefined)
   {
pingedUser = pingedUser.replace("<@",'')
pingedUser = pingedUser.replace("!",'')
pingedUser = pingedUser.replace(">",'')
   }


if (await isExist(pingedUser) == true)
   { }else{pingedUser = iniciator} 
     let obj = await getData(pingedUser)
client.users.fetch(pingedUser).then(async User => 
  {

    let badges = obj.badges
    if (badges.length == 1) { badges = 'Не обнаружено' }

msg.reply('__**Значки ' + User.tag + '**__\n' + badges)



  });



   }
}
module.exports = { badgesCommand }