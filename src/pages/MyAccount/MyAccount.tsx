import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/form/input-field";
import CommonLayout from "@/layouts/common-layout";

export default function MyAccount() {
  return (
    <CommonLayout>
      <div className="mt-3">
        <Breadcrumb />
      </div>
      <div className="mt-[50px]">
        <h2 className="text-3xl font-semibold">Login</h2>
        <div className="mt-5">
          <form action="">
            <InputField
              id="username"
              type="text"
              placeholder="Enter Username or Email"
              label="Username or Email*"
            />
            <div className="mt-4">
              <InputField
                id="password"
                type="password"
                placeholder="Enter Password"
                label="Password"
              />
            </div>
            <div className="mt-3 mb-5">
              <Button
                className="bg-blue-600 text-white px-3 p-2"
                type="submit"
                title="Submit"
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </CommonLayout>
  );
}
