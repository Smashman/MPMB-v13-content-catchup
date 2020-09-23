var iFileName = "ua_20200414_Psionic-Options-Revisited.js";
RequiredSheetVersion(13);

// Define the source
SourceList["UA:POR"] = {
	name : "Unearthed Arcana: Psionic Options Revisited",
	abbreviation : "UA:POR",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2020/dnd/downloads/UA2020_PsionicOptions.pdf",
	date : "2020/04/14"
};

//Define Psi Knight
AddSubClass("fighter", "psi knight", {
    regExpSearch : /^(?=.*psi)(?=.*knight).*$/i,
    subname : "Psi Knight",
    source : ["UA:POR", 2],
    abilitySave : 4,
    spellcastingAbility : 4,
    features : {
        "subclassfeature3" : {
            name : "Psionic Talent",
            source : ["UA:POR", 2],
            minlevel : 3,
            additional : levels.map(function(n) {
                return "Starting Psionic Talent Die: 1d" + (n < 5 ? 6 : n < 11 ? 8 : n < 17 ? 10 : 12);
            }),
            description : desc([
                "I use my Psionic Talent die (Psi Die) to use Psionic Talents",
                "On max roll, the size shrinks (d6 to d4) and a roll of 1, it grows to start (d6 to d8)",
                "On a roll of 4 on a d4, I can't use the die again until I finish a long rest",
                "As a bonus action, I can restore the die to its starting size once per long rest",
                "Psi DC for my Psionic Talents is 8 + proficiency mod + my Intelligence modifier",
                "See the notes sheet for Psionic Talents"
            ]),
            action : [
                ["bonus action", "Psi Replenishment"],
                ["reaction", "Protective Field"]
            ],
            extraLimitedFeatures : {
                name : "Psi Replenishment",
                usages : 1, 
                recovery : "long rest",
            },
            toNotesPage : {
                name : "Psi Knight Psionic Talents",
                note : [
                    "\u2022 Protective Field",
                    "   I reduce damage taken by me or creature I see within 30 feet as a reaction",
                    "   Reduce equals number rolled on Psi Die + my Int modifier (min 1)",
                    "\u2022 Psi-Powered Leap",
                    "   I extend the distance of a high or long jump with extra 1 foot movement cost",
                    "   Extend equals twice number rolled on Psi Die + twice my Int modifier (min 1)",
                    "\u2022 Telekinetic Strike",
                    "   I deal extra force damage to a target I damaged with a weapon within 30 feet",
                    "   Damage equals number rolled on Psi Die and I can only do this once per turn"
                ],
                popUpName : "Psi Knight Psionic Talents Part 1",
                source : ["UA:POR", 2],
            }
        },
        "subclassfeature7" : {
            name : "Telekinetic Adept",
            source : ["UA:POR", 3],
            minlevel : 7,
            description : "",
            action : [
                ["action", "Telekinetic Movement"]
            ],
            toNotesPage : {
                name : "Psi Knight Telekinetic Adept",
                note : [
                    "\u2022 Psionic Thrust",
                    "   When I damage a target with Telekinetic Strike, I force a strength save vs DC",
                    "   On failure, target is knocked prone and moved 10 feet in horizontal direction",
                    "\u2022 Telekinetic Movement",
                    "   I move a Large or smaller object or creature other than me within 30 feet",
                    "   As an action, I move it up to 30 feet to an unoccupied space I can see",
                    "   If the object is Tiny, I can move it to and from my hand",
                    "   The target can be moved horizontally, vertically, or both",
                    "   My Talents die is reduced by one die size when I take this action"
                ],
                popUpName : "Psi Knight Psionic Talents Part 2",
                amendTo : "Psi Knight Psionic Talents",
                source : ["UA:POR", 2],
            }
        },
        "subclassfeature10" : {
            name : "Psi-Enhanced Metabolism",
            source : ["UA:POR", 3],
            minlevel : 10,
            description : desc([
                "I am resistant to poison and psychic damage and am immune to the poisoned condition"
            ]),
            dmgres : ["Poison", "Psychic"],
            savetxt : {
                immune : ["poisoned"]
            }
        },
        "subclassfeature15" : {
            name : "Bulwark of Force",
            source : ["UA:POR", 3],
            minlevel : 15,
            description : desc([
                "I choose number of creatures including me equal to my Int mod within 30 feet (min 1)",
                "Each creature is protected by half cover for 1 minute or until I am incapacitated",
                "I regain all uses after I finish a long rest or reduce my Talent die by one die size"
            ])
        },
        "subclassfeature18" : {
            name : "Telekinetic Master",
            soruce : ["UA:POR", 3],
            minlevel : 18,
            description : desc([
                "I can cast the telekinesis spell if my Talent die is available",
                "My ability for the spell is Intelligence and it requires no components to cast",
                "When I cast the spell, my Psi die shrinks by 1 die size"
            ]),
            spellcastingBonus : {
                name : "Telekinetic Master",
                spells : "telekinesis",
                selection : ["telekinesis"],
                firstCol : "oncelr"
            }
        }
    }
});

