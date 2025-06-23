const resultado = document.querySelector("#result-message")
const myScore = document.querySelector("#player-score")
const robotScore = document.querySelector("#computer-score")
const myChoice = document.querySelector("#player-choice")
const robotChoice = document.querySelector("#computer-choice")


let pointHuman = 0
let pointRobot = 0
const emojis = {
    rock: "☄️",
    paper: "📜",
    scissors: "⚔️"
}

const playHuman = (humanChoice) => {
    const robot = playRobot()

    myChoice.innerHTML = emojis[humanChoice];
    robotChoice.innerHTML = emojis[robot];

    quemVence(humanChoice, robot)

}



const playRobot = () => {
    const choices = ["paper", "rock", "scissors"]
    const numberRandom = Math.floor(Math.random() * 3)

    return choices[numberRandom]

}

const quemVence = (human, robot) => {


    console.log(human, robot)


    if (human === robot) {
        resultado.innerHTML = "Deu empate"
    } else if ((human === 'rock' && robot === 'scissors') ||
        (human === 'scissors' && robot === 'paper') ||
        (human === 'paper' && robot === 'rock')
    ) {
        resultado.innerHTML = " Você venceu"
        pointHuman++
        myScore.innerHTML = pointHuman
    }
    else {
        resultado.innerHTML = "Império Venceu"
        pointRobot++
        robotScore.innerHTML = pointRobot

    }
}

reset = () =>{
pointHuman = 0
pointRobot = 0

 resultado.innerHTML = "Jogo Reiniciado"
 robotScore.innerHTML = "0"
 myScore.innerHTML = "0"

 myChoice.innerHTML = "?"
    robotChoice.innerHTML = "?"
}



