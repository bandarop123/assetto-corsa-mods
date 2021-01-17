let userscore = 0;
let computerScore = 0;
const user_id = document.getElementById("user_score");
const computer_id = document.getElementById("computer_score");
const scoreboard = document.querySelector(".score_board");
const result = document.querySelector(".result");
const rockbut = document.getElementById("rock");
const paperbut = document.getElementById("paper");
const scissorsbut = document.getElementById("scissors");
const resetbut = document.getElementById("reset");

function reset() {
   userscore = 0;
   user_id.innerHTML = 0;
   computerScore = 0;
   computer_id.innerHTML = 0;
}

function win() {
   userscore++;
   user_id.innerHTML = userscore;
}

function lose() {
computerScore++;
computer_id.innerHTML = computerScore;

}

function computerinput() {
   const input = ['r', 'p', 's'];
   const computernum = Math.floor(Math.random() * 3);
   return input[computernum];
}
function game(userinput) {
   const cn = computerinput();
   console.log(userinput + cn);
   switch (userinput + cn) {
      case "rs":
         case "pr":
            case "sp":
               win();
               break;
               case "rp":
                  case "ps":
                     case "sr":
                        lose();
                        break;
                        case "rr":
                           case "pp":
                              case "ss":
                                 console.log("draw");

   }
   
}
function main() {
rockbut.addEventListener('click', function() { game("r"); })
paperbut.addEventListener('click', function() { game("p");})
scissorsbut.addEventListener('click', function() { game("s");})
resetbut.addEventListener('click', function() { reset();})
}

main();
