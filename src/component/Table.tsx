// components/ReusableTable.tsx
import { useOutletContext } from "react-router-dom";
import Button from "./Button";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { useExportButton } from "../Globelstate/Store";
import React from "react";

interface ReusableTableProps {
  title: string;
  queryResult: any;
  state: boolean;
}

interface OutletContextType {
  sidenav: boolean;
  setSidenav: (value: boolean) => void;
}

const ReusableTable = ({ title, queryResult, state }: ReusableTableProps) => {
  const { sidenav } = useOutletContext<OutletContextType>();
  const { data, isLoading, error, isError } = queryResult;
  const { isRequired, setIsrequired } = useExportButton();
  const products = data || [];
  console.log(products);
  console.log(data);

  // Automatically extract all keys from the first product
  const headers = products[0] ? Object.keys(products[0]) : [];
  console.log("isRequired from ReusableTable", isRequired);

  // Helper to get nested values (like seller.Name)
  const getNestedValue = (obj: any, key: string) => {
    if (key.includes(".")) {
      return key.split(".").reduce((current, k) => current?.[k], obj);
    }
    return obj?.[key];
  };

  // Handle export to Excel
  const handleExportToExcel = () => {
    if (!products || products.length === 0) {
      alert("No data to export");
      return;
    }

    // Prepare data for export - use all headers from the table
    const exportData = products.map((product: any) => {
      const row: any = {};
      headers.forEach((header) => {
        let value = getNestedValue(product, header);

        // Format values for Excel
        if (typeof value === "object" && value !== null) {
          value = JSON.stringify(value);
        } else if (value === null || value === undefined) {
          value = "N/A";
        }

        row[header] = value;
      });
      return row;
    });

    // Create worksheet
    const worksheet = XLSX.utils.json_to_sheet(exportData);

    // Create workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, title);

    // Generate Excel file
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    // Save file with title as filename
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, `${title.replace(/\s+/g, "_")}.xlsx`);
  };

  // Function to render cell content based on field type
  const renderCellContent = (product: any, header: string) => {
    const value = getNestedValue(product, header);

    // Handle objects
    if (typeof value === "object" && value !== null) {
      return JSON.stringify(value);
    }

    // Handle null/undefined
    if (value === null || value === undefined) {
      return "N/A";
    }

    // Return regular values
    return value;
  };
  React.useEffect(() => {
    setIsrequired(state);
    console.log("state", state);
  }, [state]);

  if (isLoading) {
    return <div className="p-8 text-center">Loading {title}...</div>;
  }

  if (isError) {
    return (
      <div className="p-8 text-center text-red-600">
        Error: {error?.message}
      </div>
    );
  }

  return (
    <div
      className={`border rounded-lg transition-all duration-300
      ${
        sidenav
          ? "w-full lg:max-w-[calc(100vw-320px)]" // When sidenav is open
          : "w-full" // When sidenav is closed or on mobile
      }`}
    >
      <h3 className="text-xl font-bold">{title}</h3>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            {products.length === 0 ? (
              <tr>
                <td className="p-4 text-center">No {title} found</td>
              </tr>
            ) : (
              <tr className="border-b">
                {headers.map((header) => (
                  <th
                    key={header}
                    className="p-3 text-left text-sm font-semibold"
                  >
                    {header.toUpperCase()}
                  </th>
                ))}
              </tr>
            )}
          </thead>

          <tbody>
            {products.map((product: any) => (
              <tr key={product.id} className="border-b hover:bg-gray-50">
                {headers.map((header) => (
                  <td key={header} className="p-3 text-sm">
                    {renderCellContent(product, header)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isRequired && (
        <div className="flex justify-center">
          <Button
            variant={"default"}
            size={"default"}
            onClick={handleExportToExcel}
          >
            Export
          </Button>
        </div>
      )}
    </div>
  );
};

export default ReusableTable;
