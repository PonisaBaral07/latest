import React from "react";
import { useLocation } from "react-router";
import CryptoJS from "crypto-js";
import { v4 as uuidv4 } from "uuid";

const Payment = () => {
  const location = useLocation();
  const totalPrice = location?.state;
  const transaction_uuid = uuidv4();

  const hash = CryptoJS.HmacSHA256(
    `total_amount=${totalPrice},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`,
    import.meta.env.VITE_ESEWA_SECRET_KEY,
  );

  const signature = CryptoJS.enc.Base64.stringify(hash);

  return (
  <div className="min-h-screen bg-gradient-to-br from-emerald-600 via-green-500 to-lime-400 flex items-center justify-center p-6 relative overflow-hidden">
    
    {/* Background Decorations */}
    <div className="absolute w-72 h-72 bg-white/20 rounded-full blur-3xl -top-20 -left-20"></div>
    <div className="absolute w-80 h-80 bg-yellow-300/20 rounded-full blur-3xl bottom-0 right-0"></div>

    <div className="relative w-full max-w-lg">
      {/* Card */}
      <div className="backdrop-blur-xl bg-white/90 rounded-3xl shadow-2xl overflow-hidden border border-white/40">

        {/* Header */}
        <div className="bg-gradient-to-r from-green-700 to-green-500 text-white p-8 text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg mb-4">
            <span className="text-4xl">💳</span>
          </div>

          <h1 className="text-3xl font-bold">
            eSewa Payment
          </h1>

          <p className="text-green-100 mt-2">
            Safe • Fast • Secure
          </p>
        </div>

        {/* Body */}
        <div className="p-8">

          {/* Summary */}
          <div className="bg-green-50 border border-green-100 rounded-2xl p-6 mb-6">

            <div className="flex justify-between mb-3">
              <span className="text-gray-500">
                Payment Method
              </span>

              <span className="font-semibold text-green-600">
                eSewa
              </span>
            </div>

            <div className="flex justify-between mb-3">
              <span className="text-gray-500">
                Transaction ID
              </span>

              <span className="font-medium text-gray-700 text-sm">
                {transaction_uuid.slice(0, 10)}...
              </span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">
                Total
              </span>

              <span className="text-4xl font-bold text-green-600">
                Rs. {totalPrice}
              </span>
            </div>
          </div>

          <form
            action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
            method="POST"
          >
            <input type="hidden" name="amount" defaultValue={totalPrice} />
            <input type="hidden" name="tax_amount" defaultValue="0" />
            <input
              type="hidden"
              name="total_amount"
              defaultValue={totalPrice}
            />
            <input
              type="hidden"
              name="transaction_uuid"
              defaultValue={transaction_uuid}
            />
            <input
              type="hidden"
              name="product_code"
              defaultValue="EPAYTEST"
            />
            <input
              type="hidden"
              name="product_service_charge"
              defaultValue="0"
            />
            <input
              type="hidden"
              name="product_delivery_charge"
              defaultValue="0"
            />
            <input
              type="hidden"
              name="success_url"
              defaultValue="http://localhost:5173/success"
            />
            <input
              type="hidden"
              name="failure_url"
              defaultValue="http://localhost:5173/failure"
            />
            <input
              type="hidden"
              name="signed_field_names"
              defaultValue="total_amount,transaction_uuid,product_code"
            />
            <input
              type="hidden"
              name="signature"
              defaultValue={signature}
            />

            <button
              type="submit"
              className="w-full py-4 rounded-xl text-lg font-bold text-white bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 transition duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 active:scale-95"
            >
              Pay Rs. {totalPrice} with eSewa
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 flex items-center justify-center gap-2 text-gray-500">
            <span className="text-green-600 text-lg">🔒</span>
            <p className="text-sm">
              Your payment is encrypted and securely processed.
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
);
};

export default Payment;  