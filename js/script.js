$(document).ready(function () {
    $(".nav__burger").click(function () {
        $(this).toggleClass("active");
        $(".burger").toggleClass("active");
    });
    

    // Параллакс верхнего блока

    const parallax = $(".parallax");
    const buildings = $(".parallax__buildings");
    const cloud1 = $(".parallax__cloud1");
    const cloud2 = $(".parallax__cloud2");
    const cloud3 = $(".parallax__cloud3");
    const cloud4 = $(".parallax__cloud4");
    const cloud5 = $(".parallax__cloud5");
    const cloud6 = $(".parallax__cloud6");

    const speed = 0.05;

    let pos = 0,
        coordPercent = 0;

    function setMouseParallaxStyle() {
        const dist = coordPercent - pos;

        pos = pos + dist * speed;

        buildings.css("transform", "translateX(" + pos / -15 + "%)");
        cloud1.css("transform", "translateX(" + pos / -4 + "%)");
        cloud2.css("transform", "translateX(" + pos / -1.1 + "%)");
        cloud3.css("transform", "translateX(" + pos / -4.2 + "%)");
        cloud4.css("transform", "translateX(" + pos / -2 + "%)");
        cloud5.css("transform", "translateX(" + pos / 2.5 + "%)");
        cloud6.css("transform", "translateX(" + pos * 0.8 + "%)");
        requestAnimationFrame(setMouseParallaxStyle);
    }

    setMouseParallaxStyle();

    parallax.mousemove(function (event) {
        const parallaxWidth = parallax.width();
        const coord = event.pageX - parallaxWidth / 2;
        coordPercent = (coord / parallaxWidth) * 100;
    });

    // Параллакс нижнего блока

    

    const parallaxBottom = $(".parallaxBottom");

    const buildingsBottom = $(".parallaxBottom__parallax-buildings");

    const cloudBottom1 = $(".parallaxBottom__parallax-cloud1");

    const cloudBottom2 = $(".parallaxBottom__parallax-cloud2");

    const cloudBottom3 = $(".parallaxBottom__parallax-cloud3");

    const cloudBottom4 = $(".parallaxBottom__parallax-cloud4");

    const cloudBottom5 = $(".parallaxBottom__parallax-cloud5");

    const cloudBottom6 = $(".parallaxBottom__parallax-cloud6");

    

    function setMouseparallaxBottomStyle() {

        const dist = coordPercent - pos;

    

        pos = pos + dist * speed;

    

        buildingsBottom.css("transform", "translateX(" + pos / -15 + "%)");

        cloudBottom1.css("transform", "translateX(" + pos / -4 + "%)");

        cloudBottom2.css("transform", "translateX(" + pos / -1.1 + "%)");

        cloudBottom3.css("transform", "translateX(" + pos / -4.2 + "%)");

        cloudBottom4.css("transform", "translateX(" + pos / -2 + "%)");

        cloudBottom5.css("transform", "translateX(" + pos / 2.5 + "%)");

        cloudBottom6.css("transform", "translateX(" + pos * 0.8 + "%)");

        requestAnimationFrame(setMouseparallaxBottomStyle);

    }

    

    setMouseparallaxBottomStyle();

    

    parallaxBottom.mousemove(function (event) {

        const parallaxBottomWidth = parallaxBottom.width();

        const coord = event.pageX - parallaxBottomWidth / 2;

        coordPercent = (coord / parallaxBottomWidth) * 100;

    });

    

    // Анимация при наведении на карточку приемущества

    $(".advantages__card-content").hover(function () {
        $(this).closest(".advantages__card").toggleClass("hover");
    });

    // Просчёт высот необходимых элементов

    let parallaxBottomHeight = $(".parallaxBottom").outerHeight();
    let headerHeight = $("header").outerHeight();
    let mainMarginTop = headerHeight + parallaxBottomHeight;

    // Перестановка блоков параллакса по уровню слоёв

    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(".hideTopParallax").offset().top) {
            $(".parallax").addClass("layerDown");
            $(".parallaxBottom").addClass("layerUp");
        } else {
            $(".parallax").removeClass("layerDown");
            $(".parallaxBottom").removeClass("layerUp");
        }
    });

    $(".prices__carousel.owl-carousel").owlCarousel({
        items: 2, // Количество элементов в карусели
        loop: true, // Включение бесконечного цикла
        margin: 20, // Отступ между элементами
        autoplay: true, // Автоматическая прокрутка
        autoplayTimeout: 4000, // Время между автопрокруткой в миллисекундах
        dots: true, // Включение точек для переключения слайдов
        responsive: {
            0: {
                items: 1,
            },
            640: {
                items: 2,
            },
        },
    });

    // Карусель на главной странице

    $(".comments__carousel.owl-carousel").owlCarousel({
        items: 1, // Количество элементов в карусели
        loop: true, // Включение бесконечного цикла
        margin: 20, // Отступ между элементами
        autoplay: true, // Автоматическая прокрутка
        autoplayTimeout: 4000, // Время между автопрокруткой в миллисекундах
        dots: true, // Включение точек для переключения слайдов
    });

    // Наложение хедера поверх основного блока

    $(".posts main").css("margin-top", "-" + headerHeight + "px");
    $(".posts main").css("padding-top", headerHeight + "px");
    $(".reviews main").css("margin-top", "-" + headerHeight + "px");
    $(".reviews main").css("padding-top", headerHeight + "px");
    $(".questions main").css("margin-top", "-" + headerHeight + "px");
    $(".questions main").css("padding-top", headerHeight + "px");
    $(".about main").css("margin-top", "-" + headerHeight + "px");
    $(".about main").css("padding-top", headerHeight + "px");

    // Просчёт оценки отзыва из дата атрибута

    

    $(".grade").each(function (index) {

        let grade = $(this).data("grade");

    

        switch (grade) {

            case 0:

                break;

            case 1:

                $(this).find(".stars").addClass("oneStar");

                break;

            case 2:

                $(this).find(".stars").addClass("twoStar");

                break;

            case 3:

                $(this).find(".stars").addClass("threeStar");

                break;

            case 4:

                $(this).find(".stars").addClass("fourStar");

                break;

            case 5:

                $(this).find(".stars").addClass("fiveStar");

                break;

            default:

                console.log(grade);

        }

    });

    

    // Функциональность аккордеона

    $(".accordeon__head").click(function () {
        let accordeon = $(this).parent(".accordeon");
        accordeon.toggleClass("active");
        accordeon.find(".accordeon__body").slideToggle(300);
    });

    // Обработка счётчика
    $(".calc__adult .calc__minus").click(function () {
        let value = parseInt($('[name="adult"]').val());
        if (value > 0) {
            $('[name="adult"]').val(value - 1);
        }
    });
    $(".calc__adult .calc__plus").click(function () {
        let value = parseInt($('[name="adult"]').val());
        if (value < 100) {
            $('[name="adult"]').val(value + 1);
        }
    });
    $(".calc__kids .calc__minus").click(function () {
        let value = parseInt($('[name="kids"]').val());
        if (value > 0) {
            $('[name="kids"]').val(value - 1);
        }
    });
    $(".calc__kids .calc__plus").click(function () {
        let value = parseInt($('[name="kids"]').val());
        if (value < 100) {
            $('[name="kids"]').val(value + 1);
        }
    });

    $("#homeCalcForm").on("submit", function (e) {
        e.preventDefault();
        localStorage.setItem("adult", $('[name="adult"]').val());
        localStorage.setItem("kids", $('[name="kids"]').val());
        localStorage.setItem("from", $('[name="from"]').val());
        localStorage.setItem("to", $('[name="to"]').val());
        localStorage.setItem("return", $('[name="return"]').prop("checked"));
        localStorage.setItem("date", $('[name="date"]').val());
        localStorage.setItem("time", $('[name="time"]').val());
        localStorage.setItem("redirect", true);

        window.location.href = "calculation.html";
    });

    const cityFromElement = $(".calculation__path #from");
    const cityToElement = $(".calculation__path #to");

    if (localStorage.getItem("redirect")) {
        const isReturnTransfer = localStorage.getItem("return") === "true";
        console.log(isReturnTransfer);
        // Заполняем форму данными из localStorage
        $('#finalCalcForm [name="adult"]').val(localStorage.getItem("adult"));
        $('#finalCalcForm [name="kids"]').val(localStorage.getItem("kids"));
        $('#finalCalcForm [name="from"]').val(localStorage.getItem("from"));
        $('#finalCalcForm [name="to"]').val(localStorage.getItem("to"));
        $('#finalCalcForm [name="return"]').prop("checked", isReturnTransfer);
        $('#finalCalcForm [name="date"]').val(localStorage.getItem("date"));
        $('#finalCalcForm [name="time"]').val(localStorage.getItem("time"));

        cityFromElement.text(localStorage.getItem("from"));
        cityToElement.text(localStorage.getItem("to"));
        if (isReturnTransfer) {
            $("#arrowReturnTrue").css("display", "block");
        } else {
            $("#arrowReturnFalse").css("display", "block");
        }

        localStorage.clear();
    } else {
        $(".calculation__path").css("display", "none");
    }
});
