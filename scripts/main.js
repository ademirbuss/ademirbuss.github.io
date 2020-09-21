function setUserName() 
{
	let myName = prompt('Informe seu nome.');
	if (!myName) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Bem vindo ' + myName;
	}	
}

const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

myHeading.onclick = function()
{
	alert('Test Click');
}

let myImage = document.querySelector('img');

myImage.onclick = function() 
{
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-logo.jpg') {
      myImage.setAttribute('src','images/firefox-monitor-logo.jpg');
    } else {
      myImage.setAttribute('src','images/firefox-logo.jpg');
    }
}

let myButton = document.querySelector('button');

myButton.onclick = function()
{
	setUserName();
}

let storedName = localStorage.getItem('name');

if(!storedName) {
	setUserName();
} else {
	myHeading.textContent = 'Bem vindo ' + storedName;
}