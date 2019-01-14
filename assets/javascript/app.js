//ARRAY OF QUESTIONS, ANSWERS, AND BOOLEAN INDICATOR OF CORRECT ANSWER :: IF ADDING OR REMOVING QUESTIONS var numberOfQuestions SHOULD UPDATE DYNAMICALLY THROUGHOUT
//USE BLANK FORM PROVIDED AT END OF ARRAY TO ADD QUESTIONS :: NOTE isCorrect DEFAULTS TO false EVERYWHERE. BE SURE TO CHANGE CORRECT ANSWER TO true

var questionArray = [
    {
        question: "What are the names of the two elderly hecklers who sit in the balcony at Muppet Theatre?",
        answer1: {
            text: "Beaker and Bunsen",
            isCorrect: false,
        },
        answer2: {
            text: "Scooter and Fozzie",
            isCorrect: false,
        },
        answer3: {
            text: "Rizzo and Bean",
            isCorrect: false,
        },
        answer4: {
            text: "Statler and Waldorf",
            isCorrect: true,
        },
    },
    {
        question: "What is the name of the spaceship featured in the recurring Pigs in Space sketch?",
        answer1: {
            text: "USS Swinetrek",
            isCorrect: true,
        },
        answer2: {
            text: "USS Craniac",
            isCorrect: false,
        },
        answer3: {
            text: "USS Strangepork",
            isCorrect: false,
        },
        answer4: {
            text: "USS Koozebane",
            isCorrect: false,
        },
    },
    {
        question: "Which famous actor played the Swedish Chef’s uncle in an episode of The Muppet Show?",
        answer1: {
            text: "Elton John",
            isCorrect: false,
        },
        answer2: {
            text: "Danny Kaye",
            isCorrect: true,
        },
        answer3: {
            text: "Steve Martin",
            isCorrect: false,
        },
        answer4: {
            text: "Don Knotts",
            isCorrect: false,
        },
    },
    {
        question: "In which Muppet Movie did Kermit and Fozzie play twin brothers?",
        answer1: {
            text: "The Muppet Movie",
            isCorrect: false,
        },
        answer2: {
            text: "Muppets From Space",
            isCorrect: false,
        },
        answer3: {
            text: "The Muppets Take Manhattan",
            isCorrect: false,
        },
        answer4: {
            text: "The Great Muppet Caper",
            isCorrect: true,
        },
    },
    {
        question: "Which actress replaced Nurse Piggy in a season 5 episode of the sketch Veterinarian’s Hospital",
        answer1: {
            text: "Carol Burnett",
            isCorrect: false,
        },
        answer2: {
            text: "Petula Clark",
            isCorrect: false,
        },
        answer3: {
            text: "Loretta Swit",
            isCorrect: true,
        },
        answer4: {
            text: "Cloris Leachman",
            isCorrect: false,
        },
    },
    {
        question: "Which Muppet’s act includes boomerang fish?",
        answer1: {
            text: "The Mad Bomber",
            isCorrect: false,
        },
        answer2: {
            text: "Prince Rudolph",
            isCorrect: false,
        },
        answer3: {
            text: "Astoria",
            isCorrect: false,
        },
        answer4: {
            text: "Lew Zealand",
            isCorrect: true,
        },
    },
    {
        question: "Which character did Tina Fey play in Muppets Most Wanted?",
        answer1: {
            text: "Mrs. Bluveridge",
            isCorrect: false,
        },
        answer2: {
            text: "Constantine",
            isCorrect: false,
        },
        answer3: {
            text: "Nadya",
            isCorrect: true,
        },
        answer4: {
            text: "Aunt Em",
            isCorrect: false,
        },
    },
    {
        question: "Jason Segel cowrote and starred in which Muppet movie?",
        answer1: {
            text: "The Muppets",
            isCorrect: true,
        },
        answer2: {
            text: "Muppet Treasure Island",
            isCorrect: false,
        },
        answer3: {
            text: "Muppets Most Wanted",
            isCorrect: false,
        },
        answer4: {
            text: "Kermit's Swamp Years",
            isCorrect: false,
        },
    },
    {
        question: "What 1986 movie was directed by Jim Henson?",
        answer1: {
            text: "Time Piece",
            isCorrect: false,
        },
        answer2: {
            text: "Labyrinth",
            isCorrect: true,
        },
        answer3: {
            text: "The Dark Crystal",
            isCorrect: false,
        },
        answer4: {
            text: "The Witches",
            isCorrect: false,
        },
    },
    {
        question: "What is the name of Miss Piggy’s dog?",
        answer1: {
            text: "Foo-Foo",
            isCorrect: true,
        },
        answer2: {
            text: "Walter",
            isCorrect: false,
        },
        answer3: {
            text: "Annie Sue",
            isCorrect: false,
        },
        answer4: {
            text: "Buffy",
            isCorrect: false,
        },
    },
    
];

