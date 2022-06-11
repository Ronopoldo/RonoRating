const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
	.setName('sticker')
	.setDescription('Управление стикерами.')

	.addSubcommand(subcommand =>
		subcommand
			.setName('position')
			.setDescription('Изменить положение стикера')
			.addNumberOption(option => option.setName('номер').setDescription('Номер стикера, с которым нужно работать (от 1 до 5)')
			.setRequired(true))
			.addNumberOption(option => option.setName('x').setDescription('Положение по оси X (до 1000)')
			.setRequired(true))
			.addNumberOption(option => option.setName('y').setDescription('Положение по оси Y (до 1000)')
			.setRequired(true)))

			.addSubcommand(subcommand =>
				subcommand
					.setName('rotation')
					.setDescription('Изменить поворот стикера')
					.addNumberOption(option => option.setName('номер').setDescription('Номер стикера, с которым нужно работать (от 1 до 5)')
					.setRequired(true))
					.addNumberOption(option => option.setName('поворот').setDescription('Угол наклона у стикера (0 по умолчанию)')
					.setRequired(true)))

			.addSubcommand(subcommand =>
				subcommand
					.setName('size')
							.setDescription('Изменить размер стикера')
							.addNumberOption(option => option.setName('номер').setDescription('Номер стикера, с которым нужно работать (от 1 до 5)')
							.setRequired(true))
							.addNumberOption(option => option.setName('x').setDescription('Размер по оси X (до 1000)')
							.setRequired(true))
							.addNumberOption(option => option.setName('y').setDescription('Размер по оси Y (работает нестабильно - лучше оставить пустым)')))

			.addSubcommand(subcommand =>
								subcommand
									.setName('set')
											.setDescription('Изменить установленный стикер')
											.addNumberOption(option => option.setName('номер').setDescription('Номер стикера, с которым нужно работать (от 1 до 5)')
											.setRequired(true))
											.addStringOption(option => option.setName('название').setDescription('Название стикера, который Вы хотите поставить.')
											.setRequired(true)))
			.addSubcommand(subcommand =>
								subcommand
									.setName('clear')
											.setDescription('Убрать установленный стикер')
											.addNumberOption(option => option.setName('номер').setDescription('Номер стикера, который надо убрать')
											.setRequired(true)))

  module.exports = {data}