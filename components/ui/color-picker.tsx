"use client";

import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface ColorPickerProps {
  label: string;
  defaultColor: string;
  onChange: (color: string) => void;
}

export function ColorPicker({ label, defaultColor, onChange }: ColorPickerProps) {
  const [color, setColor] = useState(defaultColor);

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    
    // Convert hex to HSL
    const r = parseInt(newColor.slice(1, 3), 16) / 255;
    const g = parseInt(newColor.slice(3, 5), 16) / 255;
    const b = parseInt(newColor.slice(5, 7), 16) / 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      
      h *= 60;
    }

    // Update CSS variable
    document.documentElement.style.setProperty(
      label,
      `${Math.round(h)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`
    );
    
    onChange(newColor);
  };

  return (
    <div className="flex flex-col gap-2">
      <Label className="text-sm font-medium">{label.replace('--', '')}</Label>
      <div className="flex gap-2">
        <Input
          type="color"
          value={color}
          onChange={(e) => handleColorChange(e.target.value)}
          className="h-10 w-10 p-1 rounded-md cursor-pointer"
        />
        <Input
          type="text"
          value={color}
          onChange={(e) => handleColorChange(e.target.value)}
          className="h-10"
        />
      </div>
    </div>
  );
}