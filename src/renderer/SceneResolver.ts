import { VideoBlueprint, Scene } from "@/types/blueprint";

export class SceneResolver {
    static getCurrentScene(
        blueprint: VideoBlueprint,
        currentSecond: number
    ): Scene | null {
        return (
            blueprint.scenes.find(
                (scene) =>
                    currentSecond >= scene.start &&
                    currentSecond < scene.end
            ) ?? null
        );
    }
}