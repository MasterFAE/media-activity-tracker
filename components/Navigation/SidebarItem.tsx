"use client";
import React from "react";
import type { SidebarItem } from "@/model/sidebar-item";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";

type Props = {
  item: SidebarItem;
};

const SidebarItem = ({ item }: Props) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const path = usePathname();
  const isActive = path === item.href;
  return (
    <>
      {item.subMenu ? (
        <div>
          <BaseItem {...{ item, isActive, menuOpen, setMenuOpen }} />
          {menuOpen && (
            <div className="ml-4">
              {item.subMenu.map((subItem, index) => (
                <SidebarItem item={subItem} key={index} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <BaseItem {...{ item, isActive }} />
      )}
    </>
  );
};

const BaseItem = ({
  item,
  isActive,
  menuOpen,
  setMenuOpen,
}: {
  item: SidebarItem;
  isActive: boolean;
  menuOpen?: any;
  setMenuOpen?: any;
}) => {
  const templateClass = `flex items-center w-full space-x-2 p-2 hover:bg-primary-foreground hover:transition-colors rounded-lg ${
    isActive ? "bg-primary-foreground" : ""
  }`;
  return item.subMenu ? (
    <button onClick={() => setMenuOpen(!menuOpen)} className={templateClass}>
      {item.icon}
      <div className="flex space-x-1 items-center">
        <span>{item.label}</span>
        {menuOpen ? (
          <ChevronDownIcon size={16} />
        ) : (
          <ChevronRightIcon size={16} />
        )}
      </div>
    </button>
  ) : (
    <>
      <Link href={item.href} className={templateClass}>
        {item.icon}
        <span>{item.label}</span>
      </Link>
    </>
  );
};
export default SidebarItem;
