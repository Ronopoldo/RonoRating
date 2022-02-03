function DMprocessing(msg, client, ee) {

let logChannel = client.channels.cache.get('925312597211897856')
let typeCh = ee.type

// msg.reply(typeCh)

if (typeCh == 'DM')
  {
    const guild = client.guilds.cache.get("544902879534907392");
          let publicashionCh = guild.channels.cache.get("925312597211897856")
          try{

            if (msg.content.length < 1800)
            {
            publicashionCh.send('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\nДМ с ' + msg.channel.recipient.tag + '(<@' +msg.channel.recipient.id+'>)\n\n`' + msg.author.tag + '(<@' + msg.author.id + '>):`\n```' + msg.content + '```').catch(err => {});
            }else(publicashionCh.send('Очень длинное сообщение...').catch(err => {}))
            msg.attachments.forEach(attachment => {
      const ImageLink = attachment.url;
      publicashionCh.send(ImageLink)
    });
            console.log(msg.attachments)
          }catch(err){
            msg.reply('Очень странно, но произошла ошибка! Напиши на GitHub бота о ней.\n Также укажи код: `' + err + '`').catch(err => {});
          }
  }
}
module.exports = { DMprocessing }

