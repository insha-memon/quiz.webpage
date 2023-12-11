const questions = [
    {
        question: "Q. HTML stands for?",
        answers: [
            { text: "HyperText Markup Language", correct: true },
            { text: "HyperText Machine Language", correct: false },
            { text: "HyperText Marking Language", correct: false },
            { text: "HyperText Market Language", correct: false },
        ]
    },
    {
        question: "Q. How can we specify the spacing between each letter in a text in CSS?",
        answers: [
            { text: "character-spacing", correct: false },
            { text: "alpha-spacing", correct: false },
            { text: "letter-spacing", correct: true },
            { text: "None of above", correct: false },
        ]
    },
    {
        question: "Q. Javascript is a language?",
        answers: [
            { text: "procedural", correct: false },
            { text: "object based", correct: false },
            { text: "object oriented", correct: true },
            { text: "none of these", correct: false },
        ]
    },
];

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    // Clear previous answer buttons
    answerButton.innerHTML = "";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => checkAnswer(answer.correct));
        answerButton.appendChild(button);
    });
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    alert("Quiz Ended. Your Score: " + score);
}

function validateAnswer() {
    // Check if any answer is selected before proceeding
    const selectedAnswer = document.querySelector('.btn.active');
    if (!selectedAnswer) {
        alert("Please choose an answer before proceeding to the next question.");
        return false;
    }
    return true;
} 

  nextButton.addEventListener('click', () => {
    if (validateAnswer()) {
        startQuiz();
    }
});

answerButton.addEventListener('click', (event) => {
    const selectedButton = event.target;
    if (selectedButton.classList.contains('btn')) {
        // Remove the 'active' class from all buttons
        document.querySelectorAll('.btn').forEach(button => button.classList.remove('active'));

        // Add the 'active' class to the clicked button
        selectedButton.classList.add('active');
    }
});


nextButton.addEventListener('click', startQuiz);

startQuiz();
