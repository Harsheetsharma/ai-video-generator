import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import React from "react";
import { Theme } from "../../theme/Theme";
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

          padding: Theme.spacing.xl,

          borderRadius: Theme.radius.xl,

          background: Theme.colors.glass,

          backdropFilter: "blur(25px)",

          border: `1px solid ${Theme.colors.glassBorder}`,

          boxShadow: Theme.shadow.glass,

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
