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
	source : ["UA:SP4", 1],
	features : {
		"subclassfeature3" : {
			name : "Guiding Whispers",
			source : ["UA:SP4", 1],
			minlevel : 3,
			description : desc([
				"",
			]),
			spellcastingBonus : {
				name : "Guiding Whispers (level 1)",
				spells : ["guidance"],
				selection : ["guidance"],
				firstCol : "atwill"
			},
			spellChanges : {
				"guidance" : {
					range : "60 ft",
					changes : "I can cast guidance with a range of 60 feet"
				}
			},
		},
		"subclassfeature3.1" : {
			name : "Spiritual Focus",
			source : ["UA:SP4", 1],
			minlevel : 3,
			description : desc([
				"",
			]),
		},
		"subclassfeature3.2" : {
			name : "Tales from Beyond",
			source : ["UA:SP4", 1],
			minlevel : 3,
			description : desc([
				"",
			]),
			action : [["bonus action"," (roll)"],["action"," (choose target)"]]
		},
		"subclassfeature6" : {
			name : "Spirit Session",
			source : ["UA:SP4", 2],
			minlevel : 6,
			description : desc([
				"",
			])

		},
		"subclassfeature14" : {
			name : "Mystical Connection",
			source : ["UA:SP4", 3],
			minlevel : 14,
			description : desc([
				"",
			])
		},
	}
});
AddSubClass("warlock","the undead",{
	regExpSearch : /^(?=.*undead)(?=.*warlock).*$/i,
	subname : "the Undead", 	
	source : ["UA:SP4", 1],
	spellcastingExtra : ["bane","false life","blindness/deafness","phantasmal force","speak with dead","phantom steed","death ward","greater invisibility","antilife shell","cloudkill"],
	features : {
		"subclassfeature1" : {
			name : "Form of Dread",
			source : ["UA:SP4", 3],
			minlevel : 1,
			description : desc([
				"",
			]),
		},
		"subclassfeature6" : {
			name : "Grave Touched",
			source : ["UA:SP4", 3],
			minlevel : 3,
			description : desc([
				"I no longer need to eat, drink, or breathe;",
			]),
		},
		"subclassfeature10" : {
			name : "Mortal Husk",
			source : ["UA:SP4", 4],
			minlevel : 10,
			description : desc([
				"",
			]),
			dmgres : ["Necrotic"]
		},
		"subclassfeature14" : {
			name : "Spirit Projection",
			source : ["UA:SP4", 4],
			minlevel : 14,
			description : desc([
				"",
			]),
			usages : 1,
			recovery: "long rest",
		},
	}
});