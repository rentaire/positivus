import { TestimonialsData } from '@/domain/main/testimonials/testimonialsData.ts';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui-entities/carousel.tsx';
import s from './testimonialsCarousel.module.scss';
import { cn } from '@/utils/cn.ts';

export function TestimonialsCarousel() {
  return (
    <Carousel
      className={'768:gap-y-31 flex flex-col gap-y-15'}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className={'pl-12'}>
        {TestimonialsData.map((it, index) => (
          <CarouselItem key={index} className={'768:w-[calc(100%-96px-25%)] w-full'}>
            <div className={cn('flex h-full flex-col gap-y-5')}>
              <div
                className={cn(
                  'border-accent 768:px-13 768:py-12 rounded-45 relative mb-6 h-full border-1 p-7 text-white',
                  s.bubble
                )}
              >
                {it.text}
              </div>
              <div className={'flex flex-col pl-15'}>
                <p className={'text-accent'}>{it.name}</p>
                <p className={'text-white'}>{it.position}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className={'768:px-0 flex w-full max-w-[564px] justify-between self-center px-7'}>
        <CarouselPrevious />
        <CarouselNavigation />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
