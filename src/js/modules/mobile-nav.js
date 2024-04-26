function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.nav-btn');
	const sideBar = document.querySelector('.side-bar');
	const user = document.querySelector('.user');
	const navMenu = document.querySelector('.navigation');
	const menuIcon = document.querySelector('.nav-btn__icon');

	menuIcon.classList.add('nav-icon--active');

	navBtn.onclick = function () {
		sideBar.classList.toggle('side-bar--hide');
		navMenu.classList.toggle('navigation--hide');
		user.classList.toggle('user--hide');
		menuIcon.classList.toggle('nav-icon--active');
		// document.body.classList.toggle('no-scroll');
	};

	window.addEventListener("resize", function () {
		if (window.innerWidth > 1439) {
			sideBar.classList.remove("side-bar--hide")
			navMenu.classList.remove('navigation--hide');
			user.classList.remove('user--hide');
			menuIcon.classList.add('nav-icon--active');
		}
		;
	});
}

export default mobileNav;
