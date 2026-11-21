
// ======================================
// MOBILE NAVIGATION
// ======================================

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {

	const isOpen = navLinks.classList.toggle('open');

	menuToggle.setAttribute(
		'aria-expanded',
		String(isOpen)
	);

	menuToggle.textContent = isOpen ? '✕' : '☰';

});

// Close mobile menu after clicking a link

document.querySelectorAll('.nav-links a').forEach(link => {

	link.addEventListener('click', () => {

		navLinks.classList.remove('open');

		menuToggle.setAttribute(
			'aria-expanded',
			'false'
		);

		menuToggle.textContent = '☰';

	});

});


// ======================================
// MENU CATEGORY FILTER
// ======================================

const filterButtons = document.querySelectorAll('.filter');
const foodCards = document.querySelectorAll('.food-card');

filterButtons.forEach(button => {

	button.addEventListener('click', () => {

		// Remove active class from all buttons

		filterButtons.forEach(item => {
			item.classList.remove('active');
		});

		// Activate selected button

		button.classList.add('active');

		const selected = button.dataset.filter;

		// Show or hide food cards

		foodCards.forEach(card => {

			const shouldShow =
				selected === 'all' ||
				card.dataset.category === selected;

			card.classList.toggle(
				'hidden',
				!shouldShow
			);

		});

	});

});


// ======================================
// ADD TO ORDER INTERACTION
// ======================================

const toast = document.querySelector('.toast');

let toastTimer;

document.querySelectorAll('.add-btn').forEach(button => {

	button.addEventListener('click', () => {

		const itemName = button
			.closest('.food-card')
			.querySelector('h3')
			.textContent;

		toast.textContent =
			`${itemName} added to your order — delicious choice!`;

		toast.classList.add('show');

		clearTimeout(toastTimer);

		toastTimer = setTimeout(() => {

			toast.classList.remove('show');

		}, 2600);

	});

});


// ======================================
// DYNAMIC COPYRIGHT YEAR
// ======================================

document.querySelector('#year').textContent =
	new Date().getFullYear();
