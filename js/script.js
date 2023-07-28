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

