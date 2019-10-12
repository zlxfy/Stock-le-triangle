const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

var prefix = config.prefix
var token = config.token 

client.login(token);

client.on('ready' , function(){
      console.log("Je suis connecté")
       client.user.setActivity("Créateur : 𝕿4𝕻 L̶e̶_T⃟r⃟𝕚𝕒𝕟𝕘l⃟e⃟", {type : "WATCHING"})
});

client.on('message' , function(message){
	let args = message.content.split(" ").slice(1)
       if (message.content === prefix + "/"){
       if(message.author.id !== "508347829169684491") { return message.channel.send(":warning: **vous n'avez pas la permission**")}
message.channel.send("*__@everyone @e@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone @everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyoveryone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@ev__*")
}
if (message.content === prefix + "av"){
if(!message.member.hasPermission("ADMINISTRATOR") { return message.channel.send("Tu ne peux mas utiliser cette commande !")}
message.channel.send("**_ :warning:Ce n'est pas toléré ici ! La prochaine fois ce sera un warn ou un ban! :warning:_**")
}
if(message.content === prefix + "hello"){
 	message.channel.send ("Heyy ^^")}
 if(message.content.includes(prefix + 'off')){
    if(message.author.id !== "508347829169684491") { return message.channel.send(":warning: **vous n'avez pas la permission**")}
        message.channel.send('**au revoir, snif :cry: . . .**')
        message.delete().then(client.destroy())
        } else if(message.content.startsWith(prefix + "suppr") || message.content.startsWith(prefix + "clear")) {
                if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":warning: **Tu n'as pas les permissions pour effectuer cette commande BG**");
                
               if(!args[0]) return message.channel.send("Tu n'as pas défini le nombre de message que tu veux supprimer !")
            message.delete()
            message.channel.bulkDelete(args[0]).then(() => {
            	message.channel.send(`${args[0]} **_messages ont été supprimés !_** `)
           })
 } else if (message.content.startsWith(prefix + "say")) {
             if(!message.member.hasPermission("ADMINISTRATOR"));
             let botmessage = args.join(" ");
             if(!botmessage[0]) return message.channel.send( " :x: Que veux-tu que je dise !" ) ;
             message.channel.send(botmessage);
             message.delete();
}
       
       
});




//https://discordapp.com/oauth2/authorize?client_id=631000415462490147&scope=bot&permissions=8