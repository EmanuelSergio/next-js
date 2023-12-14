type BannerProps = {
     title:string
 }

export default function Banner(param:{title:string}){

    return(

        <section className="bg-[url('/background-banner.avif')]  h-[70vh] bg-cover flex items-center justify-center">
            <h1 className=" text-9xl text-white  flex justify-center items-center bg-transparent ">{param.title}</h1>
        </section>
    )


}