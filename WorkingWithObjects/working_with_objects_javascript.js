(function () {
    "use strict";

    const countries = [
        {
            name: "Россия",
            cities: [
                {name: "Москва", population: 13010112},
                {name: "Санкт-Петербург", population: 5601911},
                {name: "Новосибирск", population: 1633595},
                {name: "Екатеринбург", population: 1588665},
                {name: "Казань", population: 1308660},
                {name: "Нижний Новгород", population: 1249861},
                {name: "Челябинск", population: 1189525},
                {name: "Красноярск", population: 1188533},
                {name: "Самара", population: 1173393},
                {name: "Уфа", population: 1144809},
            ]
        },
        {
            name: "Беларусь",
            cities: [
                {name: "Минск", population: 1992900},
                {name: "Гомель", population: 501100},
                {name: "Гродно", population: 361100},
                {name: "Витебск", population: 358400},
                {name: "Могилёв", population: 353100},
            ]
        },
        {
            name: "Германия",
            cities: [
                {name: "Берлин", population: 3677472},
                {name: "Гамбург", population: 1853935},
                {name: "Мюнхен", population: 1487708},
                {name: "Кёльн", population: 1073096},
                {name: "Франкфурт-на-Майне", population: 759224},
                {name: "Штутгарт", population: 626275},
                {name: "Дюссельдорф", population: 619477},
            ]
        },
        {
            name: "Бельгия",
            cities: [
                {name: "Антверпен", population: 472526},
                {name: "Гент", population: 233120},
                {name: "Шарлеруа", population: 201300},
                {name: "Льеж", population: 186805},
            ]
        },
        {
            name: "Франция",
            cities: [
                {name: "Париж", population: 2249975},
                {name: "Марсель", population: 850636},
                {name: "Лион", population: 491268},
                {name: "Тулуза", population: 447360},
                {name: "Ницца", population: 344068},
                {name: "Нант", population: 287845},
                {name: "Страсбург", population: 272222},
                {name: "Монпелье", population: 246538}, // «Висячая запятая» упрощает добавление, удаление и перемещение свойств, так как все строки объекта становятся одинаковыми.
            ]
        }
    ];

    // Нахождение страны с максимальным количеством городов
    function getCountriesWithMaxCitiesQuantity(countries) {
        if (countries === null) {
            throw new Error("null вместо массива передан в качестве аргумента в метод нахождения страны с максимальным количеством городов.");
        }

        if (!Array.isArray(countries)) {
            throw new Error("В метод нахождения страны с максимальным количеством городов вместо массива передан аргумент типа: " + typeof (countries));
        }

        countries.sort((country1, country2) => country2.cities.length - country1.cities.length);

        const maxCitiesQuantity = countries[0].cities.length;

        return countries.filter(country => country.cities.length === maxCitiesQuantity);
    }

    console.log("Страны с максимальным количеством городов: ");

    for (const country of getCountriesWithMaxCitiesQuantity(countries)) {
        console.log(country.name + " (кол-во городов: " + country.cities.length + ")");
    }

    console.log("");

    // Получение объекта с информацией по всем странам такого вида: ключ – название страны, значение – суммарная численность по стране
    function getCountryNamesWithPopulations(countries) {
        if (countries === null) {
            throw new Error("null вместо массива передан в качестве аргумента в метод создания объекта с названиями стран и численностью населения в них.");
        }

        if (!Array.isArray(countries)) {
            throw new Error("В метод создания объекта с названиями стран и численностью населения в них вместо массива передан аргумент типа: " + typeof (countries));
        }

        const countryNamesWithPopulations = {};

        for (const country of countries) {
            countryNamesWithPopulations[country.name] = country.cities.reduce((accumulator, city) => accumulator + city.population, 0);
        }

        return countryNamesWithPopulations;
    }

    const countryNamesWithPopulations = getCountryNamesWithPopulations(countries);

    console.log("Содержимое полученного объекта с информацией по всем странам вида: ключ – название страны, значение – численность населения по стране:");

    for (const countryName in countryNamesWithPopulations) {
        console.log("%s   %d", countryName, countryNamesWithPopulations[countryName]);
    }
})();