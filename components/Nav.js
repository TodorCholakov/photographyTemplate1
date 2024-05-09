
"use client"
import { usePathname } from 'next/navigation'
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


export default function Nav() {
    const pathname = usePathname();
    const menuItems = [
      "Work",
      "About",
      "Contact",
      
    ];
    return (

        <Navbar disableAnimation isBordered >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>
  
        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
        
            <p className="font-bold text-inherit text-lg">TEST NAME</p>
          </NavbarBrand>
        </NavbarContent>
  
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand>
      
            <p className="text-slate-600  text-lg font-semibold">Test name</p>
          </NavbarBrand>
          <NavbarItem>
            <Link color="foreground" href="/" className={pathname  === "/" ? "active text-sm" : "text-sm"}>
              Work
            </Link>
          </NavbarItem>
          <NavbarItem>
          <Link color="foreground" href="/about" className={pathname  === "/about" ? "active text-sm" : "text-sm"}>
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
          <Link color="foreground" href="/contact" className={pathname  === "/contact" ? "active text-sm" : "text-sm"}>
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
          
            <NavbarMenuItem>
              <Link
               
                href="#"
                size="lg"
              >
     Work
              </Link>
            </NavbarMenuItem>
        
        </NavbarMenu>
      </Navbar>
    );
  }
  