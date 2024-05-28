// script.js
document.addEventListener('DOMContentLoaded', () => {
    const counterDisplay = document.getElementById('counter');
    const increaseBtn = document.getElementById('increase');
    const decreaseBtn = document.getElementById('decrease');
    const resetBtn = document.getElementById('reset');
    
    let counter = 0;
    
    function updateDisplay() {
        counterDisplay.textContent = counter;
    }
    
    increaseBtn.addEventListener('click', () => {
        counter++;
        updateDisplay();
    });
    
    decreaseBtn.addEventListener('click', () => {
        counter--;
        updateDisplay();
    });
    
    resetBtn.addEventListener('click', () => {
        counter = 0;
        updateDisplay();
    });
});
