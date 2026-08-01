import { Scene } from "@/types/blueprint";
import { StatisticsLayout } from "./StatisticsLayout";
import { HeroLayout } from "./HeroLayout";
import { QuoteLayout } from "./QuoteLayout";
import { TimelineLayout } from "./TimelineLayout";
import { ComparisonLayout } from "./ComparisonLayout";

interface LayoutResolverProps {
  scene: Scene;
  localFrame: number;
}

export const LayoutResolver = ({ scene, localFrame }: LayoutResolverProps) => {
  switch (scene.layout) {
    case "hero":
      return <HeroLayout scene={scene} localFrame={localFrame} />;

    case "statistics":
      return <StatisticsLayout scene={scene} />;

    case "comparison":
      return <ComparisonLayout scene={scene} />;

    case "timeline":
      return <TimelineLayout scene={scene} localFrame={localFrame} />;

    case "quote":
      return <QuoteLayout scene={scene} />;

    default:
      return <HeroLayout scene={scene} localFrame={localFrame} />;
  }
};
