(function ($) {
	"use strict";   
    
// Data Background 
$("[data-background]").each(function (){
	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
});

$('#mobile_menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "991"
});


// Counter 
$('.counter').counterUp({
        delay: 10,
        time: 1000
    });


const slides = document.querySelector(".testimonial-slider").children;
const indicatorImages = document.querySelector(".testimonial-img").children;

for (let i=0; i<indicatorImages.length; i++) {
	indicatorImages[i].addEventListener("click", function () {
		for (let j=0; j<indicatorImages.length; j++) {
			indicatorImages[j].classList.remove("active");
		}
		this.classList.add("active");
		const id = this.getAttribute("data-id");
		for (let j=0; j<slides.length; j++) {
			slides[j].classList.remove("active");
		}
		slides[id].classList.add("active");
	})
}

// Owl Carousel Slider
$('.brand-active').owlCarousel({
    loop:true,
    margin:50,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

})(jQuery);