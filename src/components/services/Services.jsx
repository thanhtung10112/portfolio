import React from 'react';
import './service.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Offers</h2>
            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Front-end Web Developer</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Working environment is professional, sociable.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>The basic regimes such as insurance, salary and bonus are clear .</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Official salary (after internship) from 8 million VND.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Job advancement route clear and easonable.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Guidance and help for development.</p>
                        </li>
                    </ul>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>Fullstack Web Developer (in the future)</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Same with Front-end role.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Better salary.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
};

export default Services;