import { Scene } from "@/types/blueprint";

import { HeroLayout } from "../layouts/HeroLayout";
import { TimelineLayout } from "../layouts/TimelineLayout";

interface Props {
  scene: Scene;
}

export function LayoutEngine({ scene }: Props) {
  switch (scene.layout) {
    case "hero":
      return <HeroLayout scene={scene} />;

    case "timeline":
      return <TimelineLayout scene={scene} />;

    default:
      return null;
  }
}
