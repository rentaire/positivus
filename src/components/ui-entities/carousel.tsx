import * as React from 'react';
import { useState } from 'react';
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';
import { cn } from '@/utils/cn.ts';
import ArrowRight from '@/assets/svg/arrow-right.svg?react';
import ArrowLeft from '@/assets/svg/arrow-left.svg?react';
import Star from '@/assets/svg/star-4.svg?react';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: 'horizontal';
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}

function Carousel({
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & Omit<CarouselProps, 'orientation'>) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: 'x',
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on('reInit', onSelect);
    api.on('select', onSelect);

    return () => {
      api?.off('select', onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation: 'horizontal',
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn('relative', className)}
        role={'region'}
        aria-roledescription={'carousel'}
        data-slot={'carousel'}
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }: React.ComponentProps<'div'>) {
  const { carouselRef } = useCarousel();

  return (
    <div ref={carouselRef} className={'overflow-hidden'} data-slot={'carousel-content'}>
      <div className={cn('flex gap-x-12', className)} {...props} />
    </div>
  );
}

function CarouselItem({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      role={'group'}
      aria-roledescription={'slide'}
      data-slot={'carousel-item'}
      className={cn('768:basis-auto min-w-0 shrink-0 basis-full', className)}
      {...props}
    />
  );
}

function CarouselPrevious({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
}) {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <button
      data-slot={'carousel-previous'}
      className={cn('size-7 cursor-pointer rounded-full', className)}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className={'text-white'} />
      <span className={'sr-only'}>Previous slide</span>
    </button>
  );
}

function CarouselNext({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
}) {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <button
      data-slot={'carousel-next'}
      className={cn('size-7 cursor-pointer rounded-full', className)}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className={'text-white'} />
      <span className={'sr-only'}>Next slide</span>
    </button>
  );
}

export function CarouselNavigation() {
  const { api } = useCarousel();

  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className={'flex items-center gap-x-5'}>
      {Array.from(Array(count).keys()).map(it => (
        <button key={it} onClick={() => api?.scrollTo(it)} className={'cursor-pointer'}>
          <Star className={cn('size-4', it === current - 1 ? 'text-accent' : 'text-white')} />
        </button>
      ))}
    </div>
  );
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
