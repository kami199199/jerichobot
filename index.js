const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.lenght <= 0){
        console.log("no commands to be found.");
        return;
    }

    jsfile.forEach((f) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);

    });




});



bot.on("ready", async () => {
 console.log(`${bot.user.username} is online!`);
 bot.user.setGame("Beta is open!!!");
});

bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.lenght));
    if(commandfile) commandfile.run(bot,message,args);


  
   
    



    

var responses = ["Ssr Blue Elizabeth & Hawk","SR Green Dreyfus", "SR Green Gustaf", "SSR Red Helbram", "SSR Red Merlin", "R Green Alioni", "SSR Green Ban", "SSR Blue Ban", "SSR Coin Green Ban", "SR Red Ban", "SR Green Cain", "SSR Blue Small Diane", "SSR Blue Big Diane", "SR Red Big Diane", "SSR Red Small Diane", "SR Red Dreyfus", "SR Green Elizabeth & Hawk", "SR Red Elizabeth & Hawk", "SR Red Elizabeth", "SSR Green Elizabeth", "SR Blue Freisia", "SSR Red Gilthunder", "SR Green Gilthunder", "SR Blue Gilthunder", "R Blue Golgius", "SSR Blue Gowther",  "SR Green Gowther", "SSR Coin Red Gowther", "SSR Green Griamore", "SR Blue Griamore", "SR Red Griamore", "SSR Red Guila", "SR Blue Guila", "SSR Green Helbram", "SSR Blue Hendrickson", "SSR Red Howzer", "SR Blue Howzer", "SR Green Howzer", "R Green Hugo", "SSR Green Jerico", "SR Red Jerico", "SR Blue Jerico", "SR Green Jillian", "R Red Jude", "SSR Coin Blue Small King", "SSR Green Fat King", "SSR Green Small King", "SSR Blue Fat King", "R Blue Marmas", "SSR Red Coin Meliodas", "SSR Green Meliodas", "SR Blue  Meliodas", "SSR Green Coin Merlin", "R Green Ruin", "R Red Simon", "SSR Blue Slader", "SR Red Slader", "R Red Taizoo", "R Red Twigo", "SR Blue Weinheidt"];
var totalResponses = responses.length;
var responseIndex = Math.floor((Math.random() * 58) + 1) % totalResponses;
var response = responses[responseIndex];


if(cmd === `${prefix}daily`){
    return message.channel.send("GG, you pulled " + response);

}




if(cmd === `${prefix}help`) {

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Help")
    .setColor("#e887e5")
    .setThumbnail(bicon)
    .addField("Skill search Format","?<Rarity><Color/Coin><Name> with no spaces")
    .addField("To see second or third skill","Type ?<Rarity><Color/Coin><Name><Number of stars>")
    .addField("Examples","?ssrredban / ?ssrcoinban / ?ssrredban2 / ?ssrredban3")
    .addField("Commands","?help, ?botinfo, ?daily, ?effects");

    return message.channel.send(botembed);


}

if(cmd === `${prefix}botinfo`) {

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Details")
    .setColor("#e887e5")
    .setThumbnail(bicon)
    .addField("Created by kami", bot.user.username)
    .addField("Powered by","SDSGC.GG")
    .addField("Special Thanks to:","Aoki, Jay, Undecided Guild")
    .addField("V:0.0.1","Closed Beta");

    return message.channel.send(botembed);



}

if(cmd === `${prefix}effects`) {

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Details")
    .setColor("#e887e5")
    .addField("AoE","Atack all Targets")
    .addField("Bleed","Additional 80% damage on the beggining of each turn")
    .addField("Burst","Increases the damage in enemies with buffs by 2x")
    .addField("Cleanse","Remove an active effect")
    .addField("Corrosion","Additional damage at the end of each turn")
    .addField("Crushing","ignores patience rate")
    .addField("Cure","adds 60% of recovered hp at the start of each turn")
    .addField("Fatal","Increases critical damage by 2x")
    .addField("Freeze","Prevents all actions, breaks if target receives damage")
    .addField("Lifesteal","Heal a percentage of damage dealt")
    .addField("Penetration","Increase penetration rat by 3x")
    .addField("Poison","Additional 50% Damage done at the end of each turn")
    .addField("Seal","Disable a type of skill")
    .addField("Shock","Additinonal 30% damage at the end of each turn")
    .addField("Stun","Prevent all actions")
    .addField("Taunt","Direct all attacks to yourself");
    
    




    return message.channel.send(botembed);




}



