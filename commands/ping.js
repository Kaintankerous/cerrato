const Discord = module.require("discord.js");

var error = new Discord.MessageEmbed()
      .setTitle("**ERROR**")
.setDescription("There is currently on-going maintenance")
.setFooter("Created by WolfieTheDino.")

module.exports.run = async (client, message, args) => {
    await message.channel.send(`${Date.now() - message.createdTimestamp}ms`);
}

module.exports.help = {
    category: "User",
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}