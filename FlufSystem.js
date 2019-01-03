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
message.channel.send("The Current Owners of DogeOS is PRESIDENT TRUMP & ThatPhoenix")
message.channel.send("The commands have not been created yet so fuck off and come back soon")
}
	    if (message.author.id === "441980353242988545") {  
  message.channel.send("Hi and welcome to Fluf Bot Owner Mode! maintained by DogeOS Created by ThatPhoenix")
message.channel.send("The Current Owners of DogeOS is PRESIDENT TRUMP & ThatPhoenix")
message.channel.send("The commands have not been created yet so fuck off and come back soon")
}
    }
    })
Fluf.login(process.env.FlufTK)
