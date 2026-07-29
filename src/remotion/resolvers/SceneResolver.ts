import { Scene } from "@/types/blueprint";

export interface ResolvedScene {
    scene: Scene;
}

export class SceneResolver {
    static resolve(scene: Scene): ResolvedScene {
        return {
            scene,
        };
    }
}