//Define Soul Knife
AddSubClass("rogue", "soulknife", {
    regExpSearch : /soulknife/i,
    subname : "Soulknife",
    source : ["UA:POR", 3],
    abilitySave : 2,
    features : {
        "subclassfeature3" : {
            name : "Psionic Talent",
            source : ["UA:POR", 4],
            minlevel : 3,
            additional : levels.map(function(n) {
                return "Starting Psionic Talent Die: 1d" + (n < 5 ? 6 : n < 11 ? 8 : n < 17 ? 10 : 12);
            }),
            description : desc([
                "I use my Psionic Talent die (Psi Die) to use Psionic Talents",
                "On max roll, the size shrinks (d6 to d4) and a roll of 1, it grows to start (d6 to d8)",
                "On a roll of 4 on a d4, I can't use the die again until I finish a long rest",
                "As a bonus action, I can restore the die to its starting size once per long rest",
                "See the notes sheet for Psionic Talents"
            ]),
            extraLimitedFeatures : {
                name : "Psi Replenishment",
                usages : 1, 
                recovery : "long rest",
            },
            toNotesPage : {
                name : "Soul Knife Psionic Talents",
                note : [
                    "\u2022 Psi-Bolstered Knack",
                    "   I use Psi Die roll on a failed ability check using a skill or tool I'm proficient in", 
                    "\u2022 Psychic Whispers",
                    "   As an action, I can speak telepathically to a Psi Die roll number of creatures",
                    "   The chosen creatures must speak a language regardless of if they share one",
                    "   It takes no action to send or recive a message or to end connection",
                ],
                popUpName : "Soul Knife Psionic Talents Part 1",
                source : ["UA:POR", 4],
            },
            action :  ["bonus action", "Psi Replenishment"],
        },
        "subclassfeatures3.1" : {
            name : "Psychic Blades",
            source : ["UA:POR", 4],
            minlevel : 3,
            description : desc([
                "I summon a psychic blade that can be used as a melee or ranged weapon",
                "It vanishes after I hit or miss the target and leaves no mark on the target",
                "I can use a bonus action to create a second blade after using the first",
                "The first blade deals 1d6 psychic damage and the second deals 1d4"
            ]),
            action : [
                ["action", " (part of attack)"],
                ["bonus action", "Second Blade"]
            ],
            weaponsAdd : ["Psychic Blade"]
        },
        "subclassfeature9" : {
            name : "Soul Blades",
            source : ["UA:POR", 4],
            minlevel : 9,
            description : "",
            action : [["bonus action", "Psychic Teleportation"]],
            toNotesPage : {
                name : "Soul Blade Talents",
                note : [
                    "\u2022 Homing Strikes",
                    "   If I miss with my Psychic blade, I use roll of Psi die and add it to attack roll",
                    "   Regardless of number rolled, the Psi Die will shrink by one die size",
                    "\u2022 Psychic Teleportation",
                    "   I throw a psychic blade up to 5 times highest Psi Die number of feet away",
                    "   I teleport to that space and my Psi Die shrinks by one die size"
                ],
                popUpName : "Soul Knife Psionic Talents Part 2",
                amendTo : "Soul Knife Psionic Talents",
                source : ["UA:POR", 4],
            }
        },
        "subclassfeature13" : {
            name : "Psionic Veil",
            source : ["UA:POR", 5],
            minlevel : 13,
            description : desc([
                "As an action, I become invisible with anything I'm wearing or carrying",
                "This ends after 10 minutes or I damage a creature or force them to make a save",
                "I regain all uses after I finish a long rest or reduce my Talent die by one die size"
            ]),
            recovery : "long rest",
            usages : 1,
            action : ["action", ""],
        },
        "subclassfeature17" : {
            name : "Rend Mind",
            source : ["UA:POR", 5],
            minlevel : 17,
            description : desc([
                "If my psychic blade deals sneak attack damage, the creature makes a Wisdom save",
                "DC 8 + proficiency modifier + my Dexterity modifier",
                "On a failure, the target is stunned until the end of my next turn",
                "I regain all uses after I finish a long rest or reduce my Talent die by one die size"
            ]),
            recovery : "long rest",
            usages : 1,
        }
    }
});

