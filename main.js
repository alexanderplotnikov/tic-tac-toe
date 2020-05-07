 //Modules
//gameBoard
let mainNode = document.querySelector(".container");
const gameBoard = (function (){
    let selection = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const getSelection = () => selection;
    
    const makeGrid = () => {
        let j = 0;
        for(let i = 0; i < 9; i++){
            let cell = document.createElement("DIV");
            let mark = '';
            let updateGrid = () => {
                j % 2 == 0 ? mark = "x" : mark = "o";
                selection.splice(i, 1, mark); 
                cell.innerHTML = selection[i];
                j++;
                cell.removeEventListener("click", updateGrid);
                isWinner();
            }
            cell.addEventListener("click", updateGrid);
            mainNode.appendChild(cell);
        }
    }
    const resetBtn = document.getElementById("resetBtn");
    resetBtn.addEventListener("click", () => {
        resetGrid();
        player1 = {};
        player2 = {};
        mainNode.classList.add("hidden");
        newGameBtn.classList.toggle("hidden");
        resetBtn.classList.toggle("hidden");
    })
    const resetGrid = () => {
        selection = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        mainNode.innerHTML = "";
        turnCount = 9;
        makeGrid();
    }
    function winMessage(mark) {
        let name;
        player1.getMark() == mark ? name = player1.getName() : name = player2.getName();
        alert(`${name} won this round`);
        resetGrid();
    }
    let turnCount = 9;
    
    const isWinner = () => {
            turnCount--;
            if (selection[0] == selection[1] && selection[1] == selection[2]){
                winMessage(selection[0]);
            }
            else if(selection[3] == selection[4] && selection[4] == selection[5]){
                winMessage(selection[3]);
            }
            else if(selection[6] == selection[7] && selection[7] == selection[8]){
                winMessage(selection[6]);
            }
            else if(selection[0] == selection[3] && selection[3] == selection[6]){
                winMessage(selection[0]);
            }
            else if(selection[1] == selection[4] && selection[4] == selection[7]){
                winMessage(selection[1]);
            }
            else if(selection[2] == selection[5] && selection[5] == selection[8]){
                winMessage(selection[2]);
            }
            else if(selection[0] == selection[4] && selection[4] == selection[8]){
                winMessage(selection[0]);
            }
            else if(selection[2] == selection[4] && selection[4] == selection[6]){
                winMessage(selection[2]);
            }
            else if(turnCount == 0){
                resetGrid();
                return alert("Tie");
            }        
    };
    return {
        makeGrid, getSelection,
    }
})();

//displayController 
const displayController = (function (){ 
    gameBoard.makeGrid();
})(); 
//Factory Function
const Player = (name, mark) => {
    const getMark = () => mark;
    const getName = () => name;
    return {
        getName, getMark,
    }
};

const newGameBtn = document.getElementById("newGameBtn");
const playerOne = document.getElementById("playerOne");
const playerTwo = document.getElementById("playerTwo");
let player1;
let player2;
newGameBtn.addEventListener("click", () => {
    let randNum = Math.floor(Math.random() * 2);
    randNum == 1 ? markOne = "x": markOne = "o";
    randNum == 1 ? markTwo = "o": markTwo = "x";
    if(mainNode.classList.contains("hidden")){
        mainNode.classList.remove("hidden");
    }
    newGameBtn.classList.toggle("hidden");
    resetBtn.classList.toggle("hidden");
    player1 = Player(playerOne.value, markOne);
    player2 = Player(playerTwo.value, markTwo);
    return player1, player2; 
});