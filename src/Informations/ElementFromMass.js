const the_elements = require("../elements");

const GetElementFromAtomicMass = function(mass) {
    let element;

    the_elements.forEach(group => {
        group.forEach(el => {
            if (Math.round(el.atomic_mass) === mass){
                element = el;
                return;
            }
        })
    })

    if (element){
        return element;
    } else {
        return null;
    }
}

module.exports = GetElementFromAtomicMass;