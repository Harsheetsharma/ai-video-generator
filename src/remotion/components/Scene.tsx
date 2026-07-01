import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { Scene as SceneType } from "@/types/blueprint";
import { AnimatedText } from "./AnimatedText";
import { Background } from "./Background";
import { Timeline } from "../../renderer/Timeline";

interface SceneProps {
  scene: SceneType;
}

export const Scene = ({ scene }: SceneProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const localFrame = Timeline.getLocalFrame(frame, scene.start, fps);

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
      <Background type={scene.background} />
      <AnimatedText animation={scene.animation} localFrame={localFrame}>
        <h1
          style={{
            fontSize: 80,
            marginBottom: 40,
          }}
        >
          {scene.text}
        </h1>
      </AnimatedText>

      <AnimatedText animation="fade" localFrame={localFrame}>
        <p
          style={{
            fontSize: 42,
            opacity: 0.8,
          }}
        >
          {scene.caption}
        </p>
      </AnimatedText>
    </AbsoluteFill>
  );
};
