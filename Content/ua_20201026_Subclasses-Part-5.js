/*  -INFORMATION-
	Subject:    Subclass
	Effect:     This script adds a subclass for the monk, called the "Way of the Ascendant Dragon"
		    	This is a subclass made in the "Unearthed Arcana 2020: Subclasses Part 5" article, taken from https://media.wizards.com/2020/dnd/downloads/UA2020_102620_Subclasses05.pdf
	Code by:	WondrousLittleWizard
	Date:		2020-28-11 (sheet v13.0.0beta32)
*/

var iFileName = "ua_20201026_Subclasses-Part-5.js";
RequiredSheetVersion(13);

// Define the source
SourceList["UA:SP5"] = {
	name : "Unearthed Arcana: Subclasses Part 5",
	abbreviation : "UA:SP5",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2020/dnd/downloads/UA2020_102620_Subclasses05.pdf",
	date : "2020/25/10",
};

AddSubClass("monk", "ascendant dragon", {
	regExpSearch : /^(?=.*(monk|dragon))(?=.*ascendant).*$/i,
	subname : "Way of the Ascendant Dragon",
	source : ["UA:SP5", 1],
	features : {
		"subclassfeature3" : {
			name : "Draconic Disciple",
			source : ["UA:SP5", 1],
			minlevel : 3,
			description : desc([
				"I channel draconic ki and gain benefits",
				"When I hit with an unarmed strike, I can change the damage type",
				"I can change the damage to acid, cold, fire, lightning, or poison",
				"If I fail an Intimidation or Persuasion check, I can use my reaction to reroll the check",
				"Once this succeeds, I can't use it again until the end of a long rest",
			]),
			languageProfs : ["Draconic"],
			action : ["reaction", " (reroll check)"],
			usages : 1,
			recovery : "long rest",
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.monk && classes.known.monk.level && v.baseWeaponName == "unarmed strike") {
							fields.Description += (fields.Description ? '; ' : '') + "Can change damage type to acid, cold, fire, lightning, or poison";
						};
					},
					"I can change the damage on unarmed strikes to acid, cold, fire, lightning or poison"
				],
			}
		},
		"subclassfeature3.1" : {
			name : "Breath of the Dragon",
			source : ["UA:SP5", 1],
			minlevel : 3,
			description : desc([
				"When I take the attack action, I can choose to make one attack deal elemental damage",
				"I can choose to make a 20-foot cone or 30-foot long line (5-ft wide)",
				"Creatures within the area must succeed a Dex save or take damage",
				"I can choose the damage to be acid, cold, fire, lightning, or poison",
				"I can use this a number of times equal to my proficiency bonus, or use 1 ki point",
			]),
			additional : ["", "", "2d4", "2d4", "2d6", "2d6", "2d6", "2d6", "2d6", "2d6", "3d8", "3d8", "3d8", "3d8", "3d8", "3d8", "3d10", "3d10", "3d10", "3d10"],
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = What('Proficiency Bonus')",
			recovery : "long rest",
		},
		"subclassfeature6" : {
			name : "Wings Unfurled",
			source : ["UA:SP5", 2],
			minlevel : 6,
			description : desc([
				"When I use my Step of the Wind, I gain a fly speed equal to my walking speed",
				"I can use this a number of times equal to my proficiency bonus, or use",
				"1 additional ki point when using Step of the Wind",
			]),
		},
		"subclassfeature11" : {
			name : "Aspect of the Wyrm",
			source : ["UA:SP5", 2],
			minlevel : 11,
			description : desc([
				"I can create an aura of energy to protect myself and my allies",
				"For 1 minute, allies and I within 30 feet of me have damage resistance",
				"I can choose resistance to acid, cold, fire, lightning, or poison",
				"Additionally, if one of us is attacked, we can deal elemental damage in return",
				"The damage equals one roll of my Martial Arts die",
				"I can use this once per long rest or if I use 4 ki points",
			]),
			additional : ["", "", "", "", "", "", "", "", "", "", "1d8", "1d8", "1d8", "1d8", "1d8", "1d8", "1d10", "1d10", "1d10", "1d10"],
			action : [["bonus action", " (activate)"], ["reaction", " (retaliate)"]],
			usages : 1,
			recovery : "long rest",
		},
		"subclassfeature17" : {
			name : "Ascendant Aspect",
			source : ["UA:SP5", 2],
			minlevel : 17,
			description : desc([
				"I gain benefits from my draconic ki",
				"I gain blindsight out of 30 ft, and can see anything not behind total cover",
				"I can see invisible creatures unless they successfully hide from me",
				"When I deal damage with my Breath of the Dragon, energy clings to target",
				"At the start of its turns, the creature takes damage equal to one Martial Arts die roll",
				"It can repeat its save at the end of its turns, ending the effect on a success",
				"When I use Aspect of the Wyrm, creatures I choose within the aura take damage",
				"The damage equals 4d10 acid, cold, fire, lightning, or poison damage",
			]),
			vision : [["blindsight", 30]],
		}
	}
});

