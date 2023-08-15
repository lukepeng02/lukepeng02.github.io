var test_questions = [
    {
        prob: "Dylan has a coin that lands on heads @meval(10*{a}@)% of the time. If he flips it {b} times, find the variance in the number of heads.",
        answer: "(1-a/10)*a/10*b",
        vars: {
            "a": "randint(1,9)",
            "b": "randint(10,20)"
        },
        solution: "The variance of a binomial distribution is equal to \\(np(1-p)\\), which is {ans}."
    },
]

var testq_id = "testq";
qtype_to_var[testq_id] = test_questions;