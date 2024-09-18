import React from 'react';
import { useDotButton } from './EmblaCarouselDotButton';
import { NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
const EmblaCarousel = (props) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
    return (React.createElement("section", { className: "embla" },
        React.createElement("div", { className: "embla__viewport", ref: emblaRef },
            React.createElement("div", { className: "embla__container" }, slides.map((index) => (React.createElement("div", { className: "embla__slide", key: index },
                React.createElement("div", { className: "embla__slide__number" }, index + 1)))))),
        React.createElement("div", { className: "embla__controls" },
            React.createElement("div", { className: "embla__buttons" },
                React.createElement(NextButton, { onClick: onNextButtonClick, disabled: nextBtnDisabled })))));
};
export default EmblaCarousel;
