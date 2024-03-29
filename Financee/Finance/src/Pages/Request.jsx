import React, { useState, useEffect } from 'react';
import { Dropdown } from 'flowbite-react';
import Sidebar2 from '../Layouts/Sidebar2';
import '../styles/dashbaord.css';
import Contents from './Contents';
function Request() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Approved'); 
  const [showOptions, setShowOptions] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (option) => {
    console.log(`Selected option: ${option}`);
    setSelectedOption(option);
    setShowOptions(false);
  };
    
  return (
    <div>

<div className='dashboard'>
        <Sidebar2 />
     
        <div className='dashboard-content shadow-2xl'>
    <div className='w-full'>    
    <Contents/>
    
    <table className='finance-table mt-24'>
        
        <thead>
          <tr  data-aos="fade-up">
           
            <th>Date</th>
            <th>Time</th>
            <th>Item-name</th>
            <th>Quantity</th>
            <th>Unit-Price</th>
            <th>TOtal-Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr  data-aos="zoom-in-down">
              <td>20/12/2023</td>
              <td>15:00 pm</td>
              <td>Fans</td>
              <td>5</td>
              <td>$3000</td>
              <td>$1500</td>
              <td><button className='bg-blue-900 text-white rounded-full py-2 px-8 text-sm' onClick={toggleOptions}>
              {selectedOption}
              <span className="absolute ml-2 top-1/2 transform -translate-y-1/2">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </span>
              </button>
              
              {showOptions && (
        <div className="  z-60  overflow-y-auto top-full right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-md">
   
          <div className="py-1">
            <div className="cursor-pointer px-4 py-2 hover:bg-gray-100" onClick={() => handleOptionClick('Approved')}>
              Approved
            </div>
            <div className="cursor-pointer px-4 py-2 hover:bg-gray-100" onClick={() => handleOptionClick('Pending')}>
              Pending
            </div>
            <div className="cursor-pointer px-4 py-2 hover:bg-gray-100" onClick={() => handleOptionClick('Denied')}>
              Denied
            </div>
          </div>
        </div>
      )}
    </td>
 
          </tr>
          <tr data-aos="zoom-in-down">
            <td>20/12/2023</td>
            <td>15:00 pm</td>
            <td>Fans</td>
            <td>5</td>
            <td>$3000</td>
            <td>$1500</td>
            <td><button className='bg-blue-900 text-white rounded-full py-2 px-8 text-sm' onClick={toggleOptions}>
              {selectedOption}
              <span className="absolute ml-2 top-1/2 transform -translate-y-1/2">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </span>
              </button></td>
          </tr>
          <tr data-aos="zoom-in-down">
            <td>20/12/2023</td>
            <td>15:00 pm</td>
            <td>Fans</td>
            <td>5</td>
            <td>$3000</td>
            <td>$1500</td>
            <td><button className='bg-blue-900 text-white rounded-full py-2 px-8 text-sm' onClick={toggleOptions}>
              {selectedOption}
              <span className="absolute ml-2 top-1/2 transform -translate-y-1/2">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </span>
              </button></td>
          </tr>
        </tbody>
      </table>
      {isModalOpen && (
        <div className='fixed z-10 inset-0 overflow-y-auto'>
          <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            <div className='fixed inset-0 transition-opacity' aria-hidden='true'>
              <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
            </div>
            <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
              &#8203;
            </span>
            <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
              <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                <div className='sm:flex sm:items-start'>
                  <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10'>
                    <svg
                      className='h-6 w-6 text-blue-600'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                  </div>
                  <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                    <h3 className='text-lg leading-6 font-medium text-gray-900' id='modal-title'>
                        Fill the Form
                    </h3>
                    <div className='mt-2'>
                      <p className='text-sm text-gray-500'>
                      <form className='form mx-4 md:mx-0'>
                        <input
                          className="input-field mb-6 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
                          id="username"
                          type="text"
                          placeholder="Item name"
                          data-aos="fade-down"
                          />
                        <input
                          className="input-field mb-6 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
                          id="password"
                          type="password"
                          placeholder="Quantity"
                          data-aos="fade-down"
                        />
                        <input
                            className="input-field mb-6 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
                            id="password"
                            type="password"
                            placeholder="Unit-Price"
                            data-aos="fade-down"
                          />
                          <button className='home-button mb-6 bg-blue-900 text-white rounded-full px-8 py-3 font-bold hover:bg-blue-700 hover:text-white transition duration-300' data-aos="fade-down">
                          Send a request
                          </button>
                        </form>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                <button
                  onClick={closeModal}
                  type='button'
                  className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-900 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm'
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
      </div></div></div>
      
  );
}

export default Request;
