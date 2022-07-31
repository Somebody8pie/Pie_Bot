const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('How laggy is it?'),
	async execute(interaction, message) {
        const embed = new EmbedBuilder()
            .setTitle(`Here is the lag!`)
            .setAuthor({
                iconUrl: interaction.user.displayAvatarURL(),
                name: interaction.user.tag
            })
            .setDescription(Date.now() - message.createdTimestamp)
		await interaction.reply({
            embeds: [embed]
        });
	},
};
