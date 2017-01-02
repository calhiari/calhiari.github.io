var myImage = document.querySelector('img');

myImage.onclick = function()
{
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/PIC18F8720.jpg') {
      myImage.setAttribute ('src','images/PIC18F4550.jpg');
    } else {
      myImage.setAttribute ('src','images/PIC18F8720.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName()
{
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Microcontrollers, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Microcontrollers, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}