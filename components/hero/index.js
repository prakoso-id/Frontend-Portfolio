
import { Typewriter } from 'react-simple-typewriter'
export default function Hero(){
    return(
        <div className="w-full mx-auto flex justify-center ">
            <div className="overscroll-y-scroll pt-24  px-3 md:pt-40 md:max-w-2xl">
                <div className="container  border-white rounded-lg mx-auto relative z-10 flex items-center  ">
                    <div className="w-full flex flex-col items-center justify-between relative z-10 py-5">
                        <p className="flex font-extrabold font-mono text-6xl  md:text-6xl text-white md:px-5 h-20">
                        <Typewriter
                                    words={['Music', 'Write', 'Code', 'Prakoso-ID']}
                                    loop={5}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                        </p>
                        <p className="flex font-mono flex-col max-w-lg text-center items-center font-extrabold text-md mt-6 text-white">
                            Hello there! My name is Robby, I&apos;m a full-stack developer based in Indonesia!
                        </p>
                        <a href="#" className="block bg-gray-800 hover:bg-gray-900 py-3 px-4 text-md text-white font-bold uppercase mt-10">
                            Contact Me!
                        </a>
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
    )
}