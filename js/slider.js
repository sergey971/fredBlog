
$('.slider__top').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  autoplay: false,
  autoplaySpeed: 4000,
  asNavFor: '.slider__buttom'
});

$('.slider__buttom').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider__top',
  arrows: false,
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 786,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
});

// ====================
  // $('.nextPage__row').slick({
  //   infinite: true,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  // });

