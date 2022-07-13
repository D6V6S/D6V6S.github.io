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

const shoppingCartValue = document.getElementById('shopping-cart-value');
const wishListValue = document.getElementById('wish-list-value');

let addToWishlist = document.querySelector('.add-to-wish-list');
let addToCart = document.querySelector('.add-to-cart');

if (addToWishlist) {
  addToWishlist.addEventListener('click', function () {
    wishListValue.textContent = +wishListValue.textContent + 1;
    wishListValue.classList.add('fw-bold');
    wishListValue.style = "color:red;";
  });
}

if (addToCart) {
  addToCart.addEventListener('click', function () {
    shoppingCartValue.textContent = +shoppingCartValue.textContent + 1;
    shoppingCartValue.classList.add('fw-bold');
    shoppingCartValue.style = "color:red;";
  });
}

