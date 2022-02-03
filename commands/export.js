const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
	.setName('export')
	.setDescription("Экспортировать ваши данные из Базы Данных RonoRating'а")
  module.exports = {data}