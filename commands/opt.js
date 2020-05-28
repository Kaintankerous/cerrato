const Discord = module.require("discord.js");

var error = new Discord.MessageEmbed()
      .setTitle("**ERROR**")
.setDescription("There is currently on-going maintenance")
.setFooter("Created by WolfieTheDino.")

module.exports.run = async (client, message, args) => {
   var opt = "nil"
    if(message.member.roles.cache.has('697767444961296404')){ 
      message.member.roles.remove("697767444961296404")
      opt = "out"
    }else{
       message.member.roles.add("697767444961296404")
      opt = "in"
    }
    
     const optt = new Discord.MessageEmbed()
                          .setColor('#ffdb4d')
                          .setTitle('**SESSION PING OPT**')
                           .addField('**You have successfully opted:**',opt, false)
                          .setFooter('CREATED BY WOLFIETHEDINO.')
                    
                               message.channel.send(optt)
    
    
}

module.exports.help = {
    category: "User",
    name: "opt",
    description: "Opts in/out to sessions",
    usage: "opt"
}