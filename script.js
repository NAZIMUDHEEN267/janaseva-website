const scrollTop = document.getElementById('js-scrollTop');
const topView = document.getElementById('js-top');

// scroll event for visible button
window.addEventListener('scroll', () => {
    if (window.scrollY >= 424) {
        scrollTop.style.visibility = "visible";
    } else {
        scrollTop.style.visibility = "hidden";
    }
})

// click event for scroll top button
scrollTop.addEventListener('click', () => {
    topView.scrollIntoView({ behavior: "smooth" });
})