//Define Psionic Soul
AddSubClass("sorcerer", "psionic soul", {
    regExpSearch : /^(?=.*psionic)(?=.*soul).*$/i,
    subname : "Psionic Soul",
    source : ["UA:POR", 5],
    features : {
        "subclassfeature1" : {
            name : "Psionic Talent",
            source : ["UA:POR", 6],
            minlevel : 1,
            additional : levels.map(function(n) {
                return "Starting Psionic Talent Die: 1d" + (n < 5 ? 6 : n < 11 ? 8 : n < 17 ? 10 : 12);
            }),
            description : desc([
                "I use my Psionic Talent die (Psi Die) to use Psionic Talents",
                "On max roll, the size shrinks (d6 to d4) and a roll of 1, it grows to start (d6 to d8)",
                "On a roll of 4 on a d4, I can't use the die again until I finish a long rest",
                "As a bonus action, I can restore the die to its starting size once per long rest",
                "See the notes sheet for Psionic Talents"
            ]),
            extraLimitedFeatures : {
                name : "Psi Replenishment",
                usages : 1, 
                recovery : "long rest",
            },
            toNotesPage : {
                name : "Psionic Soul Psionic Talents",
                note : [
                    "\u2022 Psionic Discovery",
                    "   I meditate for 10 minutes which can be done during a rest",
                    "   I learn a sorcerer spell of a level I have spell slots for",
                    "   The spell must be from the divination or enchanment school",
                    "   I know the spell for a number of hours equal to my Psi Die roll",
                    "\u2022 Psychic Sorcery",
                    "   When I cast a spell, I roll my Psi Die and cast with no verbal components",
                    "   If I roll the spell's level or higher, no somatic or material required",
                    "\u2022 Telepathic Speech",
                    "   As a bonus action, I choose one creature I can see and roll my Psi Die",
                    "   For a number of hours equal to that roll, we can speak telepathically",
                    "   The distance must be equal to or less than a number of miles equal to the roll",
                    "   We must share a langauge to understand each other",
                    "   The connection ends early if I use this ability on a different creature"
                ],
                popUpName : "Psionic Soul Psionic Talents",
                source : ["UA:POR", 6],
            },
            action : [
                ["bonus action", "Psi Replenishment"],
                ["bonus action", "Telepathic Speech"],
            ]
        },
        "subclassfeature6" : {
            name : "Psychic Strike",
            source : ["UA:POR", 6],
            minlevel : 6,
            description : desc([
                "I can deal psychic damage to a creature I damage with a sorcerer spell",
                "The psychic damage is equal to a roll of my Psi Die and is dealt once per turn",
                "The sorcerer spell must have used a spell slot"
            ]),
        },
        "subclassfeature14" : {
            name : "Mind Over Body",
            source : ["UA:POR", 6],
            minlevel : 14,
            description : desc([
                "As a bonus action, I spend 1 or more sorcery points to transform",
                "It lasts a number of hours equal to the number rolled on my Psi Die",
                "For each sorcery point used, I gain one of the following benefits of my choice:",
                "\u2022 I see any invisible creature within 60 feet not behind full cover",
				"\u2022 I gain a flying speed equal to my walking speed and I can hover",
                "\u2022 I gain a swimming speed equal to twice my walking speed",
                "  I have the ability to breathe water",
                "\u2022 I can move, with equipment, through any space as narrow as 1 inch without squeezing",
				"  I can spend 5 ft of movement to escape form a grapple or from nonmagical restraints",
            ]),
            action : ["bonus action", ""]
        },
        "subclassfeature18" : {
            name : "Psychic Aura",
            source : ["UA:POR", 7],
            minlevel : 18,
            description : desc([
                "As a bonus action, I radiate a 30 ft radius aura of psychic energy", 
                "This lasts for 1 minute, until I am incapacitated, or until I lose my Psi Die",
                "If a creature starts their turn or moves into it for the first time, they take damage",
                "The damage is equal to a roll of my Psi Die + my Charisma modifier psychic damage",
                "If the creature takes that damage, their speed is halved until the start of its next turn"
            ]),
            action : ["bonus action", ""]
        }
    }
});

