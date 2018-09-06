var about = document.getElementsByClassName('nav-item')[4];
var support = document.getElementsByClassName('nav-item')[5];
var rightSideNav = document.getElementsByClassName('right-side-nav')[0];
var leftSide = document.getElementsByClassName('navigation')[0];




var hamButtonOpen = '';
var mobileButton = '';
mobileButton = `<span class="mobile-button-open-right-side"><img src="img/settings.png" alt=""></span>`
hamButtonOpen = `   <div class="rihgt-side-hamburger">
                    <span class="rihgt-side-hamburger-item"></span>
                    <span class="rihgt-side-hamburger-item"></span>
                    <span class="rihgt-side-hamburger-item"></span>
                </div>`;
var hamButtonClose = '';
hamButtonClose = `   <div class="rihgt-side-hamburger-close">
                    <span class="rihgt-side-hamburger-item-close"></span>
                    <span class="rihgt-side-hamburger-item-close"></span>
                    <span class="rihgt-side-hamburger-item-close"></span>
                </div>`;

function user() {
    about.style.display = 'none';
    support.style.display = 'none';
    navigation.innerHTML += hamButtonOpen;
    rightSideNav.innerHTML += hamButtonClose;
    leftSide.innerHTML += mobileButton;
}

user();
var hamburgerRightSide = document.getElementsByClassName('rihgt-side-hamburger')[0];
var rightSideHamburgerItem = document.getElementsByClassName('rihgt-side-hamburger-item');
var mobileButtonOpenRightSide = document.getElementsByClassName('mobile-button-open-right-side')[0];

mobileButtonOpenRightSide.onclick = function(){
    openRS();
}
hamburgerRightSide.onclick = function() {
    if ( rightSideHamburgerItem[0].classList.length == "1") {
        openRS();
    }
}
var hamburgerRightSideCl = document.getElementsByClassName('rihgt-side-hamburger-close')[0];
hamburgerRightSideCl.onclick = () => {
    closeRS()
}
shade.onclick = () => { closeRS(); }

function openRS() {
    shadeOn();
    hamburgerRightSideCl.style.display = 'block';
    hamburgerRightSide.style.display = 'none';
    rightSideNav.classList.add('right-side-nav-active');

}
function closeRS() {
    shadeOff();
    hamburgerRightSide.style.display = 'block';
    hamburgerRightSideCl.style.display = 'none';
    rightSideNav.classList.remove('right-side-nav-active');

}
models.onclick = function() {
    categoryBlockHeader.classList.toggle('category-block-active');
    shadeOn();
}
var purchasedsBlock = document.getElementsByClassName('last-purchaseds')[0];
var wrapperForItem = document.getElementsByClassName('wrapper-for-item')[0];
function folowingAuthors() {
    if (document.getElementsByClassName('folowing-authors')[0]) {
        purchasedsBlock.classList.add('authors-true');
        for ( var i = 0; i < wrapperForItem.children.length; i++) {
            wrapperForItem.children[i].classList.add('authors-true-title'); 
        }
    }
}
folowingAuthors();