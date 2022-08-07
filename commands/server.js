const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Gives you the server info!'),
	async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle(`Server Info`)
            .setAuthor({
                iconURL: interaction.guild.iconURL(),
                name: interaction.guild.name
            })
            .setDescription(`:people_hugging: **Total members:** ${interaction.guild.memberCount}\n\n**:star: Server Created:** ${interaction.guild.createdAt}\n\n:warning: **Verification level: **${interaction.guild.verificationLevel}`)
            .setFooter({
                iconURL: interaction.client.user.displayAvatarURL(),
                text: interaction.client.user.tag
            })
            .setColor(0xa97b2e)
            await interaction.reply({
                embeds: [embed]
            })
	},
};