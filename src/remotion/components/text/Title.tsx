import React from "react";
import { Theme } from "../../theme/Theme";

interface Props {
  children: React.ReactNode;
  fontSize?: number;
  textAlign?: "left" | "center" | "right";
  color?: string;
  fontWeight?: number;
}

export const Title = ({
  children,
  fontSize = Theme.typography.hero,
  textAlign = "center",
  color = Theme.colors.text,
  fontWeight = 800,
}: Props) => (
  <h1
    style={{
      fontSize,
      color,
      fontWeight,
      textAlign,
      margin: 0,
    }}
  >
    {children}
  </h1>
);
