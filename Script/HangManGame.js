// GLOBAL VARIABLES
var Alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
                'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var lives;
var word;
var charactersToGuess;



/* 
 * Runs at the start of a new game.
 */
function StartGame () {
	
	/* 
	 *[Task 7]: Complete the startGame function
     */

	// 1. initialize the number of lives, word, charactersToGuess 
	

	// 2. pick word and display the correct number of spaces accordingly
	ChooseWord();

	// 3. populate the Alphabet
	PopulateAlphabet();

	// 4. re-set the final result div
	

	// 5. set up the hangman div
	$("#hangman").empty();
	var innerContainer = $("<div></div>");
	$('<div id="hangman-upperborder"></div>').appendTo(innerContainer);
	$('<div id="stickman-body"></div>').appendTo(innerContainer);
	$('<div id="stickman-legs"></div>').appendTo(innerContainer);
	$("#hangman").append(innerContainer);
}

/* 
 * Randomly chooses a word from the list of available words and displays
 * the correct number of spaces accordingly
 */
function ChooseWord () {

	/* 
	 *[Task 8]: Complete the startGame function
     */

	// 1. randomly pick a word from the avilable list of words 
	//    and set the gloabal variable word to that chosen word
	

	// 2. display the word, modify the global variable charactersToGuess accordingly  
	
}

/* 
 * Create the alphabet buttons 
 */
function PopulateAlphabet () {
	
	/* 
	 *[Task 9]: Complete the PopulateAlphabet function
     */

	// 1. create the alphabet list (use a ul element)
	

	// 2. go over each letter in the alphabet list and for each:
	//	a. create a li with id = the letter
	//  b. add class letter to the element (for styling)
	//  c. append the current letter to the element (so the user would see it)
	//  d. attach an event to the letter so when it is clicked, we check if the guess is correct and we act accordingly	
	

    // 3. show the list on the page
}

/* 
 * Checks the user's guess.
 */
function CheckGuess () {

	/* 
	 *[Task 10]: Complete the CheckGuess function
     */

	// 1. get the guessed letter
	
	// 2. disable this letter (the user should not be able to click it again) 
	
	// 3. iterate over the letters in the word (the global variable word)
	//    and check if the chosen letter is in the word, then you need to display it 
	//    if it isn't then the user loses a life and you draw the stick man.

	// 4. check if the game has ended
	
}

/* 
 * Draws part of the stick man according to the number of lives remaining.
 */
function DrawStickMan () {

	/* 
	 * [Task 11]: Using a switch statements and the following classes, draw 
	 * a part of the stick man.
	 * Available classes:
	 * 	1.  stickman-head
	 *	2.	stickman-torso
	 *	3.	stickman-rarm
	 *	4.	stickman-larm
	 *	5.	stickman-rleg
	 *	6.	stickman-lleg
     */
	
}

/*
 * Checks if the game has ended (the user has won or lost) and displays 
 * the appropriate message accordingly.
 */
function CheckGameEnded() {

	/* [Task 12]: Complete CheckGameEnded
     */ 

    /* if the user has no lives -> the game has ended, display a 
     * GAME OVER messgae
     * if the user gussed entire word -> game has ended, display
     * YEAAAAY!!! YOU WON message
     * otherwise continue playing
     * if the game has ended, disable all alphabet buttons.
     */

}


/* [Task 6]: attach the StartGame function to both when the 
 * document is done loading and when the user clicks the play again button
 */ 