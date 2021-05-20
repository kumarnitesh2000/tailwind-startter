import React from 'react';
import Navbar from './Navbar';
import './Final_Info.css';
function FinalInfo() {
    return (
        <div className="finalInfo">
            <Navbar/>
            <div className="main px-24 mt-3">
            <div className="main_left">
                      <h2 className="text-5xl">Summary</h2>
                      <div className="main_content">
                          <div className="main_brand flex items-center ">
                          <input type="file" id="upload" hidden/>
<label className="label" for="upload">Add Logo</label>
<h2 className="text-4xl ml-2 mt-1">Bussiness Name</h2>
                              </div>
                              <div className="main_form mt-2">
                              <div className="main_form_1 p-2">
                                  <label className="text-2xl">UPI</label>
                                  <br/>
                                  <input className="text-gray-500 width border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-green-300 text-xl" type="text" value="kumarnitesh@okaxis"/>
                              </div>
                              <div className="main_form_2 p-2">
                                  <label className="text-2xl">Amount(optional)</label>
                                  <br/>
                                  <input className="width border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-green-300 text-xl" type="number" value="200"/>
                              </div>
                              <div className="main_form_3 p-2">
                                  <label className="text-2xl">Reason For Payments</label>
                                  <br/>
                                  <input className="width border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-green-300 text-xl" type="text" value="Gift Payment"/>
                              </div>
                              <div className="main_form_4 p-2">
                                  <label className="text-2xl">Bg colors</label>
                                  <br/>

                              </div>
                      </div>
                      </div>
                      </div>
               <div className="main_right">
                      
               </div>
            </div>
        </div>
    );
}

export default FinalInfo;