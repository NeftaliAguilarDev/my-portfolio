"use client";

import { TerminalWindow } from "@phosphor-icons/react";
import Link from "next/link";
export function Header() {
  return (
    <header className="container mx-auto flex justify-between items-center p-5 fixed top-0 left-0 right-0 z-10 bg-white">
      <Link href="/" className="flex items-center gap-2">
        <TerminalWindow size={24} />
        Neftali Aguilar
      </Link>
      <Link href="/" className="p-button">
        Download CV
      </Link>
    </header>
  );
}
