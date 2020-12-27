require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client({
    partials: ["MESSAGE"]
})

const moderator = "!moderator"
const musik = "!musik"

client.on("ready", () => {
    console.log('Bot Connected')
})

function deleteMessages() {
    client.on("messageDelete", msg => {
        msg.reply("Stop deleting messages")
    })
}
function roles(){
    client.on("message", msg => {
        if (msg.content === moderator){
            msg.member.roles.add("792851589589237811")
        }
        if (msg.content === musik){
            msg.member.roles.add("783640555962761227")
        }
    })
}

roles()
deleteMessages()

client.login(process.env.BOT_TOKEN)