clearSerch();

function clearSerch() {
    var serch = document.getElementById('header-search')

    if (document.title == '3D MARKETPLACE') {
        serch.style.display = 'none';
    }
}
// ----------------------- Hamburger drop down menu
var hamburger = document.getElementsByClassName('hamburger')[0];
var hamburgerItem = document.getElementsByClassName('hamburger-item');
var rightSide = document.getElementsByClassName('right-side')[0];
var navigation = document.getElementsByClassName('navigation')[1];

function openHamburger() {
    hamburgerItem[0].classList.add('hamburger-item-active');
    hamburgerItem[1].classList.add('hamburger-item-active');
    hamburgerItem[2].classList.add('hamburger-item-active');

    rightSide.classList.add('right-side-active');
    navigation.classList.add('navigation-active');
}
function closeHamburger() {
    hamburgerItem[0].classList.remove('hamburger-item-active');
    hamburgerItem[1].classList.remove('hamburger-item-active');
    hamburgerItem[2].classList.remove('hamburger-item-active');

    rightSide.classList.remove('right-side-active');
    navigation.classList.remove('navigation-active');
}

hamburger.onclick = function() {
    if ( hamburgerItem[0].classList.length == "1") {
        openHamburger();
    } else {
        closeHamburger();
    }
}


// -------------------------Log in

var logInButton = document.getElementById('header-nav-log-in');
var closeButton = document.getElementsByClassName('close-button')[0];
var logInBlock = document.getElementsByClassName('log-in')[0];
var forgotPassword = document.getElementById('forgot-password');
var restoreBlock = document.getElementsByClassName('restoring-password')[0];
var shade = document.getElementsByClassName('shade')[0];

function shadeOn() {
    shade.classList.add('active-shade')
}
function shadeOff() {
    shade.classList.remove('active-shade')
}

function toggleLogInModal() {
    if ( hamburgerItem[0].classList.length == "2") {
        closeHamburger();
    }
    shadeOn();
    logInBlock.classList.toggle('log-in-active');
    closeButton.onclick = function() {
        logInBlock.classList.toggle('log-in-active');
        shadeOff();
    }
}



logInButton.onclick = function() {
    toggleLogInModal();
}

var navigationButton = document.getElementsByClassName('navigation-button')[0];
var logIn = document.getElementsByClassName('log-in-block')[0];
var registration = document.getElementsByClassName('registration-block')[0];
var returnToLogIn = document.getElementById('return-to-log-in');


navigationButton.onclick = function(event) {
    var target = event.target;
    if ( target.id == 'log-in-button') {
        registration.classList.remove('activ-log-in-block');
        for (var i = 0; i < this.children.length; i++){
            this.children[i].classList.remove('active-button');
        }
        target.classList.add('active-button');
        logIn.classList.add('activ-log-in-block');
    } else if ( target.id == 'registration-button'){
        logIn.classList.remove('activ-log-in-block');
        for (var i = 0; i < this.children.length; i++){
            this.children[i].classList.remove('active-button');
        }
        target.classList.add('active-button');
        registration.classList.add('activ-log-in-block');
    }
}

forgotPassword.onclick = function() {
    restoreBlock.classList.add('restoring-active');
}

returnToLogIn.onclick = function() {
    restoreBlock.classList.remove('restoring-active');
}


//---------------CLICK on SHADE

shade.onclick = function(){
    if (categoryBlockHeader.classList[1] == 'category-block-active') {
        categoryBlockHeader.classList.toggle('category-block-active');
        shadeOff();
    } else {
        return;
    }
}

// Show models
var models = document.getElementsByClassName('nav-item')[2];
var categoryBlockHeader = document.getElementsByClassName('category-block-header')[0];
var categoryBlock = document.getElementsByClassName('category-block')[0];
var categoryItem = document.getElementsByClassName('category-item');


// document.addEventListener('DOMContentLoaded', function() {
//     $.get( "/site/get-categories", function( data ) {
//         console.log( data );
//         var categories = "";
//         var out = '';
//     for (var key in data){
//         out += `<div class="category-item">`;
//         out += `<a href="">`;
//         out += `<div>`;
//         out += `<img src="${data[key].image}" alt="${data[key].title}">`;
//         out += `<p>${data[key].title}</p>`;
//         out += `</div>`;
//         out += `</a>`;
//         out += `</div>`;
//     }
//     categoryBlockHeader.innerHTML = out;
//     if ( categoryBlock !== undefined ) {
//         categoryBlock.innerHTML = out;
//     }
//     setImgSize();
//     })
// })


models.onclick = function() {
    categoryBlockHeader.classList.toggle('category-block-active');
    shadeOn();
}







//----------------------------CATEGORY IMG SIZE





setImgSize();

function setImgSize() {
    for (var i = 0; i < categoryItem.length; i++) {
        if (categoryItem[i].children[0].children[0].children[0].naturalHeight > categoryItem[i].children[0].children[0].children[0].naturalWidth) {
            categoryItem[i].children[0].children[0].children[0].style.height = 100 + '%';
            categoryItem[i].children[0].children[0].children[0].style.width = 'auto';
        }
    }
}



