$(function() {
	$('.video__popup__link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
});
// slider
$(document).ready(function(){
    const owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        nav:false,
        margin:50,
        responsive:{
            1000:{
                items:5
            },
            900:{
                items:5
            },
            600:{
                items:3
            },
            400:{
                items:1
            }
        }
    });

    $('.slider__btn').click(function() {
        owl.trigger('next.owl.carousel');
    });
});





//Константы 
const contenTimeCodeShow = document.querySelector("#content__time-code-show");
const contenTimeCodeClose = document.querySelector(".content__time-code-close");
const contentTimeCodeBoxBody = document.querySelector(".content__time-code-box-body");
const btnTop = document.querySelector(".top");
const contentRight = document.querySelector(".boxRight__body")


contenTimeCodeShow.addEventListener("click", function() {
	openContent();
})
contenTimeCodeClose.addEventListener("click", function() {
	closeContent();
})
function openContent(){
	contentTimeCodeBoxBody.classList.remove("none");
	contenTimeCodeClose.classList.remove("none");
	contenTimeCodeShow.classList.add("none");
}

function closeContent(){
	contentTimeCodeBoxBody.classList.add("none");
	contenTimeCodeClose.classList.add("none");
	contenTimeCodeShow.classList.remove("none");
}

btnTop.addEventListener("click",goTop);
window.addEventListener("scroll",trackScroll);
function goTop(){
	if(window.window.pageYOffset > 0){
		window.scrollBy(0, -75);
		setTimeout(goTop, 10);
	}
}
function trackScroll(){
	const offSet = window.pageYOffset;
	const coords = document.documentElement.clientHeight;  // Вычесляем высоту окна браузера
	if(offSet > coords){
		btnTop.classList.add("top--show");
	}
	else{
		
		btnTop.classList.remove("top--show");
	}

}
// function scrollRight() {
// 	const yOffset = 450;
  
// 	function handleScroll() {
// 	  const scrollOffset = window.pageYOffset;
// 	  if (scrollOffset >= yOffset) {
// 		contentRight.style.cssText = "position: fixed;  bottom: 0px;";
// 	  } else {
// 		contentRight.style.position = "static";
// 	  }
// 	}
  
// 	window.addEventListener("scroll", handleScroll);
//   }
  
//   scrollRight();




