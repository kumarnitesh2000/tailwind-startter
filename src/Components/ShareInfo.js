import React from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import './Final_Info.css'
import config from '../config';
import LinkIcon from '@material-ui/icons/Link';
import CodeIcon from '@material-ui/icons/Code';
function ShareInfo({isOpen,closeModal,link,setLink}) {
    console.log(link);
    const shareOptionChange = (event) => {
        let allBox = document.getElementsByClassName('shareb');
        for(var i=0;i<2;i++){
            allBox[i].style.backgroundColor = '#E9E9E9';

        }
        document.getElementById(event.target.id).style.backgroundColor = '#48bb78';
        if(event.target.id === 'code'){
            setLink(`<iframe width="640px" height= "480px" src="${config.frontend_url+window.location.pathname}" frameborder= "0" marginwidth= "0" marginheight= "0" style= "border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>`);
        }else if(event.target.id === 'link'){
            setLink(config.frontend_url+window.location.pathname);
        }
    } 
    return (
        <div>
            <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-8 py-8 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 pt-8 rounded bg-gray-50 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-2xl" >
                <Dialog.Title
                  as="h3"
                  className="text-xl font leading-6 text-gray-900"
                >
                  Get Link
                </Dialog.Title>
                <div className="mt-2">
                    <div className="inp flex items-center">
                <input value={link}
                  className="width-2 color bg-gray-500 border border-gray-300 px-2 py-2 rounded shadow-sm focus:outline-none text-xl"
                />
                <p className="ml-2 text-blue-900 cursor-pointer font text-lg">Copy link</p>
                </div>
                <div className="copy_opt mt-2">
                    <div id="link" className="link cursor-pointer shareb" onClick={shareOptionChange} style={{backgroundColor:'#48bb78',borderRadius:'5px', padding:'10px', display: 'inline-block'}}>
                    Link
                    </div>
                    <div id="code" className="code ml-2 cursor-pointer shareb" onClick={shareOptionChange} style={{backgroundColor:'#E9E9E9',borderRadius:'5px', padding:'10px', display: 'inline-block'}}>
                    Code
                    </div>
                </div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-xl float-right font-medium text-blue-900 bg-green-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                    onClick={closeModal}
                  >
                    Done
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
        </div>
    );
}

export default ShareInfo;