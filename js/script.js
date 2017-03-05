var products = [
  {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "images/reversible-plaid.jpg"
  },
  {
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "images/wool-cable.jpeg"
  },
  {
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "images/northern-lights.jpg"
  },
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "images/ombre-infinity.jpg"
  },
  {
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "images/fringed-plaid.jpeg"
  },
  {
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": ".images/multi-color.jpeg"
  },
  {
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": ".images/etro.jpg"
  },
  {
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": ".images/twill.jpg"
  }
]

for (i = 0; i < products.length; i++) {
    console.log(products[i].name);
	console.log(products[i].price);
	console.log(products[i].description);
}

function capture() {
  console.log(document.scarfInfo.filter.value);
  event.preventDefault();
}

//TO DO: trigger on change of cart contents
function sumPrices(cartArray) {
  // for loop through array, sum value of price attribute for each object
  var total = 0;
  
  for(var i=0; i < cartArray.length; i++) {
    
    if(cartArray[i].price) {
      total = total + cartArray[i].price;
    }
  }
  // TO DO: print total as html to page, next to cart icon
  console.log(total);
}

//TO DO:  add/remove items from cart
//Add +/- button to item listings in HTML
//Define a global variable in JS, array “cart”.
//Write onclick handler in JS that takes item names, pushes them into “cart” array if they are not yet there, removes them if they are, console logs cart.length.
//Add onclick() to +/- button to trigger handler.

var cart = [{name: "yes"}, {name: "no"}]

function addItem(item) {
  var index = cart.indexOf(item);
  if (index == -1) {
    cart.push(item);
  }
  console.log(cart);
}

function remove(item) {
  var index = cart.indexOf(item);
  if (index != -1) {
    cart.splice(index, 1);
  }
  console.log(cart);
}

//sort items by selected attribute
//
//Write 2 comparison functions in JS: one that compares by name, one by price.
//In form submit handler, check the value sent, then sort the “products” array using the appropriate comparison function.
//Console log the result of the sort.