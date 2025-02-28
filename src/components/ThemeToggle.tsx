
import { useTheme } from "../ThemeProvider";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-full p-2 bg-secondary/80 backdrop-blur-sm text-secondary-foreground hover:bg-secondary/60 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon size={18} />
      ) : (
        <Sun size={18} />
      )}
    </button>
  );
}
