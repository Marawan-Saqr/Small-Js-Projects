// Welcome Message
function WelcomeMessage() {
  alert("Welcome To E-commerece");
}
WelcomeMessage();


// Add Product
function AddProduct() {

  let productTitle = prompt("Add The Product Name");
  let productPrice = prompt("Add The Product Price");

  const obj = {
    id: Math.random(),
    title: productTitle,
    price: productPrice
  }

  return obj;

}



// Validate Product
function validateProduct(product) {

  if (product.title.trim() !== "" && product.price > 0) {
    return true;
  }

}


// Push Product To Cart
function pushProdct(product, cart) {
  cart.push(product);
  return cart;
}



let cart = [];
while(true) {

  let product = AddProduct();

  if (validateProduct(product)) {
    cart = pushProdct(product, cart);
    alert("Product added to cart!");
  } else {
    alert("Invalid product. Please try again.");
    continue;
  }

  let addAgain = confirm("Do You Want To Add Again ?");

  if (!addAgain) {
    break;
  }


}

console.log(cart);