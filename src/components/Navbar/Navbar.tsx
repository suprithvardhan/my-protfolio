"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { IconHome, IconMessage, IconUser, IconFileDescription, IconBrandProducthunt} from "@tabler/icons-react";

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "#",
      icon: <IconHome />,
    },
    {
      name: "Skills",
      link: "#",
      icon: <IconUser />,
    },
    {
      name: "Project",
      link: "#",
      icon:<IconBrandProducthunt stroke={2} />,
    },
    
    {
        name: "Resume",
        link: "#",
        icon: <IconFileDescription stroke={2} />,
      },
    
      {
        name: "Contact",
        link: "#",
        icon: <IconMessage />,
      },
  ];

  return (
    <div className="w-full">
    <FloatingNav navItems={navItems} />
    </div>
  );
}

export default Navbar;