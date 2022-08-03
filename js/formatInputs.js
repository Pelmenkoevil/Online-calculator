import {priceFormatter} from './formatters.js';

const inputCost = document.querySelector('#input-cost');
const inputDownPayment = document.querySelector('#input-downpayment');
const inputTermt = document.querySelector('#input-term');
const form = document.querySelector('#form');
const totalCost = document.querySelector('#total-cost');


const clevePriceSettings =  {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
    delimiter: ' '
   
};



const cleaveCost = new Cleave('#input-cost', clevePriceSettings);
const cleaveDownpayment = new Cleave('#input-downpayment', clevePriceSettings);
const cleaveTerm = new Cleave('#input-term', clevePriceSettings);


 callcMortgage();

form.addEventListener('input', function () {

    callcMortgage();
   
});


function callcMortgage() {
    const totalAmount = +cleaveCost.getRawValue() - cleaveDownpayment.getRawValue();
        totalCost.innerText = priceFormatter.format(totalAmount);

    const creditRate = +document.querySelector('input[name="program"]:checked').value; 

    const mortgageTermsYears = document.querySelector('#input-term').value;

    const years = +cleaveTerm

     
   
}