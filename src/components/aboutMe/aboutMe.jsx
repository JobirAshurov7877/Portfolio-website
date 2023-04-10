
import { FaGithub, FaTelegram, FaFacebook, FaInstagram, FaPhoneAlt } from 'react-icons/fa';

import myImage from '../../images/myImage.jpg'
import './aboutMe.css'
const Link = [
     {
          Icon: <FaGithub />,
          link: 'https://github.com/JobirAshurov7877'
     },
     {
          Icon: <FaTelegram />,
          link: 'https://t.me/A_jobir'
     },
     {
          Icon: <FaFacebook />,
          link: 'https://www.facebook.com/AshurovJobir'
     },
     {
          Icon: <FaInstagram />,
          link: 'https://www.instagram.com/jobir__ashurov/'
     },
     {
          Icon: <FaPhoneAlt />,
          link: 'tel:830-78-77'
     },
]

const AboutMe = () => {
     return (
          <div className="aboutMe" id='aboouMe'>
               <div className="line"></div>

               <div className="about-container">
                    <div className="shape"></div>
                    <div className="profileCard">
                         <div className="card-header">
                              <img src={myImage} alt="myImage" />
                         </div>
                         <div className="card-line"></div>
                         <div className="card-body">
                              <h3 className='name'>Jobir Ashurov</h3>
                              <p>Frontend developer</p>
                              <div className="icons">
                                   {Link.map((item, index) => (
                                        <a key={index} href={item.link} className='card-icon'>
                                             {item.Icon}
                                        </a>
                                   ))}
                              </div>
                         </div>
                    </div>

                    <div className="textBox">
                         <h2 className='title'>About  me  </h2>
                         <p >I am a Frontend developer who can work with dynamic and complex designs.I have experience fixing bugs in existing code and adding functionality as needed, troubleshooting complex issues and completing projects on time.
                              Ability to work with APIs and prepare for responsive design on any device. I mainly create UI using React JS and for design I use Scss and Tailwind Css to create a responsive website. I can get data from Backend and connect it in Frontend.Ability to use GitHub and work in a team.</p>
                    </div>
               </div>
          </div>
     )
}

export default AboutMe
