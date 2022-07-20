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


// hamburger v2
const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
    document.getElementById("navBar").classList.toggle("show");
    })
    ;
});


// Unit 3

const modalWindow = document.querySelector(".modal-window");
const showCase = document.querySelector(".catalog");
const shoppingCartValue = document.getElementById('shopping-cart-value');
const wishListValue = document.getElementById('wish-list-value');

let cart = [];

class Store {
  static init(key) {
    let basket = [];
    try {
      basket = Store.isset(key) ? Store.get(key) : Store.set(key, []);
    } catch (err) {
      if (err === QUOTA_EXCEEDED_ERR) {
        console.log("Local Storage Limited is exceeded");
      }
    }
    return basket;
  }
  static set(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }
  static get(key) {
    let value = localStorage.getItem(key);
    return value === null ? null : JSON.parse(value);
  }
  static isset(key) {
    return this.get(key) !== null;
  }
}



// console.log(typeof (cart));
// console.log('Empty cart=', cart);




//product Template

let productItemTemplate = product =>
  `<!-- product -->
    <div class="col-xl-3 col-lg-4 col-md-5 col-sm-6">
        <div class="product text-center">
            <div class="mb-3 position-relavive">
              <div class="badge text-white bg-${product.badge.bg}">${product.badge.title}</div>
                <a href="detail.html">
                <img src="${product.image}" alt="${product.title}" class="img-flued"> 
                </a>
                <div class="product-overlay">
                    <ul class="list-unstyled btn-block" data-id="${product.id}" data-price="${product.price}">
                        <li class="list-inline-item">
                            <a href="#!" title="Add to wishlist" class="btn bt-sm btn-outline-indigo add-to-wish-list">
                                <i class="far fa-heart"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#!" title="Add to cart" class="btn bt-sm btn-outline-indigo add-to-cart">Add to cart</a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#productView" title="Detail info" class="btn bt-sm btn-outline-indigo detail">
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


function populateProdactList(products) {

  let content = "";

  for (const product of products) {
    content += productItemTemplate(product);
  }
  return content;
}

// console.log(populateProdactList(products));




// Unit 4 modal

// show rating of product (stars)

let rating = stars => {
  let result = "";
  for (let i = 0; i < stars; i++) {
    result += '<li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>';
  }
  for (let i = 0; i < 5-stars; i++) {
    result += '<li class="list-inline-item m-0"><i class="fas fa-star small"></i></li>';
  }
  return result;
}

// modal window Template

let modalTemplate = product =>
  `<div class="modal" id = "productView" tabindex = "-1">
    <div class="modal-dialog">
        <div class="modal-content">
          <a href="#" class="p-4 close btn-close"><i class="fas fa-times"></i></a>
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-6">
                <div class="bg-center bg-cover b-block h-100" style="background: url(${product.image})"></div>
              </div>
              <div class="col-lg-6 btn-block" data-id="${product.id}" data-price="${product.price}">
                <div class="p-4">
                  <ul class="list-inline mb-2">
                  ${rating(product.stars)}
                  </ul>
                  <h2>${product.title}</h2>
                  <p class="text-muted">$${product.price}</p>
                  <p class="text-sm mb-4"> ${product.description}</p>
                    <div class="row mb-4">
                      <div class="col-sm-6">
                        <div class="border d-flex align-items-center justify-content-between py-1 px-3">
                          <span class="small text-uppercase text-gray mr-4">Quantity</span>
                          <div class="quantity">
                          
                            <i class="fas fa-caret-left p-0 dec-btn"></i>
                              <input class="form-control border-0 quantity-result" type="text" value="1">
                            <i class="fas fa-caret-right p-0 inc-btn"></i>

                          </div>
                        </div>
                      </div>

                    <div class="row mb-2">
                      <div class="col-sm-6">
                        <a class="but btn-dark btn-sm w-100 h-100 d-flex align-items-center justify-content-center mb-1 add-to-cart" href="cart.html">Add to cart</a>
                      </div>
                      <div class="col-sm-6">
                        <a class="but btn-dark btn-sm w-100 h-100 d-flex align-items-center text-decoration mb-1" href="#!">Wishlist</a>
                      </div>
                    </div>         
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>   
   </div>
  `;

// Chahge Quantity of product

function renderModal() {
  modalWindow.querySelector('.inc-btn').addEventListener('click', event => {
    let val = event.target.previousElementSibling.value;
    val++;
    event.target.previousElementSibling.value = val;
  });
  modalWindow.querySelector('.dec-btn').addEventListener('click', event => {
    let val = event.target.nextElementSibling.value;
    if (val > 1) {
      val--;
        }
    event.target.nextElementSibling.value = val;
  });
}

// 

function toggelModal(param, product={}) {
  if (modalWindow.innerHTML === '') {
    modalWindow.innerHTML = modalTemplate(product);
    renderModal();
  } else {
    modalWindow.innerHTML = '';
  }
  modalWindow.style.display = param;
}

//showCase (show modal window) function

function detailButton(products) {
  let detailButtons = showCase.querySelectorAll(".detail");
  console.log(detailButtons);
  detailButtons.forEach(button => {
    button.addEventListener("click", event => {
      let productId = event.target.closest('.btn-block').dataset.id;
      console.log(productId);
      let product = products.find(product => product.id == productId);
      toggelModal('block', product);
      addToCartButton(cart);
      modalWindow.querySelector('.close').addEventListener('click', event => {
        event.preventDefault();
        toggelModal('none');
      })
    })
  })
}


// addToCart function

function saveCart(cart) {
  Store.set('basket', cart);
}

function addProductToCart(product, amount = 1) {
  let cartItem = { ...product, amount: amount };
  cart = [...cart, cartItem];
  saveCart(cart);
}

function addToCartButton(cart) {
  let addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach((element) => {
    element.addEventListener('click', (event) => {
      let productId = event.target.closest('.btn-block').dataset.id;
      let price = event.target.closest('.btn-block').dataset.price;
      console.log(productId);
      console.log(price);
      addProductToCart({ id: productId, price: price });

      shoppingCartValue.textContent = +shoppingCartValue.textContent + 1;
      shoppingCartValue.classList.add('fw-bold');
      shoppingCartValue.style = "color:red;";
    });
  });
}




//after loading page

document.addEventListener("DOMContentLoaded", () => {

cart = Store.init('basket');

// Load products
document.querySelector(".catalog").innerHTML = populateProdactList(products);
  

// addToCartButtons
addToCartButton(cart);

// addToWishlistButtons 
let addToWishlistButtons = document.querySelectorAll('.add-to-wish-list');
  
if (addToWishlistButtons) {
  addToWishlistButtons.forEach(function (element) {
    element.addEventListener('click', function () {
    wishListValue.textContent = +wishListValue.textContent + 1;
    wishListValue.classList.add('fw-bold');
    wishListValue.style = "color:red;";
    });  
  });
}



//showCase (show modal window)
detailButton(products);

});
