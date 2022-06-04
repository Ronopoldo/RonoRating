const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
	.setName('buy')
	.setDescription('Команда для покупки темы из магазина.')
	.addStringOption(option => option.setName('тема').setDescription('Айди темы, которую надо купить (надпись снизу)')
  .setRequired(true))

  

  module.exports = {data}