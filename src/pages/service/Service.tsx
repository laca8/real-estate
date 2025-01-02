import Process from "@/components/services/Process"
import { House } from "lucide-react"


const Service = () => {
    return (
        <div className=" h-full">
            <div className="bg-gray-50 dark:bg-gray-900  h-full p-10">
                <div className="text-center w-1/2 m-auto flex flex-col gap-4 animate-fadeInDown duration-1000">
                    <h1 className="text-3xl font-bold">Our Services</h1>
                    <p className="text-lg font-semibold text-gray-400">
                        Comprehensive support throughout your apartment buying journey
                    </p>
                </div>
                <div className="text-center m-auto flex flex-col gap-10 mt-10 ">

                    <div className="grid grid-flow-row grid-cols-3 max-md:grid-cols-1 gap-4 text-left ">
                        {
                            Array(6).fill(0).map((_, i) => (
                                <div key={i} className={`p-6 bg-gray-100 dark:bg-gray-800 rounded-lg text-center flex flex-col gap-2 shadow-md animate-fadeInDown animation-duration-${i}00 animation-delay-${i}00`}>

                                    <House className="w-10 h-10 bg-gray-100 dark:bg-gray-700 p-2 rounded-sm m-auto" />
                                    <h4 className="text-2xl font-semibold">Property Search</h4>
                                    <p className="text-lg font-semibold text-gray-400">
                                        Access our extensive database of apartments with advanced filters to find your perfect match
                                    </p>
                                </div>

                            ))
                        }


                    </div>
                </div>
            </div>
            <Process />
        </div>
    )
}

export default Service