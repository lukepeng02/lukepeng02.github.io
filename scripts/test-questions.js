var test_questions = [
    {
        prob: "Consider three uniform random number generators with real outputs: one generates numbers between 0 and {a}, one between 0 and {b}, and one between 0 and {c}. Albert promises to cancel " +
            "Homework #2 if their sum is less than {e}. Find the probability the assignment is cancelled. (Disclaimer: Albert would never let fate decide whether to cancel an assignment.) ⭐",
        answer: "pow(e,3)/6/(a*b*c)",
        vars: {
            "a": "randint(1,4)",
            "b": "randint(1,4)",
            "c": "randint(1,4)",
            "d": "meval(min(a,b,c))",
            "e": "randint(1,{d})"
        },
        solution: "We can plot the output in 3D space: let \\(x\\) represent the output of the first generator, \\(y\\) be the second, and \\(z\\) be the third. The sample space is a rectangular prism bounded by " +
            "\\(0\\leq x\\leq {a},0\\leq y\\leq {b},0\\leq z\\leq {c}\\). We want the volume of the tetrahedron bounded by the planes \\(x=0,y=0,z=0,\\) and \\(x+y+z<{e}\\). This is simply \\({e}^3/6\\). " +
            "The probability the assignment is cancelled is the ratio of the volume of this tetrahedron to that of the rectangular prism."
    },
]

var testq_id = "testq";
qtype_to_var[testq_id] = test_questions;