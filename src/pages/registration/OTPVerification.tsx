import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, ArrowLeft, CheckCircle, Smartphone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const otpSchema = z.object({
  mobileOTP: z.string().length(6, "OTP must be 6 digits"),
  emailOTP: z.string().length(6, "OTP must be 6 digits"),
});

type OTPForm = z.infer<typeof otpSchema>;

export default function OTPVerification() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [resendTimer, setResendTimer] = useState(300); // 5 minutes
  const [isVerifying, setIsVerifying] = useState(false);
  
  const form = useForm<OTPForm>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      mobileOTP: "",
      emailOTP: "",
    },
  });

  // Get communication details from sessionStorage
  const commDetails = JSON.parse(sessionStorage.getItem("communicationDetails") || "{}");

  const handleResendOTP = (type: "mobile" | "email") => {
    toast({
      title: "OTP Resent",
      description: `A new OTP has been sent to your ${type}`,
    });
    setResendTimer(300);
  };

  const onSubmit = async (data: OTPForm) => {
    setIsVerifying(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock validation - accept 123456 for demo
    if (data.mobileOTP === "123456" && data.emailOTP === "123456") {
      const applicationId = `EN-2025-${String(Math.floor(Math.random() * 900000) + 100000)}`;
      sessionStorage.setItem("applicationId", applicationId);
      
      toast({
        title: "Verification Successful",
        description: "Your registration is complete!",
      });
      
      navigate("/registration/success");
    } else {
      toast({
        title: "Invalid OTP",
        description: "Please check the OTP and try again. Use 123456 for demo.",
        variant: "destructive",
      });
    }
    
    setIsVerifying(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2aDI0djI0SDM2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

      <div className="relative z-10 w-full max-w-2xl animate-fade-in">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-3">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-2">OTP Verification</h1>
          <p className="text-muted-foreground">Step 5 of 6</p>
        </div>

        <div className="mb-6">
          <Progress value={83} className="h-2" />
        </div>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Verify Your Contact Details</CardTitle>
            <CardDescription>Enter the OTP sent to your mobile and email</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="space-y-6">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Smartphone className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Mobile Verification</p>
                        <p className="text-xs text-muted-foreground">
                          OTP sent to {commDetails.mobile || "registered mobile"}
                        </p>
                      </div>
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="mobileOTP"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mobile OTP</FormLabel>
                          <FormControl>
                            <InputOTP maxLength={6} {...field}>
                              <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                              </InputOTPGroup>
                            </InputOTP>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button
                      type="button"
                      variant="link"
                      size="sm"
                      className="mt-2 px-0"
                      onClick={() => handleResendOTP("mobile")}
                    >
                      Resend Mobile OTP
                    </Button>
                  </div>

                  <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-secondary/10">
                        <Mail className="h-5 w-5 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Email Verification</p>
                        <p className="text-xs text-muted-foreground">
                          OTP sent to {commDetails.email || "registered email"}
                        </p>
                      </div>
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="emailOTP"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email OTP</FormLabel>
                          <FormControl>
                            <InputOTP maxLength={6} {...field}>
                              <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                              </InputOTPGroup>
                            </InputOTP>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button
                      type="button"
                      variant="link"
                      size="sm"
                      className="mt-2 px-0"
                      onClick={() => handleResendOTP("email")}
                    >
                      Resend Email OTP
                    </Button>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-accent/5 border border-accent/10">
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <p>For demo purposes, use <strong>123456</strong> as OTP for both mobile and email</p>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate("/registration/password-setup")}
                    className="flex-1"
                    disabled={isVerifying}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                  <Button type="submit" className="flex-1" disabled={isVerifying}>
                    {isVerifying ? "Verifying..." : "Verify & Complete"}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
