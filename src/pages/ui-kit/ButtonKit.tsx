import { Button } from "../../components/ui/button";

import { ButtonProps } from "../../components/ui/button";
import { ButtonGroup } from "../../components/ui/button-group";

const ButtonKit = () => {
  const variants: ButtonProps["variant"][] = [
    "default",
    "flat",
    "edge",
    "outline",
    "outline-flat",
    "outline-edge",
  ];
  const sizes: ButtonProps["size"][] = ["xs", "sm", "md", "lg", "xl"];

  return (
    <div className="space-y-2">
      {variants.map((variant) => (
        <div key={variant} className="space-y-4">
          <h2 className="text-xl font-semibold capitalize border-b">
            {variant} Buttons
          </h2>
          <div className="flex flex-wrap gap-4">
            {sizes.map((size) => (
              <Button
                title={`${variant} (${size})`}
                key={size}
                variant={variant}
                size={size}
                className="bg-primary"
              >
                {variant} ({size})
              </Button>
            ))}
          </div>
        </div>
      ))}

      <ButtonGroup
        align="center"
        orientation="horizontal"
        className="bg-slate-400 w-fit rounded"
      >
        <Button title="Button" variant="ghost" className="rounded">
          Button 1
        </Button>
        <Button title="Button" variant="ghost" className="rounded">
          Button 2
        </Button>
        <Button title="Button" variant="ghost" className="rounded">
          Button 3
        </Button>
      </ButtonGroup>
    </div>
  );
};
export default ButtonKit;
