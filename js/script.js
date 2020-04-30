// Navbar show/hidden on scroll

let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        document.getElementById('bar-scroll').style.top = "0";
    } else {
        document.getElementById('bar-scroll').style.top = "-100px";
        // Mettre une plus grande height de décalage en prévision
    }
    prevScrollpos = currentScrollPos;
};