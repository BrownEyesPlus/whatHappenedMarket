import './header.css';
import { Component } from 'react';

class Header extends Component {

 render() {
  return (
    <div className='header'>
        <img className='headerBanner' src="images/main-banner@3x.png"/>
        <div className='whatHappened'>
            <div className='whatHappendWrap'>
                
                <h2 className='whatHappenedTitle'>
                    what happened!
                </h2>
                <p className='whatHappenedContent'>
                How to create mobile-optimized videos in minutes. Not a designer, 
every team makes a lot of videos Can be trimmed. Take the first 
step to your brand's success. How to create 
mobile-optimized videos in minutes.
                </p>
            </div>
        </div>
    </div>

  );
 }
}

export default Header;
