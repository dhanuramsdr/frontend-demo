// components/MultiSelect.tsx
import { useState, useEffect, useRef } from "react";

interface MultiSelectProps {
  queryResult: any; // React Query result
  selectedIds: string[]; // Array of selected IDs
  onChange: (selectedIds: string[]) => void; // Returns array of IDs
  label?: string;
  displayKey?: string;
  valueKey?: string;
  placeholder?: string;
}

const MultiSelect = ({
  queryResult,
  selectedIds,
  onChange,
  label,
  displayKey = "name",
  valueKey = "id",
  placeholder = "Search products...",
}: MultiSelectProps) => {
  const { data, isLoading, isError, error } = queryResult;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);

  const items = data?.products || data?.data || data || [];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter items based on search
  const filteredItems = items.filter((item: any) =>
    item[displayKey]?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Check if item is selected
  const isSelected = (item: any) => {
    return selectedIds.includes(item[valueKey]);
  };

  // Get item by ID
  const getItemById = (id: string) => {
    return items.find((item: any) => item[valueKey] === id);
  };

  // Toggle selection
  const toggleItem = (item: any) => {
    if (isSelected(item)) {
      // Remove ID from array
      onChange(selectedIds.filter((id) => id !== item[valueKey]));
    } else {
      // Add ID to array
      onChange([...selectedIds, item[valueKey]]);
    }
  };

  // Remove item
  const removeItem = (id: string) => {
    onChange(selectedIds.filter((selectedId) => selectedId !== id));
  };

  if (isLoading) {
    return (
      <div className="space-y-1">
        {label && <label className="block text-sm font-medium">{label}</label>}
        <div className="border rounded-lg p-2 text-gray-500">
          Loading products...
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="space-y-1">
        {label && <label className="block text-sm font-medium">{label}</label>}
        <div className="border rounded-lg p-2 text-red-500">
          Error: {error?.message}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-1" ref={wrapperRef}>
      {label && <label className="block text-sm font-medium">{label}</label>}

      <div className="relative">
        {/* Input Container */}
        <div
          className={`border rounded-lg p-2 min-h-[42px] cursor-text bg-white ${
            isDropdownOpen
              ? "border-blue-500 ring-2 ring-blue-200"
              : "border-gray-300"
          }`}
          onClick={() => setIsDropdownOpen(true)}
        >
          <div className="flex flex-wrap gap-1">
            {/* Selected Items as Tags */}
            {selectedIds.map((id) => {
              const item = getItemById(id);
              return item ? (
                <span
                  key={id}
                  className="bg-blue-500 text-white px-2 py-1 rounded-md text-sm flex items-center gap-1"
                >
                  {item[displayKey]}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeItem(id);
                    }}
                    className="hover:bg-blue-600 rounded-full px-1 text-white"
                  >
                    ×
                  </button>
                </span>
              ) : null;
            })}

            {/* Search Input */}
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsDropdownOpen(true)}
              placeholder={selectedIds.length === 0 ? placeholder : ""}
              className="flex-1 outline-none min-w-[100px]"
            />
          </div>
        </div>

        {/* Dropdown List */}
        {isDropdownOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-auto">
            {filteredItems.length === 0 ? (
              <div className="p-3 text-gray-500 text-center">
                {searchTerm ? "No matching products" : "No products available"}
              </div>
            ) : (
              filteredItems.map((item: any) => (
                <div
                  key={item[valueKey]}
                  onClick={() => toggleItem(item)}
                  className={`p-2 cursor-pointer hover:bg-gray-100 flex items-center gap-2 ${
                    isSelected(item) ? "bg-blue-50" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isSelected(item)}
                    onChange={() => {}}
                    className="w-4 h-4"
                  />
                  <span>{item[displayKey]}</span>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* Show count of selected items */}
      {selectedIds.length > 0 && (
        <div className="text-xs text-gray-500 mt-1">
          {selectedIds.length} product(s) selected
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
