//Modules

//gameBoard
const gameBoard = (function (document){
    const selection = ['', '', '', '', '', '', '', '', ''];
    const mainNode = document.querySelector(".container");
    const makeGrid = () => {
        let j = 0;
        for(let i = 0; i < 9; i++){
            let cell = document.createElement("DIV");
            let mark = '';
            
            cell.addEventListener("click", () => {
                j % 2 == 0 ? mark = "x" : mark = "o";
                selection.splice(i, 1, mark); 
                cell.innerHTML = selection[i];
                this.removeEventListener("click", this.cell);
                j++;
            })
            mainNode.appendChild(cell);
        }
    }  
    return {
        makeGrid,
    }
})(document);

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
