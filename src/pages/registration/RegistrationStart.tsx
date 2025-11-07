import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, GraduationCap, Shield, Clock, FileText } from "lucide-react";

export default function RegistrationStart() {
  const steps = [
    "Entrance Exam Validation",
    "Personal Information",
    "Communication Details",
    "Password Setup",
    "OTP Verification",
    "Registration Complete"
  ];

  const requirements = [
    { icon: FileText, text: "Valid Entrance Exam Details (MAH-CET/JEE/NEET)" },
    { icon: Shield, text: "Valid Email Address & Mobile Number" },
    { icon: Clock, text: "Approximately 15 minutes to complete" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2aDI0djI0SDM2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

      <div className="relative z-10 w-full max-w-4xl animate-slide-up">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-primary mb-4 animate-float">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Start Your Registration
          </h1>
          <p className="text-muted-foreground text-lg">Maharashtra Engineering Admissions 2025-26</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Registration Steps</CardTitle>
              <CardDescription>Complete these 6 simple steps</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-sm">{step}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Before You Begin</CardTitle>
              <CardDescription>Requirements for registration</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-secondary/10">
                      <req.icon className="h-5 w-5 text-secondary" />
                    </div>
                    <span className="text-sm flex-1">{req.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="glass-card shadow-glow">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Ready to Register?</h3>
                <p className="text-muted-foreground mb-4">
                  Create your account to participate in the Centralized Admission Process for Engineering colleges across Maharashtra.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Registration is completely free</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Link to="/registration/exam-validation">
                  <Button size="lg" className="w-full md:w-auto">
                    Start Registration
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" size="lg" className="w-full md:w-auto">
                    Already Registered? Login
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6 text-sm text-muted-foreground">
          <p>For assistance, contact: support@capmaharashtra.in</p>
          <p className="mt-1">Helpline: 1800-XXX-XXXX (Mon-Sat, 9 AM - 6 PM)</p>
        </div>
      </div>
    </div>
  );
}
