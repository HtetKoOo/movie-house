"use client"

import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { UserMenu } from "../user-menu"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search } from "lucide-react"

export default function Navbar() {
    return (
    <header className="flex fixed top-0 z-50 w-full bg-gray-200/20 border-b rounded-b-2xl">
            <div className="flex h-16 w-full items-center justify-between px-4 md:px-6">
                {/* Left side for small screens — Dropdown Menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-64 p-4 rounded-r-2xl">
                            <nav className="grid gap-6 text-lg font-medium">
                                <Link href="/docs" className="hover:text-foreground">
                                    Docs
                                </Link>
                                <Link href="/blog" className="hover:text-foreground">
                                    Blog
                                </Link>
                                <Link href="/about" className="hover:text-foreground">
                                    About
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Left side for medium and larger screens — Logo */}
                <Link href="/" className="hidden md:flex text-xl font-semibold tracking-tight px-10">
                    MyApp
                </Link>

                {/* Center — Navigation links for medium and larger screens */}
                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList className="flex space-x-3">
                        <NavigationMenuItem className="w-20">
                            <NavigationMenuLink asChild>
                                <Link href="/docs" className="bg-gray-200/40 font-semibold text-center">Docs</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="w-20">
                            <NavigationMenuLink asChild>
                                <Link href="/blog" className="bg-gray-200/40 font-semibold text-center">Blog</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="w-20">
                            <NavigationMenuLink asChild>
                                <Link href="/about" className="bg-gray-200/40 font-semibold text-center">About</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Center — Search for all screen sizes */}
                <div className="flex-1 flex justify-center px-4">
                    <div className="relative w-full max-w-md">
                        <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search..."
                            className="w-full pl-8 placeholder:text-white"
                        />
                    </div>
                </div>


                {/* Right side — Theme Toggle and User Menu */}
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-4">
                        <ThemeToggle />
                        <UserMenu />
                    </div>
                </div>
            </div>
        </header>
    )
}
