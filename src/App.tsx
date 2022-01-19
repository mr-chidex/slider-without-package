import React, { useRef } from "react";

const App: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const shiftLeft = () => {
    console.log(sliderRef.current);
    sliderRef.current?.scrollBy({ left: -500, top: 0, behavior: "smooth" });
  };

  const shiftRight = () => {
    sliderRef.current?.scrollBy({ left: 500, top: 0, behavior: "smooth" });
  };

  return (
    <main>
      <h1>test</h1>

      <div className="slider">
        <span className="arrow-left arr" onClick={shiftLeft}>
          &larr;
        </span>
        <div className="slider-container" ref={sliderRef}>
          <div className="card-container">
            {[...Array(9)].map((_, ind) => (
              <div className="card" key={ind}>
                {ind + 1}
              </div>
            ))}
          </div>
        </div>
        <span className="arrow-right arr" onClick={shiftRight}>
          &rarr;
        </span>
      </div>
    </main>
  );
};

export default App;
