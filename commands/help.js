const Discord = module.require("discord.js");

var error = new Discord.MessageEmbed()
      .setTitle("**ERROR**")
.setDescription("There is currently on-going maintenance")
.setFooter("Created by WolfieTheDino.")



const prefix = "-"


module.exports.run = async (bot, message, args) => {





        let Sembed = new Discord.MessageEmbed()
        .setColor('#ffdb4d')
        .setAuthor(`Help`, message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setDescription(`These are the avaliable commands for the Cerrato!\nThe bot prefix is: ${prefix}`)
        .addField(`Customer Support Commands:`, "``claim`` ``complete``")
        .addField(`User Commands:`, "``help`` ``opt`` ``ping`` ``suggest <text>``")
        .addField(`Admin Commands:`, "``purge <number>`` ``session``")
        .addField(`Reserved Commands:`, "``console``")
        
        .setFooter("Created by WolfieTheDino")
        message.channel.send(Sembed).then(m => m.delete(1000));
    
}




module.exports.help = {
    category: "User",
    name: "opt",
    description: "Opts in/out to sessions",
    usage: "opt"
}

