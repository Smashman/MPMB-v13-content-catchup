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
	trait : "Dhampir (+2 to one ability score of my choice, and +1 to a different score of my choice)" + desc([
	"Size: I am Small or Medium (my choice)",
	"Spider Climb: I have a climb speed equal to my walking speed. Starting from third level, I can move up, down and across vertical surfaces and upside down along ceilings, while leaving my hands free.",
	"Vampiric Bite: My fanged bite is a natural weapon which counts as a simple melee weapon for me. I can add my Con modifier to attack and damage rolls.",
	"When I hit a creature that isn't a construct or undead with my bite, I can empower myself and either gain hit points equal to half the damage dealt or gain a bonus equal to the damage dealt",
	"to the next attack roll or ability check I make. I can do this a number of times equal to my proficency bonus per long rest",
		]),
		
};

AddRacialVariant("dhampir", "medium", {
	regExpSearch : /dhampir medium/i,
	name : "Dhampir (medium)",
	source : ["UA:GL", 2],
	size : 3,
	trait : "Dhampir (+2 to one ability score of my choice, and +1 to a different score of my choice)" + desc([
	"Size: I am Medium",
	"Spider Climb: I have a climb speed equal to my walking speed. Starting from third level, I can move up, down and across vertical surfaces and upside down along ceilings, while leaving my hands free.",
	"Vampiric Bite: My fanged bite is a natural weapon which counts as a simple melee weapon for me. I can add my Con modifier to attack and damage rolls.",
	"When I hit a creature that isn't a construct or undead with my bite, I can empower myself and either gain hit points equal to half the damage dealt or gain a bonus equal to the damage dealt",
	"to the next attack roll or ability check I make. I can do this a number of times equal to my proficency bonus per long rest",
		]),
});

AddRacialVariant("dhampir", "small", {
	regExpSearch : /dhampir small/i,
	name : "Dhampir (small)",
	source : ["UA:GL", 2],
	size : 4,
	trait : "Dhampir (+2 to one ability score of my choice, and +1 to a different score of my choice)" + desc([
	"Size: I am Small",
	"Spider Climb: I have a climb speed equal to my walking speed. Starting from third level, I can move up, down and across vertical surfaces and upside down along ceilings, while leaving my hands free.",
	"Vampiric Bite: My fanged bite is a natural weapon which counts as a simple melee weapon for me. I can add my Con modifier to attack and damage rolls.",
	"When I hit a creature that isn't a construct or undead with my bite, I can empower myself and either gain hit points equal to half the damage dealt or gain a bonus equal to the damage dealt",
	"to the next attack roll or ability check I make. I can do this a number of times equal to my proficency bonus per long rest",
		]),
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