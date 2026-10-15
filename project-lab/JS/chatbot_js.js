let questions = [
    {
        question: "Te-ai apucat de ideea de proiect?",
        options: {
            a: "Da, am deja o schiță!",
            b: "Nu încă, dar mă gândesc la ceva",
            c: "Nu prea știu ce să fac..."
        },
        correctAnswer: "a",
        correctResponse: "Excelent! Abia aștept să văd ce iese!",
        incorrectResponse: "Nu-i nimic! Discutăm idei împreună."
    },
    {
        question: "Cum merge echipa ta la proiect?",
        options: {
            a: "Ne organizăm bine!",
            b: "Mai greu cu sincronizarea...",
            c: "Sunt singur"
        },
        correctAnswer: "a",
        correctResponse: "Foarte tare! Munca în echipă e cheia succesului!",
        incorrectResponse: "O să găsim soluții împreună, nu-ți face griji!"
    },
    {
        question: "Ai folosit flexbox sau grid pentru layout?",
        options: {
            a: "Am folosit Flexbox",
            b: "Am folosit Grid",
            c: "Le-am combinat pe ambele!"
        },
        correctAnswer: "c",
        correctResponse: "Genial! Combinarea lor oferă cel mai bun control asupra designului!",
        incorrectResponse: "Este bine și așa, dar încearcă să le îmbini pe viitor!"
    },
    {
        question: "Ce parte din dezvoltarea web îți place cel mai mult?",
        options: {
            a: "Frontend (HTML, CSS, JS)",
            b: "Backend (Node.js, baze de date)",
            c: "Fullstack (Ambele!)"
        },
        correctAnswer: "c",
        correctResponse: "Super! Abordarea Fullstack îți oferă o imagine de ansamblu excelentă!",
        incorrectResponse: "Fiecare direcție este minunată, important este să-ți placă ce faci!"
    }

];

let currentQuestionIndex = 0;
let chatContainer = document.getElementById("chat-container");
let chatForm = document.getElementById("chat-form");
let userInput = document.getElementById("user-input");

displayQuestion();

function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let optionsHTML = Object.keys(currentQuestion.options)
        .map(key => `<strong>${key}</strong>. ${currentQuestion.options[key]}`)
        .join("<br>");

    let botResponse = document.createElement("div");
    botResponse.classList.add("message", "bot");
    botResponse.innerHTML = `<strong>Bot:</strong> ${currentQuestion.question}<br><br>${optionsHTML}`;
    
    chatContainer.appendChild(botResponse);
    scrollChatContainerToBottom();
}

function scrollChatContainerToBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

chatForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let userResponse = userInput.value.toLowerCase().trim();
    if (userResponse === "") return;


    let userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");
    userMessage.innerHTML = `<strong>You:</strong> ${userResponse}`;
    chatContainer.appendChild(userMessage);

    let currentQuestion = questions[currentQuestionIndex];
    let botResponse = document.createElement("div");
    botResponse.classList.add("message", "bot");


    if (userResponse === currentQuestion.correctAnswer) {
        botResponse.innerHTML = `<strong>Bot:</strong> ${currentQuestion.correctResponse}`;
    } else {
        botResponse.innerHTML = `<strong>Bot:</strong> ${currentQuestion.incorrectResponse}`;
    }

    chatContainer.appendChild(botResponse);
    

    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    userInput.value = "";

    setTimeout(() => {
        displayQuestion();
    }, 800);
});