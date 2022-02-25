function test(msg, client, args, MessageActionRow, MessageButton) {

  if (msg.author.id == '544902183007813652') {
    // const guild = client.guilds.cache.get("544902879534907392");
    // const role = guild.roles.cache.get("933653807936700447");


    // guild.members.fetch().then((members) => {
    //   members.forEach(function(member) {
    //     console.log(member.user.tag)
    //     if (member.displayName.toLowerCase().includes('жора')) {
    //       let asd = member.displayName
    //       asd = asd.replace(/@/g, "")
    //       member.setNickname("#РониКраш");
    //       msg.reply('`' + asd + ' - осознавший что рони не жора`' )
    //     }
    //   })
    // });

     console.log(client.users.cache.find(user => user.id === '413362916327292933'))
  } //ПРОФИ :sunglasses: ====))
}
module.exports = { test }