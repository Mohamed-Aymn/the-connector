"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useLocale, useTranslations } from "next-intl"
import { Globe, Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function NavButtons() {
  const t = useTranslations("Nav")
  const locale = useLocale()
  const navItems = [
    { title: t("0.title"), href: "/" },
    {
      title: t("1.title"),
      subitems: [
        { title: t("1.subitems.0"), href: "/services/building-brands", mood: 1 },
        { title: t("1.subitems.1"), href: "/services/software-engineering", mood: 1 },
        { title: t("1.subitems.2"), href: "/services/staff-augmentation", mood: 2 },
        { title: t("1.subitems.3"), href: "/services/soft-landing", mood: 2 },
      ],
    },
    {
      title: t("2.title"),
      subitems: [
        { title: t("2.subitems.0"), href: "/portfolio/building-brands-and-software-engineering", mood: 1 },
        { title: t("2.subitems.1"), href: "/portfolio/staff-augmentation-and-soft-landing", mood: 2 },
      ],
    },
    { title: t("3.title"), href: "/contact" },
  ]

  return (
    <>
      {/* ✅ Desktop Menu */}
      <div className="hidden md:flex">
        <NavigationMenu viewport={false} className="text-primary">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.subitems ? (
                  <>
                    <NavigationMenuTrigger className="bg-transparent capitalize">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-2 w-[150px]">
                        {item.subitems.map((subitem) => (
                          <li className="relative group" key={subitem.title}>
                            <ListItem href={subitem.href} title={subitem.title} className="pl-4" />
                            <span
                              className={`
                                absolute inset-0 right-[95%] transition-all duration-300
                                ${subitem.mood === 1 ? "bg-primary" : "bg-secondary"}
                                group-hover:right-[90%]
                              `}
                            />
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    asChild
                    className={`
                      ${navigationMenuTriggerStyle()}
                      ${item.href === "/contact" ? "bg-primary text-secondary" : ""}
                    `}>
                    <Link href={item.href}>{item.title}</Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem className="ml-2">
              <Link href={locale === "en" ? "/ar" : "/en"} className="flex items-center gap-2">
                <Globe />
                <div>{locale === "en" ? "Ar" : "En"}</div>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* ✅ Mobile Menu */}
      <div className="flex md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2">
              <Menu className="h-6 w-6 text-primary" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) =>
                item.subitems ? (
                  <div key={item.title}>
                    <div className="font-semibold">{item.title}</div>
                    <ul className="ml-4 mt-2 space-y-2">
                      {item.subitems.map((subitem) => (
                        <li key={subitem.title}>
                          <Link href={subitem.href} className="block py-1">
                            {subitem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link key={item.title} href={item.href} className="font-semibold">
                    {item.title}
                  </Link>
                )
              )}
              <Link href={locale === "en" ? "/ar" : "/en"} className="flex items-center gap-2 mt-4">
                <Globe />
                <div>{locale === "en" ? "Ar" : "En"}</div>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}

function ListItem({
  title,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} className="block p-2 rounded hover:bg-gray-100">
          <div className="text-sm font-medium">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
