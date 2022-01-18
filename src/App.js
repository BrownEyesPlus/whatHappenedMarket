import './Share/Style/style.css';
import Topbar from './Components/Topbar/Topbar';
import Header from './Components/Header/header';
import BestProduct from './Components/BestProduct/BestProduct';
import ProductList from './Components/ProductList/ProductList';
import BrandStory from './Components/BrandStory/BrandStory';
import Issue from './Components/Issue/Issue';
import WhatHappended2 from './Components/WhatHappened2/WhatHappened2';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="app"> 
      <Topbar/>
      <Header/>
      <BestProduct/>
      <ProductList/>
      <BrandStory/>
      <Issue/>
      <WhatHappended2/>
      <Footer/>
    </div>
  );
}

export default App;
