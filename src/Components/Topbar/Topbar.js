import './topbar.css';
import { Component } from 'react';

class Topbar extends Component {

    floatUL = () => {
        var checkbtnS = document.getElementsByClassName("topList");
        checkbtnS[0].classList.toggle("checked");
        
    }

 render() {
  return (
    <>
    <div className="top">
        <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn" onClick={() => this.floatUL()}>
            <i className="fa fa-bars" />
          </label>
            <div className="topLeft">
                <img className='logo'src='/images/logo@3x.png'/>
            </div>
            <div className='topOnRight'>
                <div className="topCenter"> 
                    <ul className="topList">
                        <li className="topListItem">
                            Introduction
                        </li>
                        <li className="topListItem">
                            Solution
                        </li>
                        <li className="topListItem">
                            Rate plan
                        </li>
                        
                    </ul>
                </div>
                <div className="topRight">
                <ul className="topList">
                        <li className="topListItem">
                            Login
                        </li>
                        <li className="topListItem">
                            Apply for free use 
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    </>
  );
 }
}

export default Topbar;
