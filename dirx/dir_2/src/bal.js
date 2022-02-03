function balCommand(msg, fs, args, client, MessageEmbed) {

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
  
let Money = fs.readFileSync('./data/UserData/' + pingedUser + '/integers/money', "utf8");
let CurrentDate = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"})).toJSON(); 
client.users.fetch(pingedUser).then(User => 
  {
const respecc = new MessageEmbed()
    .setColor('#ffff00')
    .setTitle('Баланс: ' + Money)
    .setAuthor(User.tag, User.displayAvatarURL())
    .setDescription(CurrentDate)
    .setFooter('Ronoserver Services - звено Статистики', 'https://images-ext-2.discordapp.net/external/SLnaCFfbKRV2BQGkU1zVy9VhwyqdeNXw5Fu-bNMJjCk/https/media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png')


msg.reply({ embeds: [respecc] }).catch(err => {});;

  });
}
}
module.exports = { balCommand }

