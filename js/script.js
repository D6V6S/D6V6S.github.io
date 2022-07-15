'use strict';
// underline menu

document.querySelectorAll('a.nav-link-underline').forEach(elem => {

  elem.onmouseenter =
  elem.onmouseleave = e => {

    const tolerance = 10;

    const left = 0;
    const right = elem.clientWidth;

    let pageOfset = (window.innerWidth - document.querySelector('.container').offsetWidth)/2;
    
    let x = e.pageX - pageOfset - elem.offsetLeft;

    if (x - tolerance < left) x = left;
    if (x + tolerance > right) x = right;

    elem.style.setProperty('--x', `${x}px`);

    
  };

});

// hamburger v1
// const icons = document.querySelectorAll('.icon');
// icons.forEach (icon => {  
//   icon.addEventListener('click', (event) => {
//     icon.classList.toggle("open");
//   });
// });

// hamburger v2
const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
    document.getElementById("navBar").classList.toggle("show");
    })
    ;
});

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
// onclick="navBarShow()"
// function navBarShow() {
//   var x = document.getElementById("navBarMobile");
//     x. classList.toggle("show");
// }



/* Toggle */
// function navBarShowV4() {
//   var x = document.getElementById("navBarMobile1");
//   if (x.classList.contains('show')) {
//      x.classList = "navbar-collapse collapse";
//   } else {
//     x.classList = "navbar-collapse collapse show";
//   }
// }


/* Toggle  */
// function navBarShowV1() {
//   var x = document.getElementById("navBar");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

/* Toggle  */
// function navBarShowV2() {
//   var x = document.getElementById("navBarMobile");
//   if (x.style.display === "block") {
//     x.style.setProperty('--navscale', `0`);
//     x.style.setProperty('--navheight', `0px`);
//     x.style.display = "none";
//   } else {
//     x.style.setProperty('--navscale', `1`);
//     x.style.setProperty('--navheight', `auto`);
//     x.style.display = "block";


//   }
// }

/* Toggle  */
// function navBarShowV3() {
//   var x = document.getElementById("navBarMobile");
//   if (x.style.height === "auto") {
//     // x.style.setProperty('--navscale', `0`);
//     // x.style.setProperty('--navheight', `0px`);
//      x.classList = "navbar-mobile";
//     x.style.height = "0px";
//   } else {
//     // x.style.setProperty('--navscale', `1`);
//     // x.style.setProperty('--navheight', `auto`);
//     x.classList = "navbar-mobile navheight show";
//     x.style.height = "auto";


//   }
// }

/*
let obj = {
    name: "My Name",
    price: 123
};

console.log(obj["name"]);
console.log(document);

*/

/*
function test(x,y) {
  return x + y;
}

console.log(typeof(test));
*/


// const navbarToggler = document.getElementById('navbar-toggler');

// // console.log(navbarToggler);

// console.log(document.querySelector('.collapse'));

// navbarToggler.addEventListener('click', function (){
//   document.querySelector('.collapse').classList.toggle('show');
// });



// Unit 3

//using array literal notation
let products = [
  {
    badge: {
      title: "New",
      bg: "new",
    },
    image: "img/product/photo_1.jpg",
    title: "Product 1",
    price: 111,
  },
  {
    badge: {
      title: "New",
      bg: "new",
    },
    image: "img/product/photo_1.jpg",
    title: "Product 2",
    price: 112,
  },
  {
    badge: {
      title: "New",
      bg: "new",
    },
    image: "img/product/photo_1.jpg",
    title: "Product 3",
    price: 113,
  },
  {
    badge: {
      title: "",
      bg: "",
    },
    image: "img/product/photo_1.jpg",
    title: "Product 4",
    price: 114,
  },
  {
    badge: {
      title: "Sale",
      bg: "sale",
    },
    image: "img/product/photo_1.jpg",
    title: "Product 5",
    price: 115,
  },
  {
    badge: {
      title: "",
      bg: "",
    },
    image: "img/product/photo_1.jpg",
    title: "Product 6",
    price: 116,
  },
  {
    badge: {
      title: "Sold",
      bg: "sold",
    },
    image: "img/product/photo_1.jpg",
    title: "Product 7",
    price: 117,
  },
  {
    badge: {
      title: "New",
      bg: "new",
    },
    image: "img/product/photo_1.jpg",
    title: "Product 8",
    price: 118,
  },
];


function productItemTemplate(product) {
  return `<!-- product -->
          <div class="col-xl-3 col-lg-4 col-md-5 col-sm-6">
              <div class="product text-center">
                  <div class="mb-3 position-relavive">
                    <div class="badge text-white bg-${product.badge.bg}">${product.badge.title}</div>
                      <a href="detail.html">
                      <img src="${product.image}" alt="${product.title}" class="img-flued"> 
                      </a>
                      <div class="product-overlay">
                          <ul class="list-unstyled">
                              <li class="list-inline-item">
                                  <a href="#!" title="Add to wishlist" class="btn bt-sm btn-outline-indigo add-to-wish-list">
                                      <i class="far fa-heart"></i>
                                  </a>
                              </li>
                              <li class="list-inline-item">
                                  <a href="#!" title="Add to cart" class="btn bt-sm btn-outline-indigo add-to-cart">Add to cart</a>
                              </li>
                              <li class="list-inline-item">
                                  <a href="#productView" title="Detail info" class="btn bt-sm btn-outline-indigo">
                                      <i class="fas fa-expand"></i>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <h6 class=""><a href="detail.html" class="reset-anchor">${product.title}</a></h6>
                  <p class="small test-muted">$${product.price}</p>
              </div>
          </div>
          `;
}

function populateProdactList(products) {

  let content = "";

  for (const product of products) {
    content += productItemTemplate(product);
  }
  return content;
}

// console.log(populateProdactList(products));

document.querySelector(".catalog").innerHTML = populateProdactList(products);

// addToWishlistButtons & addToCartButtons

const shoppingCartValue = document.getElementById('shopping-cart-value');
const wishListValue = document.getElementById('wish-list-value');

let addToWishlistButtons = document.querySelectorAll('.add-to-wish-list');
let addToCartButtons = document.querySelectorAll('.add-to-cart');
// console.log(addToWishlistButtons);

if (addToWishlistButtons) {
  addToWishlistButtons.forEach(function (element) {
    element.addEventListener('click', function () {
    wishListValue.textContent = +wishListValue.textContent + 1;
    wishListValue.classList.add('fw-bold');
    wishListValue.style = "color:red;";
    });  
  });
}

if (addToCartButtons) {
  addToCartButtons.forEach(function (element) {
    element.addEventListener('click', function () {
    shoppingCartValue.textContent = +shoppingCartValue.textContent + 1;
    shoppingCartValue.classList.add('fw-bold');
    shoppingCartValue.style = "color:red;";
    });
  });
}