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
                {name: "Уфа", population: 1144809}
            ]
        },
        {
            name: "Беларусь",
            cities: [
                {name: "Минск", population: 1992900},
                {name: "Гомель", population: 501100},
                {name: "Гродно", population: 361100},
                {name: "Витебск", population: 358400},
                {name: "Могилёв", population: 353100}
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
                {name: "Дюссельдорф", population: 619477}
            ]
        },
        {
            name: "Бельгия",
            cities: [
                {name: "Антверпен", population: 472526},
                {name: "Гент", population: 233120},
                {name: "Шарлеруа", population: 201300},
                {name: "Льеж", population: 186805}
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
                {name: "Монпелье", population: 246538}
            ]
        }
    ];

    // Нахождение страны с максимальным количеством городов
    function getCountriesWithMaxCitiesQuantity(countries) {
        if (!Array.isArray(countries)) {
            throw new Error("В метод нахождения страны с максимальным количеством городов вместо массива передан аргумент типа: " + typeof countries);
        }

        let maxCountryCitiesQuantity = countries.reduce((maxCountryCitiesQuantity, country) => (maxCountryCitiesQuantity >= country.cities.length) ? maxCountryCitiesQuantity : country.cities.length, 0);

        return countries.filter(country => country.cities.length === maxCountryCitiesQuantity);
    }

    const countriesWithMaxCitiesQuantity = getCountriesWithMaxCitiesQuantity(countries);

    if (Object.keys(countriesWithMaxCitiesQuantity).length === 0) {
        console.log("Так как в соответствующий метод передан пустой массив стран, невозможно составить список стран с максимальным количеством городов!");
    } else {
        console.log("Страны с максимальным количеством городов:");

        for (const country of getCountriesWithMaxCitiesQuantity(countries)) {
            console.log(country.name + " (кол-во городов: " + country.cities.length + ")");
        }
    }

    console.log("");

    // Получение объекта с информацией по всем странам такого вида: ключ – название страны, значение – суммарная численность по стране
    function getCountriesNamesWithPopulations(countries) {
        if (!Array.isArray(countries)) {
            throw new Error("В метод создания объекта с названиями стран и численностью населения в них вместо массива передан аргумент типа: " + typeof countries);
        }

        const countriesNamesWithPopulations = {};

        for (const country of countries) {
            countriesNamesWithPopulations[country.name] = country.cities.reduce((population, city) => population + city.population, 0);
        }

        return countriesNamesWithPopulations;
    }

    const countriesNamesWithPopulations = getCountriesNamesWithPopulations(countries);

    console.log("Содержимое полученного объекта с информацией по всем странам вида: ключ – название страны, значение – численность населения по стране:");

    if (Object.keys(countriesNamesWithPopulations).length === 0) {
        console.log("Объект пуст, т.к. пуст массив стран!");
    } else {
        for (const countryName in countriesNamesWithPopulations) {
            console.log("%s   %d", countryName, countriesNamesWithPopulations[countryName]);
        }
    }
})();