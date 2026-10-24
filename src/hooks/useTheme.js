import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage.js";

/* 저장된 테마가 없으면 시스템 설정(prefers-color-scheme)을 따릅니다. */
export function useTheme() {
  const [theme, setTheme] = useLocalStorage("kpt-theme", null);

  useEffect(() => {
    if (theme) document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggle = () => {
    const isDark = theme ? theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(isDark ? "light" : "dark");
  };

  return { theme, toggle };
}
