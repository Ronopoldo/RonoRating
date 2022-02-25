const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
	.setName('javascript')
	.setDescription('Выполняет команду в системе JavaScript. К команде идут модули: fs, client, args, MessageEmbed')
	.addStringOption(option => option.setName('команда_для_выполнения').setDescription('Команда на языке выполнения JavaScript')
  .setRequired(true))

  

  module.exports = {data}