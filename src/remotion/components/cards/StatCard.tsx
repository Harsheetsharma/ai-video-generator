import React from "react";
import { AnimatedCard } from "./AnimatedCard";
import { Counter } from "../animations/Counter";

interface StatCardProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

export const StatCard = ({ value, label, suffix, prefix }: StatCardProps) => {
  return (
    <AnimatedCard>
      <Counter from={0} to={value} suffix={suffix} prefix={prefix} />

      <p
        style={{
          fontSize: 42,
          color: "#ddd",
          marginTop: 20,
          textAlign: "center",
        }}
      >
        {label}
      </p>
    </AnimatedCard>
  );
};
