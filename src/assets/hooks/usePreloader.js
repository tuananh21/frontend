import React, { useEffect } from "react";

export const usePreloader = () => {
    useEffect(() =>  {
        const preloader = document.querySelector(".preloader");
        if (preloader) {
            const preloader = () => {
                preloader.style.transition = "opacity 0.5";
                preloader.style.opacity = "0";
                setTimeout(() => {
                    preloader.style.display = "none"
                }, 500);
            };
            window.addEventListener("load",handleload);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);
};