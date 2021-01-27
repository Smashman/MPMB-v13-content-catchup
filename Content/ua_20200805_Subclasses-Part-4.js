var iFileName = "ua_20200805_Subclasses-Part-4.js";
RequiredSheetVersion(13);
// This file adds the content from the Unearthed Arcana 2020: Subclasses, Part 4 article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:SP4"] = {
	name : "Unearthed Arcana: Subclasses, Part 4",
	abbreviation : "UA:SP4",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2020/dnd/downloads/UA2020_Subclasses04.pdf",
	date : "2020/08/05"
};

AddSubClass("bard","college of spirits",{
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*spirits).*$/i,
	subname : "College of Spirits", 	
	source : [["UA:SP4", 1]],
	features : {
		"subclassfeature3" : {
			name : "Guiding Whispers",
			source : [["UA:SP4", 1]],
			minlevel : 3,
			description : desc([
                "I learn the Guidance cantrip, and can cast it at a range of 60 feet.", 
			]),
			spellcastingBonus : {
				name : "Guiding Whispers (level 1)",
				spells : ["guidance"],
				selection : ["guidance"],
			},
			spellChanges : {
				"guidance" : {
					range : "60 ft",
					changes : "I can cast Guidance with a range of 60 feet"
				}
			},
		},
		"subclassfeature3.1" : {
			name : "Spiritual Focus",
			source : [["UA:SP4", 1]],
			minlevel : 3,
			description : desc([
                "I can use a candle, a crystal ball, a talking board, a tarokka deck, or a skull",
                "as a spellcasting focus for my bard spells.",
			]),
		},
		"subclassfeature3.2" : {
			name : "Tales from Beyond",
			source : [["UA:SP4", 1]],
			minlevel : 3,
			description : desc([
				"While holding my Spiritual Focus, I can expend one use of my Bardic Inspiration",
                "I roll on the Spirits’ Tales table using my Bardic Inspiration die to determine the tale.",
                "I can choose one creature I can see within 30 feet of me, including me, to be the target.",
			]),
            action : [["bonus action"," (roll)"],["action"," (choose target)"]],
            toNotesPage : [{
                name : "Spirit's Tales Table",
                popupName: "College of Spirits - Spirit's Tales Table",
                note : "\n   Various strange things can happen whenever I cast a spell.",
                note : [
                    "\nBardic Insp. Die\tTale",
                    "1\tBeast: You recite the tale of a clever animal. For 1 minute, the target has advantage on Wisdom (Perception) checks and advantage on attack rolls against a creature if another enemy is within 5 feet of it, and that enemy isn’t incapacitated.",
                    "2\tWarrior: You recount the story of a renowned duelist. Make a melee spell attack against the target as an attacking spectral warrior briefly appears in a unoccupied space within 5 feet of the target before vanishing. On a hit, the target takes force damage equal to two rolls of your Bardic Inspiration die + your Charisma modifier.",
                    "3\tFriends: You recite the tale of friends who found each other in the afterlife. The target and another creature of its choice it can see within 5 feet of it regains hit points equal to a roll of your Bardic Inspiration die + your Charisma modifier",
                    "4\tRunaway: You tell the tale of an adventurer that could escape any confinement. The target can immediately use its reaction to teleport up to 30 feet to an unoccupied space it can see. When the target teleports, it can choose a number of creatures it can see within 30 feet of it up to your Charisma modifier (minimum of 1) to immediately use the same reaction.",
                    "5\tAvenger: You recount the tale of an avenging knight. For 1 minute, whenever a creature the target can see within 30 feet of it is damaged by a creature, the target can use its reaction to deal force damage equal to a roll of your Bardic Inspiration die to the attacker.",
                    "6\tHero: You speak the tale of an epic hero. Choose a creature you can see within 30 feet of you. The target gains temporary hit points equal to a roll of your Bardic Inspiration die + your bard level. While it has these temporary hit points, the target’s walking speed increases by 10 feet.",
                    "7\tFey: You recount the tale of a mischievous fey. The target must succeed on a Wisdom saving throw or become charmed by you until the end of its next turn. The charmed target must use its action to make a melee attack against a creature other than itself that you mentally choose. The target can act normally on its turn if you choose no other creature.",
                    "8\tDark Spirit: You speak a dreadful tale of a slayer in the dark. The target becomes invisible until the end of its next turn or until it hits a creature with an attack. If it hits a creature with an attack during this invisibility, that creature takes necrotic damage equal to a roll of your Bardic Inspiration die and is frightened of the target until the end of its next turn.",
                    "9\tGiant: You speak of the deeds of a mighty giant. Each creature of the target’s choice it can see within 30 feet of it must make a Strength saving throw, taking force damage equal to two rolls of your Bardic Inspiration die on a failed save and is knocked prone. A creature that succeeds on its saving throw takes half as much damage and isn’t knocked prone.",
                    "10\tDragon: You breathe a poem of a wrathful dragon. The target magically spews fire from their mouth in a 30-foot cone. Each creature in that area must make a Dexterity saving throw, taking fire damage equal to three rolls of your Bardic Inspiration die on a failed save, or half as much damage on a successful one.",
                    "11\tCelestial: You speak of the exalted deeds of a celestial. The target regains hit points equal to two rolls of your Bardic Inspiration die + your bard level, and you end one disease or a condition from the following list affecting the target: blinded, deafened, paralyzed, petrified, or poisoned.",
                    "12\tUnknown: You utter an incomprehensible fable from a being beyond the stars. Choose a creature you can see within 30 feet of you. The target must succeed on an Intelligence saving throw or take psychic damage equal to three rolls of your Bardic Inspiration die, and the target is unable to speak any language for 1 minute.",
                ],
                source : [["UA:SP4", 1]],
            }],
        },
        "subclassfeature6" : {
			name : "Spiritual Focus",
			source : [["UA:SP4", 2]],
			minlevel : 6,
			description : desc([
				"Casting a bard spell that deals damage or restores HP through my Spiritual Focus",
                "allows me to add 1d6 to one roll of the spell",
			])
        },
		"subclassfeature6.1" : {
			name : "Spirit Session",
			source : [["UA:SP4", 2]],
			minlevel : 6,
			description : desc([
				"I can conduct an hour-long ritual using your Spiritual Focus with a number of",
                "creatures  equal to your proficiency bonus (including me), after which I temporarily",
                "learn one divination or necromancy spell from any class, the level of which is less",
                "than or equal to the number of creatures that conducted the ritual.",
            ]),
            usages : 1, 
            recovery : "long rest"
        },
		"subclassfeature14" : {
			name : "Mystical Connection",
			source : [["UA:SP4", 3]],
			minlevel : 14,
			description : desc([
				"When I use my Tales from Beyond feature, I can roll a d6 to determine the Tale told.",
                "I still use my Bardic Inspiration die for the tale’s effect, without expending it.",
			])
		},
	}
});
AddSubClass("warlock","the undead",{
	regExpSearch : /^(?=.*undead)(?=.*warlock).*$/i,
	subname : "the Undead", 	
	source : [["UA:SP4", 1]],
	spellcastingExtra : ["bane","false life","blindness/deafness","phantasmal force","speak with dead","phantom steed","death ward","greater invisibility","antilife shell","cloudkill"],
	features : {
		"subclassfeature1" : {
			name : "Form of Dread",
			source : [["UA:SP4", 3]],
			minlevel : 1,
			description : desc([
				"As a bonus action, I transform for 1 minute and gain the following benefits:",
                "\u2022 I gain temporary hit points equal to 1d10 + my warlock level.",
                "\u2022 Once during each of my turns, when I hit a creature with an attack, I can force it to",
                "   make a Wisdom saving throw, and if the saving throw fails, the target is frightened of me",
                "   until the end of my next turn.",
                "\u2022 I am immune to the frightened condition.",
            ]),
            additional : levels.map(function (n) {
				return "1d10+" + n + " Temp HP";
            }),
            usages : "proficiency bonus per ",
            usagescalc : "event.value = What('Proficiency Bonus');",
            recovery : "long rest",
            action : ["bonus action", ""],
            savetxt : { immune : ["frightened (Form of Dread)"] }
		},
		"subclassfeature6" : {
			name : "Grave Touched",
			source : [["UA:SP4", 3]],
			minlevel : 3,
			description : desc([
				"I no longer need to eat, drink, or breathe; when I hit a creature with an attack and roll", 
                "damage, I can replace the damage type with necrotic damage. While I am using my Form of",
                "Dread, I can roll one additional damage die of necrotic damage.",
			]),
		},
		"subclassfeature10" : {
			name : "Mortal Husk",
			source : [["UA:SP4", 4]],
			minlevel : 10,
			description : desc([
				"When reduced to 0 hit points, I can cause each creature within 30 feet of me to take necrotic", 
                "damage equal to 2d10 + my warlock level. I revive with 1 hit point in your previous space,", 
                "and you gain 1 level of exhaustion. I must complete 1d4 long rests to do this again.",
			]),
            dmgres : [["Necrotic"]],
            savetxt : { immune : ["necrotic (Form of Dread)"] }
		},
		"subclassfeature14" : {
			name : "Spirit Projection",
			source : [["UA:SP4", 4]],
			minlevel : 14,
			description : desc([
				"I can project my spirit from my body, leaving it unconscious and in a state of suspension",
                "I can do this for 1 hour, or until my concentration is broken. When ended, I can return to",
                "my body of have my body teleport to me. While projecting I gain the following benefits:",
                "\u2022 My spirit and body gain resistance to bludgeoning, piercing, and slashing damage.",
                "\u2022 When casting a conjuration or necromancy spell, it doesn’t require verbal, somatic, or", 
                "   material components that lack a gold cost.",
                "\u2022 I have a flying speed equal to your walking speed and can hover. I can move through",
                "   creatures and objects as if they were difficult terrain, but I take 1d10 force damage if I end",
                "   my turn inside a creature or an object.",
                "\u2022 While using my Form of Dread, once during each of my turns when I deal necrotic damage",
                "   to a creature, I regain hit points equal to half the amount of necrotic damage dealt.",
			]),
			usages : "1 hour per ",
            recovery: "long rest",
            action : [["action",""]]
		},
	}
});