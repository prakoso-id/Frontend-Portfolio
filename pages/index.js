import Hero from '../components/hero'
import Header from '../components/header2'
import Skills from '../components/Skills'
import Media from '../components/Media'

import Partikel from '../components/particles-back'


export default function Home() {
  return (
    <div className="from-blue-100 via-blue-300 to-blue-500 bg-gradient-to-br">
      <Header ></Header>
      <Hero></Hero>
      <Skills></Skills>
      <Media></Media>
      <Partikel className="z-0"></Partikel>
    </div>
  )
}
