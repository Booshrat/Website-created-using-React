import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Landing from './Components/LandingPage';
import Product from './Components/Products';
import Navigation from './Components/Navigation';
import User from './Components/User';
import Legal from './Components/Legal';
import InterestCalculator from './Components/InterestCalculator';

// Creact an array of objects containing product info.
const products = [
  {
    productName: "Item-1", 
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ultrices neque ornare aenean.", 
    productPrice: "£89.99"
  },
  {
    productName: "Item-2", 
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ultrices neque ornare aenean.", 
    productPrice: "£94.99"
  },
  {
    productName: "Item-3", 
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ultrices neque ornare aenean.", 
    productPrice: "£119.99"
  },
  {
    productName: "Item-4", 
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ultrices neque ornare aenean.", 
    productPrice: "£79.99"
  },
  {
    productName: "Item-5", 
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ultrices neque ornare aenean.", 
    productPrice: "£99.99"
  }
];

// Create a function that maps through products array and returns the produnct info.
function addProducts(products) {
  let myProducts = products.map((product) => {
    return (
      <div>
        <Product productName={product.productName} productDescription={product.productDescription} productPrice={product.productPrice} />
      </div>
    );
  });

  return myProducts;
}

// Create a function component that returns all components.
// Create Routes to navigate to different components. 
function App() {
  let myProducts = addProducts(products);
  return (
    <div className='App'>
      <Navigation />
      <div>
        <Header loggedIn={true} />
      </div>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/products' element=<div>
          <h2 className='our-product'>Our Products</h2><div className='my-product'>{myProducts}</div>
        </div> />
        <Route path='/profile' element={<User />}/>
        <Route path='/interest' element={<InterestCalculator />} />
        <Route path='/legal' element={<Legal />} />
      </Routes>
      {/* <div>
        <h2 className='our-product'>Our Products</h2>
        <div className='my-product'>{myProducts}</div>
      </div> */}
    </div>
  );
}

// Export the App component that will be imported and rendered in the index.js file.
export default App;
