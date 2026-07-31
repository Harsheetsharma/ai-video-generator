import { Scene } from "@/types/blueprint";

import { HeroLayout } from "../layouts/HeroLayout";
import { TimelineLayout } from "../layouts/TimelineLayout";

interface LayoutEngineProps {
  scene: Scene;
  localFrame: number;
}

export function LayoutEngine({ scene, localFrame }: LayoutEngineProps) {
  switch (scene.layout) {
    case "hero":
      return <HeroLayout scene={scene} localFrame={localFrame} />;

    case "timeline":
      return <TimelineLayout scene={scene} localFrame={localFrame} />;

    default:
      return null;
  }
}
