var test_questions = [
    {
        prob: "Suppose professional basketball player Shack shoots free throws until he makes {a}. If each shot has probability {b} of going in, what is the probability he will attempt no more than {d}? (R recommended)",
        answer: "f",
        vars: {
            "a": "randint(10,15)",
            "b": "randuni(0.25,0.4,2)",
            "c": "meval(round(a/b))",
            "d": "randint(@meval(c-5@),@meval(c+5@))",
            "e": "meval(d-a)",
            "f": "@pnbinom({e},{a},{b})"
        },
        solution: "Let \\(F\\) be a random variable representing the number of free throws Shack will attempt. Then \\(F\\sim \\text\{NB\}({a},{b}).\\) We must find \\(P[F\\leq {d}]=F_F({d}),\\) which we can easily do in R: " +
            "\\(\\texttt\{pnbinom({d}-{a},{a},{b}).\}\\) <b>Very</b> important: notice that the first argument is \\({d}-{a}\\), which is the number of failures rather than the number of trials. This is standard in R. If you do " +
            "not like this, you can also solve this with the binomial cdf. The complement of the event is that Shack makes fewer than {a} free throws in his first {d} attempts. So if we let \\(G\\) be the number of free throws he makes " +
            "in his first {d} attempts, then \\(G\\sim \\text\{Binom\}({d},{b}).\\) We must compute \\(1-P[G\\lt {a}]=1-F_G(@meval(a-1@)),\\) which we can do in R: \\(\\texttt\{1-pbinom(@meval(a-1@),{d},{b}).\}\\)"
    },
]


var testq_id = "testq";
qtype_to_var[testq_id] = test_questions;