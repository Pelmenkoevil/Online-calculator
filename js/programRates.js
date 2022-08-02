import { percentFormatter } from "./formatters.js";


// проценты по ипотечной программе
const programBase = 0.12;
const programIt = 0.047;
const programGov = 0.067;
const programZare = 0.108;

document.querySelector('#base-value').value = programBase;
document.querySelector('#it-value').value = programIt;
document.querySelector('#gov-value').value = programGov;
document.querySelector('#zero-value').value = programZare;

// label 
document.querySelector("#base-text").innerText = percentFormatter.format(programBase);
document.querySelector("#it-text").innerText = percentFormatter.format(programIt);
document.querySelector("#gov-text").innerText = percentFormatter.format(programGov);
document.querySelector("#zero-text").innerText = percentFormatter.format(programZare);


// отображение выданной процентной ставки

const programInputs = document.querySelectorAll('input[name="program"]');
const totalPercent = document.querySelector('#total-percent');


programInputs.forEach((input) => {
    if(input.checked) {
        totalPercent.innerText = percentFormatter.format(input.value);
        }


        input.addEventListener('click', function(){           
            totalPercent.innerText = percentFormatter.format(this.value);
        });
})