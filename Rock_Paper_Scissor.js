let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let user = document.querySelector("#user");
let computer = document.querySelector("#computer");
let msg = document.querySelector("#msg");


let userWin = 0
let computerWin = 0
let user_input;
let computer_input;


let computerShow = () => {
    let arr = [
        "Rock",
        "Paper",
        "Scissor",
    ]
    computer_input = arr[Math.floor(Math.random() * 3)]
}


// All Condition's
let action = () => {
    if (user_input === "Rock" && computer_input === "Scissor"){
    msg.innerHTML = ("You Win!, 'Rock' Beat The 'Scissor'")
    user.innerHTML = userWin+= 1
    msg.style.color = "green"
    }else if (user_input === "Paper" && computer_input === "Rock"){
        msg.innerHTML = ("You Win!, 'Paper' Beat The 'Rock'")
        user.innerHTML = userWin+= 1
        msg.style.color = "green"
    }else if (user_input === "Scissor" && computer_input === "Paper"){
        msg.innerHTML = ("You Win!, 'Scissor' Beat The 'Paper'")
        user.innerHTML = userWin+= 1
        msg.style.color = "green"
    }else if (user_input === computer_input){
        msg.innerHTML = ("Match Is 'Tie'")
        user.innerHTML = userWin+= 0
        msg.style.color = "white"
    }else{
        msg.innerHTML = ("You Lose !")
        computer.innerHTML = computerWin+= 1
        msg.style.color = "red"
    }
}


// Click Event On Rock button
rock.addEventListener("click", () => {
    user_input = "Rock"
    console.log("User Choise:- ", user_input)
    console.log("Computer Choise:- ", computer_input)
    msg.style.display = "block"
    action();
    computerShow();
})

// Click Event On Paper button
paper.addEventListener("click", () => {
    user_input = "Paper"
    console.log("User Choise:- ", user_input)
    console.log("Computer Choise:- ", computer_input) 
    msg.style.display = "block"
    action();
    computerShow()
})

// Click Event On Scissor button
scissor.addEventListener("click", () => {
    user_input = "Scissor"
    console.log("User Choise:- ", user_input)
    console.log("Computer Choise:- ", computer_input)
    msg.style.display = "block"
    action();
    computerShow();
})