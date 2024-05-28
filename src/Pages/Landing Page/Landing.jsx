import React, { useEffect, useState } from 'react'
import './Landing.css'
import { FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";
import { BsArrowUpRight } from "react-icons/bs";


import img from '../../Image/img1.png'
import img1 from '../../Image/img2.png'


const Landing = () => {

    const [prices, setPrices] = useState([
        { currency: "OP", price: 0.08053, percentage: 0.07 },
        { currency: "ETH", price: 0.08053, percentage: 0.07 },
        { currency: "BTC", price: 0.08053, percentage: 0.07 },
        { currency: "DOGE", price: 0.08053, percentage: 0.07 },
    ]);
    useEffect(() => {
        const interval = setInterval(() => {
            const newPrices = prices.map(item => ({
                ...item,
                price: item.price + (Math.random() - 0.5) * 0.01,
                percentage: (Math.random() - 0.5) * 0.2
            }));
            setPrices(newPrices);
        }, 7000);

        return () => clearInterval(interval);
    }, [prices]);
    return (
        <>
            <div className='landing'>
                <div className='landing1'>
                    <div className='landing2'>
                        <h1>Buy, Sell & Trade
                            Cryptocurrencies</h1>

                        <p>Securely buy crypto and earn rewards with
                            Willtrade.com. Sign up today to trade Bitcoin for free on
                            select pairs.</p>

                        <div className='landing3'>
                            <input type="text" placeholder='Enter your email address' />
                            <button>Sign Up <MdOutlineArrowOutward color='#0B0E11' size={25} /></button>
                        </div>

                        <div className='landing4'>
                            <div className='landing5'>
                                <p>Download the
                                    Well Trade app</p>
                                <div className='landing6'>
                                    <FaApple color='#FFFFFF' size={20} />
                                    <IoLogoAndroid color='#FFFFFF' size={20} />
                                </div>
                            </div>
                            <div>
                                <img src={img1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='landing7'>
                        <img src={img} alt="" />
                    </div>
                </div>

                <div className='home4'>
                    <div className="price-container">
                        {prices.map((item, index) => (
                            <div key={index} className="price-item">
                                <span className="price">{item.currency} ${item.price.toFixed(5)}</span>
                                <span className={`percentage ${item.percentage >= 0 ? 'green' : 'red'}`}>({item.percentage.toFixed(2)}%)</span>
                            </div>
                        ))}
                        {prices.map((item, index) => (
                            <div key={index} className="price-item">
                                <span className="price">{item.currency} ${item.price.toFixed(5)}</span>
                                <span className={`percentage ${item.percentage >= 0 ? 'green' : 'red'}`}>({item.percentage.toFixed(2)}%)</span>
                            </div>
                        ))}
                    </div>


                    <div className='home6'>
                        <button>Check Prices <BsArrowUpRight className='btnicon' /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing