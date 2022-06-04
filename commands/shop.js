const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
	.setName('shop')
	.setDescription('Показать магазин карточек.')
  .addNumberOption(option => option.setName("страница").setDescription('Номер страницы магазина'))

  module.exports = {data}