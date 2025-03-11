import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <SwitchPrimitive.Root
      checked={isChecked}
      onCheckedChange={setIsChecked}
      data-slot="switch"
      className={cn(
        "relative cursor-pointer peer focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-8 w-20 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        isChecked ? "bg-white" : "bg-darkGray",
        className
      )}
      {...props}
    >
      {isChecked ? (
        <span className="absolute left-3 text-sm font-medium text-darkGray">
          Dark
        </span>
      ) : (
        <span className="absolute right-3 text-sm font-medium text-white">
          Light
        </span>
      )}

      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "cursor-pointer bg-background pointer-events-none block size-[26px] rounded-full ring-0 shadow-lg transition-transform",
          isChecked
            ? "translate-x-[50px] bg-primary border-white"
            : "translate-x-[2px] bg-primary border-white"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
