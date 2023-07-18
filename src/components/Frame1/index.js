export default function runFrame1() {
	const languageButton = $("#header-pc nav button");
	const languageContainer = $("#header-pc nav > div");
	let isOpenLanguage = languageContainer.attr("data-open-initial") === "true";
	if (!isOpenLanguage) languageContainer.hide();

	languageButton.on("click", function () {
		isOpenLanguage = !isOpenLanguage;
		if (isOpenLanguage) {
			languageContainer.slideDown();
		} else {
			languageContainer.slideUp();
		}
	});

	// language link clicked
	const languageLinks = languageContainer.find("a");
	let languageSelected = parseInt(languageContainer.attr("data-lang-selected"));
	languageLinks.eq(languageSelected).css({
		fontWeight: "bold",
	});

	languageLinks.each(function (index, element) {
		$(element).on("click", function (event) {
			if (index === languageSelected) return;
			languageLinks.eq(languageSelected).css({
				fontWeight: "normal",
			});
			languageSelected = index;
			languageLinks.eq(languageSelected).css({
				fontWeight: "bold",
			});
			isOpenLanguage = false;
			languageContainer.slideUp();
		});
	});
}
