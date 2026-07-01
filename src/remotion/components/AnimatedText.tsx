import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { AnimationType } from "@/types/blueprint";

interface AnimatedTextProps {
  animation: AnimationType;
  children: React.ReactNode;
}

export const AnimatedText = ({ animation, children }: AnimatedTextProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  let opacity = 1;
  let scale = 1;
  let translateY = 0;

  switch (animation) {
    case "fade":
      opacity = interpolate(frame, [0, 20], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      break;

    case "zoom_in":
      scale = spring({
        frame,
        fps,
      });
      break;

    case "slide_up":
      translateY = interpolate(frame, [0, 20], [80, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      break;

    case "glitch":
      translateY = frame % 2 === 0 ? -4 : 4;
      break;
  }

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
      }}
    >
      {children}
    </div>
  );
};
