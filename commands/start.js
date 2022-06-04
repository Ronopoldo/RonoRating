const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
	.setName('start')
	.setDescription('Создать учётную запись в RonoRating.')
  module.exports = {data}