function respeccCommand(msg, MessageEmbed ) {

const respecc = new MessageEmbed()
    .setColor('#A8E4A0')
    .setTitle('Активный член сервера')
    .setAuthor('Zenith#7461', 'https://media.discordapp.net/attachments/698853696817070164/911547857159467059/prize-clipart-transparent-background-4-removebg-preview.png', 'https://www.youtube.com/channel/UC0dOkpkIBKDbzzgMwqX_srA')
    .setDescription('**__<@658235822079868942>__ - активный член сервера. Зашёл на него в конце 2020 года, однако, основной актив начал проявляться в конце 2021 года. Довольно известная личность, которая в феврале 2022 года уже стала модератором. Роносервер очень благодарен ему.**')
    .setThumbnail('https://media.discordapp.net/attachments/698853696817070164/962038749900980284/q1t46vzorgzwdS5zYBWqlmXYwILHcXyBC_TiAFTiyyuxCSadlLVDPQbJ6unbtFYuKOUAaLGnGpnq0uhIOSIfRC6G.jpg')
    .setFooter('Ronoserver Services - звено Статистики', 'https://images-ext-2.discordapp.net/external/SLnaCFfbKRV2BQGkU1zVy9VhwyqdeNXw5Fu-bNMJjCk/https/media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png')

if (msg.user != undefined)
              {
msg.reply({ embeds: [respecc] }).catch(err => {})
              }else{
                msg.channel.send({ embeds: [respecc] }).catch(err => {});;
              }
}

module.exports = { respeccCommand }