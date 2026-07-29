const modalOverlay = document.querySelector('.modal-overlay');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const modalOpenBtn = document.querySelector('.hero-btn');

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
