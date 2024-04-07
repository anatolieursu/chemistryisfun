const CalculateMolarMass = require("./src/Calc/MolarMass")
const GetElementInformation = require("./src/Informations/GetElementInformation");
const IsMetal = require("./src/Informations/IsMetal");
const MatterSubstances = require("./src/Calc/Practice/MattersSubstances");
const ChemicalBond = require("./src/Calc/Practice/ChemicalBond")
const isEndothermic = require("./src/Calc/Equations/isEndothermic")

const GetElementFromMass = require("./src/Informations/ElementFromMass")

console.log("Chemistry is fun")

// Calculate molar mass
// console.log(CalculateMolarMass("K2O2"))


// Get element information
// console.log(GetElementInformation("Ca"))


// Is Metal ?
// console.log(IsMetal("O"))


// const ms = new MatterSubstances("K2O");
// console.log(ms.get_amount_from_mass(94))

// console.log(ChemicalBond('HCl'));

// console.log(isEndothermic("Ca + Cl2 -> CaCl2 -Q"))

console.log(GetElementFromMass(11))