import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { TutorialProvider } from "./context/TutorialContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicesIndex from "./pages/ServicesIndex";
import ServiceDetailPage from "./components/services/ServiceDetailPage";
import DataServicesIndex from "./pages/DataServicesIndex";
import DataServiceDetailPage from "./components/services/DataServiceDetailPage";
import AIServicesIndex from "./pages/AIServicesIndex";
import AIServiceDetailPage from "./components/services/AIServiceDetailPage";
import InfrastructureServicesIndex from "./pages/InfrastructureServicesIndex";
import InfraServiceDetailPage from "./components/services/InfraServiceDetailPage";
import TrainingServicesIndex from "./pages/TrainingServicesIndex";
import TrainingServiceDetailPage from "./components/services/TrainingServiceDetailPage";
import TalentServicesIndex from "./pages/TalentServicesIndex";
import TalentServiceDetailPage from "./components/services/TalentServiceDetailPage";
import ProductsIndex from "./pages/ProductsIndex";
import ProductDetailPage from "./components/products/ProductDetailPage";
import SolutionsIndex from "./pages/SolutionsIndex";
import SolutionDetailPage from "./components/solutions/SolutionDetailPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotEmailPage from "./pages/ForgotEmailPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import VerifyOtpPage from "./pages/VerifyOtpPage";
import DocumentationPage from "./pages/learn/DocumentationPage";
import TutorialsPage from "./pages/learn/TutorialsPage";
import TutorialDetailPage from "./pages/learn/TutorialDetailPage";
import CaseStudiesPage from "./pages/learn/CaseStudiesPage";
import CaseStudyDetailPage from "./pages/learn/CaseStudyDetailPage";
import WebinarsPage from "./pages/learn/WebinarsPage";
import CommunityPage from "./pages/learn/CommunityPage";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminTutorials from "./pages/admin/AdminTutorials";
import AdminTutorialEditor from "./pages/admin/AdminTutorialEditor";
import MDNHomePage from "./pages/learn/mdn/MDNHomePage";
import MDNCoursesPage from "./pages/learn/mdn/MDNCoursesPage";
import MDNCourseDetailPage from "./pages/learn/mdn/MDNCourseDetailPage";
import MDNRoadmapsPage from "./pages/learn/mdn/MDNRoadmapsPage";
import MDNRoadmapDetailPage from "./pages/learn/mdn/MDNRoadmapDetailPage";
import MDNBusinessPage from "./pages/learn/mdn/MDNBusinessPage";
import MDNTeachPage from "./pages/learn/mdn/MDNTeachPage";
import MDNGovernmentPage from "./pages/learn/mdn/MDNGovernmentPage";
import MDNPartnersPage from "./pages/learn/mdn/MDNPartnersPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TutorialProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesIndex />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/data-services" element={<DataServicesIndex />} />
            <Route path="/data-services/:slug" element={<DataServiceDetailPage />} />
            <Route path="/ai-services" element={<AIServicesIndex />} />
            <Route path="/ai-services/:slug" element={<AIServiceDetailPage />} />
            <Route path="/infrastructure-services" element={<InfrastructureServicesIndex />} />
            <Route path="/infrastructure-services/:slug" element={<InfraServiceDetailPage />} />
            <Route path="/training-services" element={<TrainingServicesIndex />} />
            <Route path="/training-services/:slug" element={<TrainingServiceDetailPage />} />
            <Route path="/talent-services" element={<TalentServicesIndex />} />
            <Route path="/talent-services/:slug" element={<TalentServiceDetailPage />} />
            <Route path="/products" element={<ProductsIndex />} />
            <Route path="/products/:slug" element={<ProductDetailPage />} />
            <Route path="/solutions" element={<SolutionsIndex />} />
            <Route path="/solutions/:slug" element={<SolutionDetailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-email" element={<ForgotEmailPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/verify-otp" element={<VerifyOtpPage />} />
            {/* Learn Routes */}
            <Route path="/learn/documentation" element={<DocumentationPage />} />
            <Route path="/learn/tutorials" element={<TutorialsPage />} />
            <Route path="/learn/tutorials/:slug" element={<TutorialDetailPage />} />
            <Route path="/learn/case-studies" element={<CaseStudiesPage />} />
            <Route path="/learn/case-studies/:slug" element={<CaseStudyDetailPage />} />
            <Route path="/learn/webinars" element={<WebinarsPage />} />
            <Route path="/learn/community" element={<CommunityPage />} />
            {/* MDN Routes */}
            <Route path="/learn/mdn" element={<MDNHomePage />} />
            <Route path="/learn/mdn/courses" element={<MDNCoursesPage />} />
            <Route path="/learn/mdn/courses/:slug" element={<MDNCourseDetailPage />} />
            <Route path="/learn/mdn/roadmaps" element={<MDNRoadmapsPage />} />
            <Route path="/learn/mdn/roadmaps/:slug" element={<MDNRoadmapDetailPage />} />
            <Route path="/learn/mdn/business" element={<MDNBusinessPage />} />
            <Route path="/learn/mdn/teach" element={<MDNTeachPage />} />
            <Route path="/learn/mdn/government" element={<MDNGovernmentPage />} />
            <Route path="/learn/mdn/partners" element={<MDNPartnersPage />} />
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="tutorials" element={<AdminTutorials />} />
              <Route path="tutorials/new" element={<AdminTutorialEditor />} />
              <Route path="tutorials/edit/:id" element={<AdminTutorialEditor />} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
      </TutorialProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
