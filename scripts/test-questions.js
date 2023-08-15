var test_questions = [
    {
        prob: "Suppose I draw cards from a standard deck of 52 cards, with replacement, until I get a spade. Find the probability I draw {a} cards in total.",
        answer: "pow(3/4,a-1)/4",
        vars: {
            "a": "randint(3,8)"  
        },
        solution: "The first @meval({a}-1@) cards must not be spades; the probability of this occurring is \\((3/4)^@meval(a-1@)\\). " +
            "Finally, the last card must be a spade. The probability of drawing one is \\(1/4\\)."
    },
]

var testq_id = "testq";
qtype_to_var[testq_id] = test_questions;