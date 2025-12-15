import { useState, useEffect } from "react";

import type { FC } from "react";

interface TypewriterProps {
  texts: string[];
  speed?: number;
  pause?: number;
}

export const Typewriter: FC<TypewriterProps> = ({
  texts,
  speed = 100,
  pause = 2000,
}) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), pause);

      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);

      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, speed);

    return (): void => {
      clearTimeout(timeout);
    };
  }, [subIndex, index, reverse, texts, speed, pause]);

  return (
    <span className="typewriter-cursor">
      {texts[index].substring(0, subIndex)}
    </span>
  );
};
