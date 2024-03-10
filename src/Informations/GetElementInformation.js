const the_elements = require("../elements");

const GetElementInformation = function(symbol) {
    let element;

    the_elements.forEach(group => {
        group.forEach(el => {
            if (el.symbol === symbol){
                element = el;
                return;
            }
        })
    })

    return element;
}

module.exports = GetElementInformation;