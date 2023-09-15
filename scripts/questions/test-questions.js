var test_questions = [
    {
        prob: "While job hunting, Kayla receives scam emails according to a Poisson process of {a} per week. Find the probability she will receive her {a}th in 6 to 8 days. (R/calculator recommended)",
        answer: "c-d",
        vars: {
            "a": "randint(5,9)",
            "b": "meval(7/a)",
            "c": "@pgamma(8,{a},{b})",
            "d": "@pgamma(6,{a},{b})"
        },
        solution: "This follows an gamma distribution with \\(\\alpha={a}\\) and \\(\\theta=\\frac7{a}\\) days in between events. We can use R to calculate this probability by making use of the cdf; we want " +
            "\\(F_X(8)-F_X(6),\\) which in R is \\(\\texttt\{pgamma(8,{a},scale=7/{a})-pgamma(6,{a},scale=7/{a})\}.\\) Or, if you have a decent calculator, you could simply plug in the integral directly and evaluate."
    },
]


var testq_id = "testq";
qtype_to_var[testq_id] = test_questions;