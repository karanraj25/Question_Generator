// questionPaperGenerator.js
class QuestionPaperGenerator {
    constructor(questionStore) {
      this.questionStore = questionStore;
    }
  
    generateQuestionPaper(totalMarks, distribution) {
      const questionPaper = [];
      for (const [attribute, percentages] of Object.entries(distribution)) {
        const attributeQuestions = this.questionStore.getQuestionsByAttribute(attribute, percentages.attributeValue);
        const count = Math.ceil((percentages.percentage / 100) * totalMarks);
        const selectedQuestions = this.getRandomQuestions(attributeQuestions, count);
        questionPaper.push(...selectedQuestions);
      }
      return questionPaper;
    }
  
    getRandomQuestions(questions, count) {
      const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
      return shuffledQuestions.slice(0, count);
    }
  }
  
  module.exports = QuestionPaperGenerator;
  