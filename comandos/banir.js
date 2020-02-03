const Discord = require ('discord.js')

exports.run = (client, message, args) => {

const membro = message.mentions.members.first() || message.guild.members.get(args[0]);

     const embed1 = new Discord.RichEmbed()
    .setDescription("Você não possui permissão para executar este comando.")
    .setColor('RED')
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp()
  
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(embed1)//permissão pra banir

if(membro === message.member) return message.reply("Você não pode banir a si mesmo.") //se banir o author da mensagem

if(!membro) return message.reply("Você não especificou um usuário!") //se executar o comando sem o usuário

if(!membro.bannable) return message.reply("Eu não posso banir o usuário, o cargo dele é mais alto que o meu!") //se o cargo for mais alto que o bot

const motivo = args.slice(1).join(' ')
if(!motivo) return message.reply("Você não especificou um motivo")

if (membro) {
if (motivo) {
const embed = new Discord.RichEmbed()
embed.setTitle(":hammer: Banido")
embed.setColor("RED")
embed.setDescription(`**•** Usuário banido: **${membro}**\n**•** Banido por: **${message.author.tag}**\n**•** Motivo: ${motivo}`)
membro.ban()
message.channel.send(embed)
}
}
}
exports.help = {
    name: 'banir'
}