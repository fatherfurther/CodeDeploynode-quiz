var express = require('express');
var router = express.Router();
var connection = require('../mysqlConnection'); 
var counter = require('../counter.js');
var random = require('../random.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    var query = 'SELECT count(id) as recordcount FROM quiz.question';
    connection.query(query, function(err, results) {
        if(err){
            console.log(err);
        }else{
            var max = results[0].recordcount;
            //console.log(random.calrandom(1,max));
            //var questionId = Math.floor( Math.random() * (max + 1 - min) ) + min ;*/
            //var questionId = req.params.questionId;
            if(max >= counter.question){
                var query = 'SELECT * FROM quiz.question where id =' + random.calrandom(1,max);
                //var query = 'SELECT * FROM quiz.question';
                connection.query(query, function(err, rows) {
                    res.render('quiz', {
                        //    datas: rows
                        question: rows[0].question,
                        ans1: rows[0].answer1,
                        ans2: rows[0].answer2,
                        ans3: rows[0].answer3,
                        correct: rows[0].correctanswer,
                        q_total: max,
                        q_now: counter.question
                    });
                    counter.nextQuestion();
                });
            }else{
                res.render('result', {
                    q_total: max
                });
            };
        };
    });
});


function intRandom(min, max){
    return Math.floor( Math.random() * (max - min + 1)) + min;
}
module.exports = router;
