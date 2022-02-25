const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
	.setName('set')
	.setDescription('Устанавливает тему на Вашу карточку.')
	.addStringOption(option => option.setName('тема').setDescription('ID темы, которую требуется установить.')
  .setRequired(true))

  

  module.exports = {data}