import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";

export type ProjectProps = {
    name: string,
    github: string,
    images: string[],
}

export function CarouselComp(project: ProjectProps) {
    return (
        <Carousel className="w-full max-w-80">
            <a href={project.github}>
                <CarouselContent>
                    {project.images.map((image, index) => (
                        <CarouselItem key={index}>
                            <div>
                                <img src={image} alt={project.name}/>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </a>
            <CarouselPrevious size={'sm'} variant={'link'}/>
            <CarouselNext size={'sm'} variant={'link'}/>
        </Carousel>
    )
}