if(cmd === `${prefix}srgreendreyfus`) {
    
    let botembed = new Discord.RichEmbed()
    .setDescription("Sr Green Dreyfus Skills")
    .setColor("#e887e5")
    .addField("Kingdom Swordsmanship.", "Inflicts 220% damage on a single enemy.")
    .addField("Collapsing", "Inflicts 120% damage to all enemies.")
    .addField("Breakaway Blade (ult)", "Inflicts 560% damage to a single enemy. Apply Fatal.")
    .addField("Concentration (passive)", "When the character's Ult Gauge reaches MAX, the penetration rate of allies doubles.");


    return message.channel.send(botembed);


}

    if(cmd === `${prefix}srgreengustaf`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Sr Green Gustaf Skills")
        .setColor("#e887e5")
        .addField("Snowstorm Dance","Inflicts 220% damage on a single enemy.")
        .addField("Freezing Field","Freeze a single enemy for 1 turn.")
        .addField("Killing Iceberg (ult)","Inflicts 350% damage to all enemies. Apply Fatal.")
        .addField("Cold Air Release (Passive)","At the start of the battle, decrease the patience rate of all enemies by this character's penetration rate. (Activated only when participating in battle)");
    
    
        return message.channel.send(botembed);

    }

    if(cmd === `${prefix}ssrredhellbram`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Ssr Red Hellbram Skills")
        .setColor("#e887e5")
        .addField("Fog Wave","Inflicts 120% damage on a single enemy and reduces its Ult Gauge by 1.")
        .addField("Stone Needle","Inflicts 200% damage on a single enemy.")
        .addField("Hunting Ball (Ult)","Cleanse all enemies' buffs and stances and deal 280% damage.")
        .addField("Blizzard (Fate)","Cleanse all enemies' buffs and stances and deal 350% damage.")
        .addField("Natural Magic (Passive)","Basic Stats increase by 5% for each surviving Ally character.");
    
    
        return message.channel.send(botembed);

    }

    if(cmd === `${prefix}srgreenhendrickson`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("sr green hendrickson skills")
        .setColor("#e887e5")
        .addField("Corrosion Tower","Inflicts 140% damage to all enemies.")
        .addField("Purification","Heal all allies HP by 100% of attack and apply Cure for 3 turns.")
        .addField("Destruction (Ult)","Inflicts 350% damage on all enemies. Apply Burst.")
        .addField("Weakness Atack (Passive)","Allies gain 5% penetration when attacked. (Up to 5 times)");
    
    
        return message.channel.send(botembed);

    }

    if(cmd === `${prefix}ssrredmerlin`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Ssr Red Merlin Skills")
        .setColor("#e887e5")
        .addField("Poison Wave","Inflict 220% damage to a single enemy.")
        .addField("Absolute Temperature","Freeze a single enemy for 1 turn.")
        .addField("Light of Destruction (Ult)","Inflicts 540% damage on a single enemy and Seal attack skills for 2 turns.")
        .addField("Magic Runaway (Passive)","Penetration Rate increases by 10% for each point of Ult Gauge, and increases by 50% when it reaches MAX.");
    
    
        return message.channel.send(botembed);

    }

    if(cmd === `${prefix}rgreenalioni`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("R Green Alioni Skills")
        .setColor("#e887e5")
        .addField("Everyone, Assault!","Inflict 180% damage to a single enemy. Apply Crushing.")
        .addField("Oh! Emergency","Take a Stance for 1 turn, Taunt the enemy and reduce damage taken by 30%.")
        .addField("Gather (Ult)","Cleanse an enemy Stance and inflict 700% damage.")
        .addField("Assault Knights! (Passive)","Increases attack of allies by 10%.");
    
    
        return message.channel.send(botembed);

    }

    if(cmd === `${prefix}ssrgreenban`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Ssr Green Ban Skills")
        .setColor("#e887e5")
        .addField("Audacious Bow","Inflict 180% damage to a single target, 20% Lifesteal.")
        .addField("Snatch","Inflict 180% damage to a single target, steals 20% of the target's attack and defense for 1 turn.")
        .addField("Body Hunt (Ultimate)","Inflict 630% damage to a single target, decrease enemy ultimate gauge by 3.")
        .addField("Draining Spa (Fate)","Inflict 720% damage to a single target, decrease enemy ultimate gauge by 5.")
        .addField("The Undead (Passive)","Heal 20% of this unit's missing health at the start of each turn.");
    
    
        return message.channel.send(botembed);

    }

    if(cmd === `${prefix}ssrblueban`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Ssr Blue Ban Skills")
        .setColor("#e887e5")
        .addField("Pressure Point Penetration","Inflict 200% damage to an enemy. Apply Rush.")
        .addField("Poisonous Substances","Inflict 180% damage to an enemy. Reduce that target's attack by 20% for 1 turn.")
        .addField("Body Hunt (Ult)","Inflict 630% damage to an enemy. Reduce their ultimate gauge by 3")
        .addField("Dreain Spa (Fate)","Inflict 720% damage to an enemy. Reduce their ultimate gauge by 5.")
        .addField("Power Snatch (Passive)","If this unit wasn't attacked this turn, decrease the opposing team's attack stat by 15%. This stacks up to 5 times. Stacks reset if hit.");
    
    
        return message.channel.send(botembed);

    
    }

    if(cmd === `${prefix}ssrcoinban`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Ssr Coin Ban Skills")
        .setColor("#e887e5")
        .addField("Life Snatch","Inflict 150% damage to all enemies.")
        .addField("Snatch","Steal 20% of all enemies attack and defense for 2 turns.")
        .addField("Hunter's Festival (Ult)","Inflict 350% damage to a single target. Steal 50% of that target's attack and defense.")
        .addField("Fake Strike (Fate)","Inflict 400% damage to a single target. Steal 50% of that target's attack and defense.")
        .addField("The Undead (Passive)","If this unit wasn't attacked this turn, decrease the effectiveness of enemy recovery skill by 10% at the start of the next turn. This stacks up to 5 times.");
    
    
        return message.channel.send(botembed);

    }

    if(cmd === `${prefix}srredban`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Sr Red Ban Skills")
        .setColor("#e887e5")
        .addField("Extinguished Vigor","Inflict 120% damage to a single enemy and reduces its Ultimate gauge by 1.")
        .addField("Immortal Body","Take a Stance and Heal 30% of missing HP at the beginning of the next turn.")
        .addField("Robbery (Ult)","Inflict 700% damage to a single enemy. Apply Rush.")
        .addField("Phisichal Deprivation (Passive)","If HP is less than 50%, Lifesteal increased by 30%.");
    
    
        return message.channel.send(botembed);

    }

    if(cmd === `${prefix}srgreencain`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Sr Green Cain Skills")
        .setColor("#e887e5")
        .addField("Continuous Kick","Inflict 180% damage to a single enemy. Ignite for 3 turns.")
        .addField("Flame Technique","Inflict 180% damage to a single enemy. Ignite for 3 turns.")
        .addField("Tornado Flame Fist (Ult)","Inflict 210% damage to all enemies. Apply weakness.")
        .addField("Counterpower (Passive)","Increase attack skills of all allies by 10% in extermination.");
    
    
        return message.channel.send(botembed);

    }

    if(cmd === `${prefix}ssrsmallbluediane`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Ssr Small Blue Diane Skills")
        .setColor("#e887e5")
        .addField("Fist of Fatal","Inflict 180% damage to a single target. Apply Burst.")
        .addField("Clay Dolls","Inflict 220% damage to a single target.")
        .addField("Judges of The Earth (Ult)","Inflict 560% damage to a single target. Apply Penetration.")
        .addField("Metal Cyclone (Fate)","Inflict 640% damage to a single target. Apply Penetration.")
        .addField("Quick Motion (Passive)","This character's critical hit chance is boosted by its critical resistance.");
    
        return message.channel.send(botembed);

    }

    if(cmd === `${prefix}ssrbigbluediane`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Ssr Big Blue Diane Skills")
        .setColor("#e887e5")
        .addField("A Thousand Pebbles","Inflict 220% damage to a single target.")
        .addField("Riggid Sword of The Earth","Inflict 100% damage to all enemies. Apply Burst.")
        .addField("Roar of Earth (Ult)","Inflict 525% damage to all enemies.")
        .addField("Full Swing Impact (Fate)","Inflict 600% damage to all enemies.")
        .addField("Magic of The Giants (Passive)","Each turn, increase own attack by 6% (Max 30%).");
    
    
        return message.channel.send(botembed);

    }

    if(cmd === `${prefix}srbigreddiane`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Sr Big Red Diane Skills")
        .setColor("#e887e5")
        .addField("Iron Fist","Inflict 220% damage to a single enemy.")
        .addField("Sand Whirlpool","Reduce all enemy defense skills by 20% for 2 turns.")
        .addField("Earth Explosion (Ult)","Inflict 350% damage to all enemies. Apply Penetration.")
        .addField("Spirit of The Earth (Passive)","All allies will gain 5% Penetration when damaged. (Up to 5 times)");
    
    
        return message.channel.send(botembed);

    }

    if(cmd === `${prefix}ssrsmallreddiane`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Ssr Small Red Diane Skills")
        .setColor("#e887e5")
        .addField("A Shot of The Earth","Inflict 180% damage to a single enemy. Apply Crushing.")
        .addField("Sand Whirlpool","Reduce a single enemy defense skills by 20% and Seal attack skills for 2 turns.")
        .addField("Referee of The Earth (Ult)","Inflict 560% damage to a single enemy. Apply Penetration.")
        .addField("Aichi Metal Cyclone (Fate)","Inflict 640% damage to a single enemy.")
        .addField("Will Not Give Up (Passive)","Receiving damage increases critical rate by 10% at the start of the next turn. (Up to 5 times)")
    
    
        return message.channel.send(botembed);

    }

    if(cmd === `${prefix}srreddreyfus`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Sr Red Dreyfus Skills")
        .setColor("#e887e5")
        .addField("Rannuki","Inflict 180% damage to a single enemy and reduces attack skills by 20% for 1 turn.")
        .addField("Clash","Inflict 220% damage to a single enemy.")
        .addField("Breakaway Blade (Ult)","Inflict 560% damage to a single enemy. Apply Fatal.")
        .addField("Iron Will (Passive)","Increases defense of all strength allies by 50%.");
    
    
        return message.channel.send(botembed);



    }

    if(cmd === `${prefix}srgreenelizabeth`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Sr Green Elizabeth & Hawk Skills")
        .setColor("#e887e5")
        .addField("Super Ios Ilusion","Inflict 180% damage to a single enemy and reduces defense skills by 20% for 1 turn.")
        .addField("Super Hawk Illusion","Inflict 100% damage to all enemies. Apply Penetration.")
        .addField("Final Pork Stomping (Ult)","Cleanse the Stance of a single enemy and deal 700% damage.")
        .addField("Bar Mascot (Passive)","Increase all allies recovery skills by 10% in all battles except PvP and extermination.");
    
    
        return message.channel.send(botembed);




    }

    if(cmd === `${prefix}srredelizabeth`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Sr Red Elizabeth & Hawk Skills")
        .setColor("#e887e5")
        .addField("Rolling Ham Atack","Inflict 200% damage to a single enemy. Apply Rush.")
        .addField("Hawk Knight Rush","Inflict 220% of attack power on a single enemy.")
        .addField("Final Pork Stomping (Ult)","Cleanse the Stance of a single enemy and deal 700% damage.")
        .addField("Full Stomach (Passive)","If not damaged, basic stats increase by 10% at the beginning of the next turn. (Reset upon taking damage)");
    
    
        return message.channel.send(botembed);




    }

    if(cmd === `${prefix}ssrgreenelizabeth`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Ssr Green Elizabeth Skills")
        .setColor("#e887e5")
        .addField("Light of Punishment","Inflict 220% damage to a single enemy.")
        .addField("Healing Grace","Heal all allies by 200% of attack.")
        .addField("Life Authority (Ult)","Heal all allies by 420% of attack and increase Ult Gauge by 2.")
        .addField("Godess Garden (Fate)","Heal all allies by 480% of attack and increase Ult Gauge by 2.")
        .addField("Desperately Prepared (Passive)","At the start of battle, increases Ult Gauge by 2.");
    
    
        return message.channel.send(botembed);




    }

    if(cmd === `${prefix}srbluefresia`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Sr Blue Fresia Skills")
        .setColor("#e887e5")
        .addField("Storm Dance","Inflict 72% damage to all enemies. Apply Poison for 3 turns.")
        .addField("Corroded Insect","Increase damage taken by all enemies by 20% for 2 turns.")
        .addField("Rain of Fantasies (Ult)","Inflict 20% of max HP per turn to all enemies for 3 turns. Apply Corrosion.")
        .addField("Bloodsuckers (Passive)","recovery rate of all enemies is reduced by your missing HP.");
    
    
        return message.channel.send(botembed);




    }

    if(cmd === `${prefix}srgreengilthunder`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Sr Green Gilthunder Skills")
        .setColor("#e887e5")
        .addField("Lightning Strike","Inflict 100% damage to all enemies. Apply Burst.")
        .addField("Lightning Charge","Increase the attack of all allies by 30% for 2 turns.")
        .addField("Killing of The Emperor (Ult)","Inflict 560% damage to a single enemy. Apply Shock for 4 turns.")
        .addField("The Power of The Emperor (Passive)","Increases all allies defense skills by 15% in PvP.");
    
    
        return message.channel.send(botembed);




    }

    if(cmd === `${prefix}ssrredgilthunder`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Ssr Red Gilthunder Skills")
        .setColor("#e887e5")
        .addField("Thunder God Semi Final","Inflict 80% damage to all enemies. Apply Shock for 4 turns.")
        .addField("Heavy Thunder Armor","Take a Stance for 1 turn, Taunt all enemies and reduce incoming damage by 30%.")
        .addField("Sword of Thunder (Ult)","Inflict 630% damage to a single target. Apply Burst.")
        .addField("Thunder Smoke (Fate)","Inflict 720% damage to a single target. Apply Burst.")
        .addField("Diamont Holy Knight (Passive","For every point on the ultimate gauge, increase this unit's patience rate by 10%. When the ultimate gauge is max, double the patience rate.");
    
    
        return message.channel.send(botembed);




    }

    if(cmd === `${prefix}srbluegilthunder`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Sr Blue Gilthunder Skills")
        .setColor("#e887e5")
        .addField("Thunder","Inflict 160% damage to a single enemy. Apply Fatal.")
        .addField("Thunder Emperors Iron Armor","Inflict 160% damage to a single enemy. Apply Shock for 4 turns.")
        .addField("Killing of The Emperor (Ult)","Inflict 560% damage to a single enemy. Apply Shock for 4 turns.")
        .addField("Princess Knight (Passive)","Increases defense of all speed allies by 50%.");
    
    
        return message.channel.send(botembed);




    }

    if(cmd === `${prefix}rbluegolgius`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("R Blue Golgius Skills")
        .setColor("#e887e5")
        .addField("Surprise Atack","Inflict 160% damage to a single enemy. Apply Fatal.")
        .addField("Dark Machine Injection","Inflict 60% damage to all enemies. Apply Weakness.")
        .addField("Covert Blow (Ult)","Inflict 490% damage to a single enemy. Apply Poison for 3 turns.")
        .addField("Ambush (Passive)","Increase attack of allies by 15% in extermination.");
    
    
        return message.channel.send(botembed);




    }

    if(cmd === `${prefix}ssrbluegowther`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Ssr Blue Gowther Skills")
        .setColor("#e887e5")
        .addField("Pain Edit","Inflict 60% damage to all enemies. Apply Weakness.")
        .addField("Blackout","Seal debuff skills for all enemies for 1 turn.")
        .addField("Memory Arrow","Inflict 350% damage to all enemies. Reduce opposing ultimate gauge by 3.")
        .addField("Holy Barista (Fate)","Inflict 400% damage to all enemies. Reduce opposing ultimate gauge by 5.")
        .addField("Automatic recovery (Passive)","Each time a debuff wears off on your team, Heal 10% of missing HP.");
    
    
        return message.channel.send(botembed);




    }

    if(cmd === `${prefix}srgreengowther`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Sr Green Gowther Skills")
        .setColor("#e887e5")
        .addField("Runaway","Inflict 160% damage to a single enemy and reduce skill ranks.")
        .addField("Nightmare Stories","Reduce a single enemy Ultimate damage by 20% for 2 turns.")
        .addField("Puppet Men (Ult)","Inflict 560% damage to a single enemy. Ranks down enemy skills. Also reduce enemy Ultimate gauge by the number of skills lowered.")
        .addField("Mental Manipulation (Passive)","Reduce all enemies defense skills by 15% in PvP.");
    
    
        return message.channel.send(botembed);




    }

    if(cmd === `${prefix}ssrcoingowther`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Ssr Red Coin Gowther Skills")
        .setColor("#e887e5")
        .addField("Arrow of Memory","Inflict 120% damage to all enemies.")
        .addField("Arrow Erosion","Rank up the skills of 1 ally.")
        .addField("Memory of The Lid (Ult)","Inflict 350% damage to all enemies and reduces the Ultimate gauge by 3.")
        .addField("Holy Barista (Fate)","Inflict 400% damage to all enemies and reduces the Ultimate gauge by 5.")
        .addField("Trick (Passive)","If this unit wasn't attacked this turn, all your allies damage increases by 10% at the start of the next turn. (Up to 5 times, resets when damaged).");
    
    
        return message.channel.send(botembed);




    }

    if(cmd === `${prefix}ssrgreengriamore`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Ssr Green Griamore Skills")
        .setColor("#e887e5")
        .addField("Moving Fortress","Inflict 120% damage to all enemies.")
        .addField("Barrier Shield","Take a Stance, increase HP skill potency by 10% and reduce damage received by 30%.")
        .addField("The Wailing Wall (Ult)","Increase this unit's defense by 420% and Taunt all enemies for 4 turns.")
        .addField("Barrier Combination (Fate)","Increase this unit's defense by 480% and Taunt all enemies for 5 turns.")
        .addField("Strong Will (Passive)","Increase this unit's attack by 30% of its defense.");
    
    
        return message.channel.send(botembed);




    }

    if(cmd === `${prefix}srbluegriamore`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Sr Blue Griamore Skills")
        .setColor("#e887e5")
        .addField("Barrier Collision","Inflict 180% damage to a single enemy. Apply Crushing.")
        .addField("Retangular Shield","Take a Stance for 1 turn, Taunt the enemy, and reduce damage taken by 30%.")
        .addField("Single Cell to Compress (Ult)","Inflict 300% damage to all enemies and reduces attack skills by 30% for 3 turns.")
        .addField("Perfect Protection (Passive)","Increase all allies defense skills by 20% in extermination.");
    
    
        return message.channel.send(botembed);


    }

    if(cmd === `${prefix}srredgriamore`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Sr Red Griamore Skills")
        .setColor("#e887e5")
        .addField("Bang","Inflict 240% damage to a single enemy.")
        .addField("Barrier","Produce a shield of 150% attack on all allies for 2 turns.")
        .addField("Single Cell To Compress","Inflict 300% damage to all enemies and reduces attack skills by 30% for 3 turns.")
        .addField("The Majesty of Champions","Increase all allies recovery skills by 10% in PvP.");
    
    
        return message.channel.send(botembed);




    }

    if(cmd === `${prefix}ssrredguila`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Ssr Red Guila Skills")
        .setColor("#e887e5")
        .addField("Killer Mine","Inflict 220% damage to a single target.")
        .addField("Shot Bomb","Inflict 180% damage to a single target. Ignite for 3 turns.")
        .addField("Chain Explosion (Ult)","Inflict 350% damage to all enemies. Inflict Fatal.")
        .addField("Bomb Cyclone (Fate)","Inflict 400% damage to all enemies. Inflict Fatal.")
        .addField("Burning Will (Passive)","All allied HP skills are enhanced by 15% in extermination battle.");
    
    
        return message.channel.send(botembed);




    }

    if(cmd === `${prefix}srblueguila`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Sr Blue Guila Skills")
        .setColor("#e887e5")
        .addField("Flame Focus","Inflict 80% damage to all enemies. Ignite for 3 turns.")
        .addField("Ultra Purification","Cleanse all allies debuffs.")
        .addField("Brillian Detonation (Ult)","Cleanse all enemy Stances, deal 280% damage, and Ignite for 4 turns.")
        .addField("Blood of Genie (Passive)","If not attacked, Ultimate gauge increases by 1 at the beginning of the next turn.");
    
    
        return message.channel.send(botembed);




    }

    if(cmd === `${prefix}greenhellbram`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Ssr Green Hellbram Skills")
        .setColor("#e887e5")
        .addField("Blade Pitch","Inflict 72% damage to all enemies. Apply Poison for 3 turns.")
        .addField("Fairy Wind","Increase the attack of all allies by 15% for 2 turns.")
        .addField("Hunt Ball (Ult)","Cleanse all enemy buff effects and Stance changes. Inflict 280% damage to all enemies.")
        .addField("Boundaries of Death (Passive)","One time, if this unit's HP falls to zero, Heal HP equal to 100% of this unit's defense.");
    
    
        return message.channel.send(botembed);




    }

    if(cmd === `${prefix}ssrbluehendrickson`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Ssr Blue Hendrickson Skills")
        .setColor("#e887e5")
        .addField("Blood Feast","Inflict 180% damage to a single target. 20% Lifesteal.")
        .addField("Flare Flicker","Inflict 180% damage to a single target. Ignite for 3 turns.")
        .addField("Hell Flame Wave (Ult)","Inflict 560% damage to a single target. 40% Lifesteal.")
        .addField("Celestial Blade (Fate)","Inflict 640% damage to a single target. 40% Lifesteal.")
        .addField("Regeneration (Passive)","Each turn recovery rate increases by 10% (Max 5 times).");
    
    
        return message.channel.send(botembed);




    }

    if(cmd === `${prefix}ssrredhowzer`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Ssr Red Howzer Skills")
        .setColor("#e887e5")
        .addField("Wind Ascencion","Inflict 100% damage to all enemies. Apply Penetration.")
        .addField("Super Cyclone","Inflict 100% damage to all enemies. Apply Cutting.")
        .addField("Rising Tornado (Ult)","Inflict 350% damage to all enemies. Ranks down enemy skills. Also reduce enemy Ultimate gauge by the number of skills lowered.")
        .addField("Thunder Dragon Castle (Fate)","Inflict 400% damage to all enemies. Ranks down enemy skills. Also reduce enemy Ultimate gauge by the number of skills lowered.")
        .addField("Leaders Instruments (Passive)","Increases all base stats of ally humans by 8%.");
    
    
        return message.channel.send(botembed);




    }

    if(cmd === `${prefix}srbluehowzer`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Sr Blue Howzer Skills")
        .setColor("#e887e5")
        .addField("Wind Breaker","Inflict 120% damage to all enemies.")
        .addField("Blockade of Defense","Decrease a single enemy HP by 10% for 2 turns")
        .addField("Ryufu (Ult)","Inflict 540% damage to a single enemy and Seal recovery skills for 2 turns.")
        .addField("Come On! (Passive)","All enemy critical resistance is reduced by their own critical chance amount.");
    
    
        return message.channel.send(botembed);




    }

    if(cmd === `${prefix}srgreenhowzer`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Sr Green Howzer Skills")
        .setColor("#e887e5")
        .addField("Whirl Shock","Inflict 220% damage to a single enemy.")
        .addField("Blow of Wind","Take a Stance for 1 turn. When an ally is attacked, counterattack for 160% damage.")
        .addField("Ryufu (Ult)","Inflict 540% damage to a single enemy and Seal recovery skills for 2 turns.")
        .addField("Its Burning (Passive","For each point in the Ultimate gauge, critical chance increases by 10%. When the Ultimate gauge is full, critical chance doubles.");
    
    
        return message.channel.send(botembed);




    }

    if(cmd === `${prefix}rgreenhugo`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("R Green Hugo Skills")
        .setColor("#e887e5")
        .addField("Windbrake Of Ruin","Inflict 180% damage to a single enemy. Apply Burst.")
        .addField("Turn Off","Inflict 110% damage to a single enemy. Apply Weakness.")
        .addField("Chaos Blow (Ult)","Inflict 385% damage to a single enemy. Apply Weakness.")
        .addField("Tanker (Passive)","Defense skills of all allies increased by 20% when Ultimate gauge is full.");
    
    
        return message.channel.send(botembed);




    }

    if(cmd === `${prefix}ssrgreenjericho`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Ssr Green Jericho Skills")
        .setColor("#e887e5")
        .addField("Flash","Inflict 110% damage to a single target. Apply Weakness.")
        .addField("Divine Speed Strike","Inflict 130% damage to a single target. Apply Bleed for 2 turns.")
        .addField("Sole Sword Slash (Ult)","Inflict 560% damage to a single target. Apply Fatal.")
        .addField("Chain Slash (Fate)","Inflict 640% damage to a single target. Apply Fatal.")
        .addField("Continuous Cutting (Passive)","Each skill you use with this unit increases this unit's critical hit chance by 5%.");
    
    
        return message.channel.send(botembed);




    }

    if(cmd === `${prefix}srredjericho`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Sr Red Jericho Skills")
        .setColor("#e887e5")
        .addField("Skill One","Inflict 130% damage to a single enemy. Apply Bleed for 2 turns.")
        .addField("Blade of Pain","Inflict 180% damage to a single enemy. Apply Burst.")
        .addField("Shikansen Tensen (Ult)","Inflict 455% damage to a single enemy. Apply Bleed for two turns.")
        .addField("There is a Chance (Passive)","Increases the attack of allies by 10%.");
    
    
        return message.channel.send(botembed);




    }

    if(cmd === `${prefix}srbluejericho`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Sr Blue Jericho Skills")
        .setColor("#e887e5")
        .addField("Gods Fast Bone","Inflict 160% damage to a single enemy. Apply Cutting.")
        .addField("Super Recovery","Heal 10% of all allies max HP.")
        .addField("Shinkansen Tensen (Ult)","Inflict 455% damage to a single enemy. Apply Bleed for two turns.")
        .addField("Magic Blade (Passive)","Increases the attack of allies by 10%.");
    
    
        return message.channel.send(botembed);




    }

    if(cmd === `${prefix}srgreenjilian`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Sr Green Jilian Skills")
        .setColor("#e887e5")
        .addField("Crosshair","Inflict 160% damage to a single enemy. Apply Penetration.")
        .addField("Stop Shackles","Inflict 140% damage to all enemies.")
        .addField("Dangerous Pain (Ult)","Cleanse an enemy Stance and inflict 540% damage. Seal Stance skills for 2 turns.")
        .addField("Party Support (Passive)","Increases HP of all vitality allies by 20%.");
    
    
        return message.channel.send(botembed);




    }

    if(cmd === `${prefix}srredjude`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Sr Red Jude Skills")
        .setColor("#e887e5")
        .addField("Skewer","Inflict 220% damage to a single enemy.")
        .addField("Yui","Inflict 140% damage to all enemies.")
        .addField("Pain of Mourning (Ult)","Inflict 540% damage to a single enemy and Seal attack skills for 2 turns.")
        .addField("Torture Officer (Passive)","When allies are attacked, they reflect 10% of the damage they receive.");
    
    
        return message.channel.send(botembed);





    }

    if(cmd === `${prefix}ssrblueking`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Ssr Blue King Skills")
        .setColor("#e887e5")
        .addField("Fossilization","Inflict 200% damage to a single target.")
        .addField("Flower","Remove all debuffs.")
        .addField("Sunflower (Ult)","Inflict 420% damage to all enemies. Apply Crushing.")
        .addField("Cross Fire (Fate)","Inflict 480% damage to all enemies. Apply Crushing.")
        .addField("Fairy King","Increases base stats of all fairy clan members by 8%.");
    
    
        return message.channel.send(botembed);







    }

    if(cmd === `${prefix}ssrfatgreenking`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Ssr Fat Green King Skills")
        .setColor("#e887e5")
        .addField("Guardian Beast","Inflict 130% damage to all enemies. Apply Rush.")
        .addField("Severe Poison","Inflict 72% damage to all enemies. Apply Poison for 3 turns.")
        .addField("Guardian Beast Invasion (Ult)","Inflict 560% damage to a single target. Weaken defense abilities by 40% for 2 turns.")
        .addField("Sharpness Wisp (Fate)","Inflict 640% damage to a single target. Weaken defense abilities by 40% for 2 turns.")
        .addField("Magic Expansion (Passive)","When the ultimate gauge is at max, increase ally defense by 100%.");
    
    
        return message.channel.send(botembed);







    }

    if(cmd === `${prefix}ssrgreenking`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Ssr Green King Skills")
        .setColor("#e887e5")
        .addField("Bumblebee","Inflict 160% to a single target. Apply Fatal.")
        .addField("Toxic Garden","Inflict 160% to a single target. Apply Ruin.")
        .addField("Sunflower (Ult)","Inflict 420% damage to all enemies. Apply Crushing.")
        .addField("Cross Fire (Fate)","Inflict 480% damage to all enemies. Apply Crushing.")
        .addField("Magic Control (Passive)","For each bar in the ultimate move gauge, increase critical hit chance by 10%.");
    
    
        return message.channel.send(botembed);







    }

    if(cmd === `${prefix}ssrbluefatking`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Ssr Blue Fat King Skills")
        .setColor("#e887e5")
        .addField("Spirit Skill","Inflict 130% damage to a single enemy. Apply Bleed for 2 turns.")
        .addField("Skill Two","Take a Stance for 1 turn. When an ally is attacked, counterattack for 160% damage.")
        .addField("Advance Guardian beast (Ult)","Inflict 560% damage to a single enemy and reduces defense skills by 40% for 2 turns.")
        .addField("Sharp Wisp (Fate)","Inflict 640% damage to a single enemy and reduces defense skills by 40% for 2 turns.")
        .addField("Fairy Kings Power (Passive)","When damaged, Heal 15% of max HP at the beginning of the next turn.");
    
    
        return message.channel.send(botembed);







    }

    if(cmd === `${prefix}rbluemarmas`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("R Blue Marmas Skills")
        .setColor("#e887e5")
        .addField("Maracas Smash","Inflict 120% damage to all enemies.")
        .addField("Gravity x10","Decrease all enemy defenses by 30% for 3 turns.")
        .addField("Gravity x30 (Ult)","Reduce all enemy defense skills by 40% for 3 turns.")
        .addField("Gravity Field (Passive)","Increases HP of all speed allies by 20%.");
    
    
        return message.channel.send(botembed);







    }

    if(cmd === `${prefix}ssrcoinmeliodas`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Ssr Coin Red Meliodas Skills")
        .setColor("#e887e5")
        .addField("Purgatory Flames","Inflict 180% damage to a single target. Ignite for 3 turns.")
        .addField("Hellfire Explosion","Inflict 220% damage to a single target.")
        .addField("The Hell (Ult)","Inflict 385% damage to a single target, apply Weakness.")
        .addField("Devil Assault (Fate)","Inflict 440% damage to a single target, apply Weakness.")
        .addField("Rage (Passive)","If an allied character dies, increase this character's critical rate by 50% (Can only trigger once per battle).");
    
    
        return message.channel.send(botembed);







    }

    if(cmd === `${prefix}ssrgreenmeliodas`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Ssr Green Meliodas Skills")
        .setColor("#e887e5")
        .addField("Wild Hell Fire","Inflict 240% damage to a single target")
        .addField("Full Counter","Take a counterattack Stance, deflect a single attack at 100% damage based on missing HP.")
        .addField("Thousands Cut of God (Ult)","Cleanse an enemy target's buffs and Stance changes, inflict 490% damage to a single target and Stun for 1 turn.")
        .addField("Metal Clash (Fate)","Cleanse an enemy target's buffs and Stance changes, inflict 560% damage to a single target and Stun for 1 turn.")
        .addField("All or Nothing (Passive)","The less health this unit has the more likely it is to land critical hits.");
    
    
        return message.channel.send(botembed);







    }

    if(cmd === `${prefix}srbluemeliodas`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Sr Blue Meliodas Skills")
        .setColor("#e887e5")
        .addField("Triple Strike","Inflict 110% damage to a single enemy. Apply Weakness.")
        .addField("Total Counter","Take a Stance for 1 turn, and when attacked, counterattack and deal 200% damage.")
        .addField("Soul of Genie (Ult)","Inflict 560% damage to a single enemy. Apply Cutting.")
        .addField("Master of The Fast Tavern (Passive)","If not attacked, critical chance increases by 30% at the start of the next turn.(Resets when attacked).");
    
    
        return message.channel.send(botembed);







    }

    if(cmd === `${prefix}ssrcoinmerlin`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Ssr Green Coin Merlin Skills")
        .setColor("#e887e5")
        .addField("Dark Erosion","Inflict 120% damage to a single enemy and reduces its Ultimate gauge by 1.")
        .addField("Perfect Cube","Produce a shield of 150% attack on all allies for two turns.")
        .addField("Light of Destruction (Ult)","Inflict 540% damage to a single enemy and Seal attack skills for 2 turns.")
        .addField("Various Samples (Passive)","At the start of the battle, the Ultimate gauge of all allies is increased by 1.");
    
    
        return message.channel.send(botembed);







    }

    if(cmd === `${prefix}rgreenruin`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("R Green Ruin Skills")
        .setColor("#e887e5")
        .addField("Slaughter of Darkness","Inflict 220% damage to a single enemy.")
        .addField("Hallucination of Pain","Decrease attack of all enemies by 30% for 3 turns.")
        .addField("Ground Smash (Ult)","Cleanse an enemy Stance and buff. Inflict 490% damage. Apply Stun for 1 turn.")
        .addField("Body Over Steel","Reduce damage taken by allies by 20% in extermination.");
    
    
        return message.channel.send(botembed);







    }

    if(cmd === `${prefix}rredsimon`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("R Red Simon Skills")
        .setColor("#e887e5")
        .addField("Wind Fan","Inflict 160% damage to a single enemy. Apply Cutting.")
        .addField("Heaven Sword","Inflict 120% damage to all enemies. Apply Crushing.")
        .addField("The Sword Circle (Ult)","Inflict 350% damage to all enemies. Apply Penetration.")
        .addField("Clear Water Stop (Passive)","All allies gain 15% more damage with PvP.");
    
    
        return message.channel.send(botembed);







    }

    if(cmd === `${prefix}ssrblueslader`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Ssr Blue Slader Skills")
        .setColor("#e887e5")
        .addField("Steel Swipe","Inflict 160% damage to a single target. Apply Cutting.")
        .addField("Sawblade Shears","Inflict 220% damage to a single target.")
        .addField("Intimidation (Ult)","Inflict 540% damage to a single target. Infect for 2 turns.")
        .addField("Constraint Circle (Fate)","Inflict 630% damage to a single target. Infect for 2 turns.")
        .addField("Chance (Passive)","If you attack an enemy with an empty ultimate gauge, triple your critical hit chance.");
    
    
        return message.channel.send(botembed);







    }

    if(cmd === `${prefix}srredslader`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Sr Red Slader Skills")
        .setColor("#e887e5")
        .addField("Blade Wave","Inflict 180% damage to a single enemy, 20% Lifesteal.")
        .addField("Coercion","Reduce an enemy attack skills by 20% and Seal other skills for 2 turns.")
        .addField("Space Cutting (Ult)","Inflict 540% damage to a single enemy and Seal attack skills for 2 turns.")
        .addField("Pressure (Passive)","All enemy critical resistance is reduced by their own critical chance amount.");
    
    
        return message.channel.send(botembed);







    }

    if(cmd === `${prefix}rredtaizoo`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("R Red Taizo Skills")
        .setColor("#e887e5")
        .addField("Strong Punch","Inflict 160% damage to a single enemy. Apply Penetration.")
        .addField("Muscle mania","Increase defense by 100% and Reflect 40% of damage taken for 2 turns.")
        .addField("Full Power Drop Kick (Ult)","Inflict 700% damage to a single enemy. Apply Rush.")
        .addField("Champions Pride (Passive)","Reduce damage taken by all allies by 20% in PvP.");
    
    
        return message.channel.send(botembed);







    }

    if(cmd === `${prefix}rredtwigo`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("R Red Twigo Skills")
        .setColor("#e887e5")
        .addField("Decision Hit!","Inflict 240% damage to a single enemy.")
        .addField("Decision Blow","Inflict 150% damage to all enemies.")
        .addField("Decision Annihilation (Ult)","Inflict 350% damage to all enemies. Apply Cutting.")
        .addField("Decision! (Passive)","Increases HP of strength allies by 20%.");
    
    
        return message.channel.send(botembed);







    }

    if(cmd === `${prefix}srblueweinheidt`) {
    
        let botembed = new Discord.RichEmbed()
        .setDescription("Sr Blue Wenheidt Skills")
        .setColor("#e887e5")
        .addField("Flash Arrow","Inflict 120% damage to all enemies.")
        .addField("Death Arrow","Inflict 120% damage to all enemies.")
        .addField("Soul Arrow (Ult)","Inflict 560% damage to a single enemy. Apply Penetration.")
        .addField("Sniper (Passive)","Increases Penetration by 5% at the end of each turn. (Up to 5 times)");
    
    
        return message.channel.send(botembed);



    }


