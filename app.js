const mulai =  document.querySelector('.mulai'),
    game = document.querySelector('.supgame'),
    finish = document.querySelector('.finish'),
    hasil = document.querySelector('.hasil'),
    red = document.querySelector('#red'),
    yellow = document.querySelector('#yellow'),
    blue = document.querySelector('#blue'),
    green = document.querySelector('#green'),
    purple = document.querySelector('#purple');

let angka = 0;
hasil.textContent = 'Pikirkan angka dari 1-30';
// document.body.style.overflowY = "hidden"

function start() {
    mulai.classList.add('clear');
    game.classList.remove('clear');
    finish.classList.remove('clear');
    // document.body.style.overflowY = "visible"
}

function proses() {
    if (red.checked) {
        angka += 1;
    }
    if (yellow.checked) {
        angka += 2;
    }
    if (blue.checked) {
        angka += 4;
    }
    if (green.checked) {
        angka += 8;
    }
    if (purple.checked) {
        angka += 16;
    }
    end();
}

function end() {
    mulai.classList.remove('clear');
    game.classList.add('clear');
    finish.classList.add('clear');
    hasil.textContent = "Angka yg pikirkan adalah "+angka;
    angka = 0;
    // document.body.style.overflowY = "hidden"
}