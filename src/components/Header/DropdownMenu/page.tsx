"use client";

import { useState, useRef, useEffect } from "react";

interface DropdownMenuProps {
  title: string;
  items: { label: string; href: string }[];
}

export default function DropdownMenu({ title, items }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center text-sm p-3 rounded-xs
        hover:bg-blue-100 hover:text-blue-600 transition
        dark:hover:bg-[#2a2a2a] dark:hover:text-white"
      >
        <span className=" ">{title}</span>
      </button>

      {open && (
        <ul className="absolute mt-2 w-40 bg-[#2a2a2a] rounded shadow-lg z-50">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block px-4 py-2 text-white hover:bg-[#3a3a3a] transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
