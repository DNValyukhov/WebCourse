"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const celsiusBlock = document.getElementById("celsius-block");
    const celsiusTemperatureLabel = document.getElementById("celsius-temperature-label");
    const celsiusTemperatureField = document.getElementById("celsius-temperature-field");
    const convertButton = document.getElementById("convert-button");
    const resetButton = document.getElementById("reset-button");
    const kelvinBlock = document.createElement("div");
    const fahrenheitBlock = document.createElement("div");

    const warningInformation = document.getElementById("warning-information");
    const initialWarningString = `Введите цифрами температуру в градусах Цельсия
для перевода в градусы Кельвина и Фаренгейта`;
    warningInformation.textContent = initialWarningString;

    let kelvinTemperatureField;
    let fahrenheitTemperatureField;

    convertButton.addEventListener("click", function () {
        let celsiusTemperature = Number.parseFloat(celsiusTemperatureField.value.trim());

        warningInformation.classList.remove("invisible");
        warningInformation.classList.remove("font-size-26");

        kelvinBlock.innerHTML = "";
        fahrenheitBlock.innerHTML = "";

        if (isNaN(celsiusTemperature)) {
            warningInformation.classList.add("font-size-26");
            warningInformation.textContent = "(требуется ввести число)";
            return;
        }

        if (celsiusTemperature < -273.15) {
            warningInformation.textContent = "Введённое число должно быть не меньше -273.15";
            return;
        }

        celsiusTemperatureLabel.textContent = "Температура в градусах Цельсия:"

        warningInformation.textContent = "";

        warningInformation.classList.add("invisible");

        const kelvinTemperature = celsiusTemperature + 273.15;

        const fahrenheitTemperature = celsiusTemperature * 1.8 + 32;

        kelvinBlock.innerHTML = `    
        <label class="label" for="kelvin-temperature-field">Температура в градусах Кельвина:</label>
        <input class="temperature-field" id="kelvin-temperature-field" type="text">`;

        kelvinTemperatureField = kelvinBlock.querySelector("#kelvin-temperature-field");

        kelvinTemperatureField.value = kelvinTemperature;

        kelvinTemperatureField.readOnly = true;

        fahrenheitBlock.innerHTML = `    
        <label class="label" for="fahrenheit-temperature-field">Температура в градусах Фаренгейта:</label>
        <input class="temperature-field" id="fahrenheit-temperature-field" type="text">`;

        fahrenheitTemperatureField = fahrenheitBlock.querySelector("#fahrenheit-temperature-field");

        fahrenheitTemperatureField.value = fahrenheitTemperature;

        fahrenheitTemperatureField.readOnly = true;

        celsiusBlock.insertAdjacentElement(`afterend`, fahrenheitBlock);

        celsiusBlock.insertAdjacentElement(`afterend`, kelvinBlock);
    });

    resetButton.addEventListener("click", function () {
        celsiusTemperatureLabel.textContent = "Введите температуру в градусах Цельсия";
        celsiusTemperatureField.value = "";

        warningInformation.classList.remove("invisible");
        warningInformation.textContent = initialWarningString;
        warningInformation.classList.remove("font-size-26");

        kelvinTemperatureField.readOnly = false;
        fahrenheitTemperatureField.readOnly = false;

        kelvinBlock.innerHTML = "";
        fahrenheitBlock.innerHTML = "";
    });
})