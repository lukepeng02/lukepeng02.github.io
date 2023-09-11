let qnormReg = /@qnorm\(.*?\)/; // inverse normal: qnorm(mean, std, percentile)
let pnormReg = /@pnorm\(.*?\)/; // normal cdf: pnorm(mean, std, x)

let dpoisReg = /@dpois\(.*?\)/; // poisson pmf: ppois(x, rate)
let ppoisReg = /@ppois\(.*?\)/; // poisson cdf: ppois(x, rate)

let pbinomReg = /@pbinom\(.*?\)/; // binomial cdf: pbinom(x, n, p)

let dnbinomReg = /@dnbinom\(.*?\)/; // negative binomial pmf: dnbinom(x, n, p)
let pnbinomReg = /@pnbinom\(.*?\)/; // negative binomial cdf: pnbinom(x, n, p)
