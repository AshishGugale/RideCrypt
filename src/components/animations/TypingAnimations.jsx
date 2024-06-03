import { cn } from "../../lib/utils.js";
import { useState, useEffect } from "react";

export default function TypingAnimation({ text, duration = 200, className }) {
  const [displayedText, setDisplayedText] = useState ("");
  const [i, setI] = useState(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prevState) => prevState + text.charAt(i));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i]);

  return (
    <h1
      className={cn(
        "",
        className
      )}
    >
      {displayedText ? displayedText : text}
    </h1>
  );
}
