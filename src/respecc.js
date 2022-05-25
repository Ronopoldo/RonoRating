function respeccCommand(msg, MessageEmbed ) {

  if (msg.content == '/respecc')
  {
    msg.channel.messages.fetch(`973323012176752710`).then(message => {
                

const respecc = new MessageEmbed()
    .setColor('#38b316')
    .setTitle('Активный модератор')
    .setAuthor('Krit#2097', 'https://media.discordapp.net/attachments/698853696817070164/911547857159467059/prize-clipart-transparent-background-4-removebg-preview.png')
    .setDescription("**__<@558998981389189140>__ - активный модератор на сервере, который находится на сервере с 21 декабря 2020 года.**")
    .setThumbnail('https://media.discordapp.net/attachments/698853696817070164/977864585199648768/710a6ea585a9be16bf034e2fd1c7fbac.png')
    .setFooter('Ronoserver Services - звено Статистики', 'https://images-ext-2.discordapp.net/external/SLnaCFfbKRV2BQGkU1zVy9VhwyqdeNXw5Fu-bNMJjCk/https/media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png')


message.edit({ content: '||\n||',
      embeds: [respecc] });

            }).catch(err => {
                console.error(err);
            });
  }

}
module.exports = { respeccCommand }