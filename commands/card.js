const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
	.setName('card')
	.setDescription('Загружает карточку пользователя.')
	.addUserOption(option => option.setName('пользователь').setDescription('Владелец карточки'))

  module.exports = {data}