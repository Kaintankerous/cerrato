const Discord = require("discord.js");
const moment = require("moment");
var client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const fs = require("fs");
const http = require("http");
const express = require("express");
const app = express();


const discord_token = process.env.TOKEN;
const prefix = process.env.PREFIX;
const mongoose = require("mongodb").MongoClient;
var bugID = 0;
var appealID = 0;
var ticket = "randomname";
const maintenance = false




const https = require('https');
var Promise = require('bluebird');
var request = Promise.promisifyAll(require('request'), { multiArgs: true });



  setInterval(function() {
            console.log("Ping");
        }, 60 * 5000); 


var path = require('path');

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


app.get("/api/v2/sessionmanager", (req,res) => {
  res.status(200).send({
    
    sessions: [
      {
    type: 'cafe',
    status: 'false',
    host: 'player'
  },
      {
    type: 'training',
    status: 'false',
    host: 'player'
  },
                       ]
  })                  
    
})

app.get("/", (req,res) => {
res.sendFile(path.join(__dirname + '/html/maintenance.html'));  
})

app.get("/v2/test", (req,res) => {
res.sendFile(path.join(__dirname + '/html/index.html'));  
})

app.get("/styles/index", (req,res) => {
res.sendFile(path.join( __dirname + '/css/styles.css'));  
})

app.get("/v2/assets/global.js", (req,res) => {
  res.sendFile(path.join( __dirname + '/js/global.js'));  
  })

app.use(function (req, res, next) {
  res.status(404).send('Not Found')
  res.status(403).send('Forbidden')
  res.status(500).send('Internal Server Error')
  res.status(200).send('OK')
})
  



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


client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;

  // This is the best way to define args. Trust me.
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  
  const moment = require("moment");
