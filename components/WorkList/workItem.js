import Link from "next/link";
import Image from "next/image";
export const WorkItem = ({ children, id, title, thumbnail }) =>(

    <Link key={id} href={`/works/${id}`}>
        <a>
            <div  className="rounded-lg overflow-hidden shadow-2xl bg-slate-200">
                <Image className="w-full" src={thumbnail} alt="Mountain" layoput="fill"/>
                <div className="p-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">
                    {children}
                    </p>
                </div>
            </div>
        </a>
    </Link>
)