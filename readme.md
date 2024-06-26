<p align=center><img src="https://github.com/anatolieursu/chemistryisfun/assets/104382017/1df6e785-be3a-4eab-8fb6-47a943cba31b"></p>

# Calculate the Molar Mass of a Substance
- Add a variable to define the function <br>
  ```js
    const CalculateMolarMass = require("./src/Calc/MolarMass")
    ```
- Use the function with the mandatory parameter for the substance - a chemical substance, as a string. For example: K2O. Example: <br>
  ```js
    console.log(CalculateMolarMass("K2O"))
    ```

# Get Element Information
- Define the function <br>
  ```js
    const GetElementInformation = require("./src/Informations/GetElementInformation");
    ```
- Use the function with the mandatory parameter - the symbol of the element. Example: 'Ca'
  - In the result, you will receive the stored information about the element
    ```js
    {
        name: "Calcium",
        symbol: "Ca",
        nr: 20,
        atomic_mass: 40.078,
        type: "Metal"
    }
    ```
# Get The Element from atomic mass
- Define the function <br>
```js
const GetElementFromMass = require("./src/Informations/ElementFromMass")
```
- Use the function with int parameter
```js
console.log(GetElementFromMass(11))
```

## Is it a Metal?
- Define the function <br>
  ```js
    const IsMetal = require("./src/Informations/IsMetal");
  ```
- Use the function with the mandatory parameter - symbol
  - Example: 
  ```js
    console.log(IsMetal("O"))
  ```

# Practice
**MATTER SUBSTANCES** <br>
- Define the class <br>
  ```js 
    MatterSubstances = require("./src/Calc/Practice/MattersSubstances");
  ```
- Initialize with the parameter - 'substance'
  ```js
    const ms = new MatterSubstances("K2O");
    ```
- Use a desired function
  ```js
      ms.get_amount_from_mass(94)
  ``` 
  **FUNCTIONS:**
- ```js
    get_amount_from_mass(MASSg)
  ```
- ```js
    get_amount_from_volume_stp(VOLUME_l)
    ``` 
- ```js
    get_mass_from_amount_of_substance(AMOUNT_MOL)
    ```
- ```js
    get_mass_from_volume_stp(VOLUME)
    ```
- ```js
    get_volume_from_amount_of_substance_stp(AMOUNT_MOL)
  ``` 
- ```js
    get_volume_from_mass_stp()
    ```
>As for the volume, it evolves only under normal conditions ( stp ). to define STP as 0 ᵒC (273.15 K, or 32 ᵒF) and 1 atm (101.325 kPa = 760 Torr)

**Is Endothermic ?**
- Define the function: 
```js
const isEndothermic = require("./src/Calc/Equations/isEndothermic")
```
- Use the function with equation as parameter
```js
console.log(isEndothermic("Ca + Cl2 -> CaCl2 -Q"))
```


**CHEMICAL BONDING**
- Define the function:
  ```js
    const ChemicalBond = require("./src/Calc/Practice/ChemicalBond")
    ```
- Use the function with substance as parameter. e.g.,
  ```js
    console.log(ChemicalBond('HCl'));
    ```

<br><br>
> [!NOTE]
> This project is still under development by Ursu Anatolie. For proposals, do not hesitate to contact me.
