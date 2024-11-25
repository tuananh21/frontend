import { useEffect } from "react";
import $ from "jquery";
import "jquery.appear";
import "jquery-countto";

export function useFunFactCounter() {
    useEffect(() => {
        $(".counter").countTo();
        $(".counter-box").appear(
            () => {
                $(".counter").countTo();
            },
            { accY: -100 }
        );
        return () => {
            $(".counter-box").off("appear");
        };
    }, []);
}
