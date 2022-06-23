const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const infoEmbed = new discord.MessageEmbed()
    .setColor("#F773D9")
    .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
    .setTitle("XG Covid Tracking's Info")
    .setDescription("Here's some basic information about myself")
    .addField("My Prefix", "!!", false)
    .addField("My Usertag", "XG Covid Tracking#5616", false)
    .addField(
      "My Developer's Usertag",
      "<@594195050242768899>",
      false
    )
    .addField("I was developed on", "June 23rd 2021")
    .setFooter({
      text: "Invite me to your server by using the !!invite command",
    })
    .setTimestamp();

  const inviteButton = new discord.MessageButton()
    .setLabel("Invite Me")
    .setStyle("LINK")
    .setURL("https://discord.com/api/oauth2/authorize?client_id=864334741741109278&permissions=8&scope=bot%20applications.commands");

  const voteButton = new discord.MessageButton()
    .setLabel("Vote Me on top.gg")
    .setStyle("LINK")
    .setURL("");

  const supportButton = new discord.MessageButton()
    .setLabel("Join my Support Server")
    .setStyle("LINK")
    .setURL("discord.limsathyacord.xyz" || "https://discord.gg/PTGzEysqjf");

  const buttonRow = new discord.MessageActionRow().addComponents(
    inviteButton,
    voteButton,
    supportButton
  );

  message.reply({
    embeds: [infoEmbed],
    components: [buttonRow],
  });
};

module.exports.config = {
  name: "info",
  aliases: ["info, in"],
};