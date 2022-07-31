const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Gives you the server info!'),
	async execute(interaction) {
        
		await interaction.reply(`**Server name:** ${interaction.guild.name}\n**Total members:** ${interaction.guild.memberCount}\n**Server Created:** ${interaction.guild.createdAt}, Verification level: ${interaction.guild.verificationLevel}`);
	},
};