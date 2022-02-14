
export default function Skills(props) {
    
    return (
        <>
            <div className="w-full mx-auto flex justify-center ">
                    <div className="overscroll-y-scroll pb-10 pl-4 pr-1 md:px-4 md:py-12 md:max-w-2xl">
                        <div className="container  border-white rounded-lg mx-auto relative z-10 flex items-center  ">
                            <div className="w-full flex flex-col relative z-10">
                                <p className="flex flex-col font-extrabold font-mono text-4xl text-white py-10 underline underline-offset-4">
                                Bio
                                </p>
                                <ol className="relative border-l border-gray-200 dark:border-gray-700 font-mono">                  
                                    <li className="mb-7 ml-4">
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                        <time className="mb-1 text-sm  leading-none font-semibold text-gray-400 dark:text-gray-500">October 1996</time>
                                        <h3 className="text-lg font-semibold text-gray-200 dark:text-white">Born in Jakarta, Indonesia</h3>
                                    </li>
                                    <li className="mb-7 ml-4">
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Februari - April 2017</time>
                                        <h3 className="text-lg font-semibold text-gray-200 dark:text-white">Internship as a frontend web developer at Leads.id</h3>
                                    </li>
                                    <li className="mb-7 ml-4">
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2018</time>
                                        <h3 className="text-lg font-semibold text-gray-200 dark:text-white">Completed the Bachelor&apos;s Program in Informatics Engineering at University of pamulang</h3>
                                        <p className="text-base font-normal text-gray-200 dark:text-gray-400">GPA = 3.11 (scale 4)</p>
                                    </li>
                                    <li className="ml-4">
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2019 - December 2021</time>
                                        <h3 className="text-lg font-semibold text-gray-200 dark:text-white">Fullstack Web Developer at Dinas Komunikasi dan Informatika Tangerang (department of communication and informatics Tangerang)</h3>
                                    </li>
                                </ol>
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

