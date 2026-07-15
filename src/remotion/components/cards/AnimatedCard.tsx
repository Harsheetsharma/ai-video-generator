import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import React from "react";

interface AnimatedCardProps {
  children: React.ReactNode;
}

export const AnimatedCard = ({ children }: AnimatedCardProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    fps,
    frame,
    config: {
      damping: 18,
      stiffness: 120,
    },
  });

  const opacity = interpolate(frame, [0, 10], [0, 1], {
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(frame, [0, 15], [80, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          transform: `translateY(${translateY}px) scale(${scale})`,
          opacity,

          width: 820,

          padding: 50,

          borderRadius: 40,

          background: "rgba(15,15,20,.55)",

          backdropFilter: "blur(25px)",

          border: "1px solid rgba(255,255,255,.15)",

          boxShadow: "0 25px 60px rgba(0,0,0,.35)",

          display: "flex",

          flexDirection: "column",

          alignItems: "center",

          justifyContent: "center",
        }}
      >
        {children}
      </div>
    </AbsoluteFill>
  );
};
