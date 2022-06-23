module.exports = (client) => {
    client.user.setActivity("!!help || Made By Limsathyacord", { type: "LISTENING" });
    console.log(`Logged in as ${client.user.tag}`);
  };