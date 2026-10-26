
let image = document.getElementById('image');
let music = document.getElementById('music');
let btnReset = document.getElementById('btn_reset');
// let btnPlay = document.getElementById('btnPlay');
// let btnPause = document.getElementById('btnPause');

function playPause(){

    if (music.paused) {
            image.classList.add("gira");
            image.classList.remove("pausa");
            music.play();
             btnReset.disabled = false;   // musica in riproduzione
        } else {
            image.classList.add("pausa");
            music.pause();
            btnReset.disabled = true;    // musica in pausa
        }
    
};




function reset() {
    music.pause();
    music.currentTime = 0;
    image.classList.remove("gira", "pausa");
    btnReset.disabled = true;
}



