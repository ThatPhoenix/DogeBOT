const Discord = require('discord.js')
const Fluf = new Discord.Client();

Fluf.on('ready', () => {
Fluf.user.setActivity("Fluffing around")
Fluf.user.setStatus("idle")
});



Fluf.on('message', message => {
    if (message.content.startsWith(prefix + "Owner")) {
	    message.channel.send("Activating Owner Mode")
if (message.author.id === "498186211249225728") {  
  message.channel.send("Hi and welcome to Fluf Bot Owner Mode! maintained by DogeOS")
message.channel.send("DogeOS is currently restarting so some commands will be disabled")
	message.channel.send("Please Wait.")
}
}
    })
Fluf.login(process.env.FlufTK)
