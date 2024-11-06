//your JS code here. If required.
// Initial function to return a promise with an array of numbers after 3 seconds
function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

// Function to filter out odd numbers
function filterEvenNumbers(numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evenNumbers = numbers.filter(number => number % 2 === 0);
            document.getElementById("output").innerText = `Even numbers: ${evenNumbers.join(', ')}`;
            resolve(evenNumbers);
        }, 1000);
    });
}

// Function to multiply each even number by 2
function multiplyByTwo(numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const doubledNumbers = numbers.map(number => number * 2);
            document.getElementById("output").innerText = `Doubled numbers: ${doubledNumbers.join(', ')}`;
            resolve(doubledNumbers);
        }, 2000);
    });
}

// Main function to chain promises and update the DOM
function processNumbers() {
    getNumbers()
        .then(filterEvenNumbers)
        .then(multiplyByTwo)
        .catch(error => {
            console.error("Error processing numbers:", error);
            document.getElementById("output").innerText = "An error occurred.";
        });
}

// Call the main function to start the process
processNumbers();

