import './mySecvices.css'
import SecvicesCard from './secvicesCard'
import { BsCodeSlash } from 'react-icons/bs'
import { MdLaptop, MdDesignServices } from 'react-icons/md'


const MySecvices = () => {
  return (
    <div className='mySecvices' id='myServices'>
      <div className="row">
        <h2 className="section-heading">My Services</h2>
      </div>
      <div className="row">
        <SecvicesCard icon={<BsCodeSlash />}
          title={"Web Developement"}
          decription={'Web development encompasses a broad range of tasks from coding, to technical design, to performance of a website or application running on the internet.'} />

        <SecvicesCard icon={<MdLaptop />} title={"Responsive Web Design"}
        decription={'Responsive Web design is the approach that suggests that design and development should respond to the user’s behavior and environment based on screen size, platform and orientation.'} />
        <SecvicesCard icon={<MdDesignServices />} title={"Web Design"}
        decription={"Web design is the creation of websites and pages to reflect a company's brand and information and ensure a user-friendly experience."} />
      </div>
    </div>
  )
}

export default MySecvices
