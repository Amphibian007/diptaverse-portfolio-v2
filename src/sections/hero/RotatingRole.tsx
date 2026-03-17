"use client";

import { useEffect, useState } from "react";

const roleLines = [
  "A Sales Engineering Leader",
  "A Platform Evaluation Architect",
  "A Kubernetes Data Platform Specialist",
  "A POC Strategy Leader",
];

const TYPE_DELAY_MS = 75;
const DELETE_DELAY_MS = 34;
const PAUSE_AFTER_TYPING_MS = 1500;
const PAUSE_AFTER_DELETING_MS = 260;
const CARET_BLINK_MS = 530;

export function RotatingRole() {
  const [lineIndex, setLineIndex] = useState(0);
  const [visibleText, setVisibleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    const caretTimer = window.setInterval(() => {
      setShowCaret((current) => !current);
    }, CARET_BLINK_MS);

    return () => window.clearInterval(caretTimer);
  }, []);

  useEffect(() => {
    const currentLine = roleLines[lineIndex];

    if (!isDeleting && visibleText === currentLine) {
      const pauseTimer = window.setTimeout(() => {
        setIsDeleting(true);
      }, PAUSE_AFTER_TYPING_MS);

      return () => window.clearTimeout(pauseTimer);
    }

    if (isDeleting && visibleText.length === 0) {
      const nextTimer = window.setTimeout(() => {
        setIsDeleting(false);
        setLineIndex((current) => (current + 1) % roleLines.length);
      }, PAUSE_AFTER_DELETING_MS);

      return () => window.clearTimeout(nextTimer);
    }

    const nextText = isDeleting
      ? currentLine.slice(0, visibleText.length - 1)
      : currentLine.slice(0, visibleText.length + 1);

    const stepTimer = window.setTimeout(() => {
      setVisibleText(nextText);
    }, isDeleting ? DELETE_DELAY_MS : TYPE_DELAY_MS);

    return () => window.clearTimeout(stepTimer);
  }, [isDeleting, lineIndex, visibleText]);

  return (
    <span className="inline-flex min-h-[1.4em] items-center justify-center">
      <span className="text-[0.92em]">{visibleText}</span>
      <span
        aria-hidden="true"
        className={`ml-0.5 text-[#2ed1c8] transition-opacity duration-150 ${
          showCaret ? "opacity-100" : "opacity-0"
        }`}
      >
        |
      </span>
    </span>
  );
}
