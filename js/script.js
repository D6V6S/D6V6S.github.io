'use strict';

const modalWindow = document.querySelector(".modal-window");
const showCase = document.querySelector(".catalog");
const shoppingCartValue = document.getElementById('shopping-cart-value');
const wishListValue = document.getElementById('wish-list-value');
const shoppingCartItems = document.querySelector('.shopping-cart-items');
const taxesValue = 0.2;

let cart = [];
let wishlist = [];
let basket = [];



class Store {
  static init(key) {
    
    let initKey = [];
    try {
      initKey = Store.isset(key) ? Store.get(key) : Store.set(key, []);
    } catch (err) {
      if (err === QUOTA_EXCEEDED_ERR) {
        console.log("Local Storage Limited is exceeded");
      }
    }
    return initKey;
  }
  
  /*static init(key) {
    // try {
    //   Store.isset(key) ?? Store.set(key, []);
    // } catch (err) {
    //   if (err === QUOTA_EXCEEDED_ERR) {
    //     console.log("Local Storage Limited is exceeded");
    //   }
    // }
    return Store.get(key);
  }*/


  
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


function cartItemTemplate(item) {
    let product = products.find(product => product.id == item.id);
    return ` <tr class="cart-item" id="id${product.id}">
    <th class="ps-0 py-3 border-light" scope="row">
      <div class="d-flex align-items-center"><a class="reset-anchor d-block animsition-link" href="detail.html"><img src="${product.image}" alt="${product.title}" width="70"></a>
        <div class="ms-3"><strong class="h6"><a class="reset-anchor animsition-link" href="detail.html">${product.title}</a></strong></div>
      </div>
    </th>
    <td class="p-3 align-middle border-light">
      <p class="mb-0 small">$${product.price}</p>
    </td>
    <td class="p-3 align-middle border-light">
      <div class="border d-flex align-items-center justify-content-between px-3"><span class="small text-uppercase text-gray headings-font-family">Quantity</span>
        <div class="quantity">
          <button class="dec-btn p-0" data-id="${product.id}"><i class="fas fa-caret-left"></i></button>
          <input class="form-control form-control-sm border-0 shadow-0 p-0 item-quantity" type="text" value="${item.amount}">
          <button class="inc-btn p-0" data-id="${product.id}"><i class="fas fa-caret-right"></i></button>
        </div>
      </div>
    </td>
    <td class="p-3 align-middle border-light">
      <p class="mb-0 small">$<span class="product-subtotal"></span></p>
    </td>
    <td class="p-3 align-middle border-light"><a class="reset-anchor trash" href="#!"><i class="fas fa-trash-alt small text-muted" data-id="${product.id}"></i></a></td>
  </tr>`;
}




function setCartTotal(cart) {
  let tmpTotal = 0;
  cart.map(item => {
    tmpTotal = item.price * item.amount;
    shoppingCartItems.querySelector(`#id${item.id} .product-subtotal`).textContent = parseFloat(tmpTotal.toFixed(2));
  });

  let cartSubtotal = parseFloat(cart.reduce((previous, current) => previous + current.price * current.amount, 0).toFixed(2));
  let cartTaxes = parseFloat(cartSubtotal * taxesValue).toFixed(2);
  let cartTotal = parseFloat(Number(cartSubtotal) + Number(cartTaxes)).toFixed(2);

  document.querySelector('.cart-subtotal').textContent = cartSubtotal;
  document.querySelector('.cart-taxes').textContent = cartTaxes;
  document.querySelector('.cart-total').textContent = cartTotal;
    
}



//wishlist add --start

function saveWishList(wishlist){
    Store.set('wishlist', wishlist);
}

function amountWishListItems(wishlist){
  wishListValue.textContent = wishlist.length;
    if(+wishListValue.textContent > 0) {
        wishListValue.classList.add('fw-bold');
        wishListValue.style = "color:red;";
    }
}

function addProductToWishList(product) {
    let inWishList = wishlist.some(element => element.id === product.id);

    if(!inWishList) wishlist = [...wishlist, product];
    saveWishList(wishlist);
    amountWishListItems(wishlist);
}

function addToWishListButton() {
    let addToWishListButtons = document.querySelectorAll('.add-to-wish-list');
    addToWishListButtons.forEach((element) => {             
        element.addEventListener('click', (event) => {
            let productId = event.target.closest('.btn-block').dataset.id;
            let price = event.target.closest('.btn-block').dataset.price;
            addProductToWishList({id: productId, price:price});   
        });
    });    
}
//wishlist add --end


const filterItem = (cart, id) => cart.filter(item => item.id !== id);
const findItem = (cart, id) => cart.find(item => item.id == id);

function renderCart() {
  shoppingCartItems.addEventListener('click', event => {
    if (event.target.classList.contains('fa-trash-alt')) {
      cart = filterItem(cart, event.target.dataset.id);
      setCartTotal(cart);
      saveCart(cart);
      amountCartItems(cart);
      event.target.closest('.cart-item').remove();

    } else if (event.target.classList.contains('inc-btn')) {
      let tmpItem = findItem(cart, event.target.dataset.id);
      console.log(findItem(cart, event.target.dataset.id));
      tmpItem.amount += 1;
      event.target.previousElementSibling.value = tmpItem.amount;
      setCartTotal(cart);
      saveCart(cart);
      amountCartItems(cart);

    } else if (event.target.classList.contains('dec-btn')) {
      let tmpItem = findItem(cart, event.target.dataset.id);
        if (tmpItem !== undefined && tmpItem.amount > 1) {
          tmpItem.amount -= 1; 
          event.target.nextElementSibling.value = tmpItem.amount; 
          
        } else {
          cart = filterItem(cart, event.target.dataset.id);
          event.target.closest('.cart-item').remove();
        }
      setCartTotal(cart);
      saveCart(cart);
      amountCartItems(cart);
    }
  })
}

function populateShoppingCart() {
  let res = " ";
  cart.forEach(item => res += cartItemTemplate(item));
  return res;
}





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
                          <div class="quantity btn-block" data-id="${product.id}" data-price="${product.price}">
                          
