export default function runHeaderMobile() {
	let isOpening = false;
	const hiddenMenu = $("#hidden-menu-container");
	const openMenuButton = $("#open-menu-button");
	const imgs = openMenuButton.find("img");
	openMenuButton.on("click", function () {
		isOpening = !isOpening;
		if (isOpening) {
			imgs.eq(1).show();
			imgs.eq(0).hide();
			hiddenMenu.slideDown();
		} else {
			imgs.eq(0).show();
			imgs.eq(1).hide();
			hiddenMenu.slideUp();
		}
	});

	const hiddenMenuOptions = $("#hidden-menu-container a");
	hiddenMenuOptions.on("click", function (event) {
		isOpening = false;
		imgs.eq(0).show();
		imgs.eq(1).hide();
		hiddenMenu.slideUp();
	});

	const scrollToTopButton = $("#hidden-menu-container nav button");
	scrollToTopButton.on("click", function () {
		window.scrollTo({ top: 0, behavior: "smooth" });
	});
}
