const productsContainer = document.querySelector('#products-container');

async function getProducts(){
  const respons = await fetch('./js/products.json');
  console.log(respons);
}
getProducts();