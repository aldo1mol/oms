let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


// let shoppingCart = document.querySelector('.shopping-cart');

// document.querySelector('#cart-btn').onclick = () => {
//     shoppingCart.classList.toggle('active');
//     searchForm.classList.remove('active');
//     loginForm.classList.remove('active');
//     navbar.classList.remove('active');
// }


// let loginForm = document.querySelector('.login-form');

// document.querySelector('#login-btn').onclick = () => {
//     loginForm.classList.toggle('active');
//     searchForm.classList.remove('active');
//     shoppingCart.classList.remove('active');
//     navbar.classList.remove('active');
// } 

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
} 

window.onscroll = () => {
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
} 



// SCROLLING OF CAROUSEL SLIDER
    document.addEventListener('DOMContentLoaded', function () {
    const track = document.getElementById('productCarouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (!track) return;

    const cards = track.querySelectorAll('.product-card');

    // compute gap (works even when using CSS gap)
    function getGap() {
        // fallback to 16 if not computable
        const style = getComputedStyle(track);
        const gap = parseFloat(style.gap || style.columnGap || 16);
        return isNaN(gap) ? 16 : gap;
    }

    function scrollAmount() {
        const visible = track.clientWidth;
        const gap = getGap();
        if (cards.length === 0) return visible;

        const cardRect = cards[0].getBoundingClientRect();
        const cardTotal = Math.round(cardRect.width + gap);

        // on small screens, scroll exactly one card; on larger screens scroll by ~90% of visible width
        if (window.innerWidth <= 576) return cardTotal;
        return Math.round(visible * 0.9);
    }

    function updateButtons() {
        prevBtn.disabled = track.scrollLeft <= 0;
        nextBtn.disabled = Math.ceil(track.scrollLeft + track.clientWidth) >= track.scrollWidth;
    }

    prevBtn.addEventListener('click', function (e) {
        e.preventDefault();
        track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', function (e) {
        e.preventDefault();
        track.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
    });

    track.addEventListener('scroll', () => {
        // small debounce could be added but not necessary
        updateButtons();
    });

    window.addEventListener('resize', updateButtons);

    // init
    updateButtons();
    });






    // Gallery script
        cument.addEventListener("DOMContentLoaded", function() {
        const galleryItems = document.querySelectorAll(".gallery-item");
        const carousel = new bootstrap.Carousel(document.querySelector("#carouselGallery"));

        galleryItems.forEach((item, index) => {
            item.addEventListener("click", () => {
            const modal = new bootstrap.Modal(document.getElementById("galleryModal"));
            modal.show();
            carousel.to(index);
            });
           });
        });





   
        

