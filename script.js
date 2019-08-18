
function play(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('hit');
};

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('hit');
}


const keys = document.querySelectorAll('.key');
keys.forEach(item => item.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', play);
