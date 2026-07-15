import { AbsoluteFill } from "remotion";
import { Scene } from "@/types/blueprint";
import { AnimatedText } from "../components/AnimatedText";
import { Background } from "../components/Background";
import { AnimatedCard } from "../components/cards/AnimatedCard";

interface HeroLayoutProps {
  scene: Scene;
  localFrame: number;
}

export const HeroLayout = ({ scene, localFrame }: HeroLayoutProps) => {
  return (
    <AbsoluteFill>
      <Background scene={scene} />
      <AnimatedCard>
        <AnimatedText animation={scene.animation} localFrame={localFrame}>
          <h1
            style={{
              fontSize: 90,
              color: "white",
              fontWeight: "bold",
              marginBottom: 30,
              lineHeight: 1.1,
            }}
          >
            {scene.text}
          </h1>
        </AnimatedText>

        <AnimatedText animation="fade" localFrame={localFrame}>
          <p
            style={{
              fontSize: 42,
              color: "#dddddd",
              maxWidth: 800,
            }}
          >
            {scene.caption}
          </p>
        </AnimatedText>
      </AnimatedCard>
    </AbsoluteFill>
  );
};
