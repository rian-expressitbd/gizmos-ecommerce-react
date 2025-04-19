import { Pagination } from "@/components/ui/pagination";

export default function Paginations() {
  const handlePageChange = () => {};
  return (
    <div>
      <Pagination
        currentPage={1}
        totalPages={10}
        itemsPerPage={1}
        totalItems={10}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
