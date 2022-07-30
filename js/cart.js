const cartdWrapper = document.querySelector('.cart-wrapper');



window.addEventListener('click', function(event){
    if(event.target.hasAttribute('data-cart')){
       const card = event.target.closest('.card');
       const productInfo = {
           id: card.dataset.id,
           imgSrc: card.querySelector('.product-img').getAttribute('src'),
           title: card.querySelector('.item-title').innerText,
           itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            currency: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
       }; 

       const itemInCart = cartdWrapper.querySelector(`[data-id="${productInfo.id}"]`);
       if (itemInCart){
        const counterElement = itemInCart.querySelector('[data-counter]');
        counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
       } else {  
       const cartItemHtml = `<div class="cart-item" data-id="${productInfo.id}"> 
       <div class="cart-item__top">
           <div class="cart-item__img">
               <img src="${productInfo.imgSrc}" alt="">
           </div>
           <div class="cart-item__desc">
               <div class="cart-item__title">${productInfo.title}</div>
               <div class="cart-item__weight">${productInfo.itemsInBox} шт. / ${productInfo.weight}г.</div>

               <!-- cart-item__details -->
               <div class="cart-item__details">

                   <div class="items items--small counter-wrapper">
                       <div class="items__control" data-action="minus">-</div>
                       <div class="items__current" data-counter="">${productInfo.counter}</div>
                       <div class="items__control" data-action="plus">+</div>
                   </div>

                   <div class="price">
                       <div class="price__currency">${productInfo.currency} </div>
                   </div>

               </div>
               <!-- // cart-item__details -->

           </div>
       </div>
   </div>`;

   cartdWrapper.insertAdjacentHTML('beforeend', cartItemHtml);
     }   
  }
} ); 