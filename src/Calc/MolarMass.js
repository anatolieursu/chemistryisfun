const the_elements = require("../elements");
const GetElementInformation = require("../Informations/GetElementInformation");

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
            // Calc and add the mass moalr for this symbol
            let element_molar_mas = 0;

            // Get element information
            let element = GetElementInformation(symbol);
            element_molar_mas = element.atomic_mass;

            // Check if the next char is a number
            if (symbol[symbol.length-1] >= '0' && symbol[symbol.length-1] <= '9'){
                // Multiply with 'indice'
                element_molar_mas = element_molar_mas * parseInt(symbol[symbol.length-1]);
            }

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