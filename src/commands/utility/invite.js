const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const inviteButton = new discord.MessageButton()
    .setLabel("Invite Me")
    .setStyle("LINK")
    .setURL("https://discord.com/api/oauth2/authorize?client_id=864334741741109278&permissions=8&scope=bot%20applications.commands");

  const row = new discord.MessageActionRow().addComponents(inviteButton);

  message.reply({
    content: "Click the below button to Invite Me on your server",
    components: [row],
  });
};

module.exports.config = {
  name: "invite",
  aliases: ["socialguyinvite"],
};