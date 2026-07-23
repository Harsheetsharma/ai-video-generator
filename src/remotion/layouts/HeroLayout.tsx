import { AbsoluteFill } from "remotion";
import { Scene } from "@/types/blueprint";
import { AnimatedText } from "../components/AnimatedText";
import { Background } from "../components/Background";
import { AnimatedCard } from "../components/cards/AnimatedCard";
import { Title } from "../components/text/Title";
import { Subtitle } from "../components/text/Subtitle";
import { useSceneAnimation } from "../hooks/useSceneAnimation";
import { fadeInUp } from "../components/animations/AnimationStyles";

interface HeroLayoutProps {
  scene: Scene;
  localFrame: number;
}

export const HeroLayout = ({ scene, localFrame }: HeroLayoutProps) => {
  const { titleProgress, subtitleProgress } = useSceneAnimation(localFrame);

  return (
    <AbsoluteFill>
      <Background scene={scene} />
      <AnimatedCard>
        <div style={fadeInUp(titleProgress)}>
          <Title>{scene.text}</Title>
        </div>

        <div style={fadeInUp(subtitleProgress)}>
          <Subtitle>{scene.caption}</Subtitle>
        </div>
      </AnimatedCard>
    </AbsoluteFill>
  );
};
