import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Project pages
import EcommercePage from "@/projects/ecommerce/EcommercePage";
import LMSPage from "@/projects/lms/LMSPage";
import DashboardPage from "@/projects/dashboard/DashboardPage";
import WeatherPage from "@/projects/weather/WeatherPage";
import TaskAPIPage from "@/projects/api/TaskAPIPage";
import ChatAPIPage from "@/projects/chat/ChatAPIPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects/ecommerce" element={<EcommercePage />} />
            <Route path="/projects/lms" element={<LMSPage />} />
            <Route path="/projects/dashboard" element={<DashboardPage />} />
            <Route path="/projects/weather" element={<WeatherPage />} />
            <Route path="/projects/task-api" element={<TaskAPIPage />} />
            <Route path="/projects/chat-api" element={<ChatAPIPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
