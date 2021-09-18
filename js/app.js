
//JS DOM (2, 3)
let getQwerty = document.getElementById('#qwerty');
let getPhrase = document.getElementById('#phrase');
let startButton = document.querySelector('.btn_reset');
let overlayChange = document.getElementById('overlay');

let missed = 0;

//listen for the start game button to be pressed
document.addEventListener('click', () => {
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


/*
// 6. getToDisplay function (6)
function addPhraseToDisplay(arr){
    // do stuff any arr that is passed in, and add to `#phrase ul`
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhrasetoDisplay(phraseArray); 

//Checkletter function (7)
const checkLetter = button => {

}

//Add an event listener to key board - MDN documentatin (8)
getQwerty.addEventListener('click', e => {

} );


//Count the missed guesses (9)


//Create check-win function (10)




/* Extra credits */

// 1. Create CSS transitions for each letter in the phrase display as they are revealed.

// 2. Add a button to the “success” and “failure” screens that reset the game. You’ll have to recreate the buttons in the keyboard, generate a new random phrase, and set the number of misses to zero.




