import { AbsoluteFill, interpolate } from "remotion";
import { Scene } from "@/types/blueprint";
import { Background } from "../components/Background";
import { AnimatedCard } from "../components/cards/AnimatedCard";
import { Title } from "../components/text/Title";
import { Subtitle } from "../components/text/Subtitle";
import { useSceneAnimation } from "../hooks/useSceneAnimation";
import { TimelineContent } from "@/types/blueprint";
import {
  fadeInUp,
  pop,
  growVertical,
} from "../components/animations/AnimationStyles";

interface TimelineLayoutProps {
  scene: Scene;
  localFrame: number;
}

export const TimelineLayout = ({ scene, localFrame }: TimelineLayoutProps) => {
  const content = scene.content as TimelineContent;
  const {
    yearProgress,
    dotProgress,
    lineProgress,
    titleProgress,
    subtitleProgress,
  } = useSceneAnimation(localFrame);

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
            ...fadeInUp(yearProgress, 30),
          }}
        >
          {JSON.stringify(content.year)}
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
              ...pop(dotProgress),
            }}
          />

          <div
            style={{
              width: 6,
              ...growVertical(lineProgress),
              borderRadius: 999,
              background: "#5B8CFF",
            }}
          />
        </div>

        <div style={fadeInUp(titleProgress)}>
          <Title>{content?.title}</Title>
        </div>

        <div style={fadeInUp(subtitleProgress, 15)}>
          <Subtitle>{content?.subtitle}</Subtitle>
        </div>
      </AnimatedCard>
    </AbsoluteFill>
  );
};
