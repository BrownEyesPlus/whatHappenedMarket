import './whatHappened2.css';
import { Component } from 'react';

class WhatHappended2 extends Component {

 render() {
  return (
    <div className='whatHappened2'>
        <div className='d-flex flex-col h-100'>
            <div className='whatHappened2Wrap flex-swap'>
                <h2 className='whatHappened2Title whTitle'>
                    what happened
                </h2>
                <p className='whatHappened2Content contentP'>
                How to create mobile-optimized videos in minutes. Not a designer, 
every team makes a lot of videos Can be trimmed. Take the first 
                </p>
                <a href="#" className='whatHappened2Button seeMoreBtn'> SEE MORE </a>
                
                <div className='object whatHappened2Video'>
                    <img src='images/video@3x.png' alt=''/>
                </div>
                <div className='object videoObject01'>
                    <img src='images/video-object-01@3x.png' alt=''/>
                </div>
                <div className='object videoObject03'>
                    <img src='images/video-object-03@3x.png' alt=''/>
                </div>
                <div className='object videoObject05'>
                    <img src='images/video-object-05@3x.png' alt=''/>
                </div>
                <div className='object videoObject06'>
                    <img src='images/video-object-06@3x.png' alt=''/>
                </div>
                
            </div>
        </div>
    </div>
  );
 }
}

export default WhatHappended2;
