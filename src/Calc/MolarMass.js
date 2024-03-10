const the_elements = require("../elements");
const elements = require("../elements");
const CalculateMolarMass = function(substance) {
//     var substance is string
    if (typeof substance !== 'string'){
        return;
    }

    let symbol = "";
    let i = 0;

    let foundSymbol = false;
    let molar_mass = 0;

    while (i<substance.length) {
        // Daca urmatorul caracter e litera mare, atunci simbolul e doar caracterul acesta
        if (substance[i+1]){
            if (isUpperCase(substance[i+1])){
                foundSymbol = true;
            }
        }
        if ((i+1) === substance.length){
            foundSymbol = true;
        }

        symbol += substance[i];

        if (foundSymbol){
            console.log("FOUND SYMBOL: " + symbol);
            // Calc and add the mass moalr for this symbol
            let element_molar_mas = 0;

            the_elements.forEach(group => {
                group.forEach(el => {
                    if (el.symbol === symbol){
                        element_molar_mas = el.atomic_mass;
                        return;
                    }
                })
            })

            molar_mass += element_molar_mas;

            foundSymbol = false;
            symbol = '';
        }
        i++;
    }

    return molar_mass;
}

function isUpperCase(char) {
    return char === char.toUpperCase() && char !== char.toLowerCase();
}

module.exports = CalculateMolarMass;