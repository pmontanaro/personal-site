// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image';
import { MapPinIcon } from 'lucide-react';


import profilePic from '../../../public/pic.jpeg'

console.log(profilePic)

export default function Header() {
    return (
        <header className="flex flex-col items-center justify-center">
            <div className="sm:w-24 sm:h-24 flex w-16 h-16 relative">
                <Image alt="Peter" src={profilePic} className="rounded-full" />
            </div>
            <h1>Peter's Blog</h1>
            <div className="flex items-center">
                <MapPinIcon className="w-4 h-4 text-slate-400 mr-1" />
                <p className="text-slate-400 text-xs">
                    Melbourne, Australia
                </p>
            </div>
        </header>
    )
}