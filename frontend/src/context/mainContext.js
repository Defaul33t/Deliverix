import React, { useState, useReducer } from "react";

const MainContext = React.createContext({
  cartIsOpen: false,
  openCart: () => {},
  /* Reducer */
  cartProducts: null,
  add: () => {},
  increment: () => {},
  decrement: () => {},
  order: () => {},
});

const countTotal = (array) => {
  return array.reduce((prev, current) => {
    return prev + current.price * current.amount;
  }, 0);
};

const defaultCartState = { products: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const { product, amount, foodSize } = action.payload;

    const existingProductIndex = state.products.findIndex((stateProduct) => {
      return stateProduct.name === product.name;
    });

    let existingProduct = state.products[existingProductIndex];

    let updatedProducts;

    if (!existingProduct) {
      const newProduct = {
        name: product.name,
        amount: amount,
        price: foodSize === "normal" ? product.price : product.price + 3,
      };

      updatedProducts = [...state.products, newProduct];
      const updatedAmount = state.totalAmount + newProduct.price * amount;

      return {
        products: updatedProducts,
        totalAmount: updatedAmount,
      };
    } else {
      updatedProducts = [...state.products];
      existingProduct.amount += amount;

      updatedProducts[existingProductIndex] = existingProduct;

      const updatedAmount = countTotal(updatedProducts);

      return {
        products: updatedProducts,
        totalAmount: updatedAmount,
      };
    }
  }

  if (action.type === "INCREMENT_ITEM") {
    const productIndex = state.products.findIndex((stateProduct) => {
      return stateProduct.name === action.name;
    });

    let existingProduct = state.products[productIndex];
    existingProduct.amount++;

    const updatedProducts = [...state.products];
    updatedProducts[productIndex] = existingProduct;

    const updatedAmount = countTotal(updatedProducts);

    return {
      products: updatedProducts,
      totalAmount: updatedAmount,
    };
  }

  if (action.type === "DECREMENT_ITEM") {
    const productIndex = state.products.findIndex((stateProduct) => {
      return stateProduct.name === action.name;
    });

    let existingProduct = state.products[productIndex];
    existingProduct.amount--;

    const updatedProducts = [...state.products];
    updatedProducts[productIndex] = existingProduct;

    // Check ci je zaporne hodnota
    if (existingProduct.amount === 0) {
      updatedProducts.splice(productIndex, 1);
    }

    const updatedAmount = countTotal(updatedProducts);

    return {
      products: updatedProducts,
      totalAmount: updatedAmount,
    };
  }

  if (action.type === "ORDER") {
    const hasDelivery = action.delivery === "delivery" ? true : false;

    fetch("https://node.carlgal.com/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        products: state.products,
        price: state.totalAmount,
        delivery: hasDelivery,
      }),
    })
      .then((response) => response.json())
      .then((resolve) => {
        alert(resolve.message);
      });

    return {
      products: [],
      totalAmount: 0,
    };
  }

  return defaultCartState;
};

export const MainContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addProduct = (product, amount, foodSize) => {
    dispatchCartAction({ type: "ADD_ITEM", payload: { product, amount, foodSize } });
  };

  const incrementProduct = (name) => {
    dispatchCartAction({ type: "INCREMENT_ITEM", name });
  };

  const decrementProduct = (name) => {
    dispatchCartAction({ type: "DECREMENT_ITEM", name });
  };

  const order = (delivery) => {
    dispatchCartAction({ type: "ORDER", delivery });
    setCartOpen(false);
  };

  const [cartIsOpen, setCartOpen] = useState(false);

  const openCartHandler = () => {
    setCartOpen((previousValue) => !previousValue);
  };

  return (
    <MainContext.Provider
      value={{
        cartIsOpen,
        openCart: openCartHandler,
        cartProducts: cartState.products,
        totalAmount: cartState.totalAmount,
        add: addProduct,
        increment: incrementProduct,
        decrement: decrementProduct,
        order,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContext;
