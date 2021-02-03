$(document).ready(function () {
  $icons = $(".phone-header__mark");
  $icons__quantity = $icons.length;

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  if ($(window).width() > 860) {
    // анимация для десктопа с разрешением > 860px
    setInterval(() => {
      $icons.each(function (index) {
        // возвращаем новую ссылку иконки
        let randomSrc = (quantity) => {
          let num = Math.floor(getRandomArbitrary(1, quantity));
          return $(this)
            .attr("src")
            .replace(/([0-9]).png/, `${num}.png`);
        };

        $(this).attr("src", randomSrc($icons__quantity));

        switch (index) {
          case 0:
            $(this).animate(
              {
                // opacity: "0",
                right: `${getRandomArbitrary(35, 53)}%`,
                top: `${getRandomArbitrary(4, 21)}%`,
              },
              0,
              "linear"
            );
            lel = () => {
              console.log("hi");
            };
            break;
          case 1:
            $(this).animate(
              {
                // opacity: "0",
                right: `${getRandomArbitrary(28, 42)}%`,
                top: `${getRandomArbitrary(46, 49)}%`,
              },
              0,
              "linear"
            );
            break;
          case 2:
            $(this).animate(
              {
                // opacity: "0",
                right: `${getRandomArbitrary(1, 26)}%`,
                top: `${getRandomArbitrary(33, 56)}%`,
              },
              0,
              "linear"
            );
            break;
          case 3:
            $(this).animate(
              {
                // opacity: "0",
                right: `${getRandomArbitrary(1, 36)}%`,
                top: `${getRandomArbitrary(1, 34)}%`,
              },
              0,
              "linear"
            );
          default:
            break;
        }
      });
    }, 3000); // время анимации в мс (3000)
  } else {
    // анимация для мобилок с разрешением < 860px
    setInterval(() => {
      $icons.each(function (index) {
        // возвращаем новую ссылку иконки
        let randomSrc = (quantity) => {
          let num = Math.floor(getRandomArbitrary(1, quantity));
          return $(this)
            .attr("src")
            .replace(/([0-9]).png/, `${num}.png`);
        };

        $(this).attr("src", randomSrc($icons__quantity));

        switch (index) {
          case 0:
            $(this).animate(
              {
                // opacity: "0",
                right: `${getRandomArbitrary(37, 74)}%`,
                top: `${getRandomArbitrary(11, 40)}%`,
              },
              0,
              "linear"
            );
            lel = () => {
              console.log("hi");
            };
            break;
          case 1:
            $(this).animate(
              {
                // opacity: "0",
                right: `${getRandomArbitrary(35, 60)}%`,
                top: `${getRandomArbitrary(30, 60)}%`,
              },
              0,
              "linear"
            );
            break;
          case 2:
            $(this).animate(
              {
                // opacity: "0",
                right: `${getRandomArbitrary(1, 35)}%`,
                top: `${getRandomArbitrary(6, 42)}%`,
              },
              0,
              "linear"
            );
            break;
          case 3:
            $(this).animate(
              {
                // opacity: "0",
                right: `${getRandomArbitrary(5, 32)}%`,
                top: `${getRandomArbitrary(20, 52)}%`,
              },
              0,
              "linear"
            );
          default:
            break;
        }
      });
    }, 3000); // время анимации в мс (3000)
  }

  // header-visibility
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

  // popup
  $how__item = $(".how__item");
  $phone_close = $(".phone-close");
  $body = $("body");
  $how__item.click(function () {
    $(this).next().addClass("active");
  });
  $phone_close.click(function () {
    $(this).parent().parent().removeClass("active");
  });
  $(document).mouseup(function (e) {
    // событие клика по веб-документу
    let div = $(".top-how__phone-popup"); // тут указываем ID элемента
    if (
      !div.is(e.target) && // если клик был не по нашему блоку
      div.has(e.target).length === 0
    ) {
      // и не по его дочерним элементам
      $(".top-how__popup").removeClass("active");
    }
  });
});
