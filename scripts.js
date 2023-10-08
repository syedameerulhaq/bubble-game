var timer=60;
var score=0;
var rand =0;
function increaseScore(){
   score+=10;
   document.querySelector("#scoreVal").textContent=score;
}
 function makeBubble(){
 var bubbleDiv = " ";
 for(var i=1;i<=200;i++){
    var randomNumber = Math.floor(Math.random() * 10) + 1
    bubbleDiv +=`<div id="bubble"><h3>${randomNumber}</h3></div>`;
 }
 document.querySelector(".pbottom").innerHTML = bubbleDiv;
}
function runTimer(){
   setInterval(function( ) {
   if(timer>0){
      timer--;
      document.querySelector("#timerval").textContent=timer;
   }
   else{
      clearTimeout();
      document.querySelector(".pbottom").innerHTML=`<h1 class="center">Game over</h1>`;
   }
      },1000);
   

}
function getNewHit(){
   rand =Math.floor(Math.random()*10)+1;
   document.querySelector("#hitval").textContent= rand;

}
document.querySelector(".pbottom").addEventListener("click",function(details){
   var clickedNum=(details.target.textContent)*1;
   if(rand==clickedNum){
      increaseScore();
      makeBubble();
      getNewHit();
   }
   else{
      document.querySelector(".pbottom").innerHTML = `<h1 class="center">Game over</h1>`;
   }

})

getNewHit();
runTimer();
makeBubble();
increaseScore();

 

