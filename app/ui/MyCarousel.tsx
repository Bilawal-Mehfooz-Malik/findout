import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/app/lib/utils";

interface CustomCarouselProps {
  children: React.ReactNode[];
  className?: string;
}

export function MyCarousel({ children, className }: CustomCarouselProps) {
  return (
    <Carousel className={cn(className)}>
      {/* Carousel navigation */}
      <div className="flex items-center justify-end w-full mb-2">
        <div className="hidden sm:flex gap-2">
          <CarouselPrevious className="h-8 w-8" />
          <CarouselNext className="h-8 w-8" />
        </div>
      </div>

      {/* Carousel content */}
      <CarouselContent>
        {children.map((child, index) => (
          <CarouselItem key={index} className="flex-none py-2">
            {child}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
