const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('How laggy is it?'),
	async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle(`Here is the lag!`)
            .setAuthor({
                iconURL: interaction.user.avatarURL(),
                name: interaction.user.tag
            })
            .setDescription(`**Message lag: **${Date.now() - interaction.createdTimestamp}ms\n**API lag: **${interaction.client.ws.ping}ms`)
            .setThumbnail(`https://images-ext-2.discordapp.net/external/bNSdPN0_Bn22qCJSCJrxpb7_CvyEwt3I0YvhVtQiZ3I/https/cdn3.emoji.gg/emojis/3657-the-connection-is-good.png`)
            .setFooter({
                iconURL: interaction.client.user.displayAvatarURL(),
                text: interaction.client.user.tag
            })
            .setColor(0xa97b2e)
		await interaction.reply({
            embeds: [embed]
        });
	},
};
