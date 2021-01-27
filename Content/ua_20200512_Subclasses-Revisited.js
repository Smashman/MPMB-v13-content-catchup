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
AddSubClass("rogue", "phantom", {
	regExpSearch : /^(?=.*rogue)(?=.*phantom).*$/i,
	subname : "Phantom",
	Source : ["UA:SR",1],
	features : {
		"subclassfeature3" : {
			name : "Whispers of the Dead",
			source : ["UA:SR", 1],
			minlevel : 3,
			description : desc([
			"Whenever I finish a short of long rest, I gain one skill or tool proficiency of my choice.",
			"This proficiency lasts until I use this feature again"
			])
		},
		"subclassfeature3.1" : {
			name : "Wails from the Grave",
			source : ["UA:SR",1],
			minlevel : 3,
			description : desc([
			"Immediately after I deal Sneak Attack damage on my turn, I can target a second",
			"creature that I can see within 30 ft of the first creature.  I roll half the number of",
			"Sneak Attack dice for my level \(round up\). and the second creature takes psychic",
			"damage equal to the roll's total.",
			"I can use this feature a number of times equal to my proficiency bonus and regain",
			"all expended uses when I finish a long rest."
			]),
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = What('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature9" : {
			name : "Tokens of the Departed",
			source : ["UA:SR", 2],
			minlevel : 9,
			description : desc([
			"As a reaction when a creature I can see dies within 30 ft of me, I get a Tiny trinket,",
			"a soul trinket. DM chooses the trinket's form or have me roll on the Trinkets table",
			"in the Player's Handbook.",
			"While the soul trinket is on my person, I have advantage on death saving throws and",
			"Constitution saving throws.",
			"I can have a max number of soul trinkets equal to my proficiency bonus, and I cannot",
			"create a new one while at my max.",
			"As an action, I can destroy one of my soul trinkets, no matter where it's located.",
			"When I do, I can ask the spirit associated with the trinket one question.  The spirit",
			"appears and answers in a language it knew in life.  It doesn't have to be truthful and",
			"it answers as concisely as possible before departing."
			]),
			action : [["reaction","create a soul trinket"],["action","destroy a soul trinket"]]
		},
		"subclassfeature13" : {
			name : "Ghost Walk",
			source : "UA:SR,2",
			minlevel : 13,
			description : desc([
			"As a bonus action, I assume a spectral form.  While in this form, I have a fly speed",
			"of 10 ft, can hover, and attack rolls have disadvantage against me. I can move through",
			"creature and objects as if difficult terrain; I take 1d10 force damage if I end my",
			"turn inside a creature or an object.",
			"I stay in this form for 10 minutes or until I end it as a bonus action. To use this",
			"feature again, I must finish a long rest or destroy a soul trinket as part of the",
			"bonus action to activate Ghost Walk."
			]),
			usages : "destroy soul trinket or 1x per ",
			recovery : "long rest",
			action : ["bonus action","begin/end Ghost Walk"]
		},
		"subclassfeature17" : {
			name : "Death Knoll",
			source : ["UA:SR", 2],
			minlevel : 17,
			description : desc([
			"When I use my Wails from the Grave feature, I can now deal the psychic damage",
			"to both the first and second creature."
			])
		}
	}
});
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
				spellcastingExtra : ["detect evil and good", "thunderwave", "phantasmal force", "gust of wind", "create food and water", "wind wall", "phantasmal killer", "greater invisibility", "creation", "seeming", "wish"],
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

if (!ClassList.artificer) {
	ClassList.wizard.artificerCompFunc = {
		add : function (compName) {
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
			Value(prefix + 'Comp.Race', compName);
			var changeMsg = "The " + compName + " has been added to the companion page at page number " + (tDoc.getField(prefix + 'Comp.Race').page + 1);
			CurrentUpdates.types.push("notes");
			if (!CurrentUpdates.notesChanges) {
				CurrentUpdates.notesChanges = [changeMsg];
			} else {
				CurrentUpdates.notesChanges.push(changeMsg);
			}
			return prefix;
		},
		remove : function (compName) {
			var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
			if (!AScompA) return;
			compName = compName.toLowerCase();
			for (var a = 1; a < AScompA.length; a++) {
				if (What(AScompA[a] + 'Comp.Race').toLowerCase().indexOf(compName) !== -1) {
					DoTemplate("AScomp", "Remove", AScompA[a], true);
				}
			}
		},
		find : function (compName) {
			var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
			var prefixes = [];
			if (!AScompA) return prefixes;
			compName = compName.toLowerCase();
			for (var a = 1; a < AScompA.length; a++) {
				if (What(AScompA[a] + 'Comp.Race').toLowerCase().indexOf(compName) !== -1) prefixes.push(AScompA[a]);
			}
			return prefixes;
		}
	}
};
ClassList.wizard.wizardCompFunc = {
	update : function(wizardLevel,wizardInt,wizardAC,wizardStr,wizardDex,wizardCon,wizardWis,wizardCha) {
		var companionFunctions = ClassList.artificer ? ClassList.artificer.artificerCompFunc : ClassList.wizard.artificerCompFunc;
			
		// companionFunctions.remove('manifest mind');
			
		var manifest = 'Awakened Spellbook';
		var prefix = false;
		var crea = companionFunctions.find('manifest mind');
			
		if(crea.length > 0) {
			prefix = crea[0];
		}
		else {
			prefix = companionFunctions.add(manifest);
		}
			
		var manifestNote = "Manifest Mind \(UA: Subsclasses Revistsed Pg 5\)" + desc([
		"As a bonus action with my Awakened Spellbook on my person, I can cause the mind to manifest",
		"as a Tiny spectral construct, hovering in an unoccupied space of my choice within 60 ft.",
		"It is intangible and doesn't occupy its space, and it sheds dim light in a 10 ft",
		"radius. It looks like a ghostly tome, a cascade of text, or a scholar from the past",
		"\(my choice.\). \(See Companion Page for statistics for this construct.\)",
		"While manifested, it can hear and se and has darkvision with a range of 60 ft.  As an action,",
		"I can hear and see using its senses instead of my own, until my concentration ends \(as if",
		"concentrating on a spell\).",
		"Whenever I cast a wizard spell on my turn, I can cast it as if I were in the specrtal mind's",
		"space, using its senses.  I can do this a number of times per day equal to my prificiency",
		"bonus, and I regain all uses when I finish a long rest.",
		"As a bonus action, I can cause it to hover up to 30 ft to an unoccupied space that I or it",
		"can see. It can pass through creatures but not objects.  It stops manifesting if it is ever",
		"more than 300 ft away from me, if it drops to 0 hit points, if I die, or if I dismiss it as",
		"a bonus action."
		]);
	}
};
AddSubClass("wizard","order of scribes", {
	regExpSearch : /^(?=.*wizard)(?=.*order)(?=.*scribes).*$/i,
	subname : "Order of Scribes",
	source : ["UA:SR",4],
	features : {
		"subclassfeature2" : {
			name : "Wizardly Quill",
			source : ["UA:SR",4],
			minlevel : 2,
			description : desc([
				"As a bonus action, I can magically create a Tiny quill. It disappears if I ",
				"create another one or I die.  It has the following properties:",
				"\u25C6 It doesn't require ink; produces ink in color of my choice",
				"\u25C6 If used for spell transcribing, reduce gold and time by half",
				"\u25C6 As a bonus action, I can erase any text I've written with the quill",
				"  as long as it's within 5 ft",
			]),
			action : [["bonus action","create quill"],["bonus action","erase text"]]
		},
		"subclassfeature2.1" : {
			name : "Awakened Spellbook",
			source :["UA:SR",4],
			minlevel : 2,
			description : desc ([
				"I have awakened an arcane sentience within my spellbook.",
				"While I am holding the book, it grants me the followings benefits",
				"\u25C6 I can use the book as a spellcasting focus for my wizard spells",
				"\u25C6 When I cast a wizard spell with a spell slot, I can temp. replace its",
				"  damage type with another type of a spell in my spellbook",
				"\u25C6 When I cast a wizard spell as a ritual, I can use the spell's normal",
				"  casting time, rather than adding 10 minutes to it.  Once I use this benefit",
				"  I can't use it again until I take a long rest.",
				"Can replace the book over a short rest by using my Wizardly Quill to write arcane",
				"sigils in a blank book or a spellbook to which I am attuned. All spells vanish from",
				"previous book if it exists somewhere."
			]),
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature6" : {
			name : "Master Scrivener",
			source : ["UA:SR",4],
			minlevel : 6,
			description : desc([
				"Whenever I finish a long rest, I can create a magic scroll by touching my Wizardly",
				"Quill to a blank piece of paper or parchment and causing one spell from my Awakened",
				"Spellbook to be copied onto the scroll.  The spellbook must be within 5 ft to do this.",
				"Chosen spell must be 1st or 2nd level and have a casting time of 1 action.  Once in the",
				"scroll, the spell's power is enhanced counting as 1 level higher than normal.  I can",
				"cast this spell as an action by reading the scroll.  No one else can read it and it",
				"vanishes when I cast it or finish my next long rest.",
				"When I craft spell scrolls, gold and time are halved when using my Wizardly Quill."
			]),
			usages : 1,
			recovery : "long rest",
			action : ["action","cast Scrivener scroll"]
	},
	"subclassfeature10" : {
		name : "Manifest Mind",
		source : ["UA:SR",5],
		minlevel : 10,
		description : desc(["As a bonus action, I can cause my Awakened Spellbook to manifest. See \"Notes\" page"]),
		toNotesPage : [{
			name : "Manifest Mind",
			source : ["UA:SR",5],
			popupName : "Manifest Mind",
			page3notes : false,
			note : desc (["As a bonus action with my Awakened Spellbook on my person, I can cause the mind to",
			"manifest as a Tiny spectral construct, hovering in an unoccupied space of my choice within",
			"60 ft. It is intangible and doesn't occupy its space, and it sheds dim light in a 10 ft radius.",
			"It looks like a ghostly tome, a cascade of text, or a scholar from the past \(my choice.\).",
			"\(See Companion Page for statistics for this construct.\)",
			"While manifested, it can hear and see and has darkvision with a range of 60 ft.  As an",
			"action, I can hear and see using its senses instead of my own, until my concentration",
			"ends \(as if concentrating on a spell\).",
			"Whenever I cast a wizard spell on my turn, I can cast it as if I were in the spectral mind's",
			"space, using its senses.  I can do this a number of times per day equal to my proficiency",
			"bonus, and I regain all uses when I finish a long rest.",
			"As a bonus action, I can cause it to hover up to 30 ft to an unoccupied space that I or it",
			"can see. It can pass through creatures but not objects.  It stops manifesting if it is ever",
			"more than 300 ft away from me, if it drops to 0 hit points, if I die, or if I dismiss it as",
			"a bonus action."
			])
		}],
		eval : function() {
			var companionFunctions = ClassList.artificer ? ClassList.artificer.artificerCompFunc : ClassList.wizard.artificer.CompFunc;
			companionFunctions.add("Manifest Mind");
			ClassList.wizard.wizardCompFunc.update(10, What('Int mod'),What('AC'),What('Str mod'),What('Dex mod'),What('Con mod'),What('Wis mod'),What('Cha mod'));
		},
		removeeval : function() {
			var companionFunctions = ClassList.artificer ? ClassList.artificer.artificerCompFunc : ClassList.wizard.artificerCompFunc;
			companionFunctions.remove("Manifest Mind");
		},
		action : [["bonus action",""],["bonus action","Hover spellbook 30ft"],["bonus action","dismiss Manifestation"]],
		usages : "Prof. Bonus per ",
		usagescalc : "event.value = What('Proficiency Bonus');",
		recovery : "long rest"
	},
	"subclassfeature14" : {
		name : "One with the Word",
		source : ["UA:SR",5],
		minlevel : 14,
		description : desc([
			"While I am holding my Awakened Spellbook and it is manifest, I can take an action to",
			"swap places with the manifestation. I can do this a number of times equal to my",
			"proficiency bonus and I regain all expended uses when I finish a long rest.",
			"If I die but at least one spell remains in my Awakened Spellbook, I can return to",
			"life after 1 minute within 5 ft of the book. I revive with 1 hit point. I then roll",
			"3d6 and the spellbook loses spells of my choice that have a combined spell level",
			"equal to that roll or higher. I am incapable of casting the lost spells, even if I",
			"find them on a scroll or in another spellbook.  I can only restore my ability to cast",
			"one of these spells with the wish spell, which will restore one spell per casting."
		]),
		action : ["action","Swap places with spellbook"],
		usages : "Prof. Bonus per ",
		usagescalc : "event.value = What('Proficiency Bonus');",
		recovery : "long rest"
		}
	}
});
