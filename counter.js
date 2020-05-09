var Counter = module.exports = {
    question: 1,
    correct: 0,
    reset: function() {
        Counter.question = 1;
        Counter.correct = 0;
    },
    nextQuestion: function() {
        Counter.question += 1;
    },
    addCorrect: function() {
        Counter.correct += 1;
    }
}