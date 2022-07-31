const { SlashCommandBuilder } = require('discord.js')
const { EmbedBuilder } = require(`discord.js`);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Shows your user info!'),
	async execute(interaction) {
		let bot = 'No'
		if(interaction.user.bot === true) bot = 'Yes'
		const embed = new EmbedBuilder()
			.setAuthor({
				iconURL: interaction.user.avatarURL(),
				name: interaction.user.tag
			})
			.setDescription(`**Id: **${interaction.user.id}\n**Created: **${Date.now() - interaction.user.createdTimestamp}\n**Bot: **${bot}`)
			.setThumbnail(interaction.user.avatarURL())
			.setColor(0xa97b2e)
		await interaction.reply({
			embeds: [embed],
		});
	},
};