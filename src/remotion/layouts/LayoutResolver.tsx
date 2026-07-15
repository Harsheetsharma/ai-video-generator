import { Scene } from "@/types/blueprint";
import { StatisticsLayout } from "./StatisticsLayout";
import { HeroLayout } from "./HeroLayout";
import { SplitLayout } from "./SplitLayout";
import { NewsLayout } from "./NewsLayout";
import { QuoteLayout } from "./QuoteLayout";

interface LayoutResolverProps {
  scene: Scene;
  localFrame: number;
}

export const LayoutResolver = ({ scene, localFrame }: LayoutResolverProps) => {
  switch (scene.layout) {
    case "hero":
      return <HeroLayout scene={scene} localFrame={localFrame} />;

    case "split":
      return <SplitLayout scene={scene} />;

    case "statistics":
      return <StatisticsLayout scene={scene} />;
    case "news":
      return <NewsLayout scene={scene} localFrame={localFrame} />;

    case "quote":
      return <QuoteLayout scene={scene} />;

    default:
      return <HeroLayout scene={scene} localFrame={localFrame} />;
  }
};
