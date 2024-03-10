const the_elements = require("../elements");
const GetElementInformation = require("./GetElementInformation");

const IsMetal = function(symbol) {
    element = GetElementInformation(symbol)

    if (element){
        return element.type === "Metal";
    } else {
        return null;
    }
}

module.exports = IsMetal;