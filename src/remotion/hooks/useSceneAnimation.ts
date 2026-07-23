import { interpolate, spring, useVideoConfig } from "remotion";

export const useSceneAnimation = (localFrame: number) => {
    const { fps } = useVideoConfig();
    const yearProgress = spring({
        frame: localFrame,
        fps,
        durationInFrames: 25,
    });

    const dotProgress = spring({
        frame: localFrame - 8,
        fps,
        durationInFrames: 18,
    });

    const lineProgress = spring({
        frame: localFrame - 16,
        fps,
        durationInFrames: 22,
    });

    const titleProgress = spring({
        frame: localFrame - 28,
        fps,
        durationInFrames: 20,
    });

    const subtitleProgress = spring({
        frame: localFrame - 38,
        fps,
        durationInFrames: 18,
    });

    // We'll move all animation logic here.
    return {
        yearProgress,
        dotProgress,
        lineProgress,
        titleProgress,
        subtitleProgress,
    }


};