
const Process = () => {
    return (
        <div className=" h-full">
            <div className="  h-full p-10">
                <div className="text-center w-1/2 m-auto flex flex-col gap-4 animate-fadeInDown duration-1000">
                    <h1 className="text-3xl font-bold">Our Service Process</h1>
                    <p className="text-lg font-semibold text-gray-400">
                        A streamlined approach to help you find and secure your dream property.
                    </p>
                </div>
                <div className="text-center m-auto flex flex-row justify-center gap-10 mt-10">
                    <div className="flex flex-col gap-10 ">
                        {
                            Array(3).fill(0).map((_, i) => (
                                <div key={i} className={`p-6 bg-gray-100 dark:bg-gray-800 rounded-lg text-left w-[450px] flex flex-col gap-2 shadow-md animate-fadeInLeft animation-duration-${i}00 animation-delay-${i}00  `}>
                                    <h4 className="text-2xl font-semibold">Property Search</h4>
                                    <p className="text-lg font-semibold text-gray-400">
                                        Access our extensive database of apartments with advanced filters to find your perfect match
                                    </p>
                                </div>

                            ))}


                    </div>
                    <div className="border-2">
                    </div>
                    <div className="flex flex-col gap-10 ">
                        {
                            Array(3).fill(0).map((_, i) => (
                                <div key={i} className={`p-6 bg-gray-100 dark:bg-gray-800 rounded-lg text-left w-[450px] flex flex-col gap-2 shadow-md animate-fadeInRight animation-duration-${i}00 animation-delay-${i}00  `}>
                                    <h4 className="text-2xl font-semibold">Property Search</h4>
                                    <p className="text-lg font-semibold text-gray-400">
                                        Access our extensive database of apartments with advanced filters to find your perfect match
                                    </p>
                                </div>

                            ))}


                    </div>
                </div>

            </div>

        </div>
    )
}

export default Process