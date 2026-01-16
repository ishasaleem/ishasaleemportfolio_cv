import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

export type ThemeContextType = {
  dark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [dark, setDark] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <ThemeContext.Provider
      value={{ dark, toggleTheme: () => setDark((d) => !d) }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