require("moment-duration-format");
const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  
  
  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./commands/${command}.js`);
    if(!maintenance){
    commandFile.run(client, message, args, duration);
    }else{message.channel.send(error)}
  } catch (err) {
    console.error(err);
  }
  
  
  
  
  
  
  
  
  
});





client.on('ready', () => {
  
        client.user.setActivity("-help | Build 2.7.7", {
            type: "PLAYING"
        })

    
  
  client.channels.cache.get("713997712906780702").messages.fetch({around:"713998540510199870", limit: 1})
})



  let guild = client.guilds.cache.get('634334892267798528')
  
  
  client.on("messageDelete", (messageDelete) => {
    if(!messageDelete.author.bot && messageDelete.channel.id !== "662966370279096320" && messageDelete.content !== "-session" && messageDelete.content !== "-help"){
    client.channels.cache.get("662898382481915904").send(new Discord.MessageEmbed()
                          .setColor('#ffdb4d')
                          .setTitle('**MODERATION ACTIVITY**')
                           .addField('Deleted message!',"**user**: " + messageDelete.author.tag + "\n **message**: " + messageDelete.content, false)
                          .setFooter(`Message ID: ${messageDelete.id} | Author ID: ${messageDelete.author.id}`))
  } 
});

client.on("messageReactionAdd", (reaction, user) => {
    if(reaction.message.id == "713998540510199870"){
      
        let guild2 = client.guilds.cache.get('634334892267798528')
        
      
    if (reaction.emoji === client.emojis.cache.get("634945273361072128") && user.id !== client.user.id) {
      reaction.remove(user.id)
      reaction.message.react(client.emojis.cache.get("634945273361072128"))
      


      
      let category = client.channels.cache.get("713997712906780702")
       let name = ("bugcase-" + bugID);
       if(!maintenance){
      var ReportMessage2 = new Discord.MessageEmbed()
        .setTitle("**BUG CASE SUPPORT**")
.setDescription("Your report has been sent to our staff team, Please wait while this is reviewed.")
.setColor('#0x5268')
.setFooter("Created by WolfieTheDino.")
.addField("Information:", "** **", false)
.addField("Case-Id:", "``" + bugID + "``", false)
.addField("\n​", "\n​", false)
.addField("Please follow up below this message with a description of your report and wait until a representative claims this case.","\n​", false);
   
      
    guild2.channels.create(name, {
  type: 'text',
}).then(async m => {
      
        await m.setParent(category.id);
         m.send(user.toString(), ReportMessage2)
      
               
           m.updateOverwrite(guild2.id, {
  VIEW_CHANNEL: false,
  SEND_MESSAGE: false,
  READ_MESSAGE_HISTORY: false,
  ATTACH_FILES: false,
})
      
  m.updateOverwrite(user.id, {
  VIEW_CHANNEL: true,
  SEND_MESSAGE: true,
  READ_MESSAGE_HISTORY: true,
  ATTACH_FILES: true,
})
      
                 m.updateOverwrite('696976188760915988', {
  VIEW_CHANNEL: true,
  SEND_MESSAGE: true,
  READ_MESSAGE_HISTORY: true,
  ATTACH_FILES: true,
})
        
        
      })
    

mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true }, (err, clientt) => {
var dbo = clientt.db("CerratoDB");  
  appealID++
  bugID++
var ObjectId = require('mongodb').ObjectID
setTimeout(
    function() 
    {
dbo.collection("Data").updateOne({"_id" : ObjectId("5e892269acc84473a43f7e71")}, {$set: { "bugreport" : bugID}})
    }, 2);
})
         
       } 
    }else if (reaction.emoji === client.emojis.cache.get("634945273495289856") && user.id !== client.user.id) {
      reaction.remove(user.id)
      reaction.message.react(client.emojis.cache.get("634945273495289856"))
      
      
       if(!maintenance){
      
      
      let category = client.channels.cache.get("713997712906780702")
      
       let name2 = ("appealcase-" + appealID);
      
      var ReportMessage2 = new Discord.MessageEmbed()
        .setTitle("**APPEAL CASE SUPPORT**")
.setDescription("Your report has been sent to our staff team, Please wait while this is reviewed.")
.setColor('#0x5268')
.setFooter("Created by WolfieTheDino.")
.addField("Information:", "** **", false)
.addField("Case-Id:", "``" + appealID + "``", false)
.addField("\n​", "\n​", false)
.addField("Please follow up below this message with a description of your report and wait until a representative claims this case.", "\n​",false);
      
      
      
      
       guild2.channels.create(name2, {
  type: 'text',
}).then(async m => {
        await m.setParent(category.id);
         m.send(user.toString(), ReportMessage2)
   
                    m.updateOverwrite(guild2.id, {
  VIEW_CHANNEL: false,
  SEND_MESSAGE: false,
  READ_MESSAGE_HISTORY: false,
  ATTACH_FILES: false,
})
         
  m.updateOverwrite(user.id, {
  VIEW_CHANNEL: true,
  SEND_MESSAGE: true,
  READ_MESSAGE_HISTORY: true,
  ATTACH_FILES: true,
})
         
           m.updateOverwrite('696976188760915988', {
  VIEW_CHANNEL: true,
  SEND_MESSAGE: true,
  READ_MESSAGE_HISTORY: true,
  ATTACH_FILES: true,
})
         
        
        
      })
    

mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true }, (err, clientt) => {
var dbo = clientt.db("CerratoDB");  
  appealID++
  bugID++
var ObjectId = require('mongodb').ObjectID
setTimeout(
    function() 
    {
dbo.collection("Data").updateOne({"_id" : ObjectId("5e892269acc84473a43f7e71")}, {$set: { "appealreport" : appealID}})
    }, 2);
})
      
      
      
      
      
    }
      
          }}
          })




















client.on('ready', async () => {
  
    if (!maintenance) {

    }else{
      client.user.setActivity("MAINTENANCE MODE, STANDBY.", {
            type: "PLAYING"
        })
    }
})







         
        
client.login(process.env.TOKEN); //You need this