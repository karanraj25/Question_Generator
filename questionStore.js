// questionStore.js
class QuestionStore {
    constructor() {
      this.questions = [];
    }
  
    addQuestion(question) {
      this.questions.push(question);
    }
  
    getQuestionsByAttribute(attribute, value) {
      return this.questions.filter((q) => q[attribute] === value);
    }
  
    getAllQuestions() {
      return this.questions;
    }
  
    // You can add more methods based on future requirements
  }
  
  module.exports = QuestionStore;
  