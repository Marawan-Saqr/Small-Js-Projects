// Welcome To Ecommerce
alert("Welcome To Our Shop");


/******************************************************************************************/
/********************************** User Items Function ***********************************/
/******************************************************************************************/

// User Items Function
function userItems(itemName, itemPrice) {

  let userItemsObject = {
    name: itemName,
    price: itemPrice
  }

  return userItemsObject;

}

let itemsOfUser = userItems(prompt("Enter Item Name"), Number(prompt("Enter Item Price")));

/******************************************************************************************/
/********************************** Validate User Items Function **************************/
/******************************************************************************************/

// Validate User Items Function
function validateUserItems(userItems) {

  if (typeof userItems.name === "string" && userItems.name.trim() !== "" && !isNaN(userItems.price) && userItems.price > 0) {
    alert("Items Added SuccessFully");
    return true;
  } else {
    alert("Invalid input. Please make sure the name is a valid string and the price is a valid positive number.");
    return false;
  }

}

let validateUser = validateUserItems(itemsOfUser);


/******************************************************************************************/
/********************************** Add User Items To Cart Function ***********************/
/******************************************************************************************/

function addToCart(isValidate, items) {

  let cart = [];

  if (isValidate) {
    cart.push(items);
  }

  return cart;

}

let cartItems = addToCart(validateUser, itemsOfUser);
console.log(cartItems);