var rangerSubclassDrakewardenUA = AddSubClass("ranger", "drakewarden", {
	regExpSearch : /^(?=.*(ranger|drakewarden))(?=.*drake).*$/i,
	subname : "Drakewarden",
	source : ["UA:SP5", 2],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	fullname : "Drakewarden",
	features : {
		"subclassfeature3" : {
			name : "Draconic Gift",
			source : ["UA:SP5", 3],
			minlevel : 3,
			description : desc([
				"I learn Draconic and the Thaumaturgy cantrip",
			]),
			languageProfs : ["Draconic"],
			spellcastingBonus : [{
				name : "Thaumaturgy cantrip",
				spells : ["thaumaturgy"],
				selection : ["thaumaturgy"],
			}],
		},
		"subclassfeature3.1" : {
			name : "Drake Companion",
			source : ["UA:SP5", 3],
			minlevel : 3,
			description : desc([
				"I can use an action to summon a drake within 30 feet of me",
				"I choose the type as per the drake's Draconic Essense ability",
				"The drake is friendly to me and my companions and obeys my commands",
				"The drake acts after my turn in initiative",
				"The drake can move and use its reaction on its own, but only takes the Dodge action",
				"I can use my bonus action to choose the drake's action",
				"If I'm incapacitated, the drake can take any action, not just Dodge",
				"The drake remains for a number of hours equal to my prof bonus it drops to 0 HP or I die",
				"I can only summon one drake per long rest, or if I expend a 1st level spell slot or higher",
			]),
			usages : 1,
			recovery : "long rest",
			action : ["bonus action", " (Command)"],
			eval : function () {
				var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
				var prefix = false;
				if (AScompA) {
					for (var a = 1; a < AScompA.length; a++) {
						if (!What(AScompA[a] + 'Comp.Race')) {
							prefix = AScompA[a];
							break;
						}
					}
				}
				if (!prefix) prefix = DoTemplate('AScomp', 'Add');
				Value(prefix + 'Comp.Race', "Drake Companion");
				Value(prefix + 'Comp.Type', "Companion");
				var changeMsg = "The Companion Drake has been added to the companion page at page number " + (tDoc.getField(prefix + 'Comp.Race').page + 1);
				CurrentUpdates.types.push("notes");
				if (!CurrentUpdates.notesChanges) {
					CurrentUpdates.notesChanges = [changeMsg];
				} else {
					CurrentUpdates.notesChanges.push(changeMsg);
				}
			},
			removeeval : function () {
				var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
				if (!AScompA) return;
				for (var a = 1; a < AScompA.length; a++) {
					if (What(AScompA[a] + 'Comp.Race').toLowerCase().indexOf("drake companion") !== -1) {
						DoTemplate("AScomp", "Remove", AScompA[a], true);
					}
				}
			},
			changeeval : function (lvlA) {
				var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
				if (!AScompA) return;
					var newHP = Math.round(lvlA[1] * 5);
					var newProf = ProficiencyBonusList[classes.totallevel - 1];
					var newAC = 14 + newProf;
					
					if (lvlA[1] >= 15) {
						var newSize = 4;
					} else {
						var newSize = 2;
					}

				for (var a = 1; a < AScompA.length; a++) {
					if (What(AScompA[a] + 'Comp.Race').toLowerCase().indexOf("drake companion") !== -1) {
						Value(AScompA[a] + "Comp.Use.HP.Max", newHP);
						Value(AScompA[a] + "Comp.Use.Proficiency Bonus", newProf);
						Value(AScompA[a] + "Comp.Use.AC", newAC);

						if (lvlA[1] >= 7) {
							Value(AScompA[a] + "Comp.Use.Attack.1.Description", "Additional " + (lvlA[1] < 15 ? 1 : 2) + "d6 + " + newProf + " damage of type determined by Draconic Essense");
						} else {
							Value(AScompA[a] + "Comp.Use.Attack.1.Description", "Additional " + newProf + " damage of type determined by Draconic Essense");
						}
						PickDropdown(AScompA[a] + "Comp.Use.Size", newSize);
					}
				}
			},
		},
		"subclassfeature7" : {
			name : "Bond of Fang and Scale",
			source : ["UA:SP5", 4],
			minlevel : 7,
			description : desc([
				"When I summon my drake it gains the additional benefits:",
				"\u2022 I gain resistance the damage type chosen by the Draconic Essense",
				"\u2022 I can choose the drake to have a 40-foot swim or fly speed",
				"\u2022 If I choose swim speed, it also breathe underwater",
				"\u2022 The drake's bite attack deals an extra 1d6 damage chosen by the Draconic Essense",
			]),
		},
		"subclassfeature11" : {
			name : "Drake's Breath",
			source : ["UA:SP5", 4],
			minlevel : 11,
			description : desc([
				"I can release a 30-foot cone of damaging breath as an action",
				"Creatures must succeed a Dex save or take damage, or half on a successful save",
				"I can choose the damage to be acid, cold, fire, lightning, or poison",
				"I can use this ability once per long rest, or if I expend a 3rd level spell slot or higher",
			]),
			additional : ["", "", "", "", "", "", "", "", "", "", "6d6", "6d6", "6d6", "6d6", "8d6", "8d6", "8d6", "8d6", "8d6", "8d6"],
			action : ["action", ""],
			usages : 1,
			recovery : "long rest",
		},
		"subclassfeature15" : {
			name : "Perfected Bond",
			source : ["UA:SP5", 4],
			minlevel : 15,
			description : desc([
				"My strong bond with my drake peaks:",
				"\u2022 My drake becomes Large sized",
				"\u2022 The drake's attacks deal an extra 1d6 damage (total 2d6 damage)",
				"\u2022 When the drake or I take damage while within 30 feet of each other,",
				"\u2022 I can use my reaction to grant myself or the drake resistance to that damage",
			]),
			action : ["reaction", ""],
		},
	}
});
if (ClassList.rangerua) { ClassList.rangerua.subclasses[1].push(rangerSubclassDrakewardenUA); };

