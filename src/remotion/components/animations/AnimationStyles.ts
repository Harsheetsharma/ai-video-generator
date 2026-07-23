import { interpolate } from "remotion";

export const fadeInUp = (progress: number, distance = 20) => ({
    opacity: progress,
    transform: `translateY(${interpolate(progress, [0, 1], [distance, 0])}px)`,
});


export const pop = (progress: number) => ({
    opacity: progress,
    transform: `scale(${progress})`,
})

export const growVertical = (progress: number, maxHeight = 180) => ({

    height: interpolate(progress, [0, 1], [0, maxHeight]),

})