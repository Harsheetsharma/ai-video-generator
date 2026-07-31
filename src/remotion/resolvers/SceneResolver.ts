import { Scene } from "@/types/blueprint";

export interface ResolvedScene {
    scene: Scene;

    theme: string;

    fontFamily: string;

    animationPreset: string;
}

export class SceneResolver {
    static resolve(scene: Scene): ResolvedScene {
        return {
            scene,

            theme: scene.style?.theme ?? "dark",

            fontFamily: "Inter",

            animationPreset: scene.animation,
        };
    }
}