import React,{useState} from 'react';
import FinalInfo from './FinalInfo';

function UpiInfo(props) {
    const [step,setStep] = useState(6);
    const [cardInfo,setCardInfo] = useState({
        amount: 0,
        payeeName: "",
        vpa: "",
        reason: ""
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
            {step===1 ? (<div>
                <form>
                    <input type="text" id="payeeName" value={cardInfo.payeeName} onChange={handleChange} placeholder="eg. modern auto spairs"/>
                    <button className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 focus:ring-blue-600" onClick={nextStep}>
                        Next
                    </button>
                </form>
            </div>) :(null)}
            {step===2 ? (<div>
                <form>
                    <input type="text" id="vpa" value={cardInfo.vpa} onChange={handleChange} placeholder="eg. lol@okaxis"/>
                    <button className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 focus:ring-blue-600" onClick={nextStep}>
                        Next
                    </button>
                </form>
            </div>) :(null)}
            {step===3 ? (<div>
                <form>
                    <button className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 focus:ring-blue-600" onClick={skipStep}>
                        Any Amount
                    </button>
                    <button className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 focus:ring-blue-600" onClick={nextStep}>
                        Specific Amount
                    </button>
                </form>
            </div>) :(null)}
            {step===4 ? (<div>
                <form>
                    <input type="number" min="1" id="amount" value={cardInfo.amount} onChange={handleChange} placeholder="eg. 1000"/>
                    <button className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 focus:ring-blue-600" onClick={nextStep}>
                        Next
                    </button>
                </form>
            </div>) :(null)}
            {step===5 ? (<div>
                <form>
                    <input type="text" id="reason" value={cardInfo.reason} onChange={handleChange} placeholder="eg. consultant fees"/>
                    <button className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 focus:ring-blue-600" onClick={nextStep}>
                        Next
                    </button>
                </form>
            </div>) :(null)}
            {step===6 ? (<div>
                <FinalInfo />
            </div>) :(null)}
        </div>
    );
}

export default UpiInfo;