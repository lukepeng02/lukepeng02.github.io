cont_dist_questions = [
    {
        prob: "Let \\(Y\\) be a continuous random variable with pdf \\(f_Y(y)=c\\cdot({a}y^{c}+{b}),y\\in [0,5].\\) Find the value of \\(c\\) that makes this a valid probability distribution.",
        answer: "1/(a*pow(5,c+1)/(c+1)+5*b)",
        vars: {
            "a": "randint(2,5)",
            "b": "randint(5,10)",
            "c": "randint(2,4)",
        },
        solution: "First, find \\(\\int_{0}^{5} {a}y^{c}+{b}\\text{ d}y\\). Then, simply divide \\(1\\) by this value to find \\(c.\\)"
    },
    {
        prob: "While job hunting, Kayla receives scam emails according to a Poisson process of {a} per week. Find the probability it will take between 1 and 2 days for her to receive her first this week.",
        answer: "exp(-1/b)-exp(-2/b)",
        vars: {
            "a": "randint(3,7)",
            "b": "meval(7/a)"
        },
        solution: "This follows an exponential distribution with \\(\\theta=\\frac7{a}\\) days in between events. We can therefore find \\(\\int_1^2\\frac{a}7e^\{-{a}x/7\}\\text{ d}x,\\) which is the final answer."
    },
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
];

var cdistq_id = "cdist";
qtype_to_var[cdistq_id] = cont_dist_questions;
console.log(`Loaded ${cont_dist_questions.length} continuous distribution questions.`)

/**
 *     {
        prob: "Find the value at quantile {a} of the normal distribution with mean {b} and variance {c}.",
        answer: "@qnorm({b},{d},{e})",
        vars: {
            "a": "randint(10,90)",
            "b": "randuni(-1,1,1)",
            "c": "randuni(1,2,1)",
            "d": "meval(sqrt(c))",
            "e": "meval(a/100)"
        },
        solution: "{ans}"
    },
    {
        prob: "Let \\(q\\) the value at quantile {a} of the normal distribution with mean {b} and variance {c}. What is \\(2q\\)?",
        answer: "{g}",
        vars: {
            "a": "randint(10,90)",
            "b": "randuni(-1,1,1)",
            "c": "randuni(1,2,1)",
            "d": "meval(sqrt(c))",
            "e": "meval(a/100)",
            "f": "@qnorm({b},{d},{e})",
            "g": "meval(2*f)"
        },
        solution: "From R, we know qnorm({a}/100,{b},{e}^0.5) is {f}, so the answer is \\(2\\times{f}\\approx{ans}\\)."
    },
 */