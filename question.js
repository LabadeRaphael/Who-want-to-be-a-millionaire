let playMusic= new Audio("Music.mp3")
playMusic.play()
const wrongAnswer=()=>{
    $("#wrongModal").modal('show');
}
const surface = () => {
    window.location = "question.html"
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
                if (soundNosound=='true') {
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
    loadQuestion()
}
const newGame=()=>{
    localStorage.setItem("moneyEarn",0)
    window.location="question.html"
}
const homePage=()=>{
    window.location="homePage.html"
}
const existButton=()=>{
    let onOff=localStorage.getItem("timer")
    if (onOff=='true') {
        let soundNosound=localStorage.getItem("sound")
        if (soundNosound=='true') {
            alarmMusic.pause()
        }
        clearInterval(stopWatchInterval)
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
                if (soundNosound=='true') {
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
    var randomNumber = Math.floor(Math.random() * 101)
    localStorage.setItem("moneyEarn",0)
    let getMoneyEarn=localStorage.getItem("moneyEarn")
    document.getElementById("exitMoneyWon").innerText=getMoneyEarn
    document.getElementById("leaveMoneyWon").innerText=getMoneyEarn
    document.getElementById("timeupMoneyWon").innerText=getMoneyEarn
    document.getElementById("wrongAnswerMoneyWon").innerText=getMoneyEarn
    localStorage.setItem("fifftyFifty",1)
    fiftyFiftyCounter.innerText=1
    localStorage.setItem("retry",1)
    retryCounter.innerText=1
    localStorage.setItem("hint",1)
    hintCounter.innerText=1
    const correctAnswerA=()=>{
        answerA.addEventListener("click", () => {
            answerA.style.backgroundColor = "green"
            localStorage.setItem("moneyEarn",10000)
            let soundNosound=localStorage.getItem("sound")
            if (soundNosound=='false') {
                let playSound=new Audio("correctsound.wav")
                playSound.pause()
            } else {
                let playSound=new Audio("correctsound.wav")
                playSound.play()
            }
            window.location="secondquestion.html"
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
            let getFiftyFifty=localStorage.getItem("fifftyFifty")
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
            let gethint=localStorage.getItem("hint")
            if (gethint>0) {
                localStorage.setItem("hint",0)
                hintCounter.innerText=0
                answerA.style.backgroundColor = "green"
                window.location="secondquestion.html"
                localStorage.setItem("moneyEarn",10000)
            }
        })
        retryBtn.addEventListener("click",()=>{
            let getRetry=localStorage.getItem("retry")
            if (getRetry>0) {
                localStorage.setItem("retry",0)
                retryCounter.innerText=0
                var retryNumber = Math.floor(Math.random() * 11)
                // retryQuestion for correctAnswerA
                if (retryNumber==0) {
                    let questionObj={
                        question:"____ is the capital city of France",
                        choice1:"Paris",
                        choice2:"Male",
                        choice3:"Moroni", 
                        choice4:"Tunis"
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
                        question:"At which Country was used the first colourful Television",
                        choice1:"U.S.A",
                        choice2:"Paris",
                        choice3:"England", 
                        choice4:"Russia"
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
                        question:"The pope is the Roman Catholic bishop of which city",
                        choice1:"Rome",
                        choice2:"Paris",
                        choice3:"London", 
                        choice4:"Nigeria"
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
                        question:"The cartoon character Garfields is a ____.",
                        choice1:"Cat",
                        choice2:"Dog",
                        choice3:"Snake", 
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
                        question:"The chemical symbol of Hydrogen is ____.",
                        choice1:"H",
                        choice2:"O",
                        choice3:"K", 
                        choice4:"C"
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
                        question:"There are ____ millimeter in one meter",
                        choice1:"100",
                        choice2:"10,000",
                        choice3:"10", 
                        choice4:"100"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==6) {
                    let questionObj={
                        question:"Sylvester Stallone played a boxer in the movies ____?",
                        choice1:"Rocky",
                        choice2:"Rambo",
                        choice3:"Cobra", 
                        choice4:"Specialist"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==7) {
                    let questionObj={
                        question:"Steve Jobs was among the founders of this company:",
                        choice1:"Apple",
                        choice2:"Microsoft",
                        choice3:"Samsung", 
                        choice4:"Dell"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==8) {
                    let questionObj={
                        question:"Richards Branson founded which major airline",
                        choice1:"Virgin",
                        choice2:"Qantas",
                        choice3:"Emirates", 
                        choice4:"Southwest"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==9) {
                    let questionObj={
                        question:"Representing the sun,the Japanese flag shows a circle of what colour on white background",
                        choice1:"Red",
                        choice2:"Green",
                        choice3:"Yellow", 
                        choice4:"Purple"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==10) {
                    let questionObj={
                        question:"Rain rain go away,come again another ____?",
                        choice1:"Day",
                        choice2:"Year",
                        choice3:"Month", 
                        choice4:"Week"
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
            localStorage.setItem("moneyEarn",10000)
            let soundNosound=localStorage.getItem("sound")
            if (soundNosound=='false') {
                let playSound=new Audio("correctsound.wav")
                playSound.pause()
            } else {
                let playSound=new Audio("correctsound.wav")
                playSound.play()
            }
            window.location="secondquestion.html"
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
            let getFiftyFifty=localStorage.getItem("fifftyFifty")
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
            let gethint=localStorage.getItem("hint")
            if (gethint>0) {
                localStorage.setItem("hint",0)
                hintCounter.innerText=0
                answerB.style.backgroundColor = "green"
                window.location="secondquestion.html"
                localStorage.setItem("moneyEarn",10000)
            }
        })
        retryBtn.addEventListener("click",()=>{
            let getRetry=localStorage.getItem("retry")
            if (getRetry>0) {
                localStorage.setItem("retry",0)
                retryCounter.innerText=0
                var retryNumber = Math.floor(Math.random() * 11)
                // retryQuestion for correctAnswerB
                if (retryNumber==0) {
                    let questionObj={
                        question:"This shoe company produced the Air Jordan shoes :",
                        choice1:"Puma",
                        choice2:"Nike",
                        choice3:"Adidas", 
                        choice4:"Reebok"
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
                        question:"The Great wall is a must-visit attraction in :",
                        choice1:"Japan",
                        choice2:"China",
                        choice3:"Brazil", 
                        choice4:"Egypt"
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
                        question:"The capital city of Germany is ____.",
                        choice1:"Brasilia",
                        choice2:"Berlin",
                        choice3:"Bishkek", 
                        choice4:"Brazil"
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
                        question:"There are ____ strings on a standard guitar.",
                        choice1:"Four",
                        choice2:"Six",
                        choice3:"Seven", 
                        choice4:"Eight"
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
                        question:"The Quran is the central religious text of:",
                        choice1:"Hindu",
                        choice2:"Islam",
                        choice3:"Christianity", 
                        choice4:"Judaism"
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
                        question:"What is the name of sant's red-nosed reindeer?",
                        choice1:"Star",
                        choice2:"Rudolph",
                        choice3:"Blitzen", 
                        choice4:"comet"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==6) {
                    let questionObj={
                        question:"The Guinness company is famous for making which products",
                        choice1:"Cars",
                        choice2:"Beer",
                        choice3:"Cakes", 
                        choice4:"Sweets"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==7) {
                    let questionObj={
                        question:"The 'Black Forest' is a major attraction of what country?",
                        choice1:"Poland",
                        choice2:"Germany",
                        choice3:"Congo", 
                        choice4:"Vietnam"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==8) {
                    let questionObj={
                        question:"Vincent Van Gogh was born in which country",
                        choice1:"Belgium",
                        choice2:"Netherlands",
                        choice3:"France", 
                        choice4:"Italy"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==9) {
                    let questionObj={
                        question:"Which of the following is a 3D model of Earth",
                        choice1:"Space",
                        choice2:"Globe",
                        choice3:"Map", 
                        choice4:"Compass"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==10) {
                    let questionObj={
                        question:"What Shape symbolizes love?",
                        choice1:"Star",
                        choice2:"Heart",
                        choice3:"Square", 
                        choice4:"Circles"
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
            localStorage.setItem("moneyEarn",10000)
            let soundNosound=localStorage.getItem("sound")
            if (soundNosound=='false') {
                let playSound=new Audio("correctsound.wav")
                playSound.pause()
            } else {
                let playSound=new Audio("correctsound.wav")
                playSound.play()
            }
            window.location="secondquestion.html"
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
            let getFiftyFifty=localStorage.getItem("fifftyFifty")
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
            let gethint=localStorage.getItem("hint")
            if (gethint>0) {
                localStorage.setItem("hint",0)
                hintCounter.innerText=0
                answerC.style.backgroundColor = "green"
                window.location="secondquestion.html"
                localStorage.setItem("moneyEarn",10000)
            }
        })
        retryBtn.addEventListener("click",()=>{
            let getRetry=localStorage.getItem("retry")
            if (getRetry>0) {
                localStorage.setItem("retry",0)
                retryCounter.innerText=0
                var retryNumber = Math.floor(Math.random() * 11)
                // retryQuestion for correctAnswerC
                if (retryNumber==0) {
                    let questionObj={
                        question:"What is the favourite food of the Tennage Mutant Ninja Turtles?",
                        choice1:"Pretzels",
                        choice2:"Bagels",
                        choice3:"Pizza", 
                        choice4:"Hamburgers"
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
                        question:"Which country is not part of North America",
                        choice1:"US",
                        choice2:"Canada",
                        choice3:"Germany", 
                        choice4:"Mexico"
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
                        question:"Which of these is not one of the four blood groups",
                        choice1:"O",
                        choice2:"A",
                        choice3:"T", 
                        choice4:"AB"
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
                        question:"What planet in our solar system has the most liquid water on it's surface",
                        choice1:"Jupiter",
                        choice2:"Neptune",
                        choice3:"Earth", 
                        choice4:"Mars"
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
                        question:"What does the A stand for in CIA",
                        choice1:"Aware",
                        choice2:"American",
                        choice3:"Agency", 
                        choice4:"Afraid"
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
                        question:"Which of the following scientists studies animals",
                        choice1:"Biologist",
                        choice2:"Geobiology",
                        choice3:"Zoologist", 
                        choice4:"Botanist"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==6) {
                    let questionObj={
                        question:"What color hats do ordinary smurfs wear",
                        choice1:"Blacks",
                        choice2:"Blue",
                        choice3:"White", 
                        choice4:"Red"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==7) {
                    let questionObj={
                        question:"What is the favourite food of Winne-the-Pooh?",
                        choice1:"Icecream",
                        choice2:"Rice",
                        choice3:"Honey", 
                        choice4:"Chocolate"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==8) {
                    let questionObj={
                        question:"Where can you find the Sydney Opera House",
                        choice1:"Brazil",
                        choice2:"France",
                        choice3:"Australia", 
                        choice4:"England"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==9) {
                    let questionObj={
                        question:"Which animal was the focus of 'Jurassic Park'?",
                        choice1:"Tiger",
                        choice2:"Sharks",
                        choice3:"Dinosaurs", 
                        choice4:"Bears"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==10) {
                    let questionObj={
                        question:"Which of these country borders the United States",
                        choice1:"Italy",
                        choice2:"Japan",
                        choice3:"Mexico", 
                        choice4:"Iceland"
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
            localStorage.setItem("moneyEarn",10000)
            let soundNosound=localStorage.getItem("sound")
            if (soundNosound=='false') {
                let playSound=new Audio("correctsound.wav")
                playSound.pause()
            } else {
                let playSound=new Audio("correctsound.wav")
                playSound.play()
            }
            window.location="secondquestion.html"
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
            let getFiftyFifty=localStorage.getItem("fifftyFifty")
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
            let gethint=localStorage.getItem("hint")
            if (gethint>0) {
                localStorage.setItem("hint",0)
                hintCounter.innerText=0
                answerD.style.backgroundColor = "green"
                window.location="secondquestion.html"
                localStorage.setItem("moneyEarn",10000)
            }
        })
        retryBtn.addEventListener("click",()=>{
            let getRetry=localStorage.getItem("retry")
            if (getRetry>0) {
                localStorage.setItem("retry",0)
                retryCounter.innerText=0
                var retryNumber = Math.floor(Math.random() * 11)
                 // retryQuestion for correctAnswerD
                if (retryNumber==0) {
                    let questionObj={
                        question:"Which company produces the computer operting system windows?",
                        choice1:"Intel",
                        choice2:"Sony",
                        choice3:"IBM", 
                        choice4:"Microsoft"
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
                        question:"Which Shakespearean character was the famous loverof Juliet?",
                        choice1:"Leonardo",
                        choice2:"Hamlet",
                        choice3:"Othello", 
                        choice4:"Romeo"
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
                        question:"Which of these is not a manufacturer of cars",
                        choice1:"Toyota",
                        choice2:"Honda",
                        choice3:"Renult", 
                        choice4:"Sony"
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
                        question:"Which vegetable is the traditional nose for snowman?",
                        choice1:"Cucumber",
                        choice2:"Squash",
                        choice3:"Potato", 
                        choice4:"Carrot"
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
                        question:"With which form of transports is the name Harley Davidson particularly associated?",
                        choice1:"Helicopter",
                        choice2:"Jeep",
                        choice3:"Powerboat", 
                        choice4:"Motorcycle"
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
                        question:"Where did the 2008 Summer Olympic Games take place",
                        choice1:"Atlanta",
                        choice2:"Montreal",
                        choice3:"Mexico", 
                        choice4:"Beijing"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==6) {
                    let questionObj={
                        question:"What doesn't kill you make you ____?",
                        choice1:"Mad",
                        choice2:"Star",
                        choice3:"Winner", 
                        choice4:"Stronger"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==7) {
                    let questionObj={
                        question:"What is the last letter of the English alphabet?",
                        choice1:"A",
                        choice2:"W",
                        choice3:"Y", 
                        choice4:"Z"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==8) {
                    let questionObj={
                        question:"What is the largest birds in he World",
                        choice1:"Albatross",
                        choice2:"Vulture",
                        choice3:"Emu", 
                        choice4:"Ostrich"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==9) {
                    let questionObj={
                        question:"What country is commonly associated with Kangaroos",
                        choice1:"Germany",
                        choice2:"France",
                        choice3:"Norway", 
                        choice4:"Australia"
                    }
                    allQuestions.push(questionObj)
                    document.getElementById("questionBox").innerHTML=`${questionObj.question}`
                    document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
                    document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
                    document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
                    document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
                }
                if (retryNumber==10) {
                    let questionObj={
                        question:"What is the first book ot the Bible",
                        choice1:"Numbers",
                        choice2:"Leviticus",
                        choice3:"Exodus", 
                        choice4:"Genesis"
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
            question: "what colour is grass?",
            choice1: "Red",
            choice2: "Blue",
            choice3: "Yellow",
            choice4: "Green"
        }
        allQuestions.push(questionObj)
        console.log(allQuestions);
        console.log(questionObj.question);
        console.log(questionObj.choice4);
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Green")
        correctAnswerD()
        console.log(findAnswer);
    }
    if (randomNumber == 1) {
        let questionObj = {
            question: "which animal is popularly refers to as man's best friend?",
            choice1: "Cat",
            choice2: "Rat",
            choice3: "Dog",
            choice4: "Rabbit"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Dog")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 2) {
        let questionObj = {
            question: "(2+2)*(3+2)+4=?",
            choice1: "18",
            choice2: "24",
            choice3: "14",
            choice4: "10"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "24")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 3) {
        let questionObj = {
            question: "It is better to give than to ___?",
            choice1: "Ask",
            choice2: "Reap",
            choice3: "Rip",
            choice4: "Receive"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Receive")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 4) {
        let questionObj = {
            question: "Which star is the closest one to Earth?",
            choice1: "Mars",
            choice2: "Neptune",
            choice3: "Jupiter",
            choice4: "Sun"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Sun")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 5) {
        let questionObj = {
            question: "Which of the following are NOT insects?",
            choice1: "Ant",
            choice2: "Spiders",
            choice3: "Butterfiles",
            choice4: "Ladybirds"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Spiders")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 6) {
        let questionObj = {
            question: "What planet lies between Earth and Jupiter?",
            choice1: "Uranus",
            choice2: "Neptune",
            choice3: "Saturn",
            choice4: "Mars"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Mars")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 7) {
        let questionObj = {
            question: "What is the currency of United States?",
            choice1: "Euro",
            choice2: "Naira",
            choice3: "Yen",
            choice4: "U.S.dollar"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "U.s.dollar")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 8) {
        let questionObj = {
            question: "Which two letters are used to indicate years that occurred before the birth of Jesus?",
            choice1: "EF",
            choice2: "AF",
            choice3: "BC",
            choice4: "BE"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "BC")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 9) {
        let questionObj = {
            question: "Keep your friends close and your enemies ___?",
            choice1: "Away",
            choice2: "Far",
            choice3: "Down",
            choice4: "Closer"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Closer")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 10) {
        let questionObj = {
            question: "The Human heart is a ___?",
            choice1: "Bone",
            choice2: "Cartilage",
            choice3: "Tendon",
            choice4: "Muscle"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Muscle")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 11) {
        let questionObj = {
            question: "What is the capital city of philippines?",
            choice1: "Muscat",
            choice2: "Kuwait",
            choice3: "Manila",
            choice4: "Paris"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Manila")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 12) {
        let questionObj = {
            question: "What is the capital city of North Korea?",
            choice1: "Pyongyang",
            choice2: "Kuwait",
            choice3: "Bissau",
            choice4: "Praia"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Pyongyang")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 13) {
        let questionObj = {
            question: "A white flag typically symbolizes:",
            choice1: "Kill",
            choice2: "Surrender",
            choice3: "Victory",
            choice4: "War"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Surrender")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 14) {
        let questionObj = {
            question: "Anthropology is the study of:",
            choice1: "Mental",
            choice2: "Heart",
            choice3: "Humanity",
            choice4: "Plants"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Heart")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 15) {
        let questionObj = {
            question: "A game of bowling consists of how many frames",
            choice1: "Three",
            choice2: "Thirty",
            choice3: "Sixty",
            choice4: "Ten"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Ten")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 16) {
        let questionObj = {
            question: "Belgium is located in ____.",
            choice1: "Europe",
            choice2: "America",
            choice3: "Africa",
            choice4: "Asia"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Europe")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 17) {
        let questionObj = {
            question: "Buckingham Palace is located in ____.",
            choice1: "Birmingham",
            choice2: "Manchester",
            choice3: "London",
            choice4: "Leeds"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "London")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 18) {
        let questionObj = {
            question: "Complete the pharse,'Curiosity Killed the ____'",
            choice1: "Dog",
            choice2: "Lion",
            choice3: "Horse",
            choice4: "Cat"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Cat")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 19) {
        let questionObj = {
            question: "Complete the pharse,'A ____ paints a thousand words.'",
            choice1: "Painter",
            choice2: "Story",
            choice3: "Picture",
            choice4: "Film"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Picture")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 20) {
        let questionObj = {
            question: "Finland is located on which continent",
            choice1: "America",
            choice2: "Africa",
            choice3: "Asia",
            choice4: "Europe"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Europe")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 21) {
        let questionObj = {
            question: "How many players per side are on basketball court at any given moment",
            choice1: "6",
            choice2: "7",
            choice3: "5",
            choice4: "8"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "5")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 22) {
        let questionObj = {
            question: "How many players per side are on football court at any given moment",
            choice1: "12",
            choice2: "10",
            choice3: "9",
            choice4: "11"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "11")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 23) {
        let questionObj = {
            question: "How many Russian cosmonaults have walked on the moon",
            choice1: "6",
            choice2: "0",
            choice3: "4",
            choice4: "2"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "0")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 24) {
        let questionObj = {
            question: "You can visit the city of Stockholm in ___.",
            choice1: "Finland",
            choice2: "Denmark",
            choice3: "Norway",
            choice4: "Sweden"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Sweden")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 25) {
        let questionObj = {
            question: "Where would you find the pituitary gland",
            choice1: "Leg",
            choice2: "Ear",
            choice3: "Brain",
            choice4: "Stomach"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Brain")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 26) {
        let questionObj = {
            question: "Football is commonly known to be made of ___ skin?",
            choice1: "Pig",
            choice2: "Cow",
            choice3: "Goat",
            choice4: "Dog"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Pig")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 27) {
        let questionObj = {
            question: "Which of these foods is a great source of Vitamin B1?",
            choice1: "Milk",
            choice2: "Corn",
            choice3: "Apple",
            choice4: "Carrot"
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
    if (randomNumber == 28) {
        let questionObj = {
            question: "What was the name of the first mammal to have successfully cloned from an adult cell?",
            choice1: "Koko",
            choice2: "Amy",
            choice3: "Ellen",
            choice4: "Dolly"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Dolly")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 29) {
        let questionObj = {
            question: "What is the currency of Russian",
            choice1: "Baht",
            choice2: "Grivni",
            choice3: "Frank",
            choice4: "Ruble"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Ruble")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 30) {
        let questionObj = {
            question: "What language is spoken in Cuba",
            choice1: "French",
            choice2: "Turkish",
            choice3: "German",
            choice4: "Spanish"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Spanish")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 31) {
        let questionObj = {
            question: "What color is the section of a phone book that lists business number",
            choice1: "Purple",
            choice2: "Green",
            choice3: "Yellow",
            choice4: "Red"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Yellow")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 32) {
        let questionObj = {
            question: "What is the name of the fairy that aids Peter Pan in J.M.Barrie's play and novel",
            choice1: "Navi",
            choice2: "Puck",
            choice3: "Tinkerbell",
            choice4: "Shobijin"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Tinkerbell")
        console.log(findAnswer);
        correctAnswerC()
        
    }
    if (randomNumber == 33) {
        let questionObj = {
            question: "What term is commonly used to mean a room in a ship",
            choice1: "Covey",
            choice2: "Slip",
            choice3: "Cabin",
            choice4: "Deck"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Cabin")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 34) {
        let questionObj = {
            question: "What nation was divided into two seperate states in 1949",
            choice1: "England",
            choice2: "Russia",
            choice3: "Germany",
            choice4: "Italy"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Germany")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 35) {
        let questionObj = {
            question: "What gaint wooden animal is associated with the Trojan War?",
            choice1: "Lion",
            choice2: "Bear",
            choice3: "Horse",
            choice4: "Camel"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Horse")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 36) {
        let questionObj = {
            question: "Which religion has the most followers",
            choice1: "Islam",
            choice2: "Judaism",
            choice3: "Christianity",
            choice4: "Buddhism"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Christianity")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 37) {
        let questionObj = {
            question: "Which ocean's water is the coldest",
            choice1: "Atlantic",
            choice2: "Pacific",
            choice3: "Arctic",
            choice4: "Indian"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Arctic")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 38) {
        let questionObj = {
            question: "Which letter usually signifies a falling grade",
            choice1: "B",
            choice2: "C",
            choice3: "F",
            choice4: "A"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "F")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 39) {
        let questionObj = {
            question: "What is the symbol for Sodium?",
            choice1: "So",
            choice2: "S",
            choice3: "Na",
            choice4: "Sd"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Na")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 40) {
        let questionObj = {
            question: "Which part of the body does glaucoma affect",
            choice1: "Toes",
            choice2: "Ears",
            choice3: "Eyes",
            choice4: "knee"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Eyes")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 41) {
        let questionObj = {
            question: "Where was the 1994 World cup of Soccer held",
            choice1: "USA",
            choice2: "Italy",
            choice3: "China",
            choice4: "Qatar"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "USA")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 42) {
        let questionObj = {
            question: "Where is the smallest bone in the body located",
            choice1: "Ear",
            choice2: "Heart",
            choice3: "Brain",
            choice4: "Nose"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Ear")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 43) {
        let questionObj = {
            question: "Where on the body is the skin the thinnest",
            choice1: "Eyelids",
            choice2: "Shins",
            choice3: "Ears",
            choice4: "Laps"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Eyelids")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 44) {
        let questionObj = {
            question: "With which musical instruments is Eric Clapton mostly associated with",
            choice1: "Guitar",
            choice2: "Piano",
            choice3: "Drums",
            choice4: "Trumpet"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Guitar")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 45) {
        let questionObj = {
            question: "Which state is nicknamed 'The Empire State'?",
            choice1: "NewYork",
            choice2: "Alaska",
            choice3: "California",
            choice4: "Texas"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "NewYork")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 46) {
        let questionObj = {
            question: "What sort of artist uses chisels and hammers",
            choice1: "Sculptor",
            choice2: "Weaver",
            choice3: "Potter",
            choice4: "Painter"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Sculptor")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 47) {
        let questionObj = {
            question: "Which animal use catch in a net when it hunt?",
            choice1: "Spider",
            choice2: "Mouse",
            choice3: "Reptile",
            choice4: "Snake"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Spider")
        console.log(findAnswer);
        correctAnswerA()
        
    }
    if (randomNumber == 48) {
        let questionObj = {
            question: "What iconic car was produced by Volkswagen begining in 1938",
            choice1: "Beetle",
            choice2: "Escort",
            choice3: "Rabbit",
            choice4: "Pinto"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Beetle")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 49) {
        let questionObj = {
            question: "Which country awards the Purple Heart millitary decoration",
            choice1: "US",
            choice2: "Isreal",
            choice3: "France",
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
        correctAnswerA()
    }
    if (randomNumber == 50) {
        let questionObj = {
            question: "What is the classification of a rhinoceros",
            choice1: "Mammal",
            choice2: "Reptile",
            choice3: "Insects",
            choice4: "Birds"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Mammal")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 51) {
        let questionObj = {
            question: "whch month has an extra day during a leap year",
            choice1: "February",
            choice2: "June",
            choice3: "July",
            choice4: "May"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "February")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 52) {
        let questionObj = {
            question: "Greek gods lives on mount ___?",
            choice1: "Olympus",
            choice2: "Ararat",
            choice3: "Penglal",
            choice4: "Killaraus"
        }
        1
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Olympus")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 53) {
        let questionObj = {
            question: "What is the nearest neighbour in space",
            choice1: "Moon",
            choice2: "Sun",
            choice3: "Mars",
            choice4: "uranus"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Moon")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 54) {
        let questionObj = {
            question: "Which bands realsed'Hotel California in 1997",
            choice1: "Eagles",
            choice2: "Coldplay",
            choice3: "Nirvana",
            choice4: "Beatles"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Eagles")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 54) {
        let questionObj = {
            question: "Who sings 'Halo'",
            choice1: "Beyonce",
            choice2: "Cher",
            choice3: "Rihanna",
            choice4: "Madonna"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Beyonce")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber==56) {
        let questionObj={
            question:"Six U.S. presidents had what first name, the most common presidential name in history?",
            choice1:"James",
            choice2:"William",
            choice3:"George", 
            choice4:"John"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "James")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber==57) {
        let questionObj={
            question:"What country is called 'Druk Yul' in its native language, meaning 'Land of the Thunder Dragon'?",
            choice1:"Bangladesh",
            choice2:"Bhutan",
            choice3:"Myanmar", 
            choice4:"Nepal"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Bhutan")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber==58) {
        let questionObj={
            question:"Wonderwall was a 1995 hit by which band",
            choice1:"Oasis",
            choice2:"Blur",
            choice3:"Coldplay", 
            choice4:"Radiohead"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Oasis")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber==59) {
        let questionObj={
            question:"Academy Awards(the oscars) are given for achievements in",
            choice1:"Films",
            choice2:"TV", 
            choice3:"Theatre", 
            choice4:"Music"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Films")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber==60) {
        let questionObj={
            question:"A guinea pig is classified as which of these",
            choice1:"Mammal",
            choice2:"Birds",
            choice3:"Insect", 
            choice4:"Reptile"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Mammal")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber==61) {
        let questionObj={
            question:"9% 0f 900",
            choice1:"81",
            choice2:"100",
            choice3:"90", 
            choice4:"9"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "81")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber==62) {
        let questionObj={
            question:"A person who specialised in the study of plants is called what",
            choice1:"Botanist",
            choice2:"Dispersion",
            choice3:"Zoologist", 
            choice4:"Seismograph"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Botanist")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber==63) {
        let questionObj={
            question:"Cardiology is a medical specialist that studies and deals with disorders of the :",
            choice1:"Heart",
            choice2:"Kidneys",
            choice3:"Lungs", 
            choice4:"Liver"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Heart")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber==64) {
        let questionObj={
            question:"Duke Ellington specialized in musical style of ____",
            choice1:"Jazz",
            choice2:"Rock",
            choice3:"Country", 
            choice4:"Blues"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Jazz")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber==65) {
        let questionObj={
            question:"Don't shoot the ____?",
            choice1:"Messenger",
            choice2:"Mailman",
            choice3:"Maid", 
            choice4:"Bird"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Messenger")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber==66) {
        let questionObj={
            question:"Easy come easy ____?",
            choice1:"Go",
            choice2:"Run",
            choice3:"Lose", 
            choice4:"Walk"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Go")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber==67) {
        let questionObj={
            question:"Finish the saying,'Action speak louder than what?'",
            choice1:"Words",
            choice2:"Question",
            choice3:"Laziness", 
            choice4:"Silence"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Words")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber==68) {
        let questionObj={
            question:"For the most part,Egypt is located on which continent",
            choice1:"Africa",
            choice2:"Asia",
            choice3:"Europe", 
            choice4:"America"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Africa")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber==69) {
        let questionObj={
            question:"How many days does it take Earth to orbit the sun",
            choice1:"365",
            choice2:"465",
            choice3:"365", 
            choice4:"265"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "365")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber==70) {
        let questionObj={
            question:"How many sides are there on a triangle",
            choice1:"Three",
            choice2:"Two",
            choice3:"Four", 
            choice4:"Five"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Three")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber==71) {
        let questionObj={
            question:"How many quarter Ibs. make one Ib.",
            choice1:"6",
            choice2:"4",
            choice3:"8", 
            choice4:"3"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "4")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber==72) {
        let questionObj={
            question:"How many minutes is a hour",
            choice1:"45",
            choice2:"60",
            choice3:"24", 
            choice4:"30"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "60")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber==73) {
        let questionObj={
            question:"How many is equivalent to a dozen?",
            choice1:"16",
            choice2:"12",
            choice3:"14", 
            choice4:"10"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "12")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber==74) {
        let questionObj={
            question:"How many minutes are there in half an hour",
            choice1:"60",
            choice2:"30",
            choice3:"15", 
            choice4:"120"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "30")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber==75) {
        let questionObj={
            question:"How many Kidney do humans have",
            choice1:"6",
            choice2:"2",
            choice3:"4", 
            choice4:"1"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "2")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber==76) {
        let questionObj={
            question:"How many eggs are there in a dozen",
            choice1:"11",
            choice2:"12",
            choice3:"10", 
            choice4:"9"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "12")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber==77) {
        let questionObj={
            question:"How many years are in a millennium",
            choice1:"10,000",
            choice2:"1,000",
            choice3:"100", 
            choice4:"10"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "1,000")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber==78) {
        let questionObj={
            question:"Hickory dickory dock the mouse ran up the?",
            choice1:"Mop",
            choice2:"Clock",
            choice3:"Hill", 
            choice4:"Top"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Clock")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber==79) {
        let questionObj={
            question:"How many pockets are there on a snooker table",
            choice1:"8",
            choice2:"6",
            choice3:"4", 
            choice4:"2"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "6")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber==80) {
        let questionObj={
            question:"How many electrons are there in Hydrogen atom",
            choice1:"4",
            choice2:"1",
            choice3:"2", 
            choice4:"3"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "1")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber==81) {
        let questionObj={
            question:"How many inches are in 3 feet?",
            choice1:"12",
            choice2:"24",
            choice3:"36", 
            choice4:"48"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "36")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber==82) {
        let questionObj={
            question:"How many degrees are in a right angle",
            choice1:"30",
            choice2:"45",
            choice3:"90", 
            choice4:"180"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "90")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber==83) {
        let questionObj={
            question:"How many players are there in a volleyball team?",
            choice1:"10",
            choice2:"8",
            choice3:"6", 
            choice4:"4"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "6")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber==84) {
        let questionObj={
            question:"In which sports did Michael Jordan compete",
            choice1:"Football",
            choice2:"Tennis",
            choice3:"Basketball", 
            choice4:"Boxing"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Basketball")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber==85) {
        let questionObj={
            question:"In which country is Palace of Versailles located",
            choice1:"Sweden",
            choice2:"Italy",
            choice3:"France", 
            choice4:"Spain"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "France")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber==86) {
        let questionObj={
            question:"If the shoe ____?",
            choice1:"Grows",
            choice2:"Works",
            choice3:"Fits", 
            choice4:"Yells"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Fits")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber==87) {
        let questionObj={
            question:"In which sports does Roger Federer compete",
            choice1:"Golf",
            choice2:"Basketball",
            choice3:"Tennis", 
            choice4:"Baseball"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Tennis")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber==88) {
        let questionObj={
            question:"If you have arachnophobia,what do you have a fear of",
            choice1:"Bats",
            choice2:"Birds",
            choice3:"Spiders", 
            choice4:"Cats"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Spiders")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber==89) {
        let questionObj={
            question:"In which sport did pele compete",
            choice1:"Boxing",
            choice2:"Tennis",
            choice3:"Football", 
            choice4:"Golf"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Football")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber==90) {
        let questionObj={
            question:"If you use the 24-hour system to tell time,what time is 21:00 equal to?",
            choice1:"7p.m",
            choice2:"10p.m",
            choice3:"8p.m", 
            choice4:"9p.m"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "9p.m")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber==91) {
        let questionObj={
            question:"In which country was supermodel Gisele Bundchen Born",
            choice1:"Italy",
            choice2:"Spain",
            choice3:"Germany", 
            choice4:"Brazil"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Brazil")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber==92) {
        let questionObj={
            question:"If you are born on september 3,what sign are you?",
            choice1:"Leo",
            choice2:"Libra",
            choice3:"Gemini", 
            choice4:"Virgo"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Virgo")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber==93) {
        let questionObj={
            question:"If you were playing with a 'bishop' what game would you be playing?",
            choice1:"Joker",
            choice2:"Ludo",
            choice3:"Checkers", 
            choice4:"Chess"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Chess")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber==94) {
        let questionObj={
            question:"One,two,buckle my ____?",
            choice1:"Shirt",
            choice2:"Coat",
            choice3:"Pants", 
            choice4:"Shoe"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Shoe")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber==95) {
        let questionObj={
            question:"On which date is April Fools' Day",
            choice1:"30th",
            choice2:"4th",
            choice3:"5th", 
            choice4:"1st"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "1st")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber==96) {
        let questionObj={
            question:"One door closes and another door ____",
            choice1:"Knocked",
            choice2:"Slams",
            choice3:"Shuts", 
            choice4:"Opens"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Opens")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber==97) {
        let questionObj={
            question:"On a traffic light,what colour means 'GO'",
            choice1:"Mauve",
            choice2:"Yellow",
            choice3:"Red", 
            choice4:"Green"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Green")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber==98) {
        let questionObj={
            question:"On average how many hours a day do cats sleep",
            choice1:"1",
            choice2:"8",
            choice3:"24", 
            choice4:"14"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "14")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber==99) {
        let questionObj={
            question:"Queen's lead singer,Freddie Mercury,died from",
            choice1:"Stroke",
            choice2:"Suicide",
            choice3:"Syphills", 
            choice4:"AIDS"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "AIDS")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber==100) {
        let questionObj={
            question:"Liverpool is a successful soccer team from ____",
            choice1:"Germany",
            choice2:"Italy",
            choice3:"Spain", 
            choice4:"England"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML=`${questionObj.question}`
        document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
        document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
        document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
        document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "")
        console.log(findAnswer);
        correctAnswerD()
    }
    // if (randomNumber==100) {
    //     let questionObj={
    //         question:"",
    //         choice1:"",
    //         choice2:"",
    //         choice3:"", 
    //         choice4:""
    //     }
    //     allQuestions.push(questionObj)
    //     document.getElementById("questionBox").innerHTML=`${questionObj.question}`
    //     document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
    //     document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
    //     document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
    //     document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
    //     let findAnswer = allQuestions.find((item) => item = "")
    //     console.log(findAnswer);
    //     correctAnswerD()
    // }
}
