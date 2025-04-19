import { useState } from "react";
import Select from "../../components/ui/form/select";

interface Option {
  label: string;
  value: string | number;
}

const options: Option[] = [
  { label: "Option One", value: "1" },
  { label: "Option Two", value: "2" },
  { label: "Option Three", value: "3" },
  { label: "Option Four", value: "4" },
  { label: "Option Five", value: "5" },
];

export default function SelectKit() {
  const [singleSelected, setSingleSelected] = useState<Option[]>([]);
  const [multiSelected, setMultiSelected] = useState<Option[]>([]);
  const [customClassSelected, setCustomClassSelected] = useState<Option[]>([]);
  const [disabledSelected, setDisabledSelected] = useState<Option[]>([]);

  return (
    <div className='p-6 space-y-6'>
      {/* Single Select Mode */}
      <div className='space-y-2'>
        <h2 className='text-lg font-semibold'>Single Select</h2>
        <Select
          options={options}
          value={singleSelected}
          onChange={setSingleSelected}
          placeholder='Choose an option'
          mode='single'
        />
        <div className='text-sm'>
          Selected: {singleSelected.length > 0 ? singleSelected.map((s) => s.label).join(", ") : "None"}
        </div>
      </div>

      {/* Multi Select Mode */}
      <div className='space-y-2'>
        <h2 className='text-lg font-semibold'>Multi Select</h2>
        <Select
          options={options}
          value={multiSelected}
          onChange={setMultiSelected}
          placeholder='Choose options'
          mode='multi'
        />
        <div className='text-sm'>
          Selected: {multiSelected.length > 0 ? multiSelected.map((s) => s.label).join(", ") : "None"}
        </div>
      </div>

      {/* Custom ClassName */}
      <div className='space-y-2'>
        <h2 className='text-lg font-semibold'>Custom Styling</h2>
        <Select
          options={options}
          value={customClassSelected}
          onChange={setCustomClassSelected}
          placeholder='Choose options'
          mode='multi'
          className='border-2 border-purple-500 rounded-lg shadow-lg' // Custom class
        />
        <div className='text-sm'>
          Selected: {customClassSelected.length > 0 ? customClassSelected.map((s) => s.label).join(", ") : "None"}
        </div>
      </div>

      {/* Disabled State */}
      <div className='space-y-2'>
        <h2 className='text-lg font-semibold'>Disabled Select</h2>
        <Select
          options={options}
          value={disabledSelected}
          onChange={setDisabledSelected}
          placeholder='Choose options'
          mode='multi'
          disabled
        />
        <div className='text-sm'>
          Selected: {disabledSelected.length > 0 ? disabledSelected.map((s) => s.label).join(", ") : "None"}
        </div>
      </div>
    </div>
  );
}
