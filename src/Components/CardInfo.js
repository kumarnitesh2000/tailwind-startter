import React,{useEffect} from "react";
import "./Final_Info.css";
import GP from "../images/google-pay-seeklogo.com.svg";
import Paytm from "../images/paytm-1.svg";
import PP from "../images/image.png";
import Amazon from "../images/amazon-icon-1.svg";
import Upi from "../images/upi-ar21.svg";
import Bhim from "../images/bhim-upi 1.svg";
import base_url from '../config';
import Loding from './Loding'
import Navbar_2 from "./Navbar_2";
import ShareInfo from "./ShareInfo";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import config from '../config'
import Not from '../images/undraw_page_not_found_su7k.svg'
function CardInfo(props) {
    let [isOpen, setIsOpen] = React.useState(false);
    const [filterVal,setfilterVal] = React.useState('none');
    const [link,setLink] = React.useState(config.frontend_url+window.location.pathname);
    const upiId = window.location.pathname.split('/')[2];
    const [data,setdata] = React.useState();
    const [isExist,setisExist] = React.useState(true);
    function openModal() {
        setIsOpen(true)
        setfilterVal('blur(18px) brightness(70%)');
    }
    function closeModal() {
        setfilterVal('none');
        setIsOpen(false)
    }
    useEffect(() => {
        fetch(base_url.backend_url+'/api/pay/getupiCard/'+upiId, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => {
            if(data.statusCode === 404){
              setisExist(false);
            }else if(data.vpa){
              setdata(data);
            }
        })
    }, [])
    const printDocument = () => {
        const input = document.getElementById('printMe');
        html2canvas(input,{scrollY: -window.scrollY})
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            console.log(imgData);
            const pdf = new jsPDF('landscape');
            pdf.addImage(imgData, 'JPEG', 75, 20);
            //pdf.output('dataurlnewwindow');
            pdf.save(`${data.vpa}.pdf`);
        });
    }
    return (
        <React.Fragment>
            <ShareInfo isOpen={isOpen} closeModal={closeModal} link={link} setLink={setLink}/>
            <div className="blur" style={{filter:filterVal}}>
            {data ? (<Navbar_2 />) : (null)}
            {!isExist ? (<Navbar_2 />) : (null)}
        <div className="main_right" style={{display:'grid', placeItems:'center', height:'100vh'}}>
            {data ? (
                <React.Fragment>
                    <div id="printMe">
        <div className="card-final p-4" style={{backgroundColor:data.bgColor}}>
          <div className="card-final-inner flex items-center">
            <div className="circle mb-10 border-4">
              <img src={data.logo} alt="logo"/>
            </div>
            <div className="card-owner">
              <h3 className="font text-4xl mt-4 ">{data.payeeName}</h3>
              <img src={data.qrcode} className="qr" alt="qr"/>
              <div className="other-pay flex items-center mb-12">
                <div className="pre flex items-center">
                  <img src={GP} alt="Google Pay" className="pay_icon" />
                  <img src={Paytm} alt="Paytm" className="pay_icon" />
                  <img src={PP} alt="PhonePe" className="pay_icon-1" />
                  <img src={Amazon} alt="Amazon" className="pay_icon-1" />
                </div>
                <div className="next flex items-center justify-center">
                  <img src={Upi} alt="Upi" />
                  <img src={Bhim} alt="Bhim" />
                </div>
              </div>
            </div>
          </div>
        </div> 
        </div> 
        <div className="buttons flex items-center justify-between margin-btn">
                    <button className="submit-btn bg-green-500 rounded outline-none border-none p-2 font width-1 text-2xl text-white"
                    onClick={openModal}
                    >
                    Share
                  </button>
                  <button className="submit-btn bg-green-500 ml-2 rounded outline-none border-none p-2 font width-1 text-2xl text-white"
                  onClick={printDocument}  
                  >
                    Dowload
                  </button>
        </div>          
        </React.Fragment>
        ): (<div>
          {!isExist ? (<div><img src={Not} alt='404 Not Found' style={{width:'600px', height:'600px', marginTop:'-200px'}}/></div>) : (<Loding />)}
          </div>)}
        </div>
      </div>
      </React.Fragment>
    );
}

export default CardInfo;