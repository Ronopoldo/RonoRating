function msgProcessing(msg, client) {
const guild = client.guilds.cache.get("544902879534907392");
const publicashionCh = guild.channels.cache.get("925312597211897856")

  if (msg.attachments.size > 0) {
  msg.startThread({
	name: msg.member.displayName + ' - 💭Комментарии и оценки📈',
	autoArchiveDuration: 'MAX',
	reason: 'Создание треда по причине новой работы',
});
msg.react('💖')
msg.react(msg.guild.emojis.cache.get('809347507020103731'))
msg.react('🤩')
msg.react('😁')
msg.react('😡')
msg.react(msg.guild.emojis.cache.get('782317039901212724'))
  }else{
    console.log('12333')
    msg.delete()
    publicashionCh.send(msg.author.id + ' - попытка опубликовать в канал рисунков это: \n' + msg.content)
  }
}
module.exports = { msgProcessing }