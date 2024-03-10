// Elementele sunt impartite in randuri si grupe, in coordonate, incepand cu (1, 1)

const the_elements = [
    //     Grupa 1
    [
        {
            "name": "Hydrogen",
            "symbol": "H",
            "nr": 1,
            "atomic_mass": 1.008,
            "type": "Nonmetal"
        },
        {
            "name": "Lithium",
            "symbol": "Li",
            "nr": 3,
            "atomic_mass": 6.939,
            "type": "Metal"
        },
        {
            "name": "Sodium",
            "symbol": "Na",
            "nr": 11,
            "atomic_mass": 22.99,
            "type": "Metal"
        },
        {
            "name": "Potassium",
            "symbol": "K",
            "nr": 19,
            "atomic_mass": 39.1,
            "type": "Metal"
        },
        {
            "name": "Copper",
            "symbol": "Cu",
            "nr": 29,
            "atomic_mass": 63.55,
            "type": "Metal"
        },
        {
            "name": "Rubidium",
            "symbol": "Rb",
            "nr": 37,
            "atomic_mass": 85.4678,
            "type": "Metal"
        },
        {
            "name": "Silver",
            "symbol": "Ag",
            "nr": 47,
            "atomic_mass": 107.8682,
            "type": "Metal"
        },
        {
            "name": "Cesium",
            "symbol": "Cs",
            "nr": 55,
            "atomic_mass": 132.90545196,
            "type": "Metal"
        },
        {
            "name": "Gold",
            "symbol": "Au",
            "nr": 79,
            "atomic_mass": 196.9665695,
            "type": "Metal"
        },
        {
            "name": "Francium",
            "symbol": "Fr",
            "nr": 87,
            "atomic_mass": 223,
            "type": "Metal"
        },
        {
            "name": "Roentgenium",
            "symbol": "Rg",
            "nr": 111,
            "atomic_mass": 282,
            "type": "Metal"
        }
    ],
    [
        {

        },
        {
            "name": "Beriliu",
            "symbol": "Be",
            "nr": 4,
            "atomic_mass": 9.0121831,
            "type": "Metal"
        },
        {
            "name": "Magneziu",
            "symbol": "Mg",
            "nr": 12,
            "atomic_mass": 24.305,
            "type": "Metal"
        },
        {
            "name": "Calciu",
            "symbol": "Ca",
            "nr": 20,
            "atomic_mass": 40.078,
            "type": "Metal"
        },
        {
            "name": "Zinc",
            "symbol": "Zn",
            "nr": 30,
            "atomic_mass": 65.38,
            "type": "Metal"
        },
        {
            "name": "Strontiu",
            "symbol": "Sr",
            "nr": 38,
            "atomic_mass": 87.62,
            "type": "Metal"
        },
        {
            "name": "Cadmiu",
            "symbol": "Cd",
            "nr": 48,
            "atomic_mass": 112.414,
            "type": "Metal"
        },
        {
            "name": "Bariu",
            "symbol": "Ba",
            "nr": 56,
            "atomic_mass": 137.327,
            "type": "Metal"
        },
        {
            "name": "Mercur",
            "symbol": "Hg",
            "nr": 80,
            "atomic_mass": 200.592,
            "type": "Metal"
        },
        {
            "name": "Radiu",
            "symbol": "Ra",
            "nr": 88,
            "atomic_mass": 226,
            "type": "Metal"
        },
        {
            "name": "Copernicum",
            "symbol": "Cn",
            "nr": 112,
            "atomic_mass": 285,
            "type": "Metal"
        }
    ],
    [
        {

        },
        {
            "name": "Bor",
            "symbol": "B",
            "nr": 5,
            "atomic_mass": 10.81,
            "type": "Metaloid"
        },
        {
            "name": "Aluminiu",
            "symbol": "Al",
            "nr": 13,
            "atomic_mass": 26.982,
            "type": "Metal"
        },
        {
            "name": "Scandiu",
            "symbol": "Sc",
            "nr": 21,
            "atomic_mass": 44.956,
            "type": "Metal"
        },
        {
            "name": "Galiu",
            "symbol": "Ga",
            "nr": 31,
            "atomic_mass": 69.723,
            "type": "Metal"
        },
        {
            "name": "Ytriu",
            "symbol": "Y",
            "nr": 39,
            "atomic_mass": 88.906,
            "type": "Metal"
        },
        {
            "name": "Indiu",
            "symbol": "In",
            "nr": 49,
            "atomic_mass": 114.818,
            "type": "Metal"
        },
        {
            "name": "Lantan",
            "symbol": "La",
            "nr": 57,
            "atomic_mass": 138.905,
            "type": "Metal"
        },
        {
            "name": "Taliu",
            "symbol": "Tl",
            "nr": 81,
            "atomic_mass": 204.38,
            "type": "Metal"
        },
        {
            "name": "Actiniu",
            "symbol": "Ac",
            "nr": 89,
            "atomic_mass": 227,
            "type": "Metal"
        },
        {
            "name": "Nihonium",
            "symbol": "Nh",
            "nr": 113,
            "atomic_mass": 286,
            "type": "Metal"
        }
    ],
    [
        {

        },
        {
            "name": "Carbon",
            "symbol": "C",
            "nr": 6,
            "atomic_mass": 12.011,
            "type": "Nonmetal"
        },
        {
            "name": "Siliciu",
            "symbol": "Si",
            "nr": 14,
            "atomic_mass": 28.085,
            "type": "Metaloid"
        },
        {
            "name": "Titan",
            "symbol": "Ti",
            "nr": 22,
            "atomic_mass": 47.867,
            "type": "Metal de tranziție"
        },
        {
            "name": "Germaniu",
            "symbol": "Ge",
            "nr": 32,
            "atomic_mass": 72.63,
            "type": "Metaloid"
        },
        {
            "name": "Zirconiu",
            "symbol": "Zr",
            "nr": 40,
            "atomic_mass": 91.224,
            "type": "Metal de tranziție"
        },
        {
            "name": "Staniu",
            "symbol": "Sn",
            "nr": 50,
            "atomic_mass": 118.71,
            "type": "Metal"
        },
        {
            "name": "Hafniu",
            "symbol": "Hf",
            "nr": 72,
            "atomic_mass": 178.49,
            "type": "Metal de tranziție"
        },
        {
            "name": "Plumb",
            "symbol": "Pb",
            "nr": 82,
            "atomic_mass": 207.2,
            "type": "Metal"
        },
        {
            "name": "Rutherfordium",
            "symbol": "Rf",
            "nr": 104,
            "atomic_mass": 267,
            "type": "Metal de tranziție"
        },
        {
            "name": "Flerovium",
            "symbol": "Fl",
            "nr": 114,
            "atomic_mass": 289,
            "type": "Metal"
        }
    ],
    [
        {

        },
        {
            "name": "Azot",
            "symbol": "N",
            "nr": 7,
            "atomic_mass": 14.007,
            "type": "Nonmetal"
        },
        {
            "name": "Fosfor",
            "symbol": "P",
            "nr": 15,
            "atomic_mass": 30.974,
            "type": "Nonmetal"
        },
        {
            "name": "Vanadiu",
            "symbol": "V",
            "nr": 23,
            "atomic_mass": 50.942,
            "type": "Metal de tranziție"
        },
        {
            "name": "Arsen",
            "symbol": "As",
            "nr": 33,
            "atomic_mass": 74.922,
            "type": "Metaloid"
        },
        {
            "name": "Niobiu",
            "symbol": "Nb",
            "nr": 41,
            "atomic_mass": 92.906,
            "type": "Metal de tranziție"
        },
        {
            "name": "Stibiu",
            "symbol": "Sb",
            "nr": 51,
            "atomic_mass": 121.76,
            "type": "Metaloid"
        },
        {
            "name": "Tantal",
            "symbol": "Ta",
            "nr": 73,
            "atomic_mass": 180.948,
            "type": "Metal de tranziție"
        },
        {
            "name": "Bismut",
            "symbol": "Bi",
            "nr": 83,
            "atomic_mass": 208.98,
            "type": "Metal"
        },
        {
            "name": "Dubnium",
            "symbol": "Db",
            "nr": 105,
            "atomic_mass": 268,
            "type": "Metal de tranziție"
        },
        {
            "name": "Moscovium",
            "symbol": "Mc",
            "nr": 115,
            "atomic_mass": 290,
            "type": "Metal"
        }
    ],
    [
        {

        },
        {
            "name": "Oxigen",
            "symbol": "O",
            "nr": 8,
            "atomic_mass": 15.999,
            "type": "Nonmetal"
        },
        {
            "name": "Sulf",
            "symbol": "S",
            "nr": 16,
            "atomic_mass": 32.06,
            "type": "Nonmetal"
        },
        {
            "name": "Crom",
            "symbol": "Cr",
            "nr": 24,
            "atomic_mass": 51.996,
            "type": "Metal de tranziție"
        },
        {
            "name": "Seleniu",
            "symbol": "Se",
            "nr": 34,
            "atomic_mass": 78.971,
            "type": "Nonmetal"
        },
        {
            "name": "Molibden",
            "symbol": "Mo",
            "nr": 42,
            "atomic_mass": 95.95,
            "type": "Metal de tranziție"
        },
        {
            "name": "Telur",
            "symbol": "Te",
            "nr": 52,
            "atomic_mass": 127.6,
            "type": "Metaloid"
        },
        {
            "name": "Wolfram",
            "symbol": "W",
            "nr": 74,
            "atomic_mass": 183.84,
            "type": "Metal de tranziție"
        },
        {
            "name": "Poloniu",
            "symbol": "Po",
            "nr": 84,
            "atomic_mass": 209,
            "type": "Metaloid"
        },
        {
            "name": "Seaborgium",
            "symbol": "Sg",
            "nr": 106,
            "atomic_mass": 269,
            "type": "Metal de tranziție"
        },
        {
            "name": "Livermorium",
            "symbol": "Lv",
            "nr": 116,
            "atomic_mass": 293,
            "type": "Metal"
        }
    ],
    [
        {

        },
        {
            "name": "Fluor",
            "symbol": "F",
            "nr": 9,
            "atomic_mass": 18.998,
            "type": "Nonmetal"
        },
        {
            "name": "Clor",
            "symbol": "Cl",
            "nr": 17,
            "atomic_mass": 35.45,
            "type": "Nonmetal"
        },
        {
            "name": "Mangan",
            "symbol": "Mn",
            "nr": 25,
            "atomic_mass": 54.938,
            "type": "Metal de tranziție"
        },
        {
            "name": "Brom",
            "symbol": "Br",
            "nr": 35,
            "atomic_mass": 79.904,
            "type": "Nonmetal"
        },
        {
            "name": "Tecnetiu",
            "symbol": "Tc",
            "nr": 43,
            "atomic_mass": 98,
            "type": "Metal de tranziție"
        },
        {
            "name": "Iod",
            "symbol": "I",
            "nr": 53,
            "atomic_mass": 126.904,
            "type": "Nonmetal"
        },
        {
            "name": "Reniu",
            "symbol": "Re",
            "nr": 75,
            "atomic_mass": 186.207,
            "type": "Metal de tranziție"
        },
        {
            "name": "Astatiniu",
            "symbol": "At",
            "nr": 85,
            "atomic_mass": 210,
            "type": "Metaloid"
        },
        {
            "name": "Bogrium",
            "symbol": "Bh",
            "nr": 107,
            "atomic_mass": 270,
            "type": "Metal"
        },
        {
            "name": "Tennessine",
            "symbol": "Ts",
            "nr": 117,
            "atomic_mass": 294,
            "type": "Nonmetal"
        }
    ],
    [
        {

        },
        {

        },
        {

        },
        {
            "name": "Fier",
            "symbol": "Fe",
            "nr": 26,
            "atomic_mass": 55.845,
            "type": "Metal de tranziție"
        },
        {

        },
        {
            "name": "Ruteniu",
            "symbol": "Ru",
            "nr": 44,
            "atomic_mass": 101.07,
            "type": "Metal de tranziție"
        },
        {

        },
        {
            "name": "Osmiu",
            "symbol": "Os",
            "nr": 76,
            "atomic_mass": 190.23,
            "type": "Metal de tranziție"
        },
        {

        },
        {
            "name": "Hassium",
            "symbol": "Hs",
            "nr": 108,
            "atomic_mass": 277,
            "type": "Metal de tranziție"
        },
        {

        }
    ],
    [
        {

        },
        {

        },
        {

        },
        {
            "name": "Cobalt",
            "symbol": "Co",
            "nr": 27,
            "atomic_mass": 58.933,
            "type": "Metal de tranziție"
        },
        {

        },
        {
            "name": "Rodiu",
            "symbol": "Rh",
            "nr": 45,
            "atomic_mass": 102.91,
            "type": "Metal de tranziție"
        },
        {

        },
        {
            "name": "Iridiu",
            "symbol": "Ir",
            "nr": 77,
            "atomic_mass": 192.22,
            "type": "Metal de tranziție"
        },
        {

        },
        {
            "name": "Meitneriu",
            "symbol": "Mt",
            "nr": 109,
            "atomic_mass": 278,
            "type": "Metal de tranziție"
        },
        {

        }
    ],
    [
        {

        },
        {

        },
        {

        },
        {
            "name": "Nichel",
            "symbol": "Ni",
            "nr": 28,
            "atomic_mass": 58.693,
            "type": "Metal de tranziție"
        },
        {

        },
        {
            "name": "Paladiu",
            "symbol": "Pd",
            "nr": 46,
            "atomic_mass": 106.42,
            "type": "Metal de tranziție"
        },
        {

        },
        {
            "name": "Platină",
            "symbol": "Pt",
            "nr": 78,
            "atomic_mass": 195.08,
            "type": "Metal de tranziție"
        },
        {

        },
        {
            "name": "Darmstadtium",
            "symbol": "Ds",
            "nr": 110,
            "atomic_mass": 281,
            "type": "Metal de tranziție"
        },
        {

        },
    ],
    [
        {
            "name": "Heliu",
            "symbol": "He",
            "nr": 2,
            "atomic_mass": 4.0026,
            "type": "Nonmetal"
        },
        {
            "name": "Neon",
            "symbol": "Ne",
            "nr": 10,
            "atomic_mass": 20.1797,
            "type": "Nonmetal"
        },
        {
            "name": "Argon",
            "symbol": "Ar",
            "nr": 18,
            "atomic_mass": 39.948,
            "type": "Nonmetal"
        },
        {
            "name": "Kripton",
            "symbol": "Kr",
            "nr": 36,
            "atomic_mass": 83.798,
            "type": "Nonmetal"
        },
        {
            "name": "Xenon",
            "symbol": "Xe",
            "nr": 54,
            "atomic_mass": 131.293,
            "type": "Nonmetal"
        },
        {
            "name": "Radon",
            "symbol": "Rn",
            "nr": 86,
            "atomic_mass": 222,
            "type": "Nonmetal"
        },
        {
            "name": "Oganesson",
            "symbol": "Og",
            "nr": 118,
            "atomic_mass": 294,
            "type": "Nonmetal"
        }
    ]
]

// module.exports = the_elements;

module.exports = the_elements;