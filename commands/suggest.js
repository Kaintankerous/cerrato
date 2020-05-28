const Discord = module.require("discord.js");

var error = new Discord.MessageEmbed()
      .setTitle("**ERROR**")
.setDescription("There is currently on-going maintenance")
.setFooter("Created by WolfieTheDino.")

module.exports.run = async (client, message, args) => {
    
 
   var suggestarg = message.content.substr("!suggest ".length);
                    
       
      const sugg2 = new Discord.MessageEmbed()
                          .setColor('#ffdb4d')
                          .setTitle('**SUGGESION SENT!**')
                           .addField('**Your suggestion has been submitted**',"\u200b", false)
                          .setFooter('CREATED BY WOLFIETHEDINO.')
                    
                               message.channel.send("<#713994530935799808>",sugg2)
       
            const suggestembed = new Discord.MessageEmbed()
                          .setColor('#ffdb4d')
                          .setTitle('**INCOMING SUGGESTION!**')
                           .addField('**SUGGESTION:**',suggestarg, false)
                           .addField('**CREATED BY:**',message.member.user.tag, false)
                          .setFooter('CREATED BY WOLFIETHEDINO.')
            
                               client.channels.cache.get("713994530935799808").send(suggestembed).then(msg => {
                  
                                 msg.react(client.emojis.cache.get("634945273361072128"))
              setTimeout(function() {
                                        msg.react(client.emojis.cache.get("634945273495289856"))
                                    }, 100)
                                 
                                 
                               }
                                                                 )
      
     

  
}

module.exports.help = {
    category: "User",
    name: "suggest",
    description: "Makes a suggestion",
    usage: "suggest"
}