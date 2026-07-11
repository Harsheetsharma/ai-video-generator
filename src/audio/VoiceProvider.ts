import { Scene } from "@/types/blueprint";
import { SceneAudio } from "@/types/audio";

export class VoiceProvider {
    static async getVoice(scene: Scene): Promise<SceneAudio> {
        return {
            src: "",
            duration: scene.end - scene.start,
        };
    }
}