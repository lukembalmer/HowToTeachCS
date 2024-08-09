//Luke Balmer

//onclick="subscribe();" class="js-subscribe"
function mobileResponsiveNav() {
    var x = document.getElementById("myHeader");
    if (x.className === "header-nav-container") {
        x.className += " responsive";
    } else {
        x.className = "header-nav-container";
    }
}
function subscribe() {
    const subButtonElement = document.querySelector('.js-subscribe-button');
    if(subButtonElement.innerHTML === 'I Love Iris Button') {

        subButtonElement.innerHTML = 'Love sent!';
    } else {
        subButtonElement.innerHTML = 'I Love Iris Button';
    }
}

function submitEmail() {
    let email = document.getElementById('email').value;
    
}