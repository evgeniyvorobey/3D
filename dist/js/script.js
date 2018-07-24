var hamburger = document.getElementsByClassName('hamburger')[0];

hamburger.onclick = function() {
    var hamburgerItem = document.getElementsByClassName('hamburger-item');
    var rightSide = document.getElementsByClassName('right-side')[0];
    var navigation = document.getElementsByClassName('navigation')[1];
    hamburgerItem[0].classList.toggle('hamburger-item-active');
    hamburgerItem[1].classList.toggle('hamburger-item-active');
    hamburgerItem[2].classList.toggle('hamburger-item-active');

    rightSide.classList.toggle('right-side-active');
    navigation.classList.toggle('navigation-active');

}
