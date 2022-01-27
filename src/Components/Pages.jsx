import React from "react";
import '../Styles/Pages.css'

function Pages({ prev, next, onPrevious, onNext }) {
  const buttonPrevious = () => {
    onPrevious()
  };
  const buttonNext = () => {
      onNext()
  };
  return (
      <nav className="Pages_nav">
        {prev ? (
          <button className="page-link" onClick={buttonPrevious}>
            Previous
          </button>
        ) : null}
        {next ? (
          <button className="page-link" onClick={buttonNext}>
            Next
          </button>
        ) : null}
      </nav>

  );
}

export { Pages };
