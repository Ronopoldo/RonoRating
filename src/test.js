function test(msg, client, args, MessageActionRow, MessageButton) {

  if (msg.author.id == '544902183007813652') {
    const guild = client.guilds.cache.get("544902879534907392");
    const role = guild.roles.cache.get("933653807936700447");


    guild.members.fetch().then((members) => {
      members.forEach(function(member) {
        console.log(member.user.tag)
        if (member.displayName.toLowerCase().includes('генерал')) {
          member.roles.add(role);
          msg.reply(member.displayName + ' - Генерал Гавс! Выдаю роль!')
        }
      })
    });
  }
}
module.exports = { test }