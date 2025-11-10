import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RegistrationStart from "./pages/registration/RegistrationStart";
import ExamValidation from "./pages/registration/ExamValidation";
import PersonalDetails from "./pages/registration/PersonalDetails";
import CommunicationDetails from "./pages/registration/CommunicationDetails";
import PasswordSetup from "./pages/registration/PasswordSetup";
import OTPVerification from "./pages/registration/OTPVerification";
import RegistrationSuccess from "./pages/registration/RegistrationSuccess";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration/start" element={<RegistrationStart />} />
          <Route path="/registration/exam-validation" element={<ExamValidation />} />
          <Route path="/registration/personal-details" element={<PersonalDetails />} />
          <Route path="/registration/communication-details" element={<CommunicationDetails />} />
          <Route path="/registration/password-setup" element={<PasswordSetup />} />
          <Route path="/registration/otp-verification" element={<OTPVerification />} />
          <Route path="/registration/success" element={<RegistrationSuccess />} />
          
          {/* Protected Routes with Layout */}
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/registration" element={<Dashboard />} />
            <Route path="/application" element={<Dashboard />} />
            <Route path="/verification" element={<Dashboard />} />
            <Route path="/merit" element={<Dashboard />} />
            <Route path="/grievance" element={<Dashboard />} />
            <Route path="/option-form" element={<Dashboard />} />
            <Route path="/allotment" element={<Dashboard />} />
            <Route path="/institute" element={<Dashboard />} />
            <Route path="/support" element={<Dashboard />} />
            <Route path="/settings" element={<Dashboard />} />
          </Route>

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
