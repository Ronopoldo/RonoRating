function test(msg, client, args, MessageActionRow, MessageButton) {

    const btn1 = new MessageButton()
					.setCustomId('next111')
					.setLabel('Next111')
					.setStyle('PRIMARY');

    const btn2 = new MessageButton()
					.setCustomId('previous111')
					.setLabel('Previous111')
					.setStyle('PRIMARY');

		const row = new MessageActionRow()
			.addComponents(btn1, btn2);

		msg.reply({ content: 'Pong!', components: [row] });


}
module.exports = { test }