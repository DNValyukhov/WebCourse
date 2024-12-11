(function () {
    "use strict"

    const russia = {
        countryName: "Россия",
        cities: [
            {"Москва": 13010112},
            {"Санкт-Петербург": 5601911},
            {"Новосибирск": 1633595},
            {"Екатеринбург": 1588665},
            {"Казань": 1308660},
            {"Нижний Новгород": 1249861},
            {"Челябинск": 1189525},
            {"Красноярск": 1188533},
            {"Самара": 1173393},
            {"Уфа": 1144809}
        ]
    };

    const belarus = {
        countryName: "Беларусь",
        cities: [
            {"Минск": 1992900},
            {"Гомель": 501100},
            {"Гродно": 361100},
            {"Витебск": 358400},
            {"Могилёв": 353100}
        ]
    };

    const germany = {
        countryName: "Германия",
        cities: [
            {"Берлин": 3677472},
            {"Гамбург": 1853935},
            {"Мюнхен": 1487708},
            {"Кёльн": 1073096},
            {"Франкфурт-на-Майне": 759224},
            {"Штутгарт": 626275},
            {"Дюссельдорф": 619477}
        ]
    };

    const belgium = {
        countryName: "Бельгия",
        cities: [
            {"Антверпен": 472526},
            {"Гент": 233120},
            {"Шарлеруа": 201300},
            {"Льеж": 186805}
        ]
    };

    const france = {
        countryName: "Франция",
        cities: [
            {"Париж": 2249975},
            {"Марсель": 850636},
            {"Лион": 491268},
            {"Тулуза": 447360},
            {"Ницца": 344068},
            {"Нант": 287845},
            {"Страсбург": 272222},
            {"Монпелье": 246538}
        ]
    };

// Создание массива объектов-стран
    const countries = [russia, belarus, germany, belgium, france];

// Нахождение страны с максимальным количеством городов
    function findCountryWithMaxNumberOfCities(countries) {
        if (typeof countries !== "object" || countries == null) {
            console.error("Попытка передать некорректный аргумент в функцию нахождения страны с максимальным количеством городов.")
            return;
        }

        countries.sort((e1, e2) => e2.cities.length - e1.cities.length);

        return countries[0];
    }

    console.log("Страна с максимальным количеством городов: " + findCountryWithMaxNumberOfCities(countries).countryName + " (кол-во городов: "
        + findCountryWithMaxNumberOfCities(countries).cities.length + `).
        
        `);

// Получение объекта с информацией по всем странам такого вида: ключ – название страны, значение – суммарная численность по стране
    function createObjectConsistingOfCountryNamesAndPopulationSizes(countries) {
        if (typeof countries !== "object" || countries == null) {
            console.error("Попытка передать некорректный аргумент в функцию создания объекта с названиями стран и численностью населения в них.")
            return;
        }

        const objectConsistingOfCountryNamesAndPopulationSizes = [];

        countries.forEach(country => objectConsistingOfCountryNamesAndPopulationSizes[Object.values(country)[0]] = country.cities.reduce((city1, city2) => Number(Object.values(city1)) + Number(Object.values(city2)), 0));

        return objectConsistingOfCountryNamesAndPopulationSizes;
    }

    const object = createObjectConsistingOfCountryNamesAndPopulationSizes(countries);

    console.log("Содержимое полученного объекта с информацией по всем странам вида: ключ – название страны, значение – численность населения по стране:");

    for (const country in object) {
        console.log("%s   %d", country, object[country]);
    }
})();