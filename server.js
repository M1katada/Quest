const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Правильные ответы
const correctAnswers = {
  question1: "00700078002000bf04300439043e0434044d043404320433002004460435043d043e00200437044204370020003a0451044704350440043404350431043400200443043104460430044304360440044300200430043d043e044f04410020043d043904490444044f043e043d0436043100200430043404400020044200200027043804340437044a044f0436043f0442043a0020044304310430043d04430436044004430020043004310437043d0430002004380447043504350442043e", // Что является самой большой планетой в Солнечной системе?
  question2: "px ¿айодэдвг цено зтз :ёчердебд убцаужру анояс нйщфяонжб адр т 'идзъяжптк убанужру абзна ичеето",    // Какая планета известна как Красная планета?
  question3: "px ¿яхрывыэь иъср чмч :щзъоыъюы люиялшол ясран схёкарсшю яыо м 'цычеашпмф люяслшол яючся цзъъмр",       // Сколько спутников у Земли?
  question4: "Рмъъзц ясчюя лошлсяюл фмпшаечыц, м оыя юшсракёхс нарся лошляиюл ыюъыоъзщ: чмч рсъи ьэывырхя? xd", // Какая планета ближе всего к Солнцу?
  question5: "Данный текст является заглушкой, а вот следующие будет являться основным: как день проходит? xd" // Как называется галактика, в которой мы живём?
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