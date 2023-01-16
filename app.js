let tekstJeden = document.getElementById("jeden");
let tekstDwa = document.getElementById("dwa");
let tekstTrzy = document.getElementById("trzy");
let tekstCztery = document.getElementById("cztery");
let tekstPiec = document.getElementById("piec");

let forwardOne = document.getElementById("for1");
let forwardTwo = document.getElementById("for2");
let forwardThree = document.getElementById("for3");
let forwardFour = document.getElementById("for4");
let forwardFive = document.getElementById("for5");

let backwardOne = document.getElementById("back1");
let backwardTwo = document.getElementById("back2");
let backwardThree = document.getElementById("back3");
let backwardFour = document.getElementById("back4");
let backwardFive = document.getElementById("back5");

//let backward = document.getElementByClassName('fa-backward');
//let forward = document.getElementByClassName('fa-forward');


tekstDwa.hidden = true;
tekstTrzy.hidden = true;
tekstCztery.hidden = true;
tekstPiec.hidden = true;


forwardTwo.hidden = true;
forwardThree.hidden = true;
forwardFour.hidden = true;
forwardFive.hidden = true;

backwardTwo.hidden = true;
backwardThree.hidden = true;
backwardFour.hidden = true;
backwardFive.hidden = true;


forwardOne.onclick = function(){
   forwardTwo.hidden = false;
   forwardOne.hidden = true;
   tekstDwa.hidden = false;
   tekstJeden.hidden = true;
}

forwardTwo.onclick = function(){
   forwardThree.hidden = false;
   forwardTwo.hidden = true;
   tekstTrzy.hidden = false;
   tekstDwa.hidden = true;
}

forwardThree.onclick = function(){
   forwardFour.hidden = false;
   forwardThree.hidden = true;
   tekstCztery.hidden = false;
   tekstTrzy.hidden = true;
}

forwardFour.onclick = function(){
   forwardFive.hidden = false;
   forwardFour.hidden = true;
   tekstPiec.hidden = false;
   tekstCztery.hidden = true;
}



forwardFive.onclick = function(){
   forwardOne.hidden = false;
   forwardFive.hidden = true;
   tekstJeden.hidden = false;
   tekstPiec.hidden = true;
}

backwardOne.onclick = function(){
   backwardTwo.hidden = false;
   backwardOne.hidden = true;
   tekstPiec.hidden = false;
   tekstJeden.hidden = true;
   
}

backwardTwo.onclick = function(){
   backwardThree.hidden = false;
   backwardTwo.hidden = true;
   tekstCztery.hidden = false;
   tekstPiec.hidden = true;
   
}

backwardThree.onclick = function(){
   backwardFour.hidden = false;
   backwardThree.hidden = true;
   tekstTrzy.hidden = false;
   tekstCztery.hidden = true;
   
}

backwardFour.onclick = function(){
   backwardFive.hidden = false;
   backwardFour.hidden = true;
   tekstDwa.hidden = false;
   tekstTrzy.hidden = true;
   
}
   

