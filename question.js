
// window.addEventListener('DOMContentLoaded', ()=>{
//     let music = new Audio("music.mp3");
//     music.play() 
//     console.log(music);
// })
// var x = document.getElementById("audio1"); 
// function playAudio() { 
//     x.play(); 
// } 
const dollarSign = () => {
    window.location = "moneylist.html"
}
const playBtn = () => {
    window.location = "question.html"
}
const surface = () => {
    window.location = "question.html"
}
const timerCounter = () => {
    let onOff=localStorage.getItem("timer")
    console.log(onOff);
    console.log(typeof(onOff));
    if (onOff=='false') {
        document.querySelector(".timer").classList.add("d-none")
    } else {
        var countSecond = 30
        stopWatchInterval = setInterval(() => {
            countSecond--
            timerDisplayer.style.backgroundColor = "yellow"
            document.getElementById("timerDisplayer").innerHTML = `${countSecond}<small>s</small>`
            if (countSecond == 0) {
                clearInterval(stopWatchInterval)
                function OpenBootstrapPopup() {
                    $("#simpleModal").modal('show');
                }
                OpenBootstrapPopup()
                // window.onload = function () {
                //     OpenBootstrapPopup();
                // };
                // function OpenBootstrapPopup() {
                //     $("#simpleModal").modal('show');
                // }
                // alarmMusic.pause()
                // document.getElementById("modal-dialog").style.visibility=""
                // alert("890-[")
                // showModal()
                
                
                // data-bs-toggle="modal" data-bs-target="#staticleave"
    
            }
            if (countSecond < 6) {
                let alarmMusic=new Audio("alarm.mp3")
                // alarmMusic.play()
                timerDisplayer.style.backgroundColor = "red"
            }
        }, 1000)
        
    }
    loadQuestion()
}

const newGame=()=>{
    window.location="question.html"
}
const homePage=()=>{
    window.location="homePage.html"
}

// const leave = () => {
//     // window.location = "homepage.html"
// }

// document.getElementById("retryCounter").innerHTML=0
const reloadBtn = () => {
    if (retry>0) {
        window.location = "question.html"
        document.getElementById("retryCounter").innerHTML=0
        // var retry= 1

    }
}

