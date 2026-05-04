// ============ components/Dropdown.tsx ============
import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "../Utilits/utils";

export interface DropdownItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
}

interface DropdownProps {
  label: string;
  items: DropdownItem[];
  icon?: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

export function Dropdown({
  label,
  items,
  icon,
  isOpen: externalIsOpen,
  onToggle,
  className = "",
}: DropdownProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const setIsOpen = onToggle || setInternalIsOpen;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsOpen]);

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-2 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 hover:shadow-md flex items-center justify-between gap-2"
      >
        <div className="flex items-center gap-2">
          {icon && <span className="text-gray-600">{icon}</span>}
          <span>{label}</span>
        </div>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 dark:border-gray-700 pl-2">
          {items.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "p-2 rounded-lg transition-all duration-200 w-full block",
                  isActive
                    ? "border-2 border-blue-300 text-gray-700 bg-blue-50"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 hover:shadow-md",
                )
              }
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center gap-2">
                {item.icon && (
                  <span className="text-gray-500">{item.icon}</span>
                )}
                {item.label}
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}
