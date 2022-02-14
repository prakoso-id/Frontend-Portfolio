import Hero from '../components/hero/index.js'
import Header from '../components/header2/index.js'
import Skills from '../components/skills/index.js'
import Media from '../components/media/index.js'

import Partikel from '../components/particles-back.js'


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
