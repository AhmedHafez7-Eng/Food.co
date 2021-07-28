/* -----------------
		Loader && AOS Animation
	--------------*/
window.addEventListener("load", function () {
	/* -------------------- Page Loader--------------------- */
	document.querySelector(".pageLoader").classList.add("fade-out");
	setTimeout(function () {
		document.querySelector(".pageLoader").style.display = "none";
	}, 600);
	/* -------------------- Animation On Scroll--------------------- */
	AOS.init();
});



/* -----------------
		Making Navbar Sticky
	--------------*/

window.addEventListener('scroll', function () {

	const header = document.querySelector('header');
	header.classList.toggle("sticky", window.scrollY > 0);
});
/* -----------------
		Links Add Active Class on click 	(Navbar Section)
	--------------*/

$('header ul li a').click(function () {

	$(this).parent().addClass('activeColor').siblings().removeClass('activeColor');
});

/* -----------------
		Trigger Toggle Navbar Menu
	--------------*/

function togglemenu() {
	var menuToggle = document.querySelector('.menuToggle');
	var menu = document.querySelector('.navlinks');
	menuToggle.classList.toggle('activenav');
	menu.classList.toggle('activenav');
}

/* -----------------
		Trigger To Top Button
	--------------*/

$(window).scroll(function () {
	if ($(this).scrollTop()) {
		$('#toTop').fadeIn();
	} else {
		$('#toTop').fadeOut();
	}
});

$("#toTop").click(function () {
	//1 second of animation time
	//html works for FFX but not Chrome
	//body works for Chrome but not FFX
	//This strange selector seems to work universally
	$("html, body").animate({
		scrollTop: 0
	}, 40);
});

/* -----------------
		Show Only 6 boxes and hide more
	--------------*/

let divs = document.querySelectorAll(".menu .content .box");
let divsArray = Array.from(divs);
for (const i in divsArray) {
	if (i > 5) {
		divsArray[i].classList.add("hidden");
	} else {
		continue;
	}
}

/* -----------------
		Filter Content && Item Popup
	--------------*/

$(document).ready(function () {

	$('.buttons').click(function () {

		$(this).addClass('active').siblings().removeClass('active');

		var filter = $(this).attr('data-filter');

		if (filter == 'all') {
			$('.box').show(400);
			//----------- Show Only 6 boxes and hide more
			$('.box.hidden').hide(1);

		} else {
			$('.box').not('.' + filter).hide(200);
			$('.box').filter('.' + filter).show(400);
		}
	});

	/* -----------------
			Popup
		--------------*/

	var modal = document.getElementById("myModal");
	var image = document.querySelectorAll(".menu .content .box .imgBx img");
	var modalImg = document.getElementById("imgModal");
	var modalTitle = document.querySelector(".modal h3");
	for (i in image) {
		image[i].onclick = function () {
			modal.style.display = "block";
			modalImg.src = this.src;
			modalTitle.innerHTML = this.parentElement.nextElementSibling.children[0].innerHTML;
			document.body.classList.add("stopScroll");
			document.getElementById("toTop").style.display = "none";
		}

		var span = document.getElementById("close");

		span.onclick = function () {
			modal.style.display = "none";
			document.body.classList.remove("stopScroll");
			document.getElementById("toTop").style.display = "block";
		}
	}
});


/* -----------------
			Add an Attribute to all images in page
		--------------*/
// var img = document.body.getElementsByTagName("img");
// var i = 0;
// while (i < img.length) {
// 	img[i].setAttribute("loading", "lazy");
// 	i++;
// }