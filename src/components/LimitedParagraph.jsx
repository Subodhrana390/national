import React, { useState } from "react";

const LimitedParagraph = ({ text, maxWords, textStyle }) => {
  const [showFullText, setShowFullText] = useState(false);

  const words = text.split(" ");
  const limitedText = words.slice(0, maxWords).join(" ");

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <p className={textStyle} onClick={toggleShowFullText}>
      {showFullText ? text : limitedText}
      {!showFullText && "..."}
    </p>
  );
};

export default LimitedParagraph;
