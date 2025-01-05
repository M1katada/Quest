const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware для обработки JSON и CORS
app.use(express.json());
app.use(cors());

// Правильные ответы
const correctAnswers = {
    1: "jupiter",
    2: "mars",
    3: "1",
    4: "mercury",
    5: "milky way"
};

// Маршрут для проверки ответа
app.post('/check-answer', (req, res) => {
    const { questionId, answer } = req.body;

    console.log("Received answer:", answer); // Отладочное сообщение
    console.log("Correct answer:", correctAnswers[questionId]); // Отладочное сообщение

    if (!questionId || !answer) {
        return res.status(400).json({ error: 'Question ID and answer are required' });
    }

    const correctAnswer = correctAnswers[questionId];
    const isCorrect = correctAnswer && answer.toLowerCase() === correctAnswer.toLowerCase();

    console.log("Is correct?", isCorrect); // Отладочное сообщение

    res.json({ correct: isCorrect });
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});