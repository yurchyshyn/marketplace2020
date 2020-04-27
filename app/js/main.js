$(function () {
    $(".featured__rating-stars").rateYo({
        rating: 4.5,
        starWidth: "15px",
        readOnly: true
    });

    $(".main__rate-stars").rateYo({
        rating: 4.5,
        starWidth: "17px",
        readOnly: true
    });

    $('.featured__slider').slick({
        prevArrow: "<img src='../images/icons/lnr-chevron-left.svg' class='prev' alt='1'>",
        nextArrow: "<img src='../images/icons/lnr-chevron-right.svg' class='next' alt='2'>",
    });

    $('.followers__slider').slick({
        prevArrow: "<img src='../images/icons/lnr-chevron-left.svg' class='prev' alt='1'>",
        nextArrow: "<img src='../images/icons/lnr-chevron-right.svg' class='next' alt='2'>",
        slidesToShow: 3,
    });

    $('.feedback__inner').slick({
        prevArrow: "<img src='../images/icons/arrow-left-feedback.svg' class='feedback-prev' alt='1'>",
        nextArrow: "<img src='../images/icons/arrow-right-feedback.svg' class='feedback-next' alt='2'>",
        slidesToShow: 2,
    });

    $('.filter__title').on('click', function () {
        $('.filter__box').toggleClass('filter__box-active')
    })

    $('.header__bottom-btn').on('click', function () {
        $('.menu__list').slideToggle()
    })

    $('.title-categories').on('click', function() {
        $('.list-categories').slideToggle()
    })

    $('.title-filter').on('click', function () {
        $('.list-filter').slideToggle()
    })

    $('.title-range').on('click', function () {
        $('.range').slideToggle()
    })

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 330,
        from: 60,
        to: 250,
        grid: false,
        prefix: "$"
    });

    $('.icon-th-large').on('click', function () {
        $('.icon-th-large').addClass('page-products__btn--active'),
        $('.icon-th-list').removeClass('page-products__btn--active'),
        $('.content-item').removeClass('list')
    })

    $('.icon-th-list').on('click', function () {
        $('.icon-th-list').addClass('page-products__btn--active'),
        $('.icon-th-large').removeClass('page-products__btn--active'),
        $('.content-item').addClass('list')
    })

    $('.details .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.details').find('.tab-item').removeClass('active-tab').hide();
        $('.details .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('.single').on('click', function (){
        $('.product-tarif__price-single').addClass('checked'),
        $('.product-tarif__price-multi').removeClass('checked')
    })

    $('.multi').on('click', function () {
        $('.product-tarif__price-multi').addClass('checked'),
        $('.product-tarif__price-single').removeClass('checked')
    })

    $('.icon-th-large').on('click', function () {
        $('.icon-th-large').addClass('page-products__btn--active'),
        $('.icon-th-list').removeClass('page-products__btn--active'),
        $('.favorites-catalog__item').removeClass('favorite-list')
    })

    $('.icon-th-list').on('click', function () {
        $('.icon-th-list').addClass('page-products__btn--active'),
        $('.icon-th-large').removeClass('page-products__btn--active'),
        $('.favorites-catalog__item').addClass('favorite-list')
    })

    $('.aside-item .aside-tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.aside-item').find('.aside-tab-item').removeClass('aside-active-tab').hide();
        $('.aside-item .aside-tabs').find('.aside-tab').removeClass('aside-active');
        $(this).addClass('aside-active');
        $('#' + id).addClass('aside-active-tab').fadeIn();
        return false;
    });

    var mixer = mixitup('.products__items')
    // var mixers = mixitup('.page-products__content')
});