//Define Psychic Blade
WeaponsList["psychic blade"] = {
	regExpSearch : /^(?=.*psychic)(?=.*\bblade?\b).*$/i,
	name : "Psychic Blade",
	source : ["UA:POR", 4],
	ability : 1,
	type : "Simple",
	damage : [1, 6, "psychic"],
	range : "Melee, 60 ft",
	description : "finesse, thrown, magical",
    abilitytodamage : true,
    atkCalc : ["if (isOffHand) { output.die = output.die.replace('1d6', '1d4'); };", "The second psychic blade only dies 1d4 damage intsead of 1d6."]
};

//Define new and reprinted spells
SpellsList["intellect fortress-ua"] = {
    name : "Intellect Fortress",
	classes : ["bard", "sorcerer", "wizard"],
	source : [["UA:FRnW", 7], ["UA:POR", 7]],
	level : 4,
	school : "Abjur",
	time : "1 a",
	range : "30 ft",
	components : "V",
	duration : "Conc, 1 hour",
    description : "1+1/SL crea, all max 30 ft apart, has Psychic damage resistance and adv. on Int, Wis, and Cha saves",
	descriptionFull : "For the duration, you or one willing creature you can see within range has resistance to psychic damage, as well as advantage on Intelligence, Wisdom, and Charisma saving throws." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th. The creatures must be within 30 feet of each other when you target them."
}

SpellsList["mind sliver-ua"] = {
	name : "Mind Sliver",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["UA:SnW", 4], ["UA:FRnW", 7], ["UA:POR", 7]],
	level : 0,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	components : "V",
	duration : "1 rnd",
	save : "Int",
	description : "1 crea save or 1d6 Psychic dmg, -1d4 on first save before my turn ends; +1d6 at CL 5, 11, and 17",
	descriptionCantripDie : "1 crea save or `CD`d6 Psychic dmg and subtract 1d4 from first saving throw before my turn ends",
	descriptionFull : "You drive a disorienting spike of psychic energy into the mind of one creature you can see within range. The target must make an Intelligence saving throw. Unless the saving throw is successful, the target takes 1d6 psychic damage, and the first time it makes a saving throw before the end of your next turn, it must roll a d4 and subtract the number rolled from the save.\n   This spell's damage grows by 1d6 when you reach certain levels: 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};
