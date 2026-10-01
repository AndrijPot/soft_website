const translations = {

    uk: {
        home: "ГОЛОВНА",
        info: "ІНФОРМАЦІЯ",
        download: "ЗАВАНТАЖИТИ ЛОАДЕР",
        contacts: "КОНТАКТИ",
        product: "ПРОДУКТ",
        beta: "БЕТА 1.2 — ВЖЕ ДОСТУПНА",
        soft_title: "ПРИВАТНИЙ СОФТ",
        soft_cs2: "ДЛЯ CS2",
        soft_level: "НОВОГО ПОКОЛІННЯ",
        soft_subtitle: "Софт CS2 призначена для тих, хто прагне максимального контролю, швидкості та можливостей налаштування. Сучасний інтерфейс, широкий спектр ігрових функцій, гнучкі налаштування та стабільна робота без зайвих елементів",
        explore_features_btn: "ОЗНАЙОМИТИСЯ З ФУНКЦІЯМИ",
        download_btn: "ЗАВАНТАЖИТИ ПРОГРАМУ",
        undetected_stat_title: "НЕ ВИЯВЛЕНО",
        undetected_stat_subtitle: "Повністю невиявлений",
        features_stat_title: "ОСОБЛИВОСТІ",
        features_stat_subtitle: "Модулів та налаштувань",
        footer_description: "Софт, розроблене для тих, хто прагне більшого контролю, можливостей налаштування та продуктивності.",
        footer_status_text: "УСІ СИСТЕМИ ПРАЦЮЮТЬ"
    },  

    en: {
        home: "HOME",
        info: "INFO",
        download: "DOWNLOAD LOADER",
        contacts: "CONTACTS",
        product: "PRODUCT",
        beta: "BETA 1.2 - NOW AVAILABLE",
        soft_title: "PRIVATE SOFT",
        soft_cs2: "FOR CS2",
        soft_level: "NEXT-GEN LEVEL",
        soft_subtitle: "Private CS2 software is for those who want maximum control, speed, and customization. A modern interface, a wide range of in-game features, flexible settings, and stable performance without any unnecessary clutter",
        explore_features_btn: "EXPLORE FEATURES",
        download_btn: "DOWNLOAD LOADER",
        undetected_stat_title: "UNDETECTED",
        undetected_stat_subtitle: "Full undetected",
        features_stat_title: "FEATURES",
        features_stat_subtitle: "Modules and settings",
        footer_description: " Private software built for those who want more control, customization and performance.",
        footer_status_text: "ALL SYSTEMS OPERATIONAL"
    }

};


const languageSwitcher = document.getElementById("languageSwitcher");

let currentLanguage = localStorage.getItem("language") || "uk";


function setLanguage(language) {

    currentLanguage = language;

    // Змінюємо текст навігації
    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        element.textContent = translations[language][key];

    });


    // Змінюємо lang="..."
    document.documentElement.lang = language;


    // Оновлюємо активну мову
    const languages = document.querySelectorAll(".language");

    languages.forEach(languageElement => {
        languageElement.classList.remove("active");
    });


    if (language === "uk") {
        languages[0].classList.add("active");
    } else {
        languages[1].classList.add("active");
    }


    // Запам'ятовуємо вибір
    localStorage.setItem("language", language);
}


languageSwitcher.addEventListener("click", () => {

    if (currentLanguage === "uk") {
        setLanguage("en");
    } else {
        setLanguage("uk");
    }

});


setLanguage(currentLanguage);


const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav_container a").forEach(link => {

    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }

});