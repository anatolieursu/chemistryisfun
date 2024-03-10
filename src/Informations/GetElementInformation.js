const the_elements = require("../elements");

const GetElementInformation = function(symbol) {
    let element;

    the_elements.forEach(group => {
        group.forEach(el => {
            if (el.symbol === symbol.replace(/\d+/g, '')){
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

module.exports = GetElementInformation;