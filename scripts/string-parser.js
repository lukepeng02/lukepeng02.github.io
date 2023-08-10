function template(string, obj) {
    var s = string;
    for (var prop in obj) {
      s = s.replace(new RegExp('{'+ prop +'}','g'), obj[prop]);
    }
    return s;
}

function randomChoice(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function roundFloat(x, d) {
    if (d < 1) {
        return x;
    }
    return Math.round(x * Math.pow(10, d)) / Math.pow(10, d);
}

function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
}

function randuni(a, b, d) {
    return roundFloat((b-a) * Math.random() + a, d);
}

function parseVars(dict) {
    let copy = {};
    Object.assign(copy, dict);
    let progDict = {};
    for (let k in copy) {
        let v = String(copy[k]);
        if (v.startsWith("randint")) {
            let range = v.slice(8, v.length).split(',').map(item => template(item, progDict)).map(item => parseInt(item, 10));
            let randomInt = randint(...range);
            copy[k] = randomInt;
            progDict[k] = randomInt;
        }
        else if (v.startsWith("randuni")) {
            let parts = v.slice(8, v.length).split(',').map(item => template(item, progDict));
            let lower = parseFloat(parts[0]);
            let upper = parseFloat(parts[1]);
            let digits = parseInt(parts[2]);
            let randomUni = randuni(lower, upper, digits)
            copy[k] = randomUni;
            progDict[k] = randomUni;
        }
        else if (v.startsWith("meval")) {
            let expr = v.slice(6, v.length-1);
            let evaluated = math.evaluate(expr, progDict);
            copy[k] = evaluated;
            progDict[k] = evaluated;
        }
        else if (v.startsWith("@")) {
            let subbed = template(v, progDict)
            let replaced = parseFloat(parseStats(subbed));
            copy[k] = replaced;
            progDict[k] = replaced;
        }
    }
    console.log(copy);
    return copy;
}

function parseStats(string) {
    if (string.search(qnormReg) != -1) {
        let toParse = string.match(qnormReg)[0];
        let [mean, std, quantile] = toParse.split("(")[1].split(")")[0].split(",").map((x) => parseFloat(x));
        let parsed = jStat.normal.inv(quantile, mean, std);
        return parseStats(string.replace(qnormReg, parsed));
    }
    return string;
}

function parseSolution(string, dict) {
    let copy = {};
    for (let k in dict) {
        let v = smartRound(dict[k]);
        copy[k] = v;
    }
    return template(string, copy);
}

function smartRound(float) {
    if (roundFloat(float, 10) % 1 == 0) {
        return Math.round(float);
    } else {
        return roundFloat(float, 4);
    }
}

function isClose(userAnswer, answer) {
    if (answer == 0) {
        return userAnswer < tol;
    }
    return Math.abs((userAnswer - answer) / answer) < tol;
}

function isCorrect(userAnswer, answer) {
    if (userAnswer.includes("/")) { // parse fractions
        var parts = userAnswer.split('/').map(c => Number(c));
        if (parts.length != 2) {
            return false;
        }
        if (isNaN(parts[0]) || isNaN(parts[1])) {
            return false;
        }
        return isClose(parts[0]/parts[1], answer);
    }
    userAnswer = Number(userAnswer);
    if (isNaN(userAnswer)) {
        return false;
    }
    return isClose(userAnswer, answer)
}