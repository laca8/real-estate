import React, { useEffect } from "react"
import { house } from '../../types/type'
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Bath, Bed, LandPlot, MapPin, MoveRight } from "lucide-react"
type Props = {
    data: house[]
    loc: string,
    type: string,
    price: number,
    sort: string,
}
const Items = ({ data, loc, sort, type, price }: Props) => {

    const [arr, setArr] = React.useState<house[]>(data)
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    useEffect(() => {
        if (loc == '' || type == '' || price == 0 || sort == 'lth') {
            setArr(data?.sort((a, b) => a.price - b.price))
        }
        setArr(data?.filter((x) => x.location == loc || x.type.area == type))
        if (sort == 'lth') {
            setArr(data?.sort((a, b) => a.price - b.price))
        } else if (sort == 'htl') {
            setArr(data?.sort((a, b) => b.price - a.price))
        }

    }, [loc, type, sort, price, data])
    return (
        <div className="container grid grid-flow-row grid-cols-3 max-md:grid-cols-1 gap-4 text-left p-4">
            {
                arr.map((item, i) => (
                    <div key={i} className={` bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col gap-4 shadow-md  w-full `} >
                        <Carousel
                            plugins={[plugin.current]}
                            onMouseEnter={plugin.current.stop}
                            onMouseLeave={plugin.current.reset}
                            className="rounded-t-lg overflow-hidden w-full">
                            <CarouselContent>
                                {item?.images.map((img, index) => (
                                    <CarouselItem key={index}>
                                        <div className="">

                                            <img src={img} alt="house"
                                                width={800}
                                                height={450}
                                                className="w-full object-cover aspect-[16/9] hover:scale-105 transition-all duration-300"
                                            />



                                        </div>

                                    </CarouselItem>

                                ))}

                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />

                        </Carousel>

                        <div className="flex flex-col gap-2 p-6">
                            <div className="flex justify-between text-xl font-bold">
                                <span>{item.title}</span>
                                <span>${item.price}</span>
                            </div>
                            <div className="flex gap-2 text-lg">
                                <MapPin />

                                <p className="text-gray-400">{item.location}</p>
                            </div>
                            <div className="flex flex-row justify-between gap-2 text-lg text-gray-400">
                                <div className="flex items-center justify-center gap-2 " >
                                    <Bed />
                                    <span>

                                        {item.type.bedroom} Beds
                                    </span>

                                </div>
                                <div className="flex items-center justify-center gap-2 " >
                                    <Bath />
                                    <span>
                                        {item.type.bathroom} Baths
                                    </span>

                                </div>

                                <div className="flex items-center justify-center gap-2 " >
                                    <LandPlot />
                                    <span>
                                        {item.type.area}
                                    </span>

                                </div>
                            </div>
                        </div>
                        <div className="flex w-full p-6">
                            <button className="flex items-center justify-center h-12  gap-2 w-full dark:bg-white bg-gray-300 p-4 text-black rounded-md font-semibold text-lg" >
                                <span>View Details</span>
                                <MoveRight />
                            </button>
                        </div>
                    </div>

                ))
            }


        </div>
    )
}

export default Items