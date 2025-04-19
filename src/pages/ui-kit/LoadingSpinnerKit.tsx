import {
  LoadingSpinner,
  LoadingSpinnerBounce,
  LoadingSpinnerDualColor,
  LoadingSpinnerPulse,
  LoadingSpinnerTyping,
} from "../../components/ui/loading-spinner";

const LoadingSpinnerKit = () => {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Loading Spinner Kit</h1>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Basic Spinner</h2>
        <LoadingSpinner
          size="lg"
          color="blue"
          className="border-t-transparent"
        />
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">DualColor Spinner</h2>
        <LoadingSpinnerDualColor
          size="lg"
          primaryColor="green-900"
          secondaryColor="white"
        />
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Bounce Spinner</h2>
        <LoadingSpinnerBounce dotColor="bg-purple-500" />
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Pulse Spinner</h2>
        <LoadingSpinnerPulse size="sm" className="border-green-500" />
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Typing Spinner</h2>
        <LoadingSpinnerTyping dotColor="blue-500" />
      </div>
    </div>
  );
};

export default LoadingSpinnerKit;
