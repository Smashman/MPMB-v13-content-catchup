var iFileName = "ua_20210126_Gothic-Lineages.js";
RequiredSheetVersion(13);

// Define the source
SourceList["UA:GL"] = {
	name : "Unearthed Arcana: Gothic Lineages",
	abbreviation : "UA:GL",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2021/dnd/downloads/UA2021_GothicLineages.pdf",
	date : "2021/01/26"
};

// Dhampir race written by "Slitherin' Sneakin' Snek#0616" on Discord (also known as MarvinTheParanoidAndroid)
RaceList["dhampir"] = {
	regExpSearch : /dhampir/i,
	name : "Dhampir",
	sortname : "Dhampir",
	source : ["UA:GL", 2],
	plural : "Dhampir",
	size : 3,
	speed : {
		walk : { spd : 35, enc : 25 },
		climb : { spd : "walk", enc : "walk" }
			},
	weapons : ["dhampir bite"],
	vision : ["Darkvision", 60], 
	languageProfs : [1, "Common"],
	scorestxt : "Dhampir (+2 to one ability score of my choice, and +1 to a different score of my choice)",
	features : {
		"bite (empower self)" : {
			name : "Bite (empower self)",
			minlevel : 1,
			usages: "Proficiency bonus per ",
			usagescalc : "event.value = What('Proficiency Bonus')",
			recovery: "long rest",
			},
	},
	trait : "Dhampir (+2 to one ability score of my choice, and +1 to a different score of my choice)\n  Size: I am Small or Medium (my choice)\n Type: I am both Humanoid and Undead.\nSpider Climb: I have a climb speed equal to my walking speed. Starting from third level, I can move up, down and across vertical surfaces and upside down along ceilings, while leaving my hands free.\n When I hit a creature that isn't a construct or undead with my bite, I can either gain hit points or bonus to my next attack roll/ability check equal to the damage deal.",
};

AddRacialVariant("dhampir", "medium", {
	regExpSearch : /dhampir medium/i,
	name : "Dhampir (medium)",
	source : ["UA:GL", 2],
	size : 3,
	trait : "Dhampir (+2 to one ability score of my choice, and +1 to a different score of my choice)\n Type: I am both Humanoid and Undead.\nSpider Climb: I have a climb speed equal to my walking speed. Starting from third level, I can move up, down and across vertical surfaces and upside down along ceilings, while leaving my hands free.\n When I hit a creature that isn't a construct or undead with my bite, I can either gain hit points or bonus to my next attack roll/ability check equal to the damage deal.",
});

AddRacialVariant("dhampir", "small", {
	regExpSearch : /dhampir small/i,
	name : "Dhampir (small)",
	source : ["UA:GL", 2],
	size : 4,
	trait : "Dhampir (+2 to one ability score of my choice, and +1 to a different score of my choice)\n Type: I am both Humanoid and Undead.\n Spider Climb: I have a climb speed equal to my walking speed. Starting from third level, I can move up, down and across vertical surfaces and upside down along ceilings, while leaving my hands free.\n When I hit a creature that isn't a construct or undead with my bite, I can either gain hit points or bonus to my next attack roll/ability check equal to the damage deal.",
});


WeaponsList["dhampir bite"] = {
	regExpSearch : /^(?=.*dhampir)(?=.*bite).*$/i,
	name : "Dhampire Bite",
	source : ["UA:GL", 2],
	ability : 3,
	type : "Natural",
	damage : [1, 4, "piercing"],
	range : "Melee",
	description : "Advantage when at or under half hit points, Can empower myself on hit",
	abilitytodamage : true,
	monkweapon : true
	
};

// Hexblood race written by "Slitherin' Sneakin' Snek#0616" on Discord (also known as MarvinTheParanoidAndroid)
RaceList["hexblood"] = {
	regExpSearch : /hexblood/i,
	name : "Hexblood",
	sortname : "Hexblood",
	source : ["UA:GL", 4],
	plural : "Hexbloods",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
			},
	vision : ["Darkvision", 60],
	savetxt : {
		adv_vs : ["charmed"]
	},
	languageProfs : [1, "Common"],
	scorestxt : "Hexblood (+2 to one ability score of my choice, and +1 to a different score of my choice)",
	features : {
		"hex magic (disguise self)" : {
			name : "Hex Magic (disguise self)",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["disguise self"],
				selection : ["disguise self"],
				oncelr : true,
			},
		},
		"hex magic (hex)" : {
			name : "Hex Magic (hex)",
			spellcastingBonus : {
				spells : ["hex"],
				selection : ["hex"],
				oncelr : true,
			},
		},
		"magic token" : {
			name : "Magic Token",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
		},
	},
	
	trait : "Hexblood (+2 to one ability score of my choice, and +1 to a different score of my choice)\n Size: I am Small or Medium (my choice)\n Type: I am both Humanoid and Fey\n As an action, I can imbue a token with magic until I finish a long rest. If I am within 10 miles, I can use an action to either send a telepathic message (up to 25 words) to the creature holding or carrying the token or enter a trance for 1 minute, during which I see and hear from the token as if I were located where it is. When doing this I am blinded and deafened in regard to my own surroundings, which destroys the token.",
};

