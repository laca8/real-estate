import { Mail } from "lucide-react"


const Teams = () => {
    return (
        <div className="text-center m-auto flex flex-col gap-10 mt-10 p-10">
            <h3 className="text-3xl font-bold animate-fadeInDown duration-700">Our Teams</h3>
            <div className="grid grid-flow-row grid-cols-4 max-md:grid-cols-1 gap-4 text-left ">
                {
                    Array(4).fill(0).map((_, i) => (
                        <div key={i} className={`p-6 bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col gap-2 shadow-md  animate-fadeInLeft animation-duration-${i}00 animation-delay-${i}00`}>

                            <img className="w-30 h-30 rounded-sm " src={'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ='} />
                            <h4 className="text-2xl font-semibold">Sarah Johnson</h4>
                            <h4 className="text-2xl font-semibold">CEO & Founder</h4>
                            <p className="text-lg font-semibold text-gray-400">
                                With over 15 years in real estate, Sarah leads our team with vision and expertise. She's passionate about helping families find their perfect homes.
                            </p>
                            <div className="mt-10  ">
                                <div className="flex items-center gap-2 p-2 rounded-sm hover:bg-gray-50 hover:dark:bg-slate-900">
                                    <Mail />
                                    <span>sarah@example.com</span>
                                </div>
                            </div>
                        </div>

                    ))
                }


            </div>
        </div>
    )
}

export default Teams