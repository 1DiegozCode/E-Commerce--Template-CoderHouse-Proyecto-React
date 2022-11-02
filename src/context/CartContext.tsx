import { useState, createContext } from 'react';
import FirebaseProduct from '../services/firebaseProductInterface';

const cartContext = createContext<any>(null);

export interface CartProduct extends FirebaseProduct {
  count: number;
}

function CartContextProvider(props: any) {
  const [cart, setCart] = useState<CartProduct[]>([]);

  function getCartCount(productId: string): number {
    const inCartProduct: CartProduct | undefined = cart.find(
      (sameProduct: CartProduct) => sameProduct.id === productId
    );
    return inCartProduct ? inCartProduct.count : 0;
  }

  function updateCount(product: FirebaseProduct, count: number): void {
    const inCartProduct: CartProduct | undefined = cart.find(
      (sameProduct: CartProduct) => sameProduct.id === product.id
    );
    if (inCartProduct) {
      inCartProduct.count = count;
    }
  }

  function isInCart(product: FirebaseProduct): boolean {
    return cart.some((productInCart) => productInCart.id === product.id);
  }

  function addToCart(product: FirebaseProduct, count: number): void {
    const newCart: CartProduct[] = [...cart];
    if (isInCart(product)) {
      updateCount(product, count);
    } else {
      const newProduct: CartProduct = { ...product, count };
      newCart.push(newProduct as CartProduct);
      setCart(newCart);
    }
    console.log('Product Add');
  }

  function removeProduct(idToRemove: string): void {
    let newCart = cart.filter(
      (productInCart) => productInCart.id !== idToRemove
    );
    setCart(newCart);
  }

  function clearCart(): void {
    setCart([]);
  }

  function getTotalProducts(): number {
    return cart.length;
  }

  function getTotal(): number {
    const cartTotal: number | undefined = cart.reduce(
      (accumulatedPrice: number, currentProduct: CartProduct) =>
        accumulatedPrice + currentProduct.count * currentProduct.price,
      0
    );
    return cartTotal ? cartTotal : 0;
  }

  return (
    <cartContext.Provider
      value={{
        addToCart,
        getTotal,
        cart,
        removeProduct,
        getCartCount,
        updateCount,
        getTotalProducts,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export { cartContext, CartContextProvider };
