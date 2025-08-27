import React, { useState } from "react";

const Faq = ({ number, question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="question-card">
      <div className="question-main">
        <div className="qc-between">
          <div className="card-num">{number}</div>
          <div className="question">
            <h4>{question}</h4>
            {open && <div className="answer show-answer">{answer}</div>}
          </div>
        </div>
        <div className="open-answer" onClick={() => setOpen(!open)}>
          {open ? "-" : "+"}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Faq;
