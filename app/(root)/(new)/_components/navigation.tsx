"use-client"

// import {cn} from "@/lib/utils";
import {cn} from "../../../../lib/utils"
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { ElementRef, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import Item from "./item";
import { IconHome2, IconGlobeFilled, IconTrendingUp,  IconCategory, IconArticleFilledFilled } from '@tabler/icons-react';
const Navigation = () => {
  const pathName = usePathname();
  const params = useParams();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);
  const router = useRouter();
  const navigationData = [
    {
      category : "Documents",
      items : [
        {
          label : "Home",
          icon : IconHome2,
          href : "/",
        },
        {
          label : "News",
          icon : IconArticleFilledFilled,
          href : "/news"
        },
        {
          label : "Sources",
          icon : IconGlobeFilled,
          href : "/fe/sources"
        },
        {
          label : "Category",
          icon :  IconCategory,
          href : "/fe/category"
        },
        {
          label : "Trending",
          icon : IconTrendingUp,
          href : "/fe/trending"
        }
      ]
    }
  ];

  const[activeItem, setActiveItem] = useState<string>("/");
  const handleItemClick = (label : string, href : string) => {
    setActiveItem(label);
    router.push(href)
  }
  useEffect(() => {
     if(isMobile){
       collapse()
     }
     else{
      resetWidth()
     }
  }, [isMobile])

  useEffect(() => {
     if(isMobile){
      collapse()
     }
  }, [pathName, isMobile])
  const resetWidth = () => {
    if(sidebarRef.current && navbarRef.current){
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = isMobile ? "100%" : "240px";
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "0" : "calc(100% - 240px)"
      );
      navbarRef.current.style.setProperty("left", isMobile ? "100%" : "240px")
      setTimeout(() => setIsResetting(false), 300)
    }
  }
  const collapse = () => {
    if(sidebarRef.current && navbarRef.current){
      setIsCollapsed(true);
      setIsResetting(true);
    }
  }
  return (
    <aside
    ref = {sidebarRef}
    className={cn(
      "group/sidebar relative z-[99999] flex h-screen w-60 flex-col overflow-y-hidden bg-gray-300 ",
      isResetting && "transition-all duration-300 ease-in-out",
      isMobile && "w-0"
    )}
    >
    <div className="mr-3 px-2">
          {navigationData.map((categoryData) => (
            <div key={categoryData.category}>
              <div className="py-2" key={categoryData.category}>
                <p className="text-primary/70 pl-[10px] text-xs font-extrabold uppercase">
                  {categoryData.category}
                </p>
                <div className="mt-4 flex flex-col">
                  {categoryData.items.map((item) => (
                    <Item
                      key={item.label}
                      onClick={() => handleItemClick(item.label, item.href)}
                      label={item.label}
                      icon={item.icon}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
    </aside>
  )
}

export default Navigation