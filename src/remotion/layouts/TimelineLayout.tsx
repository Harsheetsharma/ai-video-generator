import { AbsoluteFill } from "remotion";
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
          }}
        >
          {JSON.stringify(scene.timelineLabel, null, 2)}
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
            }}
          />

          <div
            style={{
              width: 6,
              height: 180,
              borderRadius: 999,
              background: "#5B8CFF",
            }}
          />
        </div>

        <Title>{scene.text}</Title>

        <Subtitle>{scene.caption}</Subtitle>
      </AnimatedCard>
    </AbsoluteFill>
  );
};
