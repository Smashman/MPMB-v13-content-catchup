var iFileName = "pub_20200616_MOT.js";
RequiredSheetVersion(13);

// Define the source
SourceList.MOT = {
	name: "Mythic Odysseys of Theros",
	abbreviation: "MOT",
	group: "Primary Sources",
	url: "https://dnd.wizards.com/products/tabletop-games/rpg-products/mythic-odysseys-theros",
	date: "2020/06/16"
};

// MOT Races
RaceList["centaur-mot"] = {
	regExpSearch : /centaur/i,
	name : "Centaur",
	sortname : "Centaur",
	source : ["MOT", 18],
	plural : "Centaurs",
	size : 3,
	speed : {
		walk : { spd : 40, enc : 30 }
	},
	languageProfs : ["Common", "Sylvan"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /\b(hoofs?|hooves)\b/i,
		name : "Hooves",
		source : ["MOT", 19],
		damage : [1, 4, "bludgeoning"],
		description : "Use as bonus action after charge 30 ft"
	},
	weaponsAdd : ["Hooves"],
	skillstxt : "Choose one from Animal Handling, Medicine, Nature, or Survival",
	age : " mature and age at about the same rate as humans",
	height : " stand between 6 and 7 feet tall, with their equine bodies reaching about 4 feet at the withers (6'0\" + 1d10\")",
	weight : " weigh around 670 lb (600 + 1d10 \xD7 2d12 lb)",
	heightMetric : " stand around 2 metres tall, with their equine bodies reaching about 1,5 metres at the withers (183 + 3d8 cm)",
	weightMetric : " weigh around 300 kg (270 + 3d8 \xD7 4d12 / 10 kg)",
	scores : [2, 0, 0, 0, 1, 0],
	trait : "Centaur (+2 Strength +1 Wisdom)" + desc([
		"Fey: My creature type is fey, rather than humanoid.",
		"Hooves: I can use my hooves for unarmed strikes (1d4 bludgeoning damage).",
		"Charge: If I move 30 ft straight toward a creature and then hit it with a melee weapon attack on the same turn, I can make a hooves attack against it as a bonus action.",
		"Equine Build: I count as one size larger for my carrying capacity and the weight I can push, drag, or lift. Because of my hooves, 1 ft of movement while climbing costs me 4 ft."
	]),
	features : {
		"charge" : {
			name : "Charge",
			minlevel : 1,
			action : ["bonus action", "Hooves (after charge)"]
		}
	},
	carryingCapacity : 2
};

RaceList["leonin"] = {
    regExpSearch : /leonin/i,
    name : "Leonin",
    source : ["MOT", 20],
    plural : "Leonin",
    size : 3,
    speed : {
        walk : { spd : 35, enc : 25 }
    },
    skillstxt : "Choose one from Athletics, Intimidation, Perception, or Survival",
    languageProfs : ["Common", "Leonin"],
    vision : [["Darkvision", 60]],
    weaponOptions : {
        baseWeapon : "unarmed strike",
        regExpSearch : /^(?=.*(leonin|\bcats?\b))(?=.*claw).*$/i,
        name : "Leonin Claws",
        source : ["MoT", 21],
        damage : [1, 4, "slashing"]
    },
    weaponsAdd : ["Leonin Claws"],
    age : " mature and age at about the same rate as humans",
    height : " are typically over 6 feet tall, with some standing over 7 feet",
	weight : " weigh around 250 lb",
    heightMetric : " are typically over 1,8 metres tall, with some standing over 2,1 metres",
	weightMetric : " weigh around 113 kg",
    improvements : "Leonin: +2 Constitution, +1 Strength;",
    scores : [1, 0, 2, 0, 0, 0],
    features : {
        "daunting roar" : {
            name : "Daunting Roar",
            minlevel : 1,
            usages : 1,
            recovery : "short rest",
            action : ["bonus action", ""]
        }
    },
	trait : "Leonin (+2 Constitution +1 Strength)" + desc([
		"Claws: I can use my claws to make unarmed strikes (1d4 slashing damage).",
		"Daunting Roar: As a bonus action, I can let out a menacing roar. Creatures of my choice within 10 feet of me that can hear me make a Wisdom saving throw (DC 8 + Con mod + Prof bonus) or become frightened of me until the end of my next turn.",
	])
};

