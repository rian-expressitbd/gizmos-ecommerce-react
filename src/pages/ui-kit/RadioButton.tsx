import { RadioButton } from "@/components/ui/form/radio-btn";
import { useState } from "react";

export default function RadioButtons() {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <RadioButton
        id="1"
        name="radio"
        value="option1"
        label="Option 1"
        onChange={handleChange}
        checked={selectedOption === "option1"}
      />
        <RadioButton
        id="2"
        name="radio1"
        value="option2"
        label="Option 2"
        onChange={handleChange}
        checked={selectedOption === "option2"}
      />
    </div>
  );
}
