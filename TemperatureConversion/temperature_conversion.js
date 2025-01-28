"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const temperatureForm = document.getElementById("temperature-form");
    const celsiusTemperatureLabel = document.getElementById("celsius-temperature-label");
    const celsiusTemperatureField = document.getElementById("celsius-temperature-field");

    const kelvinBlock = document.getElementById("kelvin-block");
    const kelvinTemperatureField = document.getElementById("kelvin-temperature-field");

    const fahrenheitBlock = document.getElementById("fahrenheit-block");
    const fahrenheitTemperatureField = document.getElementById("fahrenheit-temperature-field");

    const warningInformation = document.getElementById("warning-information");
    const initialWarningString = "";
    warningInformation.textContent = initialWarningString;

    const buttonsBlock = document.getElementById("buttons-block");
    const resetButton = document.getElementById("reset-button");

    kelvinBlock.classList.add("invisible");
    fahrenheitBlock.classList.add("invisible");

    function setVisibleMode() {
        buttonsBlock.classList.add("margin-top-73");

        temperatureForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const celsiusTemperature = Number.parseFloat(celsiusTemperatureField.value.trim());

            celsiusTemperatureField.classList.remove("red-border");
            celsiusTemperatureField.classList.add("margin-bottom-35");
            warningInformation.classList.remove("invisible", "large-font");
            buttonsBlock.classList.remove("margin-top-47");
            buttonsBlock.classList.remove("margin-top-73");

            kelvinBlock.classList.add("invisible");
            fahrenheitBlock.classList.add("invisible");

            if (isNaN(celsiusTemperature)) {
                celsiusTemperatureField.classList.add("red-border");
                celsiusTemperatureField.classList.remove("margin-bottom-35");
                celsiusTemperatureField.classList.add("margin-bottom-5");
                warningInformation.classList.add("large-font");
                warningInformation.textContent = "(требуется ввести число)";
                buttonsBlock.classList.remove("margin-top-47");
                buttonsBlock.classList.remove("margin-top-73");
                return;
            }

            if (celsiusTemperature < -273.15) {
                celsiusTemperatureField.classList.add("red-border");
                celsiusTemperatureField.classList.remove("margin-bottom-35");
                celsiusTemperatureField.classList.add("margin-bottom-5");
                warningInformation.textContent = "Введённое число должно быть не меньше -273.15";
                buttonsBlock.classList.remove("margin-top-73");
                buttonsBlock.classList.add("margin-top-47");
                return;
            }

            celsiusTemperatureLabel.textContent = "Температура в градусах Цельсия:";

            warningInformation.textContent = "";
            warningInformation.classList.add("invisible");

            const kelvinTemperature = celsiusTemperature + 273.15;
            const fahrenheitTemperature = celsiusTemperature * 1.8 + 32;

            kelvinTemperatureField.value = kelvinTemperature;
            kelvinBlock.classList.remove("invisible");

            fahrenheitTemperatureField.value = fahrenheitTemperature;
            fahrenheitBlock.classList.remove("invisible");
        });

        celsiusTemperatureField.addEventListener("input", function () {
            celsiusTemperatureField.classList.remove("red-border");
        });

        resetButton.addEventListener("click", function () {
            celsiusTemperatureLabel.textContent = "Введите температуру в градусах Цельсия";
            celsiusTemperatureField.value = "";
            celsiusTemperatureField.classList.remove("red-border");

            warningInformation.textContent = initialWarningString;
            warningInformation.classList.add("invisible");
            warningInformation.classList.remove("large-font");

            kelvinBlock.classList.add("invisible");
            fahrenheitBlock.classList.add("invisible");

            setVisibleMode();
        });
    }

    setVisibleMode();
});