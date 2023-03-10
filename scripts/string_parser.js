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

function parseRand(dict) {
    for (var k in dict) {
        var v = dict[k];
        if (v.startsWith("randint")) {
            var range = v.slice(8, v.length).split(',').map(item => parseInt(item, 10));
            dict[k] = randint(...range);
        }
        else if (v.startsWith("randuni")) {
            var parts = v.slice(8, v.length).split(',');
            var lower = parseFloat(parts[0]);
            var upper = parseFloat(parts[1]);
            var digits = parseInt(parts[2]);
            dict[k] = randuni(lower, upper, digits);
        }
    }
    return dict;
}

function smartRound(float) {
    if (roundFloat(float, 10) % 1 == 0) {
        return Math.round(float);
    } else {
        return roundFloat(float, 4);
    }
}

function isClose(userAnswer, answer) {
    return Math.abs((userAnswer - answer) / answer) < 1e-8;
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