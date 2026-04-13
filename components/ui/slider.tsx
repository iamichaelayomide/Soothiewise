"use client";

import * as React from "react";

import { cn } from "@/utils/cn";

interface SliderProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onValueChange: (value: number) => void;
  label?: string;
}

export function Slider({
  value,
  min = 1,
  max = 5,
  step = 1,
  onValueChange,
  label,
}: SliderProps) {
  return (
    <label className="flex flex-col gap-2">
      {label ? <span className="label text-ink/70">{label}</span> : null}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onValueChange(Number(event.target.value))}
        className={cn(
          "h-3 w-full cursor-pointer appearance-none rounded-full bg-yellow",
          "[&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none",
          "[&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white",
          "[&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-ink"
        )}
      />
    </label>
  );
}
