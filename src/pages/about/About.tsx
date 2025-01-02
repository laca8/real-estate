import { House } from "lucide-react"
import Teams from '../../components/about/Teams'
import Professional from "../../components/about/Professional"



const About = () => {
    return (
        <div className=" h-full">
            <div className=" bg-gray-50 dark:bg-gray-900 h-full p-10">
                <div className="text-center w-1/2 m-auto flex flex-col gap-4 ">
                    <h1 className="text-3xl font-bold animate-fadeInDown animation-duration-100 animation-delay-200">Our Mission</h1>
                    <p className="text-lg font-semibold text-gray-400 animate-fadeInDown animation-duration-100 animation-delay-100">
                        To empower individuals and families in their journey to find the perfect home through innovative solutions, exceptional service, and unwavering commitment to their success.
                    </p>
                </div>
                <div className="text-center m-auto flex flex-col gap-10 mt-10 ">
                    <h3 className="text-3xl font-bold animate-fadeInDown animation-duration-100 animation-delay-75">Our Values</h3>
                    <div className="grid grid-flow-row grid-cols-3 max-md:grid-cols-1 gap-4 text-left transition-all  ease-out ">
                        {
                            Array(6).fill(0).map((_, i) => (
                                <div key={i} className={`p-6 bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col gap-2 shadow-md animate-fadeInDown  transition-all transform animation-delay-${i}00 animation-duration-${i}00  `}>

                                    <House className="w-10 h-10 bg-gray-100 dark:bg-gray-700 p-2 rounded-sm" />
                                    <h4 className="text-2xl font-semibold">Integrity</h4>
                                    <p className="text-lg font-semibold text-gray-400">
                                        We are committed to honesty, transparency, and fairness in all our dealings.
                                    </p>
                                </div>

                            ))
                        }


                    </div>
                </div>
            </div>
            <Teams />
            <Professional />
        </div>

    )
}
export default About