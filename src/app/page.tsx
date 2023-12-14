

import Banner from './components/banner'
import About from './components/about'
import Faixa from './components/faixa'
import About2 from './components/about2'
import Footer from './components/footer'

export default function Home() {
 
 let nome: string = 'conteudo'
 
  return (
    <>

      
      <Banner title='Bem vindo!'/>
      <About/>
      <Faixa/>
      <About2/>
      <Footer/>
    </>
  )
}
