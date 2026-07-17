import React from "react";
import { Theme } from "../../theme/Theme";

interface Props {
  children: React.ReactNode;
}

export const Title = ({ children }: Props) => (
  <h1
    style={{
      fontSize: Theme.typography.hero,
      color: Theme.colors.text,
      fontWeight: 800,
      textAlign: "center",
      margin: 0,
    }}
  >
    {children}
  </h1>
);
