import { VideoBlueprint } from "@/types/blueprint";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { SceneResolver } from "../renderer/SceneResolver";
import { Scene } from "./components/Scene";

export interface VideoProps {
  blueprint: VideoBlueprint;
}

export const Video = ({ blueprint }: VideoProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const currentSecond = frame / fps;

  const scene = SceneResolver.getCurrentScene(blueprint, currentSecond);

  if (!scene) {
    return null;
  }

  return <Scene scene={scene} />;
};
