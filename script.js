const getAllDivs=document.querySelectorAll(".container > div");
const getAllspans=document.querySelectorAll("div span");
const getContainer=document.querySelector(".container");
const getWinnerShow=document.querySelector(".winner");
var getSpanWinner=document.querySelector(".win");


var rows=3;
var columns=3;
var array2d = [
    ['1', '2','3'],
    ['4', '5','6'],
    ['7', '8','9']
  ];

var gameEnd=false;
var winner;

var isDraw = Draw();


var counter=0;

for(let i=0; i < getAllDivs.length; i++){
    getAllDivs[i].addEventListener('click',()=>{
        console.log("is game end : ?  " +gameEnd);
        if (!gameEnd){
            
        if (getAllspans[i].textContent=="X" ||getAllspans[i].textContent=="O"){
                alert("chosse an empty square");
        }
        else{

        if ( counter % 2 == 0){
            getAllspans[i].textContent="X";
            getAllspans[i].style.color="#545454";
            Check(i,'X');
        }
        else if (counter % 2 != 0){
            getAllspans[i].textContent="O"; 
            getAllspans[i].style.color="#f2ebd3";
            Check(i,'O');  
        }
         console.log(counter);
         counter++;  
         

        }
    }
    });
}

function Check(index,value){    

    array2d[parseInt(index/3)][index%3]=value;

    /*************     HORIZANTALLY    ****************/
    
    for(let i=0 ; i < 3 ; i++){
        for(let j=0; j < 1; j++){     
             if (array2d[i][j]==array2d[i][j+1] && array2d[i][j+1]==array2d[i][j+2]){
                   // alert(array2d[i][j] + " WINS");
                    gameEnd=true;
                    console.log(gameEnd);
                    winner=array2d[i][j];
                    
             }
              }
    }
    /******************  VERTICALLY ************************/
    for(let i=0 ; i < 3 ; i++){
        for(let j=0; j < 1; j++){
            if (array2d[j][i]==array2d[j+1][i] && array2d[j+1][i]==array2d[j+2][i]){
               //alert(array2d[j][i] + " WINS"); 
               gameEnd=true;
               console.log(gameEnd);
               winner=array2d[j][i];
              
            }
        }
    }

    /*******************DIAGONALLY *****************/
    if (array2d[0][0] == array2d[1][1] && array2d[1][1] == array2d[2][2]){
       // alert(array2d[0][0] + " WINS"); 
        gameEnd=true;
        console.log(gameEnd);
        winner=array2d[0][0];
     
    }

    for (let i = 0; i < 1; i++) {
        for (let j = 2; j > 1; j--) {
            if (array2d[i][j] == array2d[i+1][j-1] && array2d[i+1][j-1]==array2d[i+2][j-2]){
               // alert(array2d[i][j] + " WINS"); 
                gameEnd=true;
                console.log(gameEnd);
                winner=array2d[i][j];
            }
        }
    }

    if (gameEnd){
        if (winner!=""){
         getSpanWinner.textContent=winner;
         getContainer.style.display="none";
         getWinnerShow.style.display="block";
        }else{
            getWinnerShow.textContent="DRAW !";
        }
        }
    }

function Draw(){
    let isDraw=false;

    return isDraw;
}
function restart(){
    // reset the array
    var counter1=1;
    for(let i=0; i < 3 ; i++){
        for(let j=0; j < 3; j++){
            array2d[i][j]=counter1;
            counter1++;
        }
    }
    //reset the spans
    for(let i=0; i < getAllspans.length; i++){
        getAllspans[i].textContent="";
    }
    // reset global counter
    counter=0;
    gameEnd=false;
    getSpanWinner.textContent="";

    if (getContainer.style.display=="none"){
        getContainer.style.display="block";
        getWinnerShow.style.display="none";
    }
}