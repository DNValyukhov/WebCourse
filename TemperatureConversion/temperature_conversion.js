"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const celsiusTemperatureLabel = document.getElementById("celsius-temperature-label");
    const celsiusTemperatureField = document.getElementById("celsius-temperature-field");

    const kelvinBlock = document.getElementById("kelvin-block");
    const kelvinTemperatureField = document.getElementById("kelvin-temperature-field");

    const fahrenheitBlock = document.getElementById("fahrenheit-block");
    const fahrenheitTemperatureField = document.getElementById("fahrenheit-temperature-field");

    const warningInformation = document.getElementById("warning-information");
    const initialWarningString = `Введите цифрами температуру в градусах Цельсия 
    для перевода в градусы Кельвина и Фаренгейта`;
    warningInformation.textContent = initialWarningString;

    const convertButton = document.getElementById("convert-button");
    const resetButton = document.getElementById("reset-button");

    kelvinBlock.classList.add("invisible");
    fahrenheitBlock.classList.add("invisible");

    function setVisibleMode() {
        const convert = function () {
            const celsiusTemperature = Number.parseFloat(celsiusTemperatureField.value.trim());

            celsiusTemperatureField.classList.remove("red-border");
            warningInformation.classList.remove("invisible", "large-font");

            kelvinBlock.classList.add("invisible");
            fahrenheitBlock.classList.add("invisible");

            if (isNaN(celsiusTemperature)) {
                celsiusTemperatureField.classList.add("red-border");
                warningInformation.classList.add("large-font");
                warningInformation.textContent = "(требуется ввести число)";
                return;
            }

            if (celsiusTemperature < -273.15) {
                celsiusTemperatureField.classList.add("red-border");
                warningInformation.textContent = "Введённое число должно быть не меньше -273.15";
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
        };

        convertButton.addEventListener("click", convert);

        celsiusTemperatureField.addEventListener("keypress", function (event) {
            if (event.key === `Enter`) {
                convert();
            }
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