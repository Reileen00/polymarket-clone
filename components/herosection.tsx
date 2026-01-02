"use client";

import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link"
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
function DropdownOption({
  label,
  value,
  selected,
  onSelect,
}: {
  label: string;
  value: string;
  selected: string;
  onSelect: (value: string) => void;
}) {
  const isSelected = value === selected;

  return (
    <DropdownMenuItem
      onClick={() => onSelect(value)}
      className="flex items-center justify-between focus:bg-[hsl(210,25%,30%)]"
    >
      <span>{label}</span>

      {isSelected && (
        <span className="h-2 w-2 rounded-full bg-white" />
      )}
    </DropdownMenuItem>
  );
}

export default function HeroPage() {
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("24hr Volume");
  const [frequency, setFrequency] = useState("All");
  const [status, setStatus] = useState("Active");

  type OpenDropdown = "sort" | "frequency" | "status" | null;

  const [openDropdown, setOpenDropdown] = useState<OpenDropdown>(null);

  return (
    <div className=" mt-5 hidden md:block w-[1200px] ">
      {/* Search + Filter Button */}
      <div className="flex items-center gap-2">
        {/* Search Input */}
        <div className="relative w-[290px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
          <Input
            type="search"
            placeholder="Search markets"
            className="pl-9"
          />
        </div>

        {/* Filter Button (OUTSIDE search) */}
        <Button
          variant="polymarket"
          size="icon"
          onClick={() => setShowFilters((prev) => !prev)}
        >
          <SlidersHorizontal className="h-4 w-4" />
        </Button>
        <div className="text-white/50">|</div>
        <div>
        <NavigationMenu viewport={false} >
      <div className="relative w-full  flex items-center h-[52px] justify-center ">
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
        
       
        
          
        
      </NavigationMenuList>
      </div></div>
    </NavigationMenu>
    
        </div>

      </div>
      
      {/* Expandable Filters Row */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          showFilters ? "max-h-24 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex gap-3">
          {/* Category Dropdown */}
          <DropdownMenu
            open={openDropdown === "sort"}
            onOpenChange={(open) =>
              setOpenDropdown(open ? "sort" : null)
            }
          >
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 rounded-full bg-[hsl(210,25%,25%)] px-4 py-1.5 text-sm text-white hover:bg-[hsl(210,25%,30%)]">
                <div className="text-white/50">Sort by:</div>
                <div className="text-white">{sortBy}</div>
                <ChevronDown className="h-3 w-3 opacity-70 text-white" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="start"
              className="mt-2 min-w-[180px] rounded-md border border-white/10 bg-[hsl(213,33%,17%)] text-white shadow-lg"
            >
              {[
                "24hr Volume",
                "Total Volume",
                "Liquidity",
                "Newest",
                "Ending Soon",
                "Competitive",
              ].map((option) => (
                <DropdownOption
                  key={option}
                  label={option}
                  value={option}
                  selected={sortBy}
                  onSelect={(value) => {
                    setSortBy(value);
                    setOpenDropdown(null); // close after select
                  }}
                />
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Status Dropdown */}
          <DropdownMenu
            open={openDropdown === "frequency"}
            onOpenChange={(open) =>
              setOpenDropdown(open ? "frequency" : null)
            }
          >
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 rounded-full bg-[hsl(210,25%,25%)] px-4 py-1.5 text-sm text-white hover:bg-[hsl(210,25%,30%)]">
                <div className="text-white/50">Frequency:</div>
                <div className="text-white">{frequency}</div>
                <ChevronDown className="h-3 w-3 opacity-70 text-white" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="start"
              className="mt-2 min-w-[160px] rounded-md border border-white/10 bg-[hsl(213,33%,17%)] text-white shadow-lg"
            >
              {["Daily", "Weekly", "Monthly", "All"].map((option) => (
                <DropdownOption
                  key={option}
                  label={option}
                  value={option}
                  selected={frequency}
                  onSelect={(value) => {
                    setFrequency(value);
                    setOpenDropdown(null);
                  }}
                />
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Sort Dropdown */}
          <DropdownMenu
            open={openDropdown === "status"}
            onOpenChange={(open) =>
              setOpenDropdown(open ? "status" : null)
            }
          >
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 rounded-full bg-[hsl(210,25%,25%)] px-4 py-1.5 text-sm hover:bg-[hsl(210,25%,30%)]">
                <div className="text-white/50">Status:</div>
                <div className="text-white">{status}</div>
                <ChevronDown className="h-3 w-3 opacity-70 text-white" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="start"
              className="mt-2 min-w-[140px] rounded-md border border-white/10 bg-[hsl(213,33%,17%)] text-white shadow-lg"
            >
              {["Active", "Resolved"].map((option) => (
                <DropdownOption
                  key={option}
                  label={option}
                  value={option}
                  selected={status}
                  onSelect={(value) => {
                    setStatus(value);
                    setOpenDropdown(null);
                  }}
                />
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/*The View-only button*/}
     
      
    </div>
  );
}
