import {
  HomeIcon,
  UserRoundIcon,
  SettingsIcon,
  ShieldIcon,
  UserCogIcon,
  BellIcon,
} from "lucide-react";
import { SidebarItem } from "./model/sidebar-item";

export const SidebarItems: SidebarItem[] = [
  {
    label: "Home",
    href: "/app",
    icon: <HomeIcon />,
  },
  {
    label: "Profile",
    href: "/app/profile",
    icon: <UserRoundIcon />,
  },
  {
    label: "Settings",
    href: "/app/settings",
    icon: <SettingsIcon />,
    subMenu: [
      {
        label: "Account",
        href: "/app/settings/account",
        icon: <SettingsIcon size={18} />,
        subMenu: [
          {
            label: "Account Settings",
            href: "/app/settings/account/profile",
            icon: <UserCogIcon size={16} />,
          },
          {
            label: "Security Settings",
            href: "/app/settings/account/security",
            icon: <ShieldIcon size={16} />,
          },
        ],
      },
      {
        label: "Notifications",
        href: "/app/settings/notifications",
        icon: <BellIcon size={18} />,
      },
    ],
  },
];
