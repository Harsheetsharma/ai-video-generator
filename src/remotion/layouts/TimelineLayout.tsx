import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Scene } from "@/types/blueprint";
import { Background } from "../components/Background";
import { AnimatedCard } from "../components/cards/AnimatedCard";
import { Title } from "../components/text/Title";
import { Subtitle } from "../components/text/Subtitle";

interface TimelineLayoutProps {
  scene: Scene;
  localFrame: number;
}

export const TimelineLayout = ({ scene, localFrame }: TimelineLayoutProps) => {
  const frame = localFrame;
  const { fps } = useVideoConfig();

  const yearProgress = spring({
    frame: localFrame,
    fps,
    durationInFrames: 25,
  });

  const dotProgress = spring({
    frame: localFrame - 8,
    fps,
    durationInFrames: 18,
  });

  const lineProgress = spring({
    frame: localFrame - 16,
    fps,
    durationInFrames: 22,
  });

  const titleProgress = spring({
    frame: localFrame - 28,
    fps,
    durationInFrames: 20,
  });

  const subtitleProgress = spring({
    frame: localFrame - 38,
    fps,
    durationInFrames: 18,
  });

  return (
    <AbsoluteFill>
      <Background scene={scene} />

      <AnimatedCard>
        <div
          style={{
            color: "white",
            fontSize: 42,
            fontWeight: 700,
            marginBottom: 20,

            opacity: yearProgress,

            transform: `translateY(${interpolate(
              yearProgress,
              [0, 1],
              [30, 0],
            )}px)`,
          }}
        >
          {JSON.stringify(scene.timelineLabel)}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: "#5B8CFF",
              marginBottom: 8,
              transform: `scale(${dotProgress})`,
            }}
          />

          <div
            style={{
              width: 6,
              height: interpolate(lineProgress, [0, 1], [0, 180]),
              borderRadius: 999,
              background: "#5B8CFF",
            }}
          />
        </div>

        <div
          style={{
            opacity: titleProgress,
            transform: `translateY(${interpolate(
              titleProgress,
              [0, 1],
              [20, 0],
            )}px)`,
          }}
        >
          <Title>{scene.text}</Title>
        </div>

        <div
          style={{
            opacity: subtitleProgress,
            transform: `translateY(${interpolate(
              subtitleProgress,
              [0, 1],
              [15, 0],
            )}px)`,
          }}
        >
          <Subtitle>{scene.caption}</Subtitle>
        </div>
      </AnimatedCard>
    </AbsoluteFill>
  );
};
