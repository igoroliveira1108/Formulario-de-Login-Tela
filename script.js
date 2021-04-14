// Variables
const labels = document.querySelectorAll('.form-control label');

// Function
labels.forEach(label => {
    // Split the letters into a array ["E", "M", "A", "I", "L"] and ["P", "A", "S", "S", "W", "O", "R", "D"]
    label.innerHTML = label.innerText.split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 25}ms">${letter}</span>`)
    .join('') // Turn back to String passing ''
})