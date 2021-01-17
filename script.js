const character = document.getElementById('player');

function jump() {
  if (character.classList != 'jump') {
    character.classList.add('jump');

    setTimeout(function () {
      character.classList.remove('jump');
    }, 300);
  }
}

document.addEventListener('keydown', function (event) {
  jump();
});
