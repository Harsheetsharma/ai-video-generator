import { AbsoluteFill } from "remotion";
import { Scene } from "@/types/blueprint";
import { Background } from "../components/Background";
import { StatCard } from "../components/cards/StatCard";

interface StatisticsLayoutProps {
  scene: Scene;
}

export const StatisticsLayout = ({ scene }: StatisticsLayoutProps) => {
  if (scene.layout !== "statistics") return null;
  return (
    <AbsoluteFill>
      <Background scene={scene} />

      <StatCard value={97} suffix="%" label={scene.content.label} />
    </AbsoluteFill>
  );
};
