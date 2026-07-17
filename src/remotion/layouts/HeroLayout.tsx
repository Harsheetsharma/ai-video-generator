import { AbsoluteFill } from "remotion";
import { Scene } from "@/types/blueprint";
import { AnimatedText } from "../components/AnimatedText";
import { Background } from "../components/Background";
import { AnimatedCard } from "../components/cards/AnimatedCard";
import { HeroTitle, Subtitle } from "../theme/Typography";

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
          <HeroTitle>{scene.text}</HeroTitle>
        </AnimatedText>

        <AnimatedText animation="fade" localFrame={localFrame}>
          <Subtitle>{scene.caption}</Subtitle>
        </AnimatedText>
      </AnimatedCard>
    </AbsoluteFill>
  );
};
