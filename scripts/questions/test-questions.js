var test_questions = [
    {
        prob: "Let \\(f_\{X,Y\}(x,y)=\\frac1\{{e}\}({a}x+{b}y), x=1,2,\\ldots,{c}; y=1,2,\\ldots,{d}.\\) Find \\(Cov[X,Y]\\).",
        answer: "(a*(2*c+1)+b*(2*d+1))*(c+1)*(d+1)/(6*(a*(c+1)+b*(d+1)))-((2*a*(2*c+1)+3*b*(d+1))*(c+1)/(6*(a*(c+1)+b*(d+1))))*((3*a*(c+1)+2*b*(2*d+1))*(d+1)/(6*(a*(c+1)+b*(d+1))))",
        vars: {
            "a": "randint(2,6)",
            "b": "randint(2,6)",
            "c": "randint(4,7)",
            "d": "randint(4,7)",
            "e": "meval(round((a*c*d*(c+1)+b*c*d*(d+1))/2,1))"
        },
        solution: "First compute \\(\\mathbb E[XY]=\\sum_x\\sum_yxy\\cdot f_\{X,Y\}(x,y).\\) Then compute \\(f_X(x)=\\sum_y f_\{X,Y\}(x,y)\\) and use this to find \\(\\mathbb E[X].\\) Similarly, compute \\(\\mathbb E[Y]\\). Lastly, we know " +
            "\\(Cov[X,Y]=\\mathbb E[XY]-\\mathbb E[X]\\mathbb E[Y].\\)"
    },
]


var testq_id = "testq";
qtype_to_var[testq_id] = test_questions;