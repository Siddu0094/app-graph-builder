import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import "./index.css";
import { useThemeStore } from "./store/useThemeStore";


const queryClient = new QueryClient();


// eslint-disable-next-line react-refresh/only-export-components
function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useThemeStore((s) => s.theme);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    );
  }, [theme]);

  return <>{children}</>;
}




ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>

      <App />
      </ThemeProvider>
    </QueryClientProvider>
    
  </React.StrictMode>
);
