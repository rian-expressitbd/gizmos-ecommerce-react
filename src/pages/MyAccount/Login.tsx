import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/form/input-field";
import { Image } from "@/components/ui/image";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex h-screen">
      {/* Left Side Image */}
      <div className="hidden lg:block w-1/3">
        <Image
          className="object-cover w-full h-full"
          src="/auth_bg_img.jpg"
          alt="auth background"
        />
      </div>

      {/* Right Side Form */}
      <div className="w-full lg:w-2/3 bg-[#070C29] text-white flex flex-col justify-between">
        {/* Top Header */}
        <div className="flex justify-between items-center p-6">
          <h3 className="font-bold text-4xl">
            Gizmos<span className="text-orange-500">.</span>
          </h3>
          <Link to="/account" className="text-white font-medium">
            Register
          </Link>
        </div>

        {/* Form Section */}
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="w-full max-w-md px-4">
            <h3 className="text-2xl font-semibold mb-6">Create an account</h3>
            <form className="space-y-4">
              {/* Email */}
              <InputField
                id="email"
                type="email"
                label="Email"
                placeholder="e.g. howard.thurman@gmail.com"
                labelClassName="text-white"
                inputClassName="text-white bg-transparent"
              />

              {/* Password */}
              <InputField
                id="password"
                type="password"
                label="Password"
                placeholder="password"
                labelClassName="text-white"
                inputClassName="text-white bg-transparent"
              />

              {/* Forgot Password */}
              <div className="text-right text-sm">
                <Link
                  to="/forgot-password"
                  className="text-blue-400 hover:underline"
                >
                  Forgot password
                </Link>
              </div>

              {/* Submit Button */}
              <Button
                title="submit-btn"
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 transition-colors w-full flex items-center justify-center gap-2 p-4"
              >
                <span>Login</span>
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-400 mb-6 px-4">
          You acknowledge that you read, and agree to our{" "}
          <Link to="/terms" className="text-blue-400 underline cursor-pointer">
            Terms of Service
          </Link>{" "}
          and our{" "}
          <Link to="/terms" className="text-blue-400 underline cursor-pointer">
            Privacy Policy
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
