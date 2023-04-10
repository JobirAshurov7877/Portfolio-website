
import { Button } from '@mui/material';
import { VscCloudDownload } from 'react-icons/vsc'
import { MdOutgoingMail } from 'react-icons/md'
import pdfFile from '../../images/my resume Jobir Ashurov.pdf';


const handleDownload = () => {
  const link = document.createElement('a');
  link.href = pdfFile;
  link.download = 'Resume: Jobir Ashurov ';
  link.click();
}

const DownloadPDFButton = () => {
  return (
    <>
      <Button className='InfoBtn' style={{ background: 'radial-gradient(523px at 7.1% 19.3%, rgb(147, 15, 255) 2%, rgb(5, 49, 255) 100.7%)', color: '#fff', padding: "10px 15px" }} onClick={handleDownload}>
        Download Resume
        {<VscCloudDownload  style={{fontSize:"20px", marginLeft:'5px'}} /> }
      </Button>

      <Button className='InfoBtn' style={{
        border:'1px solid   rgb(147, 15, 255)',
        color: '#fff',
        padding:'0px',
        height:'45px'
      
      }}
        variant="outlined">
       <a className='contact' href="mailto:jobirashurov7877@gmail.com">Contact me {<MdOutgoingMail style={{fontSize:"20px", marginLeft:'7px'}} />} </a>
       
      </Button>
    </>


  );
}

export default DownloadPDFButton;