var footerEnter = document.getElementsByClassName('footer-enter')[0];
var footerRegistration = document.getElementsByClassName('footer-registration')[0];

footerEnter.onclick = function() {
    toggleLogInModal();
}

footerRegistration.onclick = function() {
    toggleLogInModal();
    logIn.classList.remove('activ-log-in-block');
    for ( var i = 0; i < navigationButton.children.length; i++ ) {
        console.log()
        navigationButton.children[i].classList.remove('active-button');
    }
    navigationButton.children[1].classList.add('active-button');
    registration.classList.add('activ-log-in-block');
}