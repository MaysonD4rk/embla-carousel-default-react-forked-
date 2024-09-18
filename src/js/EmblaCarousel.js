"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var EmblaCarouselDotButton_1 = require("./EmblaCarouselDotButton");
var EmblaCarouselArrowButtons_1 = require("./EmblaCarouselArrowButtons");
var embla_carousel_react_1 = __importDefault(require("embla-carousel-react"));
var EmblaCarousel = function (props) {
    var slides = props.slides, options = props.options;
    var _a = (0, embla_carousel_react_1.default)(options), emblaRef = _a[0], emblaApi = _a[1];
    var _b = (0, EmblaCarouselDotButton_1.useDotButton)(emblaApi), selectedIndex = _b.selectedIndex, scrollSnaps = _b.scrollSnaps, onDotButtonClick = _b.onDotButtonClick;
    var _c = (0, EmblaCarouselArrowButtons_1.usePrevNextButtons)(emblaApi), prevBtnDisabled = _c.prevBtnDisabled, nextBtnDisabled = _c.nextBtnDisabled, onPrevButtonClick = _c.onPrevButtonClick, onNextButtonClick = _c.onNextButtonClick;
    return ((0, jsx_runtime_1.jsxs)("section", { className: "embla", children: [(0, jsx_runtime_1.jsx)("div", { className: "embla__viewport", ref: emblaRef, children: (0, jsx_runtime_1.jsx)("div", { className: "embla__container", children: slides.map(function (index) { return ((0, jsx_runtime_1.jsx)("div", { className: "embla__slide", children: (0, jsx_runtime_1.jsx)("div", { className: "embla__slide__number", children: index + 1 }) }, index)); }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "embla__controls", children: (0, jsx_runtime_1.jsx)("div", { className: "embla__buttons", children: (0, jsx_runtime_1.jsx)(EmblaCarouselArrowButtons_1.NextButton, { onClick: onNextButtonClick, disabled: nextBtnDisabled }) }) })] }));
};
exports.default = EmblaCarousel;
