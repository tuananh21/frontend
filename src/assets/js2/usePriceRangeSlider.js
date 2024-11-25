import { useEffect } from "react";
import $ from "jquery";
import "jquery-ui/ui/widgets/slider";

export function usePriceRangeSlider() {
    useEffect(() => {
        if ($(".price-range").length) {
            $(".price-range").slider({
                range: true,
                min: 0,
                max: 5000,
                values: [500, 2000],
                slide: function (event, ui) {
                    $("#price-amount").val(`$${ui.values[0]} - $${ui.values[1]}`);
                },
            });
            $("#price-amount").val(
                `$${$(".price-range").slider("values", 0)} - $${$(".price-range").slider("values", 1)}`
            );
        }
        return () => $(".price-range").slider("destroy");
    }, []);
}
