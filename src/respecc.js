function respeccCommand(msg, MessageEmbed ) {

const respecc = new MessageEmbed()
    .setColor('#ADD8E6')
    .setTitle('Хороший админ и активный член сервера')
    .setAuthor('NeksiCola#8756', 'https://media.discordapp.net/attachments/698853696817070164/911547857159467059/prize-clipart-transparent-background-4-removebg-preview.png', 'https://www.youtube.com/channel/UCtLSPDoaGHKI2VvZFN-BdXQ')
    .setDescription('**__<@609701912643764244>__ - самый адекватный и добрый член сервера (по мнению большинства). Находится на нём с июня 2020 года, но наибольшую активность начал проявлять летом 2021 года. Является одним из самых снисходительных админов и практически не имеет врагов.**')
    .setThumbnail('https://media.discordapp.net/attachments/698853696817070164/917743627797663744/41acc11dce25bc3cfbe0707148870782f7477a01r1-644-835v2_hq_2.jpg')
    .setFooter('Ronoserver Services - звено Статистики', 'https://images-ext-2.discordapp.net/external/SLnaCFfbKRV2BQGkU1zVy9VhwyqdeNXw5Fu-bNMJjCk/https/media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png')


msg.channel.send({ embeds: [respecc] });
}

module.exports = { respeccCommand }