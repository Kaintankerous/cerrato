const Discord = module.require("discord.js");

var sess = "nil"
var av = false 
var link = "nil"
var img = "nil"

module.exports.run = async (client, message, args) => {
  
  
      if(message.member.roles.highest.position >= message.guild.roles.cache.get('676098301715677185').position ){
        message.channel.send("**SESSION MANAGER **\n <@" + message.author.id + ">, are you sure you want to announce a session?").then(msg => {
            msg.react('👍')
              setTimeout(function() {
                                        msg.react('👎')
                                    }, 100)
        

            client.on('messageReactionAdd', (reaction, user) => {
                if (reaction.emoji.name === '👍' && user.id == message.author.id) {
                  msg.delete()
                  
                  //662952069355012107
                  var sessmessage = "nil"
                  
                  if(message.member.roles.highest.position >= message.guild.roles.cache.get('676098301715677185').position ){
                   sessmessage = "**SESSION MANAGER **\n What type of session are you hosting? \n :red_square: **TRAINING** \n \n :green_square: **CAFE**"
                  }else{
                    sessmessage = "**SESSION MANAGER **\n What type of session are you hosting? \n \n :green_square: **CAFE**"
                  }
                  
                  
                  message.channel.send(sessmessage).then(messaging => {
                    
                    if(message.member.roles.highest.position >= message.guild.roles.cache.get('662952069355012107').position ){
                    setTimeout(function() {
                     messaging.react('🟥')
                                        messaging.react('🟩')
                       }, 3)
                    }else{
                      messaging.react('🟩')
                    }
                   
                  client.on('messageReactionAdd', (reaction, user) => {
                if (reaction.emoji.name === '🟥' && user.id == message.author.id) {
                  sess = "training"
                  av = true
                   img = "https://t3.rbxcdn.com/b3321be2505b0edd7af477d9cb664df9"
                  link = "https://www.roblox.com/games/4629743246/Training-Center-C"
                }else if (reaction.emoji.name === '🟨' && user.id == message.author.id) {
                  sess = "interview"
                  av = true
                  img = "https://t3.rbxcdn.com/b3321be2505b0edd7af477d9cb664df9"
                }else if (reaction.emoji.name === '🟩'  && user.id == message.author.id) {
                  sess = "cafe"
                  av = true
                  img = "https://t4.rbxcdn.com/27cff014bc76762575830b691109f782"
                  link = "https://www.roblox.com/games/4587273398/MASSIVE-SALE-Cerrato-Boba-Bar"
                }
                
                     if(av == true){
                    message.channel.send(`**What would you like the description to be?**`).then(async msgg => {
                      
                      av = false
                        message.delete()
                      messaging.delete()
                      
                      
                        await msgg.channel.awaitMessages(m => m.author.id == message.author.id, {
                                max: 1,
                                time: 300000,
                                errors: ["time"]
                            }).then(m => {
                           
                    
                           
                          
                                         

                                msgg.delete()
                          
                        
                          
                          const shiftembed = new Discord.MessageEmbed()
                          .setColor('#ffdb4d')
                          .setTitle('**NEW SESSION AVAILABLE!**')
                          .setDescription(`**HOST:** \n ${message.author.username}`)
                          .setURL(link)
                           .addField('**DESCRIPTION:**',m.first().content, false)
                          .addField('**INFORMATION**','**On notification of this session availability, you will be given 20 minutes to arrive before the session begins.**', false)
                          .addField('🔗',link,false)
                          .setImage(img)
                          .setFooter('CREATED BY WOLFIETHEDINO.')
                           
  
                           message.guild.roles.cache.get('697767444961296404').setMentionable(true).then(
                               client.channels.cache.get('663720129841856522').send("<@&697767444961296404>",shiftembed).then(mm => {
                                 message.guild.roles.cache.get('697767444961296404').setMentionable(false)   
                                  setTimeout(function() {
                                        mm.delete()
                                    
                                     const shift2embed = new Discord.MessageEmbed()
                          .setColor('#ffdb4d')
                          .setTitle('**SESSION LOCKED!**')
                          .setDescription(`**AUTOMATICALLY LOCKED!** \n this session has been announced for 20 minutes and has now been automatically server locked!`)
                          .setFooter('CREATED BY WOLFIETHEDINO.')
                           
  
                           
                               client.channels.cache.get('663720129841856522').send(shift2embed).then(mmm => {
                                  setTimeout(function() {
                                        mmm.delete()
                                    }, 1200000)
                                 
                               })
                              
                                    
                                    
                                    }, 1200000)
                                 
                               })
                              )
                          
                          client.channels.cache.get("662898382481915904").send(new Discord.MessageEmbed()
                          .setColor('#ffdb4d')
                          .setTitle('**MODERATION ACTIVITY**')
                           .addField('Session!',message.author.username + " created a session: " + sess, false)
                          .setFooter('CREATED BY WOLFIETHEDINO.'))
                          
                                
                            }).catch(() => {
                                message.channel.send(":hourglass: **Timed out.**").then(
                                    setTimeout(function() {
                                        message.delete()
                                    }, 2000))
                            });
                    
                    })
                  
   } })  })
                  
                } else if (reaction.emoji.name === '👎' && user.id !== client.user.id) {
                    msg.delete()
                  message.delete()
                }
            
            })
        
        })
        
      }else
        message.channel.send(new Discord.MessageEmbed().setTitle("**ERROR**").setDescription("You must be a session manager to run this!").setFooter("Created by WolfieTheDino."))
        
      
      
}

module.exports.help = {
   category: "Admin",
    name: "session",
    description: "Announces a shift.",
    usage: "session"
}