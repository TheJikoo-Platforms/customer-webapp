"use client";
import { useState, useEffect, useRef } from "react";

export const TruncateText = ({ text }: { text: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const checkTruncation = () => {
      if (textRef.current) {
        // Check if the text exceeds 2 lines (adjust based on your design)
        const isOverflowing = textRef.current.scrollHeight > 40;
        console.log(textRef.current.scrollHeight);
        setIsTruncated(isOverflowing);
      }
    };

    checkTruncation();
    window.addEventListener("resize", checkTruncation); // Recheck on window resize
    return () => {
      window.removeEventListener("resize", checkTruncation);
    };
  }, []);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="pr-2 overflow-hidden">
      <p
        ref={textRef}
        className={`text-[#475466] text-sm/5 ${
          !isExpanded && isTruncated && "line-clamp-2"
        }`}
      >
        {text}
      </p>
      {isTruncated && (
        <button
          onClick={toggleText}
          className="underline text-sm text-jikoo-brand-green"
        >
          Read
          {isExpanded ? " less" : " more"}
        </button>
      )}
    </div>
  );
};
