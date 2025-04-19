import React, { Suspense, useContext, useState } from "react";
import { twMerge } from "tailwind-merge";

interface TableContextProps {
  striped?: boolean;
  hoverable?: boolean;
  size?: "sm" | "md" | "lg";
  sortConfig?: { key: string; direction: "ascending" | "descending" } | null;
  onSort?: (key: string) => void;
  variant?: "default" | "bordered" | "compact";
  footerContent?: React.ReactNode;
}

const TableContext = React.createContext<TableContextProps>({});

interface TableProps
  extends React.HTMLAttributes<HTMLTableElement>,
    TableContextProps {
  loading?: boolean;
  height?: string | number;
  emptyState?: React.ReactNode;
  footer?: React.ReactNode;
  label?: string;
  showBorder?: boolean;
  minWidth?: string | number; // New prop for minimum table width
}

export const Table = ({
  striped = false,
  hoverable = true,
  className,
  children,
  size = "md",
  onSort,
  loading = false,
  height = "auto",
  footer,
  label,
  variant = "default",
  showBorder = true,
  minWidth = "640px",
  ...props
}: TableProps) => {
  const [sortConfig, setSortConfig] =
    useState<TableContextProps["sortConfig"]>(null);

  const handleSort = (key: string) => {
    let direction: "ascending" | "descending" = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
    onSort?.(key);
  };

  const baseClasses = twMerge(
    "w-full",
    showBorder && "border border-gray-200 dark:border-gray-700",
    variant === "bordered" && "border-separate border-spacing-0",
    variant === "compact" && "[&_td]:py-1 [&_th]:py-1",
    className,
  );

  return (
    <TableContext.Provider
      value={{
        striped,
        hoverable,
        size,
        sortConfig,
        onSort: handleSort,
        variant,
      }}
    >
      <div className="flex flex-col gap-2">
        {label && <TableLabel>{label}</TableLabel>}
        <div
          className={twMerge(
            "overflow-hidden rounded bg-white dark:bg-gray-800",
            showBorder && "border border-gray-200 dark:border-gray-700",
            "relative", // For positioning any scroll indicators
          )}
          style={{ height }}
        >
          {/* Mobile scroll indicator (left) */}
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 hidden w-4 bg-gradient-to-r from-gray-100 to-transparent dark:from-gray-700 md:hidden" />

          {/* Mobile scroll indicator (right) */}
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-4 bg-gradient-to-l from-gray-100 to-transparent dark:from-gray-700 md:hidden" />

          <div className="h-full w-full overflow-auto">
            {loading ? (
              <div className="flex h-full min-h-[200px] items-center justify-center">
                <span className="loading loading-spinner loading-lg"></span>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table
                  className={baseClasses}
                  style={{ minWidth }} // Set minimum width for the table
                  {...props}
                >
                  {children}
                  {footer && <TableFooter>{footer}</TableFooter>}
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </TableContext.Provider>
  );
};

export const TableLabel = ({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={twMerge(
      "text-sm font-medium text-gray-700 dark:text-gray-300",
      className,
    )}
  >
    {children}
  </div>
);

export const TableHeader = ({
  className,
  children,
}: React.HTMLAttributes<HTMLTableSectionElement>) => {
  const { variant } = useContext(TableContext);
  return (
    <thead
      className={twMerge(
        "sticky top-0 bg-gray-50 text-left text-sm font-semibold text-gray-800 dark:bg-gray-700 dark:text-white",
        variant === "bordered" &&
          "border-b border-gray-200 dark:border-gray-600",
        className,
      )}
    >
      {children}
    </thead>
  );
};

interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  sortable?: boolean;
  sortKey?: string;
  align?: "left" | "center" | "right";
}

export const TableHead = ({
  className,
  children,
  sortable = false,
  sortKey,
  align = "left",
  ...props
}: TableHeadProps) => {
  const { sortConfig, onSort, variant } = useContext(TableContext);

  const handleSort = () => {
    if (sortable && sortKey && onSort) onSort(sortKey);
  };

  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <th
      className={twMerge(
        "px-2 py-3 text-sm font-medium text-gray-800 dark:text-white",
        variant === "bordered" &&
          "border-b border-gray-200 dark:border-gray-600",
        sortable
          ? "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
          : "",
        alignmentClasses[align],
        className,
      )}
      onClick={handleSort}
      {...props}
    >
      <div
        className={`flex items-center ${
          align === "right"
            ? "justify-end"
            : align === "center"
              ? "justify-center"
              : ""
        }`}
      >
        {children}
        {sortable && sortConfig?.key === sortKey && (
          <span className="ml-1">
            {sortConfig?.direction === "ascending" ? "↑" : "↓"}
          </span>
        )}
      </div>
    </th>
  );
};

export const TableBody = ({
  className,
  children,
}: React.HTMLAttributes<HTMLTableSectionElement>) => {
  const { striped, variant } = useContext(TableContext);
  return (
    <tbody
      className={twMerge(
        "text-sm font-medium text-gray-700 dark:text-gray-100",
        variant === "bordered"
          ? "divide-y divide-gray-200 dark:divide-gray-600"
          : "",
        striped && "even:bg-gray-50 dark:even:bg-gray-700/50",
        className,
      )}
    >
      {children}
      {/* Add empty space at the bottom */}
      <TableRow className="h-24 opacity-0">
        <TableCell colSpan={100} />
      </TableRow>
    </tbody>
  );
};

export const TableFooter = ({
  className,
  children,
}: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <tfoot
    className={twMerge(
      "sticky bottom-0 border-t border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700",
      className,
    )}
  >
    {children}
  </tfoot>
);

export const TableRow = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLTableRowElement>) => {
  const { hoverable, variant } = useContext(TableContext);
  return (
    <tr
      className={twMerge(
        variant === "bordered" &&
          "border-b border-gray-200 dark:border-gray-600",
        hoverable && "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600",
        className,
      )}
      {...props}
    >
      {children}
    </tr>
  );
};

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  loading?: boolean;
  loadingFallback?: React.ReactNode;
  align?: "left" | "center" | "right";
}

export const TableCell = ({
  className,
  children,
  loading = false,
  loadingFallback = (
    <span className="loading loading-spinner loading-xs"></span>
  ),
  align = "left",
  ...props
}: TableCellProps) => {
  const { variant } = useContext(TableContext);

  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <td
      className={twMerge(
        "p-2 text-sm text-gray-600 dark:text-gray-100",
        variant === "bordered" &&
          "border-b border-gray-200 dark:border-gray-600",
        alignmentClasses[align],
        className,
      )}
      {...props}
    >
      <Suspense fallback={loadingFallback}>
        <div
          className={`flex ${align === "right" ? "justify-end" : align === "center" ? "justify-center" : ""}`}
        >
          {loading ? loadingFallback : children}
        </div>
      </Suspense>
    </td>
  );
};
