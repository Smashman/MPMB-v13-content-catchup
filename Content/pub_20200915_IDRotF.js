var iFileName = "pub_20200915_IDRotF.js";
RequiredSheetVersion(13);

// Define the source
SourceList.I={
	name : "Icewind Dale: Rime of the Frostmaiden",
	abbreviation : "IDRotF",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/icewind-dale-rime-frostmaiden",
	date : "2020/09/15"
};

// Creatures
CreatureList["crag cat"] = {
	name : "Crag Cat",
	source : ["IDRotF", 0],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 34,
	hd : [4, 10], //[#, die]
	speed : "40 ft",
	scores : [16, 17, 16, 4, 14, 8], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 4,
		"stealth" : 7
	},
	senses : "Darkvision 60 ft",
	passivePerception : 14,
	languages : "",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Claw",
			ability : 1,
			damage : [1, 8, "slashing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, see Pounce trait"
		}, {
			name : "Bite",
			ability : 1,
			damage : [1, 10, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Can be used in combination with claw while pouncing (see Pounce trait)"
		}
	],
	traits : [{
			name : "Nondetection",
			description : "The crag cat can't be targeted or detected by any divination magic or perceived through magical scrying sensors."
		}, {
			name : "Pounce",
			description : "If the crag cat moves at least 20 ft straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the crag cat can make one bite attack against it as a bonus action."
		}, {
			name : "Spell Turning",
			description : "The crag cat has advantage on saving throws against any spell that targets only the cat (not an area). If the crag cat's saving throw succeeds and the spell is of 7th level or lower, the spell has no effect on the crag cat and instead targets the caster."
		}
	],
	wildshapeString : "Darkvision 60 ft| Nondetection: can't be targeted or detected by divination magic or scrying| Pounce: if target is hit with a claw attack after moving 20 ft straight on the same turn, DC 13 Str save or knocked prone and can make one bite attack against it as a bonus action| Spell Turning: adv. on saves vs. spells that targets only me (not area). If successful and spell is 7th level or lower, no effect and instead targets the caster"
};

CreatureList["fox"] = {
	name : "Fox",
	source : ["IDRotF", 0],
	size : 5, //Tiny
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 2,
	hd : [1, 4], //[#, die]
	speed : "30 ft,\nburrow 5 ft",
	scores : [2, 16, 11, 3, 12, 6], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 3,
		"stealth" : 5
	},
	senses : "Darkvision 60 ft",
	passivePerception : 13,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 2,
			damage : [1, "", "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "",
			modifiers : ["", "", false]
		}
	],
	traits : [{
			name : "Keen Hearing",
			description : "The fox has advantage on Wisdom (Perception) checks that rely on hearing."
		}
	]
};

CreatureList["hare"] = {
	name : "Hare",
	source : ["IDRotF", 0],
	size : 5, //Tiny
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 1,
	hd : [1, 4], //[#, die]
	speed : "20 ft,\nburrow 5 ft",
	scores : [1, 17, 9, 2, 11, 4], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 2,
		"stealth" : 5
	},
	senses : "",
	passivePerception : 12,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 0,
	attacks : [],
	traits : [{
			name : "Escape",
			description : "The hare can take the Dash, Disengage, or Hide action as a bonus action on each of its turns."
		}
	]
};

CreatureList["knucklehead trout"] = {
	name : "Knucklehead Trout",
	source : ["IDRotF", 0],
	size : 4, //Small
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 12,
	hp : 7,
	hd : [2, 6], //[#, die]
	speed : "0 ft,\nswim 30 ft",
	scores : [14, 14, 11, 1, 6, 1], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 8,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [1, 4, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : ""
		}, {
			name : "Tail",
			ability : 1,
			damage : [1, 4, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : ""
		}
	],
	traits : [{
			name : "Water Breathing",
			description : "The trout can breathe only underwater"
		}
	]
};

