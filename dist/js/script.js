
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

// Show models
var models = document.getElementsByClassName('nav-item')[2];
models.onclick = function() {
    var categoryBlock = document.getElementsByClassName('category-block')[0];
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
var owl = $('.owl-slider-first');
owl.owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:true,
    navContainer:'.nav-for-owl',
    dotsContainer:'.dot',
    navText : ["",""],
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
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
