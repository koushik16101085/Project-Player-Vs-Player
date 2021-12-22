// function init(){
    (function init(){
    const inputElm = document.querySelector("#input");
//console.log(inputElm);
const formElm = document.querySelector("form");
//console.log(formElm);
const winScoreElm = document.querySelector(".winScore");
//console.log(winnerScore);
const p1BtnElm = document.querySelector(".p1Btn");
//console.log(p1BtnElm);
const p1ScoreElm = document.querySelector(".p1Score");
//console.log(p1ScoreElm);
const p2BtnElm = document.querySelector(".p2Btn");
//console.log(p2BtnElm);
const p2ScoreElm = document.querySelector(".p2Score");
//console.log(p2ScoreElm);
const resetBtnElm = document.querySelector (".reset");
//console.log(resetBtnElm);

// data layer;
//view layer(DOM);
let winScore = 20;
let p1Score = 0;
let p2Score = 0;

let turn = 'player1';
//let turn = 'player2';


// setting initial score.
winScoreElm.textContent = winScore;
p1ScoreElm.textContent = p1Score;
p2ScoreElm.textContent = p2Score; 

//0.99 =0;
// 9.99
// 19.99

//generate random number for player1 and player2 click.
function generateRanNum(max){
   return Math.floor(Math.random() * max + 1) ;
    
}

// function validateInput(){

// }

formElm.addEventListener("submit",e =>{
    e.preventDefault();
    const inputVal = +inputElm.value;
   // validation.
  // validateInput();
    if (inputVal === '' || inputVal < 1){
        if(!document.querySelector('.invalid-input')){
            formElm.insertAdjacentHTML(
                'beforebegin',
                '<p class="invalid-input">Please input valid number</p>'
            )
        }
        // formElm.insertAdjacentHTML(
        //     'beforebegin',
        //     '<p class= "invalid-input">Please input valid numbers ..... </p>'
        // )
    }else{
        if(document.querySelector('.invalid-input')){
            document.querySelector('.invalid-input').remove();
        }
        // setting data layer.
        winScore = +inputElm.value;
        // setting view layer;
        winScoreElm.textContent = inputElm.value;
        // console.log(typeof inputElm.value);
        inputElm.value = '';
        //change to all default state;
        initialPlayState();
    }
    //  setting data layer.
    //  winScore = +inputElm.value;
    //  setting view layer.
    //  winScoreElm.textContent = inputElm.value;
    //  console.log(typeof inputElm.value);
    //  inputElm.value = '';
    //  change to all default state;
    //  initialPlayState();

});
p1BtnElm.addEventListener('click', e =>{
    //console.log("Clicked");
    if(turn === 'player1'){
        //p1Score++;
        p1Score = generateRanNum(winScore);
        p1ScoreElm.textContent = p1Score;
        turn = 'player2'; 
        p1BtnElm.setAttribute ('disabled', 'disabled');
        p2BtnElm.removeAttribute('disabled');

        // check winning state;
        checkWinner();
        // if (winScore === p1Score){
        //     p1BtnElm.removeAttribute('disabled');
        //     p2BtnElm.removeAttribute('disabled');
        // }
    }
    // p1Score++;
    // p1ScoreElm.textContent = p1Score;
});

function checkWinner(){
  const isP1Winner = winScore === p1Score;
  const isP2Winner = winScore === p2Score;
  console.log(isP1Winner, isP2Winner);
    //if(winScore === p1Score || winScore === p2Score){
        // if(winScore === p1Score){
        if(isP1Winner || isP2Winner){
        p1BtnElm.setAttribute('disabled', 'disabled');
        p2BtnElm.setAttribute('disabled', 'disabled');
    }
//}
//}
//}
    // else if(winScore === p2Score){
    //     p1BtnElm.removeAttribute('disabled');
    //     p2BtnElm.removeAttribute('disabled');

    // }
    displayWinner(isP1Winner, isP2Winner);
}
function displayWinner(p1WinState, p2WinState){
    if(p1WinState){
        formElm.insertAdjacentHTML ('beforebegin','<p class="winnerMes>Player1 is Winner</p>');
    }else if (p2WinState) {
         formElm.insertAdjacentHTML ('beforebegin','<p class="winnerMas>Player2 is Winner </p>');
    }
}
p2BtnElm.addEventListener('click', e =>{
    //console.log("Clicked");
    if(turn === 'player2'){
        //p2Score++;
        p2Score = generateRanNum(winScore);
        p2ScoreElm.textContent = p2Score;
        turn = 'player1';
        p2BtnElm.setAttribute ('disabled','disabled');
        p1BtnElm.removeAttribute ('disabled');

        // check winning state.
        if (winScore === p2Score){
            p1BtnElm.removeAttribute('disabled');
            p2BtnElm.removeAttribute('disabled');
        }
    }
    //p2Score++;
    //p2ScoreElm.textContent = p2Score;
});

resetBtnElm.addEventListener('click',e=>{
   winScore = 20;
//    p1Score = 0;
//    p2Score = 0;
//    turn = 'player1';
//    winScoreElm.textContent = winScore;
//    p1ScoreElm.textContent = p1Score;
//    p2ScoreElm.textContent = p2Score;
//    p1BtnElm.removeAttribute('disabled');
//    p2BtnElm.removeAttribute('disabled');
   initialPlayState();
})

function initialPlayState(){
    p1Score = 0;
    p2Score = 0;
    turn = 'player1';
    winScoreElm.textContent = winScore;
    p1ScoreElm.textContent = p1Score;
    p2ScoreElm.textContent = p2Score;
    p1BtnElm.removeAttribute('disabled');
    p2BtnElm.removeAttribute('disabled');
    //reset winning message.
    if(document.querySelector('.winnerMes')){
        document.querySelector('.winnerMes').remove();
    }

}


})();
//init();