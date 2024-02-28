$(document).ready(function () {
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

    // $(".main-head").css("margin-top", 530 + headerHeight + "px");

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
});
