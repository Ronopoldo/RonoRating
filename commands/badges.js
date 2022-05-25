const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
	.setName('badges')
	.setDescription('Просмотреть значки пользователя.')
	.addUserOption(option => option.setName('пользователь').setDescription('Пользователь, чьи значки нужно проверить'))

  

  module.exports = {data}