// Gradient picker

var css = document.querySelector('h3');
var colour1 = document.querySelector('.colour1');
var colour2 = document.querySelector('.colour2');
var body = document.getElementById('gradient');

function displayCSSValue() {
	css.textContent = body.style.background + ';';
}

function setGradient() {
	body.style.background = 'linear-gradient(to right, ' + colour1.value + ', ' + colour2.value + ')';
	displayCSSValue();
}

colour1.addEventListener('input', setGradient);
colour2.addEventListener('input', setGradient);

// Random button colour-picker

var button = document.querySelector('button');

function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomColour() {
	// var r = Math.floor(Math.random() * 255);
	// var g = Math.floor(Math.random() * 255);
	// var b = Math.floor(Math.random() * 255);
	// return 'rgb(' + r + ', ' + g + ', ' + b + ')';


	// Could possibly be placed in a loop
	var hexCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
	var r1 = hexCharacters[getRandomInteger(0, 15)];
	var r2 = hexCharacters[getRandomInteger(0, 15)];
	var g1 = hexCharacters[getRandomInteger(0, 15)];
	var g2 = hexCharacters[getRandomInteger(0, 15)];
	var b1 = hexCharacters[getRandomInteger(0, 15)];
	var b2 = hexCharacters[getRandomInteger(0, 15)];

	return '#' + r1 + r2 + g1 + g2 + b1 + b2;
}

function setRandomColour() {
	var tempColour1 = getRandomColour();
	var tempColour2 = getRandomColour();

	body.style.background = 'linear-gradient(to right, ' + tempColour1 + ', ' + tempColour2 + ')';
	displayCSSValue();
	// Update input colours when button is pressed
	updateInputColours(tempColour1, tempColour2);

	return [tempColour1, tempColour2];
}

button.addEventListener('click', setRandomColour);

// Set random background on page load

var tempColours = setRandomColour();

// Set input colour to match background on page load

function updateInputColours(input1, input2) {
	var inputValues = document.querySelectorAll('input');
	inputValues[0] = inputValues[0].setAttribute('value', input1);
	inputValues[1] = inputValues[1].setAttribute('value', input2);
}

updateInputColours(tempColours[0], tempColours[1]);

// Display inital CSS linear-gradient property on page load

displayCSSValue();