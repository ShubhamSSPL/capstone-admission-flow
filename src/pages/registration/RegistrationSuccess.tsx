import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Download, Mail, Smartphone, GraduationCap, ArrowRight } from "lucide-react";

export default function RegistrationSuccess() {
  const navigate = useNavigate();
  const [applicationId, setApplicationId] = useState("");
  
  useEffect(() => {
    const appId = sessionStorage.getItem("applicationId");
    if (!appId) {
      // If no application ID, redirect to start
      navigate("/registration/start");
    } else {
      setApplicationId(appId);
    }
  }, [navigate]);

  const handleDownloadAcknowledgement = () => {
    // Mock download functionality
    alert("Acknowledgement would be downloaded as PDF in production");
  };

  const handlePrintAcknowledgement = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2aDI0djI0SDM2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

      <div className="relative z-10 w-full max-w-3xl animate-fade-in">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 mb-4 animate-scale-in">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Registration Successful!
          </h1>
          <p className="text-muted-foreground text-lg">Step 6 of 6 - Complete</p>
        </div>

        <div className="mb-8">
          <Progress value={100} className="h-2" />
        </div>

        <Card className="glass-card shadow-glow mb-6">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Your Application ID</CardTitle>
            <CardDescription>Save this ID for future reference</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center p-6 rounded-lg bg-gradient-primary mb-6">
              <p className="text-sm text-white/80 mb-2">Application ID</p>
              <p className="text-3xl font-bold text-white tracking-wider">{applicationId}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Smartphone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">SMS Sent</p>
                    <p className="text-xs text-muted-foreground">Check your mobile</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-secondary/10">
                    <Mail className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email Sent</p>
                    <p className="text-xs text-muted-foreground">Check your inbox</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={handleDownloadAcknowledgement}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Acknowledgement
              </Button>
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={handlePrintAcknowledgement}
              >
                Print Acknowledgement
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card mb-6">
          <CardHeader>
            <CardTitle>What's Next?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary text-sm font-medium flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="font-medium">Login to Your Account</p>
                  <p className="text-sm text-muted-foreground">
                    Use your registered email and password to access your dashboard
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary text-sm font-medium flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="font-medium">Complete Application Form</p>
                  <p className="text-sm text-muted-foreground">
                    Fill the detailed 10-step application form with all required documents
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary text-sm font-medium flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="font-medium">Document Verification</p>
                  <p className="text-sm text-muted-foreground">
                    Upload required documents and attend verification as scheduled
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary text-sm font-medium flex-shrink-0">
                  4
                </div>
                <div>
                  <p className="font-medium">Merit List & Option Form</p>
                  <p className="text-sm text-muted-foreground">
                    Check merit list and fill option form with college preferences
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/login" className="flex-1">
            <Button className="w-full" size="lg">
              <GraduationCap className="mr-2 h-5 w-5" />
              Proceed to Login
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        <div className="text-center mt-6 text-sm text-muted-foreground">
          <p>For assistance, contact: support@capmaharashtra.in</p>
          <p className="mt-1">Helpline: 1800-XXX-XXXX (Mon-Sat, 9 AM - 6 PM)</p>
        </div>
      </div>
    </div>
  );
}
