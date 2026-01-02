
"use client"
import * as React from "react"
import Link from "next/link"
import { ChevronDownIcon, CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { TrendingUp } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]
export function NavigationMenuDemo() {
  return (
    <NavigationMenu viewport={false} >
      <div className="relative w-full border-b border-white/10  flex items-center h-[52px] justify-center mt-5">
        <div className=" 
          whitespace-nowrap
          touch-pan-x
          scroll-smooth
          flex items-center justify-center h-[52px]
        "
        >
   
        <NavigationMenuList
          className="
          flex-nowrap
          items-center
          min-w-max
          gap-2
          px-4
          flex h-[52px] justify-center
        "
        >

<NavigationMenuItem>
  <NavigationMenuLink
    asChild
    className={cn(navigationMenuTriggerStyle(), "text-white/50 text-[14px] md:text-[15px] font-md tracking-tight")}
  >
    <Link href="/">
      <span className="flex items-center gap-1.5">
        <TrendingUp className="h-4 w-4 text-white text-2xl" />
        <span>Trending</span>
      </span>
    </Link>
  </NavigationMenuLink>
</NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-white/50 text-[14px] md:text-[15px] font-md tracking-tight")}>
            <Link href="/breaking ">Breaking</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-white/50 text-[14px] md:text-[15px] font-md tracking-tight")}>
            <Link href="/new">New</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        |
        <NavigationMenuItem>
        <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-white/50 text-[14px] md:text-[15px] font-md tracking-tight")}>
            <Link href="/politics">Politics</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-white/50 text-[14px] md:text-[15px] font-md tracking-tight")}>
            <Link href="/sports">Sports</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-white/50 text-[14px] md:text-[15px] font-md tracking-tight")}>
            <Link href="/crypto">Crypto</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-white/50 text-[14px] md:text-[15px] font-md tracking-tight")}>
            <Link href="/finance">Finance</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-white/50 text-[14px] md:text-[15px] font-md tracking-tight")}>
            <Link href="/geopolitics">Geopolitics</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-white/50 text-[14px] md:text-[15px] font-md tracking-tight")}>
            <Link href="/earnings">Earnings</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-white/50 text-[14px] md:text-[15px] font-md tracking-tight")}>
            <Link href="/tech">Tech</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(),"text-white/50 text-[14px] md:text-[15px] font-md tracking-tight")}>
            <Link href="/culture">Culture</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-white/50 text-[14px] md:text-[15px] font-md tracking-tight")}>
            <Link href="/world">World</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(),"text-white/50 text-[14px] md:text-[15px] font-md tracking-tight")}>
            <Link href="/economy">Economy</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-white/50 text-[14px] md:text-[15px] font-md tracking-tight")}>
            <Link href="/trump">Trump</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-white/50 text-[14px] md:text-[15px] font-md tracking-tight")}>
            <Link href="/elections">Elections</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-white/50 text-[14px] md:text-[15px] font-md tracking-tight")}>
            <Link href="/mentions">Mentions</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        
       
        <NavigationMenuItem>
          <NavigationMenuTrigger className={cn( "text-white/50 text-[14px] md:text-[15px] font-md tracking-tight")}>More</NavigationMenuTrigger>
          
          <NavigationMenuContent>
            <ul className=" gap-2 md:w-[120px] lg:w-[120px] ">
              
              <ListItem href="/activity" title="Activity">
              </ListItem>
              <ListItem href="/leaderboard" title="Leaderboard">
              </ListItem>
              <ListItem href="/dashboards" title="Dashboards">
              </ListItem>
              <ListItem href="/rewards" title="Rewards">
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

          
        
      </NavigationMenuList>
      </div></div>
    </NavigationMenu>
    
  )
}
function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
