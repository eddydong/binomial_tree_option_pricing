// European Option Pricing using Binomial Tree Method
function EuropeanOptionPrice(n, callOrPut, sigma, r, t, s, x) {
    let rt = 0;
    
    // Calculate up factor, down factor, and risk-neutral probability
    const u = Math.exp(sigma * Math.sqrt(t / n));
    const d = 1 / u;
    const p = (Math.exp(r * t / n) - d) / (u - d);
    
    // Iterate through all final nodes in the binomial tree
    for (let j = 0; j <= n; j++) {
        let f;
        
        // Calculate payoff at terminal node
        if (callOrPut === 0) {
            // Call option
            f = Math.max(0, s * Math.pow(u, j) * Math.pow(d, n - j) - x);
        } else {
            // Put option
            f = Math.max(0, x - s * Math.pow(u, j) * Math.pow(d, n - j));
        }
        
        // Calculate weighted payoff if positive
        if (f > 0) {
            // Use logarithms for numerical stability with large n
            // This prevents underflow/overflow in probability calculations
            let logProb = j * Math.log(p) + (n - j) * Math.log(1 - p);
            
            // Add log of binomial coefficient using the optimized method
            const m = (n - j) < j ? (n - j) : j;
            for (let k = 1; k <= m; k++) {
                logProb += Math.log(n - m + k) - Math.log(k);
            }
            
            // Convert back from log space and multiply by payoff
            const rp = Math.exp(logProb) * f;
            rt += rp;
        }
    }
    
    // Discount back to present value
    return rt * Math.exp(-r * t);
}

// Global variables
let chart = null;

// Get DOM elements
const calculateBtn = document.getElementById('calculateBtn');
const chartBtn = document.getElementById('chartBtn');
const resultInput = document.getElementById('result');
const elapsedInput = document.getElementById('elapsed');
const loadingOverlay = document.getElementById('loadingOverlay');
const chartPlaceholder = document.getElementById('chartPlaceholder');
const chartCanvas = document.getElementById('convergenceChart');

// Loading overlay functions
function showLoading() {
    loadingOverlay.classList.add('active');
}

function hideLoading() {
    loadingOverlay.classList.remove('active');
}

// Calculate button handler
calculateBtn.addEventListener('click', function() {
    // Get input values
    const s = parseFloat(document.getElementById('stockPrice').value);
    const x = parseFloat(document.getElementById('strikePrice').value);
    const sigma = parseFloat(document.getElementById('volatility').value);
    const r = parseFloat(document.getElementById('riskFreeRate').value);
    const t = parseFloat(document.getElementById('timeToMaturity').value);
    const n = parseInt(document.getElementById('steps').value);
    const iterations = parseInt(document.getElementById('iterations').value);
    const callOrPut = parseInt(document.querySelector('input[name="optionType"]:checked').value);
    
    // Validate inputs
    if (isNaN(s) || isNaN(x) || isNaN(sigma) || isNaN(r) || isNaN(t) || isNaN(n) || isNaN(iterations)) {
        alert('Please enter valid numbers for all fields');
        return;
    }
    
    if (n > 2000) {
        alert('Number of steps cannot exceed 2000');
        return;
    }
    
    // Show loading and disable interaction
    showLoading();
    calculateBtn.disabled = true;
    
    // Use setTimeout to allow UI to update before heavy calculation
    setTimeout(() => {
        // Perform calculation with timing
        const t0 = performance.now();
        let output;
        for (let i = 0; i < iterations; i++) {
            output = EuropeanOptionPrice(n, callOrPut, sigma, r, t, s, x);
        }
        const t1 = performance.now();
        
        // Display results
        resultInput.value = output.toFixed(6);
        elapsedInput.value = (t1 - t0).toFixed(2);
        
        // Re-enable button and hide loading
        calculateBtn.disabled = false;
        hideLoading();
    }, 10);
});

// Chart button handler
chartBtn.addEventListener('click', function() {
    // Get input values
    const s = parseFloat(document.getElementById('stockPrice').value);
    const x = parseFloat(document.getElementById('strikePrice').value);
    const sigma = parseFloat(document.getElementById('volatility').value);
    const r = parseFloat(document.getElementById('riskFreeRate').value);
    const t = parseFloat(document.getElementById('timeToMaturity').value);
    const n = parseInt(document.getElementById('steps').value);
    const callOrPut = parseInt(document.querySelector('input[name="optionType"]:checked').value);
    
    // Validate inputs
    if (isNaN(s) || isNaN(x) || isNaN(sigma) || isNaN(r) || isNaN(t) || isNaN(n)) {
        alert('Please enter valid numbers for all fields');
        return;
    }
    
    if (n > 2000) {
        alert('Number of steps cannot exceed 2000');
        return;
    }
    
    // Show loading and disable interaction
    showLoading();
    chartBtn.disabled = true;
    
    // Use setTimeout to allow UI to update before heavy calculation
    setTimeout(() => {
        // Calculate option prices for different step counts
        const labels = [];
        const data = [];
        const t0 = performance.now();
        
        for (let i = 1; i <= n; i++) {
            labels.push(i.toString());
            data.push(EuropeanOptionPrice(i, callOrPut, sigma, r, t, s, x));
        }
        
        const t1 = performance.now();
        
        // Update result displays
        resultInput.value = data[data.length - 1].toFixed(6);
        elapsedInput.value = (t1 - t0).toFixed(2);
        
        // Hide placeholder and show canvas
        chartPlaceholder.classList.add('hidden');
        chartCanvas.classList.add('active');
        
        // Destroy existing chart if it exists
        if (chart) {
            chart.destroy();
        }
    
        // Create new chart
        const ctx = chartCanvas.getContext('2d');
        chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Option Price',
                data: data,
                borderColor: '#667eea',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderWidth: 2,
                tension: 0.1,
                fill: true,
                pointRadius: 0,
                pointHoverRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Option Price Convergence (Binomial Tree)',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Number of Steps',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Option Price',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                }
            }
        }
    });
    
        // Re-enable button and hide loading
        chartBtn.disabled = false;
        hideLoading();
    }, 10);
});