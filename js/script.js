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

const contenTimeCodeShow = document.querySelector("#content__time-code-show");
const contenTimeCodeClose = document.querySelector(".content__time-code-close");
const contentTimeCodeBoxBody = document.querySelector(".content__time-code-box-body");
const btnTop = document.querySelector(".top");


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