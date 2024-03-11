const CalculateMolarMass = require("./src/Calc/MolarMass")
const GetElementInformation = require("./src/Informations/GetElementInformation");
const IsMetal = require("./src/Informations/IsMetal");
const MatterSubstances = require("./src/Calc/Practice/MattersSubstances");

console.log("Chemistry is fun")

// Calculate molar mass
// console.log(CalculateMolarMass("K2O2"))


// Get element information
// console.log(GetElementInformation("Ca"))


// Is Metal ?
// console.log(IsMetal("O"))

// Calc the Amount of Substance having substance and (mass or volume)
// console.log(AmountOfSubstance(5, 'K2O'))
const ms = new MatterSubstances("K2O");
console.log(ms.get_amount_from_mass(94))