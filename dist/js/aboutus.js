clearSerch();

function clearSerch() {
    var serch = document.getElementById('header-search')

    if (document.title == '3D MARKETPLACE') {
        serch.style.display = 'none';
    }
}



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

var logInButton = document.getElementsByClassName('nav-item')[7];
var closeButton = document.getElementsByClassName('close-button')[0];
var logInBlock = document.getElementsByClassName('log-in')[0];
var forgotPassword = document.getElementById('forgot-password');
var restoreBlock = document.getElementsByClassName('restoring-password')[0];



    logInButton.onclick = function() {
    if ( hamburgerItem[0].classList.length == "2") {
        closeHamburger();
    }
    logInBlock.classList.toggle('log-in-active');
    closeButton.onclick = function() {
        logInBlock.classList.toggle('log-in-active');
    }
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




// ---------------------------Show models

var models = document.getElementsByClassName('nav-item')[2];
models.onclick = function() {
    var categoryBlock = document.getElementsByClassName('category-block-header')[0];
    categoryBlock.classList.toggle('category-block-active');
}


window.onload = function() {

    var categoryItem = document.getElementsByClassName('category-item');

    for (let i = 0; i < categoryItem.length; i++) {
        if(categoryItem[i].childNodes[1].childNodes[1].childNodes[1].naturalHeight > categoryItem[i].childNodes[1].childNodes[1].childNodes[1].naturalWidth) {
            categoryItem[i].childNodes[1].childNodes[1].childNodes[1].style.height = 100 + '%';
            categoryItem[i].childNodes[1].childNodes[1].childNodes[1].style.width = 'auto';
        }
    }

}

var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:true,
    dotsEach:3,
    navContainer:'.nav-for-owl',
    dotsContainer:'.dot',
    navText : ["",""],
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },
        768:{
            items:3
        },
        1024:{
            items:4
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})