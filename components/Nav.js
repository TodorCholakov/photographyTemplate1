
"use client"
import { usePathname } from 'next/navigation'
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


export default function Nav() {
    const pathname = usePathname();
    const menuItems = [
      "Profile",
      "Dashboard",
      "Activity",
      "Analytics",
      "System",
      "Deployments",
      "My Settings",
      "Team Settings",
      "Help & Feedback",
      "Log Out",
    ];
    return (

        <Navbar disableAnimation isBordered >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>
  
        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
        
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
        </NavbarContent>
  
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand>
      
            <p className="text-slate-600 text-lg font-semibold">Todor Cholakov</p>
          </NavbarBrand>
          <NavbarItem>
            <Link color="foreground" href="/" className={pathname  === "/" ? "active" : ""}>
              Work
            </Link>
          </NavbarItem>
          <NavbarItem>
          <Link color="foreground" href="/about" className={pathname  === "/about" ? "active" : ""}>
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
          <Link color="foreground" href="/contact" className={pathname  === "/contact" ? "active" : ""}>
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
  
        <NavbarContent justify="end">
          <NavbarItem>
            <Link href="#" className="text-slate-600"><FaFacebookF /></Link>
          </NavbarItem>
          <NavbarItem>
          <Link href="#" className="text-slate-600"><FaInstagram /></Link>
          </NavbarItem>
        </NavbarContent>
  
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    );
  }
  