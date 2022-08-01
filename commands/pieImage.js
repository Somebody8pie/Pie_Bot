const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pie')
		.setDescription('Sends an image of pie'),
	async execute(interaction) {
        const message = 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/ac/Pumpkin_Pie_JE2_BE2.png'
		await interaction.reply({
            content: message
        });
	},
};