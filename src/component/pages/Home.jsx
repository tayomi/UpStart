import React from 'react'
import Hero from '../Hero'
import Works from '../Works' 
import Save from '../Save'
import Started from '../Started'
import Pricing from '../Pricing'
import Faq from '../Faq'
import Card from '../Card'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Works/>
      <Save/>
      <Started/>
      <Pricing/>
      <Faq/>
      <Card/>
    </div>
  )
}

export default Home