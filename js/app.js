
//JS DOM (2, 3)
let getQwerty = document.querySelector('#qwerty');
let getPhrase = document.getElementById('#phrase');
let startButton = document.querySelector('.btn__reset');
let overlayChange = document.getElementById('overlay');
const ul = phrase.querySelector('ul');

let missed = 0;

//listen for the start game button to be pressed
startButton.addEventListener('click', () => {
    overlayChange.style.display = 'none';
});

//JS Arrays (4, 5)

let phrases = [
    'scenic drive',
    'green tree',
    'white snow',
    'blue see',
    'yellow field'
];

//let randomIndex = Math.floor(Math.random() * phrases.length);
//let randomPhrase = phrases[randomIndex];
//console.log(randomPhrase);



// 5. Random phrase function declaration and call:

function getRandomPhraseAsArray(arr){
    //do stuff to any arr that is passed in 
    let randomIndex = Math.floor(Math.random() * arr.length);
    let randomPhrase = arr[randomIndex];
    let randomSplit = randomPhrase.split("");
    return randomSplit;
} 

let getRandomPhrase = getRandomPhraseAsArray(phrases);
console.log(getRandomPhrase);



// 6. getToDisplay function (6)

const phraseDisplay = document.querySelector("#phrase ul");

function addPhraseToDisplay(arr) {
    arr.forEach(arr => {
         let li = document.createElement("li");
         li.textContent = arr;
         phraseDisplay.appendChild(li);
       if (li.textContent !== " ") {
             li.className = "letter";
         } else {
             li.className = "space";
         }
    });
};

const phraseArray = addPhraseToDisplay(getRandomPhrase);


  // 7. Checkletter function:

function checkLetter(button) {
    let letter;
    const elementsWithClass = document.getElementsByClassName('letter');
    for (let i= 0; i <elementsWithClass.length; i++) {
        if (elementsWithClass[i].textContent === button.textContent )
        { elementsWithClass[i] = elementsWithClass[i].classList.add('show');
         letter = elementsWithClass[i];
        }
    }
    return letter;
}


// 8. Add an event listener to key board (--- MDN documentation):
getQwerty.addEventListener("click", event => {
    if (event.target.tagName === "BUTTON") {
        const button = event.target;
        button.className = "chosen";
        button.disabled = "true";
        let letter = checkLetter(button); 
        //console.log(letter);
// 9. Count the missed guesses:
        if (!letter) {
            const img = document.querySelectorAll("img");
            img[missed].src = "images/lostHeart.png"; 
            missed++; }
        }
        checkWin(); 
});


// 10. Create check-win function


const checkWin = () => {

    const liLetter = document.querySelectorAll("li.letter");
    const liShow = document.querySelectorAll("li.show");
    const headline = document.querySelector('h2');

    if (liLetter.length === liShow.length) {
          overlayChange.className = ('win');
          headline.textContent = "You've won!";
          overlayChange.style.display = "flex";
          resetGame();
        } else if ( missed > 4 ) {
          overlayChange.className = ('lose');
          headline.textContent = "You've lost.";
          overlayChange.style.display = "flex";
          resetGame();
        }
 }


// Extra - add a button to the “success” and “failure” screens that reset the game. You’ll have to recreate the buttons in the keyboard, generate a new random phrase, and set the number of misses to zero.

const resetGame = () => {
    ul.textContent = '';
    missed=0;
    const lives = document.querySelectorAll('img');
        for (let i=0; i<lives.length; i++) {
            lives[i].src='images/liveHeart.png';
        }
    
    let getRandomPhrase = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(getRandomPhrase)

    const chosenLetters = document.querySelectorAll('.chosen');
    for (let i = 0; i < chosenLetters.length; i++ ) {
        chosenLetters[i].classList.remove('chosen');
        chosenLetters[i].disabled = false;
    }

}