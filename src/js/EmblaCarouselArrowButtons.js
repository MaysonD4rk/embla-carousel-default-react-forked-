"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextButton = exports.PrevButton = exports.usePrevNextButtons = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var usePrevNextButtons = function (emblaApi) {
    var _a = (0, react_1.useState)(true), prevBtnDisabled = _a[0], setPrevBtnDisabled = _a[1];
    var _b = (0, react_1.useState)(true), nextBtnDisabled = _b[0], setNextBtnDisabled = _b[1];
    var onPrevButtonClick = (0, react_1.useCallback)(function () {
        if (!emblaApi)
            return;
        emblaApi.scrollPrev();
    }, [emblaApi]);
    var onNextButtonClick = (0, react_1.useCallback)(function () {
        if (!emblaApi)
            return;
        emblaApi.scrollNext();
    }, [emblaApi]);
    var onSelect = (0, react_1.useCallback)(function (emblaApi) {
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, []);
    (0, react_1.useEffect)(function () {
        if (!emblaApi)
            return;
        onSelect(emblaApi);
        emblaApi.on('reInit', onSelect).on('select', onSelect);
    }, [emblaApi, onSelect]);
    return {
        prevBtnDisabled: prevBtnDisabled,
        nextBtnDisabled: nextBtnDisabled,
        onPrevButtonClick: onPrevButtonClick,
        onNextButtonClick: onNextButtonClick
    };
};
exports.usePrevNextButtons = usePrevNextButtons;
var PrevButton = function (props) {
    var children = props.children, restProps = __rest(props, ["children"]);
    return ((0, jsx_runtime_1.jsxs)("button", __assign({ className: "embla__button embla__button--prev", type: "button" }, restProps, { children: [(0, jsx_runtime_1.jsx)("svg", { className: "embla__button__svg", viewBox: "0 0 532 532", children: (0, jsx_runtime_1.jsx)("path", { fill: "currentColor", d: "M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z" }) }), children] })));
};
exports.PrevButton = PrevButton;
var NextButton = function (props) {
    var children = props.children, restProps = __rest(props, ["children"]);
    return ((0, jsx_runtime_1.jsxs)("button", __assign({ className: "embla__button embla__button--next", type: "button" }, restProps, { children: [(0, jsx_runtime_1.jsx)("svg", { className: "embla__button__svg", viewBox: "0 0 532 532", children: (0, jsx_runtime_1.jsx)("path", { fill: "currentColor", d: "M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z" }) }), children] })));
};
exports.NextButton = NextButton;