//BLANK QUESTION FORM
// {
//     question: "",
//     answer1: {
//         text: "",
//         isCorrect: false,
//     },
//     answer2: {
//         text: "",
//         isCorrect: false,
//     },
//     answer3: {
//         text: "",
//         isCorrect: false,
//     },
//     answer4: {
//         text: "",
//         isCorrect: false,
//     },
// },

var numberOfQuestions = questionArray.length;

//ARRAY OF .GIF FILES TO DISPLAY FOR CORRECT OR WRONG ANSWERS
var correctImageArray = new Array();

correctImageArray[0] = new Image();
correctImageArray[0].src = 'assets/images/correct1.gif';
correctImageArray[1] = new Image();
correctImageArray[1].src = 'assets/images/correct2.gif';
correctImageArray[2] = new Image();
correctImageArray[2].src = 'assets/images/correct3.gif';
correctImageArray[3] = new Image();
correctImageArray[3].src = 'assets/images/correct4.gif';
correctImageArray[4] = new Image();
correctImageArray[4].src = 'assets/images/correct5.gif';
correctImageArray[5] = new Image();
correctImageArray[5].src = 'assets/images/correct6.gif';
correctImageArray[6] = new Image();
correctImageArray[6].src = 'assets/images/correct7.gif';
correctImageArray[7] = new Image();
correctImageArray[7].src = 'assets/images/correct8.gif';
correctImageArray[8] = new Image();
correctImageArray[8].src = 'assets/images/correct9.gif';
correctImageArray[9] = new Image();
correctImageArray[9].src = 'assets/images/correct10.gif';

var wrongImageArray = new Array();

wrongImageArray[0] = new Image();
wrongImageArray[0].src = 'assets/images/wrong1.gif';
wrongImageArray[1] = new Image();
wrongImageArray[1].src = 'assets/images/wrong2.gif';
wrongImageArray[2] = new Image();
wrongImageArray[2].src = 'assets/images/wrong3.gif';
wrongImageArray[3] = new Image();
wrongImageArray[3].src = 'assets/images/wrong4.gif';
wrongImageArray[4] = new Image();
wrongImageArray[4].src = 'assets/images/wrong5.gif';
wrongImageArray[5] = new Image();
wrongImageArray[5].src = 'assets/images/wrong6.gif';
wrongImageArray[6] = new Image();
wrongImageArray[6].src = 'assets/images/wrong7.gif';
wrongImageArray[7] = new Image();
wrongImageArray[7].src = 'assets/images/wrong8.gif';
wrongImageArray[8] = new Image();
wrongImageArray[8].src = 'assets/images/wrong9.gif';
wrongImageArray[9] = new Image();
wrongImageArray[9].src = 'assets/images/wrong10.gif';

//SET IMAGE ARRAY VALUES TO 0 TO BE ITTERATED OVER
var currentCorrectImageId = 0;
var currentWrongImageId = 0;

//SET TEXT OF CORRECT ANSWER FOR EACH OBJECT IN questionArray
var alwaysCorrectAnswer = '';

//BEGIN questionArray AT POSITION 0 AND SET ANSWER BOOLEAN VARIABLES TO BE CHANGED DYNAMICALLY BASED ON isCorrect = true FOR EACH QUESTION IN THE ARRAY
var currentQuestionArrayPosition = 0;
var answer1 = false;
var answer2 = false;
var answer3 = false;
var answer4 = false;

//TIMER VARIABLES
var timer = 0;
var intervalId;

//TRACKS NUMBER OF CORRECT AND WRONG ANSWERS AND CREATES AN ARRAY TO ASSIGN A RATING AT gameEnd()
var userAnswersCorrect = 0;
var userAnswersWrong = 0;
var rating = ["Constantine", "Muppy", "Bean Bunny", "Scooter", "Sam the Eagle", "Bobo the Bear", "Mahna Mahna", "Beaker", "Fozzie Bear", "Kermit the Frog", "Jim Henson Himself!"];

//DISPLAY CURRENT QUESTION AND DYNAMICALLY ADD BUTTONS BASED ON THE currentQuestionArrayPosition VALUE
function startGame() {
    currentQuestion = questionArray[currentQuestionArrayPosition];
    $('.currentQuestion').html('<h4 class="question">' + currentQuestion.question);
    $('.currentQuestion').append('<button id="answer1" class="answer btn">' + currentQuestion.answer1.text);
    answer1 = currentQuestion.answer1.isCorrect;
    $('.currentQuestion').append('<br><button id="answer2" class="answer btn">' + currentQuestion.answer2.text);
    answer2 = currentQuestion.answer2.isCorrect;
    $('.currentQuestion').append('<br><button id="answer3" class="answer btn">' + currentQuestion.answer3.text);
    answer3 = currentQuestion.answer3.isCorrect;
    $('.currentQuestion').append('<br><button id="answer4" class="answer btn">' + currentQuestion.answer4.text);
    answer4 = currentQuestion.answer4.isCorrect;
    $('document').on('click', '.answer')
    currentQuestionArrayPosition++;
};

