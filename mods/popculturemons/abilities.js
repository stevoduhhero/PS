exports.BattleAbilities = {  
 "robotic": {
		desc: "If this Pokemon switches into an opponent with equal offenses or higher Attack than Special Attack, this Pokemon's Defense receives a 50% boost. If this Pokemon switches into an opponent with higher Special Attack than Attack, this Pokemon's Special Defense receive a 50% boost.",
		shortDesc: "On switch-in, Defense or Sp. Def is boosted by 1 based on the foes' stronger offense.",
		onStart: function (pokemon) {
			var foeactive = pokemon.side.foe.active;
			var totalatk = 0;
			var totalspa = 0;
				for (var i=0; i<foeactive.length; i++) {
					if (!foeactive[i] || foeactive[i].fainted) continue;
					totalatk+= foeactive[i].getStat('atk');
					totalspa += foeactive[i].getStat('spa');
				}
				if (totalatk && totalatk >= totalspa) {
					this.boost({def:1});
				} else if (totalspa) {
					this.boost({spd:1});
				}
		},
		id: "robotic",
		name: "Robotic",
		rating: 4,
		num: 1005 
	},
};  
