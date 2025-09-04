"use client"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Link, usePathname } from "@/i18n/navigation"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react"

export function SiteHeader() {
  const path = usePathname();
  const paths = path.split("/");
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb>
          <BreadcrumbList>
            {paths
              .filter((p) => p) // remove empty segments
              .map((segment, index, arr) => {
                const href = "/" + arr.slice(0, index + 1).join("/");
                const isLast = index === arr.length - 1;
                if (href === "/admin") return null;
                return (
                  <React.Fragment key={href}>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link
                          className="capitalize"
                          href={href}
                          aria-current={isLast ? "page" : undefined}
                        >
                          {segment.replaceAll("-", " ")}
                        </Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    {!isLast && <BreadcrumbSeparator />}
                  </React.Fragment>
                );
              })}
          </BreadcrumbList>
        </Breadcrumb>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="default" asChild size="sm" className="hidden sm:flex !h-8 capitalize">
            <Link
              href="/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Visit Website
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
