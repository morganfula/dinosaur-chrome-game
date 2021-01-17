const character = document.getElementById('player');
const object = document.getElementById('object');

console.log(object);

function jump() {
  if (character.classList != 'jump') {
    character.classList.add('jump');

    setTimeout(function () {
      character.classList.remove('jump');
    }, 300);
  }
}

let isAlive = setInterval(() => {
  // get current character Y position
  let playerTop = parseInt(
    window.getComputedStyle(character).getPropertyValue('top')
  );

  // get current object X position
  let objectLeft = parseInt(
    window.getComputedStyle(object).getPropertyValue('left')
  );

  // detect position
  if (objectLeft < 50 && objectLeft > 0 && playerTop >= 140) {
    // collision
    alert('Game Over!');
  }
}, 10);

document.addEventListener('keydown', function (event) {
  jump();
});
