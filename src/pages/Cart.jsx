import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, remove } from "../redux/feature/orderSlice";
import { useNavigate } from "react-router";

const Cart = () => {
  const orders = useSelector((state) => state.order.orderItems);
const dispatch=useDispatch()
const navigate=useNavigate()

  const totalItems = orders.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const totalPrice = orders.reduce(
    (total, item) =>
      total + (item.caloriesPerServing || 299) * (item.quantity || 1),
    0
  );
  console.log(orders)
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-gray-100 py-10 px-6">
      <h1 className="text-4xl font-extrabold text-center text-orange-600 mb-10">
        🛒 Shopping Cart
      </h1>

      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20">
          <h2 className="text-3xl font-semibold text-gray-500">
            Your Cart is Empty 😔
          </h2>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {orders.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full md:w-72 h-64 object-cover"
                />

                {/* Details */}
                <div className="flex-1 p-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {item.name}
                  </h2>

                  <p className="text-gray-500 mt-2">{item.cuisine}</p>

                  <div className="grid grid-cols-2 gap-3 mt-5 text-gray-700">
                    <p>⭐ {item.rating}</p>
                    <p>🔥 {item.caloriesPerServing} kcal</p>
                    <p>👥 {item.servings} Servings</p>
                    <p>⏱ {item.cookTimeMinutes} mins</p>
                  </div>

                  <div className="flex justify-between items-center mt-8 flex-wrap gap-4">
                    <div>
                      <p className="text-3xl font-bold text-green-600">
                        ₹{item.caloriesPerServing || 299}
                      </p>
                    </div>

                    {/* Quantity Controller */}
                    <div className="flex items-center gap-5">
                      <div className="flex items-center bg-gray-100 rounded-full shadow-md border border-gray-200 overflow-hidden">
                        <button
                         onClick={()=>{
                          console.log("Decrement Clicked",item.id);
                          dispatch(decrement(item.id));
                        }}
                          className="w-12 h-12 flex items-center justify-center bg-red-500 hover:bg-red-600 active:scale-95 text-white text-2xl font-bold transition-all duration-200"
                        >
                          −
                        </button>

                        <span className="w-14 text-center text-xl font-bold text-gray-800">
                          {item.quantity || 1}
                        </span>

                        <button
                         onClick={()=>{
                          console.log("Increment Clicked",item.id);
                          dispatch(increment(item.id));
                        }}
                          className="w-12 h-12 flex items-center justify-center bg-green-500 hover:bg-green-600 active:scale-95 text-white text-2xl font-bold transition-all duration-200"
                        >
                          +
                        </button>
                      </div>

                      <button
                      onClick={()=>{
                        dispatch(remove(item.id))
                      }}
                       className="px-5 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300">
                        🗑 Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="bg-white rounded-2xl shadow-xl p-8 h-fit sticky top-6">
            <h2 className="text-2xl font-bold border-b pb-4 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between text-lg">
                <span>Total Items</span>
                <span className="font-semibold">{totalItems}</span>
              </div>

              <div className="flex justify-between text-lg">
                <span>Subtotal</span>
                <span className="font-semibold">
                  ₹{totalPrice}
                </span>
              </div>

              <div className="flex justify-between text-lg">
                <span>Delivery</span>
                <span className="text-green-600 font-semibold">
                  Free
                </span>
              </div>

              <hr />

              <div className="flex justify-between text-2xl font-bold">
                <span>Total</span>
                <span className="text-orange-600">
                  ₹{totalPrice}
                </span>
              </div>
            </div>

            <button 
            onClick={()=>{
              navigate("/payment",{state:totalPrice})
            }}
            className="w-full mt-8 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Proceed to Checkout →
            </button>

            <button className="w-full mt-4 border-2 border-orange-500 text-orange-500 hover:bg-orange-50 py-3 rounded-xl font-semibold transition-all duration-300">
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;