                            <i class="fas fa-caret-left p-0 dec-btn"></i>
                              <input class="form-control border-0 quantity-result" type="text" value="1">
                            <i class="fas fa-caret-right p-0 inc-btn"></i>

                          </div>
                        </div>
                      </div>

                    <div class="row mb-2">
                      <div class="col-sm-6">
                        <a class="but btn-dark btn-sm w-100 h-100 d-flex align-items-center justify-content-center mb-1 add-to-cart" href="#!" data-id="${product.id}" data-price="${product.price}">Add to cart</a>
                      </div>
                      <div class="col-sm-6">
                        <a class="but btn-dark btn-sm w-100 h-100 d-flex align-items-center text-decoration mb-1 add-to-wish-list" href="#!">Wishlist</a>
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

  modalWindow.querySelector(".add-to-cart").addEventListener('click', event => {
    let productId = event.target.dataset.id;
    let price = event.target.dataset.price;
    addProductToCart({ id: productId, price: price }, + modalWindow.querySelector(".quantity-result").value);
  })
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
      let product = products.find(product => product.id == productId);
      toggelModal('block', product);
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

function amountCartItems(cart) {
  if (cart)
    shoppingCartValue.textContent = cart.reduce((prev, cur) => prev + cur.amount, 0);
  
  if (+shoppingCartValue.textContent > 0) {
      shoppingCartValue.classList.add('fw-bold');
      shoppingCartValue.style = "color:red;";
    }
      
}

function addProductToCart(product, amount = 1) {
  let itemInCart = cart.some(element => element.id === product.id);
  if (itemInCart) {
    cart.forEach(item => {
      if (item.id === product.id) {
        item.amount += amount;
      }
    });
  } else {
    let cartItem = { ...product, amount: amount };
    cart = [...cart, cartItem];
  }
  saveCart(cart);
  amountCartItems(cart);
}

function addToCartButton(cart) {
  let addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach((element) => {
    element.addEventListener('click', (event) => {
      let productId = event.target.closest('.btn-block').dataset.id;
      let price = event.target.closest('.btn-block').dataset.price;
      addProductToCart({ id: productId, price: price });

    });
  });
}




//after loading page

document.addEventListener("DOMContentLoaded", () => {

  cart = Store.init('basket');

  wishlist = Store.init('wishlist');


  amountCartItems(cart);
  amountWishListItems(wishlist);


// Load products
if (showCase)
  {
  showCase.innerHTML = populateProdactList(products);

// addToCartButtons
addToCartButton(cart);
  
//showCase (show modal window)
detailButton(products);

// addToWishlistButtons
  addToWishListButton();
  
  }

//Order cart

if (shoppingCartItems) {
  shoppingCartItems.innerHTML = populateShoppingCart();
  setCartTotal(cart);
  renderCart();

}
    
  

});
