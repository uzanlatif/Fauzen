'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';
import Carousel from '../ui/carousel-bits';
import Image from "next/image"

import {
  ChevronRight,
  Lightbulb,
  Factory,
  Cpu,
  PenTool,
  Sparkles,
} from 'lucide-react';

const categories = [
  { name: 'Highlights', icon: Sparkles },
  { name: 'Industries', icon: Factory },
  { name: 'Solutions', icon: Lightbulb },
  { name: 'Technology', icon: Cpu },
  { name: 'Innovation', icon: Sparkles },
  { name: 'Design', icon: PenTool },
];

const caseStudyItems = [
  {
    title: 'Project Alpha',
    description: 'Revolutionary mobile app design for seamless user experience',
    tags: ['Mobile', 'UX Design'],
    image:
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=60',
  },
  {
    title: 'Beta Launch',
    description: 'E-commerce platform transformation with AI integration',
    tags: ['AI', 'E-commerce'],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
  },
  {
    title: 'Gamma Series',
    description: 'Enterprise-level cloud solution architecture',
    tags: ['Cloud', 'Enterprise'],
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60',
  },
];

export function CaseStudy() {
  const [selectedCategory, setSelectedCategory] = useState('Highlights');
  console.log(selectedCategory)
  return (
    <section className="py-24">
      <Card   className="max-w-7xl p-4 mx-auto px-4 sm:px-6 lg:px-8 justify-items-center w-[fit-content]">
        <div>
          <div className="flex items-left  mb-6">
            <h2 className="text-3xl text-left font-bold">Case Study</h2>
          </div>

          <div className="flex flex-col md:flex-row w-[fit-content] gap-12 self-center">
            {/* Left: Vertical Category List */}
            <div className="w-[300px]">
              <ScrollArea className=" ">
                <div className="pr-4 space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category.name}
                      variant={
                        selectedCategory === category.name ? 'default' : 'ghost'
                      }
                      className="w-full justify-start gap-2"
                      onClick={() => setSelectedCategory(category.name)}
                    >
                      <category.icon size={16} />
                      {category.name}
                    </Button>
                  ))}
                </div>
              </ScrollArea>
            </div>

            {/* Center: Featured Case Study */}
            <div className=" flex items-center justify-center">
              <div className="relative group cursor-pointer">
                <div className="" />
                 <Image
                  src={"https://static.vecteezy.com/system/resources/thumbnails/042/535/463/small/sport-shoes-free-png.png"}
                  width={250}
                  height={250}
                  alt='Logo Sepatu'
                 />
              </div>
            </div>

            {/* Right: Case Study Carousel */}
            <div style={{ position: 'relative' }}>
              <Carousel
                autoplay={true}
                autoplayDelay={3000}
                pauseOnHover={true}
                loop={true}
                round={false}
              />
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
