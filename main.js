let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

let navbar = document.querySelector(".nav-link")
let navCollaspe = document.querySelector(".navbar-collaspe.collaspe");
navBar.forEach(function (a) {
    a.addEventLister("click", function () {
        navCollaspe.classList.remove("show");
    })
})