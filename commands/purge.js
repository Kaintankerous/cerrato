const Discord = module.require("discord.js");

var error = new Discord.MessageEmbed()
      .setTitle("**ERROR**")
.setDescription("There is currently on-going maintenance")
.setFooter("Created by WolfieTheDino.")

module.exports.run = async (client, message, args) => {
  
          var args = message.content.substring(1).split(" ");
    var command = args[0].toLowerCase();                          
      
     if( message.member.roles.cache.has('695634951403733043') ){
  if(!isNaN(args[1])){
    message.channel.send("Initialising purge...")
    setTimeout(function(){
      if(args[1] >= 1 && args[1] <= 100)
      message.channel.bulkDelete(args[1]);
  }, 2000)
    
    client.channels.cache.get("662898382481915904").send(new Discord.MessageEmbed()
                          .setColor('#ffdb4d')
                          .setTitle('**MODERATION ACTIVITY**')
                           .addField('Purged!',message.author.username + " purged " + args[1] + " messages.", false)
                          .setFooter('CREATED BY WOLFIETHEDINO.'))
    
    
  }else{
    message.channel.send(new Discord.MessageEmbed().setTitle("**ERROR**").setDescription("Please input a number integer only!").setFooter("Created by WolfieTheDino."))
  }
  }else
  message.channel.send(new Discord.MessageEmbed().setTitle("**ERROR**").setDescription("You must be a moderator to run this!").setFooter("Created by WolfieTheDino."))


  
}

module.exports.help = {
    category: "User",
    name: "suggest",
    description: "Makes a suggestion",
    usage: "suggest"
}