const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
	.setName('setbadge')
	.setDescription('Устанавливает значок на Вашу карточку.')


  
	.addStringOption(option => option.setName('значок').setDescription('ID значка, который необходимо установить.')
  .setRequired(true))

    .addNumberOption(option => option.setName('место').setDescription('Место для значка. 1 - в правом верхнем углу карточки; 2 - возле профиля')
  .setRequired(false))

  

  module.exports = {data}