var prob_questions = [
    {
        prob: "If I roll two fair 6-sided dice, what is the probability their sum is at most 4?",
        answer: "6/36",
        solution: "Out of the 36 possible outcomes, there are six with a sum at most 4: \\((1,1),(1,2),(1,3),(2,1),(2,2),(3,1)\\)."
    },
    {
        prob: "If I roll {a} fair 6-sided dice, what is the probability their product is even?",
        answer: "1-1/b",
        vars: {
            "a": "randint(2,10)",
            "b": "meval(pow(2,a))",
            "c": "meval(b-1)"
        },
        solution: "To get an even product, at least one value must be even. Equivalently, all values must be odd to get an odd product. We can therefore find the probability the product is odd, and subtract this from 1. Each die has a \\(3/6=1/2\\) chance of rolling an odd number, so the " +
            "probability all are odd is \\((1/2)^{a}=1/{b}\\). The probability of having an even product is therefore \\(1-1/{b}={c}/{b}\\)."
    },
    {
        prob: "If I roll {a} fair 6-sided dice, what is the probability their product is prime?",
        answer: "3*a/pow(6,a)",
        vars: {
            "a": "randint(2,5)",
            "b": "meval(pow(6,a))"
        },
        solution: "There are \\(6^{a}={b}\\) outcomes in total. One of the dice must have a prime number, while the rest must all contain 1. (Can you see why?) Now try to find the total number of ways to get a prime product, and simply divide by the number of outcomes."
    },
    {
        prob: "If I roll a fair {a}-sided die, what is the probability the number on the top is a perfect square?",
        answer: "b",
        vars: {
            "a": "randint(4,20)",
            "b": "meval(floor(sqrt(a))/a)"
        },
        solution: "Just count the perfect squares less than or equal to {a}."
    },
    {
        prob: "Two fair 6-sided dice are rolled. What is the probability that a number Albert chooses between 2 and 12 (inclusive, with equal weight) is at least the sum of the two dice?",
        answer: "6/11",
        solution: "For each number from 2 to 12, figure out the probability the sum of the dice is at least that number. So for 2, the probability is 1; for 3, it is 35/36; ... ; for 12, it is 1/36. Then add these numbers together and multiply the total by 1/11, since each number " +
            "between 2 and 12 is equally likely to be chosen."
    },
    {
        prob: "Two fair 6-sided dice are rolled. What is the probability that each die has a Fibonacci number, given the sum is a Fibonacci number?",
        answer: "7/12",
        solution: "There are 12 ways to roll a Fibonacci sum: \\((1,1),(1,2),(2,1),(1,4),(4,1),(2,3),(3,2),(2,6),(3,5),(4,4),\\\\(5,3),(6,2)\\). Of these, 7 consist of only Fibonacci numbers."
    },
    {
        prob: "A card is randomly drawn from a standard deck of 52 cards. What is the probability it is the Ace of Spades?",
        answer: "1/52",
        solution: "This should be simple :)."
    },
    {
        prob: "Three cards are randomly drawn without replacement from a standard deck of 52 cards. What is the probability they are all spades?",
        answer: "286/22100",
        solution: "There are \\(\\binom\{13\}\{3\}=286\\) ways to choose 3 different spades from 13 overall. Furthermore, there are \\(\\binom\{52\}\{3\}=22100\\) ways to choose 3 cards from 52 overall. The probability of choosing 3 spades from 52 cards is therefore \\(286/22100\\)."
    },
    {
        prob: "Four cards are randomly drawn without replacement from a standard deck of 52 cards. What is the probability exactly 2 are of the same suit (and the remaining two are of different suits)? ⭐",
        answer: "158184/270725",
        solution: "There are \\(\\binom\{13\}\{2\}=78\\) ways to choose 2 cards of one suit, and \\(4\\) possible suits to choose these from. There are \\(\\binom32=3\\) ways to choose two suits from the three remaining ones, and \\(13\\times13\\) ways to pick one card from each " +
            "of these. Overall, there are \\(\\binom\{52\}\{4\}=270725\\) possible ways to choose 4 cards from 52. (Can you piece everything together?)"
    },
    {
        prob: "Five cards are randomly drawn without replacement from a standard deck of 52 cards. What is the probability 4 have the same rank (number), given at least 3 do?",
        answer: "624/59280",
        solution: "We can first find the probablilty at least 3 cards have the same rank. To achieve this outcome, we can either have exactly 3 be of the same rank, or exactly 4. The probability of the first outcome is " +
            "\\(13\\cdot\\binom43\\times\\binom\{48\}2/\\binom\{52\}5=58656/2598960\\). That of the second outcome is \\(13\\cdot\\binom44\\times48/\\binom\{52\}5=624/2598960\\). The overall probability is therefore " +
            "\\(624/(624 + 58656)=624/59280\\)."
    },
    {
        prob: "Let \\(P[A]={a},P[B]={b},P[A\\cap B]={e}\\). Find \\(P[A\\cup B].\\)",
        answer: "a+b-e",
        vars: {
            "a": "randuni(0.1,0.9,1)", // P[A]
            "b": "randuni(0.1,0.9,1)", // P[B]
            "c": "meval(min(a,b))",
            "d": "meval(max(0,a+b-1))",
            "e": "randuni({d},{c},1)", // P[A n B]
        },
        solution: "We know \\(P[A\\cup B]=P[A]+P[B]-P[A\\cap B].\\)"
    },
    {
        prob: "Let \\(P[A]={a},P[B]={b},P[A\\cap B]={e}\\). Find \\(P[A\\mid B].\\)",
        answer: "e/b",
        vars: {
            "a": "randuni(0.1,0.9,1)", // P[A]
            "b": "randuni(0.1,0.9,1)", // P[B]
            "c": "meval(min(a,b))",
            "d": "meval(max(0,a+b-1))",
            "e": "randuni({d},{c},1)", // P[A n B]
        },
        solution: "We know \\(P[A\\mid B]=P[A\\cap B]/P[B].\\)"
    },
    {
        prob: "Let \\(P[A]={a},P[B]={b},P[A\\cap B]={e}\\). Find \\(P[B\\mid A].\\)",
        answer: "e/a",
        vars: {
            "a": "randuni(0.1,0.9,1)", // P[A]
            "b": "randuni(0.1,0.9,1)", // P[B]
            "c": "meval(min(a,b))",
            "d": "meval(max(0,a+b-1))",
            "e": "randuni({d},{c},1)", // P[A n B]
        },
        solution: "We know \\(P[B\\mid A]=P[A\\cap B]/P[A].\\)"
    },
    {
        prob: "Let \\(P[A]={a},P[B]={b},P[A\\cap B]={e}\\). Find \\(P[(A\\cup B)'].\\)",
        answer: "1-(a+b-e)",
        vars: {
            "a": "randuni(0.1,0.9,1)", // P[A]
            "b": "randuni(0.1,0.9,1)", // P[B]
            "c": "meval(min(a,b))",
            "d": "meval(max(0,a+b-1))",
            "e": "randuni({d},{c},1)", // P[A n B]
        },
        solution: "We know \\(P[A\\cup B]=P[A]+P[B]-P[A\\cap B].\\) and \\(P[(A\\cup B)']=1-P[A\\cup B].\\)"
    },
    {
        prob: "Let \\(P[A]={a},P[B]={b},P[A\\cap B]={e}\\). Find \\(P[A'\\mid B'].\\)",
        answer: "h/g",
        vars: {
            "a": "randuni(0.1,0.9,1)", // P[A]
            "b": "randuni(0.1,0.9,1)", // P[B]
            "c": "meval(min(a,b))",
            "d": "meval(max(0,a+b-1))",
            "e": "randuni({d},{c},1)", // P[A n B]
            "f": "meval(1-a)", // P[A']
            "g": "meval(1-b)", // P[B']
            "h": "meval(1-(a+b-e))", // P[A' n B']
        },
        solution: "We know \\(P[A'\\mid B']=P[A'\\cap B']/P[B'], P[B']=1-P[B]\\), and \\(P[A'\\cap B']=P[(A\\cup B)']=1-P[A\\cup B]\\)."
    },
    {
        prob: "Let \\(P[A]={a},P[B]={b},P[A\\cap B]={e}\\). Find \\(P[B'\\mid A'].\\)",
        answer: "h/f",
        vars: {
            "a": "randuni(0.1,0.9,1)", // P[A]
            "b": "randuni(0.1,0.9,1)", // P[B]
            "c": "meval(min(a,b))",
            "d": "meval(max(0,a+b-1))",
            "e": "randuni({d},{c},1)", // P[A n B]
            "f": "meval(1-a)", // P[A']
            "g": "meval(1-b)", // P[B']
            "h": "meval(1-(a+b-e))",  // P[A' n B']
        },
        solution: "We know \\(P[B'\\mid A']=P[A'\\cap B']/P[A'], P[A']=1-P[A]\\), and \\(P[A'\\cap B']=P[(A\\cup B)']=1-P[A\\cup B]\\)."
    },
    {
        prob: "Let \\(P[A]={a},P[B]={b},P[A\\cap B]={e}\\). Find \\(P[A\\mid B'].\\)",
        answer: "g/f",
        vars: {
            "a": "randuni(0.1,0.9,1)", // P[A]
            "b": "randuni(0.1,0.9,1)", // P[B]
            "c": "meval(min(a,b))",
            "d": "meval(max(0,a+b-1))",
            "e": "randuni({d},{c},1)", // P[A n B]
            "f": "meval(1-b)", // P[B']
            "g": "meval(a-e)", // P[A n B']
        },
        solution: "We know \\(P[A\\mid B']=P[A\\cap B']/P[B'], P[B']=1-P[B]\\), and \\(P[A\\cap B']=P[A]-P[A\\cap B]\\)."
    },
    {
        prob: "Let \\(P[A]={a},P[B]={b},P[A\\cap B]={e}\\). Find \\(P[B\\mid A'].\\)",
        answer: "g/f",
        vars: {
            "a": "randuni(0.1,0.9,1)", // P[A]
            "b": "randuni(0.1,0.9,1)", // P[B]
            "c": "meval(min(a,b))",
            "d": "meval(max(0,a+b-1))",
            "e": "randuni({d},{c},1)", // P[A n B]
            "f": "meval(1-a)", // P[A']
            "g": "meval(b-e)", // P[A' n B]
        },
        solution: "We know \\(P[B\\mid A']=P[A'\\cap B]/P[A'], P[A']=1-P[A]\\), and \\(P[A'\\cap B]=P[B]-P[A\\cap B]\\)."
    },
    {
        prob: "Suppose events \\(A\\) and \\(B\\) are independent and \\(P[A]={a},P[B]={b}\\). Find \\(P[A\\cap B]\\).",
        answer: "a*b",
        vars: {
            "a": "randuni(0.1,0.9,1)", // P[A]
            "b": "randuni(0.1,0.9,1)", // P[B]
        },
        solution: "If events \\(A\\) and \\(B\\) are independent, then \\(P[A\\cap B]=P[A]\\cdot P[B]\\)."
    },
    {
        prob: "Suppose events \\(A\\) and \\(B\\) are independent and \\(P[A]={a},P[B]={b}\\). Find \\(P[A\\cup B]\\).",
        answer: "a+b-a*b",
        vars: {
            "a": "randuni(0.1,0.9,1)", // P[A]
            "b": "randuni(0.1,0.9,1)", // P[B]
        },
        solution: "If events \\(A\\) and \\(B\\) are independent, then \\(P[A\\cap B]=P[A]\\cdot P[B]\\). Also, \\(P[A\\cup B]=P[A]+P[B]-P[A\\cap B]\\)."
    },
    {
        prob: "Suppose events \\(A\\) and \\(B\\) are independent and \\(P[A]={a},P[B]={b}\\). Find \\(P[A'\\cap B']\\).",
        answer: "1-(a+b-a*b)",
        vars: {
            "a": "randuni(0.1,0.9,1)", // P[A]
            "b": "randuni(0.1,0.9,1)", // P[B]
        },
        solution: "If events \\(A\\) and \\(B\\) are independent, then \\(P[A\\cap B]=P[A]\\cdot P[B]\\). Also, \\(P[A'\\cap B']=P[(A\\cup B)']=1-P[A\\cup B]\\) and \\(P[A\\cup B]=P[A]+P[B]-P[A\\cap B]\\)."
    },
    {
        prob: "A fair {a}-sided die and {c}-sided die are rolled. Find the probability the number on the {a}-sided die is larger than that on the {c}-sided die.",
        answer: "a*(a-1)/(2*a*c)",
        vars: {
            "a": "randint(4,8)",
            "b": "meval(a+1)",
            "c": "randint({b},10)",
            "d": "meval(a*c)"
        },
        solution: "There are {d} total outcomes. How many of these involve the first die having a larger number than the second?"
    },
    {
        prob: "A fair 6-sided die and 8-sided die are rolled. Find the probability the product of the two dice is 24.",
        answer: "3/48",
        solution: "There are 48 total outcomes. Of these, the ones that yield a product of 24 are \\((3,8),(4,6),(6,4)\\)."
    },
    {
        prob: "A fair 6-sided die and 8-sided die are rolled. Find the probability their numbers are relatively prime.",
        answer: "32/48",
        solution: "There are 48 total outcomes. How many of these involve numbers relatively prime with each other (i.e., their gcd is 1)? Hint: it may be easier in this case to count those in which the numbers are not relatively prime."
    },
    {
        prob: "A sack has {b} marbles: {a} red, {a} yellow, {a} green, and {a} blue. If I pick 4 without replacement, what is the probability I get one of each color?",
        answer: "d/c",
        vars: {
            "a": "randint(3,8)",
            "b": "meval(4*a)",
            "c": "meval(combinations(b,4))",
            "d": "meval(pow(a,4))"
        },
        solution: "There are \\({a}^4={d}\\) ways to draw one of each color, and \\(\\binom\{{b}\}4={c}\\) ways to draw 4 marbles overall."
    },
    {
        prob: "A sack has {b} marbles: {a} red, {a} yellow, {a} green, and {a} blue. If I pick 3 without replacement, what is the probability I get exactly two colors?",
        answer: "a*(a-1)/2*4*a*3/c",
        vars: {
            "a": "randint(3,8)",
            "b": "meval(4*a)",
            "c": "meval(combinations(b,3))",
            "d": "meval(3*a)"
        },
        solution: "There are \\(\\binom\{{a}\}2\\) ways to draw two marbles of one color and 4 colors for this. I can pick one of the {d} remaining marbles for the other color. Additionally, there are \\(\\binom\{{b}\}3={c}\\) ways to draw 3 marbles overall."
    },
    {
        prob: "A sack has {b} marbles: {a} red, {a} yellow, {a} green, and {a} blue. If I pick 2 without replacement, what is the probability they are the same color?",
        answer: "4*a*(a-1)/2/c",
        vars: {
            "a": "randint(3,8)",
            "b": "meval(4*a)",
            "c": "meval(combinations(b,2))",
        },
        solution: "There are \\(\\binom\{{a}\}2\\) ways to draw two marbles of one color and 4 colors for this. Additionally, there are \\(\\binom\{{b}\}2={c}\\) ways to draw 2 marbles overall."
    },
    {
        prob: "A sack has {b} marbles: {a} red, {a} yellow, {a} green, and {a} blue. If I pick 8 without replacement, what is the probability I do not get the same amount of any color?",
        answer: "e/f",
        vars: {
            "a": "randint(5,8)",
            "b": "meval(4*a)",
            "c": "meval(a*combinations(a,2)*combinations(a,5))",
            "d": "meval(a*combinations(a,3)*combinations(a,4))",
            "e": "meval(24*(c+d))",
            "f": "meval(combinations(b,8))"
        },
        solution: "There are two possible cases: we get none of color 1, one of color 2, two of color 3, and five of color 4; or we get none of color 1, one of color 2, three of color 3, and four of color 4. For the first case, there are " +
            "\\(\\binom\{{a}\}0\\binom\{{a}\}1\\binom\{{a}\}2\\binom\{{a}\}5={c}\\) ways to choose the marbles and \\(4!=24\\) ways to assign the (distinct) quantities to the different colors. For the second case, there are " +
            "\\(\\binom\{{a}\}0\\binom\{{a}\}1\\binom\{{a}\}3\\binom\{{a}\}4={d}\\) ways to choose the marbles and \\(4!=24\\) ways to assign the (distinct) quantities to the different colors. So there are \\({e}\\) ways in total to not have the same amount of any color. " +
            "Finally, there are \\(\\binom\{{b}\}8={f}\\) ways to choose 8 marbles from a total of {b}."
    },
    {
        prob: "SpongeBob and Patrick play Eels and Escalators, and the winner of the match is the first to win 3 games. SpongeBob has a {a} chance of winning a game, " +
            "compared to Patrick's {b}. Given that Patrick won the first game, what is the probability Patrick wins the match? ⭐",
        answer: "(b*b*b+b*b*b*a*2+b*b*b*a*a*3)/(b*b*b+b*b*b*a*2+b*b*b*a*a*3+b*a*a*a+b*b*a*a*a*3)",
        vars: {
            "a": "randuni(0.2,0.8,1)",
            "b": "meval(round(1-a,1))"
        },
        solution: "Suppose Patrick wins the first game. For Patrick to win the match, the following are his possible win/loss sequences: WWW, WWLW, WLWW, WLLWW, WLWLW, WWLLW. For him to lose the match, " +
            "the following are his possible win/loss sequences: WLLL, WWLLL, WLWLL, WLLWL. We can find the probability of each of the 10 cases. The probability Patrick wins the match will be the sum of the " +
            "probabilities of winning the entire match, divided by the total probability of these 10 cases."
    },
    {
        prob: "Emily plays a game where she rolls a fair {a}-sided die until 3 distinct numbers come up. Find the probability it takes exactly {b} rolls. ⭐",
        answer: "f",
        vars: {
            "a": "randint(5,10)",
            "b": "randint(4,{a})",
            "c": "meval(b-2)",
            "d": "meval(a-1)",
            "e": "meval(a-2)",
            "f": "meval((pow(2,c)-1)*pow(1/a,b)*a*d*e)"
        },
        solution: "Let A be the first number that comes up, C be the last, and B be the other. We know there must only be one C in the sequence of rolls (at the very end), and A must be the first. So the {c} " +
            "rolls in between may contain any mix of As and Bs in any order, as long as at least one B is present. There are \\(2^{c}-1\\) ways to arrange the middle values. Each of A, B, and C have a \\(1/{a}\\) " +
            "chance of being rolled, so we multiply the previous number by \\((1/{a})^\{{b}\}\\). Finally, there are \\({a}\\cdot{d}\\cdot{e}\\) ways to choose A, B, and C."
    },
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

var probq_id = "prob";
qtype_to_var[probq_id] = prob_questions;
console.log(`Loaded ${prob_questions.length} probability questions.`)