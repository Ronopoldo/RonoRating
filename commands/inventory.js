const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
	.setName('inventory')
	.setDescription('Показать инвентарь пользователя.')
  .addUserOption(option => option.setName('пользователь').setDescription('Пользователь, инвентарь которого требуется показать'))
  .addNumberOption(option => option.setName("страница").setDescription('Номер страницы магазина'))

  module.exports = {data}