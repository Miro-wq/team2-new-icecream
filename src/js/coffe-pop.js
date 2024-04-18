var modal = document.getElementById('coffee-pop');

function openModal() {
  modal.style.display = 'block';
  modal.classList.add('fade-in');
}

function closeModal() {
  modal.style.display = 'none';
}
document.addEventListener('click', function (event) {
  if (event.target === modal) {
    closeModal();
  }
});
