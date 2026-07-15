import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";

interface CounterProps {
  from: number;
  to: number;
  suffix?: string;
  prefix?: string;
  fontSize?: number;
}

export const Counter = ({
  from,
  to,
  suffix = "",
  prefix = "",
  fontSize = 120,
}: CounterProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const value = Math.round(
    interpolate(frame, [0, fps], [from, to], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
  );

  return (
    <div
      style={{
        fontSize,
        fontWeight: 800,
        color: "white",
      }}
    >
      {prefix}
      {value}
      {suffix}
    </div>
  );
};
