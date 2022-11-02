import Footer from './components/UI/Footer/Footer';
import Header from './components/UI/Header/Header';
import CallToAction from './pages/CategoryPages/CategoryPage/CallToAction';
import ProductArea from './pages/CategoryPages/CategoryPage/ProductArea';
import ProductPage from './pages/ProductPage/ProductPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import CartContainer from './pages/CartPage/CartContainer';

const qualities: [string, string, string] = [
  '24 shipping',
  'pre-orders',
  'warranty',
];

// space with large card component idea the card that contains the detail info
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartContextProvider>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <CallToAction
                    message="Take a look on the best!"
                    qualities={qualities}
                  />
                  <ProductArea productAreaName="Our Last Products!" />
                </>
              }
            ></Route>
            <Route
              path="/category/:categoryID"
              element={
                <>
                  <CallToAction
                    message="Take a look on the best!"
                    qualities={qualities}
                  />
                  <ProductArea productAreaName="Take a Look on the Last games" />
                </>
              }
            />
            <Route path="/product/:productID" element={<ProductPage />} />
            <Route path="/cart" element={<CartContainer />} />
          </Routes>
          <Footer />
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

/*Cart Page View
<CartContainer />
*/

/* Category Page View
<CallToAction message='Take a look on the best!'qualities= {qualities} />
<ProductArea productAreaName='Our last products' />
*/

/* Prouuct Page View 
<ProductPage />
*/

export default App;
