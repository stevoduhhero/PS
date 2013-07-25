exports.BattleScripts = {
        init: function() {  
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

		// Every DW ability that isn't Shadow Tag becomes released
		for (var i in this.data.FormatsData) {
			if (i !== 'chandelure' && i !== 'gothitelle') {
				this.modData('FormatsData', i).dreamWorldRelease = true;
			}
		}
	}
};	
