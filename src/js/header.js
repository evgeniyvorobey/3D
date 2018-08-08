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


