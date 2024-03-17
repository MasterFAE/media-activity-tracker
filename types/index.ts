export type SidebarItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
  subMenu?: SidebarItem[];
};

export type FormField<T> = {
  label: string;
  placeholder?: string;
  name: keyof T;
  description?: string;
  type?:
    | "text"
    | "password"
    | "multiselect"
    | "dropdown"
    | "checkbox"
    | "number";
  dropdownItems?: FormDropdownItem[];
};

export type FormDropdownItem = {
  label: string;
  value: string;
};
