import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function Breadcrumbs() {
  return (
    <div>
      <Breadcrumb
        className="mb-4 text-sm"
        separator={<span className="mx-1 text-gray-400">/</span>}
        labelMap={{
          dashboard: "Dashboard",
          users: "All Users",
          profile: "Profile Details",
        }}
      />
    </div>
  );
}
