var iFileName = "ua_20200326_Spells-and-Magic-Tattoos.js";
RequiredSheetVersion(13);

// Define the source
SourceList["UA:SMT"] = {
	name : "Unearthed Arcana: Spells and Magic Tattoos",
	abbreviation : "UA:SMT",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2020/dnd/downloads/UA2020-SpellsTattoos.pdf",
	date : "2020/03/26"
};


MagicItemsList["absorbing tattoo"] = {
	name : "Absorbing Tattoo",
	source : [["UA:SMT", 8]],
	type : "wonderous item",
	rarity : "very rare",
	attunement : true,
	description : "",
	descriptionFull : "This tattoo incorporates designs that emphasize one color more than others. While the tattoo is on your skin, you have resistance to a type of damage associated with that color, as shown on the table below. The DM chooses the color or determines it randomly.\n" + toUni("d10\t\tDamage Type\tColor") + "\n1 \t\tAcid\tGreen\n2 \tCold\tBlue\n3 \tFire\tRed\n4 \tForce\tWhite\n5 \tLightning\tYellow\n6 \tNecrotic\tBlack\n7 \tPoison\tViolet\n8 \tPsychic\tSilver\n9 \tRadiant\tGold\n10\tThunder\tOrange\n" + toUni("Damage Absorption") + "  When you take damage of the chosen type, you can use your reaction to gain immunity against that instance of the damage, and you regain a number of hit points equal to half the damage you would have taken. Once this reaction is used, it can’t be used again until the next dawn.\n" + toUni("Tattoo Attunement") + "  To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin. If you have multiple magic tattoos, they count as a single magic item with regard to the number of magic items you can attune to.\n If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in the closest unoccupied space to you.",
	choices : ['Acid', 'Cold', 'Fire', 'Force', 'Lightning', 'Necrotic', 'Poison', 'Psychic', 'Radiant', 'Thunder'],
	"acid" : {
		name : "Acid Absorbing Tattoo",
		description: "This tattoo incorporates designs that emphasize the color green. When I take acid damage, I can use my reaction to gain immunity against that instance of the damage, and I regain a number of hit points equal to half the damage I would have taken. I can use this reaction once per dawn.",
		dmgres : ["Acid"],
		limfeaname : "Absorb Acid Damage",
		additional : "Absorbing Tattoo",
		action : ["reaction", ""],
		usages : 1, 
		recovery : "dawn"
	},
	"cold" : {
		name : "Cold Absorbing Tattoo",
		description: "This tattoo incorporates designs that emphasize the color blue. When I take cold damage, I can use my reaction to gain immunity against that instance of the damage, and I regain a number of hit points equal to half the damage I would have taken. I can use this reaction once per dawn.",
		dmgres : ["Cold"],
		limfeaname : "Absorb Cold Damage",
		additional : "Absorbing Tattoo",
		action : ["reaction", ""],
		usages : 1, 
		recovery : "dawn"
	},
	"fire" : {
		name : "Fire Absorbing Tattoo",
		description: "This tattoo incorporates designs that emphasize the color red. When I take fire damage, I can use my reaction to gain immunity against that instance of the damage, and I regain a number of hit points equal to half the damage I would have taken. I can use this reaction once per dawn.",
		dmgres : ["Fire"],
		limfeaname : "Absorb Fire Damage",
		additional : "Absorbing Tattoo",
		action : ["reaction", ""],
		usages : 1, 
		recovery : "dawn"
	},
	"force" : {
		name : "Force Absorbing Tattoo",
		description: "This tattoo incorporates designs that emphasize the color white. When I take force damage, I can use my reaction to gain immunity against that instance of the damage, and I regain a number of hit points equal to half the damage I would have taken. I can use this reaction once per dawn.",
		dmgres : ["Force"],
		limfeaname : "Absorb Force Damage",
		additional : "Absorbing Tattoo",
		action : ["reaction", ""],
		usages : 1, 
		recovery : "dawn"
	},
	"lightning" : {
		name : "Lightning Absorbing Tattoo",
		description: "This tattoo incorporates designs that emphasize the color yellow. When I take lightning damage, I can use my reaction to gain immunity against that instance of the damage, and I regain a number of hit points equal to half the damage I would have taken. I can use this reaction once per dawn.",
		dmgres : ["Lightning"],
		limfeaname : "Absorb Lightning Damage",
		additional : "Absorbing Tattoo",
		action : ["reaction", ""],
		usages : 1, 
		recovery : "dawn"
	},
	"necrotic" : {
		name : "Necrotic Absorbing Tattoo",
		description: "This tattoo incorporates designs that emphasize the color black. When I take necrotic damage, I can use my reaction to gain immunity against that instance of the damage, and I regain a number of hit points equal to half the damage I would have taken. I can use this reaction once per dawn.",
		dmgres : ["Necrotic"],
		limfeaname : "Absorb Necrotic Damage",
		additional : "Absorbing Tattoo",
		action : ["reaction", ""],
		usages : 1, 
		recovery : "dawn"
	},
	"poison" : {
		name : "Poison Absorbing Tattoo",
		description: "This tattoo incorporates designs that emphasize the color violet. When I take poison damage, I can use my reaction to gain immunity against that instance of the damage, and I regain a number of hit points equal to half the damage I would have taken. I can use this reaction once per dawn.",
		dmgres : ["Poison"],
		limfeaname : "Absorb Poison Damage",
		additional : "Absorbing Tattoo",
		action : ["reaction", ""],
		usages : 1, 
		recovery : "dawn"
	},
	"psychic" : {
		name : "Psychic Absorbing Tattoo",
		description: "This tattoo incorporates designs that emphasize the color silver. When I take psychic damage, I can use my reaction to gain immunity against that instance of the damage, and I regain a number of hit points equal to half the damage I would have taken. I can use this reaction once per dawn.",
		dmgres : ["Psychic"],
		limfeaname : "Absorb Psychic Damage",
		additional : "Absorbing Tattoo",
		action : ["reaction", ""],
		usages : 1, 
		recovery : "dawn"
	},
	"radiant" : {
		name : "Radiant Absorbing Tattoo",
		description: "This tattoo incorporates designs that emphasize the color gold. When I take radiant damage, I can use my reaction to gain immunity against that instance of the damage, and I regain a number of hit points equal to half the damage I would have taken. I can use this reaction once per dawn.",
		dmgres : ["Radiant"],
		limfeaname : "Absorb Radiant Damage",
		additional : "Absorbing Tattoo",
		action : ["reaction", ""],
		usages : 1, 
		recovery : "dawn"
	},
	"thunder" : {
		name : "Thunder Absorbing Tattoo",
		description: "This tattoo incorporates designs that emphasize the color orange. When I take thunder damage, I can use my reaction to gain immunity against that instance of the damage, and I regain a number of hit points equal to half the damage I would have taken. I can use this reaction once per dawn.",
		dmgres : ["Thunder"],
		limfeaname : "Absorb Thunder Damage",
		additional : "Absorbing Tattoo",
		action : ["reaction", ""],
		usages : 1, 
		recovery : "dawn"
	},
}
MagicItemsList["barrier tattoo"] = {
	name : "Barrier Tattoo",
	source : [["UA:SMT", 9]],
	type : "wonderous item",
	rarity : "",
	attunement : true,
	description : "",
	descriptionFull : "This tattoo depicts protective imagery and uses ink that resembles liquid metal. While you aren’t wearing armor, the tattoo grants you an Armor Class depending on the tattoo’s rarity, as shown below. You can use a shield and still gain this benefit.\n" + toUni("Rarity\t\tAC") + "\nUncommon \t\t12 + your Dexterity modifier\nRare \t15 + your Dexterity modifier (maximum of +2)\nVery Rare \t18\n" + toUni("Tattoo Attunement") + "  To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin. If you have multiple magic tattoos, they count as a single magic item with regard to the number of magic items you can attune to.\n If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in the closest unoccupied space to you.",
	choices : ["Uncommon", "Rare", "Very Rare"],
	"uncommon" : {
		name : "Barrier Tattoo",
		description : "This tattoo depicts protective imagery and uses ink that resembles liquid metal. While I am not wearing armor, the tattoo grants me an Armor Class of 12 + my Dexterity modifier. I can use a shield and still gain this benefit.",
		addArmor: "Barrier Tattoo",
		armorOptions: {
			regExpSearch: /^(?=.*barrier)(?=.*(tattoo)).*$/i,
			name : "Barrier Tattoo",
			source : [["UA:SMT", 9]],
			type: "",
			ac : 12,
		},
	},
	"rare" : {
		name : "Barrier Tattoo",
		description : "This tattoo depicts protective imagery and uses ink that resembles liquid metal. While I am not wearing armor, the tattoo grants me an Armor Class of 15 + my Dexterity modifier (maximum of +2). I can use a shield and still gain this benefit.",
		addArmor: "Barrier Tattoo",
		armorOptions: {
			regExpSearch: /^(?=.*barrier)(?=.*(tattoo)).*$/i,
			name : "Barrier Tattoo",
			source : [["UA:SMT", 9]],
			type: "",
			ac : 15,
			dex : 2,
		},
	},
	"very rare" : {
		name : "Barrier Tattoo",
		description : "This tattoo depicts protective imagery and uses ink that resembles liquid metal. While I am not wearing armor, the tattoo grants me an Armor Class of 18. I can use a shield and still gain this benefit.",
		addArmor: "Barrier Tattoo",
		armorOptions: {
			regExpSearch: /^(?=.*barrier)(?=.*(tattoo)).*$/i,
			name : "Barrier Tattoo",
			source : [["UA:SMT", 9]],
			type: "",
			ac : 18,
			dex : 0
		},
	}
}
MagicItemsList["coiling grasp tattoo"] = {
	name : "Coiling Grasp Tattoo",
	source : [["UA:SMT", 9]],
	type : "wonderous item",
	rarity : "uncommon",
	attunement : true,
	description : "I can use the tattoo to grapple a creature within 15 feet. It must succeed on a DC 14 Strength saving throw or take 3d6 force dmg and be grappled by me. It can make a DC 14 Athletics or Acrobatics check to escape. If the creature is more than 15 ft away or I use the tattoo on a different creature the grapple ends.",
	descriptionLong: "This tattoo has long intertwining designs. While the tattoo is on my skin, I can, as an action, cause the tattoo to extrude into inky tendrils, which reach for a creature I can see within 15 feet of me. The creature must succeed on a DC 14 Strength saving throw or take 3d6 force damage and be grappled by me. As an action, the creature can escape the grapple by succeeding on a DC 14 Strength (Athletics) or Dexterity (Acrobatics) check. The grapple also ends if I halt it (no action required), if the creature is ever more than 15 feet away from me, or if I use this tattoo on a different creature.",
	descriptionFull : "This tattoo has long intertwining designs. While the tattoo is on your skin, you can, as an action, cause the tattoo to extrude into inky tendrils, which reach for a creature you can see within 15 feet of you. The creature must succeed on a DC 14 Strength saving throw or take 3d6 force damage and be grappled by you. As an action, the creature can escape the grapple by succeeding on a DC 14 Strength (Athletics) or Dexterity (Acrobatics) check. The grapple also ends if you halt it (no action required), if the creature is ever more than 15 feet away from you, or if you use this tattoo on a different creature.\n" + toUni("Tattoo Attunement") + "  To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin. If you have multiple magic tattoos, they count as a single magic item with regard to the number of magic items you can attune to.\n If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in the closest unoccupied space to you.",
	action : ["action", ""],
	fixedDC : 14,
	weaponsAdd : ["Coiling Grasp Tattoo"],
	weaponOptions : {
		regExpSearch : /^(?=.*coiling)(?=.*grasp)(?=.*tattoo).*$/i,
		name : "Coiling Grasp Tattoo",
		source : [["UA:SMT", 9]],
		ability : 1,
		type : "Natural",
		damage : [3, 6, "Force"],
		range : "15 ft",
		description : "Grapples crature; DC 14 Strength check to break out",
		abilitytodamage : false,
		dc : true,
	}
}
MagicItemsList["eldritch claw tattoo"] = {
	name : "Eldritch Claw Tattoo",
	source : [["UA:SMT", 9]],
	type : "wonderous item",
	rarity : "uncommon",
	attunement : true,
	description : "My unarmed strikes are magical and gain a +1 bonus to attack and damage rolls. As a bonus action, I can empower the tattoo for 1 minute. For the duration, each of my melee weapon attacks can reach a target up to 30 feet away from me and deal an extra 1d6 force damage. I can use this bonus action once per dawn",
	descriptionFull : "This tattoo depicts clawlike forms and other jagged shapes. While the tattoo is on your skin, your unarmed strikes are considered magical for the purpose of overcoming immunity and resistance to nonmagical attacks, and you gain a +1 bonus to attack and damage rolls with unarmed strikes.\n" + toUni("Eldritch Maul") + "  As a bonus action, you can empower the tattoo for 1 minute. For the duration, each of your melee weapon attacks can reach a target up to 30 feet away from you, as tendrils of ink launch from your weapon or unarmed strike toward the target. In addition, your melee weapon attacks deal an extra 1d6 force damage on a hit. Once used, this bonus action can’t be used again until the next dawn.\n" + toUni("Tattoo Attunement") + "  To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin. If you have multiple magic tattoos, they count as a single magic item with regard to the number of magic items you can attune to.\n If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in the closest unoccupied space to you.",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == "unarmed strike" && !(/counts as( a)? magical/i).test(fields.Description)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Counts as magical';
				};
			},
			"My unarmed strikes gain a +1 bonus to their attack and damage rolls, and count as magical."
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.baseWeaponName == "unarmed strike") {
					output.magic += 1;
				}
			}, ''
		]
	},
	action : ["bonus action", ""],
	usages : 1,
	recovery : "dawn",
	limfeaname : "Eldritch Maul",
}
MagicItemsList["blood fury tattoo"] = {
	name : "Blood Fury Tattoo",
	source : [["UA:SMT", 10]],
	type : "wonderous item",
	rarity : "legendary",
	attunement : true,
	description : "",
	descriptionFull : "This tattoo evokes fury in its form and colors. While this tattoo is on your skin, you gain the following benefits:\n \u2022Your attack rolls score a critical hit on a d20 roll of 19 or 20.\n \u2022When you score a critical hit against a creature, that target takes an extra 4d6 necrotic damage, and you gain a number of temporary hit points equal to the necrotic damage dealt.\n \u2022When a creature you can see damages you, you can use your reaction to make a melee attack against that creature, with advantage on your attack roll.\n" + toUni("Tattoo Attunement") + "  To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin. If you have multiple magic tattoos, they count as a single magic item with regard to the number of magic items you can attune to.\n If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in the closest unoccupied space to you.",
}
MagicItemsList["Illuminator's Tattoo"] = {
	name : "illuminator's tattoo",
	source : [["UA:SMT", 10]],
	type : "wonderous item",
	rarity : "common",
	attunement : true,
	description : "",
	descriptionFull : "" + toUni("Tattoo Attunement") + "  To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin. If you have multiple magic tattoos, they count as a single magic item with regard to the number of magic items you can attune to.\n If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in the closest unoccupied space to you.",
}
MagicItemsList["lifewell tattoo"] = {
	name : "Lifewell Tattoo",
	source : [["UA:SMT", 10]],
	type : "wonderous item",
	rarity : "rare",
	attunement : true,
	description : "",
	descriptionFull : "" + toUni("Tattoo Attunement") + "  To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin. If you have multiple magic tattoos, they count as a single magic item with regard to the number of magic items you can attune to.\n If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in the closest unoccupied space to you.",
}
MagicItemsList["ghost step tattoo"] = {
	name : "Ghost Step Tattoo",
	source : [["UA:SMT", 11]],
	type : "wonderous item",
	rarity : "rare",
	attunement : true,
	description : "",
	descriptionFull : "" + toUni("Tattoo Attunement") + "  To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin. If you have multiple magic tattoos, they count as a single magic item with regard to the number of magic items you can attune to.\n If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in the closest unoccupied space to you.",
}
MagicItemsList["masquerade tattoo"] = {
	name : "Masquerade Tattoo",
	source : [["UA:SMT", 11]],
	type : "wonderous item",
	rarity : "common",
	attunement : true,
	description : "",
	descriptionFull : "" + toUni("Tattoo Attunement") + "  To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin. If you have multiple magic tattoos, they count as a single magic item with regard to the number of magic items you can attune to.\n If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in the closest unoccupied space to you.",
}
MagicItemsList["spellwrought tattoo"] = {
	name : "Spellwrought Tattoo",
	source : [["UA:SMT", 11]],
	type : "wonderous item",
	rarity : "",
	attunement : true,
	description : "",
	descriptionFull : "" + toUni("Tattoo Attunement") + "  To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin. If you have multiple magic tattoos, they count as a single magic item with regard to the number of magic items you can attune to.\n If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in the closest unoccupied space to you.",
}
MagicItemsList["shadowfell brand tattoo"] = {
	name : "Shadowfell Brand Tattoo",
	source : [["UA:SMT", 12]],
	type : "wonderous item",
	rarity : "very rare",
	attunement : true,
	description : "",
	descriptionFull : "" + toUni("Tattoo Attunement") + "  To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin. If you have multiple magic tattoos, they count as a single magic item with regard to the number of magic items you can attune to.\n If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in the closest unoccupied space to you.",
}
MagicItemsList[""] = {
	name : "",
	source : [["UA:SMT", 1]],
	type : "wonderous item",
	rarity : "",
	attunement : true,
	description : "",
	descriptionFull : "",
}