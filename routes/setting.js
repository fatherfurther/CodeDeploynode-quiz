var express = require('express');
var router = express.Router();
var connection = require('../mysqlConnection'); 

/* DET home page. */
router.get('/', function(req, res, next) {
    res.render('setting');
});

/* POST home page. */
router.post('/', function(req, res, next) {
    var question = req.body.question;
    var answer1 = req.body.answer1;
    var answer2 = req.body.answer2;
    var answer3 = req.body.answer3;
    var correctNo = req.body.correctNo;
    var level = req.body.level;
    var insertQuery = 'INSERT INTO question (question, answer1, answer2, answer3, correctanswer, level) VALUES ("' + question + '", ' + '"' + answer1 + '", ' + '"' + answer2 + '", ' + '"' + answer3 + '", ' + correctNo + ', ' + level + ')'; 

    connection.query(insertQuery, function(err, results, fields) {
        if(err){
            console.log(err);
        }else{
            console.log(results.insertId);
            selectQuery = 'SELECT * FROM quiz.question WHERE id = ' + results.insertId; 
            connection.query(selectQuery, function(err, rows) {
                if(err){
                    console.log(err)
                }else{
                   res.render('settingresult', {
                        question: rows[0].question,
                        answer1: rows[0].answer1,
                        answer2: rows[0].answer2,
                        answer3: rows[0].answer3,
                        correctNo: rows[0].correctanswer,
                        level: rows[0].level
                    });
                };
            }); 
        }; 
    });
});

module.exports = router;
