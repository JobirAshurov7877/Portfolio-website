
import './mySecvices.css'
const SecvicesCard = ( {icon , title , decription}) => {
  return (
      <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              {icon}
            </div>
            <div className="secvices-line"></div>
            <h3 className='secvices-title'>{title}</h3>
            <p className='secvices-decription' >{decription}</p>
          </div>
        </div>

  )
}

export default SecvicesCard
