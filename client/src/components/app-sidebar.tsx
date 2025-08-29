import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Link } from "react-router";
import { getSidebarItems } from "@/utils/getSidebarItems";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";

// Sidebar brand name
const BRAND_NAME = "Logisti Core";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userData } = useUserInfoQuery(undefined);

  const data = {
    navMain: getSidebarItems(userData?.data?.role),
  };

  return (
    <Sidebar
      {...props}
      className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-gray-900 dark:to-orange-900 shadow-xl border-r border-orange-200 dark:border-orange-900"
    >
      <SidebarHeader>
        <Link to={"/"}>
          <div className="m-4 flex items-center gap-3">
            {/* Logo inspired by your uploaded image ![image1](image1) */}
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-orange-700 shadow">
              {/* Abstract "L" icon with similar color */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="url(#logistiCoreGradient)" />
                <defs>
                  <linearGradient id="logistiCoreGradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFD600" />
                    <stop offset="1" stopColor="#FF4D00" />
                  </linearGradient>
                </defs>
                <path
                  d="M8 8 L24 8 Q24 16 16 24 L8 24 Z"
                  fill="#FF4D00"
                />
                <rect x="8" y="17" width="8" height="7" fill="#FF4D00" />
              </svg>
            </span>
            <span className="text-2xl font-extrabold tracking-tight"
              style={{
                background: "linear-gradient(90deg, #1976ED 60%, #3A8DFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {BRAND_NAME}
            </span>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title} className="mb-3">
            <SidebarGroupLabel className="text-lg my-5 font-bold text-orange-700 dark:text-orange-200 tracking-wide">
              {item.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((subItem) => (
                  <SidebarMenuItem key={subItem.title} className="my-1">
                    <SidebarMenuButton
                      asChild
                      isActive={subItem.isActive}
                      className={`w-full text-left px-4 py-2 rounded-lg font-medium transition 
                        ${subItem.isActive
                          ? "bg-orange-100 dark:bg-orange-800 text-orange-700 dark:text-orange-200 shadow"
                          : "hover:bg-orange-50 dark:hover:bg-orange-900 hover:text-orange-700 dark:hover:text-orange-200"}
                      `}
                    >
                      <Link to={subItem.url}>{subItem.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail className="hidden md:block" />
    </Sidebar>
  );
}