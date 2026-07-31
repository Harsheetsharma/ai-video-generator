import { Scene } from "@/types/blueprint";

interface HeroLayoutProps {
  scene: Scene;
}

export const QuoteLayout = ({ scene }: HeroLayoutProps) => {
  if (scene.layout !== "quote") return null;
  return (
    <>
      <h1>{scene.content.author}</h1>
      <p>{scene.content.quote}</p>
    </>
  );
};
