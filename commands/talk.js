const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('talk')
		.setDescription('Talk like Pie Bot')
        .addStringOption(option => 
			option.setName("input")
			.setDescription("The message")
            .setRequired(true)),
	async execute(interaction) {
        const input = interaction.options.getString("input")
        await interaction.reply({
            content: input
        })
	},
};