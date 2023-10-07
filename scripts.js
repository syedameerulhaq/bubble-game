 var bubbleDiv = " ";
 for(var i=1;i<=200;i++){
    var randomNumber = Math.floor(Math.random() * 10) + 1
    bubbleDiv +=`<div id="bubble"><h3>${randomNumber}</h3></div>`;

 }
 document.querySelector(".pbottom").innerHTML = bubbleDiv ;


 

