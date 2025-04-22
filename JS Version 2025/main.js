function EuropeanOptionPrice(n, callOrPut, sigma, r, t, s, x) {
    let rt = 0; // Initialize the result (option price) to 0

    // Calculate the up factor (u), down factor (d), and risk-neutral probability (p)
    const u = Math.exp(sigma * Math.sqrt(t / n)); // Up factor: price increases by u
    const d = 1 / u; // Down factor: price decreases by d
    const p = (Math.exp(r * t / n) - d) / (u - d); // Risk-neutral probability

    // Iterate through all possible outcomes at the end of the binomial tree
    for (let j = 0; j <= n; j++) {
        let f; // Option payoff at node (j)

        // Calculate the payoff for a call or put option
        if (callOrPut === 0) {
            // Call option: max(0, stock price - strike price)
            f = Math.max(0, s * Math.pow(u, j) * Math.pow(d, n - j) - x);
        } else {
            // Put option: max(0, strike price - stock price)
            f = Math.max(0, x - s * Math.pow(u, j) * Math.pow(d, n - j));
        }

        // If the payoff is greater than 0, calculate its contribution to the option price
        if (f > 0) {
            let rp = Math.pow(p, j) * Math.pow(1 - p, n - j); // Probability of reaching this node
            const m = (n - j) < j ? (n - j) : j; // Calculate the smaller of (n - j) and j

            // Compute the binomial coefficient using a loop
            for (let k = 1; k <= m; k++) {
                rp *= (n - m + k) / k; // Update the probability with the binomial coefficient
            }

            rp *= f; // Multiply the probability by the payoff
            rt += rp; // Add the weighted payoff to the result
        }
    }

    // Discount the result back to the present value
    return rt * Math.exp(-r * t);
}

// Test the EuropeanOptionPrice function
const n = 10; // Number of steps in the binomial tree
const callOrPut = 0; // 0 for call option, 1 for put option
const sigma = 0.2; // Volatility (20%)
const r = 0.05; // Risk-free interest rate (5%)
const t = 1; // Time to maturity (1 year)
const s = 100; // Current stock price
const x = 100; // Strike price

const optionPrice = EuropeanOptionPrice(n, callOrPut, sigma, r, t, s, x);
console.log("European Option Price:", optionPrice);