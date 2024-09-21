function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    let outputValue;

    if (isNaN(inputValue)) {
        alert("Please enter a valid temperature value.");
        return;
    }
    let tempInCelsius;
    if (inputUnit === "Celsius") {
        tempInCelsius = inputValue;
    } else if (inputUnit === "Fahrenheit") {
        tempInCelsius = (inputValue - 32) * 5 / 9;
    } else if (inputUnit === "Kelvin") {
        tempInCelsius = inputValue - 273.15;
    }
    if (outputUnit === "Celsius") {
        outputValue = tempInCelsius;
    } else if (outputUnit === "Fahrenheit") {
        outputValue = (tempInCelsius * 9 / 5) + 32;
    } else if (outputUnit === "Kelvin") {
        outputValue = tempInCelsius + 273.15;
    }

    document.getElementById('outputValue').textContent = outputValue.toFixed(2);
}0