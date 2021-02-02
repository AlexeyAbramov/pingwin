$(document).ready(function () {
  //scroll
  $header__top = $(".header__top");

  $(window).scroll(function () {
    window.pageYOffset === 0
      ? $header__top.removeClass("sticky")
      : $header__top.addClass("sticky");
  });
  //menu
  $lang_menu = $(".menu-language");
  $footer_menu = $(".footer-language");
  $(".header-language__popup").click(function () {
    $lang_menu.toggleClass("active");
    $(".header-language__popup").toggleClass("active");
  });
  $(".footer-language__popup").click(function () {
    $(this).toggleClass("active");
    $(".footer-language__menu").toggleClass("active");
  });
  $(".header-menu").click(function () {
    $(this).toggleClass("active");
    $(".header-nav").toggleClass("active");
  });

  //slick

  $(document).ready(function () {
    $(".partners__list").slick({
      slidesToShow: 4,
      infinity: true,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      accessibility: false,
      dots: true,
      pauseOnFocus: false,
      responsive: [
        {
          breakpoint: 760,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 860,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    });
  });
  $(".subscribe__list").slick({
    arrows: false,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 2900,
        settings: "unslick",
      },
    ],
  });
});
