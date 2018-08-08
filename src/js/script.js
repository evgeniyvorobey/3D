clearSerch();

function clearSerch() {
    var serch = document.getElementById('header-search')

    if (document.title == '3D MARKETPLACE') {
        serch.style.display = 'none';
    }
}



var owl = $('.owl-slider-first');
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
var owl = $('.owl-slider-second');
owl.owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:true,
    navContainer:'.nav-for-owl-second',
    dotsContainer:'.dot-second',
    navText : ["",""],
    dotsEach:3,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },
        768:{
            items:2
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
var owl = $('.owl-slider-third');
owl.owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:true,
    dotsEach:3,
    navContainer:'.nav-for-owl-third',
    dotsContainer:'.dot-third',
    navText : ["",""],
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },
        768:{
            items:2
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

var owl = $('.owl-slider-fourth');
owl.owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:true,
    dotsEach:3,
    navContainer:'.nav-for-owl-fourth',
    dotsContainer:'.dot-fourth',
    navText : ["",""],
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:3
        },
        768:{
            items:4
        },
        1024:{
            items:6
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

var descriptionToggle = document.getElementsByClassName('added-description-toggle')[0];

descriptionToggle.onclick = function(event) {
    var target = event.target;
    for ( var i = 0 ; i < this.childElementCount ; i++) {
        this.children[i].classList.remove('active-btn');
    };
    target.classList.add('active-btn');
    console.log(target.tagName)
    var block = target.parentNode.parentNode.parentNode.children[1].children;
    for ( var i = 0; i < block.length; i++ ) {
        block[i].classList.remove('content-active');
    }
    if ( target.id == 'btn-first') {
        block[0].classList.add('content-active');
    } else if ( target.id == 'btn-second') {
        block[1].classList.add('content-active');
    } else if ( target.id == 'btn-third') {
        block[2].classList.add('content-active');
    }
}