const MolarMass = require("../MolarMass");

class MattersSubstances {
    constructor(substance){
        this.substance = substance;
        this.molar_mass = MolarMass(substance);
    }

    // Amount of substances
    get_amount_from_mass(mass){
        if (mass){
            return mass/this.molar_mass
        }

        return null;
    }
    get_amount_from_volume_stp(volume){
        const volum_molar = 22.4;
        if (volume){
            return volume/volum_molar;
        }
        return null;
    }

    // Get Mass
    get_mass_from_amount_of_substance(amount){
        if (amount){
            return amount * this.molar_mass;
        }
        return null;
    }
    get_mass_from_volume_stp(volume){
        if (volume){
            return (volume * this.molar_mass)/22.4;
        }
        return null;
    }

//     Get volume
    get_volume_from_amount_of_substance_stp(amount){
        if (amount){
            return amount * 22.4;
        }
        return null;
    }
    get_volume_from_mass_stp(mass){
        if (mass){
            return 22.4 * (mass/this.molar_mass);
        }
        return null;
    }

}
module.exports = MattersSubstances;