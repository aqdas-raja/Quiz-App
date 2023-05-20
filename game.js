const question = cument.getElementById('question');
const choices = Array.from(cument.getElementsByClassName("choice-text"));

let currentQuestion = {};

let acceptingAnswers = false;

let score = 0;

let questionCounter = 0;

let availableQuestions = [];

let questions = [
    {
        question: "Inside which HTML element do we put the javascript??",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 1
    },

    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
                choice1: "<script href='xxx.js'>",
                choice2: "<script name='xxx.js'>",
                choice3: "<script src='xxx.js'>",
                choice4: "<script href='xxx.js' name='xxx.js'>",
                answer: 3
    },

    {
        question: "How do you write 'Hello World' in an alert box?",
                choice1: "alert('Hello World');",
                choice2: "alert('Hello World');",
                choice3: "alert('Hello World');",
                choice4: "alert('Hello World');",
    }
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTION = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTION) {
        return window.location.assign('end.html');
    }

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        console.log(selectedAnswer);
        getNewQuestion();
    });
});

startGame();