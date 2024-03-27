// Declare variables below to save the different divs of your story.

let storyOpening = document.querySelector('.story-opening'); 

let optionOneScreen = document.querySelector('.option-one-screen');
let optionOneButton = document.querySelector('.option-one');

let directionOneButton = document.querySelector('.direction-one')
let directionTwoButton = document.querySelector('.direction-two')

let optionTwoScreen = document.querySelector('.option-two-screen');
let optionTwoButton = document.querySelector('.option-two');
let optionTwoEnd = document.querySelector('.option-two-end');
let homeOptionButton = document.querySelector('.home-opt-button');

let optionThreeScreen = document.querySelector('.option-three-screen');
let optionThreeButton = document.querySelector('.option-three');
let optionThreeEnd = document.querySelector('.option-three-end');

let optionFourButton = document.querySelector('.option-four');
let optionFourEnd = document.querySelector('.option-four-end'); 
  








// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


optionOneButton.addEventListener('click', function(){
  storyOpening.style.display = 'none';  // hide opening screen
  optionOneButton.style.display = 'none'; // hide opt 1 btn
  optionTwoButton.style.display = 'none'; // hide opt 2 btn
  optionOneScreen.style.display = 'block';  // show opt one screen
  directionOneButton.style.display = 'block'; // show right direction btn
  directionTwoButton.style.display = 'block'; // show left direction btn
});

optionTwoButton.addEventListener('click', function(){
  storyOpening.style.display = 'none';  // hide opening screen
  optionTwoScreen.style.display = 'block';  // show option two screen
  optionOneButton.style.display = 'none'; //hide opt 1 btn
  optionTwoButton.style.display = 'none'; //hide opt 2 btn
  homeOptionButton.style.display = 'block'; //show
 });

  directionOneButton.addEventListener('click', function(){
    optionOneScreen.style.display = 'none'; // hide opt 1 screen
    optionThreeScreen.style.display = 'block'; // show opt 3 screen
    directionOneButton.style.display = 'none'; // hide yes btn
    directionTwoButton.style.display = 'none'; // hide turn back btn
    optionThreeButton.style.display = 'block'; // show opt 3 btn
    optionFourButton.style.display = 'block'; // show opt 4 btn
  })

  directionTwoButton.addEventListener('click', function(){
    directionTwoButton.style.display = 'none' //hide
    directionOneButton.style.display = 'none' //hide
    optionOneScreen.style.display = 'none' //hide
    optionTwoScreen.style.display = 'block'; //show
    optionTwoButton.style.display = 'none'; //hide
    homeOptionButton.style.display = 'block'; //show
  })

  homeOptionButton.addEventListener('click', function(){
    homeOptionButton.style.display = 'none'; //hide
    optionTwoEnd.style.display = 'block'; //show
    optionTwoScreen.style.display = 'none'; //hide
  })

optionThreeButton.addEventListener('click', function(){
  optionThreeScreen.style.display = 'none'; // hide opt three screen
  optionThreeEnd.style.display = 'block'; // show opt three ending
  optionThreeButton.style.display = 'none'; // hide opt btn
  optionFourButton.style.display = 'none' // hide run away btn
});

optionFourButton.addEventListener('click', function(){
  optionThreeScreen.style.display = 'none'; //hide option three screen
  optionFourEnd.style.display = 'block'; //show option four ending
  optionFourButton.style.display = 'none'; //hide
  optionThreeButton.style.display = 'none'; //hide
 });