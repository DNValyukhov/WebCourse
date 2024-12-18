(function () {
    "use strict";

    // Создание исходного массива чисел
    const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    // Вспомогательный метод проверки массивов переданных в функцию
    function checkIsArray(array) {
        if (!Array.isArray(array)) {
            throw new Error("В метод в качестве аргумента передан не массив.");
        }

        return true;
    }

    checkIsArray(numbersArray);

    console.log("Исходный массив: \n" + numbersArray.join(", "));

    // Сортировка массива по убыванию
    function sortArrayInDescendingOrder(array) {
        if (!checkIsArray(array)) {
            return false;
        }

        array.sort((n1, n2) => n2 - n1);
        return true;
    }

    if (sortArrayInDescendingOrder(numbersArray)) {
        console.log("Массив, отсортированный по убыванию: \n" + numbersArray.join(", "));
    }

    // Возврат массива в исходное состояние (сортировка массива по возрастанию)
    function sortArrayInAscendingOrder(array) {
        checkIsArray(array);

        array.sort((n1, n2) => n1 - n2);
    }

    sortArrayInAscendingOrder(numbersArray);

    // Подмассив из первых firstElementsNumber элементов исходного массива
    function createSubarrayFromFirstFiveElements(array, firstElementsNumber) {
        checkIsArray(array);

        if (array.length < firstElementsNumber) {
            firstElementsNumber = array.length;
        }

        return array.slice(0, firstElementsNumber);
    }

    console.log("Подмассив из первых 5 элементов исходного массива: \n" + createSubarrayFromFirstFiveElements(numbersArray, 5).join(", "));

    // Подмассив из последних 5 элементов исходного массива
    function createSubarrayFromLastFiveElements(array, lastElementsNumber) {
        checkIsArray(array);

        if (array.length < lastElementsNumber) {
            lastElementsNumber = array.length;
        }

        return array.slice(array.length - lastElementsNumber);
    }

    console.log("Подмассив из последних 5 элементов исходного массива: \n" + createSubarrayFromLastFiveElements(numbersArray, 5).join(", "));

    // Создание массива чисел от 1 до 100
    // Метод создания массива с числовыми значениями от заданного начального до заданного последнего, расположенными в порядке возрастания
    function createNumbersArrayFromStartNumberToEndNumber(startNumber, endNumber) {
        if (arguments.length < 2) {
            throw new Error("Количество аргументов, переданных в метод создания массива чисел, меньше двух.");
        }

        if (typeof startNumber !== "number" || typeof endNumber !== "number") {
            throw new Error("Аргументы, переданные в метод создания массива чисел, не являются числами.");
        }

        if (startNumber > endNumber) {
            throw new Error("В метод создания массива чисел передано начальное значение \"" + startNumber + "\", которое " +
                "больше конечного \"" + endNumber + "\".");
        }

        const array = [];

        for (let i = startNumber; i <= endNumber; ++i) {
            array.push(i);
        }

        return array;
    }

    const array = createNumbersArrayFromStartNumberToEndNumber(1, 100);

    // Создание массива квадратов четных чисел из переданного массива
    function createSquaresArrayFromEvenNumbersFromArray(array) {
        checkIsArray(array);

        return array.filter(e => e % 2 === 0).map(e => e * e);
    }

    console.log("Массив квадратов чётных чисел в диапазоне от 1 до 100: \n" + createSquaresArrayFromEvenNumbersFromArray(array).join(", "));
})();