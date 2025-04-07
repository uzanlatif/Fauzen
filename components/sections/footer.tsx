"use client"
import {
  Building2,
  Mail,
  Users,
  Briefcase,
  BookOpen,
  Phone,
  Palette,
} from 'lucide-react';
import { ColorPicker } from '@/components/ui/color-picker';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
const footerSections = [
  {
    title: 'Address',
    icon: Building2,
    content: (
      <address className="text-foreground not-italic">
        <Building2 className="inline-block mr-2 mb-1" size={16} />
        123 Innovation Street
        <br />
        Tech District, TD 12345
      </address>
    ),
  },
  {
    title: 'Product',
    icon: Briefcase,
    content: (
      <ul className="space-y-2 text-foreground">
        <li className="flex items-center gap-2">
          <Briefcase size={16} />
          Solutions
        </li>
        <li className="flex items-center gap-2">
          <Briefcase size={16} />
          Services
        </li>
        <li className="flex items-center gap-2">
          <Briefcase size={16} />
          Integration
        </li>
      </ul>
    ),
  },
  {
    title: 'About',
    icon: Users,
    content: (
      <ul className="space-y-2 text-foreground">
        <li className="flex items-center gap-2">
          <Users size={16} />
          Team
        </li>
        <li className="flex items-center gap-2">
          <Users size={16} />
          Career
        </li>
        <li className="flex items-center gap-2">
          <BookOpen size={16} />
          Blog
        </li>
      </ul>
    ),
  },
  {
    title: 'Contact',
    icon: Phone,
    content: (
      <div className="space-y-2 text-foreground">
        <p className="flex items-center">
          <Mail className="mr-2" size={16} />
          contact@fabro.com
        </p>
        <p className="flex items-center">
          <Phone className="mr-2" size={16} />
          +1 (555) 123-4567
        </p>
      </div>
    ),
  },
];

export function Footer() {
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const [colors, setColors] = useState({
    primary: '#000000',
    secondary: '#f4f4f5',
    background: '#ffffff',
    foreground: '#0a0a0a',
  });

  const handleColorChange = (type: keyof typeof colors) => (color: string) => {
    setColors((prev) => ({ ...prev, [type]: color }));
  };
  return (
    <footer className="bg-muted/30 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <section.icon size={18} />
                {section.title}
              </h3>
              {section.content}
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsColorPickerOpen(!isColorPickerOpen)}
            className="rounded-full"
          >
            <Palette size={20} />
          </Button>
        </div>

        {isColorPickerOpen && (
          <div className="fixed bottom-20 right-4 bg-background border rounded-lg shadow-lg p-4 w-80">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold flex items-center gap-2">
                <Palette size={18} />
                Theme Customization
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsColorPickerOpen(false)}
                className="h-8 w-8"
              >
                ×
              </Button>
            </div>
            <ScrollArea className="h-[300px] pr-4">
              <div className="space-y-4">
                <ColorPicker
                  label="--primary"
                  defaultColor={colors.primary}
                  onChange={handleColorChange('primary')}
                />
                <ColorPicker
                  label="--secondary"
                  defaultColor={colors.secondary}
                  onChange={handleColorChange('secondary')}
                />
                <ColorPicker
                  label="--background"
                  defaultColor={colors.background}
                  onChange={handleColorChange('background')}
                />
                <ColorPicker
                  label="--foreground"
                  defaultColor={colors.foreground}
                  onChange={handleColorChange('foreground')}
                />
              </div>
            </ScrollArea>
          </div>
        )}
      </div>
    </footer>
  );
}
