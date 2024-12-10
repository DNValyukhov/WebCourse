(function () {
    "use strict"

// Создание исходного массива чисел
    let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    console.log(`Исходный массив:
` + numbersArray.join(", "));

// Вспомогательный метод проверки массивов переданных в функцию
    function checkArray(array) {
        if (!Array.isArray(array)) {
            console.log("Ошибка. В метод в качестве аргумента передан не массив.");
            return false;
        }

        return true;
    }

    checkArray(numbersArray);

// Сортировка массива по убыванию
    function sortArrayInDescendingOrder(array) {
        if (!checkArray(array)) {
            return false;
        }

        array.sort((n1, n2) => n2 - n1);
        return true;
    }

    if (sortArrayInDescendingOrder(numbersArray)) {
        console.log(`Массив, отсортированный по убыванию:
` + numbersArray.join(", "));
    }

// Возврат массива в исходное состояние (сортировка массива по возрастанию)
    function sortArrayInAscendingOrder(array) {
        if (!checkArray(array)) {
            return;
        }

        array.sort((n1, n2) => n1 - n2);
    }

    sortArrayInAscendingOrder(numbersArray);

// Подмассив из первых 5 элементов исходного массива
    function createSubarrayFromFirstFiveElements(array) {
        if (!checkArray(array)) {
            return;
        }

        if (array.length < 5) {
            console.log("Невозможно создать подмассив из первых 5 элементов исходного массива, т.к. количество элементов " +
                "в исходном массиве \"" + array.length + "\".");
            return;
        }

        return array.slice(0, 5);
    }

    console.log(`Подмассив из первых 5 элементов исходного массива:
` + createSubarrayFromFirstFiveElements(numbersArray).join(", "));

// Подмассив из последних 5 элементов исходного массива
    function createSubarrayFromLastFiveElements(array) {
        if (!checkArray(array)) {
            return;
        }

        if (array.length < 5) {
            console.log("Ошибка. Попытка создать подмассив из последних 5 элементов исходного массива, т.к. количество элементов в исходном массиве \"" + array.length + "\".");
            return;
        }

        return array.slice(array.length - 5, array.length);
    }

    console.log(`Подмассив из последних 5 элементов исходного массива:
` + createSubarrayFromLastFiveElements(numbersArray).join(", "));

// Создание массива чисел от 1 до 100
    // Метод создания массива с числовыми значениями от заданного начального до заданного последнего, расположенными в порядке возрастания
    function createNumbersArrayFromStartValueToEndValue(startValue, endValue) {
        if (arguments.length < 2) {
            console.log("Ошибка. Количество аргументов, переданных в метод создания массива чисел, меньше двух.");
            return;
        }

        if (typeof (startValue) !== "number" || typeof (endValue) !== "number") {
            console.log("Ошибка. Аргументы, переданные в метод создания массива чисел, не являются числами.");
            return;
        }

        if (startValue > endValue) {
            console.log("Ошибка. В метод создания массива чисел передано начальное значение \"" + startValue + "\", которое " +
                "больше конечного \"" + endValue + "\".");
            return;
        }

        const array = [];

        for (let i = startValue; i <= endValue; ++i) {
            array.push(i);
        }

        return array;
    }

    const array = createNumbersArrayFromStartValueToEndValue(1, 100);

// Создание массива квадратов четных чисел из переданного массива
    function createArrayOfSquaresOfEvenNumbersFromArray(array) {
        if (!checkArray(array)) {
            return;
        }

        return array.filter(e => e % 2 === 0).map((e) => e * e);
    }

    console.log(`Массив квадратов чётных чисел в диапазоне от 1 до 100:
` + createArrayOfSquaresOfEvenNumbersFromArray(array).join(", "));
})();