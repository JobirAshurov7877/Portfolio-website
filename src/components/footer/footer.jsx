import Logo from '../../images/Logo.png'
import {SiLinkedin ,SiFacebook,SiTelegram,SiInstagram}  from 'react-icons/si';
import './footer.css'

const Link = [
     {
          Icon: <SiLinkedin />,
          link: 'https://www.linkedin.com/in/jobir-ashurov/'
     },
     {
          Icon: <SiFacebook />,
          link: 'https://www.facebook.com/AshurovJobir'
     },
     {
          Icon: <SiTelegram />,
          link: 'https://t.me/A_jobir'
     },
     {
          Icon: <SiInstagram />,
          link: 'https://www.instagram.com/jobir__ashurov/'
     }
]


const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-wrapper">
          <div className="logo">
               <img  src={Logo} alt="Logo" />
          </div>
          <div className="footer-link">
              {Link.map((item ,index)=>(
               <a key={index} style={{color:"#fff"}} href={item.link} alt='icon' className="link">
                  {item.Icon}
               </a>
              ))}
          </div>
          <div className="copyright-box">
          Copyright: &copy; {new Date().getFullYear() } |    All rights reserved
          </div>
      </div>
    </footer>
  )
}

export default Footer
