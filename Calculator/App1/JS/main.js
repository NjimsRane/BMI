// class section

// class Calculator{
//     constructor(operationOutput,resultOutput){
//       this.operationOutput = operationOutput;
//       this.resultOutput = resultOutput;
//     }

//     appendNumber(number){
//       this.result.innerText = number;
//     }

//     updateDisplay(){
//       this.resultOutput.innerText = this.result;
//     }
// }

// variables

const resultOutput = document.querySelector("[data-result]");
const operationOutput = document.querySelector("[data-operation]");

const cleanButton = document.querySelector("[data-clean]");
const deleteButton = document.querySelector("[data-delete]");

const operatorsButton = document.querySelectorAll("[data-operators]");
const numbersButton = document.querySelectorAll("[data-number]");

// event

const calculator = new Calculator(operationOutput,resultOutput);

numbersButton.forEach((button)=>{
  button.addEventListener("click",()=>{
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  })
})
