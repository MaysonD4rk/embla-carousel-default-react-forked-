var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useCallback, useEffect, useState } from 'react';
export const useDotButton = (emblaApi) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
    const onDotButtonClick = useCallback((index) => {
        if (!emblaApi)
            return;
        emblaApi.scrollTo(index);
    }, [emblaApi]);
    const onInit = useCallback((emblaApi) => {
        setScrollSnaps(emblaApi.scrollSnapList());
    }, []);
    const onSelect = useCallback((emblaApi) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);
    useEffect(() => {
        if (!emblaApi)
            return;
        onInit(emblaApi);
        onSelect(emblaApi);
        emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect);
    }, [emblaApi, onInit, onSelect]);
    return {
        selectedIndex,
        scrollSnaps,
        onDotButtonClick
    };
};
export const DotButton = (props) => {
    const { children } = props, restProps = __rest(props, ["children"]);
    return (React.createElement("button", Object.assign({ type: "button" }, restProps), children));
};
