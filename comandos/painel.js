const Discord = require('discord.js')
exports.run = async (client, message, args,Database) => {
Database.Usuarios.findOne({ _id: message.author.id}, function(erro, dados) {   //Banco de dados
message.reply(`Verifique seu privado.`)
message.author.createDM()
let embed = new Discord.RichEmbed()
.setTitle('Informações do membro:')
.setColor('#a118da')
.addField(`Seu nome:`, `**${dados.nome}**`, true)
.addField(`Seu level:`, `**${dados.level}**`, true)
.addField(`Sua senha:`, `||**${dados.senha}**||`, true)
.addField(`XP:`, `**${dados.xp}**`, true)
.addField(`Sua tag:`, `**${dados.tag}**`, true)
message.author.send(embed)
})
}

exports.help = {
    name: "painel"
}