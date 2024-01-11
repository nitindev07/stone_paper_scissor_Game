let userScore = 0
let compScore = 0

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector('#msg')
const user = document.querySelector('#user-score')
const computer = document.querySelector('comp-score')

const genCompChoice= ()=>{
    const option =['rock', 'paper', 'scissor']
    const ranindx = Math.floor(Math.random() * 3)
    return option[ranindx]
}

const showWinner=(userwin , userChoice, compChoice)=>{
    if(userwin === true){
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = 'green'
        userScore++
        user.innerText=userScore
    }else{
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor = 'red'
        compScore++
        computer.innerText=compScore

    }
}

const drawGame = () =>{
    msg.innerText = 'Game was Darw . Play again'
    msg.style.backgroundColor = '#081b31'
}

const playGame = (userChoice)=>{
    const compChoice = genCompChoice()
    
    if(userChoice === compChoice){
        drawGame()
    }else{
        let userwin = true
        if(userChoice ==="rock"){
            userwin = compChoice === "paper" ? false : true
        }else if(userChoice ==="paper"){
            userwin = compChoice === "scissor" ? false : true
        }else{
            userwin = compChoice === "rock" ? false : true
        }
        showWinner(userwin, userChoice, compChoice)
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute('id')
        playGame(userChoice)
    })
})
