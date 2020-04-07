// Importing the isYes function from the other javascript file, so as to not muddle the other information 

import isYes from './is-yes.js';


// Referencing the DOM elements that I established, the button and quiz results from HTML
const quizButton = document.getElementById('quiz-button'); 
const result = document.getElementById('quiz-result');

// The function of submissions and prompts 
function takeTheQuiz(){
    let positiveAnswers = 0;
    // The only option alerts give is 'OK' 
    alert('Hello there!');

    // How ask for Input of their First Name
    const FirstName = prompt('What is your First Name?');
    const name = FirstName; 

    // How to ask for the Last name and have it added to first Name
    const LastName = prompt('What is your Last Name?');
    const fullName = name + ' ' + LastName;

    // Asks if you want to continue with either "OK" or "Cancel"
    const confirmed = confirm('Do you want to continue with the quiz?');
    if (confirmed === false){
        return;  
    }

    // Asking if they like to code question
    const doYouLikeCode = prompt(name + ' , do you like Coding?("Yes" or "No")');
    const trueAnswers = true; 
    if (isYes(doYouLikeCode) === trueAnswers) {
        positiveAnswers++;
    }

    // Asking if they like photography
    const doYouLikePhotography = prompt(name + ' , do you like Photography?("Yes" or "No")');
    const truePhotography = true; 
    if (isYes(doYouLikePhotography) === truePhotography) {
        positiveAnswers++;
    }  

    // Asking if they like kitties
    const doYouLikeCats = prompt(fullName + ' , do you like Kitties?("Yes" or "No")');
    const trueCats = true; 
    if (isYes(doYouLikeCats) === trueCats) {
        positiveAnswers++;
    }  
    

    // Response to the results and score
    let response = 'Your name is ' + fullName + '.';

    if (positiveAnswers <= 3) {
        response += ' Hooray, we should code together!' + ' Your score is 3/3 or 100%.';
    }
    else {
        response += ' We can still hang!' + ' You received ' + positiveAnswers + '/3.';
    }

    result.textContent = response;

    //adding a different color based on submission 

    let resultColor = document.getElementById('quiz-result'); 
    if (positiveAnswers >= 1) {
        resultColor.style.color = 'blue'; 
    } else { 
        resultColor.style.color = 'red'; 

    }


}

// Button Event Listeners 
quizButton.addEventListener('click', takeTheQuiz);