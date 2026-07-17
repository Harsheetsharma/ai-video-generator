import React from "react";
import { Theme } from "../../theme/Theme";

interface Props {
  children: React.ReactNode;
}

export const BodyText = ({ children }: Props) => (
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
