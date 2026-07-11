import { Scene } from "@/types/blueprint";
import { VideoAsset } from "@/types/media";
import { LocalAssetProvider } from "./providers/LocalAssetProvider";

const localProvider = new LocalAssetProvider();

export class AssetProvider {
    static getVideo(scene: Scene): VideoAsset {
        return localProvider.getVideo(scene);
    }
}