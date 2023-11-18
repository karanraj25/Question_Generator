// public/scripts.js
async function addQuestion() {
    const question = document.getElementById('question').value;
    const subject = document.getElementById('subject').value;
    const topic = document.getElementById('topic').value;
    const difficulty = document.getElementById('difficulty').value;
    const marks = parseInt(document.getElementById('marks').value);
  
    await fetch('/addQuestion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question, subject, topic, difficulty, marks }),
    });
  
    alert('Question added successfully!');
  }
  


  // Add an event listener to the button
document.getElementById('generateButton').addEventListener('click', generatePaper);

// Your original async function
async function generatePaper() {
  const totalMarks = parseInt(document.getElementById('totalMarks').value);
  const difficultyPercentage = parseInt(document.getElementById('difficultyPercentage').value);

  const distribution = {
    difficulty: { attributeValue: "Easy", percentage: difficultyPercentage },
    topic: { attributeValue: "Waves", percentage: 100 }, // Assuming 100% of questions from the specified topic
    // Add more attributes as needed
  };

  const response = await fetch('/generatePaper', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ totalMarks, distribution }),
  });

  const data = await response.json();
  document.getElementById('generatedPaper').innerText = JSON.stringify(data.sampleQuestions, 2);
}


  
async function getAllQuestions() {
    const response = await fetch('/getAllQuestions');
    const data = await response.json();
  
    const questionList = data.questions.map((question, index) => {
      return `${index + 1}. ${question.question} (${question.subject}, ${question.topic}, ${question.difficulty}, ${question.marks} marks)`;
    });
  
    document.getElementById('questionList').innerHTML = questionList.join('<br>');
}
  