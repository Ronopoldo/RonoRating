function respeccCommand(msg, MessageEmbed ) {

const respecc = new MessageEmbed()
    .setColor('#0000CD')
    .setTitle('Крупнейший вклад')
    .setAuthor('ZriUT#8024', 'https://media.discordapp.net/attachments/698853696817070164/911547857159467059/prize-clipart-transparent-background-4-removebg-preview.png', 'https://www.youtube.com/channel/UCxVrC_PoMh1euv8k3OvbG6Q')
    .setDescription('**__<@706428924757934143>__ - член сервера, принявший огромнейшее участие в его жизни. Оказал большое влияние на Ronopoldo. Находится на нём с 3 мая 2020 года, что подтверждает статус ветерана. Проводил множество ивентов на сервере, многие сроки был администратором/модератором. Бо́льшую часть время провождения в Discord уделяет именно нашему серверу.\nЕго вклад стал одним из самых больших среди всех членов сервера.\nСпасибо огромное, Сенко.**')
    .setThumbnail('https://media.discordapp.net/attachments/698853696817070164/969944086742183946/f5F8Z6666QGQyloA_ofdqgB74Gt-Wtjea5lzHpv64wgcvi_ndUD3aOqsp69RAIfWf1PxpsvxYXDQ0GyORY9aDRlu.jpg?width=679&height=670')
    .setFooter('Ronoserver Services - звено Статистики', 'https://images-ext-2.discordapp.net/external/SLnaCFfbKRV2BQGkU1zVy9VhwyqdeNXw5Fu-bNMJjCk/https/media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png')

if (msg.user != undefined)
              {
msg.reply({ embeds: [respecc] }).catch(err => {})
              }else{
                msg.channel.send({ embeds: [respecc] }).catch(err => {});;
              }
}

module.exports = { respeccCommand }