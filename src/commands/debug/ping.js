const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("ping").setDescription("How laggy?"),
  async execute(interaction, client) {
    const message = await interaction.deferReply({
      fetchReply: true,
    });

    const newMessage = `API lag: ${client.ws.ping}ms Message lag: ${message.createdTimestamp - interaction.createdTimestamp}ms`
    await interaction.editReply({
        content: newMessage
    })

  },
};
