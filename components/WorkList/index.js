import Link from "next/link";
import Image from "next/image";
function  WorkList (props){
    const{data} = props;
    console.log(data.length)
    return (
        <>
            <div className="w-full mx-auto flex justify-center ">
                    <div className="overscroll-y-scroll py-24 px-4 md:px-4 md:py-12 md:max-w-2xl">
                        <div className="container  border-white rounded-lg mx-auto relative z-10 flex items-center  ">
                            <div className="w-full flex flex-col relative z-10">
                                <p className="flex flex-col font-extrabold font-mono text-4xl text-white py-10 underline underline-offset-4">
                                Works
                                </p>
                                <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5">
                                    
                                    
                                    {data.length > 0 ? data.map((item,index) => {
                                        return(
                                            <Link key={index} href={'works/'+item._id}>
                                                <a>
                                                    <div  className="rounded-lg overflow-hidden shadow-2xl bg-slate-200">
                                                        <Image className="w-full" src="https://source.unsplash.com/600x400" alt="Mountain" layoput="fill"/>
                                                        <div className="p-4">
                                                            <div className="font-bold text-xl mb-2">{item.name}</div>
                                                            <p className="text-gray-700 text-base">
                                                            {/* {item.file.map((items,index)=>{
                                                                return (
                                                                    <div><img src={"http://localhost:4000/"+items.url_file} /></div>
                                                                )
                                                            })} */}
                                                            {item.desc}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </Link>
                                        )
                                    }):
                                    <p className="text-white text-center">Data Portfolio tidak ada</p>
                                    }
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
            </div>
        </>
    );
}

export default WorkList

