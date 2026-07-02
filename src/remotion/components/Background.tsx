import { AbsoluteFill, OffthreadVideo, staticFile } from "remotion";
import { VisualType } from "@/types/blueprint";
import { AssetResolver } from "../../renderer/AssetResolver";
interface BackgroundProps {
  type: VisualType;
}

export const Background = ({ type }: BackgroundProps) => {
  const src = AssetResolver.getBackground(type);

  return (
    <AbsoluteFill>
      <OffthreadVideo
        src={src}
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
