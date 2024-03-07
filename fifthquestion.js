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
            localStorage.setItem("moneyEarn",50000)
            let soundNosound=localStorage.getItem("sound")
            if (soundNosound=='false') {
                let playSound=new Audio("correctsound.wav")
                playSound.pause()
            } else {
                let playSound=new Audio("correctsound.wav")
                playSound.play()
            }
            window.location="sixthquestion.html"

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
                localStorage.setItem("moneyEarn",50000)
                window.location="sixthquestion.html"
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
                        question:"The capital city of Switzerland is _____.",
                        choice1:"Bern",
                        choice2:"Vaduz",
                        choice3:"Croatia", 
                        choice4:"Spain"
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
                        question:"The capital city of Czech Republic is _____.",
                        choice1:"Prague",
                        choice2:"Bogota",
                        choice3:"Luanda", 
                        choice4:"Reykjavik"
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
                        question:"Which city is known as the City of Lights?",
                        choice1:"Paris",
                        choice2:"Berlin",
                        choice3:"London", 
                        choice4:"England"
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
                        question:"To which part of the body does the word 'nasal' refer",
                        choice1:"Nose",
                        choice2:"Heart",
                        choice3:"Skin", 
                        choice4:"Stomach"
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
                        question:"Through which city does the River Thames flow",
                        choice1:"London",
                        choice2:"Toronto",
                        choice3:"Berlin", 
                        choice4:"Paris"
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
                        question:"The meaning of the Spanish word 'GRACIAS' is",
                        choice1:"Thanks",
                        choice2:"Sorry",
                        choice3:"Hello", 
                        choice4:"Goodbye"
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
            localStorage.setItem("moneyEarn",50000)
            let soundNosound=localStorage.getItem("sound")
            if (soundNosound=='false') {
                let playSound=new Audio("correctsound.wav")
                playSound.pause()
            } else {
                let playSound=new Audio("correctsound.wav")
                playSound.play()
            }
            window.location="sixthquestion.html"
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
            localStorage.setItem("moneyEarn",50000)
            window.location="sixthquestion.html"
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
                        question:"The mammal with the longest gestation period is the ____.",
                        choice1:"Chimpanzee",
                        choice2:"Elephant",
                        choice3:"Whale", 
                        choice4:"Lion"
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
                        question:"The U.S invaded Afghanistan in 2001 to topple what government",
                        choice1:"Sandinista",
                        choice2:"Taliban",
                        choice3:"Whigs", 
                        choice4:"Monarch"
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
                        question:"The capital city of Colombia is ____.",
                        choice1:"Berlin",
                        choice2:"Bogota",
                        choice3:"Tashkent", 
                        choice4:"London"
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
                        question:"The majority of the Amazon rainforest is contained within which country",
                        choice1:"China",
                        choice2:"Brazil",
                        choice3:"Russia", 
                        choice4:"US"
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
                        question:"The author and poet, Hans Christian Andersen, was born in ____",
                        choice1:"Sweden",
                        choice2:"Denmark",
                        choice3:"Austria", 
                        choice4:"Germany"
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
                        question:"The famous Ferreri sports car originates in :",
                        choice1:"US",
                        choice2:"Italy",
                        choice3:"Spain", 
                        choice4:"China"
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
            localStorage.setItem("moneyEarn",50000)
            let soundNosound=localStorage.getItem("sound")
            if (soundNosound=='false') {
                let playSound=new Audio("correctsound.wav")
                playSound.pause()
            } else {
                let playSound=new Audio("correctsound.wav")
                playSound.play()
            }
            window.location="sixthquestion.html"
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
                localStorage.setItem("moneyEarn",50000)
                window.location="sixthquestion.html"
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
                        question:"The Richter scale measures ____?",
                        choice1:"Wind",
                        choice2:"Temperature",
                        choice3:"Earthquake", 
                        choice4:"Erosion"
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
                        question:"The apple doesn't fall far from the ____?",
                        choice1:"Head",
                        choice2:"Bush",
                        choice3:"Tree", 
                        choice4:"Squirrel"
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
                        question:"What is the capital city of Ecuador",
                        choice1:"Iran",
                        choice2:"Dublin",
                        choice3:"Quito", 
                        choice4:"Ghana"
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
                        question:"What would you measure with a thermometer?",
                        choice1:"Flour",
                        choice2:"Height",
                        choice3:"Temperature", 
                        choice4:"Speed"
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
                        question:"Eating in the morning is normally called what",
                        choice1:"Snack",
                        choice2:"Lunch",
                        choice3:"Breakfast", 
                        choice4:"Dinner"
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
                        question:"Sichuan Province is located in ____",
                        choice1:"Russia",
                        choice2:"Japan",
                        choice3:"China", 
                        choice4:"Italy"
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
            localStorage.setItem("moneyEarn",50000)
            let soundNosound=localStorage.getItem("sound")
            if (soundNosound=='false') {
                let playSound=new Audio("correctsound.wav")
                playSound.pause()
            } else {
                let playSound=new Audio("correctsound.wav")
                playSound.play()
            }
            window.location="sixthquestion.html"
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
                localStorage.setItem("moneyEarn",50000)
                window.location="sixthquestion.html"
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
                        question:"Plato was born in which country",
                        choice1:"China",
                        choice2:"Italy",
                        choice3:"France", 
                        choice4:"Greece"
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
                        question:"What heightened sense do pigs have",
                        choice1:"Taste",
                        choice2:"Sight",
                        choice3:"Touch", 
                        choice4:"Smell"
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
                        question:"What is regarded as the fundamental constituent of matter",
                        choice1:"Atomic",
                        choice2:"Ion",
                        choice3:"Element", 
                        choice4:"Particle"
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
                        question:"The ostrich is the largest example of which group of animals",
                        choice1:"Frogs",
                        choice2:"Reptiles",
                        choice3:"Insects", 
                        choice4:"Birds"
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
                        question:"What is the logo of MGM studios",
                        choice1:"Sharks",
                        choice2:"Eagle",
                        choice3:"Leopard", 
                        choice4:"Lion"
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
                        question:"Which breakfast food can be served sunny side up",
                        choice1:"Mushroom",
                        choice2:"Tomato",
                        choice3:"Bacon", 
                        choice4:"Egg"
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
            question: "In which language is the song 'La Bamba' sung?",
            choice1: "Spanish",
            choice2: "Italy",
            choice3: "Greek",
            choice4: "French"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Spanish")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 1) {
        let questionObj = {
            question: "In which sport did Andre Agassi compete",
            choice1: "Tennis",
            choice2: "Boxing",
            choice3: "Football",
            choice4: "Handball"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Tennis")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 2) {
        let questionObj = {
            question: "In which famous triangle are aircraft ans ships said to have mysteriously disappeared?",
            choice1: "Bermuda",
            choice2: "Pascal's",
            choice3: "Isosceles",
            choice4: "Scalene"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Bermuda")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 3) {
        let questionObj = {
            question: "In which country can tourists visit the Grand Canyon",
            choice1: "U.S",
            choice2: "France",
            choice3: "Brazil",
            choice4: "India"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "U.S")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 4) {
        let questionObj = {
            question: "Inhaling what gas temporarily makes a person's voice sound squeaky",
            choice1: "Helium",
            choice2: "Oxygen",
            choice3: "Fluorine",
            choice4: "Nitrogen"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Helium")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 5) {
        let questionObj = {
            question: "In which comic strip is there a lasagna-loving cat",
            choice1: "Garfield",
            choice2: "Mutts",
            choice3: "Snoppy",
            choice4: "Arkensdale"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Garfield")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 6) {
        let questionObj = {
            question: "In Jonathan Swifts 'Gulliver's Travels' the land inhabited by tiny people is called:",
            choice1: "Lilliput",
            choice2: "Littleton",
            choice3: "Smallville",
            choice4: "Tennyton"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Lilliput")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 7) {
        let questionObj = {
            question: "In which country will you find Vatican city",
            choice1: "Rome",
            choice2: "Florence",
            choice3: "Pompeli",
            choice4: "Paris"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Rome")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 8) {
        let questionObj = {
            question: "In which country are giant pandas still found in the wild",
            choice1: "China",
            choice2: "Israel",
            choice3: "Japan",
            choice4: "Australia"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "China")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 9) {
        let questionObj = {
            question: "In baseball, a four-base hit,often accomplished by hitting the ball over the outfield fence,is called a:",
            choice1: "Homerun",
            choice2: "Bunt",
            choice3: "Double",
            choice4: "Flyout"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Homerun")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 10) {
        let questionObj = {
            question: "In a fairy tale Snow White, how many dwarfs are there?",
            choice1: "7",
            choice2: "6",
            choice3: "8",
            choice4: "5"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "7")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 11) {
        let questionObj = {
            question: "In Bowling Knocking Down All of the Pins is called What?",
            choice1: "Gutter",
            choice2: "Strike",
            choice3: "Split",
            choice4: "Spare"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Strike")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 12) {
        let questionObj = {
            question: "If a woman is going to have baby, she is said to be what",
            choice1: "Angry",
            choice2: "Pregnant",
            choice3: "Fat",
            choice4: "Hungry"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Pregnant")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 13) {
        let questionObj = {
            question: "In which city is the Empire State Building located",
            choice1: "Paris",
            choice2: "Newyork",
            choice3: "London",
            choice4: "Rome"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Newyork")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 14) {
        let questionObj = {
            question: "In which country is the Louvre Museum located",
            choice1: "England",
            choice2: "Paris",
            choice3: "London",
            choice4: "Rome"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Paris")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 15) {
        let questionObj = {
            question: "In which sport did Magic Johnson compete",
            choice1: "Football",
            choice2: "Basketball",
            choice3: "Volleyball",
            choice4: "Golf"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Basketball")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 16) {
        let questionObj = {
            question: "In Herman Melville's book 'Moby-Dick,' Moby Dick is a",
            choice1: "Captain",
            choice2: "Whale",
            choice3: "Explorer",
            choice4: "Pirate"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Whale")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 17) {
        let questionObj = {
            question: "In which U.S state is Los Angeles located",
            choice1: "Texas",
            choice2: "California",
            choice3: "Newyork",
            choice4: "Florida"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "California")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 18) {
        let questionObj = {
            question: "In the famous nursury rhyme, who was 'Little Red Riding Hood' going to visit?",
            choice1: "Neighbour",
            choice2: "Grandma",
            choice3: "Dad",
            choice4: "Teacher"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Grandma")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 19) {
        let questionObj = {
            question: "It's like finding a needle in a ____?",
            choice1: "Teddy",
            choice2: "Haystack",
            choice3: "Banana",
            choice4: "Pumpkin"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Haystack")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 20) {
        let questionObj = {
            question: "In which country is Sorbonne Univerity located",
            choice1: "Belgium",
            choice2: "France",
            choice3: "Ireland",
            choice4: "Germany"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "France")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 21) {
        let questionObj = {
            question: "In the game of baseball,how many strikes make an out?",
            choice1: "1",
            choice2: "2",
            choice3: "3",
            choice4: "4"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "3")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 22) {
        let questionObj = {
            question: "In which US city would you find the famous Hollywood sign",
            choice1: "Texas",
            choice2: "Chicago",
            choice3: "Losangeles",
            choice4: "Lasvegas"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Losangeles")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 23) {
        let questionObj = {
            question: "In which decade was Madonna born",
            choice1: "1960s",
            choice2: "1940s",
            choice3: "1950s",
            choice4: "1930s"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "1950s")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 24) {
        let questionObj = {
            question: "In which sport did Franz Beckenbauer compete",
            choice1: "Golf",
            choice2: "Boxing",
            choice3: "Soccer",
            choice4: "Basketball"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Soccer")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 25) {
        let questionObj = {
            question: "In which ocean is Pearl Harbor located",
            choice1: "Southern",
            choice2: "Atlantic",
            choice3: "Pacific",
            choice4: "Indian"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Pacific")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 26) {
        let questionObj = {
            question: "In which country is the prehistoric monument Stonehenge located",
            choice1: "India",
            choice2: "Spain",
            choice3: "England",
            choice4: "Belgium"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "England")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 27) {
        let questionObj = {
            question: "In Roman mythology, who was the god of war?",
            choice1: "Jupiter",
            choice2: "Saturn",
            choice3: "Mars",
            choice4: "Pluto"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Mars")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 28) {
        let questionObj = {
            question: "Japan is considered part of which continent",
            choice1: "America",
            choice2: "Europe",
            choice3: "Asia",
            choice4: "Africa"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Asia")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 29) {
        let questionObj = {
            question: "Justin Bieber was born in which country",
            choice1: "Australia",
            choice2: "USA",
            choice3: "Canada",
            choice4: "England"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Canada")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 30) {
        let questionObj = {
            question: "Joe DiMaggio competed in the sport of _____",
            choice1: "Boxing",
            choice2: "Basketball",
            choice3: "Baseball",
            choice4: "Golf"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Baseball")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 31) {
        let questionObj = {
            question: "Karl Malone and Kobe Bryant are famous figure in what sport",
            choice1: "Soccer",
            choice2: "Hockey",
            choice3: "Baseball",
            choice4: "Basketball"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Basketball")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 32) {
        let questionObj = {
            question: "On which Tv show was there a character named Kate Austen",
            choice1: "",
            choice2: "",
            choice3: "",
            choice4: "Lost"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Lost")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 33) {
        let questionObj = {
            question: "Ordinary Smurfs wear ____ colored hats.",
            choice1: "Blue",
            choice2: "Red",
            choice3: "Black",
            choice4: "White"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "White")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 34) {
        let questionObj = {
            question: "One man's trash is another man's ____?",
            choice1: "Poison",
            choice2: "Work",
            choice3: "Lunch",
            choice4: "Treasure"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Treasure")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 35) {
        let questionObj = {
            question: "Napoleon Bonaparte was a statesman and millitary leader in:",
            choice1: "Spain",
            choice2: "Britain",
            choice3: "Germany",
            choice4: "France"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "France")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 36) {
        let questionObj = {
            question: "Monica Seles competed in which sport",
            choice1: "Handball",
            choice2: "Volleyball",
            choice3: "Basketball",
            choice4: "Tennis"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Tennis")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 37) {
        let questionObj = {
            question: "Mount Everest is part of which mountain range",
            choice1: "Murovdag",
            choice2: "Pyrenees",
            choice3: "Alps",
            choice4: "Himalayas"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Himalayas")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 38) {
        let questionObj = {
            question: "Moscow is the capital city of which country",
            choice1: "Finland",
            choice2: "Romania",
            choice3: "Poland",
            choice4: "Russia"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Russia")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 39) {
        let questionObj = {
            question: "Lars Ulrich and Kirch Hammett are members of which band?",
            choice1: "Judas",
            choice2: "Megadeth",
            choice3: "Strokes",
            choice4: "Metallica"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Metallica")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 40) {
        let questionObj = {
            question: "Larry David was one of the creators of which TV show",
            choice1: "Friends",
            choice2: "Frasier",
            choice3: "Cheers",
            choice4: "Seinfeld"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Seinfeld")
        console.log(findAnswer);
        correctAnswerD()
    }
}
