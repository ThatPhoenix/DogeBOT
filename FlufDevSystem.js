const Discord = require('discord.js')
const Dev = new Discord.Client();

Dev.on('ready', () => {
Dev.user.setActivity("Testing new things!")
Dev.user.setStatus("dnd")
});

Dev.login(process.env.FlufDevTK)