//skill 2


    if(cmd === `${prefix}srgreendreyfus2`) {
        
        let botembed = new Discord.RichEmbed()
        .setDescription("Sr Green Dreyfus Skills")
        .setColor("#e887e5")
        .addField("Kingdom Swordsmanship.", "Cleanse a single enemy's buffs and deal 300% damage.")
        .addField("Collapsing", "Inflicts 120% damage to all enemies, and Seal buff and debuff skills for 1 turn.")
        .addField("Breakaway Blade (ult)", "Inflicts 560% damage to a single enemy. Apply Fatal.")
        .addField("Concentration (passive)", "When the character's Ult Gauge reaches MAX, the penetration rate of allies doubles.");
    
    
        return message.channel.send(botembed);
    
    
    }
    
        if(cmd === `${prefix}srgreengustaf2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Sr Green Gustaf Skills")
            .setColor("#e887e5")
            .addField("Snowstorm Dance","Inflicts 220% damage on a single enemy and Seal recovery skills for 1 turn.")
            .addField("Freezing Field","Freeze a single enemy for 1 turn. The frozen target receives an additional 80% damage while affected.")
            .addField("Killing Iceberg (ult)","Inflicts 350% damage to all enemies. Apply Fatal.")
            .addField("Cold Air Release (Passive)","At the start of the battle, decrease the patience rate of all enemies by this character's penetration rate. (Activated only when participating in battle)");
        
        
            return message.channel.send(botembed);
    
        }
    
        if(cmd === `${prefix}ssrredhellbram2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Ssr Red Hellbram Skills")
            .setColor("#e887e5")
            .addField("Fog Wave","Inflicts 300% damage on a single enemy and reduces its Ult Gauge by 1.")
            .addField("Stone Needle","Inflicts 200% damage on a single enemy. Petrify for 1 turn.")
            .addField("Hunting Ball (Ult)","Cleanse all enemies' buffs and stances and deal 280% damage.")
            .addField("Blizzard (Fate)","Cleanse all enemies' buffs and stances and deal 350% damage.")
            .addField("Natural Magic (Passive)","Basic Stats increase by 5% for each surviving Ally character.");
        
        
            return message.channel.send(botembed);
    
        }
    
        if(cmd === `${prefix}srgreenhendrickson2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("sr green hendrickson skills")
            .setColor("#e887e5")
            .addField("Corrosion Tower","Cleanse all enemies' buffs and deal 140% damage.")
            .addField("Purification","Heal all allies HP by 150% of attack and apply Cure for 3 turns.")
            .addField("Destruction (Ult)","Inflicts 350% damage on all enemies. Apply Burst.")
            .addField("Weakness Atack (Passive)","Allies gain 5% penetration when attacked. (Up to 5 times)");
        
        
            return message.channel.send(botembed);
    
        }
    
        if(cmd === `${prefix}ssrredmerlin2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Ssr Red Merlin Skills")
            .setColor("#e887e5")
            .addField("Poison Wave","Inflict 220% damage to a single enemy and Seal recovery skills for 1 turns.")
            .addField("Absolute Temperature","Freeze a single enemy for 1 turn. The frozen target receives an additional 80% damage while affected.")
            .addField("Light of Destruction (Ult)","Inflicts 540% damage on a single enemy and Seal attack skills for 2 turns.")
            .addField("Magic Runaway (Passive)","Penetration Rate increases by 10% for each point of Ult Gauge, and increases by 50% when it reaches MAX.");
        
        
            return message.channel.send(botembed);
    
        }
    
        if(cmd === `${prefix}rgreenalioni2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("R Green Alioni Skills")
            .setColor("#e887e5")
            .addField("Everyone, Assault!","Inflict 180% damage to a single enemy. Apply Crushing.")
            .addField("Oh! Emergency","Take a Stance for 1 turn, Taunt the enemy and reduce damage taken by 30%.")
            .addField("Gather (Ult)","Cleanse an enemy Stance and inflict 700% damage.")
            .addField("Assault Knights! (Passive)","Increases attack of allies by 10%.");
        
        
            return message.channel.send(botembed);
    
        }
    
        if(cmd === `${prefix}ssrgreenban2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Ssr Green Ban Skills")
            .setColor("#e887e5")
            .addField("Audacious Bow","Inflict 270% damage to a single target, 30% Lifesteal.")
            .addField("Snatch","Inflict 200% damage to a single target, steals 30% of the target's attack and defense for 2 turns.")
            .addField("Body Hunt (Ultimate)","Inflict 630% damage to a single target, decrease enemy ultimate gauge by 3.")
            .addField("Draining Spa (Fate)","Inflict 720% damage to a single target, decrease enemy ultimate gauge by 5.")
            .addField("The Undead (Passive)","Heal 20% of this unit's missing health at the start of each turn.");
        
        
            return message.channel.send(botembed);
    
        }
    
        if(cmd === `${prefix}ssrblueban2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Ssr Blue Ban Skills")
            .setColor("#e887e5")
            .addField("Pressure Point Penetration","Inflict 200% damage to an enemy. Apply Rush.")
            .addField("Poisonous Substances","Inflict 180% damage to an enemy. Reduce that target's attack by 20% for 1 turn.")
            .addField("Body Hunt (Ult)","Inflict 630% damage to an enemy. Reduce their ultimate gauge by 3")
            .addField("Dreain Spa (Fate)","Inflict 720% damage to an enemy. Reduce their ultimate gauge by 5.")
            .addField("Power Snatch (Passive)","If this unit wasn't attacked this turn, decrease the opposing team's attack stat by 15%. This stacks up to 5 times. Stacks reset if hit.");
        
        
            return message.channel.send(botembed);
    
        
        }
    
        if(cmd === `${prefix}ssrcoinban2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Ssr Coin Ban Skills")
            .setColor("#e887e5")
            .addField("Life Snatch","Inflict 150% damage to all enemies, 30% Lifesteal.")
            .addField("Snatch","Steal 30% of all enemies attack and defense for 2 turns.")
            .addField("Hunter's Festival (Ult)","Inflict 350% damage to a single target. Steal 50% of that target's attack and defense.")
            .addField("Fake Strike (Fate)","Inflict 400% damage to a single target. Steal 50% of that target's attack and defense.")
            .addField("The Undead (Passive)","If this unit wasn't attacked this turn, decrease the effectiveness of enemy recovery skill by 10% at the start of the next turn. This stacks up to 5 times.");
        
        
            return message.channel.send(botembed);
    
        }
    
        if(cmd === `${prefix}srredban2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Sr Red Ban Skills")
            .setColor("#e887e5")
            .addField("Extinguished Vigor","Inflict 300% damage to a single enemy and reduces its Ultimate gauge by 1.")
            .addField("Immortal Body","Take a Stance for 1 turn, Cleanse debuffs, and Heal 50% of missing HP at the beginning of the next turn.")
            .addField("Robbery (Ult)","Inflict 700% damage to a single enemy. Apply Rush.")
            .addField("Phisichal Deprivation (Passive)","If HP is less than 50%, Lifesteal increased by 30%.");
        
        
            return message.channel.send(botembed);
    
        }
    
        if(cmd === `${prefix}srgreencain2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Sr Green Cain Skills")
            .setColor("#e887e5")
            .addField("Continuous Kick","Inflict 270% damage to a single enemy. Ignite for 4 turns.")
            .addField("Flame Technique","Remove an enemy buff and inflict 180% damage. Ignite for 3 turns.")
            .addField("Tornado Flame Fist (Ult)","Inflict 210% damage to all enemies. Apply weakness.")
            .addField("Counterpower (Passive)","Increase attack skills of all allies by 10% in extermination.");
        
        
            return message.channel.send(botembed);
    
        }
    
        if(cmd === `${prefix}ssrsmallbluediane2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Ssr Small Blue Diane Skills")
            .setColor("#e887e5")
            .addField("Fist of Fatal","Inflict 270% damage to a single target. Apply Burst.")
            .addField("Clay Dolls","Inflict 220% damage to a single target. Seal buff and debuff skills for 1 turn.")
            .addField("Judges of The Earth (Ult)","Inflict 560% damage to a single target. Apply Penetration.")
            .addField("Metal Cyclone (Fate)","Inflict 640% damage to a single target. Apply Penetration.")
            .addField("Quick Motion (Passive)","This character's critical hit chance is boosted by its critical resistance.");
        
            return message.channel.send(botembed);
    
        }
    
        if(cmd === `${prefix}ssrbigbluediane2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Ssr Big Blue Diane Skills")
            .setColor("#e887e5")
            .addField("A Thousand Pebbles","Inflict 220% damage to a single target. Seal attack skills for 1 turn.")
            .addField("Riggid Sword of The Earth","Inflict 150% damage to all enemies. Apply Burst.")
            .addField("Roar of Earth (Ult)","Inflict 525% damage to all enemies.")
            .addField("Full Swing Impact (Fate)","Inflict 600% damage to all enemies.")
            .addField("Magic of The Giants (Passive)","Each turn, increase own attack by 6% (Max 30%).");
        
        
            return message.channel.send(botembed);
    
        }
    
        if(cmd === `${prefix}srbigreddiane2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Sr Big Red Diane Skills")
            .setColor("#e887e5")
            .addField("Iron Fist","Remove a single enemy Stance and inflict 220% damage. Seal defense skills for 1 turn.")
            .addField("Sand Whirlpool","Reduce all enemy defense skills by 30% for 2 turns.")
            .addField("Earth Explosion (Ult)","Inflict 350% damage to all enemies. Apply Penetration.")
            .addField("Spirit of The Earth (Passive)","All allies will gain 5% Penetration when damaged. (Up to 5 times)");
        
        
            return message.channel.send(botembed);
    
        }
    
        if(cmd === `${prefix}ssrsmallreddiane2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Ssr Small Red Diane Skills")
            .setColor("#e887e5")
            .addField("A Shot of The Earth","Inflict 270% damage to a single enemy. Apply Crushing.")
            .addField("Sand Whirlpool","Reduce a single enemy defense skills by 30% and Seal attack skills for 2 turns.")
            .addField("Referee of The Earth (Ult)","Inflict 560% damage to a single enemy. Apply Penetration.")
            .addField("Aichi Metal Cyclone (Fate)","Inflict 640% damage to a single enemy.")
            .addField("Will Not Give Up (Passive)","Receiving damage increases critical rate by 10% at the start of the next turn. (Up to 5 times)")
        
        
            return message.channel.send(botembed);
    
        }
    
        if(cmd === `${prefix}srreddreyfus2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Sr Red Dreyfus Skills")
            .setColor("#e887e5")
            .addField("Rannuki","Inflict 180% damage to a single enemy and reduces attack skills by 30% for 1 turn.")
            .addField("Clash","Inflict 220% damage to a single enemy. Apply Infect for 1 turn.")
            .addField("Breakaway Blade (Ult)","Inflict 560% damage to a single enemy. Apply Fatal.")
            .addField("Iron Will (Passive)","Increases defense of all strength allies by 50%.");
        
        
            return message.channel.send(botembed);
    
    
    
        }
    
        if(cmd === `${prefix}srgreenelizabeth2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Sr Green Elizabeth & Hawk Skills")
            .setColor("#e887e5")
            .addField("Super Ios Ilusion","Inflict 180% damage to a single enemy and reduces defense skills by 30% for 1 turn.")
            .addField("Super Hawk Illusion","Inflict 150% damage to all enemies. Apply Penetration.")
            .addField("Final Pork Stomping (Ult)","Cleanse the Stance of a single enemy and deal 700% damage.")
            .addField("Bar Mascot (Passive)","Increase all allies recovery skills by 10% in all battles except PvP and extermination.");
        
        
            return message.channel.send(botembed);
    
    
    
    
        }
    
        if(cmd === `${prefix}srredelizabeth2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Sr Red Elizabeth & Hawk Skills")
            .setColor("#e887e5")
            .addField("Rolling Ham Atack","Inflict 300% damage to a single enemy. Apply Rush.")
            .addField("Hawk Knight Rush","Inflict 220% damage to a single enemy and Seal buff and debuff skills for 1 turn.")
            .addField("Final Pork Stomping (Ult)","Cleanse the Stance of a single enemy and deal 700% damage.")
            .addField("Full Stomach (Passive)","If not damaged, basic stats increase by 10% at the beginning of the next turn. (Reset upon taking damage)");
        
        
            return message.channel.send(botembed);
    
    
    
    
        }
    
        if(cmd === `${prefix}ssrgreenelizabeth2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Ssr Green Elizabeth Skills")
            .setColor("#e887e5")
            .addField("Light of Punishment","Cleanse a single enemy Buff and inflict 300% damage.")
            .addField("Healing Grace","Heal all allies by 240% of attack and Cleanse debuffs.")
            .addField("Life Authority (Ult)","Heal all allies by 420% of attack and increase Ult Gauge by 2.")
            .addField("Godess Garden (Fate)","Heal all allies by 480% of attack and increase Ult Gauge by 2.")
            .addField("Desperately Prepared (Passive)","At the start of battle, increases Ult Gauge by 2.");
        
        
            return message.channel.send(botembed);
    
    
    
    
        }
    
        if(cmd === `${prefix}srbluefresia2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Sr Blue Fresia Skills")
            .setColor("#e887e5")
            .addField("Storm Dance","Inflict 108% damage to all enemies. Apply Poison for 3 turns.")
            .addField("Corroded Insect","Increase damage taken by all enemies by 30% for 2 turns.")
            .addField("Rain of Fantasies (Ult)","Inflict 20% of max HP per turn to all enemies for 3 turns. Apply Corrosion.")
            .addField("Bloodsuckers (Passive)","recovery rate of all enemies is reduced by your missing HP.");
        
        
            return message.channel.send(botembed);
    
    
    
    
        }
    
        if(cmd === `${prefix}srgreengilthunder2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Sr Green Gilthunder Skills")
            .setColor("#e887e5")
            .addField("Lightning Strike","Inflict 150% damage to all enemies. Apply Burst.")
            .addField("Lightning Charge","Increase the attack of all allies by 40% for 2 turns.")
            .addField("Killing of The Emperor (Ult)","Inflict 560% damage to a single enemy. Apply Shock for 4 turns.")
            .addField("The Power of The Emperor (Passive)","Increases all allies defense skills by 15% in PvP.");
        
        
            return message.channel.send(botembed);
    
    
    
    
        }
    
        if(cmd === `${prefix}ssrredgilthunder2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Ssr Red Gilthunder Skills")
            .setColor("#e887e5")
            .addField("Thunder God Semi Final","Inflict 120% damage to all enemies. Apply Shock for 4 turns.")
            .addField("Heavy Thunder Armor","Take a Stance for 1 turn, Taunt all enemies and reduce incoming damage by 45%.")
            .addField("Sword of Thunder (Ult)","Inflict 630% damage to a single target. Apply Burst.")
            .addField("Thunder Smoke (Fate)","Inflict 720% damage to a single target. Apply Burst.")
            .addField("Diamont Holy Knight (Passive","For every point on the ultimate gauge, increase this unit's patience rate by 10%. When the ultimate gauge is max, double the patience rate.");
        
        
            return message.channel.send(botembed);
    
    
    
    
        }
    
        if(cmd === `${prefix}srbluegilthunder2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Sr Blue Gilthunder Skills")
            .setColor("#e887e5")
            .addField("Thunder","Inflict 240% damage to a single enemy. Apply Fatal.")
            .addField("Thunder Emperors Iron Armor","Inflict 240% damage to a single enemy. Apply Shock for 4 turns.")
            .addField("Killing of The Emperor (Ult)","Inflict 560% damage to a single enemy. Apply Shock for 4 turns.")
            .addField("Princess Knight (Passive)","Increases defense of all speed allies by 50%.");
        
        
            return message.channel.send(botembed);
    
    
    
    
        }
    
        if(cmd === `${prefix}rbluegolgius2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("R Blue Golgius Skills")
            .setColor("#e887e5")
            .addField("Surprise Atack","Inflict 240% damage to a single enemy. Apply Fatal.")
            .addField("Dark Machine Injection","Inflict 90% damage to all enemies. Apply Weakness.")
            .addField("Covert Blow (Ult)","Inflict 490% damage to a single enemy. Apply Poison for 3 turns.")
            .addField("Ambush (Passive)","Increase attack of allies by 15% in extermination.");
        
        
            return message.channel.send(botembed);
    
    
    
    
        }
    
        if(cmd === `${prefix}ssrbluegowther2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Ssr Blue Gowther Skills")
            .setColor("#e887e5")
            .addField("Pain Edit","Inflict 90% damage to all enemies. Apply Weakness.")
            .addField("Blackout","Seal debuff skills and reduce attack of all enemies by 20% for 2 turns.")
            .addField("Memory Arrow","Inflict 350% damage to all enemies. Reduce opposing ultimate gauge by 3.")
            .addField("Holy Barista (Fate)","Inflict 400% damage to all enemies. Reduce opposing ultimate gauge by 5.")
            .addField("Automatic recovery (Passive)","Each time a debuff wears off on your team, Heal 10% of missing HP.");
        
        
            return message.channel.send(botembed);
    
    
    
    
        }
    
        if(cmd === `${prefix}srgreengowther2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Sr Green Gowther Skills")
            .setColor("#e887e5")
            .addField("Runaway","Inflict 210% damage to a single enemy. Ranks down enemy skills. Also reduce enemy Ultimate gauge by the number of skills lowered.")
            .addField("Nightmare Stories","Reduce a single enemy Ultimate damage by 40% for 2 turns.")
            .addField("Puppet Men (Ult)","Inflict 560% damage to a single enemy. Ranks down enemy skills. Also reduce enemy Ultimate gauge by the number of skills lowered.")
            .addField("Mental Manipulation (Passive)","Reduce all enemies defense skills by 15% in PvP.");
        
        
            return message.channel.send(botembed);
    
    
    
    
        }
    
        if(cmd === `${prefix}ssrcoingowther2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Ssr Red Coin Gowther Skills")
            .setColor("#e887e5")
            .addField("Arrow of Memory","Inflict 120% damage on all enemies and Seal attack skills for 1 turn.")
            .addField("Arrow Erosion","Rank up all ally skills.")
            .addField("Memory of The Lid (Ult)","Inflict 350% damage to all enemies and reduces the Ultimate gauge by 3.")
            .addField("Holy Barista (Fate)","Inflict 400% damage to all enemies and reduces the Ultimate gauge by 5.")
            .addField("Trick (Passive)","If this unit wasn't attacked this turn, all your allies damage increases by 10% at the start of the next turn. (Up to 5 times, resets when damaged).");
        
        
            return message.channel.send(botembed);
    
    
    
    
        }
    
        if(cmd === `${prefix}ssrgreengriamore2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Ssr Green Griamore Skills")
            .setColor("#e887e5")
            .addField("Moving Fortress","Inflict 120% damage to all enemies. Seal Stance skills for 1 turn.")
            .addField("Barrier Shield","Take a Stance for 2 turns, increase HP skill potency by 15% and reduce damage received by 45%.")
            .addField("The Wailing Wall (Ult)","Increase this unit's defense by 420% and Taunt all enemies for 4 turns.")
            .addField("Barrier Combination (Fate)","Increase this unit's defense by 480% and Taunt all enemies for 5 turns.")
            .addField("Strong Will (Passive)","Increase this unit's attack by 30% of its defense.");
        
        
            return message.channel.send(botembed);
    
    
    
    
        }
    
        if(cmd === `${prefix}srbluegriamore2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Sr Blue Griamore Skills")
            .setColor("#e887e5")
            .addField("Barrier Collision","Inflict 270% damage to a single enemy. Apply Crushing.")
            .addField("Retangular Shield","Take a Stance for 1 turn, Taunt the enemy, and reduce damage taken by 45%.")
            .addField("Single Cell to Compress (Ult)","Inflict 300% damage to all enemies and reduces attack skills by 30% for 3 turns.")
            .addField("Perfect Protection (Passive)","Increase all allies defense skills by 20% in extermination.");
        
        
            return message.channel.send(botembed);
    
    
        }
    
        if(cmd === `${prefix}srredgriamore2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Sr Red Griamore Skills")
            .setColor("#e887e5")
            .addField("Bang","Inflict 360% damage to a single enemy.")
            .addField("Barrier","Produce a shield of 225% attack on all allies for 2 turns.")
            .addField("Single Cell To Compress","Inflict 300% damage to all enemies and reduces attack skills by 30% for 3 turns.")
            .addField("The Majesty of Champions","Increase all allies recovery skills by 10% in PvP.");
        
        
            return message.channel.send(botembed);
    
    
    
    
        }
    
        if(cmd === `${prefix}ssrredguila2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Ssr Red Guila Skills")
            .setColor("#e887e5")
            .addField("Killer Mine","Cleanse a single enemy's buff and inflict 300% damage.")
            .addField("Shot Bomb","Cleanse a single enemy stance and inflict 240% damage. Ignite for 3 turns.")
            .addField("Chain Explosion (Ult)","Inflict 350% damage to all enemies. Inflict Fatal.")
            .addField("Bomb Cyclone (Fate)","Inflict 400% damage to all enemies. Inflict Fatal.")
            .addField("Burning Will (Passive)","All allied HP skills are enhanced by 15% in extermination battle.");
        
        
            return message.channel.send(botembed);
    
    
    
    
        }
    
        if(cmd === `${prefix}srblueguila2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Sr Blue Guila Skills")
            .setColor("#e887e5")
            .addField("Flame Focus","Inflict 120% damage to all enemies. Ignite for 4 turns.")
            .addField("Ultra Purification","Heal 30% of all allies missing HP and Cleanse all debuffs.")
            .addField("Brillian Detonation (Ult)","Cleanse all enemy Stances, deal 280% damage, and Ignite for 4 turns.")
            .addField("Blood of Genie (Passive)","If not attacked, Ultimate gauge increases by 1 at the beginning of the next turn.");
        
        
            return message.channel.send(botembed);
    
    
    
    
        }
    
        if(cmd === `${prefix}greenhellbram2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Ssr Green Hellbram Skills")
            .setColor("#e887e5")
            .addField("Blade Pitch","Inflict 108% damage to all enemies. Apply Poison for 3 turns.")
            .addField("Fairy Wind","Increase the attack of all allies by 20% for 2 turns.")
            .addField("Hunt Ball (Ult)","Cleanse all enemy buff effects and Stance changes. Inflict 280% damage to all enemies.")
            .addField("Boundaries of Death (Passive)","One time, if this unit's HP falls to zero, Heal HP equal to 100% of this unit's defense.");
        
        
            return message.channel.send(botembed);
    
    
    
    
        }
    
        if(cmd === `${prefix}ssrbluehendrickson2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Ssr Blue Hendrickson Skills")
            .setColor("#e887e5")
            .addField("Blood Feast","Inflict 270% damage to a single target. 30% Lifesteal.")
            .addField("Flare Flicker","Inflict 270% damage to a single target. Ignite for 4 turns.")
            .addField("Hell Flame Wave (Ult)","Inflict 560% damage to a single target. 40% Lifesteal.")
            .addField("Celestial Blade (Fate)","Inflict 640% damage to a single target. 40% Lifesteal.")
            .addField("Regeneration (Passive)","Each turn recovery rate increases by 10% (Max 5 times).");
        
        
            return message.channel.send(botembed);
    
    
    
    
        }
    
        if(cmd === `${prefix}ssrredhowzer2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Ssr Red Howzer Skills")
            .setColor("#e887e5")
            .addField("Wind Ascencion","Inflict 150% damage to all enemies. Apply Penetration.")
            .addField("Super Cyclone","Inflict 150% damage to all enemies. Apply Cutting.")
            .addField("Rising Tornado (Ult)","Inflict 350% damage to all enemies. Ranks down enemy skills. Also reduce enemy Ultimate gauge by the number of skills lowered.")
            .addField("Thunder Dragon Castle (Fate)","Inflict 400% damage to all enemies. Ranks down enemy skills. Also reduce enemy Ultimate gauge by the number of skills lowered.")
            .addField("Leaders Instruments (Passive)","Increases all base stats of ally humans by 8%.");
        
        
            return message.channel.send(botembed);
    
    
    
    
        }
    
        if(cmd === `${prefix}srbluehowzer2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Sr Blue Howzer Skills")
            .setColor("#e887e5")
            .addField("Wind Breaker","Inflict 120% damage to all enemies and reduces defense skills by 20% for 2 turns.")
            .addField("Blockade of Defense","Decrease a single enemy HP by 15% for 2 turns.")
            .addField("Ryufu (Ult)","Inflict 540% damage to a single enemy and Seal recovery skills for 2 turns.")
            .addField("Come On! (Passive)","All enemy critical resistance is reduced by their own critical chance amount.");
        
        
            return message.channel.send(botembed);
    
    
    
    
        }
    
        if(cmd === `${prefix}srgreenhowzer2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Sr Green Howzer Skills")
            .setColor("#e887e5")
            .addField("Whirl Shock","Remove a single enemy Stance and inflict 300% damage.")
            .addField("Blow of Wind","Take a Stance for 1 turn. When an ally is attacked, counterattack for 240% damage.")
            .addField("Ryufu (Ult)","Inflict 540% damage to a single enemy and Seal recovery skills for 2 turns.")
            .addField("Its Burning (Passive","For each point in the Ultimate gauge, critical chance increases by 10%. When the Ultimate gauge is full, critical chance doubles.");
        
        
            return message.channel.send(botembed);
    
    
    
    
        }
    
        if(cmd === `${prefix}rgreenhugo2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("R Green Hugo Skills")
            .setColor("#e887e5")
            .addField("Windbrake Of Ruin","Inflict 270% damage to a single enemy. Apply Burst.")
            .addField("Turn Off","Inflict 165% damage to a single enemy. Apply Weakness.")
            .addField("Chaos Blow (Ult)","Inflict 385% damage to a single enemy. Apply Weakness.")
            .addField("Tanker (Passive)","Defense skills of all allies increased by 20% when Ultimate gauge is full.");
        
        
            return message.channel.send(botembed);
    
    
    
    
        }
    
        if(cmd === `${prefix}ssrgreenjericho2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Ssr Green Jericho Skills")
            .setColor("#e887e5")
            .addField("Flash","Inflict 165% damage to a single target. Apply Weakness.")
            .addField("Divine Speed Strike","Inflict 195% damage to a single target. Apply Bleed for 2 turns.")
            .addField("Sole Sword Slash (Ult)","Inflict 560% damage to a single target. Apply Fatal.")
            .addField("Chain Slash (Fate)","Inflict 640% damage to a single target. Apply Fatal.")
            .addField("Continuous Cutting (Passive)","Each skill you use with this unit increases this unit's critical hit chance by 5%.");
        
        
            return message.channel.send(botembed);
    
    
    
    
        }
    
        if(cmd === `${prefix}srredjericho2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Sr Red Jericho Skills")
            .setColor("#e887e5")
            .addField("Skill One","Inflict 195% damage to a single enemy. Apply Bleed for 2 turns.")
            .addField("Blade of Pain","Inflict 270% damage to a single enemy. Apply Burst.")
            .addField("Shikansen Tensen (Ult)","Inflict 455% damage to a single enemy. Apply Bleed for two turns.")
            .addField("There is a Chance (Passive)","Increases the attack of allies by 10%.");
        
        
            return message.channel.send(botembed);
    
    
    
    
        }
    
        if(cmd === `${prefix}srbluejericho2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Sr Blue Jericho Skills")
            .setColor("#e887e5")
            .addField("Gods Fast Bone","Inflict 240% damage to a single enemy. Apply Cutting.")
            .addField("Super Recovery","Heal 15% of all allies max HP.")
            .addField("Shinkansen Tensen (Ult)","Inflict 455% damage to a single enemy. Apply Bleed for two turns.")
            .addField("Magic Blade (Passive)","Increases the attack of allies by 10%.");
        
        
            return message.channel.send(botembed);
    
    
    
    
        }
    
        if(cmd === `${prefix}srgreenjilian2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Sr Green Jilian Skills")
            .setColor("#e887e5")
            .addField("Crosshair","Inflict 240% damage to a single enemy. Apply Penetration.")
            .addField("Stop Shackles","Remove all enemy Stance and inflict 150% damage.")
            .addField("Dangerous Pain (Ult)","Cleanse an enemy Stance and inflict 540% damage. Seal Stance skills for 2 turns.")
            .addField("Party Support (Passive)","Increases HP of all vitality allies by 20%.");
        
        
            return message.channel.send(botembed);
    
    
    
    
        }
    
        if(cmd === `${prefix}srredjude2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Sr Red Jude Skills")
            .setColor("#e887e5")
            .addField("Skewer","Inflict 220% damage to a single enemy and Seal attack skills for 1 turn.")
            .addField("Yui","Remove all enemy buffs and inflict 140% damage.")
            .addField("Pain of Mourning (Ult)","Inflict 540% damage to a single enemy and Seal attack skills for 2 turns.")
            .addField("Torture Officer (Passive)","When allies are attacked, they reflect 10% of the damage they receive.");
        
        
            return message.channel.send(botembed);
    
    
    
    
    
        }
    
        if(cmd === `${prefix}ssrblueking2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Ssr Blue King Skills")
            .setColor("#e887e5")
            .addField("Fossilization","Inflict 250% damage to a single target. Petrify for 1 turn.")
            .addField("Flower","Heal 30% of missing HP and remove all debuffs.")
            .addField("Sunflower (Ult)","Inflict 420% damage to all enemies. Apply Crushing.")
            .addField("Cross Fire (Fate)","Inflict 480% damage to all enemies. Apply Crushing.")
            .addField("Fairy King","Increases base stats of all fairy clan members by 8%.");
        
        
            return message.channel.send(botembed);
    
    
    
    
    
    
    
        }
    
        if(cmd === `${prefix}ssrfatgreenking2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Ssr Fat Green King Skills")
            .setColor("#e887e5")
            .addField("Guardian Beast","Inflict 195% damage to all enemies. Apply Rush.")
            .addField("Severe Poison","Inflict 108% damage to all enemies. Apply Poison for 3 turns.")
            .addField("Guardian Beast Invasion (Ult)","Inflict 560% damage to a single target. Weaken defense abilities by 40% for 2 turns.")
            .addField("Sharpness Wisp (Fate)","Inflict 640% damage to a single target. Weaken defense abilities by 40% for 2 turns.")
            .addField("Magic Expansion (Passive)","When the ultimate gauge is at max, increase ally defense by 100%.");
        
        
            return message.channel.send(botembed);
    
    
    
    
    
    
    
        }
    
        if(cmd === `${prefix}ssrgreenking2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Ssr Green King Skills")
            .setColor("#e887e5")
            .addField("Bumblebee","Inflict 240% to a single target. Apply Fatal.")
            .addField("Toxic Garden","Inflict 240% to a single target. Apply Ruin.")
            .addField("Sunflower (Ult)","Inflict 420% damage to all enemies. Apply Crushing.")
            .addField("Cross Fire (Fate)","Inflict 480% damage to all enemies. Apply Crushing.")
            .addField("Magic Control (Passive)","For each bar in the ultimate move gauge, increase critical hit chance by 10%.");
        
        
            return message.channel.send(botembed);
    
    
    
    
    
    
    
        }
    
        if(cmd === `${prefix}ssrbluefatking2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Ssr Blue Fat King Skills")
            .setColor("#e887e5")
            .addField("Spirit Skill","Inflict 195% damage to a single enemy. Apply Bleed for 2 turns.")
            .addField("Skill Two","Take a Stance for 1 turn. When an ally is attacked, counterattack for 240% damage.")
            .addField("Advance Guardian beast (Ult)","Inflict 560% damage to a single enemy and reduces defense skills by 40% for 2 turns.")
            .addField("Sharp Wisp (Fate)","Inflict 640% damage to a single enemy and reduces defense skills by 40% for 2 turns.")
            .addField("Fairy Kings Power (Passive)","When damaged, Heal 15% of max HP at the beginning of the next turn.");
        
        
            return message.channel.send(botembed);
    
    
    
    
    
    
    
        }
    
        if(cmd === `${prefix}rbluemarmas2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("R Blue Marmas Skills")
            .setColor("#e887e5")
            .addField("Maracas Smash","Inflict 120% damage to all enemies, and Seal buff and debuff skills for 1 turn.")
            .addField("Gravity x10","Decrease all enemy defenses by 45% for 3 turns.")
            .addField("Gravity x30 (Ult)","Reduce all enemy defense skills by 40% for 3 turns.")
            .addField("Gravity Field (Passive)","Increases HP of all speed allies by 20%.");
        
        
            return message.channel.send(botembed);
    
    
    
    
    
    
    
        }
    
        if(cmd === `${prefix}ssrcoinmeliodas2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Ssr Coin Red Meliodas Skills")
            .setColor("#e887e5")
            .addField("Purgatory Flames","Inflict 270% damage to a single target. Ignite for 4 turns.")
            .addField("Hellfire Explosion","Inflict 220% damage to a single target. Infect for 1 turn.")
            .addField("The Hell (Ult)","Inflict 385% damage to a single target, apply Weakness.")
            .addField("Devil Assault (Fate)","Inflict 440% damage to a single target, apply Weakness.")
            .addField("Rage (Passive)","If an allied character dies, increase this character's critical rate by 50% (Can only trigger once per battle).");
        
        
            return message.channel.send(botembed);
    
    
    
    
    
    
    
        }
    
        if(cmd === `${prefix}ssrgreenmeliodas2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Ssr Green Meliodas Skills")
            .setColor("#e887e5")
            .addField("Wild Hell Fire","Inflict 360% damage to a single target.")
            .addField("Full Counter","Take a counterattack Stance, deflect a single attack at 150% damage based on missing HP.")
            .addField("Thousands Cut of God (Ult)","Cleanse an enemy target's buffs and Stance changes, inflict 490% damage to a single target and Stun for 1 turn.")
            .addField("Metal Clash (Fate)","Cleanse an enemy target's buffs and Stance changes, inflict 560% damage to a single target and Stun for 1 turn.")
            .addField("All or Nothing (Passive)","The less health this unit has the more likely it is to land critical hits.");
        
        
            return message.channel.send(botembed);
    
    
    
    
    
    
    
        }
    
        if(cmd === `${prefix}srbluemeliodas2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Sr Blue Meliodas Skills")
            .setColor("#e887e5")
            .addField("Triple Strike","Inflict 165% damage to a single enemy. Apply Weakness.")
            .addField("Total Counter","Take a Stance for 1 turn, and if attacked, reduce damage by 50% and deal 300% damage.")
            .addField("Soul of Genie (Ult)","Inflict 560% damage to a single enemy. Apply Cutting.")
            .addField("Master of The Fast Tavern (Passive)","If not attacked, critical chance increases by 30% at the start of the next turn.(Resets when attacked).");
        
        
            return message.channel.send(botembed);
    
    
    
    
    
    
    
        }
    
        if(cmd === `${prefix}ssrcoinmerlin2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Ssr Green Coin Merlin Skills")
            .setColor("#e887e5")
            .addField("Dark Erosion","Inflict 300% damage to a single enemy and reduces its Ultimate gauge by 1.")
            .addField("Perfect Cube","Produce a shield of 225% attack on all allies for two turns.")
            .addField("Light of Destruction (Ult)","Inflict 540% damage to a single enemy and Seal attack skills for 2 turns.")
            .addField("Various Samples (Passive)","At the start of the battle, the Ultimate gauge of all allies is increased by 1.");
        
        
            return message.channel.send(botembed);
    
    
    
    
    
    
    
        }
    
        if(cmd === `${prefix}rgreenruin2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("R Green Ruin Skills")
            .setColor("#e887e5")
            .addField("Slaughter of Darkness","Remove a enemy buff and inflict 300% damage.")
            .addField("Hallucination of Pain","Decrease attack of all enemies by 45% for 3 turns.")
            .addField("Ground Smash (Ult)","Cleanse an enemy Stance and buff. Inflict 490% damage. Apply Stun for 1 turn.")
            .addField("Body Over Steel","Reduce damage taken by allies by 20% in extermination.");
        
        
            return message.channel.send(botembed);
    
    
    
    
    
    
    
        }
    
        if(cmd === `${prefix}rredsimon2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("R Red Simon Skills")
            .setColor("#e887e5")
            .addField("Wind Fan","Inflict 240% damage to a single enemy. Apply Cutting.")
            .addField("Heaven Sword","Inflict 180% damage to all enemies. Apply Crushing.")
            .addField("The Sword Circle (Ult)","Inflict 350% damage to all enemies. Apply Penetration.")
            .addField("Clear Water Stop (Passive)","All allies gain 15% more damage with PvP.");
        
        
            return message.channel.send(botembed);
    
    
    
    
    
    
    
        }
    
        if(cmd === `${prefix}ssrblueslader2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Ssr Blue Slader Skills")
            .setColor("#e887e5")
            .addField("Steel Swipe","Inflict 240% damage to a single target. Apply Cutting.")
            .addField("Sawblade Shears","Inflict 220% damage to a single target. Seal Stance skills for 1 turn.")
            .addField("Intimidation (Ult)","Inflict 540% damage to a single target. Infect for 2 turns.")
            .addField("Constraint Circle (Fate)","Inflict 630% damage to a single target. Infect for 2 turns.")
            .addField("Chance (Passive)","If you attack an enemy with an empty ultimate gauge, triple your critical hit chance.");
        
        
            return message.channel.send(botembed);
    
    
    
    
    
    
    
        }
    
        if(cmd === `${prefix}srredslader2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Sr Red Slader Skills")
            .setColor("#e887e5")
            .addField("Blade Wave","Inflict 270% damage to a single enemy, 30% Lifesteal.")
            .addField("Coercion","Reduce an enemy attack skills by 30% and Seal other skills for 2 turns.")
            .addField("Space Cutting (Ult)","Inflict 540% damage to a single enemy and Seal attack skills for 2 turns.")
            .addField("Pressure (Passive)","All enemy critical resistance is reduced by their own critical chance amount.");
        
        
            return message.channel.send(botembed);
    
    
    
    
    
    
    
        }
    
        if(cmd === `${prefix}rredtaizoo2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("R Red Taizo Skills")
            .setColor("#e887e5")
            .addField("Strong Punch","Inflict 240% damage to a single enemy. Apply Penetration.")
            .addField("Muscle mania","Increase defense by 150% and Reflect 60% of damage taken for 2 turns.")
            .addField("Full Power Drop Kick (Ult)","Inflict 700% damage to a single enemy. Apply Rush.")
            .addField("Champions Pride (Passive)","Reduce damage taken by all allies by 20% in PvP.");
        
        
            return message.channel.send(botembed);
    
    
    
    
    
    
    
        }
    
        if(cmd === `${prefix}rredtwigo2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("R Red Twigo Skills")
            .setColor("#e887e5")
            .addField("Decision Hit!","Inflict 360% damage to a single enemy.")
            .addField("Decision Blow","Inflict 225% damage to all enemies.")
            .addField("Decision Annihilation (Ult)","Inflict 350% damage to all enemies. Apply Cutting.")
            .addField("Decision! (Passive)","Increases HP of strength allies by 20%.");
        
        
            return message.channel.send(botembed);
    
    
    
    
    
    
    
        }
    
        if(cmd === `${prefix}srblueweinheidt2`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Sr Blue Wenheidt Skills")
            .setColor("#e887e5")
            .addField("Flash Arrow","Inflict 120% damage to all enemies and Seal attack skills for 1 turn.")
            .addField("Death Arrow","Remove all enemy Stance and inflict 120% damage. Seal Stance skills for 1 turn.")
            .addField("Soul Arrow (Ult)","Inflict 560% damage to a single enemy. Apply Penetration.")
            .addField("Sniper (Passive)","Increases Penetration by 5% at the end of each turn. (Up to 5 times)");
        
        
            return message.channel.send(botembed);
    
    
    
    
        }


//skill 3


        if(cmd === `${prefix}srgreendreyfus3`) {
        
            let botembed = new Discord.RichEmbed()
            .setDescription("Sr Green Dreyfus Skills")
            .setColor("#e887e5")
            .addField("Kingdom Swordsmanship.", "Cleanse a single enemy's buffs and stances and deal 400% damage.")
            .addField("Collapsing", "Inflicts 180% damage to all enemies, and Seal buff and debuff skills for 2 turns.")
            .addField("Breakaway Blade (ult)", "Inflicts 560% damage to a single enemy. Apply Fatal.")
            .addField("Concentration (passive)", "When the character's Ult Gauge reaches MAX, the penetration rate of allies doubles.");
        
        
            return message.channel.send(botembed);
        
        
        }
        
            if(cmd === `${prefix}srgreengustaf3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Sr Green Gustaf Skills")
                .setColor("#e887e5")
                .addField("Snowstorm Dance","Inflicts 360% damage on a single enemy and Seal recovery skills for 2 turns.")
                .addField("Freezing Field","Freeze a single enemy for 2 turns. The frozen target receives an additional 200% damage while affected.")
                .addField("Killing Iceberg (ult)","Inflicts 350% damage to all enemies. Apply Fatal.")
                .addField("Cold Air Release (Passive)","At the start of the battle, decrease the patience rate of all enemies by this character's penetration rate. (Activated only when participating in battle)");
            
            
                return message.channel.send(botembed);
        
            }
        
            if(cmd === `${prefix}ssrredhellbram3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Ssr Red Hellbram Skills")
                .setColor("#e887e5")
                .addField("Fog Wave","Inflicts 450% damage on a single enemy and reduces its Ult Gauge by 3.")
                .addField("Stone Needle","Inflicts 250% damage on a single enemy. Petrify for 2 turns.")
                .addField("Hunting Ball (Ult)","Cleanse all enemies' buffs and stances and deal 280% damage.")
                .addField("Blizzard (Fate)","Cleanse all enemies' buffs and stances and deal 350% damage.")
                .addField("Natural Magic (Passive)","Basic Stats increase by 5% for each surviving Ally character.");
            
            
                return message.channel.send(botembed);
        
            }
        
            if(cmd === `${prefix}srgreenhendrickson3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("sr green hendrickson skills")
                .setColor("#e887e5")
                .addField("Corrosion Tower","Cleanse all enemies' buffs and stances and deal 210% damage.")
                .addField("Purification","Heal all allies HP by 250% of attack and apply Cure for 3 turns.")
                .addField("Destruction (Ult)","Inflicts 350% damage on all enemies. Apply Burst.")
                .addField("Weakness Atack (Passive)","Allies gain 5% penetration when attacked. (Up to 5 times)");
            
            
                return message.channel.send(botembed);
        
            }
        
            if(cmd === `${prefix}ssrredmerlin3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Ssr Red Merlin Skills")
                .setColor("#e887e5")
                .addField("Poison Wave","Inflict 360% damage to a single enemy and Seal recovery skills for 2 turns.")
                .addField("Absolute Temperature","Freeze a single enemy for 2 turns. The frozen target receives an additional 200% damage while affected.")
                .addField("Light of Destruction (Ult)","Inflicts 540% damage on a single enemy and Seal attack skills for 2 turns.")
                .addField("Magic Runaway (Passive)","Penetration Rate increases by 10% for each point of Ult Gauge, and increases by 50% when it reaches MAX.");
            
            
                return message.channel.send(botembed);
        
            }
        
            if(cmd === `${prefix}rgreenalioni3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("R Green Alioni Skills")
                .setColor("#e887e5")
                .addField("Everyone, Assault!","Inflict 450% damage to a single enemy. Apply Crushing.")
                .addField("Oh! Emergency","Take a Stance for 2 turns, Taunt the enemy and reduce damage taken by 75%.")
                .addField("Gather (Ult)","Cleanse an enemy Stance and inflict 700% damage.")
                .addField("Assault Knights! (Passive)","Increases attack of allies by 10%.");
            
            
                return message.channel.send(botembed);
        
            }
        
            if(cmd === `${prefix}ssrgreenban3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Ssr Green Ban Skills")
                .setColor("#e887e5")
                .addField("Audacious Bow","Inflict 400% damage to a single target, 50% Lifesteal.")
                .addField("Snatch","Inflict 250% damage to a single target, steals 50% of the target's attack and defense for 2 turns.")
                .addField("Body Hunt (Ultimate)","Inflict 630% damage to a single target, decrease enemy ultimate gauge by 3.")
                .addField("Draining Spa (Fate)","Inflict 720% damage to a single target, decrease enemy ultimate gauge by 5.")
                .addField("The Undead (Passive)","Heal 20% of this unit's missing health at the start of each turn.");
            
            
                return message.channel.send(botembed);
        
            }
        
            if(cmd === `${prefix}ssrblueban3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Ssr Blue Ban Skills")
                .setColor("#e887e5")
                .addField("Pressure Point Penetration","Inflict 500% damage to an enemy. Apply Rush.")
                .addField("Poisonous Substances","Inflict 180% damage to an enemy. Reduce that target's attack by 40% for 1 turn.")
                .addField("Body Hunt (Ult)","Inflict 630% damage to an enemy. Reduce their ultimate gauge by 3")
                .addField("Dreain Spa (Fate)","Inflict 720% damage to an enemy. Reduce their ultimate gauge by 5.")
                .addField("Power Snatch (Passive)","If this unit wasn't attacked this turn, decrease the opposing team's attack stat by 15%. This stacks up to 5 times. Stacks reset if hit.");
            
            
                return message.channel.send(botembed);
        
            
            }
        
            if(cmd === `${prefix}ssrcoinban3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Ssr Coin Ban Skills")
                .setColor("#e887e5")
                .addField("Life Snatch","Inflict 250% damage to all enemies, 30% Lifesteal.")
                .addField("Snatch","Steal 50% of all enemies attack and defense for 2 turns.")
                .addField("Hunter's Festival (Ult)","Inflict 350% damage to a single target. Steal 50% of that target's attack and defense.")
                .addField("Fake Strike (Fate)","Inflict 400% damage to a single target. Steal 50% of that target's attack and defense.")
                .addField("The Undead (Passive)","If this unit wasn't attacked this turn, decrease the effectiveness of enemy recovery skill by 10% at the start of the next turn. This stacks up to 5 times.");
            
            
                return message.channel.send(botembed);
        
            }
        
            if(cmd === `${prefix}srredban3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Sr Red Ban Skills")
                .setColor("#e887e5")
                .addField("Extinguished Vigor","Inflict 450% damage to a single enemy and reduces its Ultimate gauge by 3.")
                .addField("Immortal Body","Take a Stance for 1 turn, Cleanse debuffs, gain Avoid, and Heal 50% of missing HP at the beginning of the next turn.")
                .addField("Robbery (Ult)","Inflict 700% damage to a single enemy. Apply Rush.")
                .addField("Phisichal Deprivation (Passive)","If HP is less than 50%, Lifesteal increased by 30%.");
            
            
                return message.channel.send(botembed);
        
            }
        
            if(cmd === `${prefix}srgreencain3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Sr Green Cain Skills")
                .setColor("#e887e5")
                .addField("Continuous Kick","Inflict 450% damage to a single enemy. Ignite for 5 turns.")
                .addField("Cleanse an enemy buff and inflict 300% damage. Ignite for 4 turns.")
                .addField("Tornado Flame Fist (Ult)","Inflict 210% damage to all enemies. Apply weakness.")
                .addField("Counterpower (Passive)","Increase attack skills of all allies by 10% in extermination.");
            
            
                return message.channel.send(botembed);
        
            }
        
            if(cmd === `${prefix}ssrsmallbluediane3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Ssr Small Blue Diane Skills")
                .setColor("#e887e5")
                .addField("Fist of Fatal","Inflict 450% damage to a single target. Apply Burst.")
                .addField("Clay Dolls","Inflict 360% damage to a single target. Seal buff and debuff skills for 2 turns.")
                .addField("Judges of The Earth (Ult)","Inflict 560% damage to a single target. Apply Penetration.")
                .addField("Metal Cyclone (Fate)","Inflict 640% damage to a single target. Apply Penetration.")
                .addField("Quick Motion (Passive)","This character's critical hit chance is boosted by its critical resistance.");
            
                return message.channel.send(botembed);
        
            }
        
            if(cmd === `${prefix}ssrbigbluediane3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Ssr Big Blue Diane Skills")
                .setColor("#e887e5")
                .addField("A Thousand Pebbles","Inflict 360% damage to a single target. Seal attack skills for 2 turns.")
                .addField("Riggid Sword of The Earth","Inflict 250% damage to all enemies. Apply Burst.")
                .addField("Roar of Earth (Ult)","Inflict 525% damage to all enemies.")
                .addField("Full Swing Impact (Fate)","Inflict 600% damage to all enemies.")
                .addField("Magic of The Giants (Passive)","Each turn, increase own attack by 6% (Max 30%).");
            
            
                return message.channel.send(botembed);
        
            }
        
            if(cmd === `${prefix}srbigreddiane3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Sr Big Red Diane Skills")
                .setColor("#e887e5")
                .addField("Iron Fist","Cleanse a single enemy Stance and inflict 360% damage. Seal defense skills for 2 turns.")
                .addField("Sand Whirlpool","Reduce all enemy defense skills by 40% for 2 turns.")
                .addField("Earth Explosion (Ult)","Inflict 350% damage to all enemies. Apply Penetration.")
                .addField("Spirit of The Earth (Passive)","All allies will gain 5% Penetration when damaged. (Up to 5 times)");
            
            
                return message.channel.send(botembed);
        
            }
        
            if(cmd === `${prefix}ssrsmallreddiane3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Ssr Small Red Diane Skills")
                .setColor("#e887e5")
                .addField("A Shot of The Earth","Inflict 450% damage to a single enemy. Apply Crushing.")
                .addField("Sand Whirlpool","Reduce a single enemy defense skills by 40% and Seal attack skills for 2 turns.")
                .addField("Referee of The Earth (Ult)","Inflict 560% damage to a single enemy. Apply Penetration.")
                .addField("Aichi Metal Cyclone (Fate)","Inflict 640% damage to a single enemy.")
                .addField("Will Not Give Up (Passive)","Receiving damage increases critical rate by 10% at the start of the next turn. (Up to 5 times)")
            
            
                return message.channel.send(botembed);
        
            }
        
            if(cmd === `${prefix}srreddreyfus3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Sr Red Dreyfus Skills")
                .setColor("#e887e5")
                .addField("Rannuki","Inflict 300% damage to a single enemy and reduces attack skills by 40% for 2 turns.")
                .addField("Clash","Inflict 360% damage to a single enemy. Apply Infect for 2 turns.")
                .addField("Breakaway Blade (Ult)","Inflict 560% damage to a single enemy. Apply Fatal.")
                .addField("Iron Will (Passive)","Increases defense of all strength allies by 50%.");
            
            
                return message.channel.send(botembed);
        
        
        
            }
        
            if(cmd === `${prefix}srgreenelizabeth3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Sr Green Elizabeth & Hawk Skills")
                .setColor("#e887e5")
                .addField("Super Ios Ilusion","Inflict 180% damage to a single enemy and reduces defense skills by 40% for 2 turns.")
                .addField("Super Hawk Illusion","Inflict 250% damage to all enemies. Apply Penetration.")
                .addField("Final Pork Stomping (Ult)","Cleanse the Stance of a single enemy and deal 700% damage.")
                .addField("Bar Mascot (Passive)","Increase all allies recovery skills by 10% in all battles except PvP and extermination.");
            
            
                return message.channel.send(botembed);
        
        
        
        
            }
        
            if(cmd === `${prefix}srredelizabeth3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Sr Red Elizabeth & Hawk Skills")
                .setColor("#e887e5")
                .addField("Rolling Ham Atack","Inflict 500% damage to a single enemy. Apply Rush.")
                .addField("Hawk Knight Rush","Cleanse a single enemy buff effect and deal 360% damage. Also Seal buff and debuff skills for 2 turns.")
                .addField("Final Pork Stomping (Ult)","Cleanse the Stance of a single enemy and deal 700% damage.")
                .addField("Full Stomach (Passive)","If not damaged, basic stats increase by 10% at the beginning of the next turn. (Reset upon taking damage)");
            
            
                return message.channel.send(botembed);
        
        
        
        
            }
        
            if(cmd === `${prefix}ssrgreenelizabeth3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Ssr Green Elizabeth Skills")
                .setColor("#e887e5")
                .addField("Light of Punishment","Cleanse a single enemy Stance and Buff and inflict 400% damage.")
                .addField("Healing Grace","Heal all allies by 400% of attack and Cleanse debuffs.")
                .addField("Life Authority (Ult)","Heal all allies by 420% of attack and increase Ult Gauge by 2.")
                .addField("Godess Garden (Fate)","Heal all allies by 480% of attack and increase Ult Gauge by 2.")
                .addField("Desperately Prepared (Passive)","At the start of battle, increases Ult Gauge by 2.");
            
            
                return message.channel.send(botembed);
        
        
        
        
            }
        
            if(cmd === `${prefix}srbluefresia3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Sr Blue Fresia Skills")
                .setColor("#e887e5")
                .addField("Storm Dance","Inflict 180% damage to all enemies. Apply Poison for 3 turns.")
                .addField("Corroded Insect","Increase damage taken by all enemies by 50% for 3 turns.")
                .addField("Rain of Fantasies (Ult)","Inflict 20% of max HP per turn to all enemies for 3 turns. Apply Corrosion.")
                .addField("Bloodsuckers (Passive)","recovery rate of all enemies is reduced by your missing HP.");
            
            
                return message.channel.send(botembed);
        
        
        
        
            }
        
            if(cmd === `${prefix}srgreengilthunder3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Sr Green Gilthunder Skills")
                .setColor("#e887e5")
                .addField("Lightning Strike","Inflict 250% damage to all enemies. Apply Burst.")
                .addField("Lightning Charge","Increase the attack of all allies by 60% for 2 turns.")
                .addField("Killing of The Emperor (Ult)","Inflict 560% damage to a single enemy. Apply Shock for 4 turns.")
                .addField("The Power of The Emperor (Passive)","Increases all allies defense skills by 15% in PvP.");
            
            
                return message.channel.send(botembed);
        
        
        
        
            }
        
            if(cmd === `${prefix}ssrredgilthunder3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Ssr Red Gilthunder Skills")
                .setColor("#e887e5")
                .addField("Thunder God Semi Final","Inflict 200% damage to all enemies. Apply Shock for 4 turns.")
                .addField("Heavy Thunder Armor","Take a Stance for 2 turns, Taunt all enemies and reduce incoming damage by 75%.")
                .addField("Sword of Thunder (Ult)","Inflict 630% damage to a single target. Apply Burst.")
                .addField("Thunder Smoke (Fate)","Inflict 720% damage to a single target. Apply Burst.")
                .addField("Diamont Holy Knight (Passive","For every point on the ultimate gauge, increase this unit's patience rate by 10%. When the ultimate gauge is max, double the patience rate.");
            
            
                return message.channel.send(botembed);
        
        
        
        
            }
        
            if(cmd === `${prefix}srbluegilthunder3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Sr Blue Gilthunder Skills")
                .setColor("#e887e5")
                .addField("Thunder","Inflict 400% damage to a single enemy. Apply Fatal.")
                .addField("Thunder Emperors Iron Armor","Inflict 400% damage to a single enemy. Apply Shock for 4 turns.")
                .addField("Killing of The Emperor (Ult)","Inflict 560% damage to a single enemy. Apply Shock for 4 turns.")
                .addField("Princess Knight (Passive)","Increases defense of all speed allies by 50%.");
            
            
                return message.channel.send(botembed);
        
        
        
        
            }
        
            if(cmd === `${prefix}rbluegolgius3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("R Blue Golgius Skills")
                .setColor("#e887e5")
                .addField("Surprise Atack","Inflict 400% damage to a single enemy. Apply Fatal.")
                .addField("Dark Machine Injection","Inflict 150% damage to all enemies. Apply Weakness.")
                .addField("Covert Blow (Ult)","Inflict 490% damage to a single enemy. Apply Poison for 3 turns.")
                .addField("Ambush (Passive)","Increase attack of allies by 15% in extermination.");
            
            
                return message.channel.send(botembed);
        
        
        
        
            }
        
            if(cmd === `${prefix}ssrbluegowther3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Ssr Blue Gowther Skills")
                .setColor("#e887e5")
                .addField("Pain Edit","Inflict 150% damage to all enemies. Apply Weakness.")
                .addField("Blackout","Seal debuff skills and reduce attack of all enemies by 40% for 2 turns.")
                .addField("Memory Arrow","Inflict 350% damage to all enemies. Reduce opposing ultimate gauge by 3.")
                .addField("Holy Barista (Fate)","Inflict 400% damage to all enemies. Reduce opposing ultimate gauge by 5.")
                .addField("Automatic recovery (Passive)","Each time a debuff wears off on your team, Heal 10% of missing HP.");
            
            
                return message.channel.send(botembed);
        
        
        
        
            }
        
            if(cmd === `${prefix}srgreengowther3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Sr Green Gowther Skills")
                .setColor("#e887e5")
                .addField("Runaway","Inflict 400% damage to a single enemy. Ranks down enemy skills. Also reduce enemy Ultimate gauge by the number of skills lowered.")
                .addField("Nightmare Stories","Reduce a single enemy Ultimate damage by 50% for 3 turns.")
                .addField("Puppet Men (Ult)","Inflict 560% damage to a single enemy. Ranks down enemy skills. Also reduce enemy Ultimate gauge by the number of skills lowered.")
                .addField("Mental Manipulation (Passive)","Reduce all enemies defense skills by 15% in PvP.");
            
            
                return message.channel.send(botembed);
        
        
        
        
            }
        
            if(cmd === `${prefix}ssrcoingowther3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Ssr Red Coin Gowther Skills")
                .setColor("#e887e5")
                .addField("Arrow of Memory","Inflict 180% damage on all enemies and Seal attack skills for 2 turns.")
                .addField("Arrow Erosion","Rank up all ally skills and increase basic stats by 20% for 3 turns.")
                .addField("Memory of The Lid (Ult)","Inflict 350% damage to all enemies and reduces the Ultimate gauge by 3.")
                .addField("Holy Barista (Fate)","Inflict 400% damage to all enemies and reduces the Ultimate gauge by 5.")
                .addField("Trick (Passive)","If this unit wasn't attacked this turn, all your allies damage increases by 10% at the start of the next turn. (Up to 5 times, resets when damaged).");
            
            
                return message.channel.send(botembed);
        
        
        
        
            }
        
            if(cmd === `${prefix}ssrgreengriamore3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Ssr Green Griamore Skills")
                .setColor("#e887e5")
                .addField("Moving Fortress","Inflict 180% damage to all enemies. Seal Stance skills for 2 turns.")
                .addField("Barrier Shield","Take a Stance for 2 turns, increase HP skill potency by 25% and reduce damage received by 75%.")
                .addField("The Wailing Wall (Ult)","Increase this unit's defense by 420% and Taunt all enemies for 4 turns.")
                .addField("Barrier Combination (Fate)","Increase this unit's defense by 480% and Taunt all enemies for 5 turns.")
                .addField("Strong Will (Passive)","Increase this unit's attack by 30% of its defense.");
            
            
                return message.channel.send(botembed);
        
        
        
        
            }
        
            if(cmd === `${prefix}srbluegriamore3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Sr Blue Griamore Skills")
                .setColor("#e887e5")
                .addField("Barrier Collision","Inflict 450% damage to a single enemy. Apply Crushing.")
                .addField("Retangular Shield","Take a Stance for 2 turns, Taunt the enemy, and reduce damage taken by 75%.")
                .addField("Single Cell to Compress (Ult)","Inflict 300% damage to all enemies and reduces attack skills by 30% for 3 turns.")
                .addField("Perfect Protection (Passive)","Increase all allies defense skills by 20% in extermination.");
            
            
                return message.channel.send(botembed);
        
        
            }
        
            if(cmd === `${prefix}srredgriamore3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Sr Red Griamore Skills")
                .setColor("#e887e5")
                .addField("Bang","Inflict 600% damage to a single enemy.")
                .addField("Barrier","Produce a shield of 375% attack on all allies for 2 turns.")
                .addField("Single Cell To Compress","Inflict 300% damage to all enemies and reduces attack skills by 30% for 3 turns.")
                .addField("The Majesty of Champions","Increase all allies recovery skills by 10% in PvP.");
            
            
                return message.channel.send(botembed);
        
        
        
        
            }
        
            if(cmd === `${prefix}ssrredguila3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Ssr Red Guila Skills")
                .setColor("#e887e5")
                .addField("Killer Mine","Cleanse a single enemy's buff and inflict 400% damage.")
                .addField("Shot Bomb","Cleanse a single enemy stance and inflict 400% damage. Ignite for 3 turns.")
                .addField("Chain Explosion (Ult)","Inflict 350% damage to all enemies. Inflict Fatal.")
                .addField("Bomb Cyclone (Fate)","Inflict 400% damage to all enemies. Inflict Fatal.")
                .addField("Burning Will (Passive)","All allied HP skills are enhanced by 15% in extermination battle.");
            
            
                return message.channel.send(botembed);
        
        
        
        
            }
        
            if(cmd === `${prefix}srblueguila3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Sr Blue Guila Skills")
                .setColor("#e887e5")
                .addField("Flame Focus","Inflict 200% damage to all enemies. Ignite for 5 turns.")
                .addField("Ultra Purification","Heal 50% of all allies missing HP and Cleanse all debuffs.")
                .addField("Brillian Detonation (Ult)","Cleanse all enemy Stances, deal 280% damage, and Ignite for 4 turns.")
                .addField("Blood of Genie (Passive)","If not attacked, Ultimate gauge increases by 1 at the beginning of the next turn.");
            
            
                return message.channel.send(botembed);
        
        
        
        
            }
        
            if(cmd === `${prefix}greenhellbram3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Ssr Green Hellbram Skills")
                .setColor("#e887e5")
                .addField("Blade Pitch","Inflict 180% damage to all enemies. Apply Poison for 3 turns.")
                .addField("Fairy Wind","Increase the attack of all allies by 30% for 2 turns.")
                .addField("Hunt Ball (Ult)","Cleanse all enemy buff effects and Stance changes. Inflict 280% damage to all enemies.")
                .addField("Boundaries of Death (Passive)","One time, if this unit's HP falls to zero, Heal HP equal to 100% of this unit's defense.");
            
            
                return message.channel.send(botembed);
        
        
        
        
            }
        
            if(cmd === `${prefix}ssrbluehendrickson3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Ssr Blue Hendrickson Skills")
                .setColor("#e887e5")
                .addField("Blood Feast","Inflict 400% damage to a single target. 40% Lifesteal.")
                .addField("Flare Flicker","Inflict 450% damage to a single target. Ignite for 5 turns.")
                .addField("Hell Flame Wave (Ult)","Inflict 560% damage to a single target. 40% Lifesteal.")
                .addField("Celestial Blade (Fate)","Inflict 640% damage to a single target. 40% Lifesteal.")
                .addField("Regeneration (Passive)","Each turn recovery rate increases by 10% (Max 5 times).");
            
            
                return message.channel.send(botembed);
        
        
        
        
            }
        
            if(cmd === `${prefix}ssrredhowzer3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Ssr Red Howzer Skills")
                .setColor("#e887e5")
                .addField("Wind Ascencion","Inflict 250% damage to all enemies. Apply Penetration.")
                .addField("Super Cyclone","Inflict 250% damage to all enemies. Apply Cutting.")
                .addField("Rising Tornado (Ult)","Inflict 350% damage to all enemies. Ranks down enemy skills. Also reduce enemy Ultimate gauge by the number of skills lowered.")
                .addField("Thunder Dragon Castle (Fate)","Inflict 400% damage to all enemies. Ranks down enemy skills. Also reduce enemy Ultimate gauge by the number of skills lowered.")
                .addField("Leaders Instruments (Passive)","Increases all base stats of ally humans by 8%.");
            
            
                return message.channel.send(botembed);
        
        
        
        
            }
        
            if(cmd === `${prefix}srbluehowzer3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Sr Blue Howzer Skills")
                .setColor("#e887e5")
                .addField("Wind Breaker","Inflict 150% damage to all enemies and reduces defense skills by 30% for 3 turns.")
                .addField("Blockade of Defense","Decrease a single enemy HP by 25% for 3 turns.")
                .addField("Ryufu (Ult)","Inflict 540% damage to a single enemy and Seal recovery skills for 2 turns.")
                .addField("Come On! (Passive)","All enemy critical resistance is reduced by their own critical chance amount.");
            
            
                return message.channel.send(botembed);
        
        
        
        
            }
        
            if(cmd === `${prefix}srgreenhowzer3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Sr Green Howzer Skills")
                .setColor("#e887e5")
                .addField("Whirl Shock","Cleanse a single enemy Stance and inflict 500% damage.")
                .addField("Blow of Wind","Take a Stance for 1 turn. When an ally is attacked, counterattack for 400% damage.")
                .addField("Ryufu (Ult)","Inflict 540% damage to a single enemy and Seal recovery skills for 2 turns.")
                .addField("Its Burning (Passive","For each point in the Ultimate gauge, critical chance increases by 10%. When the Ultimate gauge is full, critical chance doubles.");
            
            
                return message.channel.send(botembed);
        
        
        
        
            }
        
            if(cmd === `${prefix}rgreenhugo3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("R Green Hugo Skills")
                .setColor("#e887e5")
                .addField("Windbrake Of Ruin","Inflict 450% damage to a single enemy. Apply Burst.")
                .addField("Turn Off","Inflict 275% damage to a single enemy. Apply Weakness.")
                .addField("Chaos Blow (Ult)","Inflict 385% damage to a single enemy. Apply Weakness.")
                .addField("Tanker (Passive)","Defense skills of all allies increased by 20% when Ultimate gauge is full.");
            
            
                return message.channel.send(botembed);
        
        
        
        
            }
        
            if(cmd === `${prefix}ssrgreenjericho3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Ssr Green Jericho Skills")
                .setColor("#e887e5")
                .addField("Flash","Inflict 275% damage to a single target. Apply Weakness.")
                .addField("Divine Speed Strike","Inflict 325% damage to a single target. Apply Bleed for 2 turns.")
                .addField("Sole Sword Slash (Ult)","Inflict 560% damage to a single target. Apply Fatal.")
                .addField("Chain Slash (Fate)","Inflict 640% damage to a single target. Apply Fatal.")
                .addField("Continuous Cutting (Passive)","Each skill you use with this unit increases this unit's critical hit chance by 5%.");
            
            
                return message.channel.send(botembed);
        
        
        
        
            }
        
            if(cmd === `${prefix}srredjericho3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Sr Red Jericho Skills")
                .setColor("#e887e5")
                .addField("Skill One","Inflict 325% damage to a single enemy. Apply Bleed for 2 turns.")
                .addField("Blade of Pain","Inflict 450% damage to a single enemy. Apply Burst.")
                .addField("Shikansen Tensen (Ult)","Inflict 455% damage to a single enemy. Apply Bleed for two turns.")
                .addField("There is a Chance (Passive)","Increases the attack of allies by 10%.");
            
            
                return message.channel.send(botembed);
        
        
        
        
            }
        
            if(cmd === `${prefix}srbluejericho3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Sr Blue Jericho Skills")
                .setColor("#e887e5")
                .addField("Gods Fast Bone","Inflict 400% damage to a single enemy. Apply Cutting.")
                .addField("Super Recovery","Heal 25% of all allies max HP.")
                .addField("Shinkansen Tensen (Ult)","Inflict 455% damage to a single enemy. Apply Bleed for two turns.")
                .addField("Magic Blade (Passive)","Increases the attack of allies by 10%.");
            
            
                return message.channel.send(botembed);
        
        
        
        
            }
        
            if(cmd === `${prefix}srgreenjilian3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Sr Green Jilian Skills")
                .setColor("#e887e5")
                .addField("Crosshair","Inflict 400% damage to a single enemy. Apply Penetration.")
                .addField("Stop Shackles","Cleanse all enemy Stance and inflict 250% damage.")
                .addField("Dangerous Pain (Ult)","Cleanse an enemy Stance and inflict 540% damage. Seal Stance skills for 2 turns.")
                .addField("Party Support (Passive)","Increases HP of all vitality allies by 20%.");
            
            
                return message.channel.send(botembed);
        
        
        
        
            }
        
            if(cmd === `${prefix}srredjude3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Sr Red Jude Skills")
                .setColor("#e887e5")
                .addField("Skewer","Inflict 360% damage to a single enemy and Seal attack skills for 2 turns.")
                .addField("Yui","Cleanse all enemy Stance and buffs. Iinflict 210% damage.")
                .addField("Pain of Mourning (Ult)","Inflict 540% damage to a single enemy and Seal attack skills for 2 turns.")
                .addField("Torture Officer (Passive)","When allies are attacked, they reflect 10% of the damage they receive.");
            
            
                return message.channel.send(botembed);
        
        
        
        
        
            }
        
            if(cmd === `${prefix}ssrblueking3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Ssr Blue King Skills")
                .setColor("#e887e5")
                .addField("Fossilization","Inflict 250% damage to a single target. Petrify for 2 turn.")
                .addField("Flower","Heal 50% of missing HP and Cleanse all debuffs.")
                .addField("Sunflower (Ult)","Inflict 420% damage to all enemies. Apply Crushing.")
                .addField("Cross Fire (Fate)","Inflict 480% damage to all enemies. Apply Crushing.")
                .addField("Fairy King","Increases base stats of all fairy clan members by 8%.");
            
            
                return message.channel.send(botembed);
        
        
        
        
        
        
        
            }
        
            if(cmd === `${prefix}ssrfatgreenking3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Ssr Fat Green King Skills")
                .setColor("#e887e5")
                .addField("Guardian Beast","Inflict 325% damage to all enemies. Apply Rush.")
                .addField("Severe Poison","Inflict 180% damage to all enemies. Apply Poison for 3 turns.")
                .addField("Guardian Beast Invasion (Ult)","Inflict 560% damage to a single target. Weaken defense abilities by 40% for 2 turns.")
                .addField("Sharpness Wisp (Fate)","Inflict 640% damage to a single target. Weaken defense abilities by 40% for 2 turns.")
                .addField("Magic Expansion (Passive)","When the ultimate gauge is at max, increase ally defense by 100%.");
            
            
                return message.channel.send(botembed);
        
        
        
        
        
        
        
            }
        
            if(cmd === `${prefix}ssrgreenking3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Ssr Green King Skills")
                .setColor("#e887e5")
                .addField("Bumblebee","Inflict 400% to a single target. Apply Fatal.")
                .addField("Toxic Garden","Inflict 400% to a single target. Apply Ruin.")
                .addField("Sunflower (Ult)","Inflict 420% damage to all enemies. Apply Crushing.")
                .addField("Cross Fire (Fate)","Inflict 480% damage to all enemies. Apply Crushing.")
                .addField("Magic Control (Passive)","For each bar in the ultimate move gauge, increase critical hit chance by 10%.");
            
            
                return message.channel.send(botembed);
        
        
        
        
        
        
        
            }
        
            if(cmd === `${prefix}ssrbluefatking3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Ssr Blue Fat King Skills")
                .setColor("#e887e5")
                .addField("Spirit Skill","Inflict 325% damage to a single enemy. Apply Bleed for 2 turns.")
                .addField("Skill Two","Take a Stance for 1 turn. When an ally is attacked, counterattack for 400% damage.")
                .addField("Advance Guardian beast (Ult)","Inflict 560% damage to a single enemy and reduces defense skills by 40% for 2 turns.")
                .addField("Sharp Wisp (Fate)","Inflict 640% damage to a single enemy and reduces defense skills by 40% for 2 turns.")
                .addField("Fairy Kings Power (Passive)","When damaged, Heal 15% of max HP at the beginning of the next turn.");
            
            
                return message.channel.send(botembed);
        
        
        
        
        
        
        
            }
        
            if(cmd === `${prefix}rbluemarmas3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("R Blue Marmas Skills")
                .setColor("#e887e5")
                .addField("Maracas Smash","Inflict 180% damage to all enemies, and Seal buff and debuff skills for 2 turns.")
                .addField("Gravity x10","Decrease all enemy defenses by 75% for 3 turns.")
                .addField("Gravity x30 (Ult)","Reduce all enemy defense skills by 40% for 3 turns.")
                .addField("Gravity Field (Passive)","Increases HP of all speed allies by 20%.");
            
            
                return message.channel.send(botembed);
        
        
        
        
        
        
        
            }
        
            if(cmd === `${prefix}ssrcoinmeliodas3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Ssr Coin Red Meliodas Skills")
                .setColor("#e887e5")
                .addField("Purgatory Flames","Inflict 450% damage to a single target. Ignite for 5 turns.")
                .addField("Hellfire Explosion","Inflict 360% damage to a single target. Infect for 2 turns.")
                .addField("The Hell (Ult)","Inflict 385% damage to a single target, apply Weakness.")
                .addField("Devil Assault (Fate)","Inflict 440% damage to a single target, apply Weakness.")
                .addField("Rage (Passive)","If an allied character dies, increase this character's critical rate by 50% (Can only trigger once per battle).");
            
            
                return message.channel.send(botembed);
        
        
        
        
        
        
        
            }
        
            if(cmd === `${prefix}ssrgreenmeliodas3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Ssr Green Meliodas Skills")
                .setColor("#e887e5")
                .addField("Wild Hell Fire","Inflict 600% damage to a single target.")
                .addField("Full Counter","Take a counterattack Stance, deflect a single attack at 250% damage based on missing HP.")
                .addField("Thousands Cut of God (Ult)","Cleanse an enemy target's buffs and Stance changes, inflict 490% damage to a single target and Stun for 1 turn.")
                .addField("Metal Clash (Fate)","Cleanse an enemy target's buffs and Stance changes, inflict 560% damage to a single target and Stun for 1 turn.")
                .addField("All or Nothing (Passive)","The less health this unit has the more likely it is to land critical hits.");
            
            
                return message.channel.send(botembed);
        
        
        
        
        
        
        
            }
        
            if(cmd === `${prefix}srbluemeliodas3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Sr Blue Meliodas Skills")
                .setColor("#e887e5")
                .addField("Triple Strike","Inflict 275% damage to a single enemy. Apply Weakness.")
                .addField("Total Counter","Take a Stance for 1 turn, gain Avoid, then counterattack and deal 400% damage.")
                .addField("Soul of Genie (Ult)","Inflict 560% damage to a single enemy. Apply Cutting.")
                .addField("Master of The Fast Tavern (Passive)","If not attacked, critical chance increases by 30% at the start of the next turn.(Resets when attacked).");
            
            
                return message.channel.send(botembed);
        
        
        
        
        
        
        
            }
        
            if(cmd === `${prefix}ssrcoinmerlin3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Ssr Green Coin Merlin Skills")
                .setColor("#e887e5")
                .addField("Dark Erosion","Inflict 400% damage to a single enemy and reduces its Ultimate gauge by 3.")
                .addField("Perfect Cube","Produce a shield of 375% attack on all allies for two turns.")
                .addField("Light of Destruction (Ult)","Inflict 540% damage to a single enemy and Seal attack skills for 2 turns.")
                .addField("Various Samples (Passive)","At the start of the battle, the Ultimate gauge of all allies is increased by 1.");
            
            
                return message.channel.send(botembed);
        
        
        
        
        
        
        
            }
        
            if(cmd === `${prefix}rgreenruin3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("R Green Ruin Skills")
                .setColor("#e887e5")
                .addField("Slaughter of Darkness","Cleanse a enemy Stance and buff. Inflict 400% damage.")
                .addField("Hallucination of Pain","Decrease attack of all enemies by 75% for 3 turns.")
                .addField("Ground Smash (Ult)","Cleanse an enemy Stance and buff. Inflict 490% damage. Apply Stun for 1 turn.")
                .addField("Body Over Steel","Reduce damage taken by allies by 20% in extermination.");
            
            
                return message.channel.send(botembed);
        
        
        
        
        
        
        
            }
        
            if(cmd === `${prefix}rredsimon3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("R Red Simon Skills")
                .setColor("#e887e5")
                .addField("Wind Fan","Inflict 400% damage to a single enemy. Apply Cutting.")
                .addField("Heaven Sword","Inflict 300% damage to all enemies. Apply Crushing.")
                .addField("The Sword Circle (Ult)","Inflict 350% damage to all enemies. Apply Penetration.")
                .addField("Clear Water Stop (Passive)","All allies gain 15% more damage with PvP.");
            
            
                return message.channel.send(botembed);
        
        
        
        
        
        
        
            }
        
            if(cmd === `${prefix}ssrblueslader3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Ssr Blue Slader Skills")
                .setColor("#e887e5")
                .addField("Steel Swipe","Inflict 400% damage to a single target. Apply Cutting.")
                .addField("Sawblade Shears","Inflict 360% damage to a single target. Seal Stance skills for 2 turns.")
                .addField("Intimidation (Ult)","Inflict 540% damage to a single target. Infect for 2 turns.")
                .addField("Constraint Circle (Fate)","Inflict 630% damage to a single target. Infect for 2 turns.")
                .addField("Chance (Passive)","If you attack an enemy with an empty ultimate gauge, triple your critical hit chance.");
            
            
                return message.channel.send(botembed);
        
        
        
        
        
        
        
            }
        
            if(cmd === `${prefix}srredslader3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Sr Red Slader Skills")
                .setColor("#e887e5")
                .addField("Blade Wave","Inflict 400% damage to a single enemy, 40% Lifesteal.")
                .addField("Coercion","Reduce an enemy attack skills by 40% and Seal other skills for 3 turns.")
                .addField("Space Cutting (Ult)","Inflict 540% damage to a single enemy and Seal attack skills for 2 turns.")
                .addField("Pressure (Passive)","All enemy critical resistance is reduced by their own critical chance amount.");
            
            
                return message.channel.send(botembed);
        
        
        
        
        
        
        
            }
        
            if(cmd === `${prefix}rredtaizoo3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("R Red Taizo Skills")
                .setColor("#e887e5")
                .addField("Strong Punch","Inflict 400% damage to a single enemy. Apply Penetration.")
                .addField("Muscle mania","Increase defense by 250% and Reflect 100% of damage taken for 2 turns.")
                .addField("Full Power Drop Kick (Ult)","Inflict 700% damage to a single enemy. Apply Rush.")
                .addField("Champions Pride (Passive)","Reduce damage taken by all allies by 20% in PvP.");
            
            
                return message.channel.send(botembed);
        
        
        
        
        
        
        
            }
        
            if(cmd === `${prefix}rredtwigo3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("R Red Twigo Skills")
                .setColor("#e887e5")
                .addField("Decision Hit!","Inflict 600% damage to a single enemy.")
                .addField("Decision Blow","Inflict 375% damage to all enemies.")
                .addField("Decision Annihilation (Ult)","Inflict 350% damage to all enemies. Apply Cutting.")
                .addField("Decision! (Passive)","Increases HP of strength allies by 20%.");
            
            
                return message.channel.send(botembed);
        
        
        
        
        
        
        
            }
        
            if(cmd === `${prefix}srblueweinheidt3`) {
            
                let botembed = new Discord.RichEmbed()
                .setDescription("Sr Blue Wenheidt Skills")
                .setColor("#e887e5")
                .addField("Flash Arrow","Inflict 180% damage to all enemies and Seal attack skills for 2 turns.")
                .addField("Death Arrow","Cleanse all enemy Stance and inflict 180% damage. Seal Stance skills for 2 turns.")
                .addField("Soul Arrow (Ult)","Inflict 560% damage to a single enemy. Apply Penetration.")
                .addField("Sniper (Passive)","Increases Penetration by 5% at the end of each turn. (Up to 5 times)");
            
            
                return message.channel.send(botembed);
        
        
        
        
    



    

    





};

});




bot.login(botconfig.token);