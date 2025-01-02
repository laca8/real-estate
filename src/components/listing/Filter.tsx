import { ArrowUpDown, CircleDollarSign, HouseIcon, MapPin, SlidersHorizontal } from 'lucide-react'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


import { Slider } from "@/components/ui/slider";
import { useState } from 'react';
type Props = {
    loc: string,
    type: string,
    sort: string,
    price: number,
    setLoc: (loc: string) => void,
    setType: (type: string) => void,
    setSort: (sort: string) => void,
    setPrice: (price: number) => void
}
const Filter = ({ loc, type, sort, setLoc, setSort, setType }: Props) => {
    const [show, setShow] = useState<boolean>(false)
    const handleShow = () => {
        setShow(!show)
    }

    return (
        <div>
            <div className='grid grid-cols-11 max-md:grid-cols-1  justify-between items-center gap-4 p-4 shadow-md'>
                <input value={loc} onChange={(e) => setLoc(e.target.value)} type="text" className='col-span-10 p-2 bg-gray-50 dark:bg-black rounded-sm ' placeholder="Search by location and property type" />
                <button onClick={handleShow} className='flex flex-row items-center gap-2 rounded-sm   border-2  p-2 hover:bg-gray-50 hover:dark:bg-black text-center'><SlidersHorizontal className='w-10' /><span className='text-xl'>Filter</span></button>
            </div>
            {
                show && (
                    <div className='grid grid-cols-4 max-md:grid-cols-1  w-full  justify-between items-center p-4  gap-4 shadow-md '>
                        <div className='w-full flex flex-col   gap-4'>
                            <label className='flex flex-row items-center gap-2  p-2'>
                                <MapPin />
                                <span className='text-xl'>Location</span>
                            </label>
                            <Select value={loc} onValueChange={(value) => setLoc(value)} >
                                <SelectTrigger className="h-12 bg-gray-50 dark:bg-gray-900">
                                    <SelectValue placeholder="Select a Location" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup >
                                        <SelectLabel>North America</SelectLabel>
                                        <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                                        <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                                        <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                                        <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                                        <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                                        <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                                    </SelectGroup>

                                </SelectContent>
                            </Select>


                        </div>

                        <div className='w-full flex flex-col  gap-4  '>
                            <label className='flex flex-row items-center gap-2  p-2'>
                                <HouseIcon />
                                <span className='text-xl'>Property Type</span>
                            </label>
                            <Select value={type} onValueChange={(value) => setType(value)}>
                                <SelectTrigger className="h-12 bg-gray-50 dark:bg-gray-900">
                                    <SelectValue placeholder="Select a Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>All Types</SelectLabel>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>


                        </div>

                        <div className='w-full flex flex-col  gap-4  '>
                            <label className='flex flex-row items-center gap-2  p-2'>
                                <CircleDollarSign />
                                <span className='text-xl'>Price</span>
                            </label>
                            <Slider

                                defaultValue={[50]}
                                max={100}
                                step={1}
                                // className={cn("w-[60%]")}
                                className="h-12 "

                            />


                        </div>
                        <div className='w-full  flex flex-col  gap-4  '>
                            <label className='flex flex-row items-center gap-2  p-2'>
                                <ArrowUpDown />
                                <span className='text-xl'>Sort By</span>
                            </label>
                            <Select value={sort} onValueChange={(value) => setSort(value)}>
                                <SelectTrigger className="h-12 bg-gray-50 dark:bg-gray-900">
                                    <SelectValue placeholder="Default" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Price</SelectLabel>
                                        <SelectItem value="htl">High To Low</SelectItem>
                                        <SelectItem value="lth">Low To High</SelectItem>

                                    </SelectGroup>
                                </SelectContent>
                            </Select>


                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Filter