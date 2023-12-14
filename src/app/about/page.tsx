
import Subheader from "./components/subheader"
import Products from "./components/products"
import Banner from "../components/banner"
import Footer from "../components/footer"

export default function Home() {
 
 let nome: string = 'conteudo'
 
  return (
    <>

      <Subheader/>
      <Banner title="Loja"/>
      <Products title="Produtos em promoção"/>
      <Products title="Ofertas da semana"/>
      <Products title="Oferta "/>
      <Footer/>
    </>
  )
}
