

export default function Sidebar() {
  return (
    <div className="absolute top-0 left-full ml-[20px] w-[900px] bg-white shadow-xl border rounded-sm p-6 hidden group-hover:flex z-50">
    <div className="grid grid-cols-5 gap-6 text-sm text-gray-700">
      {/* Column 1 */}
      <div>
        <h4 className="font-bold mb-2">For Home</h4>
        <ul className="space-y-1">
          <li>Irons</li>
          <li>Garment Steamers</li>
          <li>Washing Machines</li>
          <li>Clothes Dryers</li>
          <li>2in1 Washers & Dryers</li>
          <li>Portable Dryers</li>
          <li>Hair Dryers</li>
        </ul>
      </div>

      {/* Column 2 */}
      <div>
        <h4 className="font-bold mb-2">For Kitchen</h4>
        <ul className="space-y-1">
          <li>Coffee Makers</li>
          <li>Hand Mixers</li>
          <li>Stand Mixers</li>
          <li>Blenders</li>
          <li>Refrigerators</li>
          <li>Freezers</li>
          <li>Ice Makers</li>
        </ul>
      </div>

      {/* Column 3 */}
      <div>
        <h4 className="font-bold mb-2">Cameras</h4>
        <ul className="space-y-1">
          <li>Compact</li>
          <li>DSLR</li>
          <li>Mirrorless</li>
          <li>Medium Format</li>
          <li>Traditional Film</li>
        </ul>
      </div>

      {/* Column 4 */}
      <div>
        <h4 className="font-bold mb-2">IT Tech</h4>
        <ul className="space-y-1">
          <li>Gaming Laptops</li>
          <li>Desktops</li>
          <li>eReaders</li>
          <li>Tablets</li>
        </ul>
      </div>

      {/* Column 5 */}
      <div>
        <h4 className="font-bold mb-2">Gaming</h4>
        <ul className="space-y-1">
          <li>Action Games</li>
          <li>Consoles</li>
          <li>Multiplayer</li>
          <li>Station Consoles</li>
        </ul>
      </div>
    </div>
  </div>
  )
}
