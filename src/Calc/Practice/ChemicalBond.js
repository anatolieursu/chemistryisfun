const IsMetal = require("../../Informations/IsMetal")

const GetChemicalBond = function (substance){
    // Ionic / Covalent Polar & Nepolar / Metalic
    let substances_count = 0;
    let symbol = '';
    let foundSymbol = false;
    let types = [];

    for (let i = 0; i<substance.length; i++) {
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
            substances_count += 1;
            types.push(IsMetal(symbol.replace(/\d+/g, '')));
        }
    }

    // Covalent Polar
    let isCovalentPolar = true;
    types.forEach(e => {
        if (e === true){
            isCovalentPolar = false;
        }
    })

    if (isCovalentPolar && substances_count >= 2) {
        return "Polar Covalence";
    }

    // Nonpolar Covalence
    if (substances_count === 1 && (substance[substance.length-1] >= '0' && substance[substance.length-1] <= '9')){
        return "Nonpolar Covalence"
    }

    // Metal
    if (substances_count === 1 && types[0]===true){
        return "Metal";
    }

    // Ionic
    if (substances_count >= 2){
        let metale = 0;
        let nemetale = 0;
        types.forEach(e => {
            if (e){
                metale += 1;
            } else {
                nemetale += 1;
            }
        })

        if (metale === nemetale && metale === 1) {
            return "Ionic"
        }
    }
    return "NOT FOUND";

}
function isUpperCase(char) {
    return char === char.toUpperCase() && char !== char.toLowerCase();
}

module.exports = GetChemicalBond;