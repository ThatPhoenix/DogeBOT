const Discord = require('discord.js')
const Dev = new Discord.Client();
const prefix = ("!")


Dev.on('ready', () => {
Dev.user.setActivity("Testing new things!")
Dev.user.setStatus("dnd")
});

Dev.on('message', message => {
    if (message.content.startsWith(prefix + "Vip")) {
	    message.channel.send("Activating V.I.P Mode")
if (message.author.id === "498186211249225728") {  
  message.channel.send("Hi! This is a temporary message by DogeOS - A V.I.P has not be inputted in please nput the winner so V.I.P Mode can be enabled ")
message.channel.send("Error - DogeOS")
	message.channel.send("ERR  System Crash Rebooting DogeOS - PhoenixOS")
	message.channel.send("ALL PROCESS HANDLED FROM PHOENIXOS")
message.channel.send("ERR")
	message.channel.send("ERR ----------------- DogeOS - A System Error Has Fucked up the system please wait while PhoenixOS clears up his shit")
}
}
    })
  
Dev.login(process.env.FlufDevTK)
