import React from "react";
import { Theme } from "./Theme";

interface TextProps {
  children: React.ReactNode;
}

export const HeroTitle = ({ children }: TextProps) => (
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

export const Subtitle = ({ children }: TextProps) => (
  <p
    style={{
      fontSize: Theme.typography.subtitle,
      color: Theme.colors.secondaryText,
      textAlign: "center",
      marginTop: Theme.spacing.md,
      marginBottom: 0,
    }}
  >
    {children}
  </p>
);

export const BodyText = ({ children }: TextProps) => (
  <p
    style={{
      fontSize: Theme.typography.body,
      color: Theme.colors.text,
      lineHeight: 1.5,
      margin: 0,
    }}
  >
    {children}
  </p>
);
