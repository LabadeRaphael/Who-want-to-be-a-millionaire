let playMusic= new Audio("Music.mp3")
const playBtn = () => {
    window.location = "question.html"
    playMusic.play()

}
const background=()=>{
    localStorage.setItem("music",true)
    localStorage.setItem("sound",true)
    localStorage.setItem("timer",true)
}
let checkMusic=false
const musicBtn=()=>{
    checkMusic = !checkMusic
    console.log( checkMusic);
    if ( checkMusic) {
        localStorage.setItem("music",false)
        musicId.src = "nomusic.jpeg"
        playMusic.pause()
    }
    else {
        playMusic.play()
        musicId.src = "music.png"
        localStorage.setItem("music",true)
    }
}
let checkSound=false
const soundBtn=()=>{
    checkSound = !checkSound
    console.log(checkSound);
    if ( checkSound) {
        localStorage.setItem("sound",false)
        soundId.src = "nosound.jpg"
    }
    else {
        soundId.src = "sound.png"
        localStorage.setItem("sound",true)
    }
}
let checkBtn=false
const stopWatchBtn = () => {
    checkBtn = !checkBtn
    console.log(checkBtn);
    if (checkBtn) {
        localStorage.setItem("timer",false)
        imageId.src = "images.jpg"
    }
    else {
        imageId.src = "download.jpg"
        localStorage.setItem("timer",true)
    }
}