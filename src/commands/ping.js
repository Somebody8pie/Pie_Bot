const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Says pong'),
	async execute(interaction, client, message) {
        const embed = new EmbedBuilder()
            .setAuthor({
                iconURL: `https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/ac/Pumpkin_Pie_JE2_BE2.png/`,
                name: interaction.client.user.tag
            })
            .setTitle(`**Here is the Lag`)
            .setDescription(`**Message Lag:** ${Date.now() - interaction.createdTimestamp}ms\n**API Lag: **${interaction.client.ws.ping}ms `)
            .setColor(0xa97b2e)

        interaction.reply({
            embeds: [embed]
        })
    }
};
