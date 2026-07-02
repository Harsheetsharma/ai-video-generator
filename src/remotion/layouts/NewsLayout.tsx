import { AbsoluteFill } from "remotion";
import { Scene } from "@/types/blueprint";
import { Background } from "../components/Background";
import { AnimatedText } from "../components/AnimatedText";

interface NewsLayoutProps {
  scene: Scene;
  localFrame: number;
}

export const NewsLayout = ({ scene, localFrame }: NewsLayoutProps) => {
  return (
    <AbsoluteFill>
      <Background type={scene.background} />

      <AbsoluteFill
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: 60,
          zIndex: 10,
        }}
      >
        <div
          style={{
            marginTop: 20,
            background: "#e11d48",
            color: "white",
            padding: "12px 24px",
            borderRadius: 12,
            fontWeight: "bold",
            fontSize: 32,
          }}
        >
          BREAKING NEWS
        </div>

        <AnimatedText animation={scene.animation} localFrame={localFrame}>
          <h1
            style={{
              fontSize: 72,
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              maxWidth: 900,
            }}
          >
            {scene.text}
          </h1>
        </AnimatedText>

        <AnimatedText animation="fade" localFrame={localFrame}>
          <div
            style={{
              background: "rgba(0,0,0,.6)",
              color: "white",
              padding: 24,
              borderRadius: 16,
              fontSize: 36,
              textAlign: "center",
              marginBottom: 30,
            }}
          >
            {scene.caption}
          </div>
        </AnimatedText>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
