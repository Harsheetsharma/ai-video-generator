import { Scene } from "@/types/blueprint";
import { VideoAsset } from "@/types/media";
// import { AssetResolver } from "@/renderer/AssetResolver";
import { AssetResolver } from "../../renderer/AssetResolver"
export class LocalAssetProvider {
    getVideo(scene: Scene): VideoAsset {
        return {
            type: "video",
            src: AssetResolver.getBackground(scene.background),
            query: scene.visualSearch,
        };
    }
}