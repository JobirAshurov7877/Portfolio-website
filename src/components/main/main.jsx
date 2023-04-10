import './main.css'
import DownloadPDFButton from './resume'
import BgImgage from '../../images/bg2.png'
import MainText from './mainText'
import { useEffect } from "react"
import Aos from 'aos'
import 'aos/dist/aos.css'

const Main = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
    }, []);

  return (
    <main className='main' id='main'>
      <div className="main-container">
      <div className="main-blur"></div>
        <div className="main-textBox" data-aos="fade-up"  >
         <MainText />
        <div className="InfoBtns">
          <DownloadPDFButton />
        </div>
      </div>
      <div className="main-imageBox">
        <img src={BgImgage} alt="mainImage" width={'750px'} />
      </div>
    </div>
    </main >
  )
}

export default Main
