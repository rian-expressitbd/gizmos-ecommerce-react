import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button"; // Your custom or shadcn/ui button

export default function ButtonGroups() {
  const handleClick = (label: string) => {
    console.log("Clicked:", label);
  };

  return (
    <div className="p-10 space-y-10">
      {/* Left Aligned - Horizontal - Small Spacing */}
      <div>
        <h3 className="font-semibold mb-2">
          Left Aligned (Horizontal + sm spacing)
        </h3>
        <ButtonGroup
          align="left"
          spacing="sm"
          orientation="horizontal"
          className="bg-gray-50 p-4 rounded"
          activeClassName="bg-green-500 text-white"
        >
          <Button title="Left Button 1" onClick={() => handleClick("Left 1")} className="px-3 py-2">
            Left 1
          </Button>
          <Button title="Left Button 2" onClick={() => handleClick("Left 2")} className="px-3 py-2">
            Left 2
          </Button>
          <Button title="Left Button 3" onClick={() => handleClick("Left 3")} className="px-3 py-2">
            Left 3
          </Button>
        </ButtonGroup>
      </div>

      {/* Center Aligned - Horizontal - Medium Spacing */}
      <div>
        <h3 className="font-semibold mb-2">
          Center Aligned (Horizontal + md spacing)
        </h3>
        <ButtonGroup
          align="center"
          spacing="md"
          orientation="horizontal"
          className="bg-gray-50 p-4 rounded"
          activeClassName="bg-blue-500 text-white"
        >
          <Button
            title="Center Button 1"
            onClick={() => handleClick("Center 1")} className="px-3 py-2"
          >
            Center 1
          </Button>
          <Button
            title="Center Button 2"
            onClick={() => handleClick("Center 2")} className="px-3 py-2"
          >
            Center 2
          </Button>
          <Button
            title="Center Button 3"
            onClick={() => handleClick("Center 3")} className="px-3 py-2"
          >
            Center 3
          </Button>
        </ButtonGroup>
      </div>

      {/* Right Aligned - Horizontal - Large Spacing */}
      <div>
        <h3 className="font-semibold mb-2">
          Right Aligned (Horizontal + lg spacing)
        </h3>
        <ButtonGroup
          align="right"
          spacing="lg"
          orientation="horizontal"
          className="bg-gray-50 p-4 rounded"
          activeClassName="bg-red-500 text-white"
        >
          <Button title="Right Button 1" onClick={() => handleClick("Right 1")} className="px-3 py-2">
            Right 1
          </Button>
          <Button title="Right Button 2" onClick={() => handleClick("Right 2")} className="px-3 py-2">
            Right 2
          </Button>
          <Button title="Right Button 3" onClick={() => handleClick("Right 3")} className="px-3 py-2">
            Right 3
          </Button>
        </ButtonGroup>
      </div>

      {/* Vertical Orientation - Medium Spacing */}
      <div>
        <h3 className="font-semibold mb-2">
          Vertical Orientation (center + md spacing)
        </h3>
        <ButtonGroup
          align="center"
          spacing="md"
          orientation="vertical"
          className="bg-gray-50 p-4 rounded"
          activeClassName="bg-purple-600 text-white"
        >
          <Button
            title="Vertical Button 1"
            onClick={() => handleClick("Vertical 1")} className="px-3 py-2"
          >
            Vertical 1
          </Button>
          <Button
            title="Vertical Button 2"
            onClick={() => handleClick("Vertical 2")} className="px-3 py-2"
          >
            Vertical 2
          </Button>
          <Button
            title="Vertical Button 3"
            onClick={() => handleClick("Vertical 3")} className="px-3 py-2"
          >
            Vertical 3
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
