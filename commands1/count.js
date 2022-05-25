const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
	.setName('count')
	.setDescription('Узнать текущее число для канала #счёт')

  module.exports = {data}