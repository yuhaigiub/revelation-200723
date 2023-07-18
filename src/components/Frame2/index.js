import Swiper from "swiper";

export default function runFrame2() {
	const ribbonButtons = $(".ribbon-button");
	ribbonButtons.eq(0).attr("active", "");

	let currentSlide = 0;
	const frame2Swiper = new Swiper("#frame2-swiper", {
		direction: "horizontal",
		navigation: {
			prevEl: "#frame2-container .swiper-button-prev",
			nextEl: "#frame2-container .swiper-button-next",
		},
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		on: {
			slideChangeTransitionEnd: function (swiper) {
				ribbonButtons.eq(currentSlide).removeAttr("active");
				ribbonButtons.eq(swiper.activeIndex).attr("active", "");
				currentSlide = swiper.activeIndex;
			},
		},
	});

	ribbonButtons.each(function (index, element) {
		$(element).on("click", function (event) {
			ribbonButtons.eq(currentSlide).removeAttr("active");
			frame2Swiper.slideTo(index);
			ribbonButtons.eq(index).attr("active", "");
			currentSlide = index;
		});
	});
}
