import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { Scene as SceneType } from "@/types/blueprint";
import { AnimatedText } from "./AnimatedText";
import { Timeline } from "../../renderer/Timeline";
import { LayoutResolver } from "../layouts/LayoutResolver";
interface SceneProps {
  scene: SceneType;
}

export const Scene = ({ scene }: SceneProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const localFrame = Timeline.getLocalFrame(frame, scene.start, fps);

  return <LayoutResolver scene={scene} localFrame={localFrame} />;
};
