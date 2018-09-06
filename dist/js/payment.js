var wrapperForPaymentType = document.getElementsByClassName('wrapper-for-payment-type')[0];
var paymentImg = document.getElementsByClassName('payment-img');

wrapperForPaymentType.onclick = e => {
    var target = e.target;
    if ( target.classList.contains('shadow-payment')) {
        paymentMethod = target.parentNode.parentNode.id;
        console.log(paymentMethod)
        for ( var i = 0; i < paymentImg.length; i++ ) {
            paymentImg[i].classList.remove('active');
            target.nextElementSibling.children[0].classList.add('active');
        }
    }
}