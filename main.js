// main.js
const express = require('express');
const bodyParser = require('body-parser');
const QuestionStore = require('./questionStore');
const QuestionPaperGenerator = require('./questionPaperGenerator');

const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

app.use(bodyParser.json());

const questionStore = new QuestionStore();
const questionPaperGenerator = new QuestionPaperGenerator(questionStore);

// API to add a question
app.post('/addQuestion', (req, res) => {
  const { question, subject, topic, difficulty, marks } = req.body;
  questionStore.addQuestion({ question, subject, topic, difficulty, marks });
  res.json({ success: true });
});

// API to generate a question paper
app.post('/generatePaper', (req, res) => {
  const { totalMarks, distribution } = req.body;
  const generatedPaper = questionPaperGenerator.generateQuestionPaper(totalMarks, distribution);
  res.json({ success: true, paper: generatedPaper });
});

// API to get all questions
app.get('/getAllQuestions', (req, res) => {
  const allQuestions = questionStore.getAllQuestions();
  res.json({ questions: allQuestions });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
