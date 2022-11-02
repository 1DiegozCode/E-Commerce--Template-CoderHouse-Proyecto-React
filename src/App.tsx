import Footer from './components/UI/Footer/Footer';
import Header from './components/UI/Header/Header';
import CallToAction from './pages/CategoryPages/CategoryPage/CallToAction';
import ProductPage from './pages/ProductPage/ProductPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import CartContainer from './pages/CartPage/CartContainer';
import ProductArea from './pages/CategoryPages/CategoryPage/ProductArea';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import ProductCardSkeleton from './loaders/ProductCardSkeleton';
import ProductInfoCarouselSkeleton from './loaders/ProductInfoCarouselSkeleton';
import ProductInfoSkeleton from './loaders/ProductInfoSkeleton';

const qualities: [string, string, string] = [
  '24 shipping',
  'pre-orders',
  'warranty',
];

// space with large card component idea the card that contains the detail info
function App() {
  return (
    <div className="App">
      <SkeletonTheme baseColor="#E9EAEA" highlightColor="#D9DBDB">
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
              <Route path="/test" element={<ProductInfoSkeleton />} />
            </Routes>
            <Footer />
          </CartContextProvider>
        </BrowserRouter>
      </SkeletonTheme>
    </div>
  );
}

export default App;
