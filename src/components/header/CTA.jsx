import React from "react";
import hoangdungCV from "../../assets/hoangdungCV.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a className="btn" href={hoangdungCV} download>
        Download my LaTeX CV
      </a>
      <a className="btn btn-primary" href="#contact">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
