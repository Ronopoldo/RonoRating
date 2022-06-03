const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
	.setName('debug')
	.setDescription("Включить/выключить режим откладки (для опытных пользователей и тестеров)")
  module.exports = {data}