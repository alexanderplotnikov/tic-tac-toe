//Modules

//gameBoard
const gameBoard = (function (document){
    const selection = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const getSelection = () => selection;
    const mainNode = document.querySelector(".container");
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
    let turnCount = 9;
    const isWinner = () => {
            turnCount--;
            if (selection[0] == selection[1] && selection[1] == selection[2]){
                return alert("Player won");
            }
            else if(selection[3] == selection[4] && selection[4] == selection[5]){
                return alert("Player won");
            }
            else if(selection[6] == selection[7] && selection[7] == selection[8]){
                return alert("Player won");
            }
            else if(selection[0] == selection[3] && selection[3] == selection[6]){
                return alert("Player won");
            }
            else if(selection[1] == selection[4] && selection[4] == selection[7]){
                return alert("Player won");
            }
            else if(selection[2] == selection[5] && selection[5] == selection[8]){
                return alert("Player won");
            }
            else if(selection[0] == selection[4] && selection[4] == selection[8]){
                return alert("Player won");
            }
            else if(selection[2] == selection[4] && selection[4] == selection[6]){
                return alert("Player won");
            }
            else if(turnCount == 0){
                return alert("Tie");
            }        
    };
    return {
        makeGrid, getSelection,
    }
})(document);1

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

let player1 = Player("John", "x");
let player2 = Player("Wick", "o");
