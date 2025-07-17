import React from 'react'
import { 
  Users, 
  Calendar, 
  DollarSign, 
  Activity,
  TrendingUp,
  Clock,
  AlertCircle,
  CheckCircle
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

const statsCards = [
  {
    title: 'Total Patients',
    value: '2,847',
    change: '+12%',
    changeType: 'positive' as const,
    icon: Users,
    description: 'Active patients in system'
  },
  {
    title: "Today's Appointments",
    value: '24',
    change: '+3',
    changeType: 'positive' as const,
    icon: Calendar,
    description: '18 completed, 6 remaining'
  },
  {
    title: 'Monthly Revenue',
    value: '$48,392',
    change: '+8.2%',
    changeType: 'positive' as const,
    icon: DollarSign,
    description: 'Compared to last month'
  },
  {
    title: 'Practice Efficiency',
    value: '94%',
    change: '+2.1%',
    changeType: 'positive' as const,
    icon: Activity,
    description: 'Overall performance score'
  }
]

const upcomingAppointments = [
  {
    id: 1,
    patient: 'Sarah Johnson',
    time: '2:00 PM',
    type: 'Follow-up',
    status: 'confirmed',
    duration: '30 min'
  },
  {
    id: 2,
    patient: 'Michael Chen',
    time: '2:30 PM',
    type: 'Consultation',
    status: 'pending',
    duration: '45 min'
  },
  {
    id: 3,
    patient: 'Emma Davis',
    time: '3:15 PM',
    type: 'Check-up',
    status: 'confirmed',
    duration: '30 min'
  },
  {
    id: 4,
    patient: 'Robert Wilson',
    time: '4:00 PM',
    type: 'Treatment',
    status: 'confirmed',
    duration: '60 min'
  }
]

const recentActivity = [
  {
    id: 1,
    action: 'New patient registered',
    patient: 'Alice Thompson',
    time: '10 minutes ago',
    type: 'patient'
  },
  {
    id: 2,
    action: 'Appointment completed',
    patient: 'John Martinez',
    time: '25 minutes ago',
    type: 'appointment'
  },
  {
    id: 3,
    action: 'Payment received',
    patient: 'Lisa Anderson',
    time: '1 hour ago',
    type: 'payment'
  },
  {
    id: 4,
    action: 'Lab results uploaded',
    patient: 'David Brown',
    time: '2 hours ago',
    type: 'lab'
  }
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back, Dr. Smith. Here's what's happening in your practice today.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="gap-1">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            System Online
          </Badge>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {statsCards.map((stat, index) => (
          <Card key={index} className="relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3 text-green-600" />
                <span className="text-xs text-green-600 font-medium">{stat.change}</span>
                <span className="text-xs text-muted-foreground">from last month</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Today's Schedule */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Today's Schedule</CardTitle>
                <CardDescription>Upcoming appointments and tasks</CardDescription>
              </div>
              <Button variant="outline" size="sm">View All</Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center gap-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{appointment.time}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">{appointment.patient}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-muted-foreground">{appointment.type}</span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{appointment.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge 
                    variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {appointment.status === 'confirmed' ? (
                      <CheckCircle className="h-3 w-3 mr-1" />
                    ) : (
                      <AlertCircle className="h-3 w-3 mr-1" />
                    )}
                    {appointment.status}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity & Quick Stats */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start gap-2" variant="outline">
                <Users className="h-4 w-4" />
                Add New Patient
              </Button>
              <Button className="w-full justify-start gap-2" variant="outline">
                <Calendar className="h-4 w-4" />
                Schedule Appointment
              </Button>
              <Button className="w-full justify-start gap-2" variant="outline">
                <Activity className="h-4 w-4" />
                View Lab Results
              </Button>
            </CardContent>
          </Card>

          {/* Practice Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Practice Performance</CardTitle>
              <CardDescription>This month's key metrics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Patient Satisfaction</span>
                  <span className="font-medium">96%</span>
                </div>
                <Progress value={96} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Appointment Adherence</span>
                  <span className="font-medium">89%</span>
                </div>
                <Progress value={89} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Revenue Target</span>
                  <span className="font-medium">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 text-sm">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-foreground">{activity.action}</p>
                    <p className="text-muted-foreground font-medium">{activity.patient}</p>
                    <p className="text-muted-foreground text-xs">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}