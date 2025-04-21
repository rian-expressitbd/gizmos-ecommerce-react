import { Accordion } from "@/components/ui/accordion";


export const SingleProductAccordion = () => {
    return (
      <div className="w-[90%] mx-auto">
        <h2 className="text-xl font-bold mb-4">Accessories</h2>
        
        <div className="space-y-4">
          <Accordion trigger="Description">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">4K Smart Monitor</h3>
                <p className="text-sm text-gray-600">VariableNet Expo GPS-587736ck</p>
                <p className="font-bold mt-1">$1,150</p>
              </div>
              <div>
                <h3 className="font-medium">Multiusre USB Cable</h3>
                <p className="text-sm text-gray-600">Phone/Tablet/Laptop</p>
                <p className="font-bold mt-1">$42</p>
              </div>
              <div>
                <h3 className="font-medium">Profous Tablet Q Series</h3>
                <p className="text-sm text-gray-600">QW-SS814 Professional</p>
                <p className="font-bold mt-1">$550</p>
              </div>
            </div>
          </Accordion>
  
          <Accordion trigger="Your Current Cart" defaultOpen={true}>
            <div className="space-y-4">
              <p className="font-bold text-lg">1742$</p>
              <p className="text-sm text-gray-600">for 3 items(s)</p>
              <button className="bg-black text-white py-2 px-3 rounded hover:bg-gray-800 transition-colors">
                ADD TO CART
              </button>
            </div>
          </Accordion>
  
          <Accordion trigger="Specification">
            <p className="text-gray-600">Product specifications would appear here</p>
          </Accordion>
  
          <Accordion trigger="Reviews (0)">
            <p className="text-gray-600">No reviews yet</p>
          </Accordion>
        </div>
      </div>
    );
  };