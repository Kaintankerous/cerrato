const Discord = module.require("discord.js");

var error = new Discord.MessageEmbed()
      .setTitle("**ERROR**")
.setDescription("There is currently on-going maintenance")
.setFooter("Created by WolfieTheDino.")




module.exports.run = async (client, message, args) => {
  
  
    if(message.author.id == 661172113897684994){
    const rules = new Discord.MessageEmbed()
                          .setColor('#ffdb4d')
                          .setTitle('**CERRATO SESSIONS**')
                          .setDescription(`At times a session is hosted, it will be posted 15-20 minutes prior to the session beginning and will be deleted once the session begins.`)
                          .addField('\u200b','\u200b', false)
                          .addField('**NO MESSAGES?**',"There currently isn't any sessions that is currently on, you have missed it!", false)
                          .addField("**DIDN'T RECEIVE PINGS?**",'You can opt-in or opt-out of session pings using -opt in #bot-commands, this is to reduce unwanted pings to some users!', false)
                          .addField('\u200b','\u200b', false)
                          .setFooter('CREATED BY WOLFIETHEDINO.')
                    
                               message.channel.send(rules)
    }
  
}

module.exports.help = {
    category: "Private",
    name: "rules",
    description: "Jake's Rules",
    usage: "rules"
}