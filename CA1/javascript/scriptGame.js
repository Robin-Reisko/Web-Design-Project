// questions and answers
const questions = [
    {
        question: "What material is the most eco-friendly in terms of Recyclability?",
        options: ["Plastic", "Paper", "Glass", "Metal"],
        correctAnswer: "Glass"
    },

    {
        question: "What is the most sustainable source of energy in terms of cost and waste management?",
        options: ["Coal", "Solar", "Natural Gas", "Nuclear"],
        correctAnswer: "Solar"
    },

    {
        question: "How many hours can a TV run just from the energy of one aluminum can that was recycled?",
        options: ["15 minutes", "1 hour", "9 hours", "3 hours"],
        correctAnswer: "3 hours"
    },

    {
        question: "What country has the best recycling rate in the whole world?",
        options: ["Spain", "Japan", "USA", "Germany"],
        correctAnswer: "Germany"
    },
    
    {
        question: "How long does a modern glass bottle on average take to decompose?",
        options: ["100 years", "1,000 years", "2,500 years", "4,000 years"],
        correctAnswer: "4,000 years"
    },
];

let currentQuestionIndex = 0;

// Function to display the current question and options
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    // Randomize the order of options
    const randomizedOptions = [...currentQuestion.options].sort(() => Math.random() - 0.5);

    randomizedOptions.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
        alert("Correct!");
    } else {
        alert("Wrong. Try again!");
    }


    currentQuestionIndex++;


    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        alert("Congratulations! You completed the EcoQuiz.");

    }
}


// function to restart the game and check user's previous answer

function restartGame() {
    currentQuestionIndex = 0;
    displayQuestion();
}


displayQuestion();

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
        alert("Correct!");
    } else {
        alert("Wrong. Try again!");
    }


    currentQuestionIndex++;


    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        const restart = confirm("Congratulations! You completed the EcoQuiz. Do you want to restart?");
        if (restart) {
            restartGame();
        }
    }
}
