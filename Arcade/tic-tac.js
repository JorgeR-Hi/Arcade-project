let playerText= document.getElementById("playerText");
const restartButton= document.getElementById("restart");
const boxes= Array.from(document.getElementsByClassName("cell"));
const winMessage= document.querySelector(".winning-message");
const currentPlayerText=document.querySelector(".currentPlayerText")
const winningText= document.querySelector("#winningMessage")
let gameOver= false;
winningText.innerHTML="";
currentPlayerText.innerHTML="The frist turn is x's";
winMessage.style.display="none";
const womboCombos=[  
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
]
//winningText.innerHTML="Hello world"
//console.log(boxs);

const circlePlayer="O";
const xPlayer="X";
let currentPlayer= xPlayer;
let spaces= Array(9).fill(null);
console.log(spaces);


//event listener for the cells 
const startGame= () => {
  boxes.forEach(box => box.addEventListener("click", boxClicked))
    
}

//adds the mark and switches the turn between the players 
function boxClicked(ev){
  console.log(ev.target);
  const ind=ev.target.id;

  if(!spaces[ind]){
    spaces[ind]=currentPlayer;
    ev.target.innerText=currentPlayer
    currentPlayer = currentPlayer == xPlayer ? circlePlayer : xPlayer;
  } 
  currentPlayerText.innerHTML= "It is now"+" "+ currentPlayer+" "+"turn"
}

//checks result
function checkResults(){
  for(let i=0; i<=womboCombos.length; i++){
    console.log(womboCombos)
  }
}

//resets the board 
function restart(){
  spaces.fill(null);
  
  boxes.forEach( box=> {
    box.innerText="";
  });
  winMessage.style.display="none";
  currentPlayerText="";
  winningText="";
  currentPlayer=xPlayer;
}
restartButton.addEventListener("click", restart)

startGame();

