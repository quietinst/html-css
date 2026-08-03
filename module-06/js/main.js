// Modal variables
const modalOverlay = document.querySelector('.modal-overlay');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const modalOpenBtn = document.querySelector('.hero-btn');

// Mobile Menu variables
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuBtn = document.querySelector('.menu-btn');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close-btn');

// Modal
function openModal() {
  modalOverlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('is-open');
  document.body.style.overflow = '';
}

modalOpenBtn.addEventListener('click', openModal);

modalCloseBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', function (event) {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && modalOverlay.classList.contains('is-open')) {
    closeModal();
  }
});

// Mobile Menu
function openMobileMenu() {
  mobileMenu.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  mobileMenu.classList.remove('is-open');
  document.body.style.overflow = '';
}

mobileMenuBtn.addEventListener('click', openMobileMenu);

mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);
