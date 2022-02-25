function respeccCommand(msg, MessageEmbed ) {

const respecc = new MessageEmbed()
    .setColor('#371680')
    .setTitle('Большая шишка [НАСТОЯЩАЯ]')
    .setAuthor('Sραmτση...#2869', 'https://media.discordapp.net/attachments/698853696817070164/911547857159467059/prize-clipart-transparent-background-4-removebg-preview.png', 'https://www.youtube.com/channel/UCsiBJYVGCTvTAQ0R-k44_pA')
    .setDescription('**__<@733603141559386113>__ - очень активный деятель с сервера. Находится в нём с 2021 года; однако, не смотря на это очень быстро обогнал многих людей в топе и сейчас является одним из самых активных людей на сервере.\n\nМы очень благодарны ему за то, сколько времени он уделяет на наш сервер.**')
    .setThumbnail('https://media.discordapp.net/attachments/698853696817070164/945044370955071508/unknown.png')
    .setFooter('Ronoserver Services - звено Статистики', 'https://images-ext-2.discordapp.net/external/SLnaCFfbKRV2BQGkU1zVy9VhwyqdeNXw5Fu-bNMJjCk/https/media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png')

if (msg.user != undefined)
              {
msg.reply({ embeds: [respecc] }).catch(err => {})
              }else{
                msg.channel.send({ embeds: [respecc] }).catch(err => {});;
              }
}

module.exports = { respeccCommand }