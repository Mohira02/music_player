let play = document.querySelector('.play');
let audio = document.querySelector('audio');
let circul = document.querySelector('.circul');
let music_1_a_1 = document.querySelector('.music_1_a_1');
// let music = document.querySelector('.music');
let music_1_a_1_a = document.querySelector('.music_1_a_1_a');
let music_1_a_1_a_1 = document.querySelector('.music_1_a_1_a_1');
let text = document.querySelector('.text');


play.addEventListener("click", () => {
    if (audio.paused) {
        statusPlay()
    } else {
        statusPaused()
    }

})
audio.addEventListener('timeupdate', (e) => {
    const {duration, currentTime} = e.srcElement
    let foiz = (currentTime / duration) * 100;
    if (audio.ended) {
        counter++
        if (counter === 0) {
            UpadsteMusicDate(song1)
        } else if (counter === 1) {
            UpadsteMusicDate(song2)
        } else if (counter === 2) {
            UpadsteMusicDate(song3)
        } else if (counter === 3) {
            UpadsteMusicDate(song4)
        } else {
            UpadsteMusicDate(song1)
            counter = 0
        }
        statusPlay()
    }

    music_1_a_1_a_1.style.width = `${foiz}%`
})
music_1_a_1_a.addEventListener('click', (event) => {
    let width = music_1_a_1_a.clientWidth
    let clicked = event.offsetX
    let duration = audio.duration

    audio.currentTime = (clicked / width) * duration
})

const song1 = [['can we kiss forever'], 'music/Andro%20-%20Болен%20Твоей%20Улыбкой.mp3', 'galiriya/32328.png']
song2 = [['Kuzmunchogim'], 'music/doston-ergashev-kozmunchogim_(uzhits.net).mp3', 'galiriya/32328.png']
song3 = [["jony and music"], 'music/Jony%20&%20Andro%20-%20Мадам.mp3', 'galiriya/32328.png']
song4 = [['Andiro../'], 'music/Andro%20-%20Как%20Не%20Любить.mp3', 'galiriya/32328.png']


let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let counter = 0


function statusPaused() {
    audio.pause()
    play.src = "iconka/play-solid.svg"
    circul.classList.remove('active_rotate')
    music_1_a_1.classList.remove('active')
}

function statusPlay() {
    play.src = "iconka/pause-solid.svg"
    audio.play()
    circul.classList.add('active_rotate')
    music_1_a_1.classList.add('active')
}

next.addEventListener('click', () => {
    counter++
    if (counter === 0) {
        UpadsteMusicDate(song1)
    } else if (counter === 1) {
        UpadsteMusicDate(song2)
    } else if (counter === 2) {
        UpadsteMusicDate(song3)
    } else if (counter === 3) {
        UpadsteMusicDate(song4)
    } else {
        UpadsteMusicDate(song1)
        counter = 1
    }
    statusPlay()
})
prev.addEventListener('click', () => {
    counter--
    if (counter === 3) {
        UpadsteMusicDate(song4)
    } else if (counter === 2) {
        UpadsteMusicDate(song3)
    } else if (counter === 1) {
        UpadsteMusicDate(song2)
    } else if (counter === 0) {
        UpadsteMusicDate(song1)
    } else {
        counter = 3
        UpadsteMusicDate(song4)
    }
    statusPlay()
})

function UpadsteMusicDate(song) {
    circul.src = song[2];
    audio.src = song[1];
}