$(document).ready(function () {
    $('.testimonials-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<img class='prev slick-btn' src='./img/arrow-right.svg'>",
        nextArrow: "<img class='next slick-btn' src='./img/arrow-left.svg'>",
        asNavFor: '.slider-avatars',

        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    arrows: false,
                    //   autoplay: true,          // Включает автопрокрутку
                    // autoplaySpeed: 3000,
                }

            }
        ]
    });
    $('.slider-avatars').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        asNavFor: '.testimonials-slider',
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                }

            }
        ]
    });

    $('.quise-item').click(function () {
        $('.quise-item').removeClass('active')
        $(this).addClass('active')

    })
});

const btnUp = document.querySelector('.arrow-up')
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnUp.classList.add('active')
    } else {
        btnUp.classList.remove('active')
    }
})

btnUp.addEventListener('click', () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})


const year = document?.querySelector('.year')
const data = new Date()
if (year) {
    try {
        year.textContent = data.getFullYear()
    } catch (error) {
        console.log(error);

    }
}



// menu fixed

const headerFixed = document?.querySelector('.header-wrapper')
// console.log(headerFixed);

if (headerFixed) {
    try {
        window.addEventListener('scroll', () => {
            window.scrollY > 10
                ? headerFixed.classList.add('fixed')
                : headerFixed.classList.remove('fixed');
        });
    } catch (error) {
        console.error('Scroll handler failed:', error);
    }
}

// mobile menu

const mobile = document.querySelector('.mobile')
const nav = document.querySelector('.nav')
// console.log(mobile);
mobile.addEventListener('click', () => {
    nav.classList.toggle('active')
    mobile.classList.toggle('active')
    document.body.classList.toggle('hidden')

})

// button contact

const allButtons = document.querySelectorAll('.services-button button')

allButtons.forEach(button => {
    button.addEventListener('click', function() {
        for (let i = 0; i < allButtons.length; i++) {
            const element = allButtons[i];
            element.classList.remove('active')
        }
        button.classList.add('active')
    })
});


