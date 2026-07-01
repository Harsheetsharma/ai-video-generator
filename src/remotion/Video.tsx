import { AbsoluteFill } from "remotion";
import { VideoBlueprint } from "@/types/blueprint";
import { useCurrentFrame } from "remotion";
import { useVideoConfig } from "remotion";
import { SceneResolver } from "../renderer/SceneResolver";
import { AnimatedText } from "./components/AnimatedText";
export interface VideoProps {
  blueprint: VideoBlueprint;
}

export const Video = (props: VideoProps) => {
  const { blueprint } = props;
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const currentSecond = frame / fps;
  const scene = SceneResolver.getCurrentScene(blueprint, currentSecond);
  if (!scene) {
    return (
      <AbsoluteFill
        style={{
          backgroundColor: "black",
        }}
      />
    );
  }

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#111827",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
        textAlign: "center",
      }}
    >
      <AnimatedText animation={scene?.animation}>
        <h1
          style={{
            fontSize: 80,
            marginBottom: 40,
          }}
        >
          {scene?.text}
        </h1>
      </AnimatedText>

      <AnimatedText animation="fade">
        <p
          style={{
            fontSize: 42,
            opacity: 0.8,
          }}
        >
          {scene?.caption}
        </p>
      </AnimatedText>
    </AbsoluteFill>
  );
};
