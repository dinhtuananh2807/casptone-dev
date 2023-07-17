var cart = new Cart();

// console.log(cart);

 cart.getAllProduct(); 



// Product chi tiết

// getProductDetail();


// Sample URL
const url = window.location.href;

// Create a URLSearchParams object with the URL
const searchParams = new URLSearchParams(new URL(url).search);

// Get the value of the 'id' parameter
const id = searchParams.get('id');

console.log("Id là:",id); // Output: 123

cart.renderProductRelated(id);

cart.productDetail(id);