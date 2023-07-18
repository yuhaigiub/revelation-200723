import "./setup/general.css";
import "./style.css";

import "./components/Frame1/style.css";
import "./components/Frame2/style.css";
import "./components/Footer/style.css";
import "./components/HeaderMobile/style.css";
import "./components/Float/style.css";

import runFrame1 from "./components/Frame1";
import runFrame2 from "./components/Frame2";
import runHeaderMobile from "./components/HeaderMobile";

import "./setup/_language";
import "./setup/_scaleRoot2";
import "animate.css";
import "lazysizes";

import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

Swiper.use([Navigation, Autoplay]);

window.addEventListener("load", () => {
	$("#root").scalePlatform();
	$(window).on("resize", () => {
		$("#root").scalePlatform();
	});
	$("#root").scalePlatform();
});

$(function () {
	runFrame1();
	runFrame2();
	runHeaderMobile();
});

// old scaleroot
// // scale root
// const outerRoot = document.getElementById("outer-root");
// const root = document.getElementById("root");
// root.style.transformOrigin = "top left";

// let mode, width, height, ratio;

// // custom
// const floatContainer = $("#float-container").get(0);
// floatContainer.style.transformOrigin = "top left";

// const headerMobile = $("#header-mobile").get(0);
// headerMobile.style.transformOrigin = "top left";

// function scaleRoot() {
// 	// check on every trigger
// 	mode = window.innerWidth <= 768 ? "mobile" : "pc";
// 	width = root.offsetWidth;
// 	height = root.offsetHeight;
// 	ratio = width / height;

// 	const desiredWidth = window.innerWidth;
// 	const desiredHeight = desiredWidth / ratio;

// 	const ratioW = desiredWidth / width;
// 	const ratioH = desiredHeight / height;

// 	outerRoot.style.width = `${desiredWidth}px`;
// 	outerRoot.style.height = `${desiredHeight}px`;

// 	root.style.transform = `scale(${ratioW}, ${ratioH})`;
// 	floatContainer.style.transform = `scale(${ratioW}, ${ratioH})`;
// 	headerMobile.style.transform = `scale(${ratioW}, ${ratioH})`;
// }

// window.addEventListener("load", scaleRoot);
// window.addEventListener("resize", scaleRoot);
