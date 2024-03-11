<p align=center><img src="https://github.com/anatolieursu/chemistryisfun/assets/104382017/1df6e785-be3a-4eab-8fb6-47a943cba31b"></p>

# Calculate the molar mass of a substance
 - Add a variable to define the function <br>
`const CalculateMolarMass = require("./src/Calc/MolarMass")`
 - Use the function with the parameter mandatory for substance - a chemical substance, type string. For example: K2O. Example: <br>
`console.log(CalculateMolarMass("K2O"))`

# Get Element Information
 - Define the function <br>
`const GetElementInformation = require("./src/Informations/GetElementInformation");`
 - Use the function with the parameter - mandatory - the symbol of element. Example: 'Ca'
 - In the result you will receive the stored information about the element
 <br>
 ```
{ 
     name: "Calciu", 
     symbol: "Ca", 
     nr: 20,
     atomic_mass: 40.078, 
     type: "Metal" 
 }
 ```

## Is Metal ?
 - Define the function <br>
`const IsMetal = require("./src/Informations/IsMetal");`
 - Use then function with the parameter - mandatory - symbol
 - Example : `console.log(IsMetal("O"))`


## Practice
 **MATTER SUBSTANCES** <br>
 - Define the class <br>
   `const MatterSubstances = require("./src/Calc/Practice/MattersSubstances");`
 - Initialize with the parameter - 'substance'
`const ms = new MatterSubstances("K2O");`
 - Use a desired function
`ex: ms.get_amount_from_mass(94)` <br>
**FUNCTIONS:**
 - `get_amount_from_mass()` parameter: mass ( in g )
 - `get_amount_from_volume_stp()` parameter: volume ( in l & stp)
 - `get_mass_from_amount_of_substance()` parameter: amount of substnace (in mol )
 - `get_mass_from_volume_stp()` parameter: volume ( in l & stp)
 - `get_volume_from_amount_of_substance_stp()` parameter: amount of substances ( in mol & stp )
 - `get_volume_from_mass_stp()` parameter: mass ( in g & stp )

**CHEMICAL BONDING**
- Define the function: 
`const ChemicalBond = require("./src/Calc/Practice/ChemicalBond")`
- Use the function with substance as parameter. eg: 
`console.log(ChemicalBond('HCl'));`