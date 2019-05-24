var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random() * 10) + 1;
 cart.push({itemName: item, itemPrice: price});
 
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var res = "In your cart, you have ";
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      var singleItem = (cart.length == 1);
      var finalItem = (i == cart.length - 1);
      var item = cart[i].itemName;
      var price = cart[i].itemPrice;
      
      res += `${!singleItem & finalItem ? 'and ' : ''}${item} at $${price}${finalItem ? '.' : ', '}`;
    }// end for loop
  } else {
    res = "Your shopping cart is empty."
  }// end if-else
  return res;
}

function total() {
  // write your code here
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  
}

function placeOrder(cardNumber) {
  // write your code here
}
