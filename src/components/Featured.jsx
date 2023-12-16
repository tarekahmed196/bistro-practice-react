import React from 'react';
import SectionTitle from './SectionTitle';
import featuredImg from '../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <section className='featured-items bg-fixed my-20 pt-8 text-white'>
            <SectionTitle subHeading={'check it out'} heading={'featured Items'}></SectionTitle>

            <div className='md:flex justify-center items-center bg-gradient-to-t from-[#151515] to-[rgba(21,21,21,0)]'>
                <div className='px-36 py-20'>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='px-8'>
                    <p>Aug 30, 3030</p>
                    <p>Where can I get something</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum similique iusto, beatae molestias, veniam ducimus reprehenderit vitae magnam, quisquam illo. Reprehenderit, odit! Quaerat ipsam, provident eligendi iste doloremque maiores. Excepturi, dicta. Minima, fuga incidunt harum exercitationem quibusdam nihil sequi dolor quae facere voluptates debitis, molestias rerum quo nesciunt nisi?</p>
                    <button className='btn btn-outline border-0 border-b-4 text-white my-3'>Order Now</button>
                </div>
            </div>
            
        </section>
    );
};

export default Featured;