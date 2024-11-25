import { useEffect } from "react";
import $ from "jquery";
import "jquery-ui/ui/widgets/slider";
import "flexslider";
import "jquery.appear";
import "jquery-countto"; 
import "owl.carousel"; 
import "bootstrap/dist/js/bootstrap.bundle";

const useMain = () => {
    useEffect(() => {
        $(window).on("load", () => {
            $(".preloader").fadeOut("slow");
        });

        const handleScroll = () => {
            if (window.scrollY > 100) {
                $(".navbar").addClass("fixed-top");
            } else {
                $(".navbar").removeClass("fixed-top");
            }
        };
        window.addEventListener("scroll", handleScroll);

        // Category Toggle
        $(".category-btn").on("click", () => {
            $(".main-category").toggle();
        });

        if ($(".search-box-outer").length) {
            $(".search-box-outer").on("click", () => {
                $("body").addClass("search-active");
            });
            $(".close-search").on("click", () => {
                $("body").removeClass("search-active");
            });
        }

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
                "<i class='far fa-angle-right'></i>"
            ],
            onInitialized: (event) => {
                const $firstAnimatingElements = $(".hero-slider .owl-item")
                    .eq(event.item.index)
                    .find("[data-animation]");
                doAnimations($firstAnimatingElements);
            },
            onChanged: (event) => {
                const $animatingElements = $(".hero-slider .owl-item")
                    .eq(event.item.index)
                    .find("[data-animation]");
                doAnimations($animatingElements);
            }
        });

        const doAnimations = (elements) => {
            const animationEndEvents =
                "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
            elements.each(function () {
                const $this = $(this);
                const $animationDelay = $this.data("delay");
                const $animationDuration = $this.data("duration");
                const $animationType = "animated " + $this.data("animation");
                $this.css({
                    "animation-delay": $animationDelay,
                    "-webkit-animation-delay": $animationDelay,
                    "animation-duration": $animationDuration,
                    "-webkit-animation-duration": $animationDuration
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        };

        const handleScrollToTop = () => {
            if (window.scrollY > 100) {
                $("#scroll-top").addClass("active");
            } else {
                $("#scroll-top").removeClass("active");
            }
        };
        window.addEventListener("scroll", handleScrollToTop);
        $("#scroll-top").on("click", () => {
            $("html, body").animate({ scrollTop: 0 }, 1500);
            return false;
        });

        if ($(".flexslider-thumbnails").length) {
            $(".flexslider-thumbnails").flexslider({
                animation: "slide",
                controlNav: "thumbnails"
            });
        }

        if ($(".price-range").length) {
            $(".price-range").slider({
                range: true,
                min: 0,
                max: 5000,
                values: [500, 2000],
                slide: (event, ui) => {
                    $("#price-amount").val(`$${ui.values[0]} - $${ui.values[1]}`);
                }
            });
            $("#price-amount").val(
                `$${$(".price-range").slider("values", 0)} - $${$(".price-range").slider("values", 1)}`
            );
        }

        $(".plus-btn").on("click", function () {
            const quantityInput = $(this).closest(".shop-cart-qty").children(".quantity")[0];
            const minusBtn = $(this).closest(".shop-cart-qty").children(".minus-btn");
            quantityInput.value++;
            if (quantityInput.value > 0) {
                minusBtn.removeAttr("disabled");
            }
        });
        $(".minus-btn").on("click", function () {
            const quantityInput = $(this).closest(".shop-cart-qty").children(".quantity")[0];
            quantityInput.value--;
            if (quantityInput.value <= 1) {
                $(this).attr("disabled", "disabled");
            }
        });

        $(window).on("load", () => {
            setTimeout(() => {
                $("#popup-banner").modal("show");
            }, 3000);
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("scroll", handleScrollToTop);
            $(".category-btn").off("click");
            $(".search-box-outer").off("click");
            $(".close-search").off("click");
            $(".plus-btn").off("click");
            $(".minus-btn").off("click");
        };
    }, []);
};

export default useMain;
