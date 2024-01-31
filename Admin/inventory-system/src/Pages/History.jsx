import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/dashbaord.css'
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const financeHistory = [
 
  {
    image: <FontAwesomeIcon icon={faCartArrowDown} />,
    name: 'Fans',
    Quantity: '2',
    cost: '$250',
    date: '4/5/2023',
  },
  {
    image: <FontAwesomeIcon icon={faCartArrowDown} />,
    name: 'Water',
    Quantity: '4',
    cost: '$20',
    date: '4/1/2024',
  },
  {
    image: <FontAwesomeIcon icon={faCartArrowDown} />,
    name: 'Ph',
    Quantity: '4',
    cost: '$20',
    date: '2/1/2024',
  },
  {
    image: <FontAwesomeIcon icon={faCartArrowDown} />,
    name: 'Ph',
    Quantity: '4',
    cost: '$20',
    date: '2/1/2024',
  },
 

];

const History = () => {
  return (
    <>
 <div className='w-full bg-blue-950 h-11/12 py-2 mt-1'>
 <h1 className='header--title  delay-[300ms] duration-[600ms]  mt-1      ml-12 text-gray-100   text-lg' >Report</h1>
 </div>
    <div className='finance-history-table px-4 bg-gray-100 py-6 shadow-2xl rounded-lg mt-2 '>
        
   
      <table className=' fin-table mt-2'>
        <thead>
          <tr data-aos="fade-up">
           
            <th>Item</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {financeHistory.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'} >
              <td data-aos="zoom-in-down" className='icon-cell'>{item.image}</td>
              <td data-aos="zoom-in-down">{item.name}</td>
              <td data-aos="zoom-in-down">{item.Quantity}</td>
              <td data-aos="zoom-in-down">{item.cost}</td>
              <td data-aos="zoom-in-down">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
   <Link  to='/Report' > <button className='bg-blue-950 rounded-full py-2 px-8 mt-8 text-gray-100  delay-[300ms] duration-[600ms] text-sm  ml-12 mb-4' >View more...</button></Link> 

    </div>
    </>
  );
};

export default History;
