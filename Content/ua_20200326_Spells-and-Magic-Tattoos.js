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
	descriptionFull : "",
	choices : ['Acid', 'Cold', 'Fire', 'Force', 'Lightning', 'Necrotic', 'Poison', 'Psychic', 'Radiant', 'Thunder'],
	"acid" : {
		name : "Acid Absorbing Tattoo",
		dmgres : ["Acid"],
		limfeaname : "Absorb Acid",
		additional : "Absorbing Tattoo",
		usages : 1, 
		recovery : "dawn"
	},
	"cold" : {
		name : "Cold Absorbing Tattoo",
		dmgres : ["Cold"],
		limfeaname : "Absorb Cold",
		additional : "Absorbing Tattoo",
		usages : 1, 
		recovery : "dawn"
	},
	"fire" : {
		name : "Fire Absorbing Tattoo",
		dmgres : ["Fire"],
		limfeaname : "Absorb Fire",
		additional : "Absorbing Tattoo",
		usages : 1, 
		recovery : "dawn"
	},
	"force" : {
		name : "Force Absorbing Tattoo",
		dmgres : ["Force"],
		limfeaname : "Absorb Force",
		additional : "Absorbing Tattoo",
		usages : 1, 
		recovery : "dawn"
	},
	"lightning" : {
		name : "Lightning Absorbing Tattoo",
		dmgres : ["Lightning"],
		limfeaname : "Absorb Lightning",
		additional : "Absorbing Tattoo",
		usages : 1, 
		recovery : "dawn"
	},
	"necrotic" : {
		name : "Necrotic Absorbing Tattoo",
		dmgres : ["Necrotic"],
		limfeaname : "Absorb Necrotic",
		additional : "Absorbing Tattoo",
		usages : 1, 
		recovery : "dawn"
	},
	"poison" : {
		name : "Poison Absorbing Tattoo",
		dmgres : ["Poison"],
		limfeaname : "Absorb Poison",
		additional : "Absorbing Tattoo",
		usages : 1, 
		recovery : "dawn"
	},
	"psychic" : {
		name : "Psychic Absorbing Tattoo",
		dmgres : ["Psychic"],
		limfeaname : "Absorb Psychic",
		additional : "Absorbing Tattoo",
		usages : 1, 
		recovery : "dawn"
	},
	"radiant" : {
		name : "Radiant Absorbing Tattoo",
		dmgres : ["Radiant"],
		limfeaname : "Absorb Radiant",
		additional : "Absorbing Tattoo",
		usages : 1, 
		recovery : "dawn"
	},
	"thunder" : {
		name : "Thunder Absorbing Tattoo",
		dmgres : ["Thunder"],
		limfeaname : "Absorb Thunder",
		additional : "Absorbing Tattoo",
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
	descriptionFull : "",
}
MagicItemsList["coiling grasp tattoo"] = {
	name : "Coiling Grasp Tattoo",
	source : [["UA:SMT", 9]],
	type : "wonderous item",
	rarity : "uncommon",
	attunement : true,
	description : "",
	descriptionFull : "",
}
MagicItemsList["eldritch claw tattoo"] = {
	name : "Eldritch Claw Tattoo",
	source : [["UA:SMT", 9]],
	type : "wonderous item",
	rarity : "uncommon",
	attunement : true,
	description : "",
	descriptionFull : "",
}
MagicItemsList["blood fury tattoo"] = {
	name : "Blood Fury Tattoo",
	source : [["UA:SMT", 10]],
	type : "wonderous item",
	rarity : "legendary",
	attunement : true,
	description : "",
	descriptionFull : "",
}
MagicItemsList["Illuminator's Tattoo"] = {
	name : "illuminator's tattoo",
	source : [["UA:SMT", 10]],
	type : "wonderous item",
	rarity : "common",
	attunement : true,
	description : "",
	descriptionFull : "",
}
MagicItemsList["lifewell tattoo"] = {
	name : "Lifewell Tattoo",
	source : [["UA:SMT", 10]],
	type : "wonderous item",
	rarity : "rare",
	attunement : true,
	description : "",
	descriptionFull : "",
}
MagicItemsList["ghost step tattoo"] = {
	name : "Ghost Step Tattoo",
	source : [["UA:SMT", 11]],
	type : "wonderous item",
	rarity : "rare",
	attunement : true,
	description : "",
	descriptionFull : "",
}
MagicItemsList["masquerade tattoo"] = {
	name : "Masquerade Tattoo",
	source : [["UA:SMT", 11]],
	type : "wonderous item",
	rarity : "common",
	attunement : true,
	description : "",
	descriptionFull : "",
}
MagicItemsList["spellwrought tattoo"] = {
	name : "Spellwrought Tattoo",
	source : [["UA:SMT", 11]],
	type : "wonderous item",
	rarity : "",
	attunement : true,
	description : "",
	descriptionFull : "",
}
MagicItemsList["shadowfell brand tattoo"] = {
	name : "Shadowfell Brand Tattoo",
	source : [["UA:SMT", 12]],
	type : "wonderous item",
	rarity : "very rare",
	attunement : true,
	description : "",
	descriptionFull : "",
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