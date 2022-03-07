window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // for invalid key press 

    audio.currentTime = 0; //for playing continuously
    audio.play();
   
    key.classList.add('play');
    
    setTimeout(() => {
        key.classList.remove('play');
    }, 80);
})