RaceList["minotaur-mot"] = {
	regExpSearch : /minotaur/i,
	name : "Minotaur",
	sortname : "Minotaur",
	source : ["MOT", 22],
	plural : "Minotaurs",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Minotaur"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /\bhorns?\b/i,
		name : "Horns",
		source : ["MOT", 23],
		damage : [1, 6, "piercing"],
		description : "Attack as a bonus action after moving 20 ft with the Dash action"
	},
	weaponsAdd : ["Horns"],
	skillstxt : "Choose one from Intimidation or Persuasion",
	age : " mature and age at about the same rate as humans.",
	height : " stand around 6 feet tall (5'4\" + 2d8\")",
	weight : " weigh around 300 pounds (175 + 2d8 \xD7 2d6 lb)",
	heightMetric : " stand around 175 cm tall (163 + 5d8 cm)",
	weightMetric : " weigh around 135 kg (80 + 5d8 \xD7 4d6 / 10 kg)",
	scores : [2, 0, 1, 0, 0, 0],
	abilitySave : 1,
	trait : "Minotaur (+2 Strength +1 Constitution)" + desc([
		"Horns: I can use my horns for unarmed strikes (1d6 piercing damage).",
		"Goring Rush: When taking a Dash action and moving at least 20 ft, I can make a horns attack as a bonus action.",
		"Hammering Horns: As a bonus action after I hit a melee attack during my Attack action, I can shove that target with my horns, if it is up to than one size larger than me. It must make a Str save (DC 8 + Str mod + Prof bonus) or be pushed up to 10 ft away from me."
	]),
	features : {
		"goring rush" : {
			name : "Goring Rush",
			minlevel : 1,
			action : ["bonus action", " (with Dash)"]
		},
		"hammering horns" : {
			name : "Hammering Horns",
			minlevel : 1,
			action : ["bonus action", " (after hit)"]
		}
	}
};

RaceList["satyr-mot"] = {
	regExpSearch : /^((?=.*satyr)|(?=.*goat\s*(wo)?man)).*$/i,
	name : "Satyr",
	sortname : "Satyr",
	source : ["MOT", 24],
	plural : "Satyr",
	size : 3,
	speed : {
		walk : { spd : 35, enc : 25 }
	},
	savetxt : { adv_vs : ["spells", "other magical effects"] },
	languageProfs : ["Common", "Sylvan"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /\bram\b/i,
		name : "Ram",
		source : ["MOT", 25],
		damage : [1, 4, "bludgeoning"]
	},
	weaponsAdd : ["Ram"],
	toolProfs : [["Musical instrument", 1]],
	age : " mature and age at about the same rate as humans.",
	height : " range from just under 5 feet to about 6 feet in height, with generally slender builds",
	heightMetric : " range from just under 1,5 metres to about 1,8 metres in height, with generally slender builds",
	weight : " weigh around 124 lbs",
	weightMetric : " ",
	heightMetric : " range from 1,2 to 1,5 metres tall",
	weightMetric : " weigh around 56 kg",
	scorestxt : "+2 Charisma and +1 Dexterity",
	scores : [0, 1, 0, 0, 0, 2],
	skills : ["Performance", "Persuasion"],
	toolProfs : [["Musical instrument", 1]],
	trait : "Satyr (+2 Charisma +1 Dexterity)" + desc([
		"Fey: My creature type is fey, rather than humanoid.",
		"Ram: I can use my head for unarmed strikes (1d4 bludgeoning damage).",
		"Magic Resistance: I have adv" + (typePF ? "antage" : ".") + " on saving throws against spells and other magical effects.",
		"Mirthful Leaps: Whenever I make a long or high jump, I can roll a d8 and add the number rolled to the number of feet I cover, even when making a standing jump. This extra distance costs movement as normal."
	])
};

RaceList["triton-mot"] = {
	regExpSearch : /triton/i,
	name : "Triton",
	source : ["MOT", 26],
	plural : "Triton",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 30, enc : 20 }
	},
	vision : [["Darkvision", 60]],
	languageProfs : ["Common", "Primordial"],
	dmgres : ["Cold"],
	age : " reach maturity around age 15 and can live up to 200 years",
	height : " are around 5 feet tall (4'6\" + 2d10\")",
	weight : " weigh around 150 lb (90 + 2d10 \xD7 2d4 lb)",
	heightMetric : " are around 1,6 metres tall (135 + 5d10 cm)",
	weightMetric : " weigh around 70 kg (40 + 5d10 \xD7 4d4 / 10 kg)",
	scores : [1, 0, 1, 0, 0, 1],
	trait : "Triton (+1 Strength +1 Constitution +1 Charisma)\nControl Air and Water: I can cast the Fog Cloud spell. Once I reach 3rd level, I can cast the Gust of Wind spell. Once I reach 5th level, I can cast the Wall of Water spell. All three spells can be used once per long rest. Charisma is my spellcasting ability for these spells.\nEmissary of the Sea: I can communicate simple ideas to beasts that can breathe water.\nGuardians of the Depths: I have resistance to cold damage and ignore all drawbacks from a deep, underwater environment." + (typePF ? "\n" : " ") + "Amphibious: I can breathe air and water.",
	spellcastingAbility : 6,
	features : {
		"fog cloud" : {
			name : "Control Air and Water (level 1)",
			limfeaname : "Fog Cloud",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Control Air and Water (1)",
				spells : ["fog cloud"],
				selection : ["fog cloud"],
				firstCol : 'oncelr'
			}
		},
		"gust of wind" : {
			name : "Control Air and Water (level 3)",
			limfeaname : "Gust of Wind",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Control Air and Water (3)",
				spells : ["gust of wind"],
				selection : ["gust of wind"],
				firstCol : 'oncelr'
			}
		},
		"wall of water" : {
			name : "Control Air and Water (level 5)",
			limfeaname : "Wall of Water",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Control Air and Water (5)",
				spells : ["wall of water"],
				selection : ["wall of water"],
				firstCol : 'oncelr'
			}
		}
	}
};

