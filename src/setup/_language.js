var welcome = $("#input-region").val();
var language = document.cookie.replace(/(?:(?:^|.*;\s*)language\s*\=\s*([^;]*).*$)|^.*$/, "$1");
var d = new Date();
d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
var expires = "expires=" + d.toUTCString();

jQuery(document).ready(function () {
	$(".choose-language .region").removeClass("languages__current");
	if (language.length == 0) {
		document.cookie = "language=" + welcome + ";" + expires + "; path=/";
		$(".choose-language .region[data-region=" + welcome + "]").addClass("active");
		renewChooseLanguage();
	} else {
		renewChooseLanguage();
	}
	$(".dropdown-content .region").on("click", function (e) {
		e.preventDefault();
		welcome = $(this).data("region");
		document.cookie = "language=" + welcome + ";" + expires + "; path=/";
		if (!$(this).hasClass("languages__current")) {
			document.location.href = "/tinhkytuyetcanh";
		}
	});
	// $('.dropdown-content .language__item').on('click', function (e) {
	//     e.preventDefault();
	//     $(this).addClass("active");
	//     if (!$(this).hasClass('active')) {
	//         $('.language__item').removeClass("active");
	//     }
	// });
});

function renewChooseLanguage() {
	var x = document.cookie.replace(/(?:(?:^|.*;\s*)language\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	var chosenNationText = $(".choose-language .region[data-region=" + x + "]")
		.eq(0)
		.text();
	var chosenLang = x;
	$(".current").html(chosenNationText);
	$(".currentInput").attr("data-region", chosenLang);
	$(".choose-language .region[data-region=" + x + "]").addClass("active");
}
