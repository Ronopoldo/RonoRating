function respeccCommand(msg, MessageEmbed ) {

const respecc = new MessageEmbed()
    .setColor('#ffeb3e')
    .setTitle('Известная личность')
    .setAuthor('FX#1854', 'https://media.discordapp.net/attachments/698853696817070164/911547857159467059/prize-clipart-transparent-background-4-removebg-preview.png', 'https://www.youtube.com/channel/UCsiBJYVGCTvTAQ0R-k44_pA')
    .setDescription('**__<@517574792619229194>__ - довольно известная личность. Зашёл на сервер в день его открытия и был (и остаётся) очень активным членом сервера. По непонятной причине его часто путали с Мышью (Zackeer). Является тем человеком, который пережил лучшие моменты сервера и в целом является очень значимой во влиянии на Рони личностью.**')
    .setThumbnail('https://media.discordapp.net/attachments/698853696817070164/919682766717730906/Screenshot_20191210-073902_Discord.jpg')
    .setFooter('Ronoserver Services - звено Статистики', 'https://images-ext-2.discordapp.net/external/SLnaCFfbKRV2BQGkU1zVy9VhwyqdeNXw5Fu-bNMJjCk/https/media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png')

if (msg.user != undefined)
              {
msg.reply({ embeds: [respecc] }).catch(err => {})
              }else{
                msg.channel.send({ embeds: [respecc] }).catch(err => {});;
              }
}

module.exports = { respeccCommand }