exports.BattleMovedex = {
	/******************************************************************
	Two-turn moves:
	- having a charge turn is useless, so lets get rid of the charge turn yet keep the move s balanced

	Justification:
	- These moves fucking suck
	******************************************************************/

        "solarbeam": {
		num: 76,
		accuracy: 100,
		basePower: 110,
		category: "Special",
		desc: "Deals damage to one adjacent target, The move completes in one turn.",
		shortDesc: "Its a good move.",
		id: "solarbeam",
		isViable: true,
		name: "SolarBeam",
		pp: 10,
		priority: 0,
		secondary: false,
		target: "normal",
		type: "Grass"
	},
	"razorwind": {
		num: 13,
		accuracy: 100,
		basePower: 55,
		category: "Special",
		desc: "Deals damage to all adjacent foes with a higher chance for a critical hit. This attack charges on the first turn and strikes on the second. The user cannot make a move between turns. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Charges, then hits foe(s) turn 2. High crit ratio.",
		id: "razorwind",
		name: "Razor Wind",
		pp: 10,
		priority: 0,
		willCrit: true,		
		secondary: false,
		target: "allAdjacentFoes",
		type: "Dark"
	},
	"skyattack": {
		num: 143,
		accuracy: 100,
		basePower: 110,
		category: "Physical",
		desc: "Deals damage to one adjacent or non-adjacent target with a 30% chance to flinch it and a higher chance for a critical hit. This attack charges on the first turn and strikes on the second. The user cannot make a move between turns. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Charges, then hits turn 2. 30% flinch. High crit.",
		id: "skyattack",
		name: "Sky Attack",
		pp: 5,
		priority: 0,
		secondary: false
		target: "any",
		type: "Flying"
	},
	"freezeshock": {
		num: 553,
		accuracy: 90,
		basePower: 130,
		category: "Physical",
		desc: "Deals damage to one adjacent target with a 30% chance to paralyze it. This attack charges on the first turn and strikes on the second. The user cannot make a move between turns. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Charges turn 1. Hits turn 2. 30% paralyze.",
		id: "freezeshock",
		name: "Freeze Shock",
		pp: 5,
		priority: 0,
		secondary: {
			chance: 30,
			status: 'par'
		},
		target: "normal",
		type: "Electric"
	},
	iceburn: {
		inherit: true,
		basePower: 70,
		willCrit: true,
		accuracy: true,
		onTryHitPriority: 10,
		onTryHit: function(target) {
			target.removeVolatile('substitute');
		},
		secondary: {
			chance: 100,
			status: 'brn'
		},
		breaksProtect: true
	},
	bounce: {
		inherit: true,
		basePower: 45,
		willCrit: true,
		accuracy: true,
		onTryHitPriority: 10,
		onTryHit: function(target) {
			target.removeVolatile('substitute');
		},
		secondary: {
			chance: 30,
			status: 'par'
		},
		breaksProtect: true
	},
	fly: {
		inherit: true,
		basePower: 45,
		willCrit: true,
		accuracy: true,
		onTryHitPriority: 10,
		onTryHit: function(target) {
			target.removeVolatile('substitute');
		},
		secondary: {
			chance: 100,
			boosts: {
				def: -1
			}
		},
		breaksProtect: true
	},
	dig: {
		inherit: true,
		basePower: 45,
		willCrit: true,
		accuracy: true,
		onTryHitPriority: 10,
		onTryHit: function(target) {
			target.removeVolatile('substitute');
		},
		secondary: {
			chance: 100,
			boosts: {
				def: -1
			}
		},
		breaksProtect: true
	},
	dive: {
		inherit: true,
		basePower: 45,
		willCrit: true,
		accuracy: true,
		onTryHitPriority: 10,
		onTryHit: function(target) {
			target.removeVolatile('substitute');
		},
		secondary: {
			chance: 100,
			boosts: {
				def: -1
			}
		},
		breaksProtect: true
	},
	shadowforce: {
		inherit: true,
		basePower: 30,
		willCrit: true,
		accuracy: true,
		onTryHitPriority: 10,
		onTryHit: function(target) {
			target.removeVolatile('substitute');
		},
		secondary: {
			chance: 100,
			volatileStatus: 'curse'
		},
		breaksProtect: true
	},
	skydrop: {
		inherit: true,
		basePower: 40,
		willCrit: true,
		accuracy: true,
		secondary: {
			chance: 100,
			boosts: {
				def: -1
			}
		},
		breaksProtect: true
	},
	hyperbeam: {
		inherit: true,
		accuracy: true,
		basePower: 75,
		willCrit: true,
		self: null,
		onHit: function(target, source) {
			if (!target.hp) {
				source.addVolatile('mustrecharge');
			}
		}
	},
	gigaimpact: {
		inherit: true,
		accuracy: true,
		basePower: 75,
		willCrit: true,
		self: null,
		onHit: function(target, source) {
			if (!target.hp) {
				source.addVolatile('mustrecharge');
			}
		}
	},
	blastburn: {
		inherit: true,
		accuracy: true,
		basePower: 75,
		willCrit: true,
		self: null,
		onHit: function(target, source) {
			if (!target.hp) {
				source.addVolatile('mustrecharge');
			}
		}
	},
	frenzyplant: {
		inherit: true,
		accuracy: true,
		basePower: 75,
		willCrit: true,
		self: null,
		onHit: function(target, source) {
			if (!target.hp) {
				source.addVolatile('mustrecharge');
			}
		}
	},
	hydrocannon: {
		inherit: true,
		accuracy: true,
		basePower: 75,
		willCrit: true,
		self: null,
		onHit: function(target, source) {
			if (!target.hp) {
				source.addVolatile('mustrecharge');
			}
		}
	},
	bide: {
		inherit: true,
		effect: {
			duration: 2,
			onLockMove: 'bide',
			onStart: function(pokemon) {
				if (pokemon.hp <= 1 || pokemon.lastMove === 'bide') return false;
				this.effectData.totalDamage = 0;
				this.add('-start', pokemon, 'Bide');
			},
			onDamagePriority: -11,
			onDamage: function(damage, target, source, move) {
				if (effect && effect.effectType === 'Move' && damage >= target.hp) {
					damage = target.hp-1;
				}
				if (!move || move.effectType !== 'Move') return;
				if (!source || source.side === target.side) return;
				this.effectData.totalDamage += damage;
				this.effectData.sourcePosition = source.position;
				this.effectData.sourceSide = source.side;
				return damage;
			},
			onAfterSetStatus: function(status, pokemon) {
				if (status.id === 'slp') {
					pokemon.removeVolatile('bide');
				}
			},
			onBeforeMove: function(pokemon) {
				if (this.effectData.duration === 1) {
					if (!this.effectData.totalDamage) {
						this.add('-end', pokemon, 'Bide');
						this.add('-fail', pokemon);
						return false;
					}
					this.add('-end', pokemon, 'Bide');
					var target = this.effectData.sourceSide.active[this.effectData.sourcePosition];
					this.moveHit(target, pokemon, 'bide', {damage: this.effectData.totalDamage*2});
					return false;
				}
				this.add('-activate', pokemon, 'Bide');
				return false;
			}
		}
	},
	/******************************************************************
	Snore:
	- base power increased to 100
	- deals Special damage off physical Attack (reverse Psyshock)

	Justification:
	- Sleep Talk needs some competition
	******************************************************************/
	snore: {
		inherit: true,
		category: "Physical",
		defensiveCategory: "Special",
		basePower: 100,
		affectedByImmunities: false
	},
	/******************************************************************
	Sound-based Normal-type moves:
	- not affected by immunities

	Justification:
	- they're already affected by Soundproof, also, ghosts can hear
	  sounds
	******************************************************************/
	hypervoice: {
		inherit: true,
		affectedByImmunities: false
	},
	round: {
		inherit: true,
		affectedByImmunities: false
	},
	uproar: {
		inherit: true,
		affectedByImmunities: false
	},
	/******************************************************************
	Bonemerang, Bone Rush moves:
	- not affected by immunities
	- Bone Rush nerfed to 20 base power so it's not viable on Lucario

	Justification:
	- flavor, also Marowak could use a buff
	******************************************************************/
	bonemerang: {
		inherit: true,
		affectedByImmunities: false,
		accuracy: true
	},
	bonerush: {
		inherit: true,
		basePower: 20,
		affectedByImmunities: false,
		accuracy: true
	},
	/******************************************************************
	Relic Song:
	- now 60 bp priority move with no secondary

	Justification:
	- Meloetta-P needs viability
	******************************************************************/
	relicsong: {
		inherit: true,
		basePower: 60,
		affectedByImmunities: false,
		onHit: function(target, pokemon) {
			if (pokemon.baseTemplate.species !== 'Meloetta' || pokemon.transformed) {
				return;
			}
			var natureChange = {
				'Modest': 'Adamant',
				'Adamant': 'Modest',
				'Timid': 'Jolly',
				'Jolly': 'Timid'
			};
			if (pokemon.template.speciesid==='meloettapirouette' && pokemon.formeChange('Meloetta')) {
				this.add('-formechange', pokemon, 'Meloetta');
				var tmpAtkEVs = pokemon.set.evs.atk;
				pokemon.set.evs.atk = pokemon.set.evs.spa;
				pokemon.set.evs.spa = tmpAtkEVs;
				if (natureChange[pokemon.set.nature]) pokemon.set.nature = natureChange[pokemon.set.nature];
				var Atk2SpA = (pokemon.boosts.spa||0) - (pokemon.boosts.atk||0);
				this.boost({
					atk: Atk2SpA,
					spa: -Atk2SpA
				}, pokemon);
			} else if (pokemon.formeChange('Meloetta-Pirouette')) {
				this.add('-formechange', pokemon, 'Meloetta-Pirouette');
				var tmpAtkEVs = pokemon.set.evs.atk;
				pokemon.set.evs.atk = pokemon.set.evs.spa;
				pokemon.set.evs.spa = tmpAtkEVs;
				if (natureChange[pokemon.set.nature]) pokemon.set.nature = natureChange[pokemon.set.nature];
				var Atk2SpA = (pokemon.boosts.spa||0) - (pokemon.boosts.atk||0);
				this.boost({
					atk: Atk2SpA,
					spa: -Atk2SpA
				}, pokemon);
			}
			// renderer takes care of this for us
			pokemon.transformed = false;
		},
		priority: 1,
		secondary: null
	},
	/******************************************************************
	Stealth Rock:
	- 1/4 damage to Flying-types, 1/8 damage to everything else

	Justification:
	- Never has one move affected the viability of types been affected
	  by one move to such an extent. Stealth Rock makes many
	  interesting pokemon NU, changing it gives them a fighting chance.

	Flavor justification:
	- Removes from it the status of only residual damage affected by
	  weaknesses/resistances, which is nice. The double damage to
	  Flying can be explained as counteracting Flying's immunity to
	  Spikes.
	******************************************************************/
	stealthrock: {
		inherit: true,
		effect: {
			// this is a side condition
			onStart: function(side) {
				this.add('-sidestart',side,'move: Stealth Rock');
			},
			onSwitchIn: function(pokemon) {
				var factor = 2;
				if (pokemon.hasType('Flying')) factor = 4;
				var damage = this.damage(pokemon.maxhp*factor/16);
			}
		}
	},
	quiverdance: {
		// Quiver Dance is nerfed because Volc
		inherit: true,
		boosts: {
			spd: 1,
			spe: 1,
			accuracy: 1
		},
		onModifyMove: function(move, user) {
			var GossamerWingUsers = {"Butterfree":1, "Masquerain":1, "Beautifly":1, "Mothim":1, "Lilligant":1};
			if (user.item === 'stick' && GossamerWingUsers[user.template.species]) {
				move.boosts = {
					spa: 1,
					spd: 1,
					spe: 1,
					accuracy: 1
				};
			}
		}
	},
	/******************************************************************
	Silver Wind, Ominous Wind, AncientPower:
	- 100% chance of raising one stat, instead of 10% chance of raising
	  all stats
	- Silver Wind, Ominous Wind: 90 base power in Hail

	Justification:
	- Hail sucks

	Precedent:
	- Many weathers strengthen moves. SolarBeam's base power is
	  modified by weather.

	Flavor justification:
	- Winds are more damaging when it's hailing.
	******************************************************************/
	silverwind: {
		inherit: true,
		basePowerCallback: function() {
			if (this.isWeather('hail')) {
				return 90;
			}
			return 60;
		},
		secondary: {
			chance: 100,
			self: {
				onHit: function(target, source) {
					var stats = [];
					for (var i in target.boosts) {
						if (i!=='accuracy' && i!=='evasion' && i!=='atk' && target.boosts[i] < 6) {
							stats.push(i);
						}
					}
					if (stats.length) {
						var i = stats[this.random(stats.length)];
						var boost = {};
						boost[i] = 1;
						this.boost(boost);
					} else {
						return false;
					}
				}
			}
		}
	},
	ominouswind: {
		inherit: true,
		basePowerCallback: function() {
			if (this.isWeather('hail')) {
				return 90;
			}
			return 60;
		},
		secondary: {
			chance: 100,
			self: {
				onHit: function(target, source) {
					var stats = [];
					for (var i in target.boosts) {
						if (i!=='accuracy' && i!=='evasion' && i!=='atk' && target.boosts[i] < 6) {
							stats.push(i);
						}
					}
					if (stats.length) {
						var i = stats[this.random(stats.length)];
						var boost = {};
						boost[i] = 1;
						this.boost(boost);
					} else {
						return false;
					}
				}
			}
		}
	},
	ancientpower: {
		inherit: true,
		secondary: {
			chance: 100,
			self: {
				onHit: function(target, source) {
					var stats = [];
					for (var i in target.boosts) {
						if (i!=='accuracy' && i!=='evasion' && i!=='atk' && target.boosts[i] < 6) {
							stats.push(i);
						}
					}
					if (stats.length) {
						var i = stats[this.random(stats.length)];
						var boost = {};
						boost[i] = 1;
						this.boost(boost);
					} else {
						return false;
					}
				}
			}
		}
	},
	/******************************************************************
	Moves relating to Hail:
	- boost in some way

	Justification:
	- Hail sucks
	******************************************************************/
	avalanche: {
		inherit: true,
		basePowerCallback: function(pokemon, source) {
			if ((source.lastDamage > 0 && pokemon.lastAttackedBy && pokemon.lastAttackedBy.thisTurn)) {
				this.debug('Boosted for getting hit by '+pokemon.lastAttackedBy.move);
				return this.isWeather('hail')?180:120;
			}
			return this.isWeather('hail')?90:60;
		}
	},
	/******************************************************************
	Direct phazing moves:
	- changed to perfect accuracy

	Justification:
	- NEXT has buffed perfect accuracy to the point where unbanning
	  +evasion could be viable.
	- as the primary counter to set-up, these should be able to counter
	  DT (and subDT) in case they are ever unbanned.

	Precedent:
	- Haze, a move with a similar role, has perfect accuracy

	Flavor justification:
	- Whirlwinds and roaring are wide-area enough that dodging them
	  isn't generally feasible.
	******************************************************************/
	roar: {
		inherit: true,
		accuracy: true
	},
	whirlwind: {
		inherit: true,
		accuracy: true
	},
	/******************************************************************
	Multi-hit moves:
	- changed to perfect accuracy

	Justification:
	- as an Interesting Mechanic in terms of being able to hit past
	  Substitute, it could use a buff

	Flavor justification:
	- You're going to attack that many times and they're all going to
	  miss?
	******************************************************************/
	doublehit: {
		inherit: true,
		accuracy: true
	},
	armthrust: {
		inherit: true,
		accuracy: true
	},
	barrage: {
		inherit: true,
		accuracy: true
	},
	beatup: {
		inherit: true,
		accuracy: true
	},
	bulletseed: {
		inherit: true,
		accuracy: true
	},
	cometpunch: {
		inherit: true,
		accuracy: true
	},
	doublekick: {
		inherit: true,
		accuracy: true
	},
	doubleslap: {
		inherit: true,
		accuracy: true
	},
	dualchop: {
		inherit: true,
		accuracy: true
	},
	furyattack: {
		inherit: true,
		accuracy: true
	},
	furyswipes: {
		inherit: true,
		accuracy: true
	},
	geargrind: {
		inherit: true,
		accuracy: true
	},
	iciclespear: {
		inherit: true,
		accuracy: true
	},
	pinmissile: {
		inherit: true,
		accuracy: true
	},
	rockblast: {
		inherit: true,
		accuracy: true
	},
	spikecannon: {
		inherit: true,
		accuracy: true
	},
	tailslap: {
		inherit: true,
		accuracy: true
	},
	/******************************************************************
	Draining moves:
	- buff Leech Life

	Justification:
	- Poison, Bug, Grass, and Ghost make sense for draining types.
	******************************************************************/
	leechlife: {
		inherit: true,
		basePower: 75
	},
	/******************************************************************
	Flying moves:
	- now a bit better

	Justification:
	- Flying has always been the type that's suffered from limited
	  distribution. Let's see how it does without that disadvantage.
	******************************************************************/
	twister: {
		inherit: true,
		basePower: 80,
		secondary: {
			chance: 30,
			volatileStatus: 'confusion'
		},
		pp: 15,
		type: "Flying"
	},
	wingattack: {
		inherit: true,
		basePower: 40,
		accuracy: true,
		multihit: [2,2]
	},
	/******************************************************************
	Moves with not enough drawbacks:
	- intensify drawbacks

	Justification:
	- Close Combat is way too common.
	******************************************************************/
	closecombat: {
		inherit: true,
		self: {
			boosts: {
				def: -2,
				spd: -2
			}
		}
	},
	/******************************************************************
	Blizzard:
	- 30% freeze chance

	Justification:
	- freeze was nerfed, Blizzard can now have Thunder/Hurricane-like
	  secondary chances.
	******************************************************************/
	blizzard: {
		inherit: true,
		secondary: {
			chance: 30,
			status: 'frz'
		}
	},
	/******************************************************************
	Special Ghost and Fighting:
	- buff Ghost, nerf Fighting

	Justification:
	- Special Fighting shouldn't be so strong.
	- Special Ghost is buffed to compensate for having to use HP
	  Fighting after this
	******************************************************************/
	focusblast: {
		inherit: true,
		accuracy: 50
	},
	shadowball: {
		inherit: true,
		basePower: 90,
		secondary: {
			chance: 30,
			boosts: {
				spd: -1
			}
		}
	},
	/******************************************************************
	Selfdestruct and Explosion:
	- 120 and 180 base power autocrit

	Justification:
	- these were nerfed unreasonably in gen 5, they're now somewhat
	  usable again.
	******************************************************************/
	selfdestruct: {
		inherit: true,
		basePower: 140,
		accuracy: true,
		willCrit: true
	},
	explosion: {
		inherit: true,
		basePower: 180,
		accuracy: true,
		willCrit: true
	},
	/******************************************************************
	Scald:
	- base power not affected by weather
	- 60% burn in sun

	Justification:
	- rain could use a nerf
	******************************************************************/
	scald: {
		inherit: true,
		onModifyMove: function(move) {
			switch (this.effectiveWeather()) {
			case 'sunnyday':
				move.secondary.chance = 60;
				break;
			}
		}
	},
	/******************************************************************
	Hi Jump Kick:
	- 100 bp

	Justification:
	- Blaziken nerf
	******************************************************************/
	hijumpkick: {
		inherit: true,
		basePower: 100
	},
	/******************************************************************
	Echoed Voice:
	- change

	Justification:
	- no one uses Echoed Voice.
	******************************************************************/
	echoedvoice: {
		inherit: true,
		accuracy: 100,
		basePower: 80,
		basePowerCallback: function() {
			return 80;
		},
		category: "Special",
		isViable: true,
		priority: 0,
		isNotProtectable: true,
		affectedByImmunities: false,
		onHit: function(target, source) {
			source.side.addSideCondition('futuremove');
			if (source.side.sideConditions['futuremove'].positions[source.position]) {
				return false;
			}
			source.side.sideConditions['futuremove'].positions[source.position] = {
				duration: 3,
				move: 'echoedvoice',
				targetPosition: target.position,
				source: source,
				moveData: {
					basePower: 80,
					category: "Special",
					type: 'Normal'
				}
			};
			this.add('-start', source, 'Echoed Voice');
		},
		target: "normal",
		type: "Normal"
	},
	/******************************************************************
	Rapid Spin, Rock Throw:
	- remove hazards before dealing damage
	- double damage if hazards are removed
	- Rock Throw removes SR only
	- Rapid Spin now has base power 30
	- Rock Throw now has accuracy 100

	Justification:
	- hazards could use a nerf
	******************************************************************/
	rapidspin: {
		inherit: true,
		basePower: 30,
		onBasePower: function(power, user) {
			var doubled = false;
			if (user.removeVolatile('leechseed')) {
				this.add('-end', user, 'Leech Seed', '[from] move: Rapid Spin', '[of] '+user);
				doubled = true;
			}
			var sideConditions = {spikes:1, toxicspikes:1, stealthrock:1};
			for (var i in sideConditions) {
				if (user.side.removeSideCondition(i)) {
					this.add('-sideend', user.side, this.getEffect(i).name, '[from] move: Rapid Spin', '[of] '+user);
					doubled = true;
				}
			}
			if (user.volatiles['partiallytrapped']) {
				this.add('-remove', user, user.volatiles['partiallytrapped'].sourceEffect.name, '[from] move: Rapid Spin', '[of] '+user, '[partiallytrapped]');
				doubled = true;
				delete user.volatiles['partiallytrapped'];
			}
			if (doubled) return power * 2;
		},
		self: undefined
	},
	rockthrow: {
		inherit: true,
		accuracy: 100,
		onBasePower: function(power, user) {
			if (user.side.removeSideCondition('stealthrock')) {
				this.add('-sideend', user.side, "Stealth Rock", '[from] move: Rapid Spin', '[of] '+user);
				return power * 2;
			}
		}
	},
	/******************************************************************
	New feature: Signature Pokemon
	- Selected weak moves receive a 1.5x damage boost when used by a
	  compatible Pokemon.

	Justification:
	- Gives a use for many otherwise competitively unviable moves
	- This is the sort of change that Game Freak is likely to make
	******************************************************************/
	firefang: {
		inherit: true,
		onBasePower: function(power, user) {
			if (user.template.id === 'flareon') return power * 1.5;
		},
		accuracy: 100,
		secondaries: [
			{chance:20, status:'brn'},
			{chance:30, volatileStatus:'flinch'}
		]
	},
	icefang: {
		inherit: true,
		onBasePower: function(power, user) {
			if (user.template.id === 'walrein') return power * 1.5;
		},
		accuracy: 100,
		secondaries: [
			{chance:20, status:'frz'},
			{chance:30, volatileStatus:'flinch'}
		]
	},
	thunderfang: {
		inherit: true,
		onBasePower: function(power, user) {
			if (user.template.id === 'luxray') return power * 1.5;
		},
		accuracy: 100,
		secondaries: [
			{chance:20, status:'par'},
			{chance:30, volatileStatus:'flinch'}
		]
	},
	poisonfang: {
		inherit: true,
		onBasePower: function(power, user) {
			if (user.template.id === 'drapion') return power * 1.5;
		},
		accuracy: 100,
		secondaries: [
			{chance:100, status:'tox'},
			{chance:30, volatileStatus:'flinch'}
		]
	},
	poisontail: {
		inherit: true,
		basePower: 60,
		onBasePower: function(power, user) {
			if (user.template.id === 'seviper') return power * 1.5;
		},
		accuracy: 100,
		secondary: {
			chance: 60,
			status: 'tox'
		}
	},
	sludge: {
		inherit: true,
		basePower: 60,
		onBasePower: function(power, user) {
			if (user.template.id === 'muk') return power * 1.5;
		},
		secondary: {
			chance: 100,
			status: 'psn'
		}
	},
	smog: {
		inherit: true,
		basePower: 75,
		accuracy: 100,
		onBasePower: function(power, user) {
			if (user.template.id === 'weezing') return power * 1.5;
		},
		secondary: {
			chance: 100,
			status: 'psn'
		}
	},
	flamecharge: {
		inherit: true,
		basePower: 60,
		onBasePower: function(power, user) {
			if (user.template.id === 'rapidash') return power * 1.5;
		}
	},
	flamewheel: {
		inherit: true,
		onBasePower: function(power, user) {
			if (user.template.id === 'darmanitan') return power * 1.5;
		}
	},
	spark: {
		inherit: true,
		onBasePower: function(power, user) {
			if (user.template.id === 'eelektross') return power * 1.5;
		}
	},
	bubblebeam: {
		inherit: true,
		onBasePower: function(power, user) {
			if (user.template.id === 'kingdra') return power * 1.5;
		},
		secondary: {
			chance: 30,
			boosts: {
				spe: -1
			}
		}
	},
	electroweb: {
		inherit: true,
		basePower: 60,
		onBasePower: function(power, user) {
			if (user.template.id === 'galvantula') return power * 1.5;
		},
		accuracy: 100
	},
	gigadrain: {
		inherit: true,
		basePower: 60,
		onBasePower: function(power, user) {
			if (user.template.id === 'beautifly') return power * 1.5;
		},
		accuracy: 100
	},
	icywind: {
		inherit: true,
		basePower: 60,
		onBasePower: function(power, user) {
			if (user.template.id === 'glaceon') return power * 1.5;
		},
		accuracy: 100
	},
	mudshot: {
		inherit: true,
		basePower: 60,
		onBasePower: function(power, user) {
			if (user.template.id === 'swampert') return power * 1.5;
		},
		accuracy: 100
	},
	glaciate: {
		inherit: true,
		basePower: 80,
		onBasePower: function(power, user) {
			if (user.template.id === 'kyurem') return power * 1.5;
		},
		accuracy: 100
	},
	octazooka: {
		inherit: true,
		basePower: 75,
		onBasePower: function(power, user) {
			if (user.template.id === 'octillery') return power * 1.5;
		},
		accuracy: 90,
		secondary: {
			chance: 100,
			boosts: {
				accuracy: -1
			}
		}
	},
	leaftornado: {
		inherit: true,
		basePower: 75,
		onBasePower: function(power, user) {
			if (user.template.id === 'serperior') return power * 1.5;
		},
		accuracy: 90,
		secondary: {
			chance: 100,
			boosts: {
				accuracy: -1
			}
		}
	},
	iceshard: {
		inherit: true,
		onBasePower: function(power, user) {
			if (user.template.id === 'weavile') return power * 1.5;
		}
	},
	aquajet: {
		inherit: true,
		onBasePower: function(power, user) {
			if (user.template.id === 'sharpedo') return power * 1.5;
		}
	},
	machpunch: {
		inherit: true,
		onBasePower: function(power, user) {
			if (user.template.id === 'hitmonchan') return power * 1.5;
		}
	},
	shadowsneak: {
		inherit: true,
		onBasePower: function(power, user) {
			if (user.template.id === 'banette') return power * 1.5;
		}
	},
	steelwing: {
		inherit: true,
		basePower: 60,
		onBasePower: function(power, user) {
			if (user.template.id === 'skarmory') return power * 1.5;
		},
		accuracy: 100,
		secondary: {
			chance: 50,
			self: {
				boosts: {
					def: 1
				}
			}
		}
	},
	surf: {
		inherit: true,
		onBasePower: function(power, user) {
			if (user.template.id === 'masquerain') return power * 1.5;
		},
		secondary: {
			chance: 10,
			boosts: {
				spe: -1
			}
		}
	}
};
