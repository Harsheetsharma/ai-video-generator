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
          {scene.timelineLabel}
        </div>

        <div
          style={{
            width: 6,
            height: 220,
            background: "#5B8CFF",
            borderRadius: 999,
            marginBottom: 30,
          }}
        />

        <Title>{scene.text}</Title>

        <Subtitle>{scene.caption}</Subtitle>
      </AnimatedCard>
    </AbsoluteFill>
  );
};
