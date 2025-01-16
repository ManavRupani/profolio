"use client";
import React, { useEffect, useState } from "react";
import { Menu } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ModeToggleMobile from "./theme-toggle";

export function NavigationMenuDemo() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-2 rounded-md bg-gray-200 dark:bg-gray-800">
        <Menu size={24} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[45vw] max-w-xs p-2 m-4">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
       
        <DropdownMenuItem>
          <ModeToggleMobile />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default NavigationMenuDemo;