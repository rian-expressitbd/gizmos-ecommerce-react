import { Breadcrumb } from "@/components/ui/breadcrumb";

import React from "react";
import CheckoutForm from "./CheckoutForm";
import AdditionalInfo from "./AdditionalInfo";

const Checkout: React.FC = () => {
  return (
    <>
      <div className="mx-auto w-[90%]">
        <Breadcrumb className="mt-5" />

        {/* Main Content */}
        <main className="py-8 ">
          {/* Coupon Section */}
          <div className="text-center mb-8">
            <p className="text-gray-600">Have a coupon?</p>
            <button className="text-blue-600 font-semibold hover:underline">
              CLICK HERE TO ENTER YOUR CODE
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Billing Details */}
            <CheckoutForm />

            {/* Additional Info and Order Summary */}
            <AdditionalInfo />
          </div>
        </main>
      </div>
    </>
  );
};

export default Checkout;
