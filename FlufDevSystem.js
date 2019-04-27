const Discord = require('discord.js')
const Dev = new Discord.Client();
const prefix = ("!")


Dev.on('ready', () => {
Dev.user.setActivity("Testing new things!")
Dev.user.setStatus("dnd")
});

Dev.on('message', message => {
    if (message.content.startsWith("!Developer")) {
	    message.channel.send("Activating Developer Mode")
if (message.author.id === "498186211249225728") {  
  message.channel.send("Hello Developer of DogeOS 2.0, DogeOS is completely flawless ")
message.channel.send("The Only commands you have access to is **!Disconnect** **!Credits** **!DogeShutdown** And more comming soon. ")
message.channel.send("What Command Would you like to run?")
}
    }
});

Dev.on('message', message => {
    if (message.content.startsWith("!Disconnect")) {
if (message.author.id === "498186211249225728") {  
  message.channel.send("Disconnecting Connection Processes connecting to Doge Developer...")
message.channel.send("Do Not Spam this command as to the connection process getting diconnected completely ")
Dev.destroy();
}
    }
});

  
Dev.login(process.env.FlufDevTK)
