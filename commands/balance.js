const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
	.setName('balance')
	.setDescription('Показывает точный баланс пользователя.ю')
	.addUserOption(option => option.setName('пользователь').setDescription('Пользователь для проверки баланса.'))

  module.exports = {data}