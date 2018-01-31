const Discord = require ("discord.js");

var bot = new Discord.Client();

bot.on("ready",function() {
    bot.user.setGame("NathouuuuuBot⚒ | n!help | " + (bot.users.size - 5) + " Membres !", "ttps://www.twitch.tv/nathArmyBot")
    console.log("Le Bot Ultime c'est maintenant connecter à Discord. Que vouliez vous faire? ")
});

bot.login("NDA4MjU4NDQ2ODY2MTIwNzA1.DVNb1A.Zw1ojaNYFJzfU3XkH0HHAB2WUhE");

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "join-leave").sendMessage(member.toString() + " ⚒ Salut ! Bienvenue sur notre discord ! Amuse toi bien :D ⚒ ");
    member.addRole(member.guild.roles.find("name", "»☁️Membre☁️●"));
    bot.user.setGame("AmellouuuuuBot⚒ | n!help | " + bot.users.size + " Membres !", "https://www.twitch.tv/nathArmyBot")
});

bot.on("guildMemberRemove", function(member) {
    bot.user.setGame("AmellouuuuuBot⚒ | n!help | " + bot.users.size + " Membres !", "https://www.twitch.tv/NathArmyBot")
});
