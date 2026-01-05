"use client";
import { cn } from "@/lib/utils";

export const HeaderBgCover = ({ children, className }) => {
  return (
    <div className="relative group/cover inline-block dark:bg-neutral-900 bg-neutral-100 px-2 py-2 rounded-sm">
      <span
        className={cn(
          "dark:text-white inline-block text-neutral-900 relative z-20 duration-200",
          className
        )}
      >
        {children}
      </span>
      <CircleIcon className="absolute -right-[2px] -top-[2px]" />
      <CircleIcon className="absolute -bottom-[2px] -right-[2px]" delay={0.4} />
      <CircleIcon className="absolute -left-[2px] -top-[2px]" delay={0.8} />
      <CircleIcon className="absolute -bottom-[2px] -left-[2px]" delay={1.6} />
    </div>
  );
};

export const CircleIcon = ({ className, delay }) => {
  return (
    <div
      className={cn(
        `pointer-events-none select-none  h-2 w-2 rounded-full bg-neutral-600 dark:bg-white opacity-20 `,
        className
      )}
    ></div>
  );
};
