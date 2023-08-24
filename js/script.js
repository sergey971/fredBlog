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
        rewindNav:false,
                loop: true,
                nav: false,
                dots: false,
                responsive: {
                    0:{
                        items: 1
                    },
                    600: {
                        items: 3,

                    },
                    900: {
                        items: 2
                    },
                    1000: {
                        items: 4
                    },
                    1024: {
                        items: 4
                    },
                    1140: {
                        items: 5
                    }
                }
            })
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
// const colorsBg = document.querySelectorAll('.colors');


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
// ========================================= СКРОЛ
// function scrollRight() {
// 	const yOffset = 450;
  
// 	function handleScroll() {
// 	  const scrollOffset = window.pageYOffset;
// 	  if (scrollOffset >= yOffset) {
// 		contentRight.style.cssText = "position: fixed;  bottom: 0px; height: 100%";
// 	  } else {
// 		contentRight.style.position = "static";
// 	  }
// 	}
  
// 	window.addEventListener("scroll", handleScroll);
//   }
  
//   scrollRight();
// ===============================================

const colorsBg = document.querySelectorAll('.colors');
const colors = ["#F6B34F", "#F64F6D", "#3CBB54"];

function getColor() {
    colorsBg.forEach((element, index) => {
        let currentColorIndex = index % colors.length;
        let currentColor = colors[currentColorIndex];
        element.style.backgroundColor = currentColor;
    });
}

getColor();


