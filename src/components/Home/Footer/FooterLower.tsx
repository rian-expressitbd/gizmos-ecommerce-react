import { FiHeadphones, FiTruck, FiTag } from "react-icons/fi";

export default function FooterLower() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-14 text-2xl text-white">
        {/* Logo / Brand */}
        <div className="font-bold">
          Gizmos<span className="text-orange-500">.</span>
        </div>

        {/* Info Block 1 */}
        <div className="flex items-center gap-2">
          <FiHeadphones className="text-white" />
          <span>+0080 1234 56 789</span>
        </div>

        {/* Info Block 2 */}
        <div className="flex items-center gap-2">
          <FiTruck className="text-white" />
          <span>Amounts over $100</span>
        </div>

        {/* Info Block 3 */}
        <div className="flex items-center gap-2">
          <FiTag className="text-white" />
          <span>Save up to 20%</span>
        </div>
      </div>
    </div>
  );
}