CreatureList["mountain goat"] = {
	name : "Mountain Goat",
	source : ["IDRotF", 0],
	size : 3, //Medium
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 11,
	hp : 13,
	hd : [2, 8], //[#, die]
	speed : "40 ft,\nclimb 30 ft",
	scores : [14, 12, 14, 2, 10, 5], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 10,
	languages : "",
	challengeRating : "1/8",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Ram",
			ability : 1,
			damage : [1, 6, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, see Charge trait"
		}
	],
	traits : [{
		name : "Charge",
		description : "If the goat moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 3 (1d6) bludgeoning damage. If the target is a creature, it must succeed on a DC 12 Strength saving throw or be knocked prone."
	}, {
		name : "Sure-Footed",
		description : "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
	}]
};

CreatureList["seal"] = {
	name : "Seal",
	source : ["IDRotF", 0],
	size : 3, //Medium
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 11,
	hp : 9,
	hd : [2, 8], //[#, die]
	speed : "20 ft,\nswim 40 ft",
	scores : [10, 12, 11, 3, 12, 5], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "Darkvision 60 ft",
	passivePerception : 11,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [1, "", "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "",
			modifiers : ["", "", false]
		}
	],
	traits : [{
		name : "Hold Breath",
		description : "The seal can hold its breath for 15 minutes."
	}, {
		name : "Keen Smell",
		description : "The seal has advantage on Wisdom (Perception) checks that rely on smell."
	}]
};

CreatureList["sperm whale"] = {
	name : "Sperm Whale",
	source : ["IDRotF", 0],
	size : 0, //Gargantuan
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 189,
	hd : [14, 20], //[#, die]
	speed : "0 ft,\nswim 60 ft",
	scores : [26, 8, 17, 3, 12, 5], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "Blindsight 120 ft",
	passivePerception : 11,
	languages : "",
	challengeRating : "8",
	proficiencyBonus : 3,
	attacksAction : 2,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [3, 8, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Large or smaller creature must succeed on a DC 14 Dexterity saving throw or be swallowed, see Swallow feature"
		}, {
			name : "Tail",
			ability : 1,
			damage : [3, 6, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (15 ft)",
			description : "If the target is an object, it takes 6d6 + 16 damage instead"
		}
	],
	features : [{
		name : "Swallow",
		description : "A swallowed creature has total cover against attacks and other effects outside the whale, and it takes 3 (1d6) acid damage at the start of each of the whale's turns. If the whale takes 30 damage or more on a single turn from a creature inside it, the whale must succeed on a DC 16 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the whale. If the whale dies, a swallowed creature can escape from the corpse by using 20 feet of movement, exiting prone."
	}],
	traits : [{
		name : "Echolocation",
		description : "The whale can't use its blindsight while deafened."
	}, {
		name : "Hold Breath",
		description : "The whale can hold its breath for 90 minutes."
	}], {
		name : "Keen Hearing",
		description : "The whale has advantage on Wisdom (Perception) checks that rely on hearing."
	}]
};

CreatureList["walrus"] = {
	name : "Walrus",
	source : ["IDRotF", 0],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 9,
	hp : 22,
	hd : [3, 10], //[#, die]
	speed : "20 ft,\nswim 40 ft",
	scores : [15, 9, 14, 3, 11, 4], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 10,
	languages : "",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Tusks",
			ability : 1,
			damage : [2, 4, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : ""
		}
	],
	traits : [{
		name : "Hold Breath",
		description : "The walrus can hold its breath for 10 minutes."
	}]
};

CreatureList["giant walrus"] = {
	name : "Giant Walrus",
	source : ["IDRotF", 0],
	size : 1, //Huge
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 9,
	hp : 85,
	hd : [9, 12], //[#, die]
	speed : "20 ft,\nswim 40 ft",
	scores : [22, 9, 16, 3, 11, 4], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "Darkvision 60ft",
	passivePerception : 10,
	languages : "",
	challengeRating : "4",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
			name : "Body Flop",
			ability : 1,
			damage : [2, 8, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "One body flop and one tusks attack as an Attack action"
		},
		{
			name : "Tusks",
			ability : 1,
			damage : [3, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "One body flop and one tusks attack as an Attack action"
		}
	],
	traits : [{
		name : "Hold Breath",
		description : "The walrus can hold its breath for 30 minutes."
	}]
};