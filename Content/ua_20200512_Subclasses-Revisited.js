var iFileName = "ua_20200512_Subclasses-Revisited.js";
RequiredSheetVersion(13);

// Define the source
SourceList["UA:SR"] = {
	name : "Unearthed Arcana: Subclasses Revisited",
	abbreviation : "UA:SR",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2020/dnd/downloads/UA2020_SubclassesRevisited_0512.pdf",
	date : "2020/05/12"
};

AddSubClass("warlock", "the genie", {
	regExpSearch : /^(?=.*warlock)((?=.*genie)|(?=.*dao)(?=.*djinni)(?=.*efreeti)(?=.*marid)).*$/i,
	subname : "The Genie",
	source : ["UA:SR", 2],
	features : {
		"subclassfeature1" : {
			name : "Choose your patron",
			source : ["UA:SR", 2],
			minlevel : 1,
			description : "\n   " + "Use the \"Choose Feature\" button above to choose your Genie Patron",
			extraname : "Genie Kind",
			choices : ["dao", "djinni", "efreeti", "marid"],
			"dao" : {
				name : "Dao",
				source : ["UA:SR", 2],
				spellcastingExtra : ["detect evil and good", "sanctuary", "phantasmal force", "spike growth", "create food and water", "meld into stone", "phantasmal killer", "creation", "stone shape", "wall of stone", "wish"],
				description : "\n   " + "My Genie patron is a Dao, associated with Earth"
			},
			"djinni" : {
				name : "Djinni",
				source : ["UA:SR", 2],
				spellcastingExtra : ["detect good and evil", "thunderwave", "phantasmal force", "spike growth", "gust of wind", "create food and water", "wind wall", "phantasmal killer", "greater invisibility", "creation", "seeming", "wish"],
				description : "\n   " + "My Genie patron is a Djinni, associated with Air"
			},
			"efreeti" : {
				name : "Efreeti",
				source : ["UA:SR", 2],
				spellcastingExtra : ["detect evil and good", "burning hands", "phantasmal force", "scorching ray", "create food and water", "fireball", "phantasmal killer", "fire shield", "creation", "flame strike", "wish"],
				description : "\n   " + "My Genie patron is an Efreeti, associated with Fire"
			},
			"marid" : {
				name : "Marid",
				source : ["UA:SR", 2],
				spellcastingExtra : ["detect evil and good", "fog cloud", "phantasmal force", "blur", "create food and water", "sleet storm", "phantasmal killer", "control water", "creation", "cone of cold", "wish"],
				description : "\n   " + "My Genie patron is a Marid, associated with Water"
			},
			choiceDependencies : [{
				feature : "subclassfeature6"
			}, {
				feature : "subclassfeature1.2"
			}]
		},
		"subclassfeature1.1" : {
			name : "Expanded Spell List",
			source : ["UA:SR", 3],
			minlevel : 1,
/*			description : "\n   " + "I gain additional spells which I can choose from when selecting my Warlock spells" + "\n   " + "These additional spells are determined by my Genie patron.",*/
			calcChanges : {
				spellList : [
					function(spList, spName, spType) {
					// don't add if this is not a class or a list of spells is already given
					if (!ClassList[spName] || spList.spells || spList.psionic) return;
					// if this is an 'extra spell', also test if it uses the class' spell list or not
					if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
					spList.extraspells = spList.extraspells.concat(["wish"]);
					},
				"The Genie Patron adds Wish as a spell available as a 9th level Mystic Arcanum."
				]
			},
		},
		"subclassfeature1.2" : {
			name : "Genie's Vessel",
			source : ["UA:SR", 3],
			minlevel : 1,
			description : desc([
			"My patron gifts me a magical vessel that grants me a measure of my patron's power.",
			"Tiny object; spellcasting focus for my Warlock spells",
			"While I am touching the vessel, I can use Bottled Respite or Genie's Wrath \(See Notes.\).",
			"The Vessel's AC equals my spell save DC. Its hit points equal my Warlock level plus my",
			"prof. bonus, and it is immune to poison and psychic damage.",
			"If destroyed, I can perform a 1 hour ritual to reclaim. It vanishes when I die."
			]),
			"dao" : {
				name : "Genie's Vessel",
				additional : "Genie's Wrath: bludgeoning"
			},
			"djinni" : {
				name : "Genie's Vessel",
				additional : "Genie's Wrath: thunder"
			},
			"efreeti" : {
				name : "Genie's Vessel",
				additional : "Genie's Wrath: fire"
			},
			"marid" : {
				name : "Genie's Vessel",
				additional : "Genie's Wrath: cold"
			},
			toNotesPage : [{
				name : "Genie's Vessel",
				source : ["UA:SR",3],
				popupName : "Genie's Vessel",
				note : [
				"Bottled Respite",
				"As an action, I can magically vanish and enter my vessel, which remains in the space I left.",
				"The interior of the vessel is an extradimensional space in the shape of a 20-foot-radius",
				"cylinder, 20 feet high, and resembles my vessel. The interior is comfortably appointed with",
				"cushions and low tables and is a comfortable temperature. While inside, I can hear the area",
				"around my vessel as if I were in its space. I can remain inside the vessel up to a number of",
				"hours equal to twice my proficiency bonus. I exit the vessel early if I use a bonus action",
				"to leave, if I die, or if the vessel is destroyed. When I exit the vessel, I appear in the",
				"unoccupied space closest to it. Any objects left in the vessel remain there until carried",
				"out, and if the vessel is destroyed, every object stored there harmlessly appears in the",
				"unoccupied spaces closest to the vessel’s former space. Once I enter the vessel, I can’t",
				"enter again until I finish a long rest.",
				"Genie's Wrath",
				"Once during each of my turns when I hit with an attack roll, I can deal extra damage to", 
				"the target equal to my proficiency bonus. The type of this damage is determined by",
				"my patron: bludgeoning \(dao\), thunder \(djinni\), fire \(efreeti\), or cold \(marid\)."
				]
			}],
			action :["action","Bottled Respite"],
			usages : "Enter 1x per ",
			recovery : "long rest"
		},
		"subclassfeature6" : {
			name : "Elemental Gift",
			minlevel : 6,
			"dao" : {
				name : "Elemental Gift",
				source : ["UA:SR", 3],
				description : desc ([
					"I gain resistance to bludgeoning damage. Bonus action to gain a fly speed of 30 ft",
					"which lasts for 10 min and I can hover. I can use this bonus action as number of",
					"times equal to my prof. bonus and I regain all uses after a long rest.",
				]),
				dmgres : "Bludgeoning"
			},
			"djinni" : {
				name : "Elemental Gift",
				source : ["UA:SR", 3],
				description : desc ([
					"I gain resistance to thunder damage. Bonus action to gain a fly speed of 30 ft",
					"which lasts for 10 min and I can hover. I can use this bonus action as number of",
					"times equal to my prof. bonus and I regain all uses after a long rest.",
				]),
				dmgres : ["Thunder"]
			},
			"efreeti" : {
				name : "Elemental Gift",
				source : ["US:SR0512",3],
				description : desc ([
					"I gain resistance to fire damage. Bonus action to gain a fly speed of 30 ft",
					"which lasts for 10 min and I can hover. I can use this bonus action as number of",
					"times equal to my prof. bonus and I regain all uses after a long rest.",
				]),
				dmgres : ["Fire"]
			},
			"marid" : {
				name : "Elemental Gift",
				source : ["UA:SR",3],
				description : desc ([
					"I gain resistance to cold damage. Bonus action to gain a fly speed of 30 ft",
					"which lasts for 10 min and I can hover. I can use this bonus action as number of",
					"times equal to my prof. bonus and I regain all uses after a long rest.",
				]),
				dmgres : ["Cold"]
			},
			action : ["bonus action","30 ft Fly Speed"],
			usages : "Prof. Bonus per ",
			usagescalc : "event.value = What('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature10" : {
			name : "Sanctuary Vessel",
			source : ["UA:SR", 3],
			minlevel : 10,
			description : desc([
			"When I enter my Genie’s Vessel via the Bottled Respite feature, I can now choose up to",
			"five willing creatures that I can see within 30 feet of me, and the chosen creatures are",
			"drawn into the vessel with me. As a bonus action, I can eject any number of creatures",
			"from the vessel, and everyone is ejected if I leave or the vessel is destroyed.",
			"In addition, anyone (including me) who remains within the vessel for at least 10 minutes",
			"gains the benefit of finishing a short rest, and anyone can add my proficiency bonus",
			"to the number hit points they regain if they spend Hit Dice as part of a short rest there."
			])
		},
		"subclassfeature14" : {
			name : "Limited Wish",
			source : ["UA:SR", 4],
			minlevel : 14,
			description : desc ([
			"I entreat my patron to grant me a small wish. As an action, I can speak my desire to my",
			"Genie’s Vessel, requesting the effect of one spell that is 6th level or lower and has a",
			"casting time of 1 action. The spell can be from any class’s spell list, and I don’t need to",
			"meet the requirements in that spell, including costly components; the spell simply takes",
			"effect as part of this action.",
			"Once I use this feature, I can’t use it again until I finish 1d4 long rests."
			]),
			action : ["action",""],
			usages : "1d4 ",
			recovery : "long rest"
		}
	}
});
