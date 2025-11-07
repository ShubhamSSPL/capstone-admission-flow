import { 
  Home, 
  UserPlus, 
  FileText, 
  CheckCircle, 
  ListOrdered, 
  AlertCircle,
  FileCheck,
  Award,
  Building2,
  HelpCircle,
  Settings,
  LogOut
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Registration", url: "/registration", icon: UserPlus },
  { title: "Application Form", url: "/application", icon: FileText },
  { title: "Document Verification", url: "/verification", icon: CheckCircle },
  { title: "Merit List", url: "/merit", icon: Award },
  { title: "Grievance", url: "/grievance", icon: AlertCircle },
  { title: "Option Form", url: "/option-form", icon: ListOrdered },
  { title: "Allotment", url: "/allotment", icon: FileCheck },
  { title: "Institute Reporting", url: "/institute", icon: Building2 },
  { title: "Support", url: "/support", icon: HelpCircle },
];

export function AppSidebar() {
  const { open } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath.startsWith(path);

  return (
    <Sidebar className={open ? "w-64" : "w-16"} collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
            CAP
          </div>
          {open && (
            <div className="flex flex-col">
              <span className="font-bold text-sidebar-foreground">CAP System</span>
              <span className="text-xs text-sidebar-foreground/70">Maharashtra</span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <NavLink 
                      to={item.url}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors"
                      activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    >
                      <item.icon className="h-5 w-5" />
                      {open && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <NavLink to="/settings" className="flex items-center gap-3 px-3 py-2">
                <Settings className="h-5 w-5" />
                {open && <span>Settings</span>}
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <button className="flex items-center gap-3 px-3 py-2 w-full text-left text-destructive hover:bg-destructive/10">
                <LogOut className="h-5 w-5" />
                {open && <span>Logout</span>}
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
