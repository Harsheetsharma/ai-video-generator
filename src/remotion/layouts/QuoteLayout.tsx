import { Scene } from "@/types/blueprint";

interface HeroLayoutProps {
  scene: Scene;
}

export const QuoteLayout = ({ scene }: HeroLayoutProps) => {
  return (
    <>
      <h1>{scene.text}</h1>
      <p>{scene.caption}</p>
    </>
  );
};
