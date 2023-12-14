type ProductProps = {
    title:string
}
import sql from '@/app/db'


export default async function Products(param:ProductProps){

let data = await sql`select * from product `


return(

    <section className="flex justify-center my-10">
        
        <div className=" flex flex-col justify-start items-center w-10/12 gap-10">
            
            <h1 className="mb-4 text-2xl">{param.title}</h1>
            <div className="flex gap-8 ">
                {
                    data.map((product)=>(
                <div className=" w-[200px] ">
                    <img src={product.img} alt="" className='w-[200px] h-[250px]'/>
                    <div className="flex flex-col gap-y-4  ">
                        <p className="text-sm h-[40px] mt-4">{product.desc}</p>
                        <h1 className="text-2xl flex ">R$ {product.price},00</h1>
                    </div>
                </div>
                    ))

                }
            </div>
            

        </div>

    </section>
       





    )




}