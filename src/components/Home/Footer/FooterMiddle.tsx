import { Link } from "react-router-dom";

export default function FooterMiddle() {
  return (
    <div className="py-14">
      <footer className="bg-zinc-900 text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h4 className="font-bold text-lg mb-4">Privacy Policy</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Returns & Exchanges</li>
              <li>Payment Terms</li>
              <li>Delivery Terms</li>
              <li>Payment & Pricing</li>
              <li>Terms Of Use</li>
              <Link className="mt-5 h-[20px] flex" to="/privacy-policy">
                Privacy Policy
              </Link>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-bold text-lg mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>About Us</li>
              <li>Our Vision</li>
              <li>Orders & Shipping</li>
              <li>Office Supplies</li>
              <li>Contact Us</li>
              <li>Customer Service</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Smartphones</li>
              <li>Headphones</li>
              <li>Laptop & Tablet</li>
              <li>Monitors</li>
              <li>Printers</li>
              <li>Gadgets</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-bold text-lg mb-4">Customer Care</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>My Account</li>
              <li>Store Locator</li>
              <li>Customer Service</li>
              <li>Returns/Exchange</li>
              <li>Product Support</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