//ESTABLISH A 15 SECOND TIMER BASED ON 1 SECOND INTERVALS :: CAN CHANGE DIFFICULTY BY CHANGING VAR timer TO ANOTHER VALUE
function clockSet() {
    timer = 15;
    $('.timer').html('<h2>' + timer + '</h2>');
    clearInterval(intervalId);
    intervalId = setInterval(clock, 1000)
};

//DISPLAY TIMER AND CHECK FOR RUNOUT
function clock() {
    timer--;
    $('.timer').html('<h2>' + timer + '</h2>');
    if (timer === 0) {
        timesUp();
    }
};

// FUNCTION IF USING RANDOM IMAGES :: SAVE FOR LATER USERS :: CHANGE currentCorrectImageId AND currentWrongImageId TO currentImageId THROUGHOUT
// function randomImage() {
//     currentImageId = Math.floor(Math.random() * 10);
// };

function correctAnswer() {
    userAnswersCorrect++;
    $('.timer').empty();
    clearInterval(intervalId);
    $('.currentQuestion').html(correctImageArray[currentCorrectImageId]);
    $('.currentQuestion').append('<h3>Correct!</h3>');
    currentCorrectImageId++;
    if (numberOfQuestions != 0) {
        setTimeout(startGame, 3000);
        setTimeout(clockSet, 3000);
    } else {
        setTimeout(gameEnd, 3000);
    }
};

function wrongAnswer() {
    userAnswersWrong++;
    $('.timer').empty();
    clearInterval(intervalId);
    $('.currentQuestion').html(wrongImageArray[currentWrongImageId]);
    $('.currentQuestion').append('<h3>Wrong!</h3>');
    $('.currentQuestion').append('<h3>The correct answer was ' + showCorrectAnswer() + '</h3>');

    currentWrongImageId++;
    if (numberOfQuestions != 0) {
    setTimeout(startGame, 3000);
    setTimeout(clockSet, 3000);
    } else {
        setTimeout(gameEnd, 3000);
    }
};

function timesUp() {
    $('.timer').empty();
    clearInterval(intervalId);
    $('.currentQuestion').html('<img src="assets/images/timeout.gif" />');
    setTimeout(startGame, 2650);
    setTimeout(clockSet, 2650);
};

function gameEnd() {
    $('.timer').empty();
    clearInterval(intervalId);
    $('.currentQuestion').html('<h3>Number of correct answers: ' + userAnswersCorrect + '</h3>');
    $('.currentQuestion').append('<h3>Number of wrong answers: ' + userAnswersWrong + '</h3>');
    $('.currentQuestion').append('<h3>Your ranking: ' + rating[userAnswersCorrect] + '</h3>');
    $('.currentQuestion').append('<button class="resetButton btn btn-success">Restart Game</button>');
    userAnswersCorrect = 0;
    userAnswersWrong = 0;
    currentQuestionArrayPosition = 0;
    currentCorrectImageId = 0;
    currentWrongImageId = 0;
    numberOfQuestions = questionArray.length;
};

function showCorrectAnswer() {
    if(questionArray[currentQuestionArrayPosition-1].answer1.isCorrect == true) {
        return questionArray[currentQuestionArrayPosition-1].answer1.text;
    } else if(questionArray[currentQuestionArrayPosition-1].answer2.isCorrect == true) {
        return questionArray[currentQuestionArrayPosition-1].answer2.text;
    } else if(questionArray[currentQuestionArrayPosition-1].answer3.isCorrect == true) {
        return questionArray[currentQuestionArrayPosition-1].answer3.text;
    } else if(questionArray[currentQuestionArrayPosition-1].answer4.isCorrect == true) {
        return questionArray[currentQuestionArrayPosition-1].answer4.text;
    }
}

$('.startButton').on('click', function () {
    startGame();
    clockSet();
});

$(document).on('click', '.resetButton', function () {
    startGame();
    clockSet();
});

$(document).on('click', '.answer', function () {
    numberOfQuestions--;
    //set ID of button clicked to a variable, and evaluate it to get booleon value of corresponding variable
    var isCorrect = eval(this.id);
    console.log(this);
    console.log(questionArray[currentQuestionArrayPosition-1].answer1.text);
    if (isCorrect == true) {
        correctAnswer();
    } else {
        wrongAnswer();
    }
});


