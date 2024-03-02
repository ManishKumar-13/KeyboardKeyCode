

const keyPressSound = new Audio('gun_shot.mp3');
const ball = document.getElementById('ball');

function handleKeyDown(event) {

    if (event.keyCode === 32) {

        // Prevent default behavior of spacebar (scrolling the page)
        event.preventDefault();

        // Play the key press sound
        keyPressSound.currentTime = 0;
        keyPressSound.play();

        // Update the displayed key info
        document.getElementById('pressed-key').innerHTML = 'You pressed <span class="green-text">Spacebar</span>'
        document.getElementById('keycode').textContent = event.keyCode;
        document.querySelector('.keycode').style.display = 'block';
    } else {

        // Restart the audio
        keyPressSound.currentTime = 0;
        keyPressSound.play();

        document.getElementById('pressed-key').innerHTML = 'You pressed <span class="green-text">' + event.key + '</span>'
        document.getElementById('keycode').textContent = event.keyCode;
        document.querySelector('.keycode').style.display = 'block';
    }
}

document.addEventListener('keydown', handleKeyDown);