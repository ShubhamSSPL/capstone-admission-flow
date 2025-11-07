import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GraduationCap, ArrowRight, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";

export default function ExamValidation() {
  const [examType, setExamType] = useState("");
  const [isValidating, setIsValidating] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsValidating(true);

    // Simulate validation
    setTimeout(() => {
      setIsValidating(false);
      toast({
        title: "Validation Successful",
        description: "Your entrance exam details have been verified.",
      });
      navigate("/registration/personal-details");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10"></div>
      
      <div className="relative z-10 w-full max-w-2xl animate-slide-up">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-4">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Entrance Exam Validation</h1>
          <p className="text-muted-foreground">Step 1 of 6</p>
          <Progress value={16.66} className="mt-4 max-w-md mx-auto" />
        </div>

        <Card className="glass-card shadow-glow">
          <CardHeader>
            <CardTitle>Validate Your Entrance Exam</CardTitle>
            <CardDescription>
              Enter your entrance exam details to verify your eligibility
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="exam-type">Entrance Exam Type</Label>
                <Select value={examType} onValueChange={setExamType} required>
                  <SelectTrigger id="exam-type" className="glass">
                    <SelectValue placeholder="Select exam type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mah-cet">MAH-CET</SelectItem>
                    <SelectItem value="jee-main">JEE Main</SelectItem>
                    <SelectItem value="jee-advanced">JEE Advanced</SelectItem>
                    <SelectItem value="diploma">Diploma CET</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="application-no">Application Number</Label>
                <Input
                  id="application-no"
                  placeholder="Enter your application number"
                  required
                  className="glass"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="roll-no">Roll Number</Label>
                <Input
                  id="roll-no"
                  placeholder="Enter your roll number"
                  required
                  className="glass"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="exam-year">Exam Year</Label>
                  <Select required>
                    <SelectTrigger id="exam-year" className="glass">
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2025">2025</SelectItem>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="percentile">Percentile/Score</Label>
                  <Input
                    id="percentile"
                    type="number"
                    step="0.01"
                    placeholder="Enter score"
                    required
                    className="glass"
                  />
                </div>
              </div>

              <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <div className="flex gap-3">
                  <AlertCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium mb-1">Important Information</p>
                    <p className="text-muted-foreground">
                      Your entrance exam details will be validated against official records. 
                      Make sure to enter accurate information as registered during the exam.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => navigate("/registration/start")}
                >
                  Back
                </Button>
                <Button type="submit" className="flex-1" disabled={isValidating}>
                  {isValidating ? "Validating..." : "Continue"}
                  {!isValidating && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
