import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Toaster } from "@/components/ui/sonner";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <>
      <Helmet>
        <html lang="en" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
}
