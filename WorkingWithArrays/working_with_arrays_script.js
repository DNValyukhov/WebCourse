(function () {
    "use strict";

    // Создание исходного массива чисел
    const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    // Вспомогательный метод проверки массивов переданных в функцию
    function checkIsArray(array) {
        if (!Array.isArray(array)) {
            throw new Error("В метод в качестве аргумента передан не массив.");
        }
    }

    checkIsArray(numbersArray);

    console.log("Исходный массив:\n" + numbersArray.join(", "));

    // Сортировка массива по убыванию
    function sortArrayInDescendingOrder(array) {
        checkIsArray(array);

        array.sort((n1, n2) => n2 - n1);
    }

    sortArrayInDescendingOrder(numbersArray);

    console.log("Массив, отсортированный по убыванию:\n" + numbersArray.join(", "));

    // Возврат массива в исходное состояние (сортировка массива по возрастанию)
    function sortArrayInAscendingOrder(array) {
        checkIsArray(array);

        array.sort((n1, n2) => n1 - n2);
    }

    sortArrayInAscendingOrder(numbersArray);

    // Подмассив из первых elementsQuantity элементов исходного массива
    function getFirstElementsSubarray(array, elementsQuantity) {
        checkIsArray(array);

        return array.slice(0, elementsQuantity);
    }

    const firstElementsQuantity = 5;

    console.log(`Подмассив из первых \"${firstElementsQuantity}\" элементов исходного массива:\n` + getFirstElementsSubarray(numbersArray, firstElementsQuantity).join(", "));

    // Подмассив из последних 5 элементов исходного массива
    function getLastElementsSubarray(array, elementsQuantity) {
        checkIsArray(array);

        return array.slice(-elementsQuantity);
    }

    const lastElementsQuantity = 5;

    console.log(`Подмассив из последних \"${lastElementsQuantity}\" элементов исходного массива:\n` + getLastElementsSubarray(numbersArray, lastElementsQuantity).join(", "));

    // Сумма элементов массива, которые являются чётными числами
    function getEvenNumbersSum(array) {
        return array.filter(e => e % 2 === 0).reduce((sum, e) => sum + e, 0);
    }

    console.log("Сумма чётных элементов массива: " + getEvenNumbersSum(numbersArray));

    // Создание массива чисел от 1 до 100
    // Метод создания массива с числовыми значениями от заданного начального до заданного последнего, расположенными в порядке возрастания
    function createNumbersArrayFromStartNumberToEndNumber(startNumber, endNumber) {
        if (arguments.length < 2) {
            throw new Error("Количество аргументов, переданных в метод создания массива чисел: " + arguments.length + ", а должно быть не меньше двух.");
        }

        if (typeof arguments[0] !== "number") {
            throw new Error("Первый аргумент, переданный в метод создания массива чисел, не является числом, и имеет значение: " + arguments[0]);
        }

        if (typeof arguments[1] !== "number") {
            throw new Error("Второй аргумент, переданный в метод создания массива чисел, не является числом, и имеет значение: " + arguments[1]);
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
    function getEvenNumbersSquares(array) {
        checkIsArray(array);

        return array.filter(e => e % 2 === 0).map(e => e * e);
    }

    console.log("Массив квадратов чётных чисел в диапазоне от 1 до 100:\n" + getEvenNumbersSquares(array).join(", "));
})();