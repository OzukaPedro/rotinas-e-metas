"use client";

import { MoonIcon } from "@heroicons/react/16/solid";
import { SunIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

type AvailableThemes = "dark" | "light";

export default function ChangeTheme() {
  const [theme, setTheme] = useState<AvailableThemes>("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as AvailableThemes;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    } else {
      document.documentElement.classList.add("dark"); // default
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = (e: React.MouseEvent) => {
    e.preventDefault();
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <a
      onClick={toggleTheme}
      href="#"
      className=" underline cursor-pointer w-8 h-8 rounded-3xl flex justify-center
      items-center border-2 text-gray-100 dark:text-gray-900 bg-gray-900 dark:bg-gray-100
      border-gray-900 dark:border-gray-100 relative z-50"
    >
      {theme === "dark" ? (
        <SunIcon className="w-4 h-4" />
      ) : (
        <MoonIcon className="w-4 h-4" />
      )}
    </a>
  );
}
