const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('welcome')
		.setDescription('Sends the welcome message'),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle(`Yay you verified do this now!!`)
            .setDescription(`Customize your profile with<#985285938286571536>\n\n• Setup your <#990717682766725181>\n\n**• And see our**<#997557829558866012>`)
            .setColor(0xa97b2e)
        
        await interaction.reply({
            embeds: [embed]
        })
    }
}