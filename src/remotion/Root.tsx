import { Composition } from "remotion";
import { Video } from "./Video";
import { VideoBlueprint } from "@/types/blueprint";

const mockBlueprint: VideoBlueprint = {
  title: "Apple AI",
  totalDuration: 40,
  scenes: [
    {
      id: 1,
      start: 0,
      end: 3,

      content: {
        title: "Apple introduces a new AI chip.",
        subtitle: "Scene 1",
      },

      visualType: "tech",
      animation: "zoom_in",
      background: "tech",
      layout: "hero",
      transition: "cut",
      media: {
        search: "Apple keynote stage",
      },
      musicMood: "epic",
      voiceEmotion: "excited",
    },
    {
      id: 2,
      start: 3,
      end: 7,

      content: {
        year: "2023",
        title: "The chip is twice as fast as before.",
        subtitle: "Scene 2",
      },

      visualType: "ai",
      animation: "fade",
      background: "tech",
      layout: "timeline",
      transition: "cut",
      media: {
        search: "Apple keynote stage",
      },
      musicMood: "epic",
      voiceEmotion: "excited",
    },
    {
      id: 3,
      start: 7,
      end: 10,

      content: {
        leftTitle: "Traditional",
        rightTitle: "AI Engine",

        leftPoints: ["Manual", "Slow", "Expensive"],

        rightPoints: ["Automatic", "Fast", "Affordable"],
      },

      visualType: "ai",
      animation: "fade",
      background: "ai",
      layout: "comparison",
      transition: "cut",

      media: {
        search: "Artificial intelligence",
      },

      musicMood: "epic",
      voiceEmotion: "excited",
    },
  ],
};

export const RemotionRoot = () => {
  return (
    <Composition
      id="AI-Video"
      component={Video as React.ComponentType<any>}
      width={1080}
      height={1920}
      fps={30}
      durationInFrames={300}
      defaultProps={{
        blueprint: mockBlueprint,
      }}
    />
  );
};
