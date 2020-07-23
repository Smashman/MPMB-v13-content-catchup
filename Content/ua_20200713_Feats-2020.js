var iFileName = "ua_20200713_Feats-2020.js";
RequiredSheetVersion(13);

// Define the source
SourceList["UA:F20"] = {
	name: "Unearthed Arcana: Feats 2020",
	abbreviation: "UA:F20",
	group: "Unearthed Arcana",
	url: "https://media.wizards.com/2020/dnd/downloads/UA2020_Feats.pdf",
	date: "2020/07/13"
};

FeatsList["artificer initiate"] = {
	name: "Artificer Initiate",
	source: [
		["UA:F20", 1]
	],
	description: "I learn two cantrips and one 1st-level spell of my choice from the artificer's spell list. I can cast the 1st-level spell at its lowest level once per long rest without using a spell slot. Int is my spellcasting ability. I gain proficiency in one artisan's tool that I can use as focus.",
	spellcastingBonus: [{
		name: "Artificer cantrip",
		spellcastingAbility: 4,
		class: 'artificer',
		level: [0, 0],
		atwill: true,
		times: 2
	}, {
		name: "Artificer 1st-level spell",
		class: 'artificer',
		level: [1, 1],
		oncelr: true
	}],
	toolProfs: [
		["Artisan's tools", 1]
	]
};
FeatsList["chef"] = {
	name: "Chef",
	source: [
		["UA:F20", 1]
	],
	description: "During a short rest, I can make food for 4 + my proficiency bonus creatures; if they eat it and spend 1+ Hit Die they regain 1d8 HP. During a long rest I can make snacks equal to my proficiency bonus that give my proficiency bonus temp HP [+1 Constitution or Wisdom]",
	toolProfs: ["Chef's utensils"],
	improvements: "Chef (feat): +1 Constitution or Wisdom;"
};
FeatsList["crusher"] = {
	name: "Crusher",
	source: [
		["UA:F20", 1]
	],
	description: "Once per turn when I deal bludgeoning damage to a target, I can move it 5 feet if it is less than 1 size larger than me. If I deal bludgeoning damage on a critical hit to a target attack rolls against it are with advantage until end of my next turn. [+1 Strength or Dexterity]",
	improvements: "Crusher (feat): +1 Strength or Dexterity;"
};
// NOT DONE //
FeatsList["eldritch adept"] = {
	name: "Eldritch Adept",
	source: [
		["UA:F20", 1]
	],
	description: "I learn one Eldritch Invocation option of my choice from the Warlock class. If it has a prerequisite, I can only take it if I am a warlock and meet the prerequisite. I can replace the invocation whenever I gain a level.",
	prerequisite: "Spellcasting or Pact Magic feature",
	prereqeval: function (v) {
		return What('Class Features').toLowerCase().indexOf('spellcasting') === -1 || What('Class Features').toLowerCase().indexOf('pact magic') === -1;
	}
};
FeatsList["fey touched"] = {
	name: "Fey Touched",
	source: [
		["UA:F20", 2]
	],
	description: "I learn Misty Step and one 1st level spell of my choice from the divination or enchantment school of magic. I can cast each once per lost rest without expending a spell slot, and can cast them if I have the slot to do so.",
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence": {
		description: "I learn Misty Step and one 1st level spell of my choice from the divination or enchantment school of magic. I can cast each once per lost rest without expending a spell slot, and can cast them if I have the slot to do so. Intelligence is my spellcasting ability [+1 Intelligence]",
		spellcastingBonus: [{
			name: "Fey Touched",
			spellcastingAbility: 4,
			class: "any",
			school: ["Ench", "Div"],
			level: [1, 1],
			firstCol: "oncelr"
		}, {
			name: "Fey Touched",
			spells: ["misty step"],
			selection: ["misty step"],
			firstCol: "oncelr"
		}],
		scores: [0, 0, 0, 1, 0, 0],
	},
	"wisdom": {
		description: "I learn Misty Step and one 1st level spell of my choice from the divination or enchantment school of magic. I can cast each once per lost rest without expending a spell slot, and can cast them if I have the slot to do so. Wisdom is my spellcasting ability [+1 Wisdom]",
		spellcastingBonus: [{
			name: "Fey Touched",
			spellcastingAbility: 5,
			class: "any",
			school: ["Ench", "Div"],
			level: [1, 1],
			firstCol: "oncelr"
		}, {
			name: "Fey Touched",
			spells: ["misty step"],
			selection: ["misty step"],
			firstCol: "oncelr"
		}],
		scores: [0, 0, 0, 0, 1, 0],
	},
	"charisma": {
		description: "I learn Misty Step and one 1st level spell of my choice from the divination or enchantment school of magic. I can cast each once per lost rest without expending a spell slot, and can cast them if I have the slot to do so. Charisma is my spellcasting ability [+1 Charisma]",
		spellcastingBonus: [{
			name: "Fey Touched",
			spellcastingAbility: 6,
			class: "any",
			school: ["Ench", "Div"],
			level: [1, 1],
			firstCol: "oncelr"
		}, {
			name: "Fey Touched",
			spells: ["misty step"],
			selection: ["misty step"],
			firstCol: "oncelr"
		}],
		scores: [0, 0, 0, 0, 0, 1],
	}
};
// Not Done //
FeatsList["fighting initiate"] = {
	name: "Fighting Initiate",
	source: [
		["UA:F20", 2]
	],
	description: "I learn one Fighting Style from the fighter class. If I already have one, the new one must be different. I can replace the fighting style whenever I gain a level.",
};
FeatsList["gunner"] = {
	name: "Gunner",
	source: [
		["UA:F20", 2]
	],
	description: "I gain proficiency with firearms. I ignore the loading property of firearms. I don't suffer disadvantage on ranged attack rolls for being within 5 ft of a hostile creature. [+1 Dexterity]",
	scores: [0, 1, 0, 0, 0, 0],
	weaponProfs: {
		primary: [false, false, ["Firearms"]]
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (isRangedWeapon && ((/firearm/i).test(theWea.type) || (/firearm/i).test(theWea.list)) && fields.Proficiency) {
					fields.Description = fields.Description.replace(/(,? ?loading|loading,? ?)/i, '');
				};
			},
			"I ignore the loading quality of firearms."
		]
	}
};
// This feals wrong //
FeatsList["metamagic adept"] = {
	name: "Metamagic Adept",
	source: [
		["UA:F20", 1]
	],
	description: "I learn two metamagic options from the sorcerer class. I can use only one option on a spell unless the option says otherwise. I gain 2 sorcery points, and regain all expended points on a long rest.",
	prerequisite: "Spellcasting or Pact Magic feature",
	prereqeval: function (v) {
		return What('Class Features').toLowerCase().indexOf('spellcasting') === -1 || What('Class Features').toLowerCase().indexOf('pact magic') === -1;
	},
	usages: 2,
	recovery: "long rest",
	extraname: "Metamagic Option",
	extrachoices: ["Careful Spell", "Distant Spell", "Empowered Spell", "Extended Spell", "Heightened Spell", "Quickened Spell", "Subtle Spell", "Twinned Spell", "Elemental Spell", "Seeking Spell", "Unnerring Spell"],
	"careful spell": {
		name: "Careful Spell",
		source: [
			["SRD", 44],
			["P", 102]
		],
		description: " [1 sorcery point]" + "\n   " + "If the spell allows a saving throw, I can protect Cha modifier number of creatures" + "\n   " + "The selected creatures automatically succeed on their saving throws vs. the spell"
	},
	"distant spell": {
		name: "Distant Spell",
		source: [
			["SRD", 44],
			["P", 102]
		],
		description: " [1 sorcery point]" + "\n   " + "I double the range of the spell or make the range 30 ft if the range was touch"
	},
	"empowered spell": {
		name: "Empowered Spell",
		source: [
			["SRD", 44],
			["P", 102]
		],
		description: " [1 sorcery point]" + "\n   " + "If the spell uses damage dice, I can reroll my Charisma modifier number of damage dice" + "\n   " + "I can Empower a spell even if I use another Metamagic option on it"
	},
	"extended spell": {
		name: "Extended Spell",
		source: [
			["SRD", 44],
			["P", 102]
		],
		description: " [1 sorcery point]" + "\n   " + "If the spell has a duration of at least 1 min, I can double it, up to 24 hours"
	},
	"quickened spell": {
		name: "Quickened Spell",
		source: [
			["SRD", 44],
			["P", 102]
		],
		description: " [2 sorcery points]" + "\n   " + "If the spell has a casting time of 1 action, I can cast it as a bonus action",
		action: ["bonus action", ""]
	},
	"subtle spell": {
		name: "Subtle Spell",
		source: [
			["SRD", 44],
			["P", 102]
		],
		description: " [1 sorcery point]" + "\n   " + "I can cast the spell without the need to use somatic or verbal components"
	},
	"twinned spell": {
		name: "Twinned Spell",
		source: [
			["SRD", 44],
			["P", 102]
		],
		description: " [1 sorcery point per spell level, minimum 1]" + "\n   " + "If spell/cantrip has a target of one and not self, I can aim it at second target within range"
	},
	"elemental spell": {
		name: "Elemental Spell",
		source: ["UA:CFV", 10],
		description: " [1 sorcery point]" + desc([
			"I can change the damage type of a spell to acid, cold, fire, lightning, or thunder instead",
			"I can only do this if the spell originally deals one of these damage types"
		])
	},
	"seeking spell": {
		name: "Seeking Spell",
		source: ["UA:CFV", 10],
		description: " [1 sorcery point]" + desc([
			"I can ignore half- and three-quarters cover for the one spell I'm casting",
			"This applies both to my spell attack rolls as to the Dexterity saving throws of the targets"
		])
	},
	"unerring spell": {
		name: "Unerring Spell",
		source: ["UA:CFV", 10],
		description: " [2 sorcery points]" + desc([
			"If I make an attack roll for a spell and miss, I can use this to reroll the attack once",
			"I can use unerring spell even if I already used another metamagic option for the spell"
		])
	},
};
FeatsList["piercer"] = {
	name: "piercer",
	source: [
		["UA:F20", 2]
	],
	description: "Once per turn when I deal piercing damage to a target, I can reroll one of the damage die and use the new roll. If I deal piercing damage on a critical hit to a target I can roll one additional damage die. [+1 Strength or Dexterity]",
	improvements: "Piercer (feat): +1 Strength or Dexterity;"
};
FeatsList["poisoner"] = {
	name: "Poisoner",
	source: [
		["UA:F20", 2]
	],
	descriptionFull: "\n \u2022 ",
	description: "I ignore poison resist. when rolling for damage. I can coat a weapon in poison as a bonus action. I gain prof. with a poisoner's kit, and can make my prof. bonus number of poisons. DC 14 Con save or 2d8 poison damage and poisoned until the end of my next turn. ",
};
FeatsList["practiced expert"] = {
	name: "Practiced Expert",
	source: [
		["UA:F20", 3]
	],
	description: "I gain proficiency in one skill or tool. I choose one skill or tool, and my proficiency bonus is doubled for any ability check I make that uses that proficiency. [+1 to Any]",
	improvements: "Practiced Expert (feat): +1 to Any;"
};
FeatsList["shadow touched"] = {
	name: "Shadow Touched",
	source: [
		["UA:F20", 3]
	],
	description: "I learn Darkness and one 1st level spell of my choice from the illusion or necromancy school of magic. I can cast each once per lost rest without expending a spell slot, and can cast them if I have the slot to do so.",
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence": {
		description: "I learn Darkness and one 1st level spell of my choice from the illusion or necromancy school of magic. I can cast each once per lost rest without expending a spell slot, and can cast them if I have the slot to do so. Intelligence is my spellcasting ability [+1 Intelligence]",
		spellcastingBonus: [{
			name: "Shadow Touched",
			spellcastingAbility: 4,
			class: "any",
			school: ["Illus", "Necro"],
			level: [1, 1],
			firstCol: "oncelr"
		}, {
			name: "Shadow Touched",
			spells: ["darkness"],
			selection: ["darkness"],
			firstCol: "oncelr"
		}],
		scores: [0, 0, 0, 1, 0, 0],
	},
	"wisdom": {
		description: "I learn Darkness and one 1st level spell of my choice from the illusion or necromancy school of magic. I can cast each once per lost rest without expending a spell slot, and can cast them if I have the slot to do so. Wisdom is my spellcasting ability [+1 Wisdom]",
		spellcastingBonus: [{
			name: "Shadow Touched",
			spellcastingAbility: 5,
			class: "any",
			school: ["Illus", "Necro"],
			level: [1, 1],
			firstCol: "oncelr"
		}, {
			name: "Shadow Touched",
			spells: ["darkness"],
			selection: ["darkness"],
			firstCol: "oncelr"
		}],
		scores: [0, 0, 0, 0, 1, 0],
	},
	"charisma": {
		description: "I learn Darkness and one 1st level spell of my choice from the illusion or necromancy school of magic. I can cast each once per lost rest without expending a spell slot, and can cast them if I have the slot to do so. Charisma is my spellcasting ability [+1 Charisma]",
		spellcastingBonus: [{
			name: "Shadow Touched",
			spellcastingAbility: 6,
			class: "any",
			school: ["Illus", "Necro"],
			level: [1, 1],
			firstCol: "oncelr"
		}, {
			name: "Shadow Touched",
			spells: ["darkness"],
			selection: ["darkness"],
			firstCol: "oncelr"
		}],
		scores: [0, 0, 0, 0, 0, 1],
	}
};
FeatsList["shield training"] = {
	name: "Shield Training",
	source: [
		["UA:F20", 3]
	],
	description: "I gain proficiency with shields. I can don or doff a shield as the free object interaction on my turn. If I have the Spellcasting or Pact Magic feature, I can use my shield as a spellcasting focus. [+1 Strength, Dexterity, or Constitution]",
	improvements: "Shield Training (feat): +1 Strength, Dexterity, or Constitution;",
	armorProfs: [false, false, false, true]
};
FeatsList["slasher"] = {
	name: "Slasher",
	source: [
		["UA:F20", 3]
	],
	description: "Once per turn when I deal slashing damage to a target, I can reduce its speed by 10 feet until the start of my next turn. If I deal slashing damage on a critical hit to a target, it has disadvantage on attack rolls until the start of my next turn. [+1 Strength or Dexterity]",
	improvements: "Slasher (feat): +1 Strength or Dexterity;"
};
FeatsList["tandem tactician"] = {
	name: "Tandem Tactician",
	source: [
		["UA:F20", 3]
	],
	description: "I can use the Help action as a bonus action. When I use the Help action to aid an ally in attacking a creature, increase the range of the Help action by 10 feet. I can help two allies targeting the same creature within range when I use the Help action this way. ",
	action: ["bonus action", ""]
};
FeatsList["tracker"] = {
	name: "Tracker",
	source: [
		["UA:F20", 3]
	],
	description: "I can cast Hunter's Mark once per long rest without expending a spell slot using Wisdom as my spellcasting ability. I can also cast it with spell slots I have. I have advantage on Wisdom (Survival) checks to track creatures. [+1 Wisdom]",
	scores: [0, 0, 0, 0, 1, 0],
	spellcastingBonus: {
		name: "Tracker (1x long rest)",
		spellcastingAbility: 5,
		spells: ["hunter's mark"],
		selection: ["hunter's mark"],
		firstCol: "oncelr"
	},
};