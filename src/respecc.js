function respeccCommand(msg, MessageEmbed ) {

const respecc = new MessageEmbed()
    .setColor('#371680')
    .setTitle('Большая шишка [НАСТОЯЩАЯ]')
    .setAuthor('Atom.net_Official#7461 / TheEnd#7461 / Zenith#7461', 'https://media.discordapp.net/attachments/698853696817070164/911547857159467059/prize-clipart-transparent-background-4-removebg-preview.png', 'https://www.youtube.com/channel/UCsiBJYVGCTvTAQ0R-k44_pA')
    .setDescription('**__<@658235822079868942>__ - очень активная личность сервера. Зашёл в конце 2020-го года, но основную активность начал проявлять в 2022. Мы очень благодарны ему за всё время, которое он уделяет серверу.\nТакже, в 2022 году стал модератором и продолжает активно общаться.**')
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