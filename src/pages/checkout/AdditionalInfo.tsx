export default function AdditionalInfo() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">ADDITIONAL INFO</h2>
      <div className="mb-8">
        <label className="block text-sm text-gray-600">
          ORDER NOTES (OPTIONAL)
        </label>
        <textarea
          placeholder="Notes about your order, e.g. special notes for delivery"
          className="w-full border rounded px-3 py-2 mt-1 h-32"
        />
      </div>

      <h2 className="text-xl font-bold mb-4">YOUR ORDER</h2>
      <div className="border rounded p-4">
        <div className="flex justify-between font-semibold border-b pb-2">
          <span>PRODUCT</span>
          <span>SUBTOTAL</span>
        </div>
        <div className="space-y-2 mt-2">
          <div className="flex justify-between text-sm">
            <span>4K Smart Monitor VantageBlack EXPO GPS-8377369J x 1</span>
            <span>$1,150</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>MULTI-USE CABLE PHONE/TABLET/LAPTOP x 1</span>
            <span>$42</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>PROLESS TABLET Q SERIES QW3814 PROFESSIONAL x 1</span>
            <span>$550</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>
              FRACTAL DESIGN 850W PPL TEMPERED GLASS COMPUTER CASE x 2
            </span>
            <span>$580</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>RAM 80B</span>
            <span>$5,580</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>COLOR: STRONG</span>
            <span>-</span>
          </div>
        </div>
        <div className="flex justify-between font-semibold border-t pt-2 mt-2">
          <span>SUBTOTAL</span>
          <span>$7,322</span>
        </div>
        <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
          <span>TOTAL</span>
          <span>$7,322</span>
        </div>
      </div>

      {/* Payment Options */}
      <div className="mt-4 space-y-2">
        <label className="flex items-center">
          <input type="radio" name="payment" className="mr-2" />
          <span>Direct bank transfer</span>
        </label>
        <label className="flex items-center">
          <input type="radio" name="payment" className="mr-2" defaultChecked />
          <span>Check payments</span>
        </label>
        <label className="flex items-center">
          <input type="radio" name="payment" className="mr-2" />
          <span>Cash on delivery</span>
        </label>
        <label className="flex items-center">
          <input type="radio" name="payment" className="mr-2" />
          <span>Pay with cash</span>
        </label>
      </div>
      <p className="text-sm text-gray-600 mt-4">
        Your personal data will be used to process your order, support your
        experience throughout this website, and for other purposes described in
        our{" "}
        <a href="#" className="text-blue-600 hover:underline">
          privacy policy
        </a>
        .
      </p>
      <button className="w-full bg-blue-600 text-white py-3 rounded mt-4 hover:bg-blue-700">
        PLACE ORDER
      </button>
    </div>
  );
}
