import Link from 'next/link'
import React, { useState } from "react";
import classnames from "classnames";
import Image from 'next/image';
import logo from '../../public/workflow-mark-indigo-500.svg'
import styled from 'styled-components'

const navigation = [
  { id:'1',name: 'Portfolio', href: 'works' },
  { id:'2',name: 'Features', href: 'features' },
  { id:'4',name: 'Marketplace', href: '#' },
  { id:'5',name: 'Company', href: '#' },
]

const ImageContainer = styled.div`
    position: absolute;
    right:1rem;
    top:1rem;
    
`
export default function Header2(){
    const [navbarOpen, setNavbarOpen] = useState(false);

    return(
        
         <>
            <div className="flex w-full top-0 bg-slate-800 backdrop-filter backdrop-blur-lg bg-opacity-50 items-center py-4 shadow-2xl z-50 fixed">
            <div className="w-9/12 flex pl-5">
                <Link href="/">
                    <a className="flex">
                    <Image
                        className="h-8 w-8 hover:rotate-45"
                        src={logo}
                        alt="Logo"
                        width={30}
                        height={30}
                        />
                    <span className="self-center text-lg pl-3 font-bold whitespace-nowrap text-slate-50 dark:text-white">Robby Imam</span>
                    </a>
                </Link>
                
                </div>
                <div className="w-6/12 hidden md:block">
                    <div className="flex items-center justify-center">
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navigation.map((item) => (
                                    <Link key={item.id} href={item.href}>
                                        <a  className=" hover:bg-gray-600 hover:underline-offset-4 text-white px-3 py-2 rounded-md text-sm font-medium font-mono">
                                            {item.name}
                                        </a>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="w-9/12 text-right flex justify-end -mr-46">

                    {/* <div onClick={() => setNavbarOpen(true)} className="shadow-lg bg-slate-800/10 cursor-pointer hover:bg-slate-500 hover:animate-pulse drop-shadow-md hover:drop-shadow-xl rounded-md p-2">
                    <Image src="/menu.svg" className="inline-block  " layout='fill'  />
                    </div> */}
                </div>
                <div className="w-9/12 flex md:hidden justify-end mr-5">

                    <div onClick={() => setNavbarOpen(true)} className="shadow-lg bg-slate-800/10 cursor-pointer hover:bg-slate-500 hover:animate-pulse drop-shadow-md hover:drop-shadow-xl rounded-md p-2">
                    <Image src="/menu.svg" className="inline-block  "  width={30} height={30} alt="Menu"   />
                    </div>
                </div>
            </div>

            <div className={classnames(" fixed z-50 top-0 h-full w-full p-10 md:hidden transition-all bg-slate-800 backdrop-filter backdrop-blur-lg bg-opacity-50", navbarOpen ? "right-0" : "-right-full")}>
                <div className='group rounded-md '>
                    <ImageContainer >
                        <Image src="/x.svg" className=" group-hover:rotate-45 transition  " alt="Close Menu" onClick={() => setNavbarOpen(false)} width={40}height={40} />
                    </ImageContainer>
                </div>
                <ul>
                    {navigation.map((item) => (
                        <li key={item.id} className='py-5'>
                            <Link  href={item.href}>
                                <a  className=" hover:bg-gray-700 text-white px-3 py-3  rounded-md text-lg font-medium">
                                    {item.name}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
      
    )
}