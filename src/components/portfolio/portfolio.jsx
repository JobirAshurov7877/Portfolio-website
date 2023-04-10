import './portfolio.css'
import FilterBtn from './filterBtn'
import { PortfolioData } from '../constants'
import { useState } from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
import { motion } from 'framer-motion'





const Portfolio = () => {

  const allCatergories = ["All", ...new Set(PortfolioData.map(item => item.category))]

  const [menuItem, setMenuItem] = useState(PortfolioData);
  const [buttons, setButtons] = useState(allCatergories);


  const filter = (button) => {
    if (button === "All") {
      setMenuItem(PortfolioData)
      return
    }
    const filterData = PortfolioData.filter(item => item.category === button)
    setMenuItem(filterData)
  }

  return (
    <div className='portfolio-container' id='Portfolio'>
      <div className="title">Portfolio</div>
      <FilterBtn buttons={buttons} filter={filter} />

      <motion.div layout className="portfolio-box">
        {menuItem.map(item => (
          <motion.div layout key={item.id} className='portfolio-card'>
            <div className="imageBox">
              <img className='portfolio-img' src={item.image} alt="" />
            </div>
            <div className="cardBody">
            
              <div className="card-title">{item.title}</div>
              <div className="card-desc">{item.type}</div>

              <div className="code-linkBox">
                <a target='_blank' href={item.gitHubCode} className='portfolio-link'><BsGithub className='icon' /></a>
                <a target='_blank' href={item.link} className='portfolio-link'><BiLinkExternal className='icon' /></a>
              </div>


            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Portfolio
