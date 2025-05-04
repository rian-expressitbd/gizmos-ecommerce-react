import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/form/input-field";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function ForgotPasswordStepTwo() {
  return (
    <div className="bg-black/50 h-screen flex items-center justify-center">
      <div className="bg-[#F7F8FA] w-[30vw]    p-6">
        <div>
          <h3 className="text-2xl font-semibold text-center">
            {" "}
            Check your email
          </h3>
          <p className="text-sm mt-2 text-center text-gray-500 px-[6rem]">
            Please enter your 6-digit one-time code. Then create and confirm
            your new password.
          </p>
          <div className="mt-[40px] flex flex-col px-5">
            <h5 className="text-md">6-digit One Time Code </h5>
            <InputField
              type="number"
              placeholder="123456"
              id="six-digit-code"
            />
          </div>
          <div className="mt-5 flex flex-col px-5">
            <h5 className="text-md">New Password </h5>
            <InputField
              type="password"
              placeholder="New Password"
              id="new-password"
            />
          </div>
          <div className="mt-5 flex flex-col px-5">
            <h5 className="text-md">Confirm Password </h5>
            <InputField
              type="confirm_password"
              placeholder="Confirm Password"
              id="confirm-password"
            />
          </div>
        </div>
        <div className="px-5">
          <Button
            className="bg-blue-600 hover:bg-blue-700 transition-colors w-full flex items-center justify-center gap-2 p-4 "
            title="password-reset-btn"
          >
            Send Password Reset Email
          </Button>
          <Link
            className="mt-5 flex gap-2 items-center justify-center text-blue-600"
            to="/forgot-password"
          >
            <FaArrowLeftLong />
            <p>Send A New Reset Code</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
