// JavaScript Document
console.log("Howdy!");

/**********************/
/* Geluid Van Rapture */
/**********************/

// Haal het <audio>-element op
var audio = document.getElementById('mijn audio');

// Haal de knoppen op
var playButton = document.querySelector('.button-with-svg');
var toggleButton = document.querySelector('.toggle-audio-button');

// Voeg een eventlistener toe aan de afspeelknop om de audio af te spelen of te pauzeren
playButton.onclick = toggleAudio;
toggleButton.onclick = toggleAudio;

// Functie om de audio af te spelen/pauzeren
function toggleAudio() {
  if (audio.paused) {
    audio.play();
    playButton.innerHTML = toggleButton.innerHTML = '<img src="images/Audio aan.svg" alt="Audio aan">';
  } else {
    audio.pause();
    playButton.innerHTML = toggleButton.innerHTML = '<img src="images/Audio uit.svg" alt="Audio uit">';
  }
}



/**********************/
/*****pop up knop 1****/
/**********************/

var button1 = document.getElementById("BuildingButton1")
var popup1 = document.getElementById("popup1")

button1.onclick = popup1zichtbaar;

function popup1zichtbaar() {
  popup1.classList.toggle("zichtbaar1");
}

/**********************/
/*******  Audio  *******/
/**********************/

var button1 = document.getElementById("BuildingButton1");
var popup1 = document.getElementById("popup1");
var popupAudio = document.getElementById("popupAudio"); 

button1.onclick = popup1zichtbaar;
popupAudio.volume = 0.4;

function popup1zichtbaar() {
  popup1.classList.toggle("zichtbaar");
  popupAudio.play();
}





/**********************/
/*****pop up knop 1****/
/**********************/

var button2 = document.getElementById("BuildingButton2")
var popup2 = document.getElementById("popup2")

button2.onclick = popup2zichtbaar;

function popup2zichtbaar() {
  popup2.classList.toggle("zichtbaar");
}







/*****BUBBELS******/ 

function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.style.left = Math.random() * 100 + 'vw'; // Willekeurige horizontale positie
  document.body.appendChild(bubble);

  bubble.addEventListener('animationiteration', () => {
      bubble.remove();
  });
}

// Creëer regelmatig nieuwe bubbels
setInterval(createBubble, 2000); // Hier elke 2 seconden een nieuwe bubbel