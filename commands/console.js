const Discord = module.require("discord.js");

 
var error = new Discord.MessageEmbed()
      .setTitle("**ERROR**")
.setDescription("There is currently on-going maintenance")
.setFooter("Created by WolfieTheDino.")




module.exports.run = async (client, message, args, uptime) => {
    
  
 if(message.author.id == 661172113897684994){
      var ping = "Your ping is `" + `${Date.now() - message.createdTimestamp}` + " ms`"
      var members = client.guilds.cache.get('634334892267798528').memberCount
      
      const console = new Discord.MessageEmbed()
                          .setColor('#ffdb4d')
                          .setTitle('**DEVELOPER CONSOLE**')
                          .setDescription(`**This console is dedicated to WolfieTheDino for any maintance and/or any logging with the bots systems.**`)
                          .addField('**INFORMATION**','\u200b', false)
                          .addField('PING',ping,false)
                          .addField('MEMBER COUNT',members,false)
                          .addField('UPTIME',uptime,false)
                          .addField('PREFIX','"-"',false)
                          .setFooter('JOEL WAS HERE.')
                    
                               message.channel.send(console)
      
    }
  

  
}

module.exports.help = {
    category: "Private",
    name: "console",
    description: "Jake's Console",
    usage: "console"
}