//----------------------------Корзина
var cart = {};

var goodsArr = {};

//------Получаем масив товаров
fetch('goods.json')
    .then(
        function(response) {
            response.json()
            .then( function(data) {
                goodsArr = data;
            })
        }
    )

//---Добавление товара в корзину
function addToCart() {
    if ( target.classList.contains('add-to-cart')) {
        var idGoods = target.id;
        if ( cart[idGoods] != undefined)  {
            alert('This goods currently added')
        } else {
            cart[idGoods] = 1
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    numberOfGoods();
}

//------Проверка есть ли товары в localStorage если да то записываем их в масив
function checkCart() {
    if ( localStorage.getItem('cart') != null ){
        cart = JSON.parse(localStorage.getItem("cart"))
    }
}
//-----Ставим оценку товару
function setRateGoods() {
    if ( target.classList.contains('stars')) {
        console.log(`Item id ${target.id} = ${target.title} stars`)
    }
}


var GoodsInCart = document.getElementById('number-of-goods');

function numberOfGoods() {
    cartItem = 0;
    for (let i in cart){
        cartItem += cart[i];
    }
    GoodsInCart.innerHTML = cartItem;
}

window.onload = function() {
    checkCart();
    numberOfGoods();
    modalAlertActive();
}

var allprice = 0;
var cartButton = document.getElementById('cart');
var forMiniCart = document.getElementsByClassName('for-mini-cart')[0];
var miniCart = document.getElementsByClassName('mini-cart');
var miniCartEmpty = document.getElementsByClassName('mini-cart-empty');

cartButton.onclick = function() {
    if ( document.body.offsetWidth < 768 ) {
        return;
    } else {
        if ( forMiniCart.children.length == 0 ){
            showMiniCart()
        } else {
            if ( miniCart[0] != undefined ){
                miniCart[0].remove();
                allprice = 0;
            } else {
                miniCartEmpty[0].remove();
            }
    
        }
    }
}

function allItemCost() {
    for ( var key in cart) {
        allprice += goodsArr[key].cost * cart[key];
    }
}


function showMiniCart() {
    allItemCost();
    var out = '';
    if ( cartItem == 0 ){
        out += `<div class="mini-cart-empty"><p>Cart is empty</p></div>`
    } else {
        out += `<div class="mini-cart">`;
        
            out += `<div class="mini-cart-top">`;
                out += `<div class="top-button"></div>`;
                out += `<div class="mini-cart-wrapper">`;
                    out += `<div class="mini-cart-item-container">`;
                    for (var key in cart ) {
                        out += `<div class="mini-cart-main">`;
                        out += `<div class="mini-cart-item-img"><img src="${goodsArr[key].image}" alt=""></div>`;
                        out += `<div class="mini-cart-item-info"><p>${goodsArr[key].name}</p><div class="mini-cart-one-item-price"><p>${goodsArr[key].cost}</p><span>${goodsArr[key].currency}</span></div></div>`;
                        out += `</div>`;
                    }
                    out += `</div>`
                out += `</div>`
                out += `<div class="bottom-button"></div>`;
            out += `</div>`;
            out += `<div class="mini-cart-price">`;
                out += `<div class="mini-cart-all-price"><p>${cartItem}</p><p>${allprice}.00</p></div>`;
                out += `<button><img src="img/cartYellow.png">Checkout</button>`
            out += `</div>`

        out += `</div>`;
    }
    forMiniCart.innerHTML += out;
}

var forMinCart = document.getElementsByClassName('for-mini-cart')[0];
var miniCartItemContainer = document.getElementsByClassName('mini-cart-item-container');

forMinCart.onclick = event => {
    var target = event.target;
    var position = getComputedStyle(miniCartItemContainer[0]).transform.split(',');

    var widthContainer = miniCartItemContainer[0].offsetHeight;
    position = parseInt(position[5]);

        if (position < 0){
            position = position;
        } else {
            position = 0;
        }

// перелистывание вниз
    if ( target.classList.contains('bottom-button')) {
        if ((-widthContainer + 121) !== position) {
            miniCartItemContainer[0].style.transform = `translateY(${position -121}px)`;
        } else {
            return;
        }
    }

    // перелистывание вверх
    if ( target.classList.contains('top-button')) {
        if (position !== 0) {
            miniCartItemContainer[0].style.transform = `translateY(${position +121}px)`;
        }
    }

}

// Модальное окно/алерт

var modalAlert = document.getElementsByClassName('modal-alert')[0];
var closeModalAlert = document.getElementsByClassName('close-modal-alert')[0];

function modalAlertActive() {
    if ( modalAlert.classList.contains('modal-alert-active')){
        shadeOn();
    }
}
closeModalAlert.onclick = () => { deleteModalAlert() }


function deleteModalAlert() {
    shadeOff();
    modalAlert.classList.remove('modal-alert-active');
}