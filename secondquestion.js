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
    var randomNumber = Math.floor(Math.random() * 20)
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
            localStorage.setItem("moneyEarn",15000)
            let soundNosound=localStorage.getItem("sound")
            if (soundNosound=='false') {
                let playSound=new Audio("correctsound.wav")
                playSound.pause()
            } else {
                let playSound=new Audio("correctsound.wav")
                playSound.play()
            }
            window.location="thirdquestion.html"

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
                localStorage.setItem("moneyEarn",15000)
                window.location="thirdquestion.html"
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
                        question:"Which country is known as the Land of the Rising Sun",
                        choice1:"Japan",
                        choice2:"England",
                        choice3:"China", 
                        choice4:"England"
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
                        question:"What sound does a cow make?",
                        choice1:"Moo",
                        choice2:"Baa",
                        choice3:"Meow", 
                        choice4:"Cluck"
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
                        question:"Which of these items can help you find your way if you are lost",
                        choice1:"Compass",
                        choice2:"Stick",
                        choice3:"Pencil", 
                        choice4:"Leaf"
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
                        question:"What was the first name of the playwright Shakespeare",
                        choice1:"William",
                        choice2:"Justin",
                        choice3:"Arthur", 
                        choice4:"Charles"
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
                        question:"Which fruit or vegetable is commonly carved as a Jack-o'-lantern during Halloween celebrations?",
                        choice1:"Pumpkin",
                        choice2:"Cucumber",
                        choice3:"Squash", 
                        choice4:"Eggplant"
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
                        question:"Which colour of cat might be associated with bad luck",
                        choice1:"Black",
                        choice2:"Orange",
                        choice3:"Brown", 
                        choice4:"White"
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
                        question:"Which of these gems is red in colour?",
                        choice1:"Ruby",
                        choice2:"Topaz",
                        choice3:"Emerald", 
                        choice4:"Sapphire"
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
                        question:"Which of these is a state of matter",
                        choice1:"Liquid",
                        choice2:"High",
                        choice3:"Low", 
                        choice4:"Balanced"
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
                        question:"Which company makes the 'Galaxy' series of smartphones",
                        choice1:"Samsung",
                        choice2:"Nokia",
                        choice3:"HTC", 
                        choice4:"Apple"
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
                        question:"What is the capital city of Czech Republic",
                        choice1:"Praque",
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
                if (retryNumber==10) {
                    let questionObj={
                        question:"What type of animal is pluto(Disney)",
                        choice1:"Dog",
                        choice2:"Cat",
                        choice3:"Bird", 
                        choice4:"Cat"
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
            localStorage.setItem("moneyEarn",15000)
            let soundNosound=localStorage.getItem("sound")
            if (soundNosound=='false') {
                let playSound=new Audio("correctsound.wav")
                playSound.pause()
            } else {
                let playSound=new Audio("correctsound.wav")
                playSound.play()
            }
            window.location="thirdquestion.html"
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
            localStorage.setItem("moneyEarn",15000)
            window.location="thirdquestion.html"
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
                        question:"What company made the iphone",
                        choice1:"Ipod",
                        choice2:"Apple",
                        choice3:"Microsoft", 
                        choice4:"RIM"
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
                        question:"What is the capital city of Thailand",
                        choice1:"Gaborone",
                        choice2:"Bangkok",
                        choice3:"London", 
                        choice4:"Apia"
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
                        question:"What is placed on top of a birthday cake",
                        choice1:"Shoes",
                        choice2:"Candles",
                        choice3:"Presents", 
                        choice4:"Hats"
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
                        question:"What is the surname of the golfer known as Tiger",
                        choice1:"Wedges",
                        choice2:"Woods",
                        choice3:"Putters", 
                        choice4:"Irons"
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
                        question:"Which of these would normally remove your tartar",
                        choice1:"pilot",
                        choice2:"Dentist",
                        choice3:"Locksmith", 
                        choice4:"Priest"
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
                        question:"What mouse does Tom chase in the famous cartoons?",
                        choice1:"Mighty",
                        choice2:"Jerry",
                        choice3:"Mickey", 
                        choice4:"Danger"
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
                        question:"When mixing black and white together what colour shade do you make?",
                        choice1:"Pink",
                        choice2:"Grey",
                        choice3:"Yellow", 
                        choice4:"Green"
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
                        question:"____ gun ia a movies staring Tom Cruise",
                        choice1:"Stun",
                        choice2:"Top",
                        choice3:"Shy", 
                        choice4:"Powder"
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
                        question:"Which horoscope sigh is represented by a lion",
                        choice1:"Cancer",
                        choice2:"Leo",
                        choice3:"Aries", 
                        choice4:"Libra"
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
                        question:"What letter might signify treasure on a map",
                        choice1:"T",
                        choice2:"X",
                        choice3:"V", 
                        choice4:"O"
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
                        question:"Which country is home to flamenco dancing",
                        choice1:"Brazil",
                        choice2:"Spain",
                        choice3:"Norway", 
                        choice4:"Germany"
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
            localStorage.setItem("moneyEarn",15000)
            let soundNosound=localStorage.getItem("sound")
            if (soundNosound=='false') {
                let playSound=new Audio("correctsound.wav")
                playSound.pause()
            } else {
                let playSound=new Audio("correctsound.wav")
                playSound.play()
            }
            window.location="thirdquestion.html"
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
                localStorage.setItem("moneyEarn",15000)
                window.location="thirdquestion.html"
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
                        question:"What is the episode called with the last 100 meters track and field?",
                        choice1:"Triathlon",
                        choice2:"Press",
                        choice3:"Sprint", 
                        choice4:"Olympic"
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
                        question:"What percentage is whole",
                        choice1:"2",
                        choice2:"0.5",
                        choice3:"1", 
                        choice4:"0.25"
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
                        question:"What company is Super MArio the official mascot of?",
                        choice1:"Sega",
                        choice2:"Microsoft",
                        choice3:"Nintendo", 
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
                        question:"Who is the leader of the gods in Greek mythology",
                        choice1:"Apollo",
                        choice2:"Pluto",
                        choice3:"Zeus", 
                        choice4:"Hera"
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
                        question:"Who is the mother of cain and Abel",
                        choice1:"Sarah",
                        choice2:"Ruth",
                        choice3:"Eve", 
                        choice4:"Rachel"
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
                        question:"What is the central region of a star,planet,or galaxy called",
                        choice1:"Space",
                        choice2:"Albino",
                        choice3:"Core", 
                        choice4:"Reservior"
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
                        question:"Which cells are responsible for coagulation?",
                        choice1:"Fibrogen",
                        choice2:"Neutrophils",
                        choice3:"Platelets", 
                        choice4:"Basophils"
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
                        question:"What is the capital city of Portugal",
                        choice1:"Amman",
                        choice2:"Minsk",
                        choice3:"Lisbon", 
                        choice4:"Mexico"
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
                        question:"When the traffic light is red color what does it means",
                        choice1:"Run",
                        choice2:"Go",
                        choice3:"Stop", 
                        choice4:"Relax"
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
                        question:"What shape as no corner?",
                        choice1:"Rectangle",
                        choice2:"Square",
                        choice3:"Circle", 
                        choice4:"Octagon"
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
                        question:"What piece of jewelery is worn on a finger",
                        choice1:"Belt",
                        choice2:"Watch",
                        choice3:"Ring", 
                        choice4:"Necklace"
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
            localStorage.setItem("moneyEarn",15000)
            let soundNosound=localStorage.getItem("sound")
            if (soundNosound=='false') {
                let playSound=new Audio("correctsound.wav")
                playSound.pause()
            } else {
                let playSound=new Audio("correctsound.wav")
                playSound.play()
            }
            window.location="thirdquestion.html"
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
                localStorage.setItem("moneyEarn",15000)
                window.location="thirdquestion.html"
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
                        question:"Which is not one of the  five senses",
                        choice1:"Touch",
                        choice2:"Smell",
                        choice3:"Sight", 
                        choice4:"Speech"
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
                        question:"Which cheese traditionaly tops a pizza?",
                        choice1:"Stilton",
                        choice2:"Gorgonzola",
                        choice3:"Edam", 
                        choice4:"Mozzarella"
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
                        question:"What is the Boy Scouts motto be ____",
                        choice1:"Forever",
                        choice2:"Together",
                        choice3:"There", 
                        choice4:"Prepared"
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
                        question:"What does 'tying the knot' mean for a couple",
                        choice1:"Laughing",
                        choice2:"Fighting",
                        choice3:"Kissing", 
                        choice4:"Marrige"
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
                        question:"Which of the following periodically sheds its entire skin?",
                        choice1:"Rodman",
                        choice2:"Trout",
                        choice3:"Cow", 
                        choice4:"Snake"
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
                        question:"What is the name of Donald Duck's girlfriend?",
                        choice1:"Deanna",
                        choice2:"Darlene",
                        choice3:"Debbie", 
                        choice4:"Daisy"
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
                        question:"Which is not a fruit",
                        choice1:"Apple",
                        choice2:"Orange",
                        choice3:"Grapes", 
                        choice4:"Potato"
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
                        question:"What is the capital city of Greece",
                        choice1:"Luanda",
                        choice2:"Damascus",
                        choice3:"Muscat", 
                        choice4:"Athens"
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
                        question:"What birds ia associated with the Thanksgiving holiday",
                        choice1:"Penguin",
                        choice2:"Eagle",
                        choice3:"Owl", 
                        choice4:"Turkey"
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
                        question:"What is the capital city of Netherlands",
                        choice1:"England",
                        choice2:"Dushanbe",
                        choice3:"Melekeok", 
                        choice4:"Amsterdam"
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
                        question:"Which number is U.S presidents history of Donald Trump",
                        choice1:"42",
                        choice2:"43",
                        choice3:"44", 
                        choice4:"45"
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
            question: "Which member of the cat family cannot retract its claws?",
            choice1: "Jaguar",
            choice2: "Tiger",
            choice3: "Leopard",
            choice4: "Cheetah"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Cheetah")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 1) {
        let questionObj = {
            question: "Music legend, Michael Jackson died at what age?",
            choice1: "48",
            choice2: "49",
            choice3: "50",
            choice4: "51"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "50")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 2) {
        let questionObj = {
            question: "Who directed the 2014 movie, 'Transformers: Age of Extinction'?",
            choice1: "Matt",
            choice2: "Tim",
            choice3: "Michael",
            choice4: "Gareth"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Michael")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 3) {
        let questionObj = {
            question: "Allen Iverson achieved fame as a player of which of these sports?",
            choice1: "Golf",
            choice2: "Tennis",
            choice3: "Basketball",
            choice4: "Boxing"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Basketball")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 4) {
        let questionObj = {
            question: "How many sides does a dodecagon have?",
            choice1: "11",
            choice2: "12",
            choice3: "13",
            choice4: "14"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "12")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 5) {
        let questionObj = {
            question: "In American football, what does the term “Hail Mary” mean?",
            choice1: "A goal",
            choice2: "A win",
            choice3: "A foul",
            choice4: "A pass"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "A pass")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 6) {
        let questionObj = {
            question: "Vaulting horse is an equipment used for which sport?",
            choice1: "Javelin",
            choice2: "Gymnastics",
            choice3: "soccer",
            choice4: "cricket"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Gymnastics")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 7) {
        let questionObj = {
            question: "What type of animal is a boatbill?",
            choice1: "Dog",
            choice2: "Beer",
            choice3: "Fish",
            choice4: "Bird"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Bird")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 8) {
        let questionObj = {
            question: "What colour are the crescent and the star on the Algerian flag?",
            choice1: "Green",
            choice2: "Red",
            choice3: "White",
            choice4: "Blue"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Red")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 9) {
        let questionObj = {
            question: "Which of these drinks is made from fermented pear juice?",
            choice1: "Perry",
            choice2: "Cider",
            choice3: "tequila",
            choice4: "Bourbon"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Perry")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 10) {
        let questionObj = {
            question: "How many FIFA World Cup titles did famous Brazilian footballer, Pele win?",
            choice1: "One",
            choice2: "Two",
            choice3: "Three",
            choice4: "Four"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Three")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 11) {
        let questionObj = {
            question: "In which of these years did Boyz II Men release the hit single, “End Of The Road”?",
            choice1: "1991",
            choice2: "1992",
            choice3: "1993",
            choice4: "1994"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "1992")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 12) {
        let questionObj = {
            question: "'Cat got your ____'?",
            choice1: "Shirt",
            choice2: "Claw",
            choice3: "Lip",
            choice4: "Tongue"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Tongue")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 13) {
        let questionObj = {
            question: "'Just Do It' is the slogan of which company",
            choice1: "Google",
            choice2: "Nike",
            choice3: "IBM",
            choice4: "Adidas"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Nike")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 14) {
        let questionObj = {
            question: "'You've got to crawl before you can ____'?",
            choice1: "Stand",
            choice2: "Sit",
            choice3: "Lay",
            choice4: "Walk"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Walk")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 15) {
        let questionObj = {
            question: "Giant pandas are black and which other colour",
            choice1: "White",
            choice2: "Pink",
            choice3: "Green",
            choice4: "Red"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "White")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 16) {
        let questionObj = {
            question: "What culture's mythology holds that all life was created during a period known as 'dreamtime'?",
            choice1: "Aborigine",
            choice2: "Aztec",
            choice3: "Goth",
            choice4: "Zulu"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Aborigine")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 17) {
        let questionObj = {
            question: "The Tropic of Cancer does not pass through which of the following countries?",
            choice1: "Sudan",
            choice2: "Taiwan",
            choice3: "Saudi",
            choice4: "Mexico"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Sudan")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 18) {
        let questionObj = {
            question: "The Fort McHenry flag that inspired 'The Star-Spangled Banner' had how many stars?",
            choice1: "14",
            choice2: "20",
            choice3: "15",
            choice4: "17"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "15")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 19) {
        let questionObj = {
            question: "The Legendary King Midas was based on a real king who ruled over what ancient peoples?",
            choice1: "Phoenicians",
            choice2: "Phyrgians",
            choice3: "Assyrians",
            choice4: "Sumerians"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Phyrgians")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 20) {
        let questionObj = {
            question: "Which U.S. state's name is believed to be based on a mythical paradise in a 1510 Spanish novel?",
            choice1: "Florida",
            choice2: "California",
            choice3: "Arizona",
            choice4: "Texas"
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
    if (randomNumber == 21) {
        let questionObj = {
            question: "How many different people have been members of the famous comedy trio, 'The Three Stooges'?",
            choice1: "Four",
            choice2: "Five",
            choice3: "Six",
            choice4: "Seven"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Six")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 22) {
        let questionObj = {
            question: "What was the first artificially produced element?",
            choice1: "Bohrium",
            choice2: "Hassium",
            choice3: "Nobelium",
            choice4: "Technetium"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Technetium")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 23) {
        let questionObj = {
            question: "What did artist James Whistler use as his signature on many of his paintings?",
            choice1: "Whistle",
            choice2: "Kite",
            choice3: "Sparrow",
            choice4: "Butterfly"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Butterfly")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 24) {
        let questionObj = {
            question: "Deciphered in 1952, Linear B is an early form of what language?",
            choice1: "Russian",
            choice2: "Arabic",
            choice3: "Latin",
            choice4: "Greek"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Greek")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 25) {
        let questionObj = {
            question: "In the 18th century Gainsborough painting 'The Blue Boy,'' what is the boy holding in his hand?",
            choice1: "Hat",
            choice2: "Lute",
            choice3: "Sword",
            choice4: "Pheasant"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = " Hat")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 26) {
        let questionObj = {
            question: "In Margaret Mitchell's early drafts of 'Gone With the Wind' what was Scarlett O'Hara's first name?",
            choice1: "Pansy",
            choice2: "Daisy",
            choice3: "Rose",
            choice4: "Violet"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Pansy")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 27) {
        let questionObj = {
            question: "What is Bart Simpson's middle name?",
            choice1: "Jo-Jo",
            choice2: "Jebediah",
            choice3: "Jacqueline",
            choice4: "Juniper"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Jo-Jo")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 28) {
        let questionObj = {
            question: "The Leaning Tower of Pisa leans in what direction?",
            choice1: "North",
            choice2: "South",
            choice3: "West",
            choice4: "East"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "South")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 29) {
        let questionObj = {
            question: "What is the only continent that does not have a continental divide?",
            choice1: "Australia",
            choice2: "Antarctica",
            choice3: "Africa",
            choice4: "Asia"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Antarctica")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 30) {
        let questionObj = {
            question: "Which of these compounds in the human body is classified by scientists as a steroid?",
            choice1: "Hemoglobin",
            choice2: "Cholesterol",
            choice3: "Glucose",
            choice4: "Insulin"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Cholesterol")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 31) {
        let questionObj = {
            question: "How many many NBA championships did Michael Jordan won",
            choice1: "6",
            choice2: "7",
            choice3: "8",
            choice4: "5"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "6")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 32) {
        let questionObj = {
            question: "How many days are there in January",
            choice1: "31",
            choice2: "30",
            choice3: "28",
            choice4: "29"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "31")
        console.log(findAnswer);
        correctAnswerA()
    }
    if (randomNumber == 33) {
        let questionObj = {
            question: "How many years is a term served by the president of the United States?",
            choice1: "Two",
            choice2: "Four",
            choice3: "Eight",
            choice4: "Five"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Four")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 34) {
        let questionObj = {
            question: "How many legs does tarantula have",
            choice1: "4",
            choice2: "8",
            choice3: "6",
            choice4: "5"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "8")
        console.log(findAnswer);
        correctAnswerB()
    }
    if (randomNumber == 35) {
        let questionObj = {
            question: "How many hurdles are in a 110m hurdles race",
            choice1: "9",
            choice2: "11",
            choice3: "10",
            choice4: "12"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "10")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 36) {
        let questionObj = {
            question: "How many red stripes make up the American flag?",
            choice1: "5",
            choice2: "8",
            choice3: "7",
            choice4: "6"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "7")
        console.log(findAnswer);
        correctAnswerC()
    }
    if (randomNumber == 37) {
        let questionObj = {
            question: "In which country is the Learning Tower of Pisa located",
            choice1: "France",
            choice2: "China",
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
    if (randomNumber == 38) {
        let questionObj = {
            question: "IBM was one of the main developers of what in the 1980a",
            choice1: "Cars",
            choice2: "Television",
            choice3: "Medicine",
            choice4: "Computers"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Computers")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 39) {
        let questionObj = {
            question: "In which country did Fidel Castro take power in 1959?",
            choice1: "China",
            choice2: "Portugal",
            choice3: "Mexico",
            choice4: "Cuba"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Cuba")
        console.log(findAnswer);
        correctAnswerD()
    }
    if (randomNumber == 40) {
        let questionObj = {
            question: "In the Flinstones, what is the name of Fred's wife?",
            choice1: "Wanda",
            choice2: "Wynona",
            choice3: "Winfree",
            choice4: "Wilma"
        }
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
        let findAnswer = allQuestions.find((item) => item = "Wilma")
        console.log(findAnswer);
        correctAnswerD()
    }
}