import { useEffect, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { debug } from "@/utils/debug";
import ErrorBoundary from "@/components/ErrorBoundary";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "./pages/Home";
import Career from "./pages/Career";
import Craft from "./pages/Craft";
import Cafe from "./pages/Cafe";
import Opportunities from "./pages/Opportunities";
import Mentors from "./pages/Mentors";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Initialize debugging in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      debug.enable();
    }
  }, []);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-[#12122B]">
              <div className="animate-pulse">Loading...</div>
            </div>
          }>
            <Toaster />
            <Sonner />
            <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <ErrorBoundary fallback={
                <div className="p-4 bg-[#12122B] text-[#FFFAE5]">
                  Navigation error occurred. Please refresh the page.
                </div>
              }>
                <Navigation />
              </ErrorBoundary>
              
              <main className="flex-grow">
                <ErrorBoundary fallback={
                  <div className="flex items-center justify-center min-h-screen bg-[#12122B] text-[#FFFAE5] p-4">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold mb-4">Page Error</h2>
                      <p className="text-[#C2C2C2] mb-4">
                        Something went wrong loading this page.
                      </p>
                      <button
                        onClick={() => window.location.reload()}
                        className="px-4 py-2 bg-gradient-to-r from-[#FFA21F] to-[#840D0D] rounded-md"
                      >
                        Try Again
                      </button>
                    </div>
                  </div>
                }>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/craft" element={<Craft />} />
                    <Route path="/cafe" element={<Cafe />} />
                    <Route path="/opportunities" element={<Opportunities />} />
                    <Route path="/mentors" element={<Mentors />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </ErrorBoundary>
              </main>
              
              <ErrorBoundary fallback={
                <div className="p-4 bg-[#12122B] text-[#FFFAE5]">
                  Footer error occurred. Please refresh the page.
                </div>
              }>
                <Footer />
              </ErrorBoundary>
            </div>
          </BrowserRouter>
          </Suspense>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
