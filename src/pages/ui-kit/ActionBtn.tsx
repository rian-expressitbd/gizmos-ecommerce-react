import { ActionBtn } from "@/components/ui/action-btn";
import { FaTrash, FaEdit, FaEye } from "react-icons/fa";

export default function ActionButton() {
  const handleView = () => alert("View action clicked");
  const handleEdit = () => alert("Edit action clicked");
  const handleDelete = () => alert("Delete action clicked");

  const actionItems = [
    {
      label: "View",
      icon: FaEye,
      onClick: handleView,
      className: "text-blue-500",
    },
    {
      label: "Edit",
      icon: FaEdit,
      onClick: handleEdit,
      className: "text-yellow-500",
    },
    {
      label: "Delete",
      icon: FaTrash,
      onClick: handleDelete,
      className: "text-red-500",
    },
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50 dark:bg-gray-900">
      <ActionBtn
        items={actionItems}
        buttonClassName="bg-gray-100 dark:bg-gray-800"
      />
    </div>
  );
}
