import './bestProduct.css';
import { Component } from 'react';

class BestProduct extends Component {

 render() {
  return (
    <div className='bestProduct'>
        <div className='d-flex flex-col h-100' >
            <div className='flex-wrap'>
                <h2 className='bestProductTitle'>
                    best product
                </h2>
                <p className='bestProductContent'>How to create mobile-optimized videos in minutes. Not a designer, every team makes a lot of videos Can be trimmed. Take the first</p>
                <div className='bestProductList'>
                    <div className='bestProductItem'>
                        <img src='images/best-image-01@3x.png' alt=''/>
                        
                            <img className='bestProductIcon' src='images/producticon-02@3x.png' alt=''/>
                            
                            <div className='bestProductDes'>
                                <p className='bestProductDescription'>How to create mobile-optimized</p>
                                <a href="#" className='bestProductButton'>GO</a>
                            </div>
                    </div>
                    <div className='bestProductItem'>
                        <img src='images/best-image-02@3x.png' alt=''/>
                        
                            <img className='bestProductIcon' src='images/producticon-02@3x.png' alt=''/>
                        
                        <div className='bestProductDes'>
                            <p className='bestProductDescription'>How to create mobile-optimized</p>
                            <a href="#" className='bestProductButton'>GO</a>
                        </div>
                    </div>
                    <div className='bestProductItem'>
                        <img src='images/best-image-03@3x.png' alt=''/>
                        
                            <img className='bestProductIcon' src='images/producticon-02@3x.png' alt=''/>
                        
                        <div className='bestProductDes'>
                            <p className='bestProductDescription'>How to create mobile-optimized</p>
                            <a href="#" className='bestProductButton'>GO</a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
 }
}

export default BestProduct;
