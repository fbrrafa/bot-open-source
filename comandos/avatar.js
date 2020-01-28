const Discord = require ('discord.js')

exports.run = (client, message, args) => {

    const member = message.mentions.members.first() || message.member
    const embed = new Discord.RichEmbed()
    .setDescription(`Avatar do ${member}!`)
    .setColor('RANDOM')
    .setImage(member.user.avatarURL)
    .setFooter(`Autor: ${message.author.username}`)
    .setTimestamp()
    message.channel.send(embed)

}
exports.help = {
    name: 'avatar'
}