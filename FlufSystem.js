const Discord = require('discord.js')
const Fluf = new Discord.Client();

Fluf.on('ready', () => {
Fluf.user.setActivity("Fluffing around")
Fluf.user.setStatus("idle")
});



Fluf.on('message', message => {
    if (message.content.startsWith("!Owner")) {
	    message.channel.send("Activating Owner Mode")
if (message.author.id === "498186211249225728") {  
  message.channel.send("Hi and welcome to Fluf Bot Owner Mode! maintained by DogeOS Created by ThatPhoenix")
message.channel.send("The Current Owners of DogeOS is President Doge & ThatPhoenix")
message.channel.send("The commands have not been created yet so fuck off and come back soon")
}
	    if (message.author.id === "441980353242988545") {  
  message.channel.send("Hi and welcome to Fluf Bot Owner Mode! maintained by DogeOS Created by ThatPhoenix")
message.channel.send("The Current Owners of DogeOS is President Doge & ThatPhoenix")
message.channel.send("The commands have not been created yet so fuck off and come back soon")
}
    }
    })


 Fluf.on('message', message => {
    if (message.content.startsWith("!Vip")) {   
	    if (message.author.id === "498186211249225728") {
		message.channel.send("Hi and welcome to Fluf Bot V.I.P Mode! maintained by DogeOS Created by ThatPhoenix")
message.channel.send("You will soon have BETA Command access so fuck off and come back soon")
	    }

	    if (message.author.id === "237579126171631617") {  
  message.channel.send("Hi and welcome to Fluf Bot V.I.P Mode! maintained by DogeOS Created by ThatPhoenix")
message.channel.send("You will soon have BETA Command access so fuck off and come back soon")
	    }
    	    

    if (message.author.id === "441980353242988545") {  
  message.channel.send("Hi and welcome to Fluf Bot V.I.P Mode! maintained by DogeOS Created by ThatPhoenix")
message.channel.send("You will soon have BETA Command access so fuck off and come back soon")
}
    }	    
});

Fluf.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:

  const channel = member.guild.channels.find(ch => ch.name === 'welcomes');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member

  channel.send(`:tada: Never Going To Give ${member} Up Never Gonna Let ${member} Down.`);
});


Fluf.on('guildMemberRemove', member => {
  // Send the message to a designated channel on a server:

  const channel = member.guild.channels.find(ch => ch.name === 'welcomes');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member

  channel.send(`:sob: ${member} left, plz nerf ok.`);
});






Fluf.login(process.env.FlufTK)
