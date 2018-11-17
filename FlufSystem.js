const Discord = require('discord.js')
const Fluf = new Discord.Client();

Fluf.on('ready', () => {
Fluf.user.setActivity("I am still Alive!")
Fluf.user.setStatus("dnd")
}

Fluf.login(process.env.FlufTK)
