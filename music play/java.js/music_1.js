let audios = document.querySelectorAll('.audios');
let urls = [];
let index_list = [];
let right = document.getElementById('right'),
    counter = 0;

let circul = document.querySelector('.circul');
let play = document.querySelector('.play');
let player_b_1 = document.querySelector('.player_b_1');
let player_b = document.querySelector('.player_b');
let music_player_a = document.querySelector('.music_player_a');
let active_audio = document.querySelector('.active_audio');
let img_indext = document.querySelectorAll('.img_indext');
let buss = document.querySelectorAll('.buss');
let text = document.querySelectorAll('.text');
let text_logo = document.querySelector('.text_logo');
let left = document.querySelector('.left');


audios.forEach((item, index) => {
    urls.push(item.src)
    index_list.push(index)
})

right.addEventListener('click', () => {
    removePause()
     func()
    counter++
    if (index_list.includes(counter)) {
    } else {
        active_audio.src = urls[0]
        counter = 0
    }

})

left.addEventListener('click', () => {
     func()
    buss.forEach(item => {
        item.src = "iconka/png-clipart-youtube-play-button-computer-icons-youtube-angle-text.png"
    })
    counter--
    if (index_list.includes(counter)) {
    } else {
        active_audio.src = urls[9]
        counter = 9
    }

})

function removePause() {
    buss.forEach(item => {
        item.src = "iconka/png-clipart-youtube-play-button-computer-icons-youtube-angle-text.png"
    })
}

play.addEventListener("click", () => {
    if (active_audio.paused) {
        statusPlay()
    } else {
        statusPaused()
    }

})
active_audio.addEventListener('timeupdate', (e) => {
    const {duration, currentTime} = e.srcElement
    let foiz = (currentTime / duration) * 100;
    if (active_audio.ended) {
         func()
        counter++
        console.log(counter)
        if (index_list.includes(counter)) {
        } else {
            active_audio.src = urls[0]
            counter = 0
        }

    }


    player_b_1.style.width = `${foiz}%`
})
player_b.addEventListener('click', (event) => {
    let width = player_b.clientWidth
    let clicked = event.offsetX
    let duration = active_audio.duration

    active_audio.currentTime = (clicked / width) * duration
})

function statusPaused() {
    active_audio.pause()
    play.src = "iconka/play-solid.svg"

    buss[counter].src = "iconka/png-clipart-youtube-play-button-computer-icons-youtube-angle-text.png"
    circul.classList.remove('active_rotate')
    music_player_a.classList.remove('active')
}

function statusPlay() {
    play.src = "iconka/pause-solid.svg"
    active_audio.play()
    circul.classList.add('active_rotate')
    buss[counter].src = "iconka/button-pause-stop-icon-symbol-79179.png"
    music_player_a.classList.add('active')
}

buss.forEach((item, index) => {
    item.addEventListener('click', () => {
        removePause()
        counter = index
        text_logo.innerHTML = text[counter].innerHTML;
        active_audio.src = urls[counter];
        circul.src = img_indext[counter].src;
        statusPlay()
    })

})

function func() {
    text_logo.innerHTML = text[counter].innerHTML;
    active_audio.src = urls[counter];
    circul.src = img_indext[counter].src;
    statusPlay()
}
