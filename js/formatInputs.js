import {priceFormatter, priceFormatterDecimels} from './formatters.js';

const inputCost = document.querySelector('#input-cost');
const inputDownPayment = document.querySelector('#input-downpayment');
const inputTermt = document.querySelector('#input-term');
const form = document.querySelector('#form');
const totalCost = document.querySelector('#total-cost');
const totalMonthPayment = document.querySelector('#total-month-payment');


const clevePriceSettings =  {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
    delimiter: ' '   
};


const cleaveCost = new Cleave('#input-cost', clevePriceSettings);
const cleaveDownpayment = new Cleave('#input-downpayment', clevePriceSettings);
const cleaveTerm = new Cleave('#input-term', clevePriceSettings);

const maxPrice = 100000000;
 callcMortgage();

form.addEventListener('input', function () {

    callcMortgage();
 
});


function callcMortgage() {

let cost = +cleaveCost.getRawValue();
if (cost> maxPrice ){
    cost = maxPrice;
}

    const totalAmount = cost  - cleaveDownpayment.getRawValue();
    totalCost.innerText = priceFormatter.format(totalAmount);

    const creditRate = +document.querySelector('input[name="program"]:checked').value; 
    const monthRate = creditRate/12;


   // const mortgageTermsYears = document.querySelector('#input-term').value;

    const years = +cleaveTerm.getRawValue();
    const months = years / 12;
    const mounthPayment = (totalAmount * monthRate)/ (1 - (1+monthRate) * (1-months));    
   
    totalMonthPayment.innerText = priceFormatterDecimels.format(mounthPayment);
}   

// slider const 

const sliderCost = document.getElementById('slider-cost');

noUiSlider.create(sliderCost, {
    start: 12000000,
    connect: 'lower',
    tooltips: true,
    step: 100000,
    range: {
        'min': 0,
        '50%':[10000000,1000000],
        'max': 100000000
    },

    format: wNumb({
       decimals: 0,
       thousand: '',
       suffix: '',     
    }),
});


sliderCost.noUiSlider.on('slide', function() {
   
    const sliderValue = parseInt(sliderCost.noUiSlider.get(true))


     cleaveCost.setRawValue(sliderValue);
     callcMortgage();
});


// slider downpayment

const sliderDownpayment = document.getElementById('slider-downpayment');

noUiSlider.create(sliderDownpayment, {
    start: 1000000,
    connect: 'lower',
    tooltips: true,
    step: 100000,
    range: {
        'min': 0,       
        'max': 10000000,
    },

    format: wNumb({
       decimals: 0,
       thousand: '',
       suffix: '',     
    }),
});


sliderDownpayment.noUiSlider.on('slide', function() {
   
    const sliderValue = parseInt(sliderDownpayment.noUiSlider.get(true))

    cleaveDownpayment.setRawValue(sliderValue);
     callcMortgage();
});


// slider downpayment

const sliderCredit = document.getElementById('slider-credit');

noUiSlider.create(sliderCredit, {
    start: 5,
    connect: 'lower',
    tooltips: true,
    step: 1,
    range: {
        'min': 0,
        'max': 30
    },

    format: wNumb({
       decimals: 0,
       thousand: '',
       suffix: '',     
    }),
});


sliderCredit.noUiSlider.on('slide', function() {
   
    const sliderValue = parseInt(sliderCredit.noUiSlider.get(true))

    cleaveTerm.setRawValue(sliderValue);
     callcMortgage();
});

inputCost.addEventListener('input', function(){

     const value = +cleaveCost.getRawValue();
   sliderCost.noUiSlider.set(value);

   if (value >  maxPrice) {
     inputCost.closest('.param__details').classList.add('param__details--error');
   }
   if (value <=  maxPrice) {
    inputCost.closest('.param__details').classList.remove('param__details--error');
  }

  const percentMin = value * 0.15;
  const percentMax = value * 0.15;

  sliderDownpayment.noUiSlider.updateOption({
    range: {
        'min': percentMin,       
        'max':  percentMax,
    }
  });

})

inputCost.addEventListener('change', function(){
    const value = +cleaveCost.getRawValue();
   
    if (value >  maxPrice) {
     inputCost.closest('.param__details').classList.remove('param__details--error');
     cleaveCost.setRawValue(maxPrice);
   }
 })