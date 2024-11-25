import { useEffect } from "react";
import $ from "jquery";

export function useCartQuantity() {
    useEffect(() => {
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

        return () => {
            $(".plus-btn").off("click");
            $(".minus-btn").off("click");
        };
    }, []);
}
