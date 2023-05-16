let playMusic= new Audio("Music.mp3")
let musicNomusic= localStorage.getItem("music")
if (musicNomusic=='false') {
    playMusic.pause()
} else {
    playMusic.play()
}
const wrongAnswer=()=>{
    $("#wrongModal").modal('show');
}
const dollarSign = () => {
    window.location = "moneylist.html"
}
var countSecond = 30
let alarmMusic=new Audio("alarm.mp3")
const timerCounter = () => {
    let onOff=localStorage.getItem("timer")
    console.log(onOff);
    console.log(typeof(onOff));
    if (onOff=='false') {
        document.querySelector(".timer").classList.add("d-none")
        document.querySelector("#timeCounting").classList.add("d-none")
    } else {
        document.querySelector("#timeCounting").classList.remove("d-none")
        stopWatchInterval = setInterval(() => {
            countSecond--
            timerDisplayer.style.backgroundColor = "yellow"
            document.getElementById("timerDisplayer").innerHTML = `${countSecond}<small>s</small>`
            if (countSecond == 0) {
                let soundNosound=localStorage.getItem("sound")
                if (soundNosound =='true') {
                    alarmMusic.pause()
                }
                clearInterval(stopWatchInterval)
                timerDisplayer.style.backgroundColor = "red"
                function OpenBootstrapPopup() {
                    $("#simpleModal").modal('show');
                }
                OpenBootstrapPopup()
            }
            else if (countSecond < 6) {
                timerDisplayer.style.backgroundColor = "red"
                let soundNosound=localStorage.getItem("sound")
                if (soundNosound=='false') {
                    alarmMusic.pause()
                } else {
                    alarmMusic.play()
                }
            }
        }, 1000)
    }
    loadQuestion()
}
const newGame=()=>{
    localStorage.setItem("moneyEarn",0)
    window.location="question.html"
}
const homePage=()=>{
    window.location="homePage.html"
}
const existBtn=()=>{
    let onOff=localStorage.getItem("timer")
    if (onOff=='true') {
        clearInterval(stopWatchInterval)
        let soundNosound=localStorage.getItem("sound")
        if (soundNosound=='true') {
            alarmMusic.pause()
        }
    } 
}
const continueBtn=()=>{
    let onOff=localStorage.getItem("timer")
    if (onOff=='false') {
        document.querySelector(".timer").classList.add("d-none")
        document.querySelector("#timeCounting").classList.add("d-none")
    } else {
        document.querySelector("#timeCounting").classList.remove("d-none")
        stopWatchInterval = setInterval(() => {
            countSecond--
            timerDisplayer.style.backgroundColor = "yellow"
            document.getElementById("timerDisplayer").innerHTML = `${countSecond}<small>s</small>`
            if (countSecond == 0) {
                let soundNosound=localStorage.getItem("sound")
                if (soundNosound =='true') {
                    alarmMusic.pause()
                }
                clearInterval(stopWatchInterval)
                timerDisplayer.style.backgroundColor = "red"
                function OpenBootstrapPopup() {
                    $("#simpleModal").modal('show');
                }
                OpenBootstrapPopup()
            }
            else if (countSecond < 6) {
                timerDisplayer.style.backgroundColor = "red"
                let soundNosound=localStorage.getItem("sound")
                if (soundNosound=='false') {
                    alarmMusic.pause()
                } else {
                    alarmMusic.play()
                }
            }
        }, 1000)
    }
    let musicNomusic= localStorage.getItem("music")
    if (musicNomusic=='false') {
        playMusic.pause()
    } else {
        playMusic.play()
    }
}
var allQuestions = []
const loadQuestion = () => {
    var randomNumber = Math.floor(Math.random() * 41)
    let getMoneyEarn=localStorage.getItem("moneyEarn")
    document.getElementById("exitMoneyWon").innerText=getMoneyEarn
    document.getElementById("leaveMoneyWon").innerText=getMoneyEarn
    document.getElementById("timeupMoneyWon").innerText=getMoneyEarn
    document.getElementById("wrongAnswerMoneyWon").innerText=getMoneyEarn
    let getFiftyFifty=localStorage.getItem("fifftyFifty")
    if ( getFiftyFifty>0) {
        fiftyFiftyCounter.innerText=1
    }else{
        fiftyFiftyCounter.innerText=0
    }
    let getHint=localStorage.getItem("hint")
    if ( getHint>0) {
        hintCounter.innerText=1
    }else{
        hintCounter.innerText=0
    }
    let getRetry=localStorage.getItem("retry")
    if ( getRetry>0) {
        retryCounter.innerText=1
    }else{
        retryCounter.innerText=0
    }
    const correctAnswerA=()=>{
        answerA.addEventListener("click", () => {
            answerA.style.backgroundColor = "green"
            localStorage.setItem("moneyEarn",150000)
            let soundNosound=localStorage.getItem("sound")
            if (soundNosound=='false') {
                let playSound=new Audio("correctsound.wav")
                playSound.pause()
            } else {
                let playSound=new Audio("correctsound.wav")
                playSound.play()
            }
            window.location="eighthquestion.html"
        })
        answerA.style.backgroundColor = "yellow"
        answerB.style.backgroundColor = "yellow"
        answerC.style.backgroundColor = "yellow"
        answerD.style.backgroundColor = "yellow"
        answerB.addEventListener("click", () => {
            answerB.style.backgroundColor = "red"
           wrongAnswer()
           let soundNosound=localStorage.getItem("sound")
            if (soundNosound=='false') {
                let playSound=new Audio("wrongsound.mp3")
                playSound.pause()
            } else {
                let playSound=new Audio("wrongsound.mp3")
                playSound.play()
            }
            let onOff=localStorage.getItem("timer")
            if (onOff=='true') {
                clearInterval(stopWatchInterval)
            }
        })
        answerC.addEventListener("click", () => {
            answerC.style.backgroundColor = "red"
            wrongAnswer()
            let soundNosound=localStorage.getItem("sound")
            if (soundNosound=='false') {
                let playSound=new Audio("wrongsound.mp3")
                playSound.pause()
            } else {
                let playSound=new Audio("wrongsound.mp3")
                playSound.play()
            }
            let onOff=localStorage.getItem("timer")
            if (onOff=='true') {
                clearInterval(stopWatchInterval)
            }
        })
        answerD.addEventListener("click", () => {
            answerD.style.backgroundColor = "red"
            wrongAnswer()
            let soundNosound=localStorage.getItem("sound")
            if (soundNosound=='false') {
                let playSound=new Audio("wrongsound.mp3")
                playSound.pause()
            } else {
                let playSound=new Audio("wrongsound.mp3")
                playSound.play()
            }
            let onOff=localStorage.getItem("timer")
            if (onOff=='true') {
                clearInterval(stopWatchInterval)
            }
        })
        fiftyFiftyBtn.addEventListener("click", () => {
            if (getFiftyFifty>0) {
                localStorage.setItem("fifftyFifty",0)
                fiftyFiftyCounter.innerText=0
                answerC.style.display="none"
                firstBorderC.style.display="none"
                secondBorderC.style.display="none"
                answerD.style.display="none"
                firstBorderD.style.display="none"
                secondBorderD.style.display="none"
            }
        })
        hintBtn.addEventListener("click",()=>{
            if (getHint>0) {
                localStorage.setItem("hint",0)
                hintCounter.innerText=0
                answerA.style.backgroundColor = "green"
                localStorage.setItem("moneyEarn",150000)
                window.location="eighthquestion.html"
            }
        })
        retryBtn.addEventListener("click",()=>{
            let getRetry=localStorage.getItem("retry")
            if (getRetry>0) {
                localStorage.setItem("retry",0)
                retryCounter.innerText=0
                var retryNumber = Math.floor(Math.random() * 6)
                // retryQuestion for correctAnswerA
                if (retryNumber==0) {
                    let questionObj={
                        question:"What title is given to the son of a king?",
                        choice1:"Prince",
                        choice2:"Princess",
                        choice3:"Slave", 
                        choice4:"Queen"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==1) {
                    let questionObj={
                        question:"Which reindeer has a red nose?",
                        choice1:"Rudolph",
                        choice2:"Barny",
                        choice3:"Dasher", 
                        choice4:"Blitzen"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==2) {
                    let questionObj={
                        question:"What is the capital of Estonia?",
                        choice1:"Talin",
                        choice2:"Kisinev",
                        choice3:"Lublijanna", 
                        choice4:"Bratislava"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==3) {
                    let questionObj={
                        question:"What colour is the Incerdible Hulk when he was angry",
                        choice1:"Green",
                        choice2:"Purple",
                        choice3:"Black", 
                        choice4:"Orange"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==4) {
                    let questionObj={
                        question:"What animal is the symbol for Playboy magazine",
                        choice1:"Bunny",
                        choice2:"Alligator",
                        choice3:"Wartdog", 
                        choice4:"Monkey"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==5) {
                    let questionObj={
                        question:"What country is on the southern border of the U.S",
                        choice1:"Mexico",
                        choice2:"Canada",
                        choice3:"Russia", 
                        choice4:"France"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
            }   
        })
    }
    const correctAnswerB=()=>{
        answerB.addEventListener("click", () => {
            answerB.style.backgroundColor = "green"
            localStorage.setItem("moneyEarn",150000)
            let soundNosound=localStorage.getItem("sound")
            if (soundNosound=='false') {
                let playSound=new Audio("correctsound.wav")
                playSound.pause()
            } else {
                let playSound=new Audio("correctsound.wav")
                playSound.play()
            }
            window.location="eighthquestion.html"
        })
        answerA.style.backgroundColor = "yellow"
        answerB.style.backgroundColor = "yellow"
        answerC.style.backgroundColor = "yellow"
        answerD.style.backgroundColor = "yellow"
        answerA.addEventListener("click", () => {
            answerA.style.backgroundColor = "red"
           wrongAnswer()
           let soundNosound=localStorage.getItem("sound")
            if (soundNosound=='false') {
               let playSound=new Audio("wrongsound.mp3")
               playSound.pause()
            } else {
               let playSound=new Audio("wrongsound.mp3")
               playSound.play()
            }
           let onOff=localStorage.getItem("timer")
            if (onOff=='true') {
               clearInterval(stopWatchInterval)
            }
        })
        answerC.addEventListener("click", () => {
            answerC.style.backgroundColor = "red"
            wrongAnswer()
            let soundNosound=localStorage.getItem("sound")
            if (soundNosound=='false') {
                let playSound=new Audio("wrongsound.mp3")
                playSound.pause()
            } else {
                let playSound=new Audio("wrongsound.mp3")
                playSound.play()
            }
            let onOff=localStorage.getItem("timer")
            if (onOff=='true') {
                clearInterval(stopWatchInterval)
            }
        })
        answerD.addEventListener("click", () => {
            answerD.style.backgroundColor = "red"
            wrongAnswer()
            let soundNosound=localStorage.getItem("sound")
            if (soundNosound=='false') {
                let playSound=new Audio("wrongsound.mp3")
                playSound.pause()
            } else {
                let playSound=new Audio("wrongsound.mp3")
                playSound.play()
            }
            let onOff=localStorage.getItem("timer")
            if (onOff=='true') {
                clearInterval(stopWatchInterval)
            }
        })
        fiftyFiftyBtn.addEventListener("click", () => {
            if (getFiftyFifty>0) {
                localStorage.setItem("fifftyFifty",0)
                fiftyFiftyCounter.innerText=0
                answerC.style.display="none"
                firstBorderC.style.display="none"
                secondBorderC.style.display="none"
                answerD.style.display="none"
                firstBorderD.style.display="none"
                secondBorderD.style.display="none"
            }
        })
        hintBtn.addEventListener("click",()=>{
            localStorage.setItem("hint",0)
            hintCounter.innerText=0
            answerB.style.backgroundColor = "green"
            localStorage.setItem("moneyEarn",150000)
            window.location="eighthquestion.html"
        })
        retryBtn.addEventListener("click",()=>{
            let getRetry=localStorage.getItem("retry")
            if (getRetry>0) {
                localStorage.setItem("retry",0)
                retryCounter.innerText=0
                var retryNumber = Math.floor(Math.random() * 6)
                // retryQuestion for correctAnswerB
                if (retryNumber==0) {
                    let questionObj={
                        question:"What colour is not found in a rainbow?",
                        choice1:"Red",
                        choice2:"Brown",
                        choice3:"Green", 
                        choice4:"Orange"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==1) {
                    let questionObj={
                        question:"What is the first name of former U.S President Bill Clinton's wife?",
                        choice1:"Laura",
                        choice2:"Hillary",
                        choice3:"Nancy", 
                        choice4:"Barbara"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==2) {
                    let questionObj={
                        question:"What number is James Bond associated with?",
                        choice1:"6",
                        choice2:"7",
                        choice3:"8", 
                        choice4:"9"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==3) {
                    let questionObj={
                        question:"What is the largest planet in the solar system",
                        choice1:"Jupiter",
                        choice2:"Mars",
                        choice3:"Saturn", 
                        choice4:"Earth"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==4) {
                    let questionObj={
                        question:"What bullet-proof item of clothing is sometimes worn ny the police force",
                        choice1:"Tie",
                        choice2:"Vest",
                        choice3:"Hat", 
                        choice4:"Pants"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==5) {
                    let questionObj={
                        question:"What is the capital city of China",
                        choice1:"Guatemala",
                        choice2:"Beijing",
                        choice3:"Hanoi", 
                        choice4:"Japan"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
            }   
        })
    }
    const correctAnswerC=()=>{
        answerC.addEventListener("click", () => {
            answerC.style.backgroundColor = "green" 
            localStorage.setItem("moneyEarn",150000)
            let soundNosound=localStorage.getItem("sound")
            if (soundNosound=='false') {
                let playSound=new Audio("correctsound.wav")
                playSound.pause()
            } else {
                let playSound=new Audio("correctsound.wav")
                playSound.play()
            }
            window.location="eighthquestion.html"
        })
        answerA.style.backgroundColor = "yellow"
        answerB.style.backgroundColor = "yellow"
        answerC.style.backgroundColor = "yellow"
        answerD.style.backgroundColor = "yellow"
        answerA.addEventListener("click", () => {
            answerA.style.backgroundColor = "red"
           wrongAnswer()
           let soundNosound=localStorage.getItem("sound")
            if (soundNosound=='false') {
               let playSound=new Audio("wrongsound.mp3")
               playSound.pause()
            } else {
               let playSound=new Audio("wrongsound.mp3")
               playSound.play()
            }
           let onOff=localStorage.getItem("timer")
            if (onOff=='true') {
               clearInterval(stopWatchInterval)
            }
        })
        answerB.addEventListener("click", () => {
            answerB.style.backgroundColor = "red"
            wrongAnswer()
            let soundNosound=localStorage.getItem("sound")
            if (soundNosound=='false') {
                let playSound=new Audio("wrongsound.mp3")
                playSound.pause()
            } else {
                let playSound=new Audio("wrongsound.mp3")
                playSound.play()
            }
            let onOff=localStorage.getItem("timer")
            if (onOff=='true') {
                clearInterval(stopWatchInterval)
            }
        })
        answerD.addEventListener("click", () => {
            answerD.style.backgroundColor = "red"
            wrongAnswer()
            let soundNosound=localStorage.getItem("sound")
            if (soundNosound=='false') {
                let playSound=new Audio("wrongsound.mp3")
                playSound.pause()
            } else {
                let playSound=new Audio("wrongsound.mp3")
                playSound.play()
            }
            let onOff=localStorage.getItem("timer")
            if (onOff=='true') {
                clearInterval(stopWatchInterval)
            }
        })
        fiftyFiftyBtn.addEventListener("click", () => {
            if (getFiftyFifty>0) {
                localStorage.setItem("fifftyFifty",0)
                fiftyFiftyCounter.innerText=0
                answerA.style.display="none"
                firstBorderA.style.display="none"
                secondBorderA.style.display="none"
                answerD.style.display="none"
                firstBorderD.style.display="none"
                secondBorderD.style.display="none"
            }
        })
        hintBtn.addEventListener("click",()=>{
            if (getHint>0) {
                localStorage.setItem("hint",0)
                hintCounter.innerText=0
                answerC.style.backgroundColor = "green"
                localStorage.setItem("moneyEarn",150000)
                window.location="eighthquestion.html"
            }
        })
        retryBtn.addEventListener("click",()=>{
            let getRetry=localStorage.getItem("retry")
            if (getRetry>0) {
                localStorage.setItem("retry",0)
                retryCounter.innerText=0
                var retryNumber = Math.floor(Math.random() * 6)
                // retryQuestion for correctAnswerC
                if (retryNumber==0) {
                    let questionObj={
                        question:"What kind of programming is broadcasted on ESPN?",
                        choice1:"Cartoon",
                        choice2:"Music",
                        choice3:"Sports", 
                        choice4:"Movies"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==1) {
                    let questionObj={
                        question:"What animal is a friend of Shrek?",
                        choice1:"Goat",
                        choice2:"Ant",
                        choice3:"Donkey", 
                        choice4:"Horse"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==2) {
                    let questionObj={
                        question:"Which bird lays the biggest eggs",
                        choice1:"Flamingo",
                        choice2:"Turkey",
                        choice3:"Ostrich", 
                        choice4:"Emu"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==3) {
                    let questionObj={
                        question:"What colour are aliens typically known to be",
                        choice1:"Blue",
                        choice2:"Yellow",
                        choice3:"Green", 
                        choice4:"Red"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==4) {
                    let questionObj={
                        question:"Where there's is a will there's is a ____?",
                        choice1:"Death",
                        choice2:"Grace",
                        choice3:"Way", 
                        choice4:"Door"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==5) {
                    let questionObj={
                        question:"What are dog's commonly known to bury in the backyard?",
                        choice1:"Car",
                        choice2:"Hat",
                        choice3:"Bone", 
                        choice4:"Flower"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
            }   
        })
    }
    const correctAnswerD=()=>{
        answerD.addEventListener("click", () => {
            answerD.style.backgroundColor = "green"
            localStorage.setItem("moneyEarn",150000)
            let soundNosound=localStorage.getItem("sound")
            if (soundNosound=='false') {
                let playSound=new Audio("correctsound.wav")
                playSound.pause()
            } else {
                let playSound=new Audio("correctsound.wav")
                playSound.play()
            }
            window.location="eighthquestion.html"
        })
        answerA.style.backgroundColor = "yellow"
        answerB.style.backgroundColor = "yellow"
        answerC.style.backgroundColor = "yellow"
        answerD.style.backgroundColor = "yellow"
        answerA.addEventListener("click", () => {
            answerA.style.backgroundColor = "red"
           wrongAnswer()
           let soundNosound=localStorage.getItem("sound")
            if (soundNosound=='false') {
               let playSound=new Audio("wrongsound.mp3")
               playSound.pause()
            } else {
               let playSound=new Audio("wrongsound.mp3")
               playSound.play()
            }
           let onOff=localStorage.getItem("timer")
            if (onOff=='true') {
               clearInterval(stopWatchInterval)
            }
        })
        answerB.addEventListener("click", () => {
            answerB.style.backgroundColor = "red"
            wrongAnswer()
            let soundNosound=localStorage.getItem("sound")
            if (soundNosound=='false') {
                let playSound=new Audio("wrongsound.mp3")
                playSound.pause()
            } else {
                let playSound=new Audio("wrongsound.mp3")
                playSound.play()
            }
            let onOff=localStorage.getItem("timer")
            if (onOff=='true') {
                clearInterval(stopWatchInterval)
            }
        })
        answerC.addEventListener("click", () => {
            answerC.style.backgroundColor = "red"
            wrongAnswer()
            let soundNosound=localStorage.getItem("sound")
            if (soundNosound=='false') {
                let playSound=new Audio("wrongsound.mp3")
                playSound.pause()
            } else {
                let playSound=new Audio("wrongsound.mp3")
                playSound.play()
            }
            let onOff=localStorage.getItem("timer")
            if (onOff=='true') {
                clearInterval(stopWatchInterval)
            }
        })
        fiftyFiftyBtn.addEventListener("click", () => {
            if (getFiftyFifty>0) {
                localStorage.setItem("fifftyFifty",0)
                fiftyFiftyCounter.innerText=0
                answerA.style.display="none"
                firstBorderA.style.display="none"
                secondBorderA.style.display="none"
                answerC.style.display="none"
                firstBorderC.style.display="none"
                secondBorderC.style.display="none"
            }
        })
        hintBtn.addEventListener("click",()=>{
            if (getHint>0) {
                localStorage.setItem("hint",0)
                hintCounter.innerText=0
                answerD.style.backgroundColor = "green"
                localStorage.setItem("moneyEarn",150000)
                window.location="eighthquestion.html"
            }
        })
        retryBtn.addEventListener("click",()=>{
            let getRetry=localStorage.getItem("retry")
            if (getRetry>0) {
                localStorage.setItem("retry",0)
                retryCounter.innerText=0
                var retryNumber = Math.floor(Math.random() * 6)
                // retryQuestion for correctAnswerD
                if (retryNumber==0) {
                    let questionObj={
                        question:"What does 'U' stand for in UFO",
                        choice1:"Underwear",
                        choice2:"Ugly",
                        choice3:"Unusual", 
                        choice4:"Unidentified"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==1) {
                    let questionObj={
                        question:"Where is the boat normally driven?",
                        choice1:"Air",
                        choice2:"Land",
                        choice3:"Wind", 
                        choice4:"Lake"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==2) {
                    let questionObj={
                        question:"What is the colour mixture of red and blue",
                        choice1:"Brown",
                        choice2:"Pink",
                        choice3:"Lila", 
                        choice4:"Purple"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==3) {
                    let questionObj={
                        question:"What chemical ia added to the water in swimming pools?",
                        choice1:"Ammonia",
                        choice2:"Salt",
                        choice3:"Quicklime", 
                        choice4:"Chlorine"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==4) {
                    let questionObj={
                        question:"Which ocean's water is the coldest",
                        choice1:"Pacific",
                        choice2:"Indian",
                        choice3:"Atlantic", 
                        choice4:"Arctic"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==5) {
                    let questionObj={
                        question:"Where do you go to board a plane",
                        choice1:"Busstop",
                        choice2:"Market",
                        choice3:"Postoffice", 
                        choice4:"Airport"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
            }   
        })
    }
    if (randomNumber == 0) {
        let questionObj = {
            question: "Winston Churchill was the prime minister of:",
            choice1: "UK",
            choice2: "US",
            choice3: "France",
            choice4: "Russia"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "UK")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 1) {
        let questionObj = {
            question: "Which country is famous for the samba dance's style",
            choice1: "Brazil",
            choice2: "China",
            choice3: "France",
            choice4: "Norway"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Brazil")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 2) {
        let questionObj = {
            question: "What does the 'F' stand for in FBI",
            choice1: "Fedral",
            choice2: "Forever",
            choice3: "Fun",
            choice4: "Fail"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Fedral")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 3) {
        let questionObj = {
            question: "Which of these is not part of the digestive system",
            choice1: "Lungs",
            choice2: "Colon",
            choice3: "Stomach",
            choice4: "Appendix"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Lungs")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 4) {
        let questionObj = {
            question: "Which country is home to the renowned Statue of Liberty",
            choice1: "US",
            choice2: "Spain",
            choice3: "Brazil",
            choice4: "Italy"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "US")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 5) {
        let questionObj = {
            question: "What colour is the letter G in Google's multicolored logo",
            choice1: "Blue",
            choice2: "Green",
            choice3: "Red",
            choice4: "Yellow"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Blue")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 6) {
        let questionObj = {
            question: "What ia the colour of the mixture of blue, green and white?",
            choice1: "Turquoise",
            choice2: "Purple",
            choice3: "Lila",
            choice4: "Pink"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Turquoise")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 7) {
        let questionObj = {
            question: "What vegetable gives Popeye superhuman strength?",
            choice1: "Spinach",
            choice2: "Carrots",
            choice3: "Cabbage",
            choice4: "Lettuce"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Spinach")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 8) {
        let questionObj = {
            question: "What is mail sent via the internet is called?",
            choice1: "E-mail",
            choice2: "I-mail",
            choice3: "C-mail",
            choice4: "D-mail"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "E-mail")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 9) {
        let questionObj = {
            question: "What pink bird will you often see posing, sometimes standing on just one leg",
            choice1: "Flamingo",
            choice2: "Ostrich",
            choice3: "Robin",
            choice4: "Eagle"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Flamingo")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 10) {
        let questionObj = {
            question: "Which wild cat's fur is marked with rosettes",
            choice1: "Leopard",
            choice2: "Lion",
            choice3: "Tiger",
            choice4: "Cougar"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Leopard")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 11) {
        let questionObj = {
            question: "Which vehicles compete in the annual Tour de France",
            choice1: "Cars",
            choice2: "Bicycles",
            choice3: "Tricycles",
            choice4: "Tractors"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Bicycles")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 12) {
        let questionObj = {
            question: "Where was tennis player Rafal Nadal born",
            choice1: "Italy",
            choice2: "Spain",
            choice3: "France",
            choice4: "Germany"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Spain")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 13) {
        let questionObj = {
            question: "What is the colour of the sheep used to describes a person who doesn't fit into a family",
            choice1: "Red",
            choice2: "Black",
            choice3: "Blue",
            choice4: "Pink"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Black")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 14) {
        let questionObj = {
            question: "Which of the following may be ferromagnetic",
            choice1: "Plastic",
            choice2: "Metal",
            choice3: "Wood",
            choice4: "Paper"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Metal")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 15) {
        let questionObj = {
            question: "What colour is traditional wedding dress?",
            choice1: "Red",
            choice2: "White",
            choice3: "Pink",
            choice4: "Black"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "White")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 16) {
        let questionObj = {
            question: "What vegetable do you use to make popcorn?",
            choice1: "Onion",
            choice2: "Corn",
            choice3: "Peas",
            choice4: "Carrots"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Corn")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 17) {
        let questionObj = {
            question: "Which planet is the smallest in the Solar System",
            choice1: "Venus",
            choice2: "Mercury",
            choice3: "Mars",
            choice4: "Earth"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Mercury")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 18) {
        let questionObj = {
            question: "What is the name of McDonald's famous clown?",
            choice1: "Bozo",
            choice2: "Ronald",
            choice3: "Crusty",
            choice4: "Bigmac"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Ronald")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 19) {
        let questionObj = {
            question: "Which of these is not a company that makes make-up?",
            choice1: "l'oreal",
            choice2: "Castrol",
            choice3: "Revlon",
            choice4: "Maybelline"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Castrol")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 20) {
        let questionObj = {
            question: "Which of the following is not typically part of a Lasagna dish?",
            choice1: "Cheese",
            choice2: "Corn",
            choice3: "Pasta",
            choice4: "Meatsauce"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Corn")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 21) {
        let questionObj = {
            question: "What kind of surface would you typically see a diving board hanging over?",
            choice1: "Concrete",
            choice2: "Clay",
            choice3: "Water",
            choice4: "Grass"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Water")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 22) {
        let questionObj = {
            question: "What is the term given to a person who carries a player's bag in golf?",
            choice1: "Dormie",
            choice2: "Bogey",
            choice3: "Caddy",
            choice4: "Mulligan"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Caddy")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 23) {
        let questionObj = {
            question: "Which of these animal is a predator in the food chain",
            choice1: "Rabbit",
            choice2: "Cow",
            choice3: "Cat",
            choice4: "Grasshopper"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Cat")
        correctAnswerC()
    }
    if (randomNumber == 24) {
        let questionObj = {
            question: "Which country has had the most Nobel Prize winners",
            choice1: "England",
            choice2: "Germany",
            choice3: "US",
            choice4: "France"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "US")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 25) {
        let questionObj = {
            question: "Where did the first atomic bomb explode for the first time in Japan?",
            choice1: "Kansai",
            choice2: "Tokyo",
            choice3: "Hiroshima",
            choice4: "Kyoto"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Hiroshima")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 26) {
        let questionObj = {
            question: "Which bird is a traditional symbol of love and peace?",
            choice1: "Parrot",
            choice2: "Eagle",
            choice3: "Dove",
            choice4: "Robin"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Dove")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 27) {
        let questionObj = {
            question: "What form of communication was invented first",
            choice1: "Telephone",
            choice2: "Telegram",
            choice3: "Letter",
            choice4: "Internet"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Letter")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 28) {
        let questionObj = {
            question: "Which of these dances originated in the Caribbean?",
            choice1: "Fox",
            choice2: "Polka",
            choice3: "Mambo",
            choice4: "Waltz"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Mambo")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 29) {
        let questionObj = {
            question: "Which of the following is a native American Tribe?",
            choice1: "Chongquing",
            choice2: "Chetnik",
            choice3: "Cherokee",
            choice4: "Charibis"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 30) {
        let questionObj = {
            question: "Which country has landed humans on the moon",
            choice1: "Japan",
            choice2: "China",
            choice3: "US",
            choice4: "Russia"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "US")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 31) {
        let questionObj = {
            question: "When did man first landed on the moon",
            choice1: "1966",
            choice2: "1967",
            choice3: "1968",
            choice4: "1969"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "1969")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 32) {
        let questionObj = {
            question: "Which European country is home to the airline Alitalia",
            choice1: "France",
            choice2: "Portugal",
            choice3: "Spain",
            choice4: "Italy"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Italy")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 33) {
        let questionObj = {
            question: "What colour are rubies?",
            choice1: "Black",
            choice2: "White",
            choice3: "Blue",
            choice4: "Red"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Red")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 34) {
        let questionObj = {
            question: "What do geese and other species of birds do between breeding and wintering grounds",
            choice1: "Mate",
            choice2: "Hibernate",
            choice3: "Imitate",
            choice4: "Migrate"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Migrate")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 35) {
        let questionObj = {
            question: "Which hard white materials forms the tusks of the elephants?",
            choice1: "Iron",
            choice2: "Pearl",
            choice3: "Quartz",
            choice4: "Ivory"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Ivory")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 36) {
        let questionObj = {
            question: "Water is constituted from hydrogen and which other element?",
            choice1: "Nitrogen",
            choice2: "Helium",
            choice3: "Carbon",
            choice4: "Oxygen"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Oxygen")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 37) {
        let questionObj = {
            question: "What title of address is used for an unmarried Spanish woman?",
            choice1: "Mademoisele",
            choice2: "Signorina",
            choice3: "Fraulein",
            choice4: "Senorita"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Senorita")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 38) {
        let questionObj = {
            question: "What's is the World's most popular spice?",
            choice1: "Cinnamon",
            choice2: "Oregano",
            choice3: "Basil",
            choice4: "Pepper"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 39) {
        let questionObj = {
            question: "What is the highest female voice",
            choice1: "Bass",
            choice2: "Contralto",
            choice3: "Tenor",
            choice4: "Soprano"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Soprano")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 40) {
        let questionObj = {
            question: "What is the unit of currency in Mexico",
            choice1: "Peseta",
            choice2: "Dollar",
            choice3: "Dinar",
            choice4: "Peso"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Peso")
        console.log(findAnswer);
        correctAnswerD()
    }
}