WeaponsList["mind sliver-ua"] = {
    regExpSearch : /^(?=.*mind)(?=.*sliver).*$/i,
    name : "Mind Sliver",
    source : [["UA:SnW", 4], ["UA:FRnW", 7], ["UA:POR", 7]],
    list : "spell",
    ability : 6,
    type : "Cantrip",
    damage : ["C", 6, "psychic"],
    range : "60 ft",
    description : "1 creature Int save, success - no damage, fail - also -1d4 on first save before my next turn ends",
    abilitytodamage : false,
    dc : true
};

SpellsList["mind thrust-ua"] = {
	name : "Mind Thrust",
	classes : ["sorcerer", "wizard"],
	source : [["UA:FRnW", 7], ["UA:POR", 8]],
	level : 2,
	school : "Ench",
	time : "1 a",
	range : "90 ft",
	components : "V",
	duration : "1 rnd",
	save : "Int",
	description : "1+1/SL crea, max 30 ft apart, 3d6 Psychic dmg, no rea, only 1 bns/1 a next turn; save half, no effect",
	descriptionFull : "You thrust a lance of psychic disruption into the mind of one creature you can see within range. The target must make an Intelligence saving throw. On a failed save, the target takes 3d6 psychic damage, and it can’t take a reaction until the end of its next turn. Moreover, on its next turn, it must choose whether it gets a move, an action, or a bonus action; it gets only one of the three. On a successful save, the target takes half as much damage and suffers none of the spell’s other effects. " + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd. The creatures must be within 30 feet of each other when you target them."
};

//Define feats
FeatsList["metabolic control"] = {
    name : "Metabolic Control",
    source : ["UA:POR", 8],
    prerequisite : " Psionic Talent feature or Wild Talent feat",
    prereqeval : function() {
        return GetFeatureChoice('class', 'fighter', 'subclassfeature3').indexOf('Psionic Talent') != -1 || GetFeatureChoice('class', 'rogue', 'subclassfeature3').indexOf('Psionic Talent') != -1 || GetFeatureChoice('class', 'sorcerer', 'subclassfeature1').indexOf('Psionic Talent') != -1;
    },
    description : "I reduce Psionic Talent Die by one die size as an action to nourish self for 24 hours or meditate for 1 min to gain benefits of a short rest. [+1 Strength, Dexterity, or Constitution]",
    descriptionFull : "You have refined psionic control over your body’s functions. You gain the following benefits: \n \u2022 Increase your Strength, Dexterity, or Constitution score by 1, to a maximum of 20. \n \u2022 If your Psionic Talent die is available, you can take an action to channel your psionic power to nourish yourself for the next 24 hours, as if you consumed sufficient food and water for a day. When you take this action, your Psionic Talent die shrinks by one die size. \n \u2022 If your Psionic Talent die is available, you can meditate for 1 minute, at the end of which you gain the benefits of finishing a short rest, and your Psionic Talent die shrinks by one die size. You can’t meditate in this way again until you finish a long rest."
};