// MOT Subclasses
AddSubClass("paladin", "oath of glory", {
    regExpSearch : /^(((?=.*(glory|destined))(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))))).*$/i,
    subname : "Oath of Glory",
    source : ["MOT", 29],
    features : {
        "subclassfeature3" : {
            name : "Channel Divinity: Peerless Athlete",
            source : ["MOT", 29],
            minlevel : 3,
            description : desc([
                "As a bonus action, I can gain the following benefits for 10 minutes:",
                "\u2022 Advantage on my Dex (Acrobatics) and Str (Athletics) checks",
                "\u2022 I can carry/push/drag/lift twice as much as normal and I add 10ft to long/high jumps"
            ]),
            action : ["bonus action", ""],
            spellcastingExtra : ["guiding bolt", "heroism", "enhance ability", "magic weapon", "haste", "protection from energy", "compulsion", "freedom of movement", "commune", "flame strike"]
        },
        "subclassfeature3.1" : {
            name : "Channel Divinity: Inspiring Smite",
            source : ["MOT", 29],
            minlevel : 3,
            description : desc([
                "I can use a bonus action after dealing damage with Divine Strike to grant temporary HP",
                "I divide 2d8 + paladin level temporary HP across creatures within 30ft, including me"
            ]),
            additional : levels.map(function (n) {
                if (n < 3) return "";
                return "2d8 + " + n + " temporary HP";
            }),
            action : ["bonus action", ""]
        },
        "subclassfeature7" : {
            name : "Aura of Alacrity",
            source : ["MOT", 29],
            minlevel : 7,
            description : desc([
                "If I'm not incapacitated, allies starting within range get extra movement for their turn"
            ]),
            changeeval : function (v) {
                var alacritySpd = '+' + (v[1] < 7 ? 0 : 10);
                SetProf('speed', alacritySpd !== '+0', {allModes : alacritySpd}, "Oath of Glory: Aura of Alacrity");
            },
            additional : levels.map(function (n) {
                if (n < 7) return "";
                return (n < 18 ? 5 : 10) + "-foot aura; +10ft movement";
            })
        },
        "subclassfeature15" : {
            name : "Glorious Defense",
            source : ["MOT", 29],
            minlevel : 15,
            description : desc([
                "When I or a creature I can see within 10ft is hit, I can use a reaction to give it bonus AC",
                "The bonus AC is equal to my Charisma modifier (min 1)",
                "If the attack misses, I can also attack the attacker as long as it's within weapon range"
            ]),
            usages : "Charisma modifier per ",
            usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
            action : ["reaction", ""],
            recovery : "long rest"
        },
        "subclassfeature20" : {
            name : "Living Legend",
            source : ["MOT", 29],
            minlevel : 20,
            description : desc([
                "As a bonus action, I can gain the following benefits for 1 minute:",
                "\u2022 I have advantage on Charisma checks",
                "\u2022 Once per turn, I can cause a missed weapon attack I make to hit instead",
                "\u2022 If I fail a saving throw, I can use my reaction to reroll it; I must use the new roll"
            ]),
            recovery : "long rest",
            usages : 1,
            action : ["bonus action", ""]
        }
    }
});

// MOT Spells
SpellsList["wall of water"] = {
	name : "Wall of Water",
	classes : ["druid", "sorcerer", "wizard"],
	source : ["MOT", 27],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A drop of water",
	duration : "Conc, 10 min",
	description : "30\u00D71\u00D710ft (l\u00D7w\u00D7h) or 20-ft rad 20-ft high; dif. ter.; range wea dis.; Fire dmg half; Cold dmg freezes",
	descriptionMetric : "9\u00D70,3\u00D73m (l\u00D7w\u00D7h) or 6-m rad 6-m high; dif. ter.; ranged wea dis.; Fire dmg half; Cold dmg freezes",
	descriptionFull : "You create a wall of water on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 1 foot thick, or you can make a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall vanishes when the spell ends. The wall's space is difficult terrain. " + "\n   " + "Any ranged weapon attack that enters the wall's space has disadvantage on the attack roll, and fire damage is halved if the fire effect passes through the wall to reach its target. Spells that deal cold damage that pass through the wall cause the area of the wall they pass through to freeze solid (at least a 5-foot-square section is frozen). Each 5-foot-square frozen section has AC 5 and 15 hit points. Reducing a frozen section to 0 hit points destroys it. When a section is destroyed, the wall's water doesn't fill it. "
};
