let title ="HeadsvsTails";
let h1Element= document.createElement("h1");
h1Element.innerHTML= title;

var flip =Math.floor(Math.random()* 2)
console.log (flip);

if ( flip ===0){
    drawHeads(200,200, Gold);
}
else{ 
    drawTails(400,200,Silver);
}




function flipcoin(){}

