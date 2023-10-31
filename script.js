document.getElementById("convert").addEventListener("click", function () {
    const temperatureInput = parseFloat(document.getElementById("temperature").value);
    const selectedUnit = document.getElementById("unit").value;
    let convertedTemperature;
    let convertedUnit;

    if (isNaN(temperatureInput)) {
        document.getElementById("result").style.color = "red";
        document.getElementById("convertedTemperature").textContent = "Invalid input";
        document.getElementById("convertedUnit").textContent = "";
        return;
    }

    if (selectedUnit === "celsius") {
        convertedTemperature = (temperatureInput - 32) * (5/9);
        convertedUnit = "Celsius";
    } else if (selectedUnit === "fahrenheit") {
        convertedTemperature = (temperatureInput * 9/5) + 32;
        convertedUnit = "Fahrenheit";
    } else {
        convertedTemperature = temperatureInput - 273.15;
        convertedUnit = "Kelvin";
    }

    document.getElementById("result").style.color = "black";
    document.getElementById("convertedTemperature").textContent = convertedTemperature.toFixed(2);
    document.getElementById("convertedUnit").textContent = convertedUnit;
});
