var questions = [
    {
        prob: "A happy kid eats an average of {a} Twix bars and {b} M&Ms each day. How many candies in total does he eat each week?",
        answer: "7*(a+b)",
        vars: {
            "a": "randint(1,4)", 
            "b": "randint(3,7)", 
        },
        solution: "The answer is {ans}. No explanation necessary here!"
    },
    {
        prob: "Hank drinks water according to a Poisson process of \\(\\lambda={a}\\) cups per day. What is the variance of this?",
        answer: "a",
        vars: {
            "a": "randint(1,4)", 
        },
        solution: "The variance of a Poisson distribution is equal to the mean \\(\\lambda\\), which is {ans}."
    },
    {
        prob: "What is \\(3\\times {a}\\)?",
        answer: "a+a+a",
        vars: {
            "a": "randuni(0,1,2)"
        },
        solution: "{ans}"
    },
    {
        prob: "Kayla has 3 million dollars in 2019. She doubles it by 2022. How many millions does she have in 2022?",
        answer: "6"
    },
    {
        prob: "What is the value of \\(e^\{a\}\\)?",
        answer: "exp(a)",
        vars: {
            "a": "randint(1,4)"
        },
        solution: "Use a calculator, n00b!"
    },
    {
        prob: "What is the value of \\({a}!\\)?",
        answer: "factorial(a)",
        vars: {
            "a": "randint(1,4)"
        },
        solution: "Use a calculator, n00b!"
    }
]

var happyEmojis = ["😀", "😁", "😇", "😎", "🤑"];
var sadEmojis = ["😠", "😥", "😦", "😳", "🤡"];

function generateQuiz(questions, quizContainer, resultsContainer, solutionContainer, submitButton) {
    
    function parseQuestion(dict) {
        var parsed_vars = "vars" in dict ? parseRand(dict["vars"]) : {};
        var parsed_prob = template(dict["prob"], parsed_vars);
        var answer = smartRound(math.evaluate(dict["answer"], parsed_vars));

        var soln_dict = {ans: answer}
        var parsed_soln = "solution" in dict ? template(dict["solution"], soln_dict) : "No solution attached!";
        return {
            question: parsed_prob,
            correctAnswer: answer,
            soln: parsed_soln
        }
    }

	function showQuestions(question, quizContainer) {
        // add an html text box
        var answer = '<label>'
                + '<input type="text" name="question" class="abox" placeholder="Your answer here">'
            + '</label>'
    
        // combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = '<div class="question">' + question.question + '</div>'
                                + '<div class="answers">' + answer + '</div>'
        solutionContainer.innerHTML = "<p>" + question.soln + "</p>"
    }

	function showResults(question, quizContainer, resultsContainer) {
        // gather answer containers from our quiz
        var answerContainer = quizContainer.querySelectorAll('.answers')[0]
    
        // find user's answer
        var userAnswer = (answerContainer.querySelector('input[name=question]') || {}).value;

        var msg;
        var resultsColor;

        // if answer is correct
        if (isCorrect(userAnswer, question.correctAnswer)) {
            // color the answer green
            resultsColor = '#63F49B';
            msg = "Correct! " + randomChoice(happyEmojis);
        }
        // if answer is wrong or blank
        else {
            // color the answer red
            resultsColor = '#ff5d5d';
            msg = "Incorrect " + randomChoice(sadEmojis);
        }
    
        // show feedback
        resultsContainer.innerHTML = msg;
        resultsContainer.style.backgroundColor = resultsColor;
    }

    var question = randomChoice(questions);

    var qDict = parseQuestion(question);

	// show the questions
	showQuestions(qDict, quizContainer)

	// when user clicks submit, show results
	submitButton.onclick = function() {
		showResults(qDict, quizContainer, resultsContainer);
	}
}

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var solutionContainer = document.getElementById('solns');

generateQuiz(questions, quizContainer, resultsContainer, solutionContainer, submitButton);


// node quiz.js