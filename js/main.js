$(document).ready(function () {
    $('.testimonials-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<img class='prev slick-btn' src='./img/arrow-right.svg'>",
        nextArrow: "<img class='next slick-btn' src='./img/arrow-left.svg'>",
        asNavFor: '.slider-avatars'
    });
    $('.slider-avatars').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        asNavFor: '.testimonials-slider'
    });

    $('.quise-item').click(function () {
        $('.quise-item').removeClass('active')
        $(this).addClass('active')

    })
});

const btnUp = document.querySelector('.arrow-up')
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
        btnUp.classList.add('active')
    }else{
        btnUp.classList.remove('active')
    }
})

btnUp.addEventListener('click', () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})


const year = document.querySelector('.year')
const data = new Date()
year.textContent = data.getFullYear()