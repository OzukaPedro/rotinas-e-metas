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
      className=" underline cursor-pointer w-12 h-12 rounded-3xl flex justify-center
      items-center border-2 bg-gray-200 dark:bg-gray-700"
    >
      {theme === "dark" ? (
        <SunIcon className="w-6 h-6" />
      ) : (
        <MoonIcon className="w-6 h-6" />
      )}
    </a>
  );
}
