import React from "react";
import { Theme } from "../../theme/Theme";

interface Props {
  children: React.ReactNode;
}

export const Subtitle = ({ children }: Props) => (
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
