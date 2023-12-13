export default function About(){

    return (

        <section className="flex justify-center">

            <div className="flex w-[70%] overflow-hidden ">  
                
                <div className=" flex flex-col justify-center w-full items-center">
                    <h2 className=" text-[25px] ">Sobre nos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi vel soluta odit sapiente exercitationem ad et ab quidem deleniti tempore sequi aliquid saepe rerum, 
                    accusantium fuga repudiandae? Porro, ipsum tempora!</p>

                    <div className="flex flex-col gap-10 mt-4 p-10 w-80 justify-center items-center">
                        <h1 className="ml-4">Acesse nossas redes</h1>
                        <a href="" className="border-2 border-sky-200 rounded-xl pr-4 py-2 flex items-center justify-center"><img src="instagram.png" alt="" className="w-20"/> Instagram</a>
                        <a href="" className="border-2 border-sky-200 rounded-xl pr-4 py-2 flex items-center justify-center"><img src="whatsapp.png" alt="" className="w-11 mx-4"/> WhatsApp</a>
                        
                    </div>
                    

                </div>
                    
                <div className="">
                    <img src="img-about-home-.png" className="" alt="" />
                </div>

            </div>
            

        </section>

    )

}