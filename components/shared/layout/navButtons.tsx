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
import { useTranslations } from "next-intl"


export default function NavButtons() {
  const t = useTranslations("Nav")
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
                      <li className="relative group-x">
                        <ListItem
                          key={subitem.title}
                          href={subitem.href}
                          title={subitem.title}
                          className="pl-4"
                        />
                        <span
                          className={`
      absolute inset-0 right-[95%] transition-all duration-300
      ${subitem.mood === 1 ? "bg-primary" : "bg-secondary"}
      group-x-hover:right-[90%]
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
      </NavigationMenuList>
    </NavigationMenu>
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
