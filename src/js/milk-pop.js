var shake = document.getElementById('milk-pop');

function openShake() {
  shake.style.display = 'block';
}

function closeShake() {
  shake.style.display = 'none';
}

window.onclick = function (event) {
  if (event.target == shake) {
    closeShake();
  }
};
