document.getElementById('pythagoreanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const a = parseInt(document.getElementById('a').value);
    const b = parseInt(document.getElementById('b').value);
    const c = parseInt(document.getElementById('c').value);
    
    const resultElement = document.getElementById('result');
    
    if (isPythagoreanTriplet(a, b, c)) {
        resultElement.textContent = 'Os números formam uma terno pitagórico!';
    } else {
        resultElement.textContent = 'Os números não formam uma terno pitagórico.';
    }
});

function isPythagoreanTriplet(a, b, c) {
    return (a * a) + (b * b) === (c * c) || 
           (a * a) + (c * c) === (b * b) ||
           (b * b) + (c * c) === (a * a);
}