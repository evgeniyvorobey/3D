// var owl = $('.main-photo-slider');
// owl.owlCarousel({
//     loop:true,
//     margin:10,
//     autoplay:false,
//     nav:false,
//     video:true,
//     autoplayTimeout:3000,
//     autoplayHoverPause:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         768:{
//             items:1
//         },
//         1024:{
//             items:1
//         }
//     }
// });
// $('.play').on('click',function(){
//     owl.trigger('play.owl.autoplay',[1000])
// })
// $('.stop').on('click',function(){
//     owl.trigger('stop.owl.autoplay')
// })
$(document).ready(function(){
    $(".main-photo-slider").owlCarousel({
        autoplay:false,
        items: 1,
        video:true
    });
}); 
    
    // the following to the end is whats needed for the thumbnails.
jQuery( document ).ready(function() {
    // 1) ASSIGN EACH 'DOT' A NUMBER
    dotcount = 1;
    jQuery('.owl-dot').each(function() {
    jQuery( this ).addClass( 'dotnumber' + dotcount);
    jQuery( this ).addClass( 'dotnumber') ;
    jQuery( this ).attr('data-info', dotcount);
    dotcount = dotcount + 1;
    });
                
    // 2) ASSIGN EACH 'SLIDE' A NUMBER
    slidecount = 1;
        
    jQuery('.owl-item').not('.cloned').each(function() {
    jQuery( this ).addClass( 'slidenumber' + slidecount);
    slidecount = slidecount +1;
    });
    
    // SYNC THE SLIDE NUMBER IMG TO ITS DOT COUNTERPART (E.G SLIDE 1 IMG TO DOT 1 BACKGROUND-IMAGE)
    jQuery('.owl-dot').each(function() {
    
        grab = jQuery(this).data('info');
    
        slidegrab = jQuery('.slidenumber'+ grab +' img').attr('src');
        console.log(slidegrab);
    
        jQuery(this).css("background-image", "url("+slidegrab+")");  
    
    });
    
    // THIS FINAL BIT CAN BE REMOVED AND OVERRIDEN WITH YOUR OWN CSS OR FUNCTION, I JUST HAVE IT
    // TO MAKE IT ALL NEAT 
    amount = jQuery('.owl-dot').length;
    gotowidth = 100/amount;
                
    jQuery('.owl-dot').css("width", gotowidth+"%");
    newwidth = jQuery('.owl-dot').width();
    jQuery('.owl-dot').css("height", newwidth+"px");
});





var owl = $('.slider-realated-products');
owl.owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:true,
    dotsEach:3,
    navContainer:'.nav-for-owl-products',
    dotsContainer:'.products-dot',
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
            items:3
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

var owl = $('.slider-more-products-from-author');
owl.owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:true,
    dotsEach:3,
    navContainer:'.nav-for-owl-author',
    dotsContainer:'.author-dot',
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
            items:3
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


//-----Переключатель Описание/коментарии
var headerToggle = document.getElementsByClassName('goods-item-description-comments-header-toggle')[0];

headerToggle.onclick = event => {
    var target = event.target;
    var description = document.getElementsByClassName('goods-item-description')[0];
    var comment = document.getElementsByClassName('goods-item-comments')[0];
    var itemComments = document.getElementsByClassName('goods-item-button-comments-quantity')[0];

    showDescription = () => {
        comment.classList.remove('toggle-block-active');
        description.classList.add('toggle-block-active');
    }
    showComment = () => {
        description.classList.remove('toggle-block-active');
        comment.classList.add('toggle-block-active');
    }




    toggleFunc  = () => {
        for ( var i = 0; i< headerToggle.children.length; i++) {
            headerToggle.children[i].classList.remove('active-toggle');
            target.classList.add('active-toggle')
        } 
    }
    if ( target.classList.contains('goods-item-button-description')) {
        toggleFunc();
        showDescription();
        itemComments.classList.remove('goods-item-button-comments-quantity-active');

    } else if ( target.classList.contains('goods-item-button-comments')) {
        toggleFunc();
        showComment();
        itemComments.classList.add('goods-item-button-comments-quantity-active')
    } else {
        return;
    }
}

//------------------Выбор лицензии
var licenseBlock = document.getElementsByClassName('price-aside-license')[0];

licenseBlock.onclick = event => {
    target = event.target;

    if ( target.classList.contains('license-item')) {
        for ( var i = 0; i < licenseBlock.children.length; i++ ) {
            licenseBlock.children[i].classList.remove('license-item-active');
        }
        target.classList.add('license-item-active');
    }
}

//----------------Покупка/Добавление в корзину

var addToCartAside = document.getElementsByClassName('add-to-cart-aside')[0];

addToCartAside.onclick = function() {
console.log(this.id)
    if ( cart[this.id] != undefined)  {
        alert('This goods currently added')
    } else {
        cart[this.id] = 1
    }
localStorage.setItem('cart', JSON.stringify(cart))
numberOfGoods();
    checkCart();
}