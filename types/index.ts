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
  password?: boolean;
};
