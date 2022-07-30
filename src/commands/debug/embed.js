const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("embed").setDescription("Give you your embed"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
        .setTitle(`Wow embed!`)
        .setDescription('Yes lovely mmmmmmmm!!!!')
        .setColor(0xA97B2E)
        .setImage('https://c.tenor.com/ga3h1_li7SUAAAAC/discord-loading.gif')

        await interaction.reply({
            embeds: [embed]
        }) 
  },
};
