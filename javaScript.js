let moves = document.querySelectorAll(".move");
let user = document.querySelector(".user");
let computer = document.querySelector(".computer");
let result = document.querySelector(".result");
let stone = "👊";
let paper = "✋";
let scissor = "🖖";

moves.forEach((move) => {
    move.addEventListener("click", () => {
        user.innerText = move.innerText;
        computer.innerText = computerMove();
        result.innerText = checkWinner(user.innerText, computer.innerText);
    });
});

const computerMove = () => {
    const values = [stone, paper, scissor];
    let randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
}

const checkWinner = (x, y) => {
    if(x === '👊' && y === '✋')
        return "Computer Wins!";
    else if(x === '✋' && y === '🖖')
        return "Computer Wins!";
    else if(x === '🖖' && y === '👊')
        return "Computer Wins!";
    else if(x === y)
        return "Draw!";
    else    
        return "You Wins!";
}