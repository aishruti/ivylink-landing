import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

// PERF: NotFound is rarely hit, so lazy-load it. It never enters the
// critical bundle for the landing page.
const NotFound = lazy(() => import("./pages/NotFound"));

/*
 * PERF: The original App.tsx wrapped the tree in QueryClientProvider,
 * TooltipProvider, Toaster and Sonner. None of those are used on the
 * landing page. Removing them strips @tanstack/react-query, sonner, and
 * several @radix-ui/* packages out of the critical bundle entirely.
 *
 * If/when an interactive surface (e.g. WaitlistDialog with toasts) gets
 * added back, wrap *just that surface* in the providers it needs rather
 * than the whole app.
 */
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route
        path="*"
        element={
          <Suspense fallback={null}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default App;
