export class Timeline {
    static getLocalFrame(
        globalFrame: number,
        sceneStartSecond: number,
        fps: number
    ): number {
        return globalFrame - sceneStartSecond * fps;
    }

    static getSceneProgress(
        localFrame: number,
        sceneDurationInSeconds: number,
        fps: number
    ): number {
        const totalFrames = sceneDurationInSeconds * fps;

        return Math.min(
            Math.max(localFrame / totalFrames, 0),
            1
        );
    }
}