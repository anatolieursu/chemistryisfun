<p align=center><img src="https://github.com/anatolieursu/chemistryisfun/assets/104382017/1df6e785-be3a-4eab-8fb6-47a943cba31b"></p>

# Calculate the molar mass of a substance
 - Add a variable to define the function <br>
`const CalculateMolarMass = require("./src/Calc/MolarMass")`
 - Use the function with the parameter mandatory for substance - a chemical substance, type string. For example: K2O. Example: <br>
`console.log(CalculateMolarMass("K2O"))`

# Get Element Information
 - Define the function <br>
`const GetElementInformation = require("./src/Informations/GetElementInformation");`
 - Use the function with the parameter - mandatory - for element. Example: 'Ca'
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
