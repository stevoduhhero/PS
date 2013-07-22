exports.BattleMovedex = {
        "vinewhip": {
                num: 22,
                accuracy: 100,
                basePower: 35,
                category: "Physical",
                desc: "Deals damage to one adjacent target. Makes contact.",
                shortDesc: "No additional effect.",
                id: "vinewhip",
                name: "Vine Whip",
                pp: 25,
                priority: 0,
                isContact: true,
                secondary: false,
                target: "normal",
                type: "Grass"
        },
      	"lunardance": {
		num: 461,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user faints and the Pokemon brought out to replace it has its HP and PP fully restored along with having any major status condition cured. Fails if the user is the last unfainted Pokemon in its party.",
		shortDesc: "User faints. Replacement is fully healed, with PP.",
		id: "lunardance",
		isViable: true,
		name: "Lunar Dance",
		pp: 20,
		priority: 0,
		isSnatchable: true,
		boosts: {
			spa: 1,
			spe: 1
		},
		target: "self",
		type: "Psychic"
	},         
	"moonblast": {
		num: 1000,
		accuracy: 90,
		basePower: 130,
		category: "Special",
		desc: "Surronds the user with moonlight energy and releases all of that energy in one blast using up all the energy making the attacks Special Attack go down.",
		shortDesc: "Deals damage and lowers the attacker's SpA.",
		id: "moonblast",
		isViable: true,
		name: "Moonblast",
		pp: 5,
		priority: 0,
		self: {
			boosts: {
				spa: -2

			}
		},
		secondary: false,
		target: "normal",
		type: "Fairy"
	},
	"fairywind": {
		num: 1001,
	        accuracy: 100,
		basePower: 85,
		category: "Special",
		desc: "Deals damage to one adjacent target by summoning a mystical wind that has a chance to encloak the user with mystical energy that boosts speed.",
		shortDesc: "Deals damage and has 10% chance to raise speed.",
		id: "fairywind",
		isViable: true,
		name: "Fairy Wind",
		pp: 15,
		priority: 0,
		secondary: {
			chance: 10,
			self: {
				boosts: {
					spd: 1
				}
			}
		},
		target: "normal",
		type: "Fairy"
	},
		"mysticcrash": {
		num: 1002,
	        accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "Deals damage to one adjacent target by crashing into the target with a cloak of mystical energy.",
		shortDesc: "Deals damage and has recoil Basically Double Edge for faries.",
		id: "mysticcrash",
		isViable: true,
		name: "Mystic Crash",
		pp: 15,
		priority: 0,
		isContact: true,
		recoil: [22,100],
		secondary: false,
		target: "normal",
		type: "Fairy"
	},        
        "partingshot": {
                num: 1032,
                accuracy: 100,
                basePower: 75,
                category: "Status",
                desc: "Lowers the opponent's Special Attack and Attack by 1, then switches the user out of battle.",
                shortDesc: "User switches out after lowering the target's SpA and Atk.",
                id: "partingshot",
                name: "Parting Shot",
                pp: 25,
                priority: 0,
                boosts: {
                        atk: -1,
                        spa: -1
                },
                selfSwitch: true,
                secondary: false,
                target: "normal",
                type: "Fighting"
        },
        "paraboliccharge": {
                num: 1033,
                accuracy: 100,
                basePower: 80,
                category: "Special",
                desc: "Deals damage to all targets, including its ally. The user recovers half of the HP lost by the target, rounded up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
                shortDesc: "User recovers 50% of the damage dealt.",
                id: "paraboliccharge",
                name: "Parabolic Charge",
                pp: 16,
                priority: 0,
                drain: [1,2],
                secondary: false,
                target: "normal",
                type: "Electric"
        },
        "boomburst": {
                num: 1034,
                accuracy: 100,
                basePower: 100,
                category: "Special",
                desc: "A sound attack that deals damage to all targets, including its ally.",
                shortDesc: "Deals damage to all targets.",
                id: "boomburst",
                name: "Boomburst",
                pp: 16,
                priority: 0,
                isSoundBased: true,
                secondary: false,
                target: "all",
                type: "Normal"
        },
        "moonblast": {
                num: 1035,
                accuracy: 100,
                basePower: 110,
                category: "Special",
                desc: "Deals damage to one adjacent target with a ???% chance to lower Special Attack",
                shortDesc: "30% chance to lower SpA.",
                id: "moonblast",
                name: "Moonblast",
                pp: 25,
                priority: 0,
                secondary: {
                        chance: 30,
                        boosts: {
                                spa: -1
                        }
                },
                target: "normal",
                type: "Fairy"
        },
        "nobleroar": {
                num: 1036,
                accuracy: 100,
                basePower: 85,
                category: "Status",
                desc: "Lowers the foe's Attack and Special Attack by one stage.",
                shortDesc: "Lowers SpA and Atk by 1.",
                id: "nobleroar",
                name: "Noble Roar",
                pp: 16,
                priority: 0,
                boosts: {
                        atk: -1,
                        spa: -1
                },
                secondary: false,
                target: "normal",
                type: "Fire"
        },
        "fairywind": {
                num: 1037,
                accuracy: 100,
                basePower: 85,
                category: "Special",
                desc: "Deals massive damage to all adjacent foes.",
                shortDesc: "Damages all adjacent foes.",
                id: "fairywind",
                name: "Fairy Wind",
                pp: 25,
                priority: 0,
                secondary: false,
                target: "allAdjacentFoes",
                type: "Fairy"
        },
        "topsyturvy": {
                num: 1038,
                accuracy: 100,
                basePower: 0,
                category: "Status",
                desc: "Reverses all stat modifications that the foe has.",
                shortDesc: "Reverses the foe's stat changes.",
                id: "topsyturvy",
                name: "Topsy-Turvy",
                pp: 16,
                priority: 0,
		onHit: function(target) {
			var boost = {};
			for (var i in target.boosts) {
				boost[i] = -2 * target.boosts[i];
			}
			this.boost(boost);
		},
                secondary: false,
                target: "normal",
                type: "Fairy"
        	},
        "drainingkiss": {
                num: 1039,
                accuracy: 100,
                basePower: 80,
                category: "Special",
                desc: "Deals damage to one adjacent target. The user recovers half of the HP lost by the target, rounded up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
                shortDesc: "User recovers 50% of the damage dealt.",
                id: "drainingkiss",
                name: "Draining Kiss",
                pp: 16,
                priority: 0,
                drain: [1,2],
                secondary: false,
                target: "normal",
                type: "Fairy"
        },
        "geomancy": {
                num: 1040,
                accuracy: 100,
                basePower: 130,
                category: "Special",
                desc: "Deal massive damage to one adjacent target.",
                shortDesc: "No additional effect.",
                id: "geomancy",
                name: "Geomancy",
                pp: 16,
                priority: 0,
		self: {
			boosts: {
				spa: -1,
                                spd: -1
			}
		},
                secondary: false,
                target: "normal",
                type: "Fairy"
        },
        "oblivionwing": {
                num: 1041,
                accuracy: 100,
                basePower: 130,
                category: "Special",
                desc: "Deal massive damage to one adjacent target.",
                shortDesc: "No additional effect.",
                id: "oblivionwing",
                name: "Oblivion Wing",
                pp: 16,
        	priority: 0,
		self: {
			boosts: {
				spa: -1,
                                spd: -1
			}
		},
                secondary: false,
                target: "normal",
                type: "Dark"
	},
	"burningskies": {
		num: 1042,
		accuracy: 100,
		basePower: 95,
		category: "Physical",
		desc: "Deals damage to one adjacent target with a 30% chance to burn it. If the user is frozen, it will defrost before using this move.",
		shortDesc: "30% chance to burn the target. Thaws user.",
		id: "burningskies",
		isViable: true,
		name: "Burning Skies",
		pp: 16,
		priority: 0,
		thawsUser: true,
		secondary: {
			chance: 30,
			status: 'brn'
		},
		target: "normal",
		type: "Fire"
	}	
};
