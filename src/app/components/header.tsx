 export default function Header(){




    return(

        <header className="shadow-lg flex items-center  justify-between pr-4"> 
            <a href=""><img src="/logo.png" alt="" className="w-20 bg-transparent"/></a>
            <nav className="flex justify-end text-xl mx-4 gap-4">     
                <a href="" className="hover:scale-110 transition">Home</a>
                <a href="" className="hover:scale-110 transition">Sobre nos</a>
            </nav>
        </header>
    )


 }