const { SlashCommandBuilder } = require('discord.js')
const { EmbedBuilder } = require(`discord.js`);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Shows your user info!')
		.addUserOption(option => 
			option.setName("user")
			.setDescription("The user you want info from")),
	async execute(interaction) {
		const member = interaction.options.getMember("user") || interaction.member
		const embed = new EmbedBuilder()
			.setAuthor({
				iconURL: member.user.avatarURL(),
				name: member.user.tag
			})
			.addFields([
				{
					name: `__**Id**__`,
					value: member.user.id,
					inline: true
				},
				{
					name: `__**Created**__`,
					value: `${member.user.createdAt}`,
					inline: true
				},
				{
					name: `__**Joined**__`,
					value: `${member.joinedAt}`,
					inline: true
				},
				{
					name: `__**Bot**__`,
					value: member.user.bot ? 'Yes' : 'No',
					inline: true
				}
			])
			.setThumbnail(member.user.avatarURL())
			.setColor(0xa97b2e)
		await interaction.reply({
			embeds: [embed],
		});
	},
};