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
            gap: 100,
            padding: 20,
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div style={{ marginBottom: 30 }}>
              <Title fontSize={42} textAlign="left">
                {scene.content.leftTitle}
              </Title>
            </div>
            {scene.content.leftPoints.map((point) => (
              <div key={point} style={{ marginBottom: 12 }}>
                <BodyText>✓ {point}</BodyText>
              </div>
            ))}
          </div>

          <div
            style={{
              width: 2,
              background: "rgba(255,255,255,.2)",
              height: 260,
            }}
          />

          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div style={{ marginBottom: 30 }}>
              <Title fontSize={42} textAlign="left">
                {scene.content.rightTitle}
              </Title>
            </div>
            {scene.content.leftPoints.map((point) => (
              <div key={point} style={{ marginBottom: 12 }}>
                <BodyText>✓ {point}</BodyText>
              </div>
            ))}
          </div>
        </div>
      </AnimatedCard>
    </AbsoluteFill>
  );
};