AddRacialVariant("hexblood", "medium", {
	regExpSearch : /hexblood medium/i,
	name : "Hexblood (medium)",
	source : ["UA:GL", 4],
	size : 3,
	trait : "Hexblood (+2 to one ability score of my choice, and +1 to a different score of my choice)\n Type: I am both Humanoid and Fey\n As an action, I can imbue a token with magic until I finish a long rest. If I am within 10 miles, I can use an action to either send a telepathic message (up to 25 words) to the creature holding or carrying the token or enter a trance for 1 minute, during which I see and hear from the token as if I were located where it is. When doing this I am blinded and deafened in regard to my own surroundings, which destroys the token.",
});

AddRacialVariant("hexblood", "small", {
	regExpSearch : /hexblood small/i,
	name : "Hexblood (small)",
	source : ["UA:GL", 4],
	size : 4,
	trait : "Hexblood (+2 to one ability score of my choice, and +1 to a different score of my choice)\n Type: I am both Humanoid and Fey\n As an action, I can imbue a token with magic until I finish a long rest. If I am within 10 miles, I can use an action to either send a telepathic message (up to 25 words) to the creature holding or carrying the token or enter a trance for 1 minute, during which I see and hear from the token as if I were located where it is. When doing this I am blinded and deafened in regard to my own surroundings, which destroys the token.",
});

// Reborn race written by "Slitherin' Sneakin' Snek#0616" on Discord (also known as MarvinTheParanoidAndroid)
RaceList["reborn"] = {
	regExpSearch : /reborn/i,
	name : "Reborn",
	sortname : "Reborn",
	source : ["UA:GL", 5],
	plural : "Reborns",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
			},
	vision : ["Darkvision", 60],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["disease", "poison", "death saves"],
	},
	languageProfs : [1, "Common"],
	scorestxt : "Reborn (+2 to one ability score of my choice, and +1 to a different score of my choice)",
	features : {
		"knowledge from a past life" : {
			name : "Knowledge from a Past Life",
			minlevel : 1,
			usages: "Proficiency bonus per ",
			usagescalc : "event.value = What('Proficiency Bonus')",
			recovery: "long rest",
			},
	},
	
	trait : "Reborn (+2 to one ability score of my choice, and +1 to a different score of my choice)\n Size: I am Small or Medium (my choice)\n Type: I am Humanoid and either Construct or Undead (my choice)\n Deathless Nature: I don't need to eat, drink, or breathe. I don't need to sleep, and magic can't put me to sleep. I can finish a long rest in 4 hours, during which I remain conscious\n Knowledge from a past Life: When I make an ability check that uses a skill, I can roll a d6 and add the number rolled to the check. I can do this a number of times equal to my proficency bonus per long rest",
};

AddRacialVariant("reborn", "medium construct",{
	regExpSearch : /reborn medium construct/i,
	name : "Construct Reborn (medium)",
	source : ["UA:GL", 5],
	size : 3,
	trait : "Reborn (+2 to one ability score of my choice, and +1 to a different score of my choice)\n Type: I am Humanoid and Construct\n Deathless Nature: I don't need to eat, drink, or breathe. I don't need to sleep, and magic can't put me to sleep. I can finish a long rest in 4 hours, during which I remain conscious\n Knowledge from a past Life: When I make an ability check that uses a skill, I can roll a d6 and add the number rolled to the check. I can do this a number of times equal to my proficency bonus per long rest",
});

AddRacialVariant("reborn", "medium undead",{
	regExpSearch : /reborn medium undead/i,
	name : "Undead Reborn (medium)",
	source : ["UA:GL", 5],
	size : 3,
	trait : "Reborn (+2 to one ability score of my choice, and +1 to a different score of my choice)\n Type: I am Humanoid and Undead\n Deathless Nature: I don't need to eat, drink, or breathe. I don't need to sleep, and magic can't put me to sleep. I can finish a long rest in 4 hours, during which I remain conscious\n Knowledge from a past Life: When I make an ability check that uses a skill, I can roll a d6 and add the number rolled to the check. I can do this a number of times equal to my proficency bonus per long rest",
});

AddRacialVariant("reborn", "small construct",{
	regExpSearch : /reborn small construct/i,
	name : "Construct Reborn (small)",
	source : ["UA:GL", 5],
	size : 3,
	trait : "Reborn (+2 to one ability score of my choice, and +1 to a different score of my choice)\n Type: I am Humanoid and Construct\n Deathless Nature: I don't need to eat, drink, or breathe. I don't need to sleep, and magic can't put me to sleep. I can finish a long rest in 4 hours, during which I remain conscious\n Knowledge from a past Life: When I make an ability check that uses a skill, I can roll a d6 and add the number rolled to the check. I can do this a number of times equal to my proficency bonus per long rest",
});

AddRacialVariant("reborn", "small undead",{
	regExpSearch : /reborn small undead/i,
	name : "Undead Reborn (small)",
	source : ["UA:GL", 5],
	size : 3,
	trait : "Reborn (+2 to one ability score of my choice, and +1 to a different score of my choice)\n Type: I am Humanoid and Undead\n Deathless Nature: I don't need to eat, drink, or breathe. I don't need to sleep, and magic can't put me to sleep. I can finish a long rest in 4 hours, during which I remain conscious\n Knowledge from a past Life: When I make an ability check that uses a skill, I can roll a d6 and add the number rolled to the check. I can do this a number of times equal to my proficency bonus per long rest",
});
