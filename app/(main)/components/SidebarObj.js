"use client";

import React from "react";
import {Avatar, Button, ScrollShadow, Spacer, Tooltip} from "@nextui-org/react";
import {Icon} from "@iconify/react";

import {AcmeLogo} from "./acme";
import {sectionItemsWithTeams} from "./sidebar-items";
import {cn} from "./cn";
import {useMediaQuery} from "usehooks-ts";


import Sidebar from "./sidebar";

/**
 *  This example requires installing the `usehooks-ts` package:
 * `npm install usehooks-ts`
 *
 * import {useMediaQuery} from "usehooks-ts";
 *
 * 💡 TIP: You can use the usePathname hook from Next.js App Router to get the current pathname
 * and use it as the active key for the Sidebar component.
 *
 * ```tsxAC
 * import {usePathname} from "next/navigation";
 *
 * const pathname = usePathname();
 * const currentPath = pathname.split("/")?.[1]
 *
 * <Sidebar defaultSelectedKey="home" selectedKeys={[currentPath]} />
 * ```
 */
export default function Component({children}) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const isCompact = isCollapsed || isMobile;

  const onToggle = React.useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  return (
    <div className="flex h-dvh w-full">
      <div
        className={cn(
          "relative flex h-full w-72 flex-col !border-r-small border-divider p-6 transition-width bg-[#eee] font-bold text-white",
          {
            "w-16 items-center px-2 py-6": isCompact,
          },
        )}
      >
        <div
          className={cn(
            "flex items-center gap-3 px-3",

            {
              "justify-center gap-0": isCompact,
            },
          )}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
            <AcmeLogo className="text-background" />
          </div>
          <span
            className={cn("text-small font-bold uppercase opacity-100 text-black", {
              "w-0 opacity-0": isCompact,
            })}
          >
            Acme
          </span>
        </div>
        <Spacer y={8} />
        
        <ScrollShadow className="-mr-6 h-full max-h-full py-6 pr-6">
          <Sidebar defaultSelectedKey="home" isCompact={isCompact} items={sectionItemsWithTeams} />
        </ScrollShadow>
        <Spacer y={2} />
        <div
          className={cn("mt-auto flex flex-col", {
            "items-center": isCompact,
          })}
        >
          <Tooltip content="Help & Feedback" isDisabled={!isCompact} placement="right">
            
          </Tooltip>
          <Tooltip content="Log Out" isDisabled={!isCompact} placement="right">
            <Button
              className={cn("justify-start text-default-500 data-[hover=true]:text-foreground", {
                "justify-center": isCompact,
              })}
              isIconOnly={isCompact}
              startContent={
                isCompact ? null : (
                  <Icon
                    className="flex-none rotate-180 text-default-500"
                    icon="solar:minus-circle-line-duotone"
                    width={24}
                  />
                )
              }
              variant="light"
            >
              {isCompact ? (
                <Icon
                  className="rotate-180 text-default-500"
                  icon="solar:minus-circle-line-duotone"
                  width={24}
                />
              ) : (
                "Log Out"
              )}
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="w-full flex-1 flex-col p-4">
        <header className="flex items-center gap-3 rounded-medium border-small border-divider p-4">
          <Button isIconOnly size="sm" variant="light" onPress={onToggle}>
            <Icon
              className="text-default-500"
              height={24}
              icon="solar:sidebar-minimalistic-outline"
              width={24}
            />
          </Button>
          <h2 className="text-medium font-medium text-default-700">Overview</h2>
        </header>
        <main className="mt-4 h-full w-full overflow-visible">
          <div className="flex h-[90%] w-full flex-col gap-4 rounded-medium border-small border-divider">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
