const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Правильные ответы
const correctAnswers = {
  question1: "jupiter", // Что является самой большой планетой в Солнечной системе?
  question2: "mars",    // Какая планета известна как Красная планета?
  question3: "1",       // Сколько спутников у Земли?
  question4: "mercury", // Какая планета ближе всего к Солнцу?
  question5: "milky way" // Как называется галактика, в которой мы живём?
};

// Указываем, что статические файлы находятся в папке "public"
app.use(express.static(path.join(__dirname, 'public')));

// Middleware для обработки JSON
app.use(express.json());

// Обработка запросов к корневому пути
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Обработка запросов к другим страницам
app.get('/question1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'question1.html'));
});

app.get('/question2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'question2.html'));
});

app.get('/question3', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'question3.html'));
});

app.get('/question4', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'question4.html'));
});

app.get('/question5', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'question5.html'));
});

app.get('/results', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'results.html'));
});

app.get('/error', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'error.html'));
});

// Маршрут для проверки ответов
app.post('/check-answer', (req, res) => {
  const { questionId, answer } = req.body;

  if (!questionId || !answer) {
    return res.status(400).json({ error: 'Question ID and answer are required' });
  }

  const correctAnswer = correctAnswers[questionId];
  const isCorrect = correctAnswer && answer.toLowerCase() === correctAnswer.toLowerCase();

  res.json({ correct: isCorrect });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});