
import { PiShoppingCartSimpleThin } from "react-icons/pi";


import Link from "next/link";

 export default function Header(){




    return(

        <header className="shadow-lg flex items-center  justify-between pr-4"> 
            <Link href="/"><img src="/logo.png" alt="" className="w-20 bg-transparent"/></Link>
            <nav className="flex justify-end text-xl mx-4 gap-8">     
                <Link href="/" className="hover:scale-110 transition">Home</Link>
                <Link href="/about" className="hover:scale-110 transition ">  Loja</Link>
                <Link href="/about" className="hover:scale-110 transition flex items-center text-3xl"><PiShoppingCartSimpleThin/></Link>
                

            </nav>
        </header>
    )


 }