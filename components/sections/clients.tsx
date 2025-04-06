'use client';

import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const clients = ['OPPO', 'HONDA', 'BALDRYC', 'G33', 'OPPO', 'HONDA'];

export function Clients() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => {
      clearInterval(interval);
    };
  }, [api]);

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl text-center mb-24 font-bold">Our Client</h2>
        <Carousel
          setApi={setApi}
          className="w-full max-w-5xl mx-auto"
          opts={{
            align: 'start',
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {clients.map((client, index) => (
              <CarouselItem
                key={index}
                className="pl-6 md:pl-10 md:basis-1/4 lg:basis-1/4"
              >
                <Image
                  src={
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Pertamina_Logo.svg/2560px-Pertamina_Logo.svg.png'
                  }
                  width={250}
                  height={300}
                  alt="Logo Sepatu"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
