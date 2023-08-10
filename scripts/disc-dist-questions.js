disc_dist_questions = [
    {
        prob: "Hank drinks water according to a Poisson process of \\(\\lambda={a}\\) cups per day. What is the variance of this?",
        answer: "a",
        vars: {
            "a": "randint(1,4)", 
        },
        solution: "The variance of a Poisson distribution is equal to the mean \\(\\lambda\\), which is {ans}."
    },
];

var ddistq_id = "ddist";
qtype_to_var[ddistq_id] = disc_dist_questions;