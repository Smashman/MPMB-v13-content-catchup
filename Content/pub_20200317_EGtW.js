var iFileName = "pub_20200317_EGtW.js";
RequiredSheetVersion(13);

// Define the source
SourceList.W={
	name : "Explorer's Guide to Wildemount",
	abbreviation : "EGtW",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/wildemount",
	date : "2020/03/17"
};

RaceList["pallid elf"] = {
	regExpSearch : /^(?!.*half)((?=.*(pallid))|((?=.*\b(elfs?|elves|elvish|elven)\b))).*$/i,
	name : "Pallid Elf",
	sortname : "Elf, Pallid",
	source : ["W", 200],
	plural : "Pallid Elves",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Elvish"],
	vision : [["Darkvision", 60], ["Adv. on Intelligence (Investigation) and Wisdom (Insight) checks", ""]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	skills : ["Perception"],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to over 6 feet tall (4'6\" + 2d10\")",
	weight : " weigh around 110 lb (90 + 2d10 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to 1,7 metres tall (137 + 5d10 cm)",
	weightMetric : " weigh around 50 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	improvements : "Pallid Elf: +2 Dexterity, +1 Wisdom;",
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Pallid Elf (+2 Dexterity, +1 Wisdom)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. This gives the same benefit as a human gets from 8 hours of sleep (long rest takes only 4 hours).\nIncisive Sense: I have advantage on Intelligence (Investigation) and Wisdom (Insight) checks.\nBlessing of the Moonweaver: 1st level: Light cantrip; 3rd level: Sleep; 5th level: Invisibility. I can cast both spells on myself once per long rest without material components, using Wisdom as my spellcasting ability for these.", // errata to specify once per day is long rest
	abilitySave : 5,
	spellcastingAbility : 5,
	spellcastingBonus : {
		name : "Blessing of the Moonweaver (level 1)",
		spells : ["light"],
		selection : ["light"],
		atwill : true
	},
	features : {
		"sleep" : {
			name : "Sleep",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Blessing of the Moonweaver)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Blessing of the Moonweaver (level 3)",
				spells : ["sleep"],
				selection : ["sleep"],
				oncelr : true
			}
		},
		"invisibility" : {
			name : "Invisibility (self only)",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Blessing of the Moonweaver)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Blessing of the Moonweaver (level 5)",
				spells : ["invisibility"],
				selection : ["invisibility"],
				oncelr : true
			}
		}
	}
};
