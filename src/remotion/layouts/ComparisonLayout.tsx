import { AbsoluteFill } from "remotion";
import { Background } from "../components/Background";
import { AnimatedCard } from "../components/cards/AnimatedCard";
import { Scene } from "@/types/blueprint";
import { Title } from "../components/text/Title";
import { BodyText } from "../components/text/BodyText";
interface ComparisonLayoutPropt {
  scene: Scene;
}

export const ComparisonLayout = ({ scene }: ComparisonLayoutPropt) => {
  if (scene.layout !== "comparison") return null;
  return (
    <AbsoluteFill>
      <Background scene={scene} />

      <AnimatedCard>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 60,
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Title>{scene.content.leftTitle}</Title>
            {scene.content.leftPoints.map((point) => (
              <BodyText key={point}>• {point}</BodyText>
            ))}
          </div>

          <div
            style={{
              width: 2,
              background: "rgba(255,255,255,.2)",
              alignSelf: "stretch",
            }}
          />

          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Title>{scene.content.rightTitle}</Title>
            {scene.content.rightPoints.map((point) => (
              <BodyText key={point}>• {point}</BodyText>
            ))}
          </div>
        </div>
      </AnimatedCard>
    </AbsoluteFill>
  );
};
