import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const MainText = () => {
     return (
          <div className="main-textHeader">
               <h1 className='main-name'>Hi, my name is <span style={{
                    background: '-webkit-linear-gradient(#AD1DEA, #6E72FC)', 
                    WebkitBackgroundClip: "text", 
                    WebkitTextFillColor: "transparent"
               }}>Jobir Ashurov</span></h1>
               <TypeAnimation
                    sequence={["I'm Front-end Developer. I create stunning websites for your business", 2000,
                         'Welcome  to  my personal website!', 2000]}
                    speed={30}
                    wrapper="p"
                    repeat={Infinity} />
          </div>
     )
}

export default MainText
