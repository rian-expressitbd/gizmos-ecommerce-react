import { ToggleSwitch } from "@/components/ui/toggle-switch";
import { useState } from "react";

export default function ToggleSwitches() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked((prev) => !prev); 
  };

  return (
    <div>
      <ToggleSwitch id="1" checked={isChecked} onChange={handleChange} />
    </div>
  );
}
