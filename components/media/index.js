import {FaInstagram,FaLinkedin,FaGithub,FaYoutube} from "react-icons/fa";
export default function Media() {
    
    return (
        <>
            <div className="w-full mx-auto flex justify-center ">
                    <div className="overscroll-y-scroll pb-10 px-4 md:px-4 md:py-12 md:max-w-2xl">
                        <div className="container  border-white rounded-lg mx-auto relative z-10 flex items-center  ">
                            <div className="w-full flex flex-col relative z-10">
                                <p className="flex flex-col font-extrabold font-mono text-4xl text-white py-10 underline underline-offset-4">
                                I ♥
                                </p>
                                <p className="text-justify text-white text-2xl font-mono">Music, Code, Write, Guitar, Comedy, Web Development, Gaming</p>
                            </div>
                            
                        </div>

                        {/* <div className="my-20 w-40 h-40 mx-auto bg-gray-200 flex justify-center items-center group">
                        <div className="bg-gray-400 w-40 h-40 relative z-0">
                        <p className="italic text-bold bd-red-100 font-serif">dasd</p>
                            
                            <div className="absolute inset-0 flex justify-center bg-pink-500 items-center z-10 group-hover:rotate-180 group-hover:bg-pink-500 transition origin-top">
                            </div>
                        </div>

                        </div> */}
                    </div>
            </div>
            <div className="min-w-full flex mx-auto justify-center ">
                    <div className="overscroll-y-scroll pb-10 px-4 md:px-4 md:py-12 md:max-w-2xl">
                        <div className="container  border-white rounded-lg mx-auto relative z-10 flex items-center  ">
                            <div className="md:w-[42rem] z-10">
                                <p className="  font-extrabold font-mono text-4xl text-white py-10 underline underline-offset-4">
                                Find me on social media!
                                </p>
                                <ul className="font-mono text-white -pl-4">
                                    <li className="mb-1">
                                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/robbyimamp/" className="w-fill flex p-3 hover:bg-gray-400 rounded-lg">
                                            <FaInstagram className="flex w-6 h-full"/><span className="ml-2 truncate">@Robbyimamp</span>
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a target="_blank" rel="noreferrer" href="https://github.com/prakoso-id" className="w-fill flex p-3 hover:bg-gray-400 rounded-lg">
                                            <FaGithub className="flex w-6 h-full"/><span className="ml-2 truncate">Prakoso-ID</span>
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/robby-imam-prakoso-10343815b/" className="w-fill flex p-3 hover:bg-gray-400 rounded-lg">
                                            <FaLinkedin className="flex w-6 h-full"/><span className="ml-2 truncate">Robby Imam Prakoso</span>
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCbZg66IMi5R-1D61LWSQoGw" className="w-fill flex p-3 hover:bg-gray-400 rounded-lg">
                                            <FaYoutube className="flex w-6 h-full"/><span className="ml-2 truncate">Robby Imam</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>

                        {/* <div className="my-20 w-40 h-40 mx-auto bg-gray-200 flex justify-center items-center group">
                        <div className="bg-gray-400 w-40 h-40 relative z-0">
                        <p className="italic text-bold bd-red-100 font-serif">dasd</p>
                            
                            <div className="absolute inset-0 flex justify-center bg-pink-500 items-center z-10 group-hover:rotate-180 group-hover:bg-pink-500 transition origin-top">
                            </div>
                        </div>

                        </div> */}
                    </div>
            </div>
        </>
    );
}

