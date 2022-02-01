import React, { useState } from "react";
import AmountButton from "./AmountButton";

const AddToBasket = (props) => {
  const [amount, setAmount] = useState(1);
  const [editAmount, startEditAmount] = useState(false);

  const [orders, setOrders] = useState([]);
  const [orderCount, setOrderCount] = useState(0);

  const orderCountHandler = () => {
    let sum = 0;
    orders.forEach((x) => (sum += x.quantity));
    setOrderCount(sum);
  };

  const setOrderHandler = (pizzaId, addOrder, clearAllById = false) => {
    if (clearAllById) {
      setOrders(orders.filter((o) => o.id !== pizzaId));
      return;
    }
    if (addOrder) {
      var exists = orders.find((x) => x.id === pizzaId);
      if (exists) {
        let letezo = orders.find((x) => x.id === pizzaId);
        letezo.quantity += 1;
        setOrders([...orders]);
      } else {
        let selectedItem = props.pizza;
        let newOrder = {
          id: selectedItem.id,
          name: selectedItem.name,
          price: selectedItem.price,
          image: selectedItem.image,
          quantity: 1,
        };
        setOrders([...orders, newOrder]);
      }
    } else {
      let letezo = orders.find((x) => x.id === pizzaId);
      letezo.quantity -= 1;
      setOrders([...orders]);
    }

    orderCountHandler();
  };

  const plusAmountHandler = () => {
    if (amount === 10) return;
    setAmount((prevAmount) => {
      setOrderHandler(props.pizza.id, true);
      return prevAmount + 1;
    });
  };

  const minusAmountHandler = () => {
    if (amount === 1) return;
    setAmount((prevAmount) => {
      setOrderHandler(props.pizza.id, false);
      return prevAmount - 1;
    });
  };

  const startEditAmountHandler = () => {
    setAmount(1);
    setOrderHandler(props.pizza.id, true);
    startEditAmount(true);
  };

  const stopEditAmountHandler = () => {
    setAmount(0);
    setOrderHandler(props.pizza.id, false, true);
    startEditAmount(false);
  };

  return (
    <div className="buttonbox d-flex flex-column justify-content-center align-items-center ms-3 me-3 mb-3">
      {editAmount ? (
        <AmountButton
          onDeleteAll={stopEditAmountHandler}
          onUpdateOrder={props.onUpdateOrder}
          onPlusAmount={plusAmountHandler}
          onMinusAmount={minusAmountHandler}
          amount={amount}
          setAmount={setAmount}
          test={setOrderHandler}
        />
      ) : (
        <button
          onClick={startEditAmountHandler}
          className="btn btn-outline-orange my-md-0"
          style={{ width: "170px" }}
        >
          Rendelek!
        </button>
      )}
    </div>
  );
};

export default AddToBasket;
