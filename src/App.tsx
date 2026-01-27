import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
