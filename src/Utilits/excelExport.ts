import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

interface ExportToExcelProps {
  data: any[];
  fileName: string;
  sheetName?: string;
}

export const exportToExcel = ({
  data,
  fileName,
  sheetName = "Sheet1",
}: ExportToExcelProps) => {
  if (!data || data.length === 0) {
    console.warn("No data to export");
    return;
  }

  // Convert data to worksheet
  const worksheet = XLSX.utils.json_to_sheet(data);

  // Create workbook
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

  // Generate Excel file
  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });

  // Save file
  const blob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  saveAs(blob, `${fileName}.xlsx`);
};

// Alternative: Export with custom headers
export const exportToExcelWithCustomHeaders = ({
  data,
  fileName,
  headers,
  sheetName = "Sheet1",
}: {
  data: any[];
  fileName: string;
  headers: string[];
  sheetName?: string;
}) => {
  if (!data || data.length === 0) {
    console.warn("No data to export");
    return;
  }

  // Map data to include only selected headers
  const filteredData = data.map((item) => {
    const newItem: any = {};
    headers.forEach((header) => {
      newItem[header] = item[header];
    });
    return newItem;
  });

  const worksheet = XLSX.utils.json_to_sheet(filteredData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const blob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  saveAs(blob, `${fileName}.xlsx`);
};
