

const Professional = () => {
    return (
        <div className="text-center m-auto flex flex-col gap-10 mt-10 p-10">
            <h3 className="text-3xl font-bold animate-fadeInDown duration-700">Professional Certifications</h3>
            <div className="grid grid-flow-row grid-cols-1 max-md:grid-cols-1 gap-4 text-left  ">
                {
                    Array(4).fill(0).map((_, i) => (
                        <div key={i} className={`p-6 w-3/4 bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-row items-center m-auto justify-between gap-2 shadow-md animate-fadeInDown ease-in-out transition-all animation-duration-${i}00  animation-delay-${i}00  `}>
                            <div>


                                <h4 className={`text-2xl font-semibold `}>Real Estate License</h4>

                                <p className="text-lg font-semibold text-gray-400 ">
                                    State Real Estate Commission
                                </p>
                            </div>
                            <div className="">
                                <h4 className="text-2xl font-semibold">2010</h4>

                            </div>
                        </div>

                    ))
                }


            </div>
        </div>
    )
}

export default Professional