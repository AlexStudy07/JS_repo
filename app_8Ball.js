var playerName; //variable for name from HTML input
var checkBtn; // buttin for name check
var userQuescion = '';
var randomNumber = Math.floor(Math.random() * 8);
var eightBall = '';
function getNameFromInput() {
    playerName = document.getElementById('Name').value;
    playerName ? console.log(`Hello, ${playerName}!`) : console.log('Hello guest!');
    document.getElementById("yBtn").disabled = false;
    document.getElementById("nBtn").disabled = false;
}
function noAnswer() {
    console.log('Good Bye');
    document.getElementById("yBtn").disabled = true;
}
function activateQuescionField() {
    document.getElementById("quescion").disabled = false;
    
    document.getElementById("nBtn").disabled = true;
}
function getQuescionFromInput() {
    userQuescion = document.getElementById('quescion').value;
    userQuescion ? document.getElementById("ckQuescionBtn").disabled = false : console.log('Quescion field is empty');
}
function checkQuescion() {
var randomNumber = Math.floor(Math.random() * 8);
eightBall = randomNumber;
switch(eightBall) {
    case 0:
        console.log('It is certain');// code block
      break;
      case 1:
        console.log('It is decidedly so');// code block
      break;
      case 2:
        console.log('Reply hazy try again');// code block
      break;
      case 3:
        console.log('Cannot predict now');// code block
      break;
      case 4:
        console.log('Do not count on it');// code block
      break;
      case 5:
        console.log('My sources say no');// code block
      break;
      case 6:
        console.log('Outlook not so good');// code block
      break;
      case 7:
        console.log('Signs point to yes');// code block
      break;
  }
}