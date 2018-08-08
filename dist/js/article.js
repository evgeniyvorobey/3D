//----------------------------------------

var user = false;
var addComent = document.getElementsByClassName('add-coment')[0];
var linkEnter = document.getElementsByClassName('header-enter')[0].children[0];
var linkEnterComents = document.getElementsByClassName('header-enter')[0].children[0].children[0];
var modalWindow = document.getElementsByClassName('modal-window')[0];


function showComentButton() {
    addComent.style.display = 'block';
    linkEnter.style.display = 'none';

}
function hideComentButon() {
        addComent.style.display = 'none';
        linkEnter.style.display = 'block';
}


function addComents() {
    if ( user == true) {
        user = false;
        hideComentButon()
    } else {
        user = true;
        showComentButton()
    }
}

linkEnterComents.onclick = function() {
    toggleLogInModal();
}
//---------------------------------------ОТЗЫВ/КОМЕНТАРИЙ-----
var wrapperForModal = document.getElementById('wrapper-for-modal-window');
var closeModalWindow = document.getElementById('modal-close');
var title = '';
var reviev = true;
var out = '';
//--------------------------ПОДСТАВЛЯЕМ ИНФОРМАЦИЮ О ТОМ ЧТО ЭТО КОМЕНТАРИЙ-----
function coment() {
    title = 'Coment';
    reviev = false;
}
//--------------------------ПОДСТАВЛЯЕМ ИНФОРМАЦИЮ О ТОМ ЧТО ЭТО ОТЗЫВ-----
function reviews() {
    title = 'Reviews';
    reviev = true;
}

addComent.onclick = function() {
    reviews();
    shadeOn();
    modalWindow.classList.add('modal-window-active');
}

//-----------------------------ЗАКРЫТИЕ ОКНА ПО КЛИКУ----------------
document.body.onclick = function(event) {
    var target = event.target;
    if ( target.id == 'modal-close' || target.tagName == 'SPAN'){
        modalWindow.classList.remove('modal-window-active')
        shadeOff();
    } else {
        return;
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
            items:1
        },
        768:{
            items:2
        },
        1024:{
            items:2
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


