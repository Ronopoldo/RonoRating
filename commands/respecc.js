const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
	.setName('respecc')
	.setDescription('Загружает последние данные из доски почёта.')

  module.exports = {data}