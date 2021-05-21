import React from 'react';
import Brand_img from '../images/brand.svg'
function Navbar_2() {
    const changePage = () => {
        window.open('/','_self');
    }
    return (
        <div className="navbar flex items-center p-2 px-24 justify-between ">
        <div className="navbar_brand">
        <img src={Brand_img} alt="Brand"/>
        </div>
        <div className="navbar_options">
        <button onClick={changePage} className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 focus:ring-blue-600">CREATE UPI CARD</button>
        </div>
    </div>
    );
}

export default Navbar_2;