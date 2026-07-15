import { AbsoluteFill } from "remotion";
import { Scene } from "@/types/blueprint";
import { Background } from "../components/Background";
import { StatCard } from "../components/cards/StatCard";

interface StatisticsLayoutProps {
  scene: Scene;
}

export const StatisticsLayout = ({ scene }: StatisticsLayoutProps) => {
  return (
    <AbsoluteFill>
      <Background scene={scene} />

      <StatCard value={97} suffix="%" label={scene.text} />
    </AbsoluteFill>
  );
};
