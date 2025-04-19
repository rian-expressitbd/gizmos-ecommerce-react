import "@/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Toaster } from "sonner";
import { AppProviders } from "./lib/providers/app-provider";
import AppRouter from "./routes/AppRouter.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProviders>
      <AppRouter />
      <Toaster richColors position='top-right' />
    </AppProviders>
  </StrictMode>
);
