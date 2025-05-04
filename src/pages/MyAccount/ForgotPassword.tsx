import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/form/input-field";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="bg-black/50 h-screen flex items-center justify-center">
      <div className="bg-[#F7F8FA] w-[30vw] h-[40vh]   p-6">
        <div>
          <h3 className="text-2xl font-semibold text-center">
            Reset your password
          </h3>
          <p className="text-sm mt-2 text-center text-gray-500 px-[6rem]">
            Enter your email address, and we'll send instructions to reset your
            password.
          </p>
          <div className="mt-[40px] flex flex-col px-5">
            <h5 className="text-md">Email Address</h5>
            <InputField id="email" />
          </div>
        </div>
        <div className="px-5">
        <Button
          className="bg-blue-600 hover:bg-blue-700 transition-colors w-full flex items-center justify-center gap-2 p-4"
          title="password-reset-btn"
        >
          Send Password Reset Email
        </Button>

        <Link
          className="mt-5 flex gap-2 items-center justify-center text-blue-600"
          to="/code"
        >
          <p>I Already Have a Reset Code</p>
          <FaArrowRightLong />
        </Link>
        </div>
     
      </div>
    </div>
  );
}
