export type SidebarItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
  subMenu?: SidebarItem[];
};
