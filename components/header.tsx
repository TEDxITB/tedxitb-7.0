"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { usePathname } from "next/navigation"
import Image from "next/image"

const headerLink: {
    name: string,
    path: string
}[] = [
        {
            name: "Main Event",
            path: "/test/header"
        },
        {
            name: "Magazine",
            path: "/test/header/Magazine"
        },
        {
            name: "TED Quiz",
            path: "/test/header/TEDQuiz"
        },
        {
            name: "Sponsorship",
            path: "/test/header/Spnsorship"
        },
        {
            name: "Documentation",
            path: "/test/header/Documentation"
        }
    ]


export default function Header() {
    const currentPath = usePathname();


    return <header className="text-white flex flex-col">
        <div className="flex flex-row">
            <div className="relative flex align-middle pl-5">
                <Image className="absolute opacity-25 -translate-x-1/2 -translate-y-1/2 top-0 left-20"
                    src={"/effect1.png"} width={400} height={400} alt="" />
                <Image className="static object-contain"
                    src={"/tedxitb-logo-white.png"} alt="Logo" width={200} height={50} />
            </div>
            <section className="ml-auto mr-4 flex flex-row gap-10 p-5 items-center">
                {headerLink.map(({ name, path: url }) => {
                    return <Link href={url} className={`${currentPath == url ? "text-ted-red" : ""}`} key={name}>{name}</Link>
                })}
                <Button>Sign In</Button>
            </section>
        </div>
        <span className="bg-white h-2 w-full bg-gradient-to-b from-ted-red to-black"></span>
    </header>
}