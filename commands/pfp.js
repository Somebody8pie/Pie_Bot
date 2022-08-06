const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pfp')
		.setDescription('Displays a users PFP')
        .addUserOption(option => 
			option.setName("user")
			.setDescription("The user to get the pfp from")),
	async execute(interaction) {
        const member = interaction.options.getMember("user") || interaction.member
        const url = member.user.displayAvatarURL({ dynamic: true, size: 256 })
        const embed = new EmbedBuilder()
            .setColor(0xa97b2e)
            .setImage(url)
        interaction.reply({
            embeds: [embed],
        })
	},
};