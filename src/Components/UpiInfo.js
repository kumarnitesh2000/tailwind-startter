import React,{useState} from 'react';
import FinalInfo from './FinalInfo';
import './Final_Info.css'
import NavBar from './Navbar';

function UpiInfo(props) {
    const [step,setStep] = useState(1);
    const [cardInfo,setCardInfo] = useState({
        amount: 0,
        payeeName: "",
        vpa: "",
        reason: "",
        bgColor: "#f36565",
        logo: ''
    });
    const handleChange = (event) =>{
        setCardInfo({...cardInfo,[event.target.id]: event.target.value});
    }
    const nextStep = () => {
        setStep(step+1);
    }
    const skipStep = () => {
        setStep(step+2);
    }
    return (
        <div>
            <NavBar />
            {step===1 ? (<div>
                <form>
                    <input type="text" className="color ml-2 width border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-green-300 text-xl" id="payeeName" value={cardInfo.payeeName} onChange={handleChange} placeholder="eg. modern auto spairs"/>
                    <button className="submit-btn bg-green-500 rounded outline-none border-none p-2 font width text-2xl text-white"onClick={nextStep}>
                        Next
                    </button>
                </form>
            </div>) :(null)}
            {step===2 ? (<div>
                <form>
                    <input type="text" className="color ml-2 width border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-green-300 text-xl" id="vpa" value={cardInfo.vpa} onChange={handleChange} placeholder="eg. lol@okaxis"/>
                    <button className="submit-btn bg-green-500 rounded outline-none border-none p-2 font width text-2xl text-white" onClick={nextStep}>
                        Next
                    </button>
                </form>
            </div>) :(null)}
            {step===3 ? (<div>
                <form>
                    <button className="submit-btn bg-green-500 rounded outline-none border-none p-2 font width text-2xl text-white" onClick={skipStep}>
                        Any Amount
                    </button>
                    <button className="submit-btn bg-green-500 rounded outline-none border-none p-2 font width text-2xl text-white" onClick={nextStep}>
                        Specific Amount
                    </button>
                </form>
            </div>) :(null)}
            {step===4 ? (<div>
                <form>
                    <input type="number" className="color ml-2 width border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-green-300 text-xl" min="1" id="amount" value={cardInfo.amount} onChange={handleChange} placeholder="eg. 1000"/>
                    <button className="submit-btn bg-green-500 rounded outline-none border-none p-2 font width text-2xl text-white" onClick={nextStep}>
                        Next
                    </button>
                </form>
            </div>) :(null)}
            {step===5 ? (<div>
                <form>
                    <input type="text" id="reason" value={cardInfo.reason} onChange={handleChange} className="color ml-2 width border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-green-300 text-xl" placeholder="eg. consultant fees"/>
                    <button className="submit-btn bg-green-500 rounded outline-none border-none p-2 font width text-2xl text-white" onClick={nextStep}>
                        Next
                    </button>
                </form>
            </div>) :(null)}
            {step===6 ? (<div>
                <FinalInfo cardInfo={cardInfo} vpa={cardInfo.vpa} amount={cardInfo.amount} reason={cardInfo.reason} payeeName={cardInfo.payeeName} setCardInfo={setCardInfo}/>
            </div>) :(null)}
        </div>
    );
}

export default UpiInfo;