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

    const buttonsBlock = document.getElementById("buttons-block");
    const resetButton = document.getElementById("reset-button");

    function setVisibleMode() {
        warningInformation.hidden = true;
        kelvinBlock.hidden = true;
        fahrenheitBlock.hidden = true;

        celsiusTemperatureField.classList.add("celsius-temperature-field-margin-top-initial");

        buttonsBlock.classList.add("buttons-block-margin-top-initial");

        temperatureForm.addEventListener("submit", function (event) {
            event.preventDefault();

            celsiusTemperatureField.classList.remove("red-border");
            celsiusTemperatureField.classList.add("celsius-temperature-field-margin-bottom-correct-value");
            warningInformation.classList.remove("large-font");
            warningInformation.hidden = false;
            buttonsBlock.classList.remove("buttons-block-margin-top-initial", "buttons-block-margin-top-temperature-less-minimum");

            if (isNaN(Number(celsiusTemperatureField.value.trim())) || celsiusTemperatureField.value.trim() === "") {
                celsiusTemperatureField.classList.add("red-border", "celsius-temperature-field-margin-bottom-nan");
                celsiusTemperatureField.classList.remove("celsius-temperature-field-margin-top-initial", "celsius-temperature-field-margin-bottom-correct-value");
                warningInformation.classList.add("large-font");
                warningInformation.textContent = "(требуется ввести число)";
                kelvinBlock.hidden = true;
                fahrenheitBlock.hidden = true;
                buttonsBlock.classList.remove("buttons-block-margin-top-initial", "buttons-block-margin-top-temperature-less-minimum");
                return;
            }

            const celsiusTemperature = Number.parseFloat(celsiusTemperatureField.value.trim());

            if (celsiusTemperature < -273.15) {
                celsiusTemperatureField.classList.add("red-border", "celsius-temperature-field-margin-bottom-nan");
                celsiusTemperatureField.classList.remove("celsius-temperature-field-margin-top-initial", "celsius-temperature-field-margin-bottom-correct-value");
                warningInformation.textContent = "Введённое число должно быть не меньше -273.15";
                kelvinBlock.hidden = true;
                fahrenheitBlock.hidden = true;
                buttonsBlock.classList.remove("buttons-block-margin-top-initial");
                buttonsBlock.classList.add("buttons-block-margin-top-temperature-less-minimum");
                return;
            }

            celsiusTemperatureLabel.textContent = "Температура в градусах Цельсия:";
            celsiusTemperatureField.value = (Math.round(celsiusTemperature * 100) / 100).toFixed(2);

            warningInformation.hidden = true;

            const kelvinTemperature = celsiusTemperature + 273.15;
            const fahrenheitTemperature = celsiusTemperature * 1.8 + 32;

            kelvinTemperatureField.value = (Math.round(kelvinTemperature * 100) / 100).toFixed(2);
            kelvinBlock.hidden = false;

            fahrenheitTemperatureField.value = (Math.round(fahrenheitTemperature * 100) / 100).toFixed(2);
            fahrenheitBlock.hidden = false;
        });

        celsiusTemperatureField.addEventListener("input", function () {
            celsiusTemperatureField.classList.remove("red-border");
        });

        resetButton.addEventListener("click", function () {
            celsiusTemperatureLabel.textContent = "Введите температуру в градусах Цельсия";
            celsiusTemperatureField.value = "";
            celsiusTemperatureField.classList.remove("red-border");

            warningInformation.hidden = true;
            warningInformation.classList.remove("large-font");

            setVisibleMode();
        });
    }

    setVisibleMode();
});