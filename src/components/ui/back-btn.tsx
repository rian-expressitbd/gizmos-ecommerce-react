import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router";
import { Button, ButtonProps } from "./button";

// Define the variant types explicitly
type ButtonVariant = ButtonProps["variant"];

interface BackButtonProps {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonProps["size"];
}

const BackButton = ({ className, variant = "default", size = "md" }: BackButtonProps) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    // <Tooltip content='Go back' position='right' className={`${className} text-nowrap w-fit`}>
    <Button
      title='Back'
      onClick={handleGoBack}
      variant={variant}
      size={size}
      className={`${className} hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full p-2`}
    >
      <FaChevronLeft size={14} />
    </Button>
    // </Tooltip>
  );
};

export default BackButton;
