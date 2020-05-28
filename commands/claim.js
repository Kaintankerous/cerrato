const Discord = module.require("discord.js");
const mongoose = require("mongodb").MongoClient;

var bugID = 0;
var appealID = 0;
var ticket = "randomname";


mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true }, (err, clientt) => {
    
var dbo = clientt.db("CerratoDB");  
dbo.collection("Data").find({}, { projection: { _id: 0, bugreport: 1, appealreport: 1} }).toArray(function(err, result) {
  console.log(result[0].bugreport)
 bugID = result[0].bugreport
  appealID = result[0].appealreport
});
})


var error = new Discord.MessageEmbed()
      .setTitle("**ERROR**")
.setDescription("There is currently on-going maintenance")
.setFooter("Created by WolfieTheDino.")

module.exports.run = async (client, message, args) => {
   
  
   if (message.channel.name.slice(0,7) == "bugcase" || message.channel.name.slice(0,10) == "appealcase"){
       if (!message.member.roles.cache.some(r=>["696976188760915988"].includes(r.id)) ) return;
      var Representative = new Discord.MessageEmbed()
      .setTitle("**REPRESENTATIVE**")
.setDescription("Username: **" + message.author.username + "**")
.setColor('#0x5268')
.addField("\n​", "\n​", false)
.setFooter("Created by WolfieTheDino.")
.addField("Whats going on?", "One of our representatives are now reviewing your report and will speak to you about this situation!", false)
.addField("\n​", "\n​", false)
.addField("**ERROR?**","Problem with this representative? Contact a corporate officer to address this case to another representative.", false);
message.delete()
message.channel.send(Representative)
ticket = message.channel.name
       
       client.channels.cache.get("662898382481915904").send(new Discord.MessageEmbed()
                          .setColor('#ffdb4d')
                          .setTitle('**CUSTOMER SUPPORT LOG**')
                           .addField('Ticket Claimed!',message.author.username + " claimed the ticket " + message.channel.name, false)
                          .setFooter('CREATED BY WOLFIETHEDINO.'))
       
       
     }else{
  message.reply(error)
}
      
  }
  
  

module.exports.help = {
    category: "Customer Support",
    name: "claim",
    description: "Claims tickets",
    usage: "claim"
}