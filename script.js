const sounds = document.querySelectorAll('[data-sound]');
const pads = document.querySelectorAll('[data-pad]');
const visual = document.getElementById('visual');
const colors = [
    '#60d394',
    '#d36060',
    '#c06cd3',
    '#d3d160',
    '#6860d9',
    '#60b2d3'
];

pads.forEach((pad, index) => {
    pad.addEventListener('click', () => {
        sounds[index].currentTime = 0;
        sounds[index].play();
        createBubble(index);
    });
});

function createBubble(index) {
    const bubble = document.createElement('div');
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump 1s ease';
    bubble.addEventListener('animationened', () => {
        visual.removeChild(this);
    });
}