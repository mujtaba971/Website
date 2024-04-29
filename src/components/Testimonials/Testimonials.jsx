import React from 'react'
import  { useRef } from 'react';
import './Testimonials.css'
import nexticon from '../../assets/next-icon.png'
import backicon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'

const Testimonials = () => {
    const slider = useRef();
    let tx=0;

    const slideForward = () =>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }

    const slideBackward = () =>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
        
    }
  return (
    <div className='testimonials'>
        <img src={nexticon} className='next-icon' onClick={slideForward} />
        <img src={backicon} className='back-icon' onClick={slideBackward} />
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user1} />
                            <div>
                                <h3 className='my-2'>Kayla Harrison </h3>
                                <span>Edusity, USA</span>
                            </div>

                        </div>
                        <p>Choosing to Pursue my degree at Edusity was one of the best decisions I have ever made.
                            The supportive community, state-of-the art facilities and commitment to academic excellence
                            have truly exceeded my Expectations.
                    
                        </p>

                    </div>
                </li>

                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user2} />
                            <div>
                                <h3 className='my-2'>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>

                        </div>
                        <p>Choosing to Pursue my degree at Edusity was one of the best decisions I have ever made.
                            The supportive community, state-of-the art facilities and commitment to academic excellence
                            have truly exceeded my Expectations.
                    
                        </p>

                    </div>
                </li>

                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user3} />
                            <div>
                                <h3 className='my-2'>Anna King</h3>
                                <span>Edusity, USA</span>
                            </div>

                        </div>
                        <p>Choosing to Pursue my degree at Edusity was one of the best decisions I have ever made.
                            The supportive community, state-of-the art facilities and commitment to academic excellence
                            have truly exceeded my Expectations.
                    
                        </p>

                    </div>
                </li>


                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user4} />
                            <div>
                                <h3 className='my-2'>Justin Tafa</h3>
                                <span>Edusity, USA</span>
                            </div>

                        </div>
                        <p>Choosing to Pursue my degree at Edusity was one of the best decisions I have ever made.
                            The supportive community, state-of-the art facilities and commitment to academic excellence
                            have truly exceeded my Expectations.
                    
                        </p>

                    </div>
                </li>
            </ul>

        </div>

    </div>
  )
}

export default Testimonials