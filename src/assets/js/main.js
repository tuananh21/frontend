/*=====================================================
Template Name   : Fameo
Description     : Furniture Store HTML5 Template
Author          : LunarTemp
Version         : 1.0
=======================================================*/

(function ($) {
  "use strict";

  // preloader
  window.initPreloader = function () {
    $(window).on("load", function () {
      $(".preloader").fadeOut("slow");
    });
  };

  // navbar fixed top
  window.initNavbarScroll = function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $(".navbar").addClass("fixed-top");
      } else {
        $(".navbar").removeClass("fixed-top");
      }
    });
  };

  // category all
  window.initCategoryToggle = function () {
    $(".category-btn").on("click", function () {
      $(".main-category").toggle();
    });
  };

  // header Search
  window.intitHeaderSearch = function () {
    if ($(".search-box-outer").length) {
      $(".search-box-outer").on("click", function () {
        $("body").addClass("search-active");
      });
      $(".close-search").on("click", function () {
        $("body").removeClass("search-active");
      });
    }
  };

  // multi level dropdown menu
  window.initDropdownMenu = function () {
    $(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
      if (!$(this).next().hasClass("show")) {
        $(this)
          .parents(".dropdown-menu")
          .first()
          .find(".show")
          .removeClass("show");
      }
      var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass("show");

      $(this)
        .parents("li.nav-item.dropdown.show")
        .on("hidden.bs.dropdown", function (e) {
          $(".dropdown-submenu .show").removeClass("show");
        });
      return false;
    });
  };

  // navbar dropdown-right
  window.initNavbarDropdownResize = function () {
    function handleResize() {
      let ndr = $(".navbar-nav .nav-item.dropdown").slice(-2);
      if (window.innerWidth > 991 && window.innerWidth < 1199) {
        ndr.addClass("dropdown-right");
      } else {
        ndr.removeClass("dropdown-right");
      }
    }

    handleResize();
    $(window).on("resize", handleResize);
    return () => {
      $(window).off("resize", handleResize);
    };
  };

  // data-background
  window.initDataBackground = function () {
    $("[data-background]").each(function () {
      $(this).css(
        "background-image",
        "url(" + $(this).attr("data-background") + ")"
      );
    });
  };

  // wow init
  new WOW().init();

  // hero slider
  window.initHeroSlider = function () {
    $(".hero-slider").owlCarousel({
      loop: true,
      nav: true,
      dots: true,
      margin: 0,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      items: 1,
      navText: [
        "<i class='far fa-angle-left'></i>",
        "<i class='far fa-angle-right'></i>",
      ],

      onInitialized: function (event) {
        var $firstAnimatingElements = $(".hero-slider .owl-item")
          .eq(event.item.index)
          .find("[data-animation]");
        doAnimations($firstAnimatingElements);
      },

      onChanged: function (event) {
        var $firstAnimatingElements = $(".hero-slider .owl-item")
          .eq(event.item.index)
          .find("[data-animation]");
        doAnimations($firstAnimatingElements);
      },
    });
  };

  //hero slider do animations
  window.doAnimations = function (elements) {
    var animationEndEvents =
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    elements.each(function () {
      var $this = $(this);
      var $animationDelay = $this.data("delay");
      var $animationDuration = $this.data("duration");
      var $animationType = "animated " + $this.data("animation");
      $this.css({
        "animation-delay": $animationDelay,
        "-webkit-animation-delay": $animationDelay,
        "animation-duration": $animationDuration,
        "-webkit-animation-duration": $animationDuration,
      });
      $this.addClass($animationType).one(animationEndEvents, function () {
        $this.removeClass($animationType);
      });
    });
  };

  // product slider

  window.initProductSlider = function () {
    $(".product-slider").owlCarousel({
      items: 5,
      loop: true,
      margin: 15,
      smartSpeed: 400,
      nav: true,
      autoplay: false,
      autoplayHoverPause: true,
      dots: false,
      navText: [
        "<i class='far fa-angle-left'></i>",
        "<i class='far fa-angle-right'></i>",
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 },
        1200: { items: 5 },
      },
    });
  };

  // Product Slider 2
  window.initProductSlider2 = function () {
    $(".product-slider2").owlCarousel({
      items: 3,
      loop: true,
      margin: 20,
      smartSpeed: 400,
      nav: true,
      autoplay: false,
      autoplayHoverPause: true,
      dots: false,
      navText: [
        "<i class='far fa-angle-left'></i>",
        "<i class='far fa-angle-right'></i>",
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 },
        1200: { items: 3 },
      },
    });
  };

  // Deal Slider
  window.initDealSlider = function () {
    $(".deal-slider").owlCarousel({
      items: 1,
      loop: true,
      margin: 15,
      smartSpeed: 400,
      nav: false,
      dots: true,
      autoplayHoverPause: true,
      autoplay: false,
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        1000: { items: 1 },
      },
    });
  };

  // Testimonial Slider
  window.initTestimonialSlider = function () {
    $(".testimonial-slider").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: true,
      autoplay: true,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 },
        1400: { items: 4 },
      },
    });
  };

  // Brand Slider
  window.initBrandSlider = function () {
    $(".brand-slider").owlCarousel({
      loop: true,
      margin: 40,
      nav: false,
      dots: false,
      autoplay: false,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 2 },
        600: { items: 3 },
        1000: { items: 6 },
      },
    });
  };

  // Category Slider
  window.initCategorySlider = function () {
    $(".category-slider").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: false,
      autoplay: false,
      responsive: {
        0: { items: 2 },
        600: { items: 3 },
        1000: { items: 4 },
        1200: { items: 6 },
        1400: { items: 6 },
      },
    });
  };

  // Instagram Slider
  window.initInstagramSlider = function () {
    $(".instagram-slider").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: false,
      autoplay: true,
      responsive: {
        0: { items: 2 },
        600: { items: 3 },
        1000: { items: 5 },
      },
    });
  };

  // Fun Fact Counter
  window.initFunFactCounter = function () {
    $(".counter").countTo();
    $(".counter-box").appear(
      function () {
        $(".counter").countTo();
      },
      { accY: -100 }
    );
  };

  // Magnific Popup Init
  window.initMagnificPopup = function () {
    $(".popup-gallery").magnificPopup({
      delegate: ".popup-img",
      type: "image",
      gallery: { enabled: true },
    });

    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  };

  // Scroll to Top
  window.initScrollToTop = function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $("#scroll-top").addClass("active");
      } else {
        $("#scroll-top").removeClass("active");
      }
    });

    $("#scroll-top").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 1500);
      return false;
    });
  };

  // Countdown
  window.initCountdown = function () {
    $("[data-countdown]").each(function () {
      let finalDate = $(this).data("countdown");
      $(this).countdown(finalDate, function (event) {
        $(this).html(
          event.strftime(
            '<div class="row">' +
              '<div class="col countdown-item"><h2>%-D</h2><h5>Day%!d</h5></div>' +
              '<div class="col countdown-item"><h2>%H</h2><h5>Hours</h5></div>' +
              '<div class="col countdown-item"><h2>%M</h2><h5>Minutes</h5></div>' +
              '<div class="col countdown-item"><h2>%S</h2><h5>Seconds</h5></div>' +
              "</div>"
          )
        );
      });
    });
  };
})(jQuery);
