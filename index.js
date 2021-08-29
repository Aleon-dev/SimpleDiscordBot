const Discord = require("discord.js")
const bot = new Discord.Client()
const config = require("./config.json")

console.log("Melde an")

bot.once("ready", () => {
    console.log(`Melde an als ${bot.user.username}`)
    bot.user.setActivity(`Mein prefix ist ${config.prefix}`)
});

bot.on("message", message =>{

    let parts = message.content.split(" ");

    if(parts[0] === `${config.prefix}help`){
        const img = bot.user.displayAvatarURL({ dynamic: true })
        const embed = new Discord.MessageEmbed()
        .setTitle("Hilfe Seite")
        .setDescription(`**__Commands__**\n${config.prefix}kick\n${config.prefix}ban`)
        .setColor("GOLD")
        .setThumbnail(img)
        .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        message.channel.send({
            embed: embed
        })
    }
    if(parts[0] === `${config.prefix}ban`){
        if(message.member.hasPermission("BAN_MEMBER")){
            const member = message.mentions.members.first();
            if(member){
                const reason = args.join(" ")
                if(reason){
                    await member.kick(reason);
                    const embed = new Discord.MessageEmbed()
                    .setTitle("Ban")
                    .setDescription(`${message.author.username} hat denn user ${member.user.username} gebant wegen ${reason}`)
                    .setColor("GREEN")
                    .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
                    .setTimestamp()
                    message.channel.send({
                        embed: embed
                    })
                }else{
                    message.channel.send(":x: Du musst eine reason an geben");
                }
            }else{
                message.channel.send(":x: Du musst ein user taggen");
            }
        }else{
            message.channel.send(":x: Du hast keine rechte für diesen command");
        }
    }
    if(parts[0] === `${config.prefix}kick`){
        if(message.member.hasPermission("KICK_MEMBERS")){
            const member = message.mentions.members.first();
            if(member){
                const reason = args.join(" ")
                if(reason){
                    await member.kick(reason);
                    const embed = new Discord.MessageEmbed()
                    .setTitle("Kick")
                    .setDescription(`${message.author.username} hat denn user ${member.user.username} gekickt wegen ${reason}`)
                    .setColor("GREEN")
                    .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
                    .setTimestamp()
                    message.channel.send({
                        embed: embed
                    })
                }else{
                    message.channel.send(":x: Du musst eine reason an geben");
                }
            }else{
                message.channel.send(":x: Du musst ein user taggen");
            }
        }else{
            message.channel.send(":x: Du hast keine rechte für diesen command");
        }
    }
});

bot.login(config.token)
