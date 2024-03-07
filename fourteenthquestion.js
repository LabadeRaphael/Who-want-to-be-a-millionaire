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
    let getMoneyEarn=JSON.parse(localStorage.getItem("moneyEarn"))
    document.getElementById("exitMoneyWon").innerText=`${getMoneyEarn.toLocaleString("en-US", {style:"currency",currency:"USD"})}`
    document.getElementById("leaveMoneyWon").innerText=`${getMoneyEarn.toLocaleString("en-US", {style:"currency",currency:"USD"})}`
    document.getElementById("timeupMoneyWon").innerText=`${getMoneyEarn.toLocaleString("en-US", {style:"currency",currency:"USD"})}`
    document.getElementById("wrongAnswerMoneyWon").innerText=`${getMoneyEarn.toLocaleString("en-US", {style:"currency",currency:"USD"})}`
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
            localStorage.setItem("moneyEarn",20000000)
            let soundNosound=localStorage.getItem("sound")
            if (soundNosound=='false') {
                let playSound=new Audio("correctsound.wav")
                playSound.pause()
            } else {
                let playSound=new Audio("correctsound.wav")
                playSound.play()
            }
            window.location="fourteenthquestion.html"
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
                answerB.style.display="none"
                firstBorderB.style.display="none"
                secondBorderB.style.display="none"
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
                localStorage.setItem("moneyEarn",20000000)
                window.location="fourteenthquestion.html"
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
                        question:"In the Marxist theory, those who live by selling their labor are called",
                        choice1:"Proletariats",
                        choice2:"Bourgeoisie",
                        choice3:"Feudal", 
                        choice4:"Slaves"
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
                        question:"Which of the following is NOT an acceptable means of achieving democracy?",
                        choice1:"Riots",
                        choice2:"Initiative",
                        choice3:"Referendum", 
                        choice4:"Recall"
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
                        question:"The branch of government responsible for implementing laws is the",
                        choice1:"Executives",
                        choice2:"Legislature",
                        choice3:"Police", 
                        choice4:"Judiciary"
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
                        question:"In a democracy, sovereignty is vested in",
                        choice1:"Community",
                        choice2:"Legislature",
                        choice3:"State", 
                        choice4:"Judges"
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
                        question:"What does the white color in the Nigerian flag stand for?",
                        choice1:"Peace",
                        choice2:"War",
                        choice3:"Strength", 
                        choice4:"Dignity"
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
                        question:"What was the first capital city in Nigeria?",
                        choice1:"Calabar",
                        choice2:"Enugun",
                        choice3:"Lagos", 
                        choice4:"Abuja"
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
            localStorage.setItem("moneyEarn",20000000)
            let soundNosound=localStorage.getItem("sound")
            if (soundNosound=='false') {
                let playSound=new Audio("correctsound.wav")
                playSound.pause()
            } else {
                let playSound=new Audio("correctsound.wav")
                playSound.play()
            }
            window.location="fourteenthquestion.html"
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
                answerA.style.display="none"
                firstBorderA.style.display="none"
                secondBorderA.style.display="none"
                answerD.style.display="none"
                firstBorderD.style.display="none"
                secondBorderD.style.display="none"
            }
        })
        hintBtn.addEventListener("click",()=>{
            localStorage.setItem("hint",0)
            hintCounter.innerText=0
            answerB.style.backgroundColor = "green"
            localStorage.setItem("moneyEarn",20000000)
            window.location="fourteenthquestion.html"
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
                        question:"When did Coronavirus get to Nigeria?",
                        choice1:"2019",
                        choice2:"2020",
                        choice3:"2018", 
                        choice4:"2021"
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
                        question:"World cup of 2014 was won by which National Team",
                        choice1:"Poland",
                        choice2:"Germany",
                        choice3:"France", 
                        choice4:"Brazil"
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
                        question:"Which team failed to defend it's World Cup title in the World Cup of 2014",
                        choice1:"Argentina",
                        choice2:"Spain",
                        choice3:"Portugal", 
                        choice4:"Brazil",
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
                        question:"Who won BallonD'or of 2014",
                        choice1:"Messi",
                        choice2:"Ronaldo",
                        choice3:"Ronaldinho", 
                        choice4:"Pele"
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
                        question:"Who among the following players score highest number of goals in Football world cup",
                        choice1:"Messi",
                        choice2:"Klose",
                        choice3:"Ronaldo", 
                        choice4:"Pele"
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
                        question:"What is the name of the contry that has won the Olympic Gold Medal in football three times?",
                        choice1:"England",
                        choice2:"Hungary",
                        choice3:"Wales", 
                        choice4:"Poland"
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
            localStorage.setItem("moneyEarn",20000000)
            let soundNosound=localStorage.getItem("sound")
            if (soundNosound=='false') {
                let playSound=new Audio("correctsound.wav")
                playSound.pause()
            } else {
                let playSound=new Audio("correctsound.wav")
                playSound.play()
            }
            window.location="fourteenthquestion.html"
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
                answerB.style.display="none"
                firstBorderB.style.display="none"
                secondBorderB.style.display="none"
            }
        })
        hintBtn.addEventListener("click",()=>{
            if (getHint>0) {
                localStorage.setItem("hint",0)
                hintCounter.innerText=0
                answerC.style.backgroundColor = "green"
                localStorage.setItem("moneyEarn",20000000)
                window.location="fourteenthquestion.html"
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
                        question:"Federation cup in India is associated with the game of?",
                        choice1:"Handball",
                        choice2:"Cricket",
                        choice3:"Football", 
                        choice4:"Basketball"
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
                        question:"The Bandodkar Gold Trophy is associated with the game of?",
                        choice1:"Cricket",
                        choice2:"Volleyball",
                        choice3:"Football", 
                        choice4:"Basketball"
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
                        question:"21st FIFA World Cup, 2018 was held in which of the following countries?",
                        choice1:"Qartar",
                        choice2:"Mexico",
                        choice3:"Russia", 
                        choice4:"Argentina"
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
                        question:"How many teams participated in FIFA World Cup organised in Russia from 14 June -15 July 2018?",
                        choice1:"28",
                        choice2:"30",
                        choice3:"32", 
                        choice4:"26"
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
                        question:"The FIFA Football World Cup in 2022 was organised in?",
                        choice1:"Argentina",
                        choice2:"Brazil",
                        choice3:"Qatar", 
                        choice4:"Mexico"
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
                        question:"Jurgen Klopp has managed two clubs in Germany, Borussia Dortmund and - can you name the other?",
                        choice1:"Stuggart",
                        choice2:"Leverkusen",
                        choice3:"Mainz", 
                        choice4:"Munich"
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
            localStorage.setItem("moneyEarn",20000000)
            let soundNosound=localStorage.getItem("sound")
            if (soundNosound=='false') {
                let playSound=new Audio("correctsound.wav")
                playSound.pause()
            } else {
                let playSound=new Audio("correctsound.wav")
                playSound.play()
            }
            window.location="fourteenthquestion.html"
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
            }
            secondBorderC.style.display="none"
        })
        hintBtn.addEventListener("click",()=>{
            if (getHint>0) {
                localStorage.setItem("hint",0)
                hintCounter.innerText=0
                answerD.style.backgroundColor = "green"
                localStorage.setItem("moneyEarn",20000000)
                window.location="fourteenthquestion.html"
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
                        question:"With 260 goals, who is the Premier League's all-time top scorer?",
                        choice1:"Torres",
                        choice2:"Ronaldo",
                        choice3:"Augero", 
                        choice4:"Shearer"
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
                        question:"Which team won the first Premier League title?",
                        choice1:"Chelsea",
                        choice2:"Liverpool",
                        choice3:"Arsenal", 
                        choice4:"Man.u"
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
                        question:"How many clubs competed in the inaugural Premier League season?",
                        choice1:"16",
                        choice2:"32",
                        choice3:"18", 
                        choice4:"22"
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
                        question:"Which yera did Pierre-Emerick Aubameyang, Mohamed Salah and Sadio Mane shared the Premier League Golden Boot ",
                        choice1:"2022",
                        choice2:"2021",
                        choice3:"2017", 
                        choice4:"2019"
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
                        question:"The fastest goal scored in Premier League history came in 7.69 seconds. Who scored it?",
                        choice1:"Mane",
                        choice2:"Salah",
                        choice3:"Jota", 
                        choice4:"Long"
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
                        question:"Which country won the first ever World Cup in 1930?",
                        choice1:"France",
                        choice2:"Argentina",
                        choice3:"Brazil", 
                        choice4:"Uruguay"
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
            question: "Which country has won the most World Cups?",
            choice1: "Brazil",
            choice2: "France",
            choice3: "Italy",
            choice4: "Argentina"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerA()
    }
    if (randomNumber == 1) {
        let questionObj = {
            question: "Which country has appeared in three World Cup finals, but never won the competition?",
            choice1: "Netherlands",
            choice2: "Uruguay",
            choice3: "Qatar",
            choice4: "Nigeria"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerA()
    }
    if (randomNumber == 2) {
        let questionObj = {
            question: "which World Cup will be hosted among these three different countries United States, Canada and Mexico    ?",
            choice1: "2026",
            choice2: "2034",
            choice3: "2030",
            choice4: "2038"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerA()
    }
    if (randomNumber == 3) {
        let questionObj = {
            question: "In which World Cup did Diego Maradona score his infamous 'Hand of God' goal?",
            choice1: "1986",
            choice2: "1990",
            choice3: "1982",
            choice4: "1994"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerA()
    }
    if (randomNumber == 4) {
        let questionObj = {
            question: "Who won the Runners-up title of FIFA Football World Cup 2018",
            choice1: "Croatia",
            choice2: "Brazil",
            choice3: "France",
            choice4: "Germany"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerA()
    }
    if (randomNumber == 5) {
        let questionObj = {
            question: "Who won the FIFA PLayer of the year 2019",
            choice1: "Messi",
            choice2: "Ronaldo",
            choice3: "Mbappe",
            choice4: "Modric"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerA()
    }
    if (randomNumber == 6) {
        let questionObj = {
            question: "Which one of the following countries was thw winner of FIFA confederations cup 2017",
            choice1: "Germany",
            choice2: "Brazil",
            choice3: "Poland",
            choice4: "England"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerA()
    }
    if (randomNumber == 7) {
        let questionObj = {
            question: "Which country beat defending champions Afganistan to lift the South Asian Football Federations Cup on 3rd January 2016",
            choice1: "India",
            choice2: "Iran",
            choice3: "Qatar",
            choice4: "China"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerA()
    }
    if (randomNumber == 8) {
        let questionObj = {
            question: "Black peral is related to which of the following sports?",
            choice1: "Soccer",
            choice2: "Handball",
            choice3: "Basketball",
            choice4: "Cricket"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerA()
    }
    if (randomNumber == 9) {
        let questionObj = {
            question: "when was first official intenational football match was played",
            choice1: "1872",
            choice2: "1873",
            choice3: "1874",
            choice4: "1875"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerA()
    }
    if (randomNumber == 10) {
        let questionObj = {
            question: "Against which country india played first official match in 1948 London Olympics",
            choice1: "France",
            choice2: "Spain",
            choice3: "Italy",
            choice4: "China"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerA()
    }
    if (randomNumber == 11) {
        let questionObj = {
            question: "FIFA was founded in?",
            choice1: "Qatar",
            choice2: "France",
            choice3: "Mexico",
            choice4: "Brazil"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerB()
    }
    if (randomNumber == 12) {
        let questionObj = {
            question: "In which year was the Mohun Bagan club of football founded?",
            choice1: "1879",
            choice2: "1889",
            choice3: "1890",
            choice4: "1899"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerB()
    }
    if (randomNumber == 13) {
        let questionObj = {
            question: "Which of the following countries won the Women's football world cup 2015",
            choice1: "Nigeria",
            choice2: "America",
            choice3: "India",
            choice4: "France"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerB()
    }
    if (randomNumber == 14) {
        let questionObj = {
            question: "English rock star Elton John was twice the owner of which football club?",
            choice1: "Arsenal",
            choice2: "Watford",
            choice3: "Everton",
            choice4: "Leeds"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerB()
    }
    if (randomNumber == 15) {
        let questionObj = {
            question: "Which Portuguese team did Ronaldo play for before signing for Manchester United?",
            choice1: "Porto",
            choice2: "Sporting",
            choice3: "Celtic",
            choice4: "Benfica"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerB()
    }
    if (randomNumber == 16) {
        let questionObj = {
            question: "Ronaldo is synonymous with the No.7, but what other number did he wear at Real Madrid?",
            choice1: "11",
            choice2: "9",
            choice3: "10",
            choice4: "8"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerB()
    }
    if (randomNumber == 17) {
        let questionObj = {
            question: "Messi famously retired from international duty in which year before reversing his decision?",
            choice1: "2015",
            choice2: "2016",
            choice3: "2017",
            choice4: "2018"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerB()
    }
    if (randomNumber == 18) {
        let questionObj = {
            question: "Messi wore the No.30 at the start of his Barca career and is now No.10. What other number has he worn for the club?",
            choice1: "6",
            choice2: "19",
            choice3: "18",
            choice4: "9"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerB()
    }
    if (randomNumber == 19) {
        let questionObj = {
            question: "Ronaldo helped Portugal win the European Championship in which year?",
            choice1: "2015",
            choice2: "2016",
            choice3: "2017",
            choice4: "2018"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerB()
    }
    if (randomNumber == 20) {
        let questionObj = {
            question: "Which team was the first from the UK to win the European Cup?",
            choice1: "Liverpol",
            choice2: "Celtic",
            choice3: "Blackpool",
            choice4: "Everton"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerB()
    }
    if (randomNumber == 21) {
        let questionObj = {
            question: "Which is the Nigerian State with the largest land mass",
            choice1: "Enugun",
            choice2: "Rivers",
            choice3: "Niger",
            choice4: "Yobe"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerC()
    }
    if (randomNumber == 22) {
        let questionObj = {
            question: "Which is the Nigerian State with the greatest number of local government areas?",
            choice1: "Abia",
            choice2: "Yobe",
            choice3: "Kano",
            choice4: "Kastina"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerC()
    }
    if (randomNumber == 23) {
        let questionObj = {
            question: "When was the Men's World championship first held?",
            choice1: "1951",
            choice2: "1952",
            choice3: "1950",
            choice4: "1954"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerC()
    }
    if (randomNumber == 24) {
        let questionObj = {
            question: "When was Women's Basketball included as an Olympics event?",
            choice1: "1974",
            choice2: "1975",
            choice3: "1976",
            choice4: "1977"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerC()
    }
    if (randomNumber == 25) {
        let questionObj = {
            question: "When was Basketball included in the Olympics?",
            choice1: "1934",
            choice2: "1935",
            choice3: "1936",
            choice4: "1937"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerC()
    }
    if (randomNumber == 26) {
        let questionObj = {
            question: "When was FIBA (International Amateur Basketball Federation) formed?",
            choice1: "1930",
            choice2: "1931",
            choice3: "1932",
            choice4: "1933"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerC()
    }
    if (randomNumber == 27) {
        let questionObj = {
            question: "When was the Junior National Championships started",
            choice1: "1963",
            choice2: "1964",
            choice3: "1965",
            choice4: "1966"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerC()
    }
    if (randomNumber == 28) {
        let questionObj = {
            question: "How many points are awarded for a basket?",
            choice1: "1",
            choice2: "5",
            choice3: "2",
            choice4: "4"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerC()
    }
    if (randomNumber == 29) {
        let questionObj = {
            question: "Dunk Shot is related to which game",
            choice1: "Cricket",
            choice2: "Handball",
            choice3: "Basketball",
            choice4: "Football"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerC()
    }
    if (randomNumber == 30) {
        let questionObj = {
            question: "Who is the host country of FIBA  Women's Basketball World Cup 2022?",
            choice1: "China",
            choice2: "Morroco",
            choice3: "Australia",
            choice4: "Japan"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerC()
    }
    if (randomNumber == 31) {
        let questionObj = {
            question: "FC Cologne have which animal on their club crest?",
            choice1: "Snake",
            choice2: "Leopard",
            choice3: "Lion",
            choice4: "Goat"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerD()
    }
    if (randomNumber == 32) {
        let questionObj = {
            question: "In which year did the European Championship expand from 16 teams to 24 teams?",
            choice1: "2014",
            choice2: "2015",
            choice3: "2017",
            choice4: "2016",
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerD()
    }
    if (randomNumber == 33) {
        let questionObj = {
            question: "In which year was the first European Championship held?",
            choice1: "1958",
            choice2: "1959",
            choice3: "1961",
            choice4: "1960"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerD()
    }
    if (randomNumber == 34) {
        let questionObj = {
            question: "Which is the Nigerian state with the highest population",
            choice1: "Lagos",
            choice2: "Plateau",
            choice3: "Niger",
            choice4: "Kano"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerD()
    }
    if (randomNumber == 35) {
        let questionObj = {
            question: "What is the name of South African currency",
            choice1: "Kwacha ",
            choice2: "Nakfa",
            choice3: "Dobra",
            choice4: "Rand"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerD()
    }
    if (randomNumber == 36) {
        let questionObj = {
            question: "How many states are in Northern Nigeria",
            choice1: "16",
            choice2: "15",
            choice3: "17",
            choice4: "19"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerD()
    }
    if (randomNumber == 37) {
        let questionObj = {
            question: "How many states are in southern Nigeria",
            choice1: "20",
            choice2: "19",
            choice3: "18",
            choice4: "17"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerD()
    }
    if (randomNumber == 38) {
        let questionObj = {
            question: "When was naira and kobo introduced in Nigeria?",
            choice1: "1970",
            choice2: "1971",
            choice3: "1972",
            choice4: "1973"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerD()
    }
    if (randomNumber == 39) {
        let questionObj = {
            question: "Which state in Nigeria has the least number of local government areas",
            choice1: "Kano",
            choice2: "Sokoto",
            choice3: "Kogi",
            choice4: "Bayelsa"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerD()
    }
    if (randomNumber == 40) {
        let questionObj = {
            question: "Which country won the hosting rights of the 2019 African Cup Of Nations?",
            choice1: "Morroco",
            choice2: "Senegal",
            choice3: "Nigeria",
            choice4: "Egypt"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        correctAnswerD()
    }
}
