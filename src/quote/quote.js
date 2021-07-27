import React from "react";

import "./quote.css";

const Quote = (props) => {
  return(
    <div className="quote-holder">
      <p className="quote">{props.quote}</p>
      <p className="author">__{props.author}</p>
    </div>
  );
};

export default Quote;
