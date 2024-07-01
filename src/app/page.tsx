"use client";

import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { TweenMax } from "gsap";

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

const Dog = styled.p.attrs<{ $x: number; $y: number }>((props) => ({
  style: {
    left: `${props.$x}px`,
    top: `${props.$y}px`,
  },
}))`
  position: absolute;
`;

const lerp = (start: number, end: number, factor: number) => {
  return start + (end - start) * factor;
};

const Page = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const dogRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentX((prevX) => lerp(prevX, x, 0.1));
      setCurrentY((prevY) => lerp(prevY, y, 0.1));

      TweenMax.to(dogRef.current, 0.5, {
        x: currentX,
        y: currentY,
        ease: "power2.out",
      });
    }, 33.33); // 約30fps (1000ms / 30)

    return () => clearInterval(interval);
  }, [x, y, currentX, currentY]);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const newX = e.clientX - e.currentTarget.getBoundingClientRect().left;
    const newY = e.clientY - e.currentTarget.getBoundingClientRect().top;

    setX(Math.round(newX));
    setY(Math.round(newY));
  };

  return (
    <main>
      <PageWrapper onMouseMove={handleMouseMove}>
        <Dog ref={dogRef} $x={currentX} $y={currentY}>
          犬
        </Dog>
      </PageWrapper>
    </main>
  );
};

export default Page;
