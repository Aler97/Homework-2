const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            { text: "<Script>", correct: true },
            { text: "<js>", correct: false },
            { text: "<src>", correct: false },
            { text: "<javascript>", correct: false },
        ]
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: [
            { text: "Angular", correct: false },
            { text: "jQuery", correct: false },
            { text: "RequireJS", correct: false },
            { text: "ESLint", correct: true },
        ]
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: [
            { text: "Node.js", correct: false },
            { text: "TypeScript", correct: false },
            { text: "npm", correct: true },
            { text: "Python", correct: false },
        ]
    },
    {
        question: "What is sin(90deg)?",
        answers: [
            { text: "1", correct: true },
            { text: "0", correct: false },
            { text: "1/2", correct: false },
            { text: "2", correct: false },
        ]
    },
    {
        question: "Capital of Estonia?",
        answers: [
            { text: "Danilovgrad", correct: false },
            { text: "Tallinn", correct: true },
            { text: "Paris", correct: false },
            { text: "Rome", correct: false },
        ]
    },
    {
        question: "What squad numbers has Messi had in his career?",
        answers: [
            { text: "10", correct: true },
            { text: "8", correct: false },
            { text: "30", correct: true },
            { text: "19", correct: true },
        ]
    },
    {
        question: "One stone is how many kilograms?",
        answers: [
            { text: "3", correct: false },
            { text: "9.52", correct: false },
            { text: "6.35", correct: true },
            { text: "12.25", correct: false },
        ]
    },
    {
        question: "how do You say 'rain' in French?",
        answers: [
            { text: "cheval", correct: false },
            { text: "amour", correct: false },
            { text: "maison", correct: false },
            { text: "pluie", correct: true },
        ]
    },
    {
        question: "When was Einstein born?",
        answers: [
            { text: "1759", correct: false },
            { text: "1879", correct: true },
            { text: "1900", correct: false },
            { text: "1914", correct: false },
        ]
    },
    {
        question: "Who invented Python?",
        answers: [
            { text: "Elon Musk", correct: false },
            { text: "Stevan Jovetic", correct: false },
            { text: "Guido van Rossum", correct: true },
            { text: "Nikola Tesla", correct: false },
        ]
    },
    {
        question: "When was the internet invented?",
        answers: [
            { text: "1990", correct: false },
            { text: "2000", correct: false },
            { text: "1983", correct: true },
            { text: "1743", correct: false },
        ]
    }

]

// Change questions order
function shuffleQuestions() {
    questions.sort(() => Math.random() - 0.5);
};

shuffleQuestions();

const startBtn = document.querySelector('#startBtn');
const container = document.querySelector('.container');
const startContainer = document.querySelector('.start');
const questionContainer = document.querySelector('.questionContainer');
const quizEndedCard = document.querySelector('.quizEndedMessage');
const questionText = document.querySelector('#questionText');
const displayScore = document.querySelector('#score');
const answers = document.querySelectorAll('.btn');
const restartBtn = document.querySelector('.restartBtn');
const restartBtn2 = document.querySelector('.restartBtn2');
const congrats = document.querySelector('.congrats');
let i = 0;
let j = 0;
let k = 1;
let score = -1;

function startQuiz() {
    startContainer.classList.add('disNone');
    questionContainer.classList.remove('disNone');
};

startBtn.addEventListener('click', startQuiz);
startBtn.addEventListener('click', firstQuestion);




function firstQuestion() {
    questionText.innerText = `${k}. ${questions[j].question}`;
    answers.forEach(answer => {
        answer.innerText = questions[0].answers[i].text;
        answer.id = questions[0].answers[i].correct;
        i++;
        if (answer.id === 'true') {
            answer.addEventListener('click', newQuestion);
        } else if (answer.id === 'false') {
            answer.addEventListener('click', quizEnded);
        }
    });
    i = 0;
    j++
    k++;
    score++;

};





function newQuestion() {
    answers.forEach(answer => {
        if (answer.id === 'true') {
            answer.removeEventListener('click', newQuestion);
            answer.removeAttribute('id');
        } else if (answer.id === 'false') {
            answer.removeEventListener('click', quizEnded);
            answer.removeAttribute('id');
        }
    });
    if (k == (questions.length)) {
        container.classList.add('disNone');
        questionContainer.classList.add('disNone');
        congrats.classList.remove('disNone');
        restartBtn2.addEventListener('click', () => { window.location.reload() });
    } else if (j < questions.length) {
        questionText.innerText = `${k}. ${questions[j].question}`;
        answers.forEach(answer => {
            answer.innerText = questions[j].answers[i].text;
            answer.id = questions[j].answers[i].correct;
            i++;
            if (answer.id === 'true') {
                answer.addEventListener('click', newQuestion);
            } else if (answer.id === 'false') {
                answer.addEventListener('click', quizEnded);
            }
        });
        i = 0;
        j++;
        k++;
        score++;
        console.log(j);
    }
};

function quizEnded() {
    displayScore.innerText = `${score}/${questions.length - 1}`;
    container.classList.add('disNone');
    quizEndedCard.classList.remove('disNone');
    restartBtn.addEventListener('click', () => { window.location.reload() });
}

console.log(questions.length);