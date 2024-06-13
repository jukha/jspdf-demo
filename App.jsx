import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const cardsRef = useRef(null);

  const makePdf = () => {
    html2canvas(cardsRef.current).then((canvas) => {
      const contentDataURL = canvas.toDataURL("image/png", 1.0);
      let pdf = new jsPDF("p", "mm", "a4");
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;
      pdf.addImage(contentDataURL, "PNG", 0, 0, width, height);
      pdf.save("Order.pdf");
    });
  };

  return (
    <>
      <section className="cards" ref={cardsRef}>
        <article className="card">
          <div className="card__img">
            <img src="img.jpg" alt="Sample Image" />
          </div>
          <div className="card__tags">
            <div className="tag">NEW</div>
          </div>
          <h3 className="card__title">ABC.io raises $10.8M Lorem Ispum</h3>
          <p className="card__description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit,
          </p>
        </article>
        <article className="card">
          <div className="card__img">
            <img src="img.jpg" alt="Sample Image" />
          </div>
          <div className="card__tags">
            <div className="tag">NEW</div>
          </div>
          <h3 className="card__title">ABC.io raises $10.8M Lorem Ispum</h3>
          <p className="card__description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit,
          </p>
        </article>
        <article className="card">
          <div className="card__img">
            <img src="img.jpg" alt="Sample Image" />
          </div>
          <div className="card__tags">
            <div className="tag">NEW</div>
          </div>
          <h3 className="card__title">ABC.io raises $10.8M Lorem Ispum</h3>
          <p className="card__description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit,
          </p>
        </article>
      </section>
      <button onClick={makePdf}>Download</button>
    </>
  );
}

export default App;
