import './products.css';
import { Component } from 'react';

class Products extends Component {

 render() {
  return (
    
      <div className='productItem'>
        <a href="">
        <img src='images/best-image-03@3x.png' />
        </a>
        <h3 className='productTitle'>
        [What happen] How to create 
        </h3>
        <div className='d-flex'>
            <div className='productPrice'>2,500 won</div>
            <div className='productLiked'><i className='fa fa-heart'></i> 236</div>
        </div>
    </div>
    
  );
 }
}

export default Products;
