import { AbsoluteFill, OffthreadVideo } from "remotion";
// import { AssetProvider } from "@/assets/AssetProvider";
import { AssetProvider } from "../../assets/AssetProvider";
import { Scene } from "@/types/blueprint";
interface BackgroundProps {
  scene: Scene;
}

export const Background = ({ scene }: BackgroundProps) => {
  console.log("Scene:", scene);

  if (!scene) {
    throw new Error("Scene is undefined in Background");
  }
  const video = AssetProvider.getVideo(scene);
  return (
    <AbsoluteFill>
      <OffthreadVideo
        src={video.src}
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </AbsoluteFill>
  );
};
