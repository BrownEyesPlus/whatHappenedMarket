import './productList.css';
import { Component } from 'react';
import Products from '../Products/Products';

class ProductList extends Component {

 render() {
  return (
    <div className='productList'>
        <div className='productContainer'>
            <Products/>
            <Products/>
            <Products/>
            <Products/>
            <Products/>
            <Products/>
            <Products/>
            <Products/>
            <Products/>
            <Products/>
            <Products/>
            <Products/>
            <Products/>
            <Products/>
            <Products/>
            <Products/>
            <Products/>
            <Products/>
            <Products/>
            <Products/>

        </div>
        <a href="#" className='productButton'> SEE MORE </a>
    </div>
  );
 }
}

export default ProductList;
