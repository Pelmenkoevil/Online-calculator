export const percentFormatter = new Intl.NumberFormat('ru-RU',{
    style: 'percent',
     maximumFractionDigits: 3
    });


export const priceFormatter = new Intl.NumberFormat('ru-RU',{
    style: 'currency', 
    currency: 'RUB', 
    maximumFractionDigits: 2
});


export const priceFormatterDecimels = new Intl.NumberFormat('ru-RU',{
    style: 'currency', 
    currency: 'RUB', 
    maximumFractionDigits: 2
});
