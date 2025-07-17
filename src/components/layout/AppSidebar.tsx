import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Calendar,
  Users,
  FileText,
  CreditCard,
  BarChart3,
  Settings,
  Home,
  CalendarDays,
  Stethoscope
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter
} from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'

const navigationItems = [
  {
    title: 'Dashboard',
    url: '/',
    icon: Home,
    group: 'main'
  },
  {
    title: 'Patients',
    url: '/patients',
    icon: Users,
    group: 'main'
  },
  {
    title: 'Appointments',
    url: '/appointments',
    icon: Calendar,
    group: 'main'
  },
  {
    title: 'Calendar View',
    url: '/calendar',
    icon: CalendarDays,
    group: 'main'
  },
  {
    title: 'Medical Records',
    url: '/medical-records',
    icon: FileText,
    group: 'clinical'
  },
  {
    title: 'Billing',
    url: '/billing',
    icon: CreditCard,
    group: 'admin'
  },
  {
    title: 'Reports',
    url: '/reports',
    icon: BarChart3,
    group: 'admin'
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: Settings,
    group: 'admin'
  }
]

export default function AppSidebar() {
  const location = useLocation()

  const mainItems = navigationItems.filter(item => item.group === 'main')
  const clinicalItems = navigationItems.filter(item => item.group === 'clinical')
  const adminItems = navigationItems.filter(item => item.group === 'admin')

  return (
    <Sidebar className="border-r border-border/40">
      <SidebarHeader className="border-b border-border/40 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Stethoscope className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">Clinical Pro</h1>
            <p className="text-sm text-muted-foreground">Practice Manager</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4 py-6">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
            Main
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      "w-full justify-start gap-3 px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                      location.pathname === item.url && "bg-accent text-accent-foreground"
                    )}
                  >
                    <Link to={item.url}>
                      <item.icon className="h-4 w-4" />
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
            Clinical
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {clinicalItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      "w-full justify-start gap-3 px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                      location.pathname === item.url && "bg-accent text-accent-foreground"
                    )}
                  >
                    <Link to={item.url}>
                      <item.icon className="h-4 w-4" />
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
            Administration
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      "w-full justify-start gap-3 px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                      location.pathname === item.url && "bg-accent text-accent-foreground"
                    )}
                  >
                    <Link to={item.url}>
                      <item.icon className="h-4 w-4" />
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border/40 p-4">
        <div className="flex items-center gap-3 px-2">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-sm font-medium text-primary">DR</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">Dr. Smith</p>
            <p className="text-xs text-muted-foreground truncate">Family Medicine</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}