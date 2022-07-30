function calcCartPrice(){
   

const totalPriceEl = document.querySelector('.total-price');
const cartIrems = document.querySelectorAll('.cart-item');
const deliveryCost = document.querySelector('.delivery-cost');
const cartDelivery = document.querySelector('[data-cart-delivery]');

    let totelPrice = 0;

   cartIrems.forEach(function(item){
       const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');

        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
      

        totelPrice = totelPrice + currentPrice;
       
   });

   totalPriceEl.innerText = totelPrice;

if (totelPrice > 0){
        cartDelivery.classList.remove('none');
} else {
    cartDelivery.classList.add('none');
}


   if(totelPrice >= 600){
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно';
   } else {
            deliveryCost.classList.remove('free');
            deliveryCost.innerText = '250 Р';

   }
    
} 