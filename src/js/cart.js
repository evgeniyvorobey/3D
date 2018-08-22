//--------Отображение товаров добавленных в корзину
var wrapperForPurchases = document.getElementsByClassName('wrapper-for-purchases')[0];
var purchasedItemLicense = document.getElementsByClassName('purchased-item-license');

function renderItemsInCart() {
    checkLocalStorage();
    logPay()
        var out = '';
        for ( var key in cart) {
            out += `<div class="purchased-item">`;
                out += `<div class="purchased-item-image">`;
                out += `<a href="#"><img src="${goodsArr[key].image}" alt=""></a>`;
                out += `</div>`;
    
                out += `<div class="about-purchased-item">`;
                    out += `<p>${goodsArr[key].description}</p>`;
                    out += `<div class="wrapper-for-license">`;
                        out += `<span id="current-license">Extendet license</span>`;
                        out += `<div class="arrow-down"></div>`;
                        out += `<div class="wrapper-for-license-transparent"></div>`
                        out += `<ul class="purchased-item-license">`;
                            out += `<li>Extendet license</li>`;
                            out += `<li>Expanded license</li>`;
                        out += `</ul>`;
                    out += `</div>`
                out += `</div>`;
    
                out += `<div class="purchased-item-price">`;
                    out += `<span><span id="purchased-item-price">${goodsArr[key].cost}</span><span class="purchased-item-currency">${goodsArr[key].currency}</span></span>`;
                out += `</div>`;
    
                out += `<button id="${key}" class="delete-item-from-cart"></button>`;
            out += `</div>`;
        }
        wrapperForPurchases.innerHTML = out;
}

function closeLicenseDropDown() {
    for ( var i = 0; i < purchasedItemLicense.length; i++) {
        purchasedItemLicense[i].classList.remove('purchased-item-license-active');
    }
}
wrapperForPurchases.onclick = function(event) {
    var target = event.target;
    if ( target.classList.contains('wrapper-for-license-transparent')) {
        var dropDownEl = target.nextElementSibling;
        dropDownEl.classList.toggle('purchased-item-license-active');
    }
    if (target.tagName == 'LI') {
        target.parentNode.parentNode.children[0].innerHTML = target.innerHTML;
        target.parentNode.classList.remove('purchased-item-license-active');
    }

//---------Удаление из корзины
    if ( target.classList.contains('delete-item-from-cart')) {
        delete cart[target.id]
        saveCartToLS();
        renderItemsInCart();
    }
}




var totalPriceBlock = document.getElementsByClassName('total-price-discount')[0];
var logInOrPay = document.getElementsByClassName('log-in-pay')[0];
var logInOut = false;
var coupone = false;

function logPay() {
    if ( logInOut == true ) {
        logInOrPay.innerHTML = `<button id="go-to-pay"><img src="img/walet.png" alt="">Go to payment</button>`;
    } else {
        logInOut = false
        logInOrPay.innerHTML = `<button id="log-in-in-cart"><img src="img/user.png" alt="">Log in</button>`;
    }
}

function checkLocalStorage() {
    if ( localStorage.getItem('cart') == null )  {
        logInOrPay.remove();
        totalPriceBlock.remove();
    } else {
        return;
    }
}

var couponeButton = document.getElementById('coupone-button');
var discount = document.getElementById('discount');

function couponeCode() {
    if (coupone == true) {
        couponeButton.innerHTML = 'Remove code';
        discount.classList.add('discont-active');
    } else {
        couponeButton.innerHTML = 'Use the code';
        discount.classList.remove('discont-active');
    }
}


logInOrPay.onclick = event => {
    var target = event.target;
    if ( target.id == 'log-in-in-cart') {
        toggleLogInModal();
        renderItemsInCart();
    }
}