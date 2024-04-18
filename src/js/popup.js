var popup = document.getElementById('popup');

function openPopup() {
  popup.classList.add('open-popup');
}

function closePopup() {
  popup.classList.remove('open-popup');
}

document.addEventListener('click', function (event) {
  if (event.target === popup) {
    closePopup();
  }
});
