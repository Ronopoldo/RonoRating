function getCmd(msg, fs , client, GuildMemberRoleManager, MessageEmbed) {
    if (fs.existsSync('./data/UserData/' + msg.author.id))
{
let guild = client.guilds.cache.get("544902879534907392");
let member = guild.members.cache.get(msg.author.id);

function give(roleID, themeID, Member, type)
  {
    const role = guild.roles.cache.get(roleID)
     let CurrentDate = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"})).toJSON(); 
     let themesArray = fs.readdirSync('./data/UserData/' + Member.id + '/' + type)
     console.log(msg.member._roles)
     if (Member.roles.cache.has(role.id))
     {
       if  (themesArray.includes(themeID))
        {}else
       {
      fs.writeFileSync('./data/UserData/' + Member.id + '/' + type + '/' + themeID, CurrentDate)
      return themeID + ' (' + type + ')\n'}
     }
     
     console.log('ye')
  }

 let gived = give('933653807936700447', 'generalgavs', member, 'cardBadges') + '\n' + give('647087808908886018', 'staff', member, 'cardBadges')

if (gived == undefined) { gived = 'Ничего'}



  const exampleEmbed = new MessageEmbed()
	.setColor('#ff8800')
	.setTitle('Скан завершён!')
	.setDescription('**__Новые темы и значки:__**\n' + gived)
	.setTimestamp()
	.setFooter('Ronoserver Services - звено Статистики', 'https://images-ext-2.discordapp.net/external/SLnaCFfbKRV2BQGkU1zVy9VhwyqdeNXw5Fu-bNMJjCk/https/media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png')

msg.channel.send({ embeds: [exampleEmbed] }); //
}
}
module.exports = { getCmd }

