export default function CheckoutForm() {
  return (
    <>
      <div>
        <h2 className="text-xl font-bold mb-4">BILLING DETAILS</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600">
                FIRST NAME *
              </label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 mt-1"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">LAST NAME *</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 mt-1"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600">
              COMPANY NAME (OPTIONAL)
            </label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">
              COUNTRY / REGION *
            </label>
            <select className="w-full border rounded px-3 py-2 mt-1">
              <option>United States (US)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600">
              STREET ADDRESS *
            </label>
            <input
              type="text"
              placeholder="House number and street name"
              className="w-full border rounded px-3 py-2 mt-1"
              required
            />
            <input
              type="text"
              placeholder="Apartment, suite, unit, etc. (optional)"
              className="w-full border rounded px-3 py-2 mt-2"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">TOWN / CITY *</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">STATE *</label>
            <select className="w-full border rounded px-3 py-2 mt-1">
              <option>California</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600">ZIP CODE *</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">PHONE *</label>
            <input
              type="tel"
              className="w-full border rounded px-3 py-2 mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">
              EMAIL ADDRESS *
            </label>
            <input
              type="email"
              className="w-full border rounded px-3 py-2 mt-1"
              required
            />
          </div>
        </form>
      </div>
    </>
  );
}
