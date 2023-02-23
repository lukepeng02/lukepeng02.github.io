var questions = [
    {
        prob: "A happy kid eats an average of {a} Twix bars and {b} M&Ms each day. How many candies in total does he eat each week?",
        answer: "7*(a+b)",
        vars: {
            "a": "randint(1,4)", 
            "b": "randint(3,7)", 
        }
    },
    {
        prob: "Hank drinks water according to a Poisson process of \\(\\lambda={a}\\) cups per day. What is the variance of this?",
        answer: "a",
        vars: {
            "a": "randint(1,4)", 
        }
    }
]

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
    function template(string, obj) {
        var s = string;
        for(var prop in obj) {
          s = s.replace(new RegExp('{'+ prop +'}','g'), obj[prop]);
        }
        return s;
    }

    function randint(a, b) {
        return Math.floor(Math.random() * (b - a + 1) + a)
    }
    
    function parseRand(dict) {
        for (var k in dict) {
            if (dict[k].startsWith("randint")) {
                var range = dict[k].slice(8).split(',').map(function(item) {
                    return parseInt(item, 10)
                })
                dict[k] = randint(...range)
            }
        }
        return dict
    }
    
    function parseQuestion(dict) {
        var parsed_vars = parseRand(dict["vars"])
        var parsed_prob = template(dict["prob"], parsed_vars)
        var ans = math.evaluate(dict["answer"], parsed_vars)
        return {
            question: parsed_prob,
            correctAnswer: ans
        }
    }

	function showQuestions(question, quizContainer) {
        // add an html text box
        var answer = '<label>'
                + '<input type="text" name="question" class="abox">'
            + '</label>'
    
        // combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = '<div class="question">' + question.question + '</div>'
                                + '<div class="answers">' + answer + '</div>'
    }

	function showResults(question, quizContainer, resultsContainer) {
        // gather answer containers from our quiz
        var answerContainer = quizContainer.querySelectorAll('.answers')[0]
    
        // find user's answer
        var userAnswer = parseInt((answerContainer.querySelector('input[name=question]') || {}).value)

        var msg

        // if answer is correct
        if (userAnswer === question.correctAnswer) {
            // color the answer green
            answerContainer.style.color = 'green'
            msg = "Correct!"
        }
        // if answer is wrong or blank
        else {
            // color the answer red
            answerContainer.style.color = 'red'
            msg = "Incorrect :("
        }
    
        // show feedback
        resultsContainer.innerHTML = msg;
    }

    var question = questions[Math.floor(Math.random() * questions.length)]

    var qDict = parseQuestion(question)

	// show the questions
	showQuestions(qDict, quizContainer)

	// when user clicks submit, show results
	submitButton.onclick = function() {
		showResults(qDict, quizContainer, resultsContainer);
	}
}

var quizContainer = document.getElementById('quiz')
var resultsContainer = document.getElementById('results')
var submitButton = document.getElementById('submit')

generateQuiz(questions, quizContainer, resultsContainer, submitButton)


// node quiz.js