let checkMusic=true
const musicBtn=()=>{
    checkMusic = !checkMusic
    console.log( checkMusic);
    if ( checkMusic) {
        localStorage.setItem("music",false)
        musicId.src = "music.png"
    }
    else {
        musicId.src = "nomusic.jpeg"
        localStorage.setItem("music",true)
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
// const fiftyFifty=()=>{
//     alert("uuwivrwh")
// }
var retry= 0
var allQuestions = []
const loadQuestion = () => {
    var randomNumber = Math.floor(Math.random() * 43)
    // document.getElementById("retryCounter").innerHTML=0
    // stopWatchInterval = setInterval(() => {
    //     retry++
    //     document.getElementById("retryCounter").innerHTML = `${retry}`
    // },10000)
   

    if (randomNumber == 0) {
        let questionObj = {
            question: "what colour is grass?",
            choice1: "red",
            choice2: "blue",
            choice3: "yellow",
            choice4: "green"

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
        let findAnswer = allQuestions.find((item) => item = "green")
        answerD.addEventListener("click", () => {
            answerD.style.backgroundColor = "green"
            window.location = "moneylist.html"
        })
        answerA.style.backgroundColor = "yellow"
        answerB.style.backgroundColor = "yellow"
        answerC.style.backgroundColor = "yellow"
        answerD.style.backgroundColor = "yellow"
        answerA.addEventListener("click", () => {
            answerA.style.backgroundColor = "red"
            alert("you loose")
            staticBackdrop.style.display="block"
        })
        answerB.addEventListener("click", () => {
            answerB.style.backgroundColor = "red"
        })
        answerC.addEventListener("click", () => {
            answerC.style.backgroundColor = "red"
        })
        fiftyFifty.addEventListener("click", () => {
            answerA.style.display="none"
            firstBorderA.style.display="none"
            secondBorderA.style.display="none"
            answerB.style.display="none"
            firstBorderB.style.display="none"
            secondBorderB.style.display="none"
        })
        console.log(findAnswer);
        // const answerD=()=>{
        // }
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
    }
    if (randomNumber == 11) {
        let questionObj = {
            question: "What is the capital city of philippines?",
            choice1: "Muscat",
            choice2: "Kuwait",
            choice3: "Manila",
            choice4: "Paris"

        }
        3
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 12) {
        let questionObj = {
            question: "What is the capital city of North Korea?",
            choice1: "Pyongyang",
            choice2: "Kuwait",
            choice3: "Bissau",
            choice4: "Praia"

        }
        1
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 13) {
        let questionObj = {
            question: "A white flag typically symbolizes:",
            choice1: "Kill",
            choice2: "Surrender",
            choice3: "Victory",
            choice4: "War"

        }
        2
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 14) {
        let questionObj = {
            question: "Anthropology is the study of:",
            choice1: "Mental",
            choice2: "Heart",
            choice3: "Humanity",
            choice4: "Plants"

        }
        3
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 15) {
        let questionObj = {
            question: "A game of bowling consists of how many frames",
            choice1: "Three",
            choice2: "Thirty",
            choice3: "Sixty",
            choice4: "Ten"

        }
        4
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 16) {
        let questionObj = {
            question: "Belgium is located in ____.",
            choice1: "Europe",
            choice2: "America",
            choice3: "Africa",
            choice4: "Asia"

        }
        1
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 17) {
        let questionObj = {
            question: "Buckingham Palace is located in ____.",
            choice1: "Birmingham",
            choice2: "Manchester",
            choice3: "London",
            choice4: "Leeds"

        }
        3
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 18) {
        let questionObj = {
            question: "Complete the pharse,'Curiosity Killed the ____'",
            choice1: "Dog",
            choice2: "Lion",
            choice3: "Horse",
            choice4: "Cat"

        }
        4
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 19) {
        let questionObj = {
            question: "Complete the pharse,'A ____ paints a thousand words.'",
            choice1: "Painter",
            choice2: "Story",
            choice3: "Picture",
            choice4: "Film"

        }
        3
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 20) {
        let questionObj = {
            question: "Finland is located on which continent",
            choice1: "America",
            choice2: "Africa",
            choice3: "Asia",
            choice4: "Europe"

        }
        4
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 21) {
        let questionObj = {
            question: "How many players per side are on basketball court at any given moment",
            choice1: "6",
            choice2: "7",
            choice3: "5",
            choice4: "8"

        }
        3
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 22) {
        let questionObj = {
            question: "How many players per side are on football court at any given moment",
            choice1: "12",
            choice2: "10",
            choice3: "9",
            choice4: "11"

        }
        4
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 23) {
        let questionObj = {
            question: "How many Russian cosmonaults have walked on the moon",
            choice1: "6",
            choice2: "0",
            choice3: "4",
            choice4: "2"

        }
        2
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 24) {
        let questionObj = {
            question: "You can visit the city of Stockholm in ___.",
            choice1: "Finland",
            choice2: "Denmark",
            choice3: "Norway",
            choice4: "Sweden"

        }
        4
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 25) {
        let questionObj = {
            question: "Where would you find the pituitary gland",
            choice1: "Leg",
            choice2: "Ear",
            choice3: "Brain",
            choice4: "Brain"

        }
        3
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 26) {
        let questionObj = {
            question: "Football is commonly known to be made of ___ skin?",
            choice1: "Pig",
            choice2: "Cow",
            choice3: "Goat",
            choice4: "Dog"

        }
        1
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 27) {
        let questionObj = {
            question: "Which of these foods is a great source of Vitamin B1?",
            choice1: "Milk",
            choice2: "Corn",
            choice3: "Apple",
            choice4: "Carrot"

        }
        2
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 28) {
        let questionObj = {
            question: "What was the name of the first mammal to have successfully cloned from an adult cell?",
            choice1: "Koko",
            choice2: "Amy",
            choice3: "Ellen",
            choice4: "Dolly"

        }
        4
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 28) {
        let questionObj = {
            question: "Which member of the cat family cannot retract its claws?",
            choice1: "Jaguar",
            choice2: "Tiger",
            choice3: "Leopard",
            choice4: "Cheetah"

        }
        4
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 29) {
        let questionObj = {
            question: "What is the currency of Russian",
            choice1: "Baht",
            choice2: "Grivni",
            choice3: "Frank",
            choice4: "Ruble"

        }
        4
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 30) {
        let questionObj = {
            question: "What language is spoken in Cuba",
            choice1: "French",
            choice2: "Turkish",
            choice3: "German",
            choice4: "Spanish"

        }
        4
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 31) {
        let questionObj = {
            question: "What color is the section of a phone book that lists business number",
            choice1: "Purple",
            choice2: "Green",
            choice3: "Yellow",
            choice4: "Red"

        }
        3
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 32) {
        let questionObj = {
            question: "What is the name of the fairy that aids Peter Pan in J.M.Barrie's play and novel",
            choice1: "Navi",
            choice2: "Puck",
            choice3: "Tinkerbell",
            choice4: "Shobijin"

        }
        3
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 33) {
        let questionObj = {
            question: "What term is commonly used to mean a room in a ship",
            choice1: "Covey",
            choice2: "Slip",
            choice3: "Cabin",
            choice4: "Deck"

        }
        3
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 34) {
        let questionObj = {
            question: "What nation was divided into two seperate states in 1949",
            choice1: "England",
            choice2: "Russia",
            choice3: "Germany",
            choice4: "Italy"

        }
        3
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 35) {
        let questionObj = {
            question: "What gaint wooden animal is associated with the Trojan War?",
            choice1: "Lion",
            choice2: "Bear",
            choice3: "Horse",
            choice4: "Camel"

        }
        3
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 36) {
        let questionObj = {
            question: "Which religion has the most followers",
            choice1: "Islam",
            choice2: "Judaism",
            choice3: "Christianity",
            choice4: "Buddhism"

        }
        3
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 37) {
        let questionObj = {
            question: "Which ocean's water is the coldest",
            choice1: "Atlantic",
            choice2: "Pacific",
            choice3: "Arctic",
            choice4: "Indian"

        }
        3
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 38) {
        let questionObj = {
            question: "Which letter usually signifies a falling grade",
            choice1: "B",
            choice2: "C",
            choice3: "F",
            choice4: "A"

        }
        3
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 39) {
        let questionObj = {
            question: "What is the symbol for Sodium?",
            choice1: "So",
            choice2: "S",
            choice3: "Na",
            choice4: "Sd"

        }
        3
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 40) {
        let questionObj = {
            question: "Which part of the body does glaucoma affect",
            choice1: "Toes",
            choice2: "Ears",
            choice3: "Eyes",
            choice4: "knee"

        }
        3
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 41) {
        let questionObj = {
            question: "Where was the 1994 World cup of Soccer held",
            choice1: "USA",
            choice2: "Italy",
            choice3: "",
            choice4: ""

        }
        1
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 42) {
        let questionObj = {
            question: "Where is the smallest bone in the body located",
            choice1: "Ear",
            choice2: "Heart",
            choice3: "Brain",
            choice4: "Nose"

        }
        1
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 43) {
        let questionObj = {
            question: "Where on the body is the skin the thinnest",
            choice1: "Eyelids",
            choice2: "Shins",
            choice3: "Ears",
            choice4: "Laps"

        }
        1
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 44) {
        let questionObj = {
            question: "With which musical instruments is Eric Clapton mostly associated with",
            choice1: "Guitar",
            choice2: "Piano",
            choice3: "Drums",
            choice4: "Trumpet"

        }
        1
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 45) {
        let questionObj = {
            question: "Which state is nicknamed 'The Empire State'?",
            choice1: "NewYork",
            choice2: "Alaska",
            choice3: "California",
            choice4: "Texas"

        }
        1
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 46) {
        let questionObj = {
            question: "What sort of artist uses chisels and hammers",
            choice1: "Sculptor",
            choice2: "Weaver",
            choice3: "Potter",
            choice4: "Painter"

        }
        1
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 47) {
        let questionObj = {
            question: "Which animal use catch in a net when it hunt?",
            choice1: "Spider",
            choice2: "Mouse",
            choice3: "Reptile",
            choice4: "Snake"

        }
        1
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 48) {
        let questionObj = {
            question: "What iconic car was produced by Volkswagen begining in 1938",
            choice1: "Beetle",
            choice2: "Escort",
            choice3: "Rabbit",
            choice4: "Pinto"

        }
        1
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 49) {
        let questionObj = {
            question: "Which country awards the Purple Heart millitary decoration",
            choice1: "US",
            choice2: "Isreal",
            choice3: "France",
            choice4: "Russia"

        }
        1
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 50) {
        let questionObj = {
            question: "What is the classification of a rhinoceros",
            choice1: "Mammal",
            choice2: "Reptile",
            choice3: "Insects",
            choice4: "Birds"

        }
        1
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 51) {
        let questionObj = {
            question: "whch month has an extra day during a leap year",
            choice1: "February",
            choice2: "June",
            choice3: "July",
            choice4: "May"

        }
        1
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
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
    }
    if (randomNumber == 53) {
        let questionObj = {
            question: "What is the nearest neighbour in space",
            choice1: "Moon",
            choice2: "Sun",
            choice3: "Mars",
            choice4: "uranus"

        }
        1
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 54) {
        let questionObj = {
            question: "Which bands realsed'Hotel California in 1997",
            choice1: "Eagles",
            choice2: "Coldplay",
            choice3: "Nirvana",
            choice4: "Beatles"

        }
        1
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    if (randomNumber == 54) {
        let questionObj = {
            question: "Who sings 'Halo'",
            choice1: "Beyonce",
            choice2: "Cher",
            choice3: "Rihanna",
            choice4: "Madonna"

        }
        1
        allQuestions.push(questionObj)
        document.getElementById("questionBox").innerHTML = `${questionObj.question}`
        document.getElementById("optionA").innerHTML = `${questionObj.choice1}`
        document.getElementById("optionB").innerHTML = `${questionObj.choice2}`
        document.getElementById("optionC").innerHTML = `${questionObj.choice3}`
        document.getElementById("optionD").innerHTML = `${questionObj.choice4}`
    }
    // if (randomNumber==54) {
    //     let questionObj={
    //         question:"",
    //         choice1:"",
    //         choice2:"",
    //         choice3:"", 
    //         choice4:""

    //     }
    //     1
    //     allQuestions.push(questionObj)
    //     document.getElementById("questionBox").innerHTML=`${questionObj.question}`
    //     document.getElementById("optionA").innerHTML=`${questionObj.choice1}`
    //     document.getElementById("optionB").innerHTML=`${questionObj.choice2}`
    //     document.getElementById("optionC").innerHTML=`${questionObj.choice3}`
    //     document.getElementById("optionD").innerHTML=`${questionObj.choice4}`
    // }

}
// const answerD=()=>{
//     window.location="moneylist.html"
// }
// const btnProvider=()=>{
//     // var randomNumber=Math.floor(Math.random()*allQuestions.lenght)
//     // console.log(randomNumber);
//     document.getElementById("question").innerHTML=randomQuestion.

// }

