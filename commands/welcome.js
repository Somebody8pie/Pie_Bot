const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('welcome')
		.setDescription('Sends the welcome message'),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle(`Yay you verified do this now!!`)
            .setDescription(`• Customize your profile with<#985285938286571536>\n\n• Setup your <#990717682766725181>\n\n**• And see our**<#997557829558866012>`)
            .setColor(0xa97b2e)
            .setAuthor({
                iconURL: interaction.user.avatarURL(),
                name: interaction.user.tag
            })  
            .setThumbnail(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/313/waving-hand_1f44b.png`)
        await interaction.reply({
            embeds: [embed]
        })
    }
}