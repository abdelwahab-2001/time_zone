    // Function to append a value to the input field
    function appendToResult(value) {
        document.getElementById("result").value += value;
    }
    
    // Function to clear the input field
    function clearResult() {
        document.getElementById("result").value = "";
    }
    
    // Function to calculate the result
    function calculate() {
        const result = document.getElementById("result").value;
        const calculatedResult = eval(result); // Using eval() can be dangerous, so be cautious
        document.getElementById("result").value = calculatedResult;
    }
    ``