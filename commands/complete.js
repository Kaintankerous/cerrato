const Discord = module.require("discord.js");

var error = new Discord.MessageEmbed()
      .setTitle("**ERROR**")
.setDescription("There is currently on-going maintenance")
.setFooter("Created by WolfieTheDino.")

module.exports.run = async (client, message, args) => {
          if (message.channel.name.slice(0,7) == "bugcase" || message.channel.name.slice(0,10) == "appealcase"){
      if (!message.member.roles.cache.some(r=>["696976188760915988"].includes(r.id)) ) return;

      var Complete = new Discord.MessageEmbed()
      .setTitle("**CASE CLOSED!**")
.setDescription("**The representative of this ticket has claimed this ticket as complete!**")
.setColor('#0x5268')
.addField("\n​", "\n​", false)
.setFooter("Created by WolfieTheDino.")
.addField("THIS TICKET WILL CLOSE AUTOMATICALLY IN 2 MINUTES", "Believe this was not completed? Speak to Corporate Officer!", false);


message.delete();
message.channel.send(Complete)

            
            let category = client.channels.cache.get("713999777037156382")
      message.channel.setParent(category.id);

setTimeout(
  function() 
  {
    
    
    message.channel.setParent('713999777037156382');
    message.channel.lockPermissions('713999777037156382');
               message.channel.updateOverwrite('696976188760915988', {
  VIEW_CHANNEL: true,
  SEND_MESSAGE: true,
  READ_MESSAGE_HISTORY: true,
  ATTACH_FILES: true,
})
  }, 120);
}
        
        client.channels.cache.get("662898382481915904").send(new Discord.MessageEmbed()
                          .setColor('#ffdb4d')
                          .setTitle('**CUSTOMER SUPPORT LOG**')
                           .addField('Ticket Complete!',message.author.username + " completed the ticket " + message.channel.name, false)
                          .setFooter('CREATED BY WOLFIETHEDINO.'))
        
        

}

module.exports.help = {
    category: "Customer Support",
    name: "complete",
    description: "Completes a ticket",
    usage: "complete"
}