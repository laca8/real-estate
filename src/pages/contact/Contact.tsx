import USAMap from "@/components/contact/Map"
import { Clock, Mail, Map, Phone } from "lucide-react"



const Contact = () => {
    return (
        <div className="p-10">
            <h3 className="text-3xl font-bold">Contact Us</h3>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 w-full mt-4">

                <div className=" w-full">
                    <div className="flex flex-col gap-4 shadow-lg">
                        <div className="flex flex-col gap-2 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                            <h4 className="text-xl font-bold">Contact Information</h4>
                            <div className="flex flex-row gap-2 text-gray-400 mt-2">
                                <Phone />
                                <span>+1 555-211-3444</span>
                            </div>
                            <div className="flex flex-row gap-2 text-gray-400 mt-2">
                                <Mail />
                                <span>contact@example.com</span>
                            </div>
                            <div className="flex flex-row gap-2 text-gray-400 mt-2">
                                <Map />
                                <span>6 Garth rd, Scarsdale, NY 10583</span>
                            </div>
                            <div className="flex flex-col gap-2 ">
                                <div className="flex flex-row gap-2  text-xl mt-2">
                                    <Clock />
                                    <span>Business Hours</span>
                                </div>
                                <div className="flex flex-row gap-2 text-gray-400 mt-2 ml-4">
                                    <span>Monday-Friday:</span>
                                    <span>9:00 AM - 5:00 PM</span>
                                </div>
                                <div className="flex flex-row gap-2 text-gray-400 mt-2 ml-4">
                                    <span>Saturday:</span>
                                    <span>10:00 AM - 2:00 PM</span>
                                </div>
                                <div className="flex flex-row gap-2 text-gray-400 mt-2 ml-4">
                                    <span>Sunday:</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className="shadow-lg">
                        <form className="shadow-lg">
                            <div className="flex flex-col gap-4 mt-4 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                                <h3 className="text-3xl  font-semibold">Send Us a Message</h3>
                                <div className="flex flex-col gap-2">
                                    <label className="text-lg font-bold">Name</label>
                                    <input
                                        type="text"
                                        className="h-12 p-4 bg-gray-200 dark:bg-black rounded-lg"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-lg font-bold">Email</label>
                                    <input
                                        type="email"
                                        className="h-12 p-4 bg-gray-200 dark:bg-black rounded-lg"
                                        placeholder="" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-lg font-bold">Message</label>
                                    <textarea
                                        className="h-32 p-4 bg-gray-200 dark:bg-black rounded-lg"
                                        placeholder=""
                                    />
                                </div>
                                <button className="h-12 bg-gray-200 dark:bg-gray-800  rounded-lg font-bold ">
                                    Send Message
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
                <div className="w-full">
                    <USAMap />
                </div>
            </div>

        </div>
    )
}

export default Contact