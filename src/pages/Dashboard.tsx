import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  FileText, 
  Calendar,
  ArrowRight,
  Trophy,
  Upload
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const applicationStatus = {
    registration: true,
    application: true,
    verification: "pending",
    merit: false,
    optionForm: false,
    allotment: false,
  };

  const timeline = [
    { event: "Registration Opens", date: "15 May 2025", status: "completed" },
    { event: "Application Deadline", date: "30 Jun 2025", status: "active" },
    { event: "Document Verification", date: "01-10 Jul 2025", status: "upcoming" },
    { event: "Merit List Publication", date: "15 Jul 2025", status: "upcoming" },
    { event: "Option Form Filling", date: "16-20 Jul 2025", status: "upcoming" },
    { event: "Round 1 Allotment", date: "25 Jul 2025", status: "upcoming" },
  ];

  const quickActions = [
    { title: "Complete Application", icon: FileText, link: "/application", variant: "primary" as const },
    { title: "Upload Documents", icon: Upload, link: "/verification", variant: "secondary" as const },
    { title: "Check Merit", icon: Trophy, link: "/merit", variant: "secondary" as const },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Section */}
      <div className="glass-card p-6 bg-gradient-hero">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome, Candidate!</h1>
            <p className="text-muted-foreground">Application ID: EN-2025-123456</p>
          </div>
          <div className="text-right">
            <Badge className="text-sm px-3 py-1">Profile 75% Complete</Badge>
          </div>
        </div>
      </div>

      {/* Application Progress */}
      <Card className="glass-card hover-lift">
        <CardHeader>
          <CardTitle>Application Progress</CardTitle>
          <CardDescription>Track your admission journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span>Overall Progress</span>
              <span className="font-medium">60%</span>
            </div>
            <Progress value={60} className="h-2" />
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-success/10">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <div>
                  <p className="text-sm font-medium">Registration</p>
                  <p className="text-xs text-muted-foreground">Completed</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-success/10">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <div>
                  <p className="text-sm font-medium">Application</p>
                  <p className="text-xs text-muted-foreground">Submitted</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-warning/10">
                <Clock className="h-5 w-5 text-warning" />
                <div>
                  <p className="text-sm font-medium">Verification</p>
                  <p className="text-xs text-muted-foreground">Pending</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <AlertCircle className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Merit List</p>
                  <p className="text-xs text-muted-foreground">Not Started</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <AlertCircle className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Option Form</p>
                  <p className="text-xs text-muted-foreground">Not Started</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <AlertCircle className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Allotment</p>
                  <p className="text-xs text-muted-foreground">Not Started</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {quickActions.map((action) => (
            <Link key={action.title} to={action.link}>
              <Card className="glass-card hover-lift hover-glow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg ${
                        action.variant === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
                      }`}>
                        <action.icon className={`h-6 w-6 ${
                          action.variant === 'primary' ? 'text-primary' : 'text-secondary'
                        }`} />
                      </div>
                      <span className="font-medium">{action.title}</span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Admission Timeline</CardTitle>
          <CardDescription>Important dates and deadlines</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className={`h-3 w-3 rounded-full ${
                    item.status === 'completed' ? 'bg-success' :
                    item.status === 'active' ? 'bg-primary animate-pulse' :
                    'bg-muted'
                  }`}></div>
                  {index < timeline.length - 1 && (
                    <div className="h-12 w-0.5 bg-border mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{item.event}</p>
                    <Badge variant={
                      item.status === 'completed' ? 'default' :
                      item.status === 'active' ? 'default' :
                      'secondary'
                    }>
                      {item.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Important Notice */}
      <Card className="glass-card border-warning/50 bg-warning/5">
        <CardContent className="p-6">
          <div className="flex gap-4">
            <AlertCircle className="h-6 w-6 text-warning flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Important Notice</h3>
              <p className="text-sm text-muted-foreground">
                Application submission deadline is 30th June 2025. Ensure all documents are uploaded 
                and verified before the deadline. Late applications will not be accepted.
              </p>
              <Button variant="link" className="p-0 h-auto mt-2 text-warning">
                Read Full Notice <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
