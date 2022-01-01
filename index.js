// document.addEventListener('DOMContentLoaded', function() {
//     // When the event DOMContentLoaded occurs, it is safe to access the DOM

//     // When the user scrolls the page, execute myFunction 
//     window.addEventListener('scroll', myFunctionForSticky);

//     // Get the navbar
//     var navbar = document.getElementById("navbar");

//     // Get the offset position of the navbar
//     var sticky = navbar.offsetTop;

//     // Add the sticky class to the navbar when you reach its scroll position. 
//     // Remove "sticky" when you leave the scroll position

//     function myFunctionForSticky() {
//         if (window.pageYOffset >= sticky) {
//             navbar.classList.add("sticky");
//             navbar.classList.remove("nav-transparent");
//             navbar.classList.add("nav-sticky-color");
//         } else {
//             navbar.classList.remove("sticky");
//             navbar.classList.remove("nav-sticky-color");
//             navbar.classList.add("nav-transparent");
//         }
//     }
// })

window.addEventListener("scroll", function() {
    const navbar = document.getElementById('navbar');
    const loginText = document.getElementById('login-text');

    navbar.classList.toggle('sticky', window.scrollY > 0);
    loginText.classList.toggle("login-text-scroll", window.scrollY > 0);
})