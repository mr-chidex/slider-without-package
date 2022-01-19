import React, { useRef, useState } from "react";

const App: React.FC = () => {
  const cardSliderRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number>(1);
  const numOfCards = 10;

  const shiftCardLeft = () => {
    cardSliderRef.current?.scrollBy({ left: -500, top: 0, behavior: "smooth" });
  };

  const shiftCardRight = () => {
    cardSliderRef.current?.scrollBy({ left: 500, top: 0, behavior: "smooth" });
  };

  const shiftLeft = () => {
    active > 1 ? setActive((prev) => prev - 1) : setActive(10);
  };
  const shiftRight = () => {
    active < numOfCards ? setActive((prev) => prev + 1) : setActive(1);
  };

  return (
    <main>
      <h1 className="header">
        Create Your Own React/Next Slider Without package
      </h1>

      <section className="card-slider">
        <h1 className="title">Card Slider</h1>
        <div className="slider">
          <span className="arrow-left arr" onClick={shiftCardLeft}>
            &larr;
          </span>
          <div className="slider-container" ref={cardSliderRef}>
            <div className="card-container">
              {[...Array(numOfCards)].map((_, ind) => (
                <div className="card" key={ind}>
                  {ind + 1}
                </div>
              ))}
            </div>
          </div>
          <span className="arrow-right arr" onClick={shiftCardRight}>
            &rarr;
          </span>
        </div>
      </section>

      <section className="single-slider">
        <h1 className="title">Single Slider</h1>
        <div className="single-slider-container">
          <span className="arrow-left arr" onClick={shiftLeft}>
            &larr;
          </span>

          {[...Array(numOfCards)].map((_, ind) => (
            <div
              className={`single-slide ${
                active !== ind + 1 ? "invisible" : ""
              }`}
              key={ind}
              ref={slideRef}
            >
              {ind + 1}
            </div>
          ))}
          <span className="arrow-right arr" onClick={shiftRight}>
            &rarr;
          </span>
        </div>
      </section>
    </main>
  );
};

export default App;
