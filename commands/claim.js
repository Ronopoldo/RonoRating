const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
	.setName('claim')
	.setDescription('Позволяет получить карточку при начичии ключа доступа.')
	.addStringOption(option => option.setName('ключ').setDescription('Ключ для получения темы.')
  .setRequired(true))

  

  module.exports = {data}