CreatureList["drake companion"] = {
	name : "Drake Companion",
	source : ["UA:SP5", 3],
	size : 4,
	type : "Dragon",
	subtype : "",
	alignment : "Unaligned",
	ac : 14,
	hp : 5,
	hd : [2, 6],
	speed : "40 ft",
	scores : [16, 12, 15, 8, 14, 8],
	saves : ["", 3, "", "", 4, ""],
	damage_immunities : "determined by Draconic Essense",
	senses : "Darkvision 60 ft",
	passivePerception : 12,
	languages : "Draconic",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1,
		damage : [1, 6, "piercing"],
		range : "5 ft",
		modifiers : ["", "", false],
		description : "Additional " + (Number(What('Proficiency Bonus'))) + " damage of type determined by Draconic Essense",
	}],
	features : [{
		name : "Draconic Essense",
		description : "When the drake is summoned, choose acid, cold, fire, lightning, or poison. The drake gains benefits based on the chosen type.",
	},
	{
		name : "Companion Drake",
		description : "The drake obeys the commands of its summoner and shares its proficiency bonus. It takes its turn immediately after its summoner, on the same initiative count. It can move and take reactions on its own, but only takes the Dodge action on its turn unless its summoner takes a bonus action to command to do otherwise.",
	}],
	actions : [{
		name : "Bond of Fang and Scale",
		description : "At 7th level ranger, the summoner can choose one of the following benefits for the drake to gain: \n  \u2022 40 ft swim speed & ability to also breathe underwater \n  \u2022 40 ft fly speed.",
	},
	{
		name : "Perfected Bond",
		description : "At 15th level ranger, the drake is now a Large creature.",	
	}],
	eval : function(prefix) {
		tDoc.getField(prefix + "Comp.Use.HP.Max").setAction("Calculate", "event.value = 5 + ((classes.known.ranger ? classes.known.ranger.level : classes.known.rangerua ? classes.known.rangerua.level : 1) * 5);");
		tDoc.getField(prefix + "Comp.Use.HD.Level").setAction("Calculate", "event.value = classes.known.ranger ? classes.known.ranger.level : classes.known.rangerua ? classes.known.rangerua.level : 1;");
		tDoc.getField(prefix + "Comp.Use.Proficiency Bonus").setAction("Calculate", "event.value = What('Proficiency Bonus')");
	},
	removeeval : function(prefix) {
		if (!prefix) return;
		tDoc.getField(prefix + "Comp.Use.HP.Max").setAction("Calculate", "");
		tDoc.getField(prefix + "Comp.Use.HD.Level").setAction("Calculate", "");
		tDoc.getField(prefix + "Comp.Use.Proficiency Bonus").setAction("Calculate", "");
	},
};