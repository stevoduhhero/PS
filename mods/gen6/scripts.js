exports.BattleScripts = {
        init: function() {
                for (var i in this.data.FormatsData)
                        this.data.FormatsData[i].dreamWorldRelease = true;
        },
        
	this.modData('Pokedex', 'azumarill').types = ["Water","Fairy"];
 	this.modData('Learnsets', 'azumarill').learnset.lunardance = ['5L0'];
 	this.modData('Learnsets', 'azumarill').learnset.mysticcrash = ['5L0'];        
    
	this.modData('Pokedex', 'gardevoir').types = ["Psychic","Fairy"];
	this.modData('Learnsets', 'gardevoir').learnset.fairywind = ['5L0'];
	this.modData('Learnsets', 'gardevoir').learnset.lunardance = ['5L0'];
	this.modData('Learnsets', 'gardevoir').learnset.drainingkiss = ['5L0'];
	this.modData('Learnsets', 'gardevoir').learnset.closecombat = ['5L0'];
	this.modData('Pokedex', 'gardevoir').baseStats = {hp:99,atk:140,def:145,spa:70,spd:140,spe:142};

	this.modData('Pokedex', 'clefable').types = ["Normal","Fairy"];
	this.modData('Learnsets', 'clefable').learnset.fairywind = ['5L0'];
	this.modData('Learnsets', 'clefable').learnset.lunardance = ['5L0'];
	this.modData('Learnsets', 'clefable').learnset.topsyturvy = ['5L0'];     
        
	this.modData('Pokedex', 'gallade').types = ["Fighting","Fairy"];
	this.modData('Learnsets', 'gallade').learnset.fairywind = ['5L0'];
	this.modData('Learnsets', 'gallade').learnset.lunardance = ['5L0'];
	this.modData('Learnsets', 'gallade').learnset.drainingkiss = ['5L0'];              
	this.modData('Learnsets', 'gallade').learnset.lunardance = ['5L0'];
	this.modData('Learnsets', 'gallade').learnset.mysticcrash = ['5L0'];
		//Brave Bird Is now a tutor move
	this.modData('Learnsets', 'charizard').learnset.bravebird = ['5L0'];
	this.modData('Learnsets', 'butterfree').learnset.bravebird = ['5L0'];
	this.modData('Learnsets', 'fearow').learnset.bravebird = ['5L0'];
	this.modData('Learnsets', 'dodrio').learnset.bravebird = ['5L0'];
	this.modData('Learnsets', 'gyarados').learnset.bravebird = ['5L0'];
	this.modData('Learnsets', 'aerodactyl').learnset.bravebird = ['5L0'];
	this.modData('Learnsets', 'articuno').learnset.bravebird = ['5L0'];
	this.modData('Learnsets', 'zapdos').learnset.bravebird = ['5L0'];
	this.modData('Learnsets', 'moltres').learnset.bravebird = ['5L0'];
	this.modData('Learnsets', 'dragonite').learnset.bravebird = ['5L0'];
	this.modData('Learnsets', 'noctowl').learnset.bravebird = ['5L0'];
	this.modData('Learnsets', 'xatu').learnset.bravebird = ['5L0'];
	this.modData('Learnsets', 'gligar').learnset.bravebird = ['5L0'];
	this.modData('Learnsets', 'gliscor').learnset.bravebird = ['5T'];
	this.modData('Learnsets', 'lugia').learnset.bravebird = ['5L0'];
	this.modData('Learnsets', 'peliper').learnset.bravebird = ['5L0'];
	this.modData('Learnsets', 'masquerain').learnset.bravebird = ['5L0'];
	this.modData('Learnsets', 'ninjask').learnset.bravebird = ['5L0'];
	this.modData('Learnsets', 'salamence').learnset.bravebird = ['5L0'];
	this.modData('Learnsets', 'rayquaza').learnset.bravebird = ['5L0'];
	this.modData('Learnsets', 'chatot').learnset.bravebird = ['5L0'];
	this.modData('Learnsets', 'togekiss').learnset.bravebird = ['5L0'];
	this.modData('Learnsets', 'arceus').learnset.bravebird = ['5L0'];
	this.modData('Learnsets', 'mew').learnset.bravebird = ['5L0'];
	this.modData('Learnsets', 'pidove').learnset.bravebird = ['5L0'];
	this.modData('Learnsets', 'tranquill').learnset.bravebird = ['5L0'];
	this.modData('Learnsets', 'unfezant').learnset.bravebird = ['5L0'];
	this.modData('Learnsets', 'archen').learnset.bravebird = ['5L0'];
	this.modData('Learnsets', 'archeops').learnset.bravebird = ['5L0'];
	this.modData('Learnsets', 'swanna').learnset.bravebird = ['5L0'];
	this.modData('Learnsets', 'tornadus').learnset.bravebird = ['5L0'];
	this.modData('Learnsets', 'thundurus').learnset.bravebird = ['5L0'];
	this.modData('Learnsets', 'landorus').learnset.bravebird = ['5L0'];

	//redefine randomTeam to make gen6 pokemon more likely to appear yet prevent them from appearing twice
	randomTeam: function(side) {
		var keys = [];
		var pokemonLeft = 0;
		var pokemon = [];
		var gen6pokemon = ['xerneas','yveltal','azumarill','gardevoir','clefable','gallade','fletchling','talonflame'];
		var chosenspecies = [];
		for (var i in this.data.FormatsData) {
			if (this.data.FormatsData[i].viableMoves) {
				keys.push(i);
				if (gen6pokemon.indexOf(i) != -1) {
					//console.log(i);
					for (var j=0 ; j<6 ; j++) {
						keys.push(i);
						//more likely: 7x chance to get a gen6 pokemon
					}
				}
			}
		}
		keys = keys.randomize();

		// PotD stuff
		var potd = {};
		if ('Rule:potd' in this.getFormat().banlistTable) {
			potd = this.getTemplate(config.potd);
		}

		var typeCount = {};
		var typeComboCount = {};
		var uberCount = 0;
		var nuCount = 0;

		for (var i=0; i<keys.length && pokemonLeft < 6; i++) {
			var template = this.getTemplate(keys[i]);
			if (!template || !template.name || !template.types) continue;
			if (chosenspecies.indexOf(template.name) != -1) continue; //and this is the "prevent twice" part (1)
			var tier = template.tier;
			// This tries to limit the amount of Ubers and NUs on one team to promote "fun":
			// LC Pokemon have a hard limit in place at 2; NFEs/NUs/Ubers are also limited to 2 but have a 20% chance of being added anyway.
			// LC/NFE/NU Pokemon all share a counter (so having one of each would make the counter 3), while Ubers have a counter of their own.
			if (tier === 'LC' && nuCount > 1) continue;
			if ((tier === 'NFE' || tier === 'NU') && nuCount > 1 && Math.random()*5>1) continue;
			if (tier === 'Uber' && uberCount > 1 && Math.random()*5>1) continue;

			// CAPs have 20% the normal rate
			if ((tier === 'G4CAP' || tier === 'G5CAP') && Math.random()*5>1) continue;
			// Arceus formes have 1/17 the normal rate each (so Arceus as a whole has a normal rate)
			if (keys[i].substr(0,6) === 'arceus' && Math.random()*17>1) continue;
			// Basculin formes have 1/2 the normal rate each (so Basculin as a whole has a normal rate)
			if (keys[i].substr(0,8) === 'basculin' && Math.random()*2>1) continue;
			// Not available on BW
			if (template.species === 'Pichu-Spiky-eared') continue;

			// Limit 2 of any type
			var types = template.types;
			var skip = false;
			for (var t=0; t<types.length; t++) {
				if (typeCount[types[t]] > 1 && Math.random()*5>1) {
					skip = true;
					break;
				}
			}
			if (skip) continue;

			if (potd && potd.name && potd.types) {
				// The Pokemon of the Day belongs in slot 2
				if (i===1) {
					template = potd;
					if (template.species === 'Magikarp') {
						template.viableMoves = {magikarpsrevenge:1, splash:1, bounce:1};
					} else if (template.species === 'Delibird') {
						template.viableMoves = {present:1, bestow:1};
					}
				} else if (template.species === potd.species) {
					continue; // No thanks, I've already got one
				}
			}

			var set = this.randomSet(template, i);

			// Limit 1 of any type combination
			var typeCombo = types.join();
			if (set.ability === 'Drought' || set.ability === 'Drizzle') {
				// Drought and Drizzle don't count towards the type combo limit
				typeCombo = set.ability;
			}
			if (typeCombo in typeComboCount) continue;

			// Okay, the set passes, add it to our team
			pokemon.push(set);
			chosenspecies.push(template.name); //and this is the "prevent twice" part (2)
			pokemonLeft++;
			// Now that our Pokemon has passed all checks, we can increment the type counter:
			for (var t=0; t<types.length; t++) {
				if (types[t] in typeCount) {
					typeCount[types[t]]++;
				} else {
					typeCount[types[t]] = 1;
				}
			}
			typeComboCount[typeCombo] = 1;
			// Increment Uber/NU counter:
			if (tier === 'Uber') {
				uberCount++;
			} else if (tier === 'NU' || tier === 'NFE' || tier === 'LC') {
				nuCount++;
			}
		}
		return pokemon;
	}
};
