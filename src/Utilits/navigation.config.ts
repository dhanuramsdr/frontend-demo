// ============ config/navigation.config.ts ============
// ============ config/navigation.config.ts ============
import type { ReactNode } from "react";

export interface NavItem {
  label: string;
  path: string;
  icon?: ReactNode;
}

export interface NavGroup {
  type: "link" | "dropdown";
  label: string;
  icon?: ReactNode;
  path?: string; // For type "link"
  items?: NavItem[]; // For type "dropdown"
}

// Define all your navigation items in one place
export const navigationConfig: NavGroup[] = [
  {
    type: "link",
    label: "Dashboard",
    path: "/dashboard",
    icon: "📊",
  },
  {
    type: "dropdown",
    label: "Products",
    icon: "📦",
    items: [
      { label: "Add Product", path: "/produtform", icon: "➕" },
      { label: "Product List", path: "/producttable", icon: "📋" },
      { label: "Categories", path: "/categories", icon: "🏷️" },
    ],
  },
  {
    type: "dropdown",
    label: "Users",
    icon: "👥",
    items: [
      { label: "Add User", path: "/addUserPage", icon: "👤" },
      { label: "User List", path: "/userlisttable", icon: "📇" },
      { label: "Roles", path: "/roles", icon: "🔑" },
    ],
  },
  {
    type: "dropdown",
    label: "Sellers",
    icon: "👥",
    items: [
      { label: "Add User", path: "/addUserPage", icon: "👤" },
      { label: "User List", path: "/users", icon: "📇" },
      { label: "Roles", path: "/roles", icon: "🔑" },
    ],
  },
  {
    type: "link",
    label: "Settings",
    path: "/settings",
    icon: "⚙️",
  },
  {
    type: "link",
    label: "Reports",
    path: "/reports",
    icon: "📈",
  },
];