FeatsList["telekinetic"] = {
    name : "Telekinetic",
    source : ["UA:POR", 8],
    prerequisite : " Psionic Talent feature or Wild Talent feat",
    prereqeval : function() {
        return GetFeatureChoice('class', 'fighter', 'subclassfeature3').indexOf('Psionic Talent') != -1 || GetFeatureChoice('class', 'rogue', 'subclassfeature3').indexOf('Psionic Talent') != -1 || GetFeatureChoice('class', 'sorcerer', 'subclassfeature1').indexOf('Psionic Talent') != -1;
    },
    description : "I cast the mage hand cantrip without verbal or somatic components and the hand can be invisible. I can shove a creature to or from me if they fail a Strength save. DC 8 + proficiency bonus + ability score increased by feat [+1  Intelligence, Wisdom, or Charisma]",
    descriptionFull : "You learn to move things with your mind. You gain the following benefits: \n \u2022 Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20. \n \u2022 You learn the mage hand cantrip. You can cast it without verbal or somatic components, and you can make the spectral hand invisible. If you already know this spell, its range grows by 30 feet when you cast it. Its spellcasting ability is the ability increased by this feat. \n \u2022 As a bonus action, you can try to telekinetically shove one creature you can see within 30 feet of you. When you do so, roll your Psionic Talent die, and the target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + the ability modifier of the score increased by this feat) or be moved toward you or away from you a number of feet equal to 5 times the number you rolled. A creature can willingly fail this save.",
    choices : ["Intelligence", "Wisdom", "Charisma"],
    "intelligence" : {
        description : "I cast the mage hand cantrip without verbal or somatic components and the hand can be invisible. I can shove a creature to or from me if they fail a Strength save. DC 8 + proficiency bonus + Intelligence modifier [+1 Intelligence]",
        scores : [0, 0, 0, 1, 0, 0],
        improvements : "Telekinetc (feat): +1 Intelligence;",
        spellcastingBonus : {
            name : "Telekinetic",
            spellcastingAbility : 4,
            spells : ["mage hand"],
            selection : ["mage hand"]
        }
    },
    "wisdom" : {
        description : "I cast the mage hand cantrip without verbal or somatic components and the hand can be invisible. I can shove a creature to or from me if they fail a Strength save. DC 8 + proficiency bonus + Wisdom modifier [+1 Wisdom]",
        scores : [0, 0, 0, 0, 1, 0],
        improvements : "Telekinetc (feat): +1 Wisdom;",
        spellcastingBonus : {
            name : "Telekinetic",
            spellcastingAbility : 5,
            spells : ["mage hand"],
            selection : ["mage hand"]
        }
    },
    "charisma" : {
        description : "I cast the mage hand cantrip without verbal or somatic components and the hand can be invisible. I can shove a creature to or from me if they fail a Strength save. DC 8 + proficiency bonus + Charisma modifier [+1 Charisma]",
        scores : [0, 0, 0, 0, 0, 1],
        improvements : "Telekinetc (feat): +1 Charisma;",
        spellcastingBonus : {
            name : "Telekinetic",
            spellcastingAbility : 6,
            spells : ["mage hand"],
            selection : ["mage hand"]
        }
    }
};

FeatsList["telepathic"] = {
    name : "Telepathic",
    source : ["UA:POR", 8],
    prerequisite : " Psionic Talent feature or Wild Talent feat",
    prereqeval : function() {
        return GetFeatureChoice('class', 'fighter', 'subclassfeature3').indexOf('Psionic Talent') != -1 || GetFeatureChoice('class', 'rogue', 'subclassfeature3').indexOf('Psionic Talent') != -1 || GetFeatureChoice('class', 'sorcerer', 'subclassfeature1').indexOf('Psionic Talent') != -1;
    },
    description : "I can telepathically speak to a creature within 30 ft in a language I know and the creature can understand if it knows the language. I can shrink my Psionic Talents die to cast detect thoughts, using the ability score increased [+1 Intelligence, Wisdom, or Charimsa]",
    descriptionFull : "You awaken the ability to mentally connect with others. You gain the following benefits: \n \u2022 Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20. \n \u2022 You can speak telepathically to any creature you can see within 30 feet of you. Your telepathic utterances are in a language you know, and the creature understands you only if it knows that language. Your communication doesn’t give the creature the ability to respond to you telepathically. \n \u2022 If your Psionic Talent die is available, you can cast the detect thoughts spell, requiring no components. When you start casting the spell, your Psionic Talent die shrinks by one die size. Your spellcasting ability for the spell is the ability increased by this feat.",
    choices : ["Intelligence", "Wisdom", "Charisma"],
    "intelligence" : {
        description : "I can telepathically speak to a creature within 30 ft in a language I know and the creature can understand if it knows the language. I can shrink my Psionic Talents die to cast detect thoughts, using my Intelligence [+1 Intelligence]",
        scores : [0, 0, 0, 1, 0, 0],
        improvements : "Telekinetc (feat): +1 Intelligence;",
        spellcastingBonus : {
            name : "Telekinetic",
            spellcastingAbility : 4,
            spells : ["detect thoughts"],
            selection : ["detect thoughts"]
        }
    },
    "wisdom" : {
        description : "I can telepathically speak to a creature within 30 ft in a language I know and the creature can understand if it knows the language. I can shrink my Psionic Talents die to cast detect thoughts, using my Wisdom [+1 Wisdom]",
        scores : [0, 0, 0, 0, 1, 0],
        improvements : "Telekinetc (feat): +1 Wisdom;",
        spellcastingBonus : {
            name : "Telekinetic",
            spellcastingAbility : 5,
            spells : ["detect thoughts"],
            selection : ["detect thoughts"]
        }
    },
    "charisma" : {
        description : "I can telepathically speak to a creature within 30 ft in a language I know and the creature can understand if it knows the language. I can shrink my Psionic Talents die to cast detect thoughts, using my Charisma [+1 Charisma]",
        scores : [0, 0, 0, 0, 0, 1],
        improvements : "Telekinetc (feat): +1 Charisma;",
        spellcastingBonus : {
            name : "Telekinetic",
            spellcastingAbility : 6,
            spells : ["detect thoughts"],
            selection : ["detect thoughts"]
        }
    }
};

