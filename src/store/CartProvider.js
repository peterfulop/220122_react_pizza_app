import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    let updatedItems;

    const existingItemIndex = state.items.findIndex(
      (x) => x.id === action.item.id
    );
    const existingItem = state.items.find((x) => x.id === action.item.id);

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: (existingItem.amount += action.item.amount),
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    let updatedItems;
    let updatedTotalAmount;

    const existingItem = state.items.find((x) => x.id === action.id);
    updatedTotalAmount = state.totalAmount - existingItem.price;

    if (action.removeAll) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const existingItemIndex = state.items.findIndex(
          (x) => x.id === action.id
        );
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      }
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };

  const removeItemFromCartHandler = (id, removeAll = false) => {
    dispatchCartAction({
      type: "REMOVE",
      id: id,
      removeAll: removeAll,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
