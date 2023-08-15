disc_dist_questions = [
    {
        prob: "Mary rolls a fair {a}-sided die until a 2 comes up. Find the expected number of rolls.",
        answer: "a",
        vars: {
            "a": "randint(4,12)",
        },
        solution: "The mean of a geometric distribution is equal to \\(\\frac1p\\), which is {ans}."
    },
    {
        prob: "Mary rolls a fair {a}-sided die until a 2 comes up. Find the variance in the number of rolls.",
        answer: "(a-1)*a",
        vars: {
            "a": "randint(4,12)",
        },
        solution: "The variance of a geometric distribution is equal to \\(\\frac\{1-p\}\{p^2\}\\), which is {ans}."
    },
    {
        prob: "Mary rolls a fair {a}-sided die until a 2 comes up {b} times. Find the expected number of rolls.",
        answer: "a*b",
        vars: {
            "a": "randint(4,12)",
            "b": "randint(2,5)"
        },
        solution: "The mean of a negative binomial distribution is equal to \\(\\frac\{r\}\{p\}\\), which is {ans}."
    },
    {
        prob: "Mary rolls a fair {a}-sided die until a 2 comes up {b} times. Find the variance in the number of rolls.",
        answer: "b*(a-1)*a",
        vars: {
            "a": "randint(4,12)",
            "b": "randint(2,5)"
        },
        solution: "The variance of a negative binomial distribution is equal to \\(\\frac\{r(1-p)\}\{p^2\}\\), which is {ans}."
    },
    {
        prob: "Dylan has a coin that lands on heads @meval(10*{a}@)% of the time. If he flips it {b} times, find the expected number of heads.",
        answer: "a/10*b",
        vars: {
            "a": "randint(1,9)",
            "b": "randint(10,20)"
        },
        solution: "The mean of a binomial distribution is equal to \\(np\\), which is {ans}."
    },
    {
        prob: "Dylan has a coin that lands on heads @meval(10*{a}@)% of the time. If he flips it {b} times, find the variance in the number of heads.",
        answer: "(1-a/10)*a/10*b",
        vars: {
            "a": "randint(1,9)",
            "b": "randint(10,20)"
        },
        solution: "The variance of a binomial distribution is equal to \\(np(1-p)\\), which is {ans}."
    },
];

var ddistq_id = "ddist";
qtype_to_var[ddistq_id] = disc_dist_questions;
console.log(`Loaded ${disc_dist_questions.length} discrete distribution questions.`)