FeatsList["tower of iron will"] = {
    name : "Tower of Iron Will",
    source : ["UA:POR", 9],
    prerequisite : " Psionic Talent feature or Wild Talent feat",
    prereqeval : function() {
        return GetFeatureChoice('class', 'fighter', 'subclassfeature3').indexOf('Psionic Talent') != -1 || GetFeatureChoice('class', 'rogue', 'subclassfeature3').indexOf('Psionic Talent') != -1 || GetFeatureChoice('class', 'sorcerer', 'subclassfeature1').indexOf('Psionic Talent') != -1;
    },
    description : "After a creature within 30 feet or I fail a save, I can roll Psionic Talent die as a reaction and add the roll to the saving throw.",
    descriptionFull : "Your mind’s defenses are formidable. After you or another creature you can see within 30 feet of you fails a saving throw, you can use your reaction to roll your Psionic Talent die and add the number rolled to the saving throw, potentially causing it to succeed."
};

FeatsList["wild talent"] = {
    name : "Wild Talent",
    source : ["UA:POR", 9],
    description : "I have a Psionic Talent die if I don't have one already and new Psionic talents. As a bonus action, I can replenish this die once per long rest. See notes page for talents and rules for Psionic Talent die [+1 to any Ability Score]",
    descriptionFull : "You awaken to your psionic potential, which enhances your mind or body. Increase one ability score of your choice by 1, to a maximum of 20, to represent this enhancement. You also harbor a wellspring of psionic power within yourself, an energy that ebbs and flows as you channel it in various ways. This power is represented by your Psionic Talent die, the starting size of which is a d6.",
    toNotesPage : [{
        name : "Wild Talent Psionic Talent Die Rules",
        note : [
            "I use my Psionic Talent die (Psi Die) to use Psionic Talents",
            "On max roll, the size shrinks (d6-d4) and a roll of 1, it grows to start (d6-d8)",
            "On a roll of 4 on a d4, I can't use the die again until I finish a long rest",
            "As a bonus action, I can restore the die to its starting size once per long rest",
            "Psi DC for my Psionic Talents is 8 + proficiency mod + my Intelligence modifier",
        ],
        popUpName : "Wild Talent Psionic Talents Die Rules",
        source : ["UA:POR", 9]
    }, {
        name : "Wild Talent Psionic Talents",
        note : [
                "\u2022 Psi-Boosted Ability",
                "   I can add a talent die roll to an ability check before knowing the result",
                "   The ability check must use the ability I increased with Wild Talent",
                "\u2022 Psi-Guided Strike",
                "   I can add a talent die roll to an attack roll before knowing the result",
                "   The attack roll must use the ability I increased with Wild Talent"
            ],
        popUpName : "Wild Talent Psionic Talents",
        amendTo : "Wild Talent Psionic Talent Die Rules",
        source : ["UA:POR